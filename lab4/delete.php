<?php 
if(isset($_GET["id"])){
    $id = $_GET["id"];

    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "student_registration";

    $connection = new mysqli($servername, $username, $password, $database);

    $sql = "DELETE FROM student WHERE id=$id";
    $connection->query($sql);
}
header("location: /lab4/index.php");
exit;
?>