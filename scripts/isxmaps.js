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
      position: {lat: -12.052117, lng: -77.025065},
      title: 'Wa Lok',
      map:map 
    });
  marcadorWaLok.addListener('click', function() {
    infoWaLok.open(map,marcadorWaLok);
  });


//TITI
  var Titi = '<p>Titi - Av. Javier Prado Este 1212 - Recomendado por El Tromercio / Jerry Guevara</p></br><p>(80 Soles)</p>'
  var infoTiti = new google.maps.InfoWindow({
    content: Titi
  });
  var marcadorTiti = new google.maps.Marker({
      position: {lat:-12.090099, lng: -77.015693},
      title: 'Titi',
      map:map 
    });
  marcadorTiti.addListener('click', function() {
    infoTiti.open(map,marcadorTiti);
  });


//Chun Koc Sen
  var ChunKocSen = '<p>Chun Koc Sen - Jr Paruro 890 - Recomendado por El Tromercio / Jerry Guevara</p></br><p>Lunes - Domingo 9AM - 11PM - Platos de chancho y pato recomendado</p>'
  var infoChunKocSen = new google.maps.InfoWindow({
    content: ChunKocSen
  });
  var marcadorChunKocSen = new google.maps.Marker({
      position: {lat:-12.052091, lng:-77.025287},
      title: 'Chun Koc Sen',
      map:map 
    });
  marcadorChunKocSen.addListener('click', function() {
    infoChunKocSen.open(map,marcadorChunKocSen);
  });

//Ton Wa
  var TonWa = '<p>Ton Wa - Jr Huancavelica Centro de Lima - Recomendado por El Tromercio / Jerry Guevara</p></br><p>Sopa Wantan recomendado</p>'
  var infoTonWa = new google.maps.InfoWindow({
    content: TonWa
  });
  var marcadorTonWa = new google.maps.Marker({
      position: {lat:-12.043968, lng:-77.039142},
      title: 'Ton Wa',
      map:map 
    });
  marcadorTonWa.addListener('click', function() {
    infoTonWa.open(map,marcadorTonWa);
  });

//Choy Tac
  var ChoyTac = '<p>Choy Tac -  Avenida Benavides Surco 3801- Recomendado por Alvaro Meza</p></br><p>No es exageradamente caro, pero la calidad de la comida es superior.</p>'
  var infoChoyTac = new google.maps.InfoWindow({
    content: ChoyTac
  });
  var marcadorChoyTac = new google.maps.Marker({
      position: {lat:-12.128346, lng: -76.995953},
      title: 'Choy Tac',
      map:map 
    });
  marcadorChoyTac.addListener('click', function() {
    infoChoyTac.open(map,marcadorChoyTac);
  });  

//San Say Kay
  var SanSayKay = '<p>San Say Kay-  El Polo 300 Surco - Recomendado por Bruno MO</p></br><p>El tallar&iacute;n San Say Kay es delicioso</p>'
  var infoSanSayKay = new google.maps.InfoWindow({
    content: SanSayKay
  });
  var marcadorSanSayKay = new google.maps.Marker({
      position: {lat:-12.106784, lng: -76.973720},
      title: 'San Say Kay',
      map:map 
    });
  marcadorSanSayKay.addListener('click', function() {
    infoSanSayKay.open(map,marcadorSanSayKay);
  });  

//Hou Wha
  var HouWha = '<p>Chifa Hou Wha (De la T&iacute;a Rosita) - Carlos Tenaud 490, Miraflores - Recomendado por Bruno MO</p></br><p>Pedir Pollo Enrollado</p>'
  var infoHouWha = new google.maps.InfoWindow({
    content: HouWha
  });
  var marcadorHouWha = new google.maps.Marker({
      position: {lat:-12.108252, lng:-77.026969},
      title: 'Hou Wha',
      map:map 
    });
  marcadorHouWha.addListener('click', function() {
    infoHouWha.open(map,marcadorHouWha);
  });  

  //San Joy Lao
  var SanJoyLao = '<p>Chifa San Joy Lao - Jirón Ucayali 779, Lima - Recomendado por Diego Gutierrez</p></br><p>Pedir Cuy Achifado</p>'
  var infoSanJoyLao = new google.maps.InfoWindow({
    content: SanJoyLao
  });
  var marcadorSanJoyLao = new google.maps.Marker({
      position: {lat:-12.051251, lng:-77.025184},
      title: 'San Joy Lao',
      map:map 
    });
  marcadorSanJoyLao.addListener('click', function() {
    infoSanJoyLao.open(map,marcadorSanJoyLao);
  });  

  //Chifa Royal
  var Royal = '<p>Chifa Royal - Av. Guillermo Prescott 231, San Isidro - Recomendado por Rolando Muñoz</p></br><p>"Buen Buffet"</p>'
  var infoRoyal = new google.maps.InfoWindow({
    content: Royal
  });
  var marcadorRoyal = new google.maps.Marker({
      position: {lat:-12.091009, lng:-77.048000},
      title: 'Chifa Royal',
      map:map 
    });
  marcadorRoyal.addListener('click', function() {
    infoRoyal.open(map,marcadorRoyal);
  });  


  //Chifa Chung Tong
  var ChungTong = '<p>Chifa Chung Tong - Av. Alfredo Benavides 3590 Surco - Recomendado por Ricardo Francisco Quevedo Grimaldo</p></br><p>"Chifa 10/10"</p>'
  var infoChungTong = new google.maps.InfoWindow({
    content: ChungTong
  });
  var marcadorChungTong = new google.maps.Marker({
      position: {lat:-12.128890, lng:-76.998321},
      title: 'Chifa Chung Tong',
      map:map 
    });
  marcadorChungTong.addListener('click', function() {
    infoChungTong.open(map,marcadorChungTong);
  });  

  //Chifa Punkay
  var Punkay = '<p>Chifa Pun Kay - Av. Alfredo Benavides 1955, Miraflores - Recomendado por Oscar Soto</p></br><p>"Es el legendario chifa del chino Nazi. Es único entre todos, su sazón es salvaje y el chino te trata como a caca."</p>'
  var infoPunkay = new google.maps.InfoWindow({
    content: Punkay
  });
  var marcadorPunkay = new google.maps.Marker({
      position: {lat:-12.127051, lng:-77.012330},
      title: 'Chifa Pun Kay',
      map:map 
    });
  marcadorPunkay.addListener('click', function() {
    infoPunkay.open(map,marcadorPunkay);
  });  

  //Chifa Garden
  var Garden = '<p>Chifa Garden - Residencial San Felipe, Paseo Belaunde Terry 23, Jesús María - Recomendado por Oscar Soto</p></br><p>" Uno de los mejores chaufas de chancho de Lima."</p>'
  var infoGarden = new google.maps.InfoWindow({
    content: Garden
  });
  var marcadorGarden = new google.maps.Marker({
      position: {lat:-12.087312, lng:-77.053572},
      title: 'Chifa Garden',
      map:map 
    });
  marcadorGarden.addListener('click', function() {
    infoGarden.open(map,marcadorGarden);
  });  

  //Chifa Jumbo 
  var Jumbo = '<p>Chifa Jumbo - Av San Juan 785, San Juan de Miraflores - Recomendado por Cesar Uriel Mejia</p></br><p>"Los fines de semana hay cola, buena atenci&oacute;n."</p>'
  var infoJumbo = new google.maps.InfoWindow({
    content: Jumbo
  });
  var marcadorJumbo = new google.maps.Marker({
      position: {lat:-12.160435, lng:-76.973382},
      title: 'Chifa Jumbo',
      map:map 
    });
  marcadorJumbo.addListener('click', function() {
    infoJumbo.open(map,marcadorJumbo);
  });  

   //Chifa Capon 
  var Capon = '<p>Chifa Capon - Jir&oacute;n Leoncio Prado 662, Magdalena del Mar  - Recomendado por Mark Cancan</p></br><p>"Sirven taypa y baratito"</p>'
  var infoCapon = new google.maps.InfoWindow({
    content: Capon
  });
  var marcadorCapon = new google.maps.Marker({
      position: {lat:-12.092235, lng: -77.072897},
      title: 'Chifa Capon',
      map:map 
    });
  marcadorCapon.addListener('click', function() {
    infoCapon.open(map,marcadorCapon);
  });  

   //Chifa HUMAY 
  var humay = '<p>Chifa HUMAY - Jir&oacute;n Leoncio Prado 788, Magdalena del Mar  - Recomendado por Carlos Chambi </p></br><p>"Telefono 012630620"</p>'
  var infoHumay = new google.maps.InfoWindow({
    content: humay
  });
  var marcadorHumay = new google.maps.Marker({
      position: {lat:-12.090828, lng:-77.072413},
      title: 'Chifa Humay',
      map:map 
    });
  marcadorHumay.addListener('click', function() {
    infoHumay.open(map,marcadorHumay);
  });  

   //Chifa Arbol Grande 
  var arbolGrande = '<p>Chifa Arbol Grande - Calle Risso 177, Distrito de Lima  - Recomendado por McVicious Moya Salinas </p></br><p>"Iba con mi viejo siempre al salir de la chamba, el Taypa es buenazo!"</p>'
  var infoArbolGrande = new google.maps.InfoWindow({
    content: arbolGrande
  });
  var marcadorArbolGrande = new google.maps.Marker({
      position: {lat:-12.085681, lng:-77.034668},
      title: 'Chifa Arbol Grande',
      map:map 
    });
  marcadorArbolGrande.addListener('click', function() {
    infoArbolGrande.open(map,marcadorArbolGrande);
  });  

  //Chifa Lin
  var lin = '<p>Chifa Lin - Calle Pierola 490, Barranco  - Recomendado por Alvaro Meza </p></br><p>"...el chifa es muy bueno, no recuerdo su nombre, pero el precio es justo, la sopa wantan no sabe a agua o a simple caldo de pollo, el menu no es exageradamente caro."</p>'
  var infoLin = new google.maps.InfoWindow({
    content: lin
  });
  var marcadorLin = new google.maps.Marker({
      position: {lat:-12.141895, lng:-77.018445},
      title: 'Chifa Lin',
      map:map 
    });
  marcadorLin.addListener('click', function() {
    infoLin.open(map,marcadorLin);
  }); 

  //Chifa Fong Piu
  var fongPiu = '<p>Chifa Fong Piu - Mercado lobaton, Lince 15046  - Recomendado por Rolando Muñoz</p></br><p>"...tienen un tallarín que es buenazo."</p>'
  var infoFongPiu = new google.maps.InfoWindow({
    content: fongPiu
  });
  var marcadorFongPiu = new google.maps.Marker({
      position: {lat:-12.086420, lng:-77.033021},
      title: 'Chifa Fong Piu',
      map:map 
    });
  marcadorFongPiu.addListener('click', function() {
    infoFongPiu.open(map,marcadorFongPiu);
  }); 

 //Chifa Wong
  var  wong = '<p>Chifa Wong - La Encalada 569, Primavera - Recomendado por Yan Valdiviezo</p></br><p>"...el chifa es muy bueno."</p>'
  var infoWong = new google.maps.InfoWindow({
    content: wong
  });
  var marcadorWong = new google.maps.Marker({
      position: {lat:-12.109426, lng: -76.972711},
      title: 'Chifa Wong',
      map:map 
    });
  marcadorWong.addListener('click', function() {
    infoWong.open(map,marcadorWong);
  }); 

 //Chifa Four Seas
  var  fourSeas = '<p>Chifa Four Seas - Av. Aviación 3124, San Borja - Recomendado por Gonzalo Neyra Camacho</p></br><p>"...precio moderado-medio."</p>'
  var infoFourSeas = new google.maps.InfoWindow({
    content: fourSeas
  });
  var marcadorFourSeas = new google.maps.Marker({
      position: {lat:-12.101330, lng:-77.001877},
      title: 'Chifa Four Seas',
      map:map 
    });
  marcadorFourSeas.addListener('click', function() {
    infoFourSeas.open(map,marcadorFourSeas);
  });  

  //Chifa Excellency
  var  excellency = '<p>Chifa Excellency - Av San Luis 2682, Distrito de Lima - Recomendado por Gonzalo Neyra Camacho</p></br><p>"...precio medio-alto.No pidan men&uacte;, a la carta."</p>'
  var infoExcellency = new google.maps.InfoWindow({
    content: excellency
  });
  var marcadorExcellency = new google.maps.Marker({
      position: {lat:-12.102760, lng:-76.994531},
      title: 'Chifa Excellency',
      map:map 
    });
  marcadorExcellency.addListener('click', function() {
    infoExcellency.open(map,marcadorExcellency);
  });  

   //Chifa Men Hong
  var  menHong = '<p>Chifa Men Hong - Jir&oacute;n Bolognesi 237, Magdalena del Mar - Recomendado por Humberto Negr&oacute;n</p></br><p>"No consumir con gaseosa. Preferencia tecito."</p>'
  var infoMenHong = new google.maps.InfoWindow({
    content: menHong
  });
  var marcadorMenHong = new google.maps.Marker({
      position: {lat:-12.092741, lng: -77.070208},
      title: 'Chifa Men Hong',
      map:map 
    });
  marcadorMenHong.addListener('click', function() {
    infoMenHong.open(map,marcadorMenHong);
  });  


}

