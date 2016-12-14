function initMap() {
  var polvos = {lat: -12.061949, lng:  -77.034278};
  var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: polvos
    });
           
  
//WA LOK
  var WaLok = '<p>Wa Lok - Jr Paruro 878 - Recomendado por El Tromercio</p></br><p>Lunes a Sabado desde 10 AM</p>'
  var infoWaLok = new google.maps.InfoWindow({
    content: WaLok
  });
  var marcadorWaLok = new google.maps.Marker({
      position: {lat: -12.0521127, lng: -77.0272456},
      title: 'Wa Lok',
      map:map 
    });
  marcadorWaLok.addListener('click', function() {
    infoWaLok.open(map,marcadorWaLok);
  });


}

