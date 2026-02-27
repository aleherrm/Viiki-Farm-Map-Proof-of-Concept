var size = 0;
var placement = 'point';
function categories_Soilbodies_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Anthrosols (Technosols)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(166,97,26,0.3)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Arenic Podzols':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(187,132,62,0.3)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Dystric Histosols':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(207,168,98,0.3)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Dystric Leptosols':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(225,199,136,0.3)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Endogleyic Podzols':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(233,217,180,0.3)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Histic Gleysols (Hyperhumic)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(241,236,223,0.3)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Histic Gleysols(Clayic)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(224,238,236,0.3)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Nudilithic Leptosols':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(181,223,217,0.3)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sapric Histosols':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(139,209,198,0.3)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Stagnic Regosols':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(93,185,171,0.3)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Umbric Gleysols':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(47,159,142,0.3)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Vertic Luvic Stagnosols':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(1,133,113,0.3)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Soilbodies_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Table_18_2");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Soilbodies_1(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
