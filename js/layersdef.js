
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
 
 
 var myStyle = {
        "color": "#ff7800",
        "weight": 5,
        "opacity": 0.65
    };
    
    
     var zaitaku = {
        "color": "#ffff00",
        "weight": 5,
        "opacity": 0.65
    };


var geojsonMarkerOptions1 = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var geojsonMarkerOptions2 = {
    radius: 8,
    fillColor: "#ff7888",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};



var geojsonMarkerOptions3 = {
    radius: 8,
    fillColor: "#006400",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var geojsonMarkerOptions4 = {
    radius: 8,
    fillColor: "#0000ff",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var geojsonMarkerOptions5 = {
    radius: 8,
    fillColor: "#ee82ee",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var geojsonMarkerOptions6 = {
    radius: 8,
    fillColor: "#008080",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.名称) {
    
       var tgtext = "";
       
        if ( feature.properties.電話番号 ) {
               tgtext = feature.properties.名称 + "<br>" + feature.properties.住所 + "<br>電話番号:<a href=\"tel:" + feature.properties.電話番号+"\">" +  feature.properties.電話番号 + "</a>";
   
        }
        else {
              tgtext = feature.properties.名称 + "<br>" + feature.properties.住所;
 
        }
        
        
        layer.bindPopup(tgtext);
    }
}



 
     

var zaitakuLayer = new L.GeoJSON.AJAX("data/zaitakusien.geojson",{pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions1);},
        onEachFeature: onEachFeature
   		 }
   		 
    );
  
var sasaeaiLayer = new L.GeoJSON.AJAX("data/sasaeai.geojson"  ,{pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions2);},
        onEachFeature: onEachFeature
   		 }
    );
   
var monowasureLayer = new L.GeoJSON.AJAX("data/monowasure.geojson" ,{pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions3);},
        onEachFeature: onEachFeature
   		 }
    );



var kaigoyobouLayer = new L.GeoJSON.AJAX("data/kaigoyobou.geojson" ,{pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions4);},
        onEachFeature: onEachFeature
   		 }
    );
    
var hokenLayer = new L.GeoJSON.AJAX("data/hokencenter.geojson" ,{pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions5);},
        onEachFeature: onEachFeature
   		 }
    );
var supportLayer = new L.GeoJSON.AJAX("data/support.geojson" ,{pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions6);},
        onEachFeature: onEachFeature
   		 }
    );



	     	
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
"認知症サポート医":supportLayer ,
"物忘れ相談医":monowasureLayer ,
"介護予防事業会場":kaigoyobouLayer ,
"保健センター":hokenLayer 

};


var default_display = {
  1:zaitakuLayer,
2:sasaeaiLayer ,
3:supportLayer ,
4:monowasureLayer ,
5:kaigoyobouLayer ,
6:hokenLayer 

};
 
