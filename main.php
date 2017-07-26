<?php 
	header("Content-type:text/html; charset:utf-8");
	session_start();

	$servername="localhost";
	$username="root";
	$password="clay";
	$datebase="AVE";
	$connect=mysqli_connect($servername,$username,$password,$datebase);
	if(!$connect){
		die("Error : ".mysqli_connect_errno()." : ".mysqli_connect_error());
	}
	// $_SESSION['user']=null;
	$arr = array('status'=>false,'error'=>null,'message'=>null);

	if($_GET['act']){
		switch($_GET['act']){
			case "signin":
				if($_POST['email']&&$_POST['password']){
					$sql="SELECT email,password FROM usernew WHERE email='".$_POST['email']."';";
					$result=mysqli_query($connect,$sql);
					if($result->num_rows){
						$row=mysqli_fetch_assoc($result);
						if(md5($_POST['password'])===$row['password']){
							$_SESSION['user']['email']=$_POST['email'];
							$arr['status']=true;
							echo json_encode($arr);
						}else{
							$arr['status']=false; $arr['error']="password"; $arr['message']="Your password was wrong...";
							echo json_encode($arr);
						}
					}else{
						$arr['status']=false; $arr['error']="email"; $arr['message']="This email isn't exist...";
						echo json_encode($arr);
					}
				}else{
					header('Location:aveFront.html'); 
				}
				break;

			case "register":
			 	if($_POST['email']&&$_POST['password']){
			 		$sql="INSERT usernew(email,password,datetime) VALUE('".$_POST['email']."','".md5($_POST['password'])."'".",now());";
					$result=mysqli_query($connect,$sql);
					if(mysqli_errno($connect)!=0){
						$err=mysqlEno(mysqli_errno($connect));
						$arr['status']=false; $arr['error']="email"; $arr['message']=$err;
						echo json_encode($arr);
					}else{
						$arr['status']=true;
						echo json_encode($arr);
					}
				 }else{
					header('Location:aveFront.html');
				}
				break;

			case "checklogin":
				if($_SESSION['user']!=null){
					$arr['status']=true;
					echo json_encode($arr);
				}else{
					$arr['status']=false;
					echo json_encode($arr);
				}
				break;	

			case "logout":
				$_SESSION['user']=null;
				header('Location:aveFront.html');
				break;

			default:
				header('Location:aveFront.html'); 
				break;
		}
	}

	function mysqlEno($eno){
		switch ($eno) {
			case 1062:
				return "This email has been registered";
				break;

			default:
				return $eno;
				break;
		}

	}
 ?>