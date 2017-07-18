<?php 
	$servername="localhost";
	$username="root";
	$password="clay";
	$datebase="AVE";
	$connect=mysqli_connect($servername,$username,$password,$datebase);
	if(!$connect){
		die("Error : ".mysqli_connect_errno()." : ".mysqli_connect_error());
	}
	$sql="INSERT usernew(email,password,datetime) value('2240957223@qq.com','".md5('qw123123')."',now());";
	$result=mysqli_query($connect,$sql);
 	echo mysqli_errno($connect);
 ?>