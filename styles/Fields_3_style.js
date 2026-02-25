var size = 0;
var placement = 'point';
function categories_Fields_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Avokesanto':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(230,86,124,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Harkapapu':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(89,209,141,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kasvimaa':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(128,140,228,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kaura':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(236,252,59,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kevatrypsi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(53,142,92,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kevatvehna':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(191,114,13,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Koristekasvit, alle 5 v.':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(166,101,187,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Luonnonlaidun ja -niitty':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(53,200,229,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Maissi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(218,236,19,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Muut marjakasvit':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(133,83,75,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Muut vihannekset':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(95,122,166,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pienet vierekkaiset alat':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(29,133,165,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Raparperi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(93,71,202,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rehunurmi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(138,91,204,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rehuohra':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(126,205,80,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Viherkesanto (nurmi ja niitty)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(22,98,239,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Viljelematon':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(68,117,200,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ymparistosopimusala, puustoinen tai muu ala':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(145,56,58,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ymparistosopimusala, pysyva nurmi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(234,89,210,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Fields_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("KASVIKOODI_SELITE_FI");
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
    
    var style = categories_Fields_3(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
