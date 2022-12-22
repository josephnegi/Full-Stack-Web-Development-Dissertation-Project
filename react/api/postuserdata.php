<?php
$conn = mysqli_connect("localhost", "root", "", "react-prototype");
if(!$conn) {
	die("connection failed");
}
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: *");   

$uid = json_decode (file_get_contents('php://input'), true);
//echo $uid[0];
//var_dump($uid);
$userid = $uid[0];  

$data= array();
$result = mysqli_query($conn, "SELECT * FROM users WHERE id like '$userid'"); 
while($r = mysqli_fetch_assoc($result)){
    $data[] = $r;
}
echo json_encode($data);
?>