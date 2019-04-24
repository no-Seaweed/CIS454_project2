<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="style.php" />
  </head>
    <body>
        <?php
            $username = filter_input(INPUT_POST,'username');
            $password = filter_input(INPUT_POST,'password');
            if(!empty($username)){
                if(!empty($password)){
                    $host = "localhost";
                    $dbusername = "root";
                    $dbpassword = "";
                    $dbname = "signup";

                    $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

                    if(mysqli_connect_error()){
                        die('Connect Error ('.mysqli_connect_errno().')'.mysqli_connect_error());
                    }else{
                        $sql = "INSERT INTO account (username, password) values ('$username','$password')";
                        if($conn->query($sql)){
                            echo "New record is inserted sucessfully";
                            echo '<a href="event_info.html">Go back</a>';
                        }else{
                            echo "Error: ".$sql."<br>".$conn->error;
                        }
                        $conn->close();
                    }

                }else{
                    echo "Password should not be empty";
                    die();
                }
            }else{
                echo "Username should not be empty";
                die();
            }
        ?>
    </body>
</html>