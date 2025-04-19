var wms_layers = [];

var format_Projectnaturalreserve_0 = new ol.format.GeoJSON();
var features_Projectnaturalreserve_0 = format_Projectnaturalreserve_0.readFeatures(json_Projectnaturalreserve_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Projectnaturalreserve_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projectnaturalreserve_0.addFeatures(features_Projectnaturalreserve_0);
var lyr_Projectnaturalreserve_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Projectnaturalreserve_0, 
                style: style_Projectnaturalreserve_0,
                popuplayertitle: 'Project — naturalreserve',
                interactive: true,
                title: '<img src="styles/legend/Projectnaturalreserve_0.png" /> Project — naturalreserve'
            });
var format_URA_MP19_SUBZONE_NO_SEA_PL_1 = new ol.format.GeoJSON();
var features_URA_MP19_SUBZONE_NO_SEA_PL_1 = format_URA_MP19_SUBZONE_NO_SEA_PL_1.readFeatures(json_URA_MP19_SUBZONE_NO_SEA_PL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_URA_MP19_SUBZONE_NO_SEA_PL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_URA_MP19_SUBZONE_NO_SEA_PL_1.addFeatures(features_URA_MP19_SUBZONE_NO_SEA_PL_1);
var lyr_URA_MP19_SUBZONE_NO_SEA_PL_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_URA_MP19_SUBZONE_NO_SEA_PL_1, 
                style: style_URA_MP19_SUBZONE_NO_SEA_PL_1,
                popuplayertitle: 'URA_MP19_SUBZONE_NO_SEA_PL',
                interactive: true,
                title: 'URA_MP19_SUBZONE_NO_SEA_PL'
            });
var format_Projectwaterbody_2 = new ol.format.GeoJSON();
var features_Projectwaterbody_2 = format_Projectwaterbody_2.readFeatures(json_Projectwaterbody_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Projectwaterbody_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projectwaterbody_2.addFeatures(features_Projectwaterbody_2);
var lyr_Projectwaterbody_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Projectwaterbody_2, 
                style: style_Projectwaterbody_2,
                popuplayertitle: 'Project — waterbody',
                interactive: true,
                title: '<img src="styles/legend/Projectwaterbody_2.png" /> Project — waterbody'
            });
var format_ProjectOpenSpace_True_3 = new ol.format.GeoJSON();
var features_ProjectOpenSpace_True_3 = format_ProjectOpenSpace_True_3.readFeatures(json_ProjectOpenSpace_True_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjectOpenSpace_True_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectOpenSpace_True_3.addFeatures(features_ProjectOpenSpace_True_3);
var lyr_ProjectOpenSpace_True_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjectOpenSpace_True_3, 
                style: style_ProjectOpenSpace_True_3,
                popuplayertitle: 'Project — OpenSpace_True',
                interactive: true,
                title: '<img src="styles/legend/ProjectOpenSpace_True_3.png" /> Project — OpenSpace_True'
            });
var format_ProjectPOI_4 = new ol.format.GeoJSON();
var features_ProjectPOI_4 = format_ProjectPOI_4.readFeatures(json_ProjectPOI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjectPOI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectPOI_4.addFeatures(features_ProjectPOI_4);
var lyr_ProjectPOI_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjectPOI_4, 
                style: style_ProjectPOI_4,
                popuplayertitle: 'Project — POI',
                interactive: true,
                title: '<img src="styles/legend/ProjectPOI_4.png" /> Project — POI'
            });
var format_ProjectPOI_LandUseAll_5 = new ol.format.GeoJSON();
var features_ProjectPOI_LandUseAll_5 = format_ProjectPOI_LandUseAll_5.readFeatures(json_ProjectPOI_LandUseAll_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjectPOI_LandUseAll_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectPOI_LandUseAll_5.addFeatures(features_ProjectPOI_LandUseAll_5);
var lyr_ProjectPOI_LandUseAll_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjectPOI_LandUseAll_5, 
                style: style_ProjectPOI_LandUseAll_5,
                popuplayertitle: 'Project — POI_LandUseAll',
                interactive: true,
    title: 'Project — POI_LandUseAll<br />\
    <img src="styles/legend/ProjectPOI_LandUseAll_5_0.png" /> AGRICULTURE<br />\
    <img src="styles/legend/ProjectPOI_LandUseAll_5_1.png" /> OPEN SPACE<br />\
    <img src="styles/legend/ProjectPOI_LandUseAll_5_2.png" /> WATERBODY<br />' });
var format_Projectreserve_target_6 = new ol.format.GeoJSON();
var features_Projectreserve_target_6 = format_Projectreserve_target_6.readFeatures(json_Projectreserve_target_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Projectreserve_target_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projectreserve_target_6.addFeatures(features_Projectreserve_target_6);
var lyr_Projectreserve_target_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Projectreserve_target_6, 
                style: style_Projectreserve_target_6,
                popuplayertitle: 'Project — reserve_target',
                interactive: true,
                title: '<img src="styles/legend/Projectreserve_target_6.png" /> Project — reserve_target'
            });
var format_Projectintersection_lck_7 = new ol.format.GeoJSON();
var features_Projectintersection_lck_7 = format_Projectintersection_lck_7.readFeatures(json_Projectintersection_lck_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Projectintersection_lck_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projectintersection_lck_7.addFeatures(features_Projectintersection_lck_7);
var lyr_Projectintersection_lck_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Projectintersection_lck_7, 
                style: style_Projectintersection_lck_7,
                popuplayertitle: 'Project — intersection_lck',
                interactive: true,
                title: '<img src="styles/legend/Projectintersection_lck_7.png" /> Project — intersection_lck'
            });
var format_ProjectPOI_Area_8 = new ol.format.GeoJSON();
var features_ProjectPOI_Area_8 = format_ProjectPOI_Area_8.readFeatures(json_ProjectPOI_Area_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjectPOI_Area_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectPOI_Area_8.addFeatures(features_ProjectPOI_Area_8);
var lyr_ProjectPOI_Area_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjectPOI_Area_8, 
                style: style_ProjectPOI_Area_8,
                popuplayertitle: 'Project — POI_Area',
                interactive: true,
    title: 'Project — POI_Area<br />\
    <img src="styles/legend/ProjectPOI_Area_8_0.png" /> AGRICULTURE<br />\
    <img src="styles/legend/ProjectPOI_Area_8_1.png" /> OPEN SPACE<br />\
    <img src="styles/legend/ProjectPOI_Area_8_2.png" /> WATERBODY<br />' });
var format_ProjectPOI_buildings_9 = new ol.format.GeoJSON();
var features_ProjectPOI_buildings_9 = format_ProjectPOI_buildings_9.readFeatures(json_ProjectPOI_buildings_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjectPOI_buildings_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectPOI_buildings_9.addFeatures(features_ProjectPOI_buildings_9);
var lyr_ProjectPOI_buildings_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjectPOI_buildings_9, 
                style: style_ProjectPOI_buildings_9,
                popuplayertitle: 'Project — POI_buildings',
                interactive: true,
                title: '<img src="styles/legend/ProjectPOI_buildings_9.png" /> Project — POI_buildings'
            });
var format_ProjectPOI_roads_10 = new ol.format.GeoJSON();
var features_ProjectPOI_roads_10 = format_ProjectPOI_roads_10.readFeatures(json_ProjectPOI_roads_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjectPOI_roads_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectPOI_roads_10.addFeatures(features_ProjectPOI_roads_10);
var lyr_ProjectPOI_roads_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjectPOI_roads_10, 
                style: style_ProjectPOI_roads_10,
                popuplayertitle: 'Project — POI_roads',
                interactive: true,
                title: '<img src="styles/legend/ProjectPOI_roads_10.png" /> Project — POI_roads'
            });
var format_ProjectPOI_Murai_11 = new ol.format.GeoJSON();
var features_ProjectPOI_Murai_11 = format_ProjectPOI_Murai_11.readFeatures(json_ProjectPOI_Murai_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjectPOI_Murai_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectPOI_Murai_11.addFeatures(features_ProjectPOI_Murai_11);
var lyr_ProjectPOI_Murai_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjectPOI_Murai_11, 
                style: style_ProjectPOI_Murai_11,
                popuplayertitle: 'Project — POI_Murai',
                interactive: true,
                title: '<img src="styles/legend/ProjectPOI_Murai_11.png" /> Project — POI_Murai'
            });
var format_Projectrivers_12 = new ol.format.GeoJSON();
var features_Projectrivers_12 = format_Projectrivers_12.readFeatures(json_Projectrivers_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Projectrivers_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projectrivers_12.addFeatures(features_Projectrivers_12);
var lyr_Projectrivers_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Projectrivers_12, 
                style: style_Projectrivers_12,
                popuplayertitle: 'Project — rivers',
                interactive: true,
    title: 'Project — rivers<br />\
    <img src="styles/legend/Projectrivers_12_0.png" /> OPEN SPACE<br />\
    <img src="styles/legend/Projectrivers_12_1.png" /> WATERBODY<br />\
    <img src="styles/legend/Projectrivers_12_2.png" /> <br />' });
var lyr_Poyan_13 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Poyan<br />\
    <img src="styles/legend/Poyan_13_0.png" /> 1.0000<br />\
    <img src="styles/legend/Poyan_13_1.png" /> 2.0000<br />\
    <img src="styles/legend/Poyan_13_2.png" /> 3.0000<br />\
    <img src="styles/legend/Poyan_13_3.png" /> 4.0000<br />\
    <img src="styles/legend/Poyan_13_4.png" /> 5.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Poyan_13.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11536176.020539, 150991.222922, 11541990.087839, 154579.792622]
        })
    });
var format_Projectriver_roads_14 = new ol.format.GeoJSON();
var features_Projectriver_roads_14 = format_Projectriver_roads_14.readFeatures(json_Projectriver_roads_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Projectriver_roads_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projectriver_roads_14.addFeatures(features_Projectriver_roads_14);
var lyr_Projectriver_roads_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Projectriver_roads_14, 
                style: style_Projectriver_roads_14,
                popuplayertitle: 'Project — river_roads',
                interactive: true,
                title: '<img src="styles/legend/Projectriver_roads_14.png" /> Project — river_roads'
            });
var format_ProjectPOI_Subzone_LCK_15 = new ol.format.GeoJSON();
var features_ProjectPOI_Subzone_LCK_15 = format_ProjectPOI_Subzone_LCK_15.readFeatures(json_ProjectPOI_Subzone_LCK_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjectPOI_Subzone_LCK_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectPOI_Subzone_LCK_15.addFeatures(features_ProjectPOI_Subzone_LCK_15);
var lyr_ProjectPOI_Subzone_LCK_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjectPOI_Subzone_LCK_15, 
                style: style_ProjectPOI_Subzone_LCK_15,
                popuplayertitle: 'Project — POI_Subzone_LCK',
                interactive: true,
                title: '<img src="styles/legend/ProjectPOI_Subzone_LCK_15.png" /> Project — POI_Subzone_LCK'
            });
var format_ProjectPOI_LCK_16 = new ol.format.GeoJSON();
var features_ProjectPOI_LCK_16 = format_ProjectPOI_LCK_16.readFeatures(json_ProjectPOI_LCK_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjectPOI_LCK_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectPOI_LCK_16.addFeatures(features_ProjectPOI_LCK_16);
var lyr_ProjectPOI_LCK_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjectPOI_LCK_16, 
                style: style_ProjectPOI_LCK_16,
                popuplayertitle: 'Project — POI_LCK',
                interactive: true,
    title: 'Project — POI_LCK<br />\
    <img src="styles/legend/ProjectPOI_LCK_16_0.png" /> AGRICULTURE<br />\
    <img src="styles/legend/ProjectPOI_LCK_16_1.png" /> OPEN SPACE<br />\
    <img src="styles/legend/ProjectPOI_LCK_16_2.png" /> WATERBODY<br />\
    <img src="styles/legend/ProjectPOI_LCK_16_3.png" /> <br />' });
var lyr_LCK_roads_prox_reclass_17 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LCK_roads_prox_reclass<br />\
    <img src="styles/legend/LCK_roads_prox_reclass_17_0.png" /> Unsuitable for Use<br />\
    <img src="styles/legend/LCK_roads_prox_reclass_17_1.png" /> Vegetation Screening<br />\
    <img src="styles/legend/LCK_roads_prox_reclass_17_2.png" /> Fence<br />\
    <img src="styles/legend/LCK_roads_prox_reclass_17_3.png" /> Drainage Swale<br />\
    <img src="styles/legend/LCK_roads_prox_reclass_17_4.png" /> Solar Panels<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LCK_roads_prox_reclass_17.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11543281.526607, 157324.671483, 11547778.106970, 161196.991839]
        })
    });
var format_Projectbuildings_lck_18 = new ol.format.GeoJSON();
var features_Projectbuildings_lck_18 = format_Projectbuildings_lck_18.readFeatures(json_Projectbuildings_lck_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Projectbuildings_lck_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projectbuildings_lck_18.addFeatures(features_Projectbuildings_lck_18);
var lyr_Projectbuildings_lck_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Projectbuildings_lck_18, 
                style: style_Projectbuildings_lck_18,
                popuplayertitle: 'Project — buildings_lck',
                interactive: true,
                title: '<img src="styles/legend/Projectbuildings_lck_18.png" /> Project — buildings_lck'
            });
var group_LCK = new ol.layer.Group({
                                layers: [lyr_ProjectPOI_Subzone_LCK_15,lyr_ProjectPOI_LCK_16,lyr_LCK_roads_prox_reclass_17,lyr_Projectbuildings_lck_18,],
                                fold: "open",
                                title: 'LCK'});
var group_Rivers = new ol.layer.Group({
                                layers: [lyr_ProjectPOI_Murai_11,lyr_Projectrivers_12,lyr_Poyan_13,lyr_Projectriver_roads_14,],
                                fold: "open",
                                title: 'Rivers'});
var group_POI = new ol.layer.Group({
                                layers: [lyr_ProjectPOI_Area_8,lyr_ProjectPOI_buildings_9,lyr_ProjectPOI_roads_10,],
                                fold: "open",
                                title: 'POI'});
var group_BufferZones = new ol.layer.Group({
                                layers: [lyr_ProjectPOI_4,lyr_ProjectPOI_LandUseAll_5,lyr_Projectreserve_target_6,lyr_Projectintersection_lck_7,],
                                fold: "open",
                                title: 'Buffer Zones'});
var group_SGOpenSpace = new ol.layer.Group({
                                layers: [lyr_Projectnaturalreserve_0,lyr_URA_MP19_SUBZONE_NO_SEA_PL_1,lyr_Projectwaterbody_2,lyr_ProjectOpenSpace_True_3,],
                                fold: "open",
                                title: 'SG Open Space'});

lyr_Projectnaturalreserve_0.setVisible(true);lyr_URA_MP19_SUBZONE_NO_SEA_PL_1.setVisible(true);lyr_Projectwaterbody_2.setVisible(true);lyr_ProjectOpenSpace_True_3.setVisible(true);lyr_ProjectPOI_4.setVisible(true);lyr_ProjectPOI_LandUseAll_5.setVisible(true);lyr_Projectreserve_target_6.setVisible(true);lyr_Projectintersection_lck_7.setVisible(true);lyr_ProjectPOI_Area_8.setVisible(true);lyr_ProjectPOI_buildings_9.setVisible(true);lyr_ProjectPOI_roads_10.setVisible(true);lyr_ProjectPOI_Murai_11.setVisible(true);lyr_Projectrivers_12.setVisible(true);lyr_Poyan_13.setVisible(true);lyr_Projectriver_roads_14.setVisible(true);lyr_ProjectPOI_Subzone_LCK_15.setVisible(true);lyr_ProjectPOI_LCK_16.setVisible(true);lyr_LCK_roads_prox_reclass_17.setVisible(true);lyr_Projectbuildings_lck_18.setVisible(true);
var layersList = [group_SGOpenSpace,group_BufferZones,group_POI,group_Rivers,group_LCK];
lyr_Projectnaturalreserve_0.set('fieldAliases', {'fid': 'fid', 'N_RESERVE': 'N_RESERVE', 'L_CODE': 'L_CODE', 'NAME': 'NAME', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_URA_MP19_SUBZONE_NO_SEA_PL_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'SUBZONE_NO': 'SUBZONE_NO', 'SUBZONE_N': 'SUBZONE_N', 'SUBZONE_C': 'SUBZONE_C', 'CA_IND': 'CA_IND', 'PLN_AREA_N': 'PLN_AREA_N', 'PLN_AREA_C': 'PLN_AREA_C', 'REGION_N': 'REGION_N', 'REGION_C': 'REGION_C', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'snippet': 'snippet', });
lyr_Projectwaterbody_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'LU_DESC': 'LU_DESC', 'GPR': 'GPR', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', });
lyr_ProjectOpenSpace_True_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'LU_DESC': 'LU_DESC', 'GPR': 'GPR', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', });
lyr_ProjectPOI_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'SUBZONE_NO': 'SUBZONE_NO', 'SUBZONE_N': 'SUBZONE_N', 'SUBZONE_C': 'SUBZONE_C', 'CA_IND': 'CA_IND', 'PLN_AREA_N': 'PLN_AREA_N', 'PLN_AREA_C': 'PLN_AREA_C', 'REGION_N': 'REGION_N', 'REGION_C': 'REGION_C', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'snippet': 'snippet', });
lyr_ProjectPOI_LandUseAll_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'LU_DESC': 'LU_DESC', 'GPR': 'GPR', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', });
lyr_Projectreserve_target_6.set('fieldAliases', {'fid': 'fid', 'N_RESERVE': 'N_RESERVE', 'L_CODE': 'L_CODE', 'NAME': 'NAME', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Projectintersection_lck_7.set('fieldAliases', {'fid': 'fid', 'N_RESERVE': 'N_RESERVE', 'L_CODE': 'L_CODE', 'NAME': 'NAME', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'fid_2': 'fid_2', 'N_RESERVE_2': 'N_RESERVE_2', 'L_CODE_2': 'L_CODE_2', 'NAME_2': 'NAME_2', 'Shape_Leng_2': 'Shape_Leng_2', 'Shape_Area_2': 'Shape_Area_2', });
lyr_ProjectPOI_Area_8.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'LU_DESC': 'LU_DESC', 'GPR': 'GPR', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', });
lyr_ProjectPOI_buildings_9.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', 'fid_2': 'fid_2', 'Name_2': 'Name_2', 'LU_DESC': 'LU_DESC', 'GPR': 'GPR', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', });
lyr_ProjectPOI_roads_10.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'fid_2': 'fid_2', 'Name_2': 'Name_2', 'LU_DESC': 'LU_DESC', 'GPR': 'GPR', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', });
lyr_ProjectPOI_Murai_11.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'SUBZONE_NO': 'SUBZONE_NO', 'SUBZONE_N': 'SUBZONE_N', 'SUBZONE_C': 'SUBZONE_C', 'CA_IND': 'CA_IND', 'PLN_AREA_N': 'PLN_AREA_N', 'PLN_AREA_C': 'PLN_AREA_C', 'REGION_N': 'REGION_N', 'REGION_C': 'REGION_C', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'snippet': 'snippet', });
lyr_Projectrivers_12.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'LU_DESC': 'LU_DESC', 'GPR': 'GPR', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'fid_2': 'fid_2', 'Name_2': 'Name_2', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'SUBZONE_NO': 'SUBZONE_NO', 'SUBZONE_N': 'SUBZONE_N', 'SUBZONE_C': 'SUBZONE_C', 'CA_IND': 'CA_IND', 'PLN_AREA_N': 'PLN_AREA_N', 'PLN_AREA_C': 'PLN_AREA_C', 'REGION_N': 'REGION_N', 'REGION_C': 'REGION_C', 'INC_CRC_2': 'INC_CRC_2', 'FMEL_UPD_D_2': 'FMEL_UPD_D_2', 'snippet': 'snippet', });
lyr_Projectriver_roads_14.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'fid_2': 'fid_2', 'Name_2': 'Name_2', 'LU_DESC': 'LU_DESC', 'GPR': 'GPR', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'fid_3': 'fid_3', 'Name_3': 'Name_3', 'LU_DESC_2': 'LU_DESC_2', 'GPR_2': 'GPR_2', 'INC_CRC_2': 'INC_CRC_2', 'FMEL_UPD_D_2': 'FMEL_UPD_D_2', 'fid_4': 'fid_4', 'Name_4': 'Name_4', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'SUBZONE_NO': 'SUBZONE_NO', 'SUBZONE_N': 'SUBZONE_N', 'SUBZONE_C': 'SUBZONE_C', 'CA_IND': 'CA_IND', 'PLN_AREA_N': 'PLN_AREA_N', 'PLN_AREA_C': 'PLN_AREA_C', 'REGION_N': 'REGION_N', 'REGION_C': 'REGION_C', 'INC_CRC_3': 'INC_CRC_3', 'FMEL_UPD_D_3': 'FMEL_UPD_D_3', 'snippet': 'snippet', });
lyr_ProjectPOI_Subzone_LCK_15.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'SUBZONE_NO': 'SUBZONE_NO', 'SUBZONE_N': 'SUBZONE_N', 'SUBZONE_C': 'SUBZONE_C', 'CA_IND': 'CA_IND', 'PLN_AREA_N': 'PLN_AREA_N', 'PLN_AREA_C': 'PLN_AREA_C', 'REGION_N': 'REGION_N', 'REGION_C': 'REGION_C', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'snippet': 'snippet', });
lyr_ProjectPOI_LCK_16.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'LU_DESC': 'LU_DESC', 'GPR': 'GPR', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', });
lyr_Projectbuildings_lck_18.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', 'fid_2': 'fid_2', 'Name_2': 'Name_2', 'LU_DESC': 'LU_DESC', 'GPR': 'GPR', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'POI_CODE': 'POI_CODE', });
lyr_Projectnaturalreserve_0.set('fieldImages', {'fid': '', 'N_RESERVE': '', 'L_CODE': '', 'NAME': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_URA_MP19_SUBZONE_NO_SEA_PL_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'SUBZONE_NO': '', 'SUBZONE_N': '', 'SUBZONE_C': '', 'CA_IND': '', 'PLN_AREA_N': '', 'PLN_AREA_C': '', 'REGION_N': '', 'REGION_C': '', 'INC_CRC': '', 'FMEL_UPD_D': '', 'snippet': '', });
lyr_Projectwaterbody_2.set('fieldImages', {'fid': '', 'Name': '', 'LU_DESC': '', 'GPR': '', 'INC_CRC': '', 'FMEL_UPD_D': '', });
lyr_ProjectOpenSpace_True_3.set('fieldImages', {'fid': '', 'Name': '', 'LU_DESC': '', 'GPR': '', 'INC_CRC': '', 'FMEL_UPD_D': '', });
lyr_ProjectPOI_4.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'SUBZONE_NO': '', 'SUBZONE_N': '', 'SUBZONE_C': '', 'CA_IND': '', 'PLN_AREA_N': '', 'PLN_AREA_C': '', 'REGION_N': '', 'REGION_C': '', 'INC_CRC': '', 'FMEL_UPD_D': '', 'snippet': '', });
lyr_ProjectPOI_LandUseAll_5.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'LU_DESC': 'TextEdit', 'GPR': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', });
lyr_Projectreserve_target_6.set('fieldImages', {'fid': '', 'N_RESERVE': '', 'L_CODE': '', 'NAME': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Projectintersection_lck_7.set('fieldImages', {'fid': '', 'N_RESERVE': '', 'L_CODE': '', 'NAME': '', 'Shape_Leng': '', 'Shape_Area': '', 'fid_2': '', 'N_RESERVE_2': '', 'L_CODE_2': '', 'NAME_2': '', 'Shape_Leng_2': '', 'Shape_Area_2': '', });
lyr_ProjectPOI_Area_8.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'LU_DESC': 'TextEdit', 'GPR': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', });
lyr_ProjectPOI_buildings_9.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'fid_2': 'TextEdit', 'Name_2': 'TextEdit', 'LU_DESC': 'TextEdit', 'GPR': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', });
lyr_ProjectPOI_roads_10.set('fieldImages', {'fid': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', 'fid_2': '', 'Name_2': '', 'LU_DESC': '', 'GPR': '', 'INC_CRC': '', 'FMEL_UPD_D': '', });
lyr_ProjectPOI_Murai_11.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'SUBZONE_NO': '', 'SUBZONE_N': '', 'SUBZONE_C': '', 'CA_IND': '', 'PLN_AREA_N': '', 'PLN_AREA_C': '', 'REGION_N': '', 'REGION_C': '', 'INC_CRC': '', 'FMEL_UPD_D': '', 'snippet': '', });
lyr_Projectrivers_12.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'LU_DESC': 'TextEdit', 'GPR': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', 'fid_2': 'TextEdit', 'Name_2': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'SUBZONE_NO': 'TextEdit', 'SUBZONE_N': 'TextEdit', 'SUBZONE_C': 'TextEdit', 'CA_IND': 'TextEdit', 'PLN_AREA_N': 'TextEdit', 'PLN_AREA_C': 'TextEdit', 'REGION_N': 'TextEdit', 'REGION_C': 'TextEdit', 'INC_CRC_2': 'TextEdit', 'FMEL_UPD_D_2': 'TextEdit', 'snippet': 'TextEdit', });
lyr_Projectriver_roads_14.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'fid_2': 'TextEdit', 'Name_2': 'TextEdit', 'LU_DESC': 'TextEdit', 'GPR': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', 'fid_3': 'TextEdit', 'Name_3': 'TextEdit', 'LU_DESC_2': 'TextEdit', 'GPR_2': 'TextEdit', 'INC_CRC_2': 'TextEdit', 'FMEL_UPD_D_2': 'TextEdit', 'fid_4': 'TextEdit', 'Name_4': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'SUBZONE_NO': 'TextEdit', 'SUBZONE_N': 'TextEdit', 'SUBZONE_C': 'TextEdit', 'CA_IND': 'TextEdit', 'PLN_AREA_N': 'TextEdit', 'PLN_AREA_C': 'TextEdit', 'REGION_N': 'TextEdit', 'REGION_C': 'TextEdit', 'INC_CRC_3': 'TextEdit', 'FMEL_UPD_D_3': 'TextEdit', 'snippet': 'TextEdit', });
lyr_ProjectPOI_Subzone_LCK_15.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'SUBZONE_NO': '', 'SUBZONE_N': '', 'SUBZONE_C': '', 'CA_IND': '', 'PLN_AREA_N': '', 'PLN_AREA_C': '', 'REGION_N': '', 'REGION_C': '', 'INC_CRC': '', 'FMEL_UPD_D': '', 'snippet': '', });
lyr_ProjectPOI_LCK_16.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'LU_DESC': 'TextEdit', 'GPR': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', });
lyr_Projectbuildings_lck_18.set('fieldImages', {'fid': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'type': '', 'fid_2': '', 'Name_2': '', 'LU_DESC': '', 'GPR': '', 'INC_CRC': '', 'FMEL_UPD_D': '', 'POI_CODE': '', });
lyr_Projectnaturalreserve_0.set('fieldLabels', {'fid': 'no label', 'N_RESERVE': 'no label', 'L_CODE': 'no label', 'NAME': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_URA_MP19_SUBZONE_NO_SEA_PL_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'SUBZONE_NO': 'no label', 'SUBZONE_N': 'no label', 'SUBZONE_C': 'no label', 'CA_IND': 'no label', 'PLN_AREA_N': 'no label', 'PLN_AREA_C': 'no label', 'REGION_N': 'no label', 'REGION_C': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'snippet': 'no label', });
lyr_Projectwaterbody_2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'LU_DESC': 'no label', 'GPR': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', });
lyr_ProjectOpenSpace_True_3.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'LU_DESC': 'no label', 'GPR': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', });
lyr_ProjectPOI_4.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'SUBZONE_NO': 'no label', 'SUBZONE_N': 'no label', 'SUBZONE_C': 'no label', 'CA_IND': 'no label', 'PLN_AREA_N': 'no label', 'PLN_AREA_C': 'no label', 'REGION_N': 'no label', 'REGION_C': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'snippet': 'no label', });
lyr_ProjectPOI_LandUseAll_5.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'LU_DESC': 'no label', 'GPR': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', });
lyr_Projectreserve_target_6.set('fieldLabels', {'fid': 'no label', 'N_RESERVE': 'no label', 'L_CODE': 'no label', 'NAME': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Projectintersection_lck_7.set('fieldLabels', {'fid': 'no label', 'N_RESERVE': 'no label', 'L_CODE': 'no label', 'NAME': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'fid_2': 'no label', 'N_RESERVE_2': 'no label', 'L_CODE_2': 'no label', 'NAME_2': 'no label', 'Shape_Leng_2': 'no label', 'Shape_Area_2': 'no label', });
lyr_ProjectPOI_Area_8.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'LU_DESC': 'no label', 'GPR': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', });
lyr_ProjectPOI_buildings_9.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', 'fid_2': 'no label', 'Name_2': 'no label', 'LU_DESC': 'no label', 'GPR': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', });
lyr_ProjectPOI_roads_10.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'fid_2': 'no label', 'Name_2': 'no label', 'LU_DESC': 'no label', 'GPR': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', });
lyr_ProjectPOI_Murai_11.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'SUBZONE_NO': 'no label', 'SUBZONE_N': 'no label', 'SUBZONE_C': 'no label', 'CA_IND': 'no label', 'PLN_AREA_N': 'no label', 'PLN_AREA_C': 'no label', 'REGION_N': 'no label', 'REGION_C': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'snippet': 'no label', });
lyr_Projectrivers_12.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'LU_DESC': 'no label', 'GPR': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'fid_2': 'no label', 'Name_2': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'SUBZONE_NO': 'no label', 'SUBZONE_N': 'no label', 'SUBZONE_C': 'no label', 'CA_IND': 'no label', 'PLN_AREA_N': 'no label', 'PLN_AREA_C': 'no label', 'REGION_N': 'no label', 'REGION_C': 'no label', 'INC_CRC_2': 'no label', 'FMEL_UPD_D_2': 'no label', 'snippet': 'no label', });
lyr_Projectriver_roads_14.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'fid_2': 'no label', 'Name_2': 'no label', 'LU_DESC': 'no label', 'GPR': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'fid_3': 'no label', 'Name_3': 'no label', 'LU_DESC_2': 'no label', 'GPR_2': 'no label', 'INC_CRC_2': 'no label', 'FMEL_UPD_D_2': 'no label', 'fid_4': 'no label', 'Name_4': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'SUBZONE_NO': 'no label', 'SUBZONE_N': 'no label', 'SUBZONE_C': 'no label', 'CA_IND': 'no label', 'PLN_AREA_N': 'no label', 'PLN_AREA_C': 'no label', 'REGION_N': 'no label', 'REGION_C': 'no label', 'INC_CRC_3': 'no label', 'FMEL_UPD_D_3': 'no label', 'snippet': 'no label', });
lyr_ProjectPOI_Subzone_LCK_15.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'SUBZONE_NO': 'no label', 'SUBZONE_N': 'no label', 'SUBZONE_C': 'no label', 'CA_IND': 'no label', 'PLN_AREA_N': 'no label', 'PLN_AREA_C': 'no label', 'REGION_N': 'no label', 'REGION_C': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'snippet': 'no label', });
lyr_ProjectPOI_LCK_16.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'LU_DESC': 'no label', 'GPR': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', });
lyr_Projectbuildings_lck_18.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', 'fid_2': 'no label', 'Name_2': 'no label', 'LU_DESC': 'no label', 'GPR': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'POI_CODE': 'no label', });
lyr_Projectbuildings_lck_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});