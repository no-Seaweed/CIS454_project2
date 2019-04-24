<?php
include('check.php');
if(isset($_SESSION['login_user'])){
    header("location: index1.php");
}
?>
<html lang="en">
<head>
    <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Event_info</title>
      <link href="https://fonts.googleapis.com/css?family=Black+Han+Sans" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" type="text/css" href="../css/signup.css">
</head>
<body>
    <div class="section">
        <div class="title">Welcome to Mapme!</div>
        <form method="POST" action="">
            <div class="enter">
            <input type="text" name="username" id="name" class="inp" placeholder=" Username">
            </div>
            <br><br> 
            <div class="enter">
            <input id="password" type="password" name="password" class="inp" placeholder=" Password">
            </div>
            <br><br>
            <div class="sub">
                <input name = "submit" type="submit" value="Go">
            </div>
            <div class="sub2">
                <a href="../frontpage.html">Back</a>
            </div>
            <span><?php echo $error; ?></span>
        </form>
       
    </div>
</body>