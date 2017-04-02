<?php

//autoload all vendors
require_once __DIR__ . '/vendor/autoload.php';

//// Create a new PDF Object
//$mpdf = new \mPDF();
//$mpdf->debug = true;
//$mpdf->useActiveForms = true;
//
//$htmlContent = file_get_contents('templates/basic_character_sheet.html');
//$mpdf->WriteHTML($htmlContent);
//
//$mpdf->Output('test42.pdf');

?>

<!DOCTYPE html>
<html>
    <body>
        <h1>Plop</h1>
        <canvas id="grid" width="500" height="300" style="border:1px solid #000000;">
            Your browser does not support the HTML5 canvas tag.
        </canvas>
        <div>
            <div class="dragndrop" style="background-color: yellow; width: 60px; height : 35px;"></div>
            <div class="dragndrop" style="background-color: red; width: 35px; height : 10px;"></div>
        </div>
    </body>
</html>
 
<script src="bower_components/jquery/dist/jquery.js"></script>
<script src="node_modules/interactjs/dist/interact.js"></script>
<script src="js/functions/grid.function.js"></script>
<script src="js/grid.js"></script>