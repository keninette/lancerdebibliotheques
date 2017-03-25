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
    </body>
</html>
 
<script src="bower_components/jquery/dist/jquery.js"></script>
<script src="js/kbj_grid/draw.js"></script>