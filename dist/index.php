<?php

$manifestJson = file_get_contents('./manifest.json');
$manifest = json_decode($manifestJson, true);
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
    
    <!-- Icons -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">

    <!-- Google Charts -->
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
        google.charts.load('current', {'packages':['corechart']});
    </script>

    <!-- Google Captcha -->
    <script src="https://www.google.com/recaptcha/api.js"></script>
    
    <script type="module" crossorigin src="/<?php echo $manifest['src/main.ts']['file'] ?>"></script>
    <link rel="stylesheet" href="/<?php echo $manifest['src/main.ts']['css'][0] ?>" />
  </head>
  <body>
    <div id="app_gnucash_component"></div>
    
  </body>
</html>
