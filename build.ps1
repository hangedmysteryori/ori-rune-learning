param([Parameter(Mandatory=$true)][string]$DocumentPath)

Add-Type -AssemblyName System.IO.Compression
$stream = [System.IO.File]::Open($DocumentPath, 'Open', 'Read', 'ReadWrite')
$archive = [System.IO.Compression.ZipArchive]::new($stream, 'Read')
try {
  $entry = $archive.GetEntry('word/document.xml')
  $reader = [System.IO.StreamReader]::new($entry.Open())
  try { $xml = [xml]$reader.ReadToEnd() } finally { $reader.Dispose() }
} finally {
  $archive.Dispose()
  $stream.Dispose()
}

$ns = [System.Xml.XmlNamespaceManager]::new($xml.NameTable)
$ns.AddNamespace('w', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main')
$lines = @($xml.SelectNodes('//w:p', $ns) | ForEach-Object {
  (($_.SelectNodes('.//w:t', $ns) | ForEach-Object { $_.'#text' }) -join '').Trim()
})
$symbolCodes = 0x16A0,0x16A2,0x16A6,0x16A8,0x16B1,0x16B2,0x16B7,0x16B9
$symbolCodes += 0x16BA,0x16BE,0x16C1,0x16C3,0x16C7,0x16C8,0x16C9,0x16CA
$symbolCodes += 0x16CF,0x16D2,0x16D6,0x16D7,0x16DA,0x16DC,0x16DE,0x16DF
$symbols = $symbolCodes | ForEach-Object { [char]$_ }
$slugs = 'fehu','uruz','thurisaz','ansuz','raidho','kenaz','gebo','wunjo'
$slugs += 'hagalaz','nauthiz','isa','jera','eihwaz','perthro','algiz','sowilo'
$slugs += 'tiwaz','berkana','ehwaz','mannaz','laguz','ingwaz','dagaz','othala'

function Value-After([string[]]$Block, [string]$Label) {
  $idx = [Array]::IndexOf($Block, $Label)
  if ($idx -lt 0) { return '' }
  for ($i = $idx + 1; $i -lt $Block.Count; $i++) {
    if ($Block[$i]) { return $Block[$i] }
  }
}

$runes = @()
for ($n = 1; $n -le 24; $n++) {
  $start = -1
  $end = $lines.Count
  for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match ('^' + $n + '[.] ')) { $start = $i; break }
  }
  if ($n -lt 24) {
    for ($i = $start + 1; $i -lt $lines.Count; $i++) {
      if ($lines[$i] -match ('^' + ($n + 1) + '[.] ')) { $end = $i; break }
    }
  } else {
    for ($i = $start + 1; $i -lt $lines.Count; $i++) {
      if ($lines[$i] -eq '## 五. 每日一符文') { $end = $i; break }
    }
  }
  $block = @($lines[$start..($end - 1)])
  $title = Value-After $block '符文名稱：'
  $keywordAt = [Array]::IndexOf($block, '核心關鍵字：')
  $summaryAt = [Array]::IndexOf($block, '一句話總結：')
  $keywords = @()
  for ($i = $keywordAt + 1; $i -lt $summaryAt; $i++) {
    if ($block[$i] -like '・*') { $keywords += $block[$i].Substring(1) }
  }
  $parts = $title -split '｜', 2
  $runes += [ordered]@{
    id = $n
    slug = $slugs[$n - 1]
    symbol = [string]$symbols[$n - 1]
    name = $parts[0].Trim()
    chineseName = $parts[1].Trim()
    keywords = $keywords
    summary = Value-After $block '一句話總結：'
    meaning = Value-After $block '核心含義：'
    brightMeaning = Value-After $block '正向／明亮解讀：'
    shadowMeaning = Value-After $block '負向／陰影解讀：'
    love = Value-After $block '感情中的含義：'
    advice = Value-After $block '給學習者的建議：'
  }
}

$json = $runes | ConvertTo-Json -Depth 5 -Compress
$output = 'window.RUNES = ' + $json + ';'
[System.IO.File]::WriteAllText((Join-Path (Get-Location) 'data.js'), $output, [System.Text.UTF8Encoding]::new($false))
