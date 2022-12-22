<?php
//db connection
$conn = mysqli_connect("localhost", "root", "", "react-prototype");
if(!$conn) {
	die("connection failed");
}
//echo 'hello';
/*
$result = mysqli_query($conn, "SELECT * FROM users"); 
    var_dump($result);

	//$val = mysqli_fetch_assoc($result);
	while($r = mysqli_fetch_row($result)){
		foreach($variable as $key => $value){
			echo $key;
			echo $value;
		}
		}
	
	
	//if the credentials are correct, closing the database connection and redirecting to the inbox
	if ($val['password'] == $user['password'] && $val['username'] == $user['username']) {
		
		//assigning the customer id and name to session variables
		//$_SESSION['CustomerId'] = $val['Id'];
		//$_SESSION['CustomerName'] = $val['Name'];

		//closing the connection with the database
		//mysqli_free_result($result);
		//mysqli_close($conn);

		//redirecting the user to the main inbox
		//header("Location: inbox.php");
		//exit();
        echo "success";
		*/
?>