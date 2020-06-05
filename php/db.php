<?
//db.php
    $host = "localhost";
    $user = "originalymk";//dothome id
    $pw = "ymkb0329^^";//dothome pw
    $dbName = "originalymk";
    $dbConnect = mysqli_connect($host, $user, $pw, $dbName);

    $dbcon = new mysqli($host, $user, $pw, $dbName);

    function mq($sql){ //쿼리명령문함수
        global $dbcon;
        return $dbcon->query($sql);
    }

?>
