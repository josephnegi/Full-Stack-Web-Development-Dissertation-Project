<?php
$conn = mysqli_connect("localhost", "root", "", "react-prototype");
if(!$conn) {
	die("connection failed");
}
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: *");   

//$user = json_decode (file_get_contents('php://input'), true);
$data= array();
$result = mysqli_query($conn, "SELECT * FROM images"); 
while($r = mysqli_fetch_row($result)){
    $data[] = $r;
}
echo json_encode($data);
?>