<?php
include('session.php');

if(!isset($_SESSION['login_user'])){
header("location: signin.php");
}
?>


<html lang="en">
<head>
    <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Main_page</title>
      <link href="https://fonts.googleapis.com/css?family=Black+Han+Sans" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" type="text/css" href="../css/main.css">
</head>
<body>
    <div class="space" style="height:2.5rem;"></div>
    <div class="Search">  
        <div class="Search_class">
            <form>
                <input type = "text" class = "Search_bar" placeholder=" New BBQ is Open">
                <i class="fa fa-search" aria-hidden="true"></i>
            </form>
        </div>
    </div>  
    <div class="session">
        <div class="block">
            <b class="welcome" id="welcome">Welcome: <i><?php echo $login_session; ?></i></b>
            <b class="logout" id="logout"><a href="logout.php">Logout</a></b>
        </div>
        <div id="map"></div>
    </div>    
    <script src="../js/map.js" type="text/javascript"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBmYUQs9_AjHK8HL7d_czeIbP3PPH5FCgg&callback=initMap"
    async defer></script>
        <div class="bottom_nav">
            <div class="options">
                <div class="redirect">
                <div class="image"><img src="../pics/%E2%86%B3%20Icon.png" class = "star" /></div>
                <div class="title">Main</div>
                </div>
                <div class="redirect" href="../post.html">
                <div class="image"><img src="../pics/Icon.png" class = "star" /></div>
                <div class="title" style="color:#8E8E93">Post</div>
                </div>
                <div class="redirect">
                <div class="image"><img src="../pics/Icon.png" class = "star" /></div>
                <div class="title" style="color:#8E8E93">Club</div>
                </div>
                <div class="redirect">
                <div class="image"><img src="../pics/Icon.png" class = "star" /></div>
                <div class="title" style="color:#8E8E93">Memo</div>
                </div>
            </div>
        </div>
        <script src="../js/redirect.js" type="text/javascript"></script>
</body>
</html>