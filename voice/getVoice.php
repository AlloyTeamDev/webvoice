<?php
$word = $_GET['word'];
$url = "http://bs.baidu.com/handian/$word";

$file = file($url);
$localFile = fopen($word, "w");
fwrite($localFile, $file);
