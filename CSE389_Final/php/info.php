<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css"  />
  </head>
    <body>
        <?php
            $name = filter_input(INPUT_POST,'name');
            $email = filter_input(INPUT_POST,'email');
            
            if(!empty($name)){
                if(!empty($email)){
                    $host = "localhost";
                    $dbusername = "root";
                    $dbpassword = "";
                    $dbname = "aSignup";

                    $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

                    if(mysqli_connect_error()){
                        die('Connect Error ('.mysqli_connect_errno().')'.mysqli_connect_error());
                    }else{
                        $sql = "INSERT INTO info (name,email) values ('$name','$email')";
                        if($conn->query($sql)){
                            echo "<div class='cc'>Success</div>";
                            
                        }else{
                            echo "Error: ".$sql."<br>".$conn->error;
                        }
                        $conn->close();
                }
            }else{
                echo "Password should not be empty";
                    die();
            }else{
                                echo "Username should not be empty";
                die();    
                }

        ?>
    </body>
</html>