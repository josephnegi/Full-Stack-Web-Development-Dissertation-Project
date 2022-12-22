<?php
$conn = mysqli_connect("localhost", "root", "", "react-prototype");
if(!$conn) {
	die("connection failed");
}
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: *");   

$cat = json_decode (file_get_contents('php://input'), true);
//echo $uid[0];
//var_dump($uid);
$category = $cat[0];  

$data= array();
$result = mysqli_query($conn, "SELECT * FROM images WHERE category like '$category'"); 
while($r = mysqli_fetch_row($result)){
    $data[] = $r;
}
echo json_encode($data);
?>