$(document).ready(function(){
	initialize();
});

function initialize() {
	var pinColorCulture = "002aff";
    var pinImageCulture = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColorCulture,
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));
    var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
        new google.maps.Size(40, 37),
        new google.maps.Point(0, 0),
        new google.maps.Point(12, 35));

	var mapOptions = {
		center: { lat: 43.604482, lng: 1.443962},
		zoom: 15
	}
	var map = new google.maps.Map(document.getElementById('map-canvas'),
		mapOptions);
	var culturePoints = [{"Titre" : "Place du Capitole", "Position" : new google.maps.LatLng(43.604342,1.443344)},
							{"Titre" : "EDF BAZACLE", "Position" : new google.maps.LatLng(43.604215,1.432168)}
		];

	for (var i = 0; i < culturePoints.length ; ++i){
		console.log("VOUOVU")
		var marker = new google.maps.Marker({position: culturePoints[i]["Position"],
			map: map,
			icon:pinImageCulture,
			shadow:pinShadow,
			title: culturePoints[i]["Titre"]});
		marker.setMap(map);
	}
}