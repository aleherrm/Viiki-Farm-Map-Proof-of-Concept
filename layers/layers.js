ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([2776580.807142, 8434565.231563, 2796039.962429, 8460071.273890]);
var wms_layers = [];


        var lyr_ESRI_0 = new ol.layer.Tile({
            'title': 'ESRI',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Soilbodies_1 = new ol.format.GeoJSON();
var features_Soilbodies_1 = format_Soilbodies_1.readFeatures(json_Soilbodies_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Soilbodies_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Soilbodies_1.addFeatures(features_Soilbodies_1);
var lyr_Soilbodies_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Soilbodies_1, 
                style: style_Soilbodies_1,
                popuplayertitle: 'Soilbodies',
                interactive: true,
    title: 'Soilbodies<br />\
    <img src="styles/legend/Soilbodies_1_0.png" /> Anthrosols (Technosols)<br />\
    <img src="styles/legend/Soilbodies_1_1.png" /> Arenic Podzols<br />\
    <img src="styles/legend/Soilbodies_1_2.png" /> Dystric Histosols<br />\
    <img src="styles/legend/Soilbodies_1_3.png" /> Dystric Leptosols<br />\
    <img src="styles/legend/Soilbodies_1_4.png" /> Endogleyic Podzols<br />\
    <img src="styles/legend/Soilbodies_1_5.png" /> Histic Gleysols (Hyperhumic)<br />\
    <img src="styles/legend/Soilbodies_1_6.png" /> Histic Gleysols(Clayic)<br />\
    <img src="styles/legend/Soilbodies_1_7.png" /> Nudilithic Leptosols<br />\
    <img src="styles/legend/Soilbodies_1_8.png" /> Sapric Histosols<br />\
    <img src="styles/legend/Soilbodies_1_9.png" /> Stagnic Regosols<br />\
    <img src="styles/legend/Soilbodies_1_10.png" /> Umbric Gleysols<br />\
    <img src="styles/legend/Soilbodies_1_11.png" /> Vertic Luvic Stagnosols<br />' });
var format_Ecozones_2 = new ol.format.GeoJSON();
var features_Ecozones_2 = format_Ecozones_2.readFeatures(json_Ecozones_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ecozones_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ecozones_2.addFeatures(features_Ecozones_2);
var lyr_Ecozones_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ecozones_2, 
                style: style_Ecozones_2,
                popuplayertitle: 'Ecozones',
                interactive: true,
    title: 'Ecozones<br />\
    <img src="styles/legend/Ecozones_2_0.png" /> Boreal coniferous forest<br />\
    <img src="styles/legend/Ecozones_2_1.png" /> Temperate continental forest<br />' });
var format_Fields_3 = new ol.format.GeoJSON();
var features_Fields_3 = format_Fields_3.readFeatures(json_Fields_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fields_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fields_3.addFeatures(features_Fields_3);
var lyr_Fields_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fields_3, 
                style: style_Fields_3,
                popuplayertitle: 'Fields',
                interactive: true,
    title: 'Fields<br />\
    <img src="styles/legend/Fields_3_0.png" /> Bare fallow<br />\
    <img src="styles/legend/Fields_3_1.png" /> Broad bean<br />\
    <img src="styles/legend/Fields_3_2.png" /> Vegetable garden<br />\
    <img src="styles/legend/Fields_3_3.png" /> Oats<br />\
    <img src="styles/legend/Fields_3_4.png" /> Spring rapeseed<br />\
    <img src="styles/legend/Fields_3_5.png" /> Spring wheat<br />\
    <img src="styles/legend/Fields_3_6.png" /> Ornamental plants, under 5 years<br />\
    <img src="styles/legend/Fields_3_7.png" /> Natural pasture and meadow<br />\
    <img src="styles/legend/Fields_3_8.png" /> Corn<br />\
    <img src="styles/legend/Fields_3_9.png" /> Other berry crops<br />\
    <img src="styles/legend/Fields_3_10.png" /> Other vegetables<br />\
    <img src="styles/legend/Fields_3_11.png" /> Small adjacent areas/plots<br />\
    <img src="styles/legend/Fields_3_12.png" /> Rhubarb<br />\
    <img src="styles/legend/Fields_3_13.png" /> Fodder grassland<br />\
    <img src="styles/legend/Fields_3_14.png" /> Feed barley<br />\
    <img src="styles/legend/Fields_3_15.png" /> Green fallow (grass and meadow)<br />\
    <img src="styles/legend/Fields_3_16.png" /> Uncultivated<br />\
    <img src="styles/legend/Fields_3_17.png" /> Environmental agreement area, wooded or other area<br />\
    <img src="styles/legend/Fields_3_18.png" /> Environmental agreement area, permanent grassland<br />' });

lyr_ESRI_0.setVisible(true);lyr_Soilbodies_1.setVisible(true);lyr_Ecozones_2.setVisible(true);lyr_Fields_3.setVisible(true);
var layersList = [lyr_ESRI_0,lyr_Soilbodies_1,lyr_Ecozones_2,lyr_Fields_3];
lyr_Soilbodies_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Soilbodies': 'Soilbodies', 'Soilbodi_1': 'Soilbodi_1', 'Soilbodi_2': 'Soilbodi_2', 'Soilbodi_3': 'Soilbodi_3', 'Soilbodi_4': 'Soilbodi_4', 'Soilbodi_5': 'Soilbodi_5', 'Table_18_S': 'Table_18_S', 'Table_18_1': 'Table_18_1', 'Table_18_2': 'Table_18_2', 'Table_18_3': 'Table_18_3', 'Table_18_4': 'Table_18_4', 'Table_18_5': 'Table_18_5', 'Table_18_6': 'Table_18_6', });
lyr_Ecozones_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'gez_name': 'gez_name', 'gez_code': 'gez_code', 'gez_abbrev': 'gez_abbrev', });
lyr_Fields_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'TUNNUS': 'TUNNUS', 'PERUSLOHKOTUNNUS': 'PERUSLOHKOTUNNUS', 'LOHKONUMERO': 'LOHKONUMERO', 'PINTA_ALA': 'PINTA_ALA', 'KASVIKOODI': 'KASVIKOODI', 'KASVIKOODI_SELITE_FI': 'KASVIKOODI_SELITE_FI', 'KASVIKOODI_SELITE_SV': 'KASVIKOODI_SELITE_SV', 'LUOMUVILJELY': 'LUOMUVILJELY', 'VIRKISTYSPVM': 'VIRKISTYSPVM', 'MEAN_PH': 'MEAN_PH', 'MEAN_WFPS': 'MEAN_WFPS', 'MEAN_WiltingPoint': 'MEAN_WiltingPoint', 'MEAN_FieldCapacity': 'MEAN_FieldCapacity', 'MEAN_Porosity': 'MEAN_Porosity', 'MEAN_Nitrogen': 'MEAN_Nitrogen', 'MEAN_SoilMoisture': 'MEAN_SoilMoisture', 'MEAN_SOC': 'MEAN_SOC', 'MEAN_BulkDensity': 'MEAN_BulkDensity', 'MEAN_Clay': 'MEAN_Clay', 'MEAN_Silt': 'MEAN_Silt', 'MEAN_Sand': 'MEAN_Sand', 'MEAN_SoilTexture': 'MEAN_SoilTexture', 'Mean_Soilbody': 'Mean_Soilbody', 'Mean_Ecozone': 'Mean_Ecozone', 'Field': 'Field', });
lyr_Soilbodies_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Soilbodies': 'TextEdit', 'Soilbodi_1': 'TextEdit', 'Soilbodi_2': 'Range', 'Soilbodi_3': 'TextEdit', 'Soilbodi_4': 'TextEdit', 'Soilbodi_5': 'TextEdit', 'Table_18_S': 'Range', 'Table_18_1': 'TextEdit', 'Table_18_2': 'TextEdit', 'Table_18_3': 'TextEdit', 'Table_18_4': 'TextEdit', 'Table_18_5': 'TextEdit', 'Table_18_6': 'TextEdit', });
lyr_Ecozones_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'gez_name': 'TextEdit', 'gez_code': 'TextEdit', 'gez_abbrev': 'TextEdit', });
lyr_Fields_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Join_Count': 'Range', 'TARGET_FID': 'TextEdit', 'TUNNUS': 'TextEdit', 'PERUSLOHKOTUNNUS': 'TextEdit', 'LOHKONUMERO': 'TextEdit', 'PINTA_ALA': 'TextEdit', 'KASVIKOODI': 'TextEdit', 'KASVIKOODI_SELITE_FI': 'TextEdit', 'KASVIKOODI_SELITE_SV': 'TextEdit', 'LUOMUVILJELY': 'TextEdit', 'VIRKISTYSPVM': 'DateTime', 'MEAN_PH': 'TextEdit', 'MEAN_WFPS': 'TextEdit', 'MEAN_WiltingPoint': 'TextEdit', 'MEAN_FieldCapacity': 'TextEdit', 'MEAN_Porosity': 'TextEdit', 'MEAN_Nitrogen': 'TextEdit', 'MEAN_SoilMoisture': 'TextEdit', 'MEAN_SOC': 'TextEdit', 'MEAN_BulkDensity': 'TextEdit', 'MEAN_Clay': 'TextEdit', 'MEAN_Silt': 'TextEdit', 'MEAN_Sand': 'TextEdit', 'MEAN_SoilTexture': 'TextEdit', 'Mean_Soilbody': 'TextEdit', 'Mean_Ecozone': 'TextEdit', 'Field': 'Range', });
lyr_Soilbodies_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'Soilbodies': 'hidden field', 'Soilbodi_1': 'hidden field', 'Soilbodi_2': 'hidden field', 'Soilbodi_3': 'hidden field', 'Soilbodi_4': 'hidden field', 'Soilbodi_5': 'hidden field', 'Table_18_S': 'hidden field', 'Table_18_1': 'hidden field', 'Table_18_2': 'no label', 'Table_18_3': 'hidden field', 'Table_18_4': 'hidden field', 'Table_18_5': 'hidden field', 'Table_18_6': 'hidden field', });
lyr_Ecozones_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'gez_name': 'no label', 'gez_code': 'hidden field', 'gez_abbrev': 'hidden field', });
lyr_Fields_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'Join_Count': 'hidden field', 'TARGET_FID': 'hidden field', 'TUNNUS': 'inline label - visible with data', 'PERUSLOHKOTUNNUS': 'hidden field', 'LOHKONUMERO': 'hidden field', 'PINTA_ALA': 'hidden field', 'KASVIKOODI': 'hidden field', 'KASVIKOODI_SELITE_FI': 'inline label - visible with data', 'KASVIKOODI_SELITE_SV': 'hidden field', 'LUOMUVILJELY': 'hidden field', 'VIRKISTYSPVM': 'hidden field', 'MEAN_PH': 'inline label - visible with data', 'MEAN_WFPS': 'inline label - visible with data', 'MEAN_WiltingPoint': 'inline label - visible with data', 'MEAN_FieldCapacity': 'inline label - visible with data', 'MEAN_Porosity': 'inline label - visible with data', 'MEAN_Nitrogen': 'inline label - visible with data', 'MEAN_SoilMoisture': 'inline label - visible with data', 'MEAN_SOC': 'inline label - visible with data', 'MEAN_BulkDensity': 'inline label - visible with data', 'MEAN_Clay': 'inline label - visible with data', 'MEAN_Silt': 'inline label - visible with data', 'MEAN_Sand': 'inline label - visible with data', 'MEAN_SoilTexture': 'inline label - visible with data', 'Mean_Soilbody': 'inline label - visible with data', 'Mean_Ecozone': 'inline label - visible with data', 'Field': 'inline label - always visible', });
lyr_Fields_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});