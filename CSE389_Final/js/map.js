function initMap() {
    //initiate map

        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 43.0399089, lng: -76.1324457},
          zoom: 16,
          zoomControl: true,
          disableDefaultUI: true,
          zoomControl: false,
          styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        });
        var icon = [{
            url: '../pics/Ellipse_4.png',
            scaledSize: new google.maps.Size(60,60),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(0,0)
            },
            {
            url: '../pics/Ellipse_14.png',
            scaledSize: new google.maps.Size(60,60),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(0,0)
            },
            {
            url: '../pics/Ellipse_31.png',
            scaledSize: new google.maps.Size(40,40),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(0,0)
            }
        ]
    //series of markers
        var SaleMarkers = [
            {
            coords:{lat: 43.0399089, lng: -76.1324457},
            image:icon[0],
            content:'<h1>some notation goes here</h1>'
            },
            {
            coords:{lat: 43.0366496, lng: -76.1341085},
            image:icon[0],
            content:'<h1>some notation goes here</h1>'
           }
        ]
        
        var SpinMarkers = [
            {
            coords:{lat: 43.037659, lng: -76.134907},
            image:icon[1],
            content:'<h1>some notation goes here</h1>'
            }
        ]
        
        var EventMarkers = [
            {
            coords:{lat: 43.0354257, lng: -76.140964},
            image:icon[1],
            content:'<h1>some notation goes here</h1>'
            }
        ]
        
        var generalMarkers = [
            {
                coords:{lat: 43.0380994, lng: -76.1327453},
                image:icon[2], 
                content:'<h1>some notation goes here</h1>'
            },
            {
                coords:{lat: 43.0400993, lng: -76.1372352},
                image:icon[2], 
                content:'<h1>some notation goes here</h1>'
            }
        ]
        for(var i = 0; i < generalMarkers.length; i++){
                addMarker(generalMarkers[i]);
        }
    //functions to print markers        
        function filterSale(){
            for(var i = 0; i < SaleMarkers.length; i++){
                addMarker(SaleMarkers[i]);
            }
        }
        
        function filterSpin(){
            for(var i = 0; i < SpinMarkers.length; i++){
                addMarker(SpinMarkers[i]);
            }
        }
    
        function filterEvent(){
            for(var i = 0; i < EventMarkers.length; i++){
                addMarker(EventMarkers[i]);
            }
        }
        this.activateFilter = function(cls){
            if(document.getElementsByClassName(cls)[0].innerText=="Spin"){
                window.sale = null;
                window.event = null;
                filterSpin();
            }
            else if(document.getElementsByClassName(cls)[0].innerText=="Party")
                filterSale();
            else if(document.getElementsByClassName(cls)[0].innerText=="Event"){
                filterEvent();
            }else{
                filterSpin();
                filterSale();
                filterEvent();
            }
        } 
        
        function addMarker(props){
            var marker = new google.maps.Marker({
                position:props.coords,
                map: map,
                icon: props.image
            });
            
            if(props.iconImage){
                marker.setIcon(props.iconImage);
            }
            
            if(props.content){
                var infoWindow = new google.maps.InfoWindow({
                    content:'<h1>some notation goes here</h1>'
                });
        
                marker.addListener('click',function(){
                    //infoWindow.open(map,marker);
                    window.location.href = '../event_info.html';
                    
                }); 
            }
        }
    

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: 43.0366496,
              lng: -76.1341085
            };

            map.setCenter(pos);
              }, function() {
                handleLocationError(true, map.getCenter());
              });
            } else {
              // Browser doesn't support Geolocation
              handleLocationError(false, map.getCenter());
            }
        }

        
        function handleLocationError(browserHasGeolocation, pos) {
            console.log('Error: The Geolocation service failed.');
            }
          
