<?php
//include('../db.php');
$conn = mysqli_connect("localhost", "root", "", "react-prototype");
if(!$conn) {
	die("connection failed");
}
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: *");   

//include('DbConnect.php');
//$objDb = new DbConnect;
//$conn = $objDb->connect();
//var_dump($conn);

$user = json_decode (file_get_contents('php://input'), true);
//print_r($user['name']);
//If both, the username and password are passed
if(isset($user['name']) && isset($user['password'])) {
    
	//storing the user entered values into variables
	$pwd = $user['password']; 
	$name = $user['name'];
    //echo $pwd;echo $name;
	//Getting the informatio from the database to verify login details
	$result = mysqli_query($conn, "SELECT * FROM users WHERE username like '$name'"); 
    //var_dump($result);
    
	//$val = mysqli_fetch_assoc($result);
	while ($r = mysqli_fetch_row($result)){
			//print_r($r);
		$c=0;
		//if the credentials are correct, closing the database connection and redirecting to the inbox
		if ($r[3] == $user['password'] && $r[1] == $user['name']) {
			
			//assigning the customer id and name to session variables
			//$_SESSION['CustomerId'] = $val['Id'];
			//$_SESSION['CustomerName'] = $val['Name'];

			//closing the connection with the database
			//mysqli_free_result($result);
			//mysqli_close($conn);

			//redirecting the user to the main inbox
			//header("Location: inbox.php");
			//exit();
			$c=$r[0];
		} else //displaying error message incase of inappropriate password or username
		echo 0;
        
    
    }echo $c;
}

?>