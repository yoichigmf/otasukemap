
var mainMap = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
  attribution: '国土地理院 地理院地図 標準地図', minZoom: 2, maxZoom: 18, zIndex:5 }),
  lightColorMap = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  attribution: '国土地理院 地理院地図 淡色地図', minZoom: 12, maxZoom: 18 }),
  DEMMap = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/relief/{z}/{x}/{y}.png', {
  attribution: '国土地理院 地理院地図 色別標高図', minZoom: 5, maxZoom: 15 ,zIndex:5}),
  aerial = L.tileLayer('http://cyberjapandata.gsi.go.jp/xyz/ort/{z}/{x}/{y}.jpg', {
  attribution:  '電子国土基本図（オルソ画像）', minZoom: 2, maxZoom: 18}),
   blank = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/blank/{z}/{x}/{y}.png', {
  attribution:  '白地図', minZoom: 5, maxZoom: 14}),
  
  orth_USA10 = L.tileLayer('http://cyberjapandata.gsi.go.jp/xyz/ort_USA10/{z}/{x}/{y}.png', {
  attribution:  '空中写真（1945～1950年）', minZoom: 15, maxZoom: 17}),
  aerialSusa0807 = L.tileLayer('http://cyberjapandata.gsi.go.jp/xyz/20130717dol2/{z}/{x}/{y}.png', {
  attribution:  '（オルソ画像）', minZoom: 10, maxZoom: 18})
  

  
  OSMLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution : '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors', minZoom: 3, maxZoom: 18, zIndex:5
                });
 
    // Add each wms layer using L.tileLayer.wms


 var ooiLayer = new L.GeoJSON.AJAX("data/ooiyashio.geojson");
 
 
 var zaitakuLayer = new L.GeoJSON.AJAX("data/zaitakusien.geojson");
 
  var zaitakuLayer = new L.GeoJSON.AJAX("data/zaitakusien.geojson");
  
   var sasaeaiLayer = new L.GeoJSON.AJAX("data/sasaeai.geojson");
   
    var monowasureLayer = new L.GeoJSON.AJAX("data/monowasure.geojson");
      var kaigoyobouLayer = new L.GeoJSON.AJAX("data/kaigoyobou.geojson");
    
	     var hokenLayer = new L.GeoJSON.AJAX("data/hokencenter.geojson");
	     	
var BaseMaps = {

     "オープンストリートマップ": OSMLayer,
           "淡色地図": lightColorMap,
     "地理院地図 標準地図": mainMap,
    
"電子国土基本図（オルソ画像)":  aerial,

            "白地図": blank,
      "地理院地図 色別標高図": DEMMap

};

var overlays = {
"在宅支援センター":zaitakuLayer,
"支え愛・ほっとステーション":sasaeaiLayer ,
"物忘れ相談医":monowasureLayer ,
"介護予防事業会場":kaigoyobouLayer ,
"保険センター":hokenLayer 

};

 
