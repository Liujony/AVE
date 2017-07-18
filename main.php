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
	if($_POST['email']&&$_POST['password']){
		if($_GET['act']==='signin'){
			$sql="SELECT email,password FROM usernew WHERE email='".$_POST['email']."';";
			$result=mysqli_query($connect,$sql);
			if($result){
				$row=mysqli_fetch_assoc($result);
				if(md5($_POST['password'])===$row['password']){
					$_SESSION['user']['email']=$_POST['email'];
					echo "<script>
							alert('Sign In succeed!');
							location.href='SignInORRegister.html';
						</script>";
				}else{
					echo "
						<script>
							alert('Your password was wrong!');
							location.href='SignInORRegister.html';
						</script>";
				}
			}else{
				echo "
					<script>
						alert('This email isn't exist');
						location.href='SignInORRegister.html';
					</script>";
			}
		}elseif($_GET['act']==='register'){
			$sql="INSERT usernew(email,password,datetime) VALUE('".$_POST['email']."','".md5($_POST['password'])."'".",now());";
			$result=mysqli_query($connect,$sql);
			if(mysqli_errno($connect)!=0){
				$err=mysqlEno(mysqli_errno($connect));
				echo "
					<script>
						alert('$err');
						location.href='SignInORRegister.html';
					</script>";
			}else{
				echo "
					<script>
						alert('Register succeed');
						location.href='SignInORRegister.html';
					</script>";
			}
		}else{
			echo "
				<script>
					location.href='SignInORRegister.html';
				</script>";
		}
		
	}

	function mysqlEno($eno){
		switch ($eno) {
			case 1062:
				return "This email has been registered";
				break;
		}

	}
 ?>