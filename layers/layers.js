ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([2778459.120243, 8435845.784943, 2800458.667084, 8461611.433747]);
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
var format_Field_Stats_All_3 = new ol.format.GeoJSON();
var features_Field_Stats_All_3 = format_Field_Stats_All_3.readFeatures(json_Field_Stats_All_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Field_Stats_All_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Field_Stats_All_3.addFeatures(features_Field_Stats_All_3);
var lyr_Field_Stats_All_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Field_Stats_All_3, 
                style: style_Field_Stats_All_3,
                popuplayertitle: 'Field_Stats_All',
                interactive: true,
    title: 'Field_Stats_All<br />\
    <img src="styles/legend/Field_Stats_All_3_0.png" /> Avokesanto<br />\
    <img src="styles/legend/Field_Stats_All_3_1.png" /> Harkapapu<br />\
    <img src="styles/legend/Field_Stats_All_3_2.png" /> Kasvimaa<br />\
    <img src="styles/legend/Field_Stats_All_3_3.png" /> Kaura<br />\
    <img src="styles/legend/Field_Stats_All_3_4.png" /> Kevatrypsi<br />\
    <img src="styles/legend/Field_Stats_All_3_5.png" /> Kevatvehna<br />\
    <img src="styles/legend/Field_Stats_All_3_6.png" /> Koristekasvit, alle 5 v.<br />\
    <img src="styles/legend/Field_Stats_All_3_7.png" /> Luonnonlaidun ja -niitty<br />\
    <img src="styles/legend/Field_Stats_All_3_8.png" /> Maissi<br />\
    <img src="styles/legend/Field_Stats_All_3_9.png" /> Muut marjakasvit<br />\
    <img src="styles/legend/Field_Stats_All_3_10.png" /> Muut vihannekset<br />\
    <img src="styles/legend/Field_Stats_All_3_11.png" /> Pienet vierekkaiset alat<br />\
    <img src="styles/legend/Field_Stats_All_3_12.png" /> Raparperi<br />\
    <img src="styles/legend/Field_Stats_All_3_13.png" /> Rehunurmi<br />\
    <img src="styles/legend/Field_Stats_All_3_14.png" /> Rehuohra<br />\
    <img src="styles/legend/Field_Stats_All_3_15.png" /> Viherkesanto (nurmi ja niitty)<br />\
    <img src="styles/legend/Field_Stats_All_3_16.png" /> Viljelematon<br />\
    <img src="styles/legend/Field_Stats_All_3_17.png" /> Ymparistosopimusala, puustoinen tai muu ala<br />\
    <img src="styles/legend/Field_Stats_All_3_18.png" /> Ymparistosopimusala, pysyva nurmi<br />' });

lyr_ESRI_0.setVisible(true);lyr_Soilbodies_1.setVisible(true);lyr_Ecozones_2.setVisible(true);lyr_Field_Stats_All_3.setVisible(true);
var layersList = [lyr_ESRI_0,lyr_Soilbodies_1,lyr_Ecozones_2,lyr_Field_Stats_All_3];
lyr_Soilbodies_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Soilbodies': 'Soilbodies', 'Soilbodi_1': 'Soilbodi_1', 'Soilbodi_2': 'Soilbodi_2', 'Soilbodi_3': 'Soilbodi_3', 'Soilbodi_4': 'Soilbodi_4', 'Soilbodi_5': 'Soilbodi_5', 'Table_18_S': 'Table_18_S', 'Table_18_1': 'Table_18_1', 'Table_18_2': 'Table_18_2', 'Table_18_3': 'Table_18_3', 'Table_18_4': 'Table_18_4', 'Table_18_5': 'Table_18_5', 'Table_18_6': 'Table_18_6', });
lyr_Ecozones_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'gez_name': 'gez_name', 'gez_code': 'gez_code', 'gez_abbrev': 'gez_abbrev', });
lyr_Field_Stats_All_3.set('fieldAliases', {'id': 'id', 'OBJECTID': 'OBJECTID', 'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'TUNNUS': 'TUNNUS', 'PERUSLOHKO': 'PERUSLOHKO', 'LOHKONUMER': 'LOHKONUMER', 'PINTA_ALA': 'PINTA_ALA', 'KASVIKOODI': 'KASVIKOODI', 'KASVIKOO_1': 'KASVIKOO_1', 'KASVIKOO_2': 'KASVIKOO_2', 'LUOMUVILJE': 'LUOMUVILJE', 'VIRKISTYSP': 'VIRKISTYSP', 'MEAN_PH': 'MEAN_PH', 'MEAN_WFPS': 'MEAN_WFPS', 'MEAN_Wilti': 'MEAN_Wilti', 'MEAN_Field': 'MEAN_Field', 'MEAN_Poros': 'MEAN_Poros', 'MEAN_Nitro': 'MEAN_Nitro', 'MEAN_Phosp': 'MEAN_Phosp', 'MEAN_SoilM': 'MEAN_SoilM', 'MEAN_SOC': 'MEAN_SOC', 'MEAN_BulkD': 'MEAN_BulkD', 'MEAN_Clay': 'MEAN_Clay', 'MEAN_Silt': 'MEAN_Silt', 'MEAN_Sand': 'MEAN_Sand', 'MEAN_SoilT': 'MEAN_SoilT', 'Mean_Soilb': 'Mean_Soilb', 'Mean_Ecozo': 'Mean_Ecozo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Soilbodies_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Soilbodies': 'TextEdit', 'Soilbodi_1': 'TextEdit', 'Soilbodi_2': 'Range', 'Soilbodi_3': 'TextEdit', 'Soilbodi_4': 'TextEdit', 'Soilbodi_5': 'TextEdit', 'Table_18_S': 'Range', 'Table_18_1': 'TextEdit', 'Table_18_2': 'TextEdit', 'Table_18_3': 'TextEdit', 'Table_18_4': 'TextEdit', 'Table_18_5': 'TextEdit', 'Table_18_6': 'TextEdit', });
lyr_Ecozones_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'gez_name': 'TextEdit', 'gez_code': 'TextEdit', 'gez_abbrev': 'TextEdit', });
lyr_Field_Stats_All_3.set('fieldImages', {'id': 'TextEdit', 'OBJECTID': 'TextEdit', 'Join_Count': 'TextEdit', 'TARGET_FID': 'TextEdit', 'TUNNUS': 'TextEdit', 'PERUSLOHKO': 'TextEdit', 'LOHKONUMER': 'TextEdit', 'PINTA_ALA': 'TextEdit', 'KASVIKOODI': 'TextEdit', 'KASVIKOO_1': 'TextEdit', 'KASVIKOO_2': 'TextEdit', 'LUOMUVILJE': 'TextEdit', 'VIRKISTYSP': 'DateTime', 'MEAN_PH': 'TextEdit', 'MEAN_WFPS': 'TextEdit', 'MEAN_Wilti': 'TextEdit', 'MEAN_Field': 'TextEdit', 'MEAN_Poros': 'TextEdit', 'MEAN_Nitro': 'TextEdit', 'MEAN_Phosp': 'TextEdit', 'MEAN_SoilM': 'TextEdit', 'MEAN_SOC': 'TextEdit', 'MEAN_BulkD': 'TextEdit', 'MEAN_Clay': 'TextEdit', 'MEAN_Silt': 'TextEdit', 'MEAN_Sand': 'TextEdit', 'MEAN_SoilT': 'TextEdit', 'Mean_Soilb': 'TextEdit', 'Mean_Ecozo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Soilbodies_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'Soilbodies': 'hidden field', 'Soilbodi_1': 'hidden field', 'Soilbodi_2': 'hidden field', 'Soilbodi_3': 'hidden field', 'Soilbodi_4': 'hidden field', 'Soilbodi_5': 'hidden field', 'Table_18_S': 'hidden field', 'Table_18_1': 'hidden field', 'Table_18_2': 'no label', 'Table_18_3': 'hidden field', 'Table_18_4': 'hidden field', 'Table_18_5': 'hidden field', 'Table_18_6': 'hidden field', });
lyr_Ecozones_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'gez_name': 'no label', 'gez_code': 'hidden field', 'gez_abbrev': 'hidden field', });
lyr_Field_Stats_All_3.set('fieldLabels', {'id': 'hidden field', 'OBJECTID': 'hidden field', 'Join_Count': 'hidden field', 'TARGET_FID': 'hidden field', 'TUNNUS': 'inline label - visible with data', 'PERUSLOHKO': 'hidden field', 'LOHKONUMER': 'hidden field', 'PINTA_ALA': 'hidden field', 'KASVIKOODI': 'hidden field', 'KASVIKOO_1': 'inline label - visible with data', 'KASVIKOO_2': 'inline label - visible with data', 'LUOMUVILJE': 'hidden field', 'VIRKISTYSP': 'hidden field', 'MEAN_PH': 'inline label - visible with data', 'MEAN_WFPS': 'inline label - visible with data', 'MEAN_Wilti': 'inline label - visible with data', 'MEAN_Field': 'inline label - visible with data', 'MEAN_Poros': 'inline label - visible with data', 'MEAN_Nitro': 'inline label - visible with data', 'MEAN_Phosp': 'inline label - visible with data', 'MEAN_SoilM': 'inline label - visible with data', 'MEAN_SOC': 'inline label - visible with data', 'MEAN_BulkD': 'inline label - visible with data', 'MEAN_Clay': 'inline label - visible with data', 'MEAN_Silt': 'inline label - visible with data', 'MEAN_Sand': 'inline label - visible with data', 'MEAN_SoilT': 'inline label - visible with data', 'Mean_Soilb': 'inline label - visible with data', 'Mean_Ecozo': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'inline label - visible with data', });
lyr_Field_Stats_All_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});