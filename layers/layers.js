var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_1975_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "1975年",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1975_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13170261.546233, 2805721.072196, 13171773.767806, 2806912.362460]
                            })
                        });
var format__big5_2 = new ol.format.GeoJSON();
var features__big5_2 = format__big5_2.readFeatures(json__big5_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__big5_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__big5_2.addFeatures(features__big5_2);
var lyr__big5_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__big5_2, 
                style: style__big5_2,
                interactive: true,
    title: '建築物_big5<br />\
    <img src="styles/legend/_big5_2_0.png" /> 中<br />\
    <img src="styles/legend/_big5_2_1.png" /> 廢<br />\
    <img src="styles/legend/_big5_2_2.png" /> B<br />\
    <img src="styles/legend/_big5_2_3.png" /> M<br />\
    <img src="styles/legend/_big5_2_4.png" /> R<br />\
    <img src="styles/legend/_big5_2_5.png" /> T<br />\
    <img src="styles/legend/_big5_2_6.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_1975_1.setVisible(true);lyr__big5_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_1975_1,lyr__big5_2];
lyr__big5_2.set('fieldAliases', {'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', });
lyr__big5_2.set('fieldImages', {'Build_STR': 'TextEdit', 'Build_NO': 'TextEdit', });
lyr__big5_2.set('fieldLabels', {'Build_STR': 'header label', 'Build_NO': 'header label', });
lyr__big5_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});