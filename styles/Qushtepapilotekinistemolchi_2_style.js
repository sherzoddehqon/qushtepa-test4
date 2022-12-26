var size = 0;
var placement = 'point';

var style_Qushtepapilotekinistemolchi_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#5eff00";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("\"kontur_raqami\"  ||        \"ekin\" ") !== null) {
        labelText = String(feature.get("\"kontur_raqami\"  ||        \"ekin\" "));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(240,9,29,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
