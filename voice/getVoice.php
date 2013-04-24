<?php
$word = $_GET['word'];
$url = "http://bs.baidu.com/handian/$word";

$file = file_get_contents($url);
//echo ($file);
$localFile = fopen("../mp3/".$word, "w");
fwrite($localFile, $file);
echo "OK";
