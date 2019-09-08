#PowerShell.exe -ExecutionPolicy Bypass -File .\populate\getUnown.ps1

$destination = "./src/assets/unown/"
$supportedLetters = "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "em", "qm" #!, ?

if (-Not(Test-Path -Path $destination)) {
    mkdir $destination
}

$client = new-object System.Net.WebClient
Foreach ($letter in $supportedLetters) {
    $imageSrc = "https://img.pokemondb.net/sprites/heartgold-soulsilver/normal/unown-" + $letter + ".png"
    $imageDst = $destination + $letter + ".png"

    if (-Not(Test-Path -Path $imageDst)) {
        Write-Output("Downloading " + $imageSrc + " into " + $imageDst)
        $client.DownloadFile($imageSrc, $imageDst)
    }
}

Write-Output("Downloading finished.")