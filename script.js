$( function() {
    $( document ).tooltip();
    $( "#datepicker" ).datepicker();
    var spinner = $( "#spin" ).spinner();
    $( "#accordion" ).accordion();

    var availableTags = [
       'tag 1',
       'tag 2',  
       'tag 3',
    ];
    $( "#tags" ).autocomplete({
        source: availableTags
    });

    require(
        [
            "esri/Map",
            "esri/views/MapView"
        ], 
        function(Map, MapView) {
            var map = new Map({ basemap: "streets" })
            var view = new MapView({
                container: "map", 
                map: map,
                zoom: 4,
                center: [15, 65]
            });
        }
    )
});


