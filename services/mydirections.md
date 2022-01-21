# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?origin=place_id%3ACChIJ1eC-_HxxhlQRuxiCkf1NQPk&destination=place_id%3AChIJAx7UL8xyhlQR86Iqc-fUncc
&waypoints=place_id%3AChIJ39tg6zVxhlQRPuI976Oa8xw
%7Cplace_id%3AChIJHUYfoDVyhlQRrGFzpe5fhaQ
%7Cvia%3Aplace_id%3AChIJEaF3zSVzhlQRoHELsXvwmDM
&mode=bicycling
&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

## Next paste the full JSON response to this query here:

```JSON
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJ1eC-_HxxhlQRuxiCkf1NQPk",
         "types" : [ "establishment", "point_of_interest", "stadium" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJ39tg6zVxhlQRPuI976Oa8xw",
         "types" : [ "establishment", "food", "point_of_interest", "restaurant" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJHUYfoDVyhlQRrGFzpe5fhaQ",
         "types" : [ "establishment", "natural_feature" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJEaF3zSVzhlQRoHELsXvwmDM",
         "types" : [ "establishment", "park", "point_of_interest" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJAx7UL8xyhlQR86Iqc-fUncc",
         "types" : [ "establishment", "point_of_interest", "university" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 49.27738859999999,
               "lng" : -123.0566924
            },
            "southwest" : {
               "lat" : 49.2622382,
               "lng" : -123.2589733
            }
         },
         "copyrights" : "Map data ©2022 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "5.6 km",
                  "value" : 5565
               },
               "duration" : {
                  "text" : "25 mins",
                  "value" : 1516
               },
               "end_address" : "2451 Nanaimo St, Vancouver, BC V5N 5E5, Canada",
               "end_location" : {
                  "lat" : 49.2626552,
                  "lng" : -123.056694
               },
               "start_address" : "777 Pacific Blvd, Vancouver, BC V6B 4Y8, Canada",
               "start_location" : {
                  "lat" : 49.27738859999999,
                  "lng" : -123.1105802
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "24 m",
                        "value" : 24
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 21
                     },
                     "end_location" : {
                        "lat" : 49.2772114,
                        "lng" : -123.1103944
                     },
                     "html_instructions" : "Head \u003cb\u003esoutheast\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eWalk your bicycle\u003c/div\u003e",
                     "polyline" : {
                        "points" : "unwkHb`lnVDEX[BC"
                     },
                     "start_location" : {
                        "lat" : 49.27738859999999,
                        "lng" : -123.1105802
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 111
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 30
                     },
                     "end_location" : {
                        "lat" : 49.2765364,
                        "lng" : -123.1094956
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003ePacific Blvd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "qmwkH|~knVHaABODMDKBIFGRK^AJA^c@"
                     },
                     "start_location" : {
                        "lat" : 49.2772114,
                        "lng" : -123.1103944
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 239
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 71
                     },
                     "end_location" : {
                        "lat" : 49.2770973,
                        "lng" : -123.1064331
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003ePacific Blvd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "kiwkHjyknVMa@Si@M[IQIWGQIi@I_@E[C]CYCe@?mA@oD"
                     },
                     "start_location" : {
                        "lat" : 49.2765364,
                        "lng" : -123.1094956
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 147
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 22
                     },
                     "end_location" : {
                        "lat" : 49.2758002,
                        "lng" : -123.1066379
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eCarrall St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{lwkHdfknV`BBJFL@T@b@?B?\\@TDJFHH"
                     },
                     "start_location" : {
                        "lat" : 49.2770973,
                        "lng" : -123.1064331
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 253
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 46
                     },
                     "end_location" : {
                        "lat" : 49.27562,
                        "lng" : -123.1032139
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eSeaside Bicycle Route\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "wdwkHngknVDMDW@K?s@@w@?qA@}@@[?SBuA?wA?m@?iA?Q@E@E@CDG"
                     },
                     "start_location" : {
                        "lat" : 49.2758002,
                        "lng" : -123.1066379
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "26 m",
                        "value" : 26
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 5
                     },
                     "end_location" : {
                        "lat" : 49.2753867,
                        "lng" : -123.1031841
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eSeaside Bicycle Route\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "scwkH`rjnVHCF?J?J?BA"
                     },
                     "start_location" : {
                        "lat" : 49.27562,
                        "lng" : -123.1032139
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "36 m",
                        "value" : 36
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 9
                     },
                     "end_location" : {
                        "lat" : 49.2751239,
                        "lng" : -123.1028854
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eSeaside Bicycle Route\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "ebwkHzqjnV\\_@PSDE"
                     },
                     "start_location" : {
                        "lat" : 49.2753867,
                        "lng" : -123.1031841
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 323
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 52
                     },
                     "end_location" : {
                        "lat" : 49.2723755,
                        "lng" : -123.1027857
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eSeaside Bicycle Route\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "o`wkH`pjnV\\YFELGFETKHCTGHCTCH?`@AT?L?DAFABA@?DAXQLEHAJCJ?fA?J@D?@@@@DBJJBBPJNDL@J?JBBBBBDFFJJR"
                     },
                     "start_location" : {
                        "lat" : 49.2751239,
                        "lng" : -123.1028854
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "6 m",
                        "value" : 6
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 1
                     },
                     "end_location" : {
                        "lat" : 49.27238329999999,
                        "lng" : -123.1028703
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eSeaside Bicycle Route\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "kovkHlojnV?N"
                     },
                     "start_location" : {
                        "lat" : 49.2723755,
                        "lng" : -123.1027857
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "10 m",
                        "value" : 10
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 2
                     },
                     "end_location" : {
                        "lat" : 49.2723153,
                        "lng" : -123.1029583
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eSeaside Bicycle Route\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "kovkH|ojnVDDDJ"
                     },
                     "start_location" : {
                        "lat" : 49.27238329999999,
                        "lng" : -123.1028703
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 124
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 22
                     },
                     "end_location" : {
                        "lat" : 49.2719879,
                        "lng" : -123.1043736
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eSeaside Bicycle Route\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "_ovkHnpjnVLZBN@L?JAV@f@?rA?T?J@HBBB@ZF@?@@@?@@?@"
                     },
                     "start_location" : {
                        "lat" : 49.2723153,
                        "lng" : -123.1029583
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "7 m",
                        "value" : 7
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 1
                     },
                     "end_location" : {
                        "lat" : 49.2719824,
                        "lng" : -123.1044703
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eSeaside Bicycle Route\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}lvkHhyjnV@B?B?D?D"
                     },
                     "start_location" : {
                        "lat" : 49.2719879,
                        "lng" : -123.1043736
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "72 m",
                        "value" : 72
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 12
                     },
                     "end_location" : {
                        "lat" : 49.2715196,
                        "lng" : -123.104587
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eAthletes Way\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{lvkH|yjnVdASVEAd@?J"
                     },
                     "start_location" : {
                        "lat" : 49.2719824,
                        "lng" : -123.1044703
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 151
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 29
                     },
                     "end_location" : {
                        "lat" : 49.2701643,
                        "lng" : -123.1046228
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eOntario St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_jvkHtzjnVREN@b@?p@BdABP?h@@R?"
                     },
                     "start_location" : {
                        "lat" : 49.2715196,
                        "lng" : -123.104587
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 286
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 74
                     },
                     "end_location" : {
                        "lat" : 49.2700305,
                        "lng" : -123.1007539
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eE 1st Ave\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "oavkHzzjnV?c@@c@?W?O?KES?]?S?aE?UDwCBaD?MBG@EBEHO"
                     },
                     "start_location" : {
                        "lat" : 49.2701643,
                        "lng" : -123.1046228
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 521
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 139
                     },
                     "end_location" : {
                        "lat" : 49.26762189999999,
                        "lng" : -123.0949729
                     },
                     "html_instructions" : "Take the crosswalk",
                     "polyline" : {
                        "points" : "u`vkHtbjnVDe@Kq@DCFOl@mAd@eAfAyBhAcCxAaD\\u@n@sA`@{@Nm@@A@IJM@E@I@S@Q?E?O?e@?y@@i@"
                     },
                     "start_location" : {
                        "lat" : 49.2700305,
                        "lng" : -123.1007539
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "92 m",
                        "value" : 92
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 31
                     },
                     "end_location" : {
                        "lat" : 49.2668112,
                        "lng" : -123.0951692
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eThornton St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "squkHp~hnVRF@@JBJDXFRFJ@H?V@@?T?"
                     },
                     "start_location" : {
                        "lat" : 49.26762189999999,
                        "lng" : -123.0949729
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 km",
                        "value" : 1307
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 360
                     },
                     "end_location" : {
                        "lat" : 49.26516609999999,
                        "lng" : -123.0774846
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCentral Valley Greenway\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eGreat Northern Way\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Central Valley Greenway\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "qlukHx_inV?yC@]?oA?}C@c@?mA?u@@]?gC@u@?w@?eD?U?A@WBs@@a@BYDYJ_AR}ARiBBUHu@DYDYPcBHw@ZoC\\_DPaBBO?AToB`@mDNyATgBBWBY@W?U@[@U@sD@}C?iA?E?o@?E@q@?qA@aA?w@"
                     },
                     "start_location" : {
                        "lat" : 49.2668112,
                        "lng" : -123.0951692
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 207
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 91
                     },
                     "end_location" : {
                        "lat" : 49.2642239,
                        "lng" : -123.0755734
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eE 6th Ave\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ibukHfqenVDk@AY?cA?CBUDSPu@No@Pu@FSDGDGFCFAvA?"
                     },
                     "start_location" : {
                        "lat" : 49.26516609999999,
                        "lng" : -123.0774846
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 141
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 23
                     },
                     "end_location" : {
                        "lat" : 49.26422179999999,
                        "lng" : -123.0736315
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eE 7th Ave\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "k|tkHheenV?gD?{E"
                     },
                     "start_location" : {
                        "lat" : 49.2642239,
                        "lng" : -123.0755734
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "83 m",
                        "value" : 83
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 12
                     },
                     "end_location" : {
                        "lat" : 49.2649711,
                        "lng" : -123.0736018
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMosaic Bikeway\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eWoodland Dr\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "k|tkHdydnVSA]AM?M?k@A[?"
                     },
                     "start_location" : {
                        "lat" : 49.26422179999999,
                        "lng" : -123.0736315
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 364
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 155
                     },
                     "end_location" : {
                        "lat" : 49.2634886,
                        "lng" : -123.0691336
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eN Grandview Hwy\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "aaukH~xdnVJi@b@qBF[FUBMDOBO@K?Gt@eD|@wDFUJe@^wAn@{B"
                     },
                     "start_location" : {
                        "lat" : 49.2649711,
                        "lng" : -123.0736018
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 824
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 251
                     },
                     "end_location" : {
                        "lat" : 49.263649,
                        "lng" : -123.0581293
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ywtkH`}cnVq@E?_@?O@qA?K@u@@w@@oB?M?g@@w@?o@?uB?mB?{G@mB@eD@mB?yL@iI?A"
                     },
                     "start_location" : {
                        "lat" : 49.2634886,
                        "lng" : -123.0691336
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "49 m",
                        "value" : 49
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 6
                     },
                     "end_location" : {
                        "lat" : 49.26320519999999,
                        "lng" : -123.0581396
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eGarden Dr\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "yxtkHhxanVvA@"
                     },
                     "start_location" : {
                        "lat" : 49.263649,
                        "lng" : -123.0581293
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 105
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 18
                     },
                     "end_location" : {
                        "lat" : 49.26316809999999,
                        "lng" : -123.0566947
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eE 8th Ave\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "avtkHjxanVBiCBwC"
                     },
                     "start_location" : {
                        "lat" : 49.26320519999999,
                        "lng" : -123.0581396
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "57 m",
                        "value" : 57
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 33
                     },
                     "end_location" : {
                        "lat" : 49.2626552,
                        "lng" : -123.056694
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eNanaimo St\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "yutkHhoanV|@?f@?"
                     },
                     "start_location" : {
                        "lat" : 49.26316809999999,
                        "lng" : -123.0566947
                     },
                     "travel_mode" : "BICYCLING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "8.6 km",
                  "value" : 8586
               },
               "duration" : {
                  "text" : "29 mins",
                  "value" : 1713
               },
               "end_address" : "Kitsilano Beach, Vancouver, BC, Canada",
               "end_location" : {
                  "lat" : 49.2736003,
                  "lng" : -123.1549203
               },
               "start_address" : "2451 Nanaimo St, Vancouver, BC V5N 5E5, Canada",
               "start_location" : {
                  "lat" : 49.2626552,
                  "lng" : -123.056694
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "46 m",
                        "value" : 46
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 5
                     },
                     "end_location" : {
                        "lat" : 49.2622382,
                        "lng" : -123.0566975
                     },
                     "html_instructions" : "Head \u003cb\u003esouth\u003c/b\u003e on \u003cb\u003eNanaimo St\u003c/b\u003e toward \u003cb\u003eE Broadway\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eBC-7 W\u003c/b\u003e",
                     "polyline" : {
                        "points" : "srtkHhoanVF?f@@b@?"
                     },
                     "start_location" : {
                        "lat" : 49.2626552,
                        "lng" : -123.056694
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 108
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 38
                     },
                     "end_location" : {
                        "lat" : 49.26230289999999,
                        "lng" : -123.058172
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eE Broadway\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eBC-7 W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_ptkHjoanVEb@AP?@AVAdA?nC"
                     },
                     "start_location" : {
                        "lat" : 49.2622382,
                        "lng" : -123.0566975
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "48 m",
                        "value" : 48
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 12
                     },
                     "end_location" : {
                        "lat" : 49.2627356,
                        "lng" : -123.0581559
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eGarden Dr\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "kptkHpxanVwAA"
                     },
                     "start_location" : {
                        "lat" : 49.26230289999999,
                        "lng" : -123.058172
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 663
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 128
                     },
                     "end_location" : {
                        "lat" : 49.262786,
                        "lng" : -123.0672895
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "cstkHnxanV?t@ArGAlB?dDAt@?nBAlB?dDAlB?`A?lB?v@?dD?lA?lB?r@?B?V?@"
                     },
                     "start_location" : {
                        "lat" : 49.2627356,
                        "lng" : -123.0581559
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 524
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 132
                     },
                     "end_location" : {
                        "lat" : 49.2650658,
                        "lng" : -123.0735961
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eN Grandview Hwy\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "mstkHpqcnVkAzDY|@[rACTCDADo@zB_@vAKd@GT}@vDu@dDILGTs@pCOj@Ml@"
                     },
                     "start_location" : {
                        "lat" : 49.262786,
                        "lng" : -123.0672895
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "94 m",
                        "value" : 94
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 48
                     },
                     "end_location" : {
                        "lat" : 49.26422179999999,
                        "lng" : -123.0736315
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMosaic Bikeway\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eWoodland Dr\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "uaukH~xdnVH?H?Z?j@@L?L?\\@R@"
                     },
                     "start_location" : {
                        "lat" : 49.2650658,
                        "lng" : -123.0735961
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 141
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 23
                     },
                     "end_location" : {
                        "lat" : 49.2642239,
                        "lng" : -123.0755734
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eE 7th Ave\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "k|tkHdydnV?zE?fD"
                     },
                     "start_location" : {
                        "lat" : 49.26422179999999,
                        "lng" : -123.0736315
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "48 m",
                        "value" : 48
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 6
                     },
                     "end_location" : {
                        "lat" : 49.26466,
                        "lng" : -123.0755717
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMcLean Dr\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "k|tkHheenVwA?"
                     },
                     "start_location" : {
                        "lat" : 49.2642239,
                        "lng" : -123.0755734
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 440
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 126
                     },
                     "end_location" : {
                        "lat" : 49.2652252,
                        "lng" : -123.081356
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eE 6th Ave\u003c/b\u003e",
                     "polyline" : {
                        "points" : "c_ukHheenVG@GBEFEFGRQt@On@Qt@ERCT?B?bA@XEj@?v@A`A?pAAp@?D?n@?D?hAA|CArDATAZ"
                     },
                     "start_location" : {
                        "lat" : 49.26466,
                        "lng" : -123.0755717
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 1026
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 202
                     },
                     "end_location" : {
                        "lat" : 49.2668112,
                        "lng" : -123.0951692
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eCentral Valley Greenway\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eGreat Northern Way\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ubukHnifnV?TAVCXCVUfBOxAa@lDUnB?@CNQ`B]~C[nCIv@QbBEXEXIt@CTShBS|AK~@EXCXA`@Cr@AV?@?T?dD?v@At@?fCA\\?t@?lAAb@?|C?nAA\\?xC"
                     },
                     "start_location" : {
                        "lat" : 49.2652252,
                        "lng" : -123.081356
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "92 m",
                        "value" : 92
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 11
                     },
                     "end_location" : {
                        "lat" : 49.26762189999999,
                        "lng" : -123.0949729
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eThornton St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "qlukHx_inVU?A?WAI?KASGYGKEKCAASG"
                     },
                     "start_location" : {
                        "lat" : 49.2668112,
                        "lng" : -123.0951692
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 488
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 82
                     },
                     "end_location" : {
                        "lat" : 49.2700645,
                        "lng" : -123.1003149
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eE 1st Ave\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "squkHp~hnVAh@?x@?d@?N?DAPARAHADKLAHA@Ol@a@z@o@rA]t@yA`DiAbCgAxBe@dAm@lAGNEB"
                     },
                     "start_location" : {
                        "lat" : 49.26762189999999,
                        "lng" : -123.0949729
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.1 km",
                        "value" : 1146
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 243
                     },
                     "end_location" : {
                        "lat" : 49.2681299,
                        "lng" : -123.1148638
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eE 1st Ave\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{`vkH|_jnVJp@Ed@INCDADCF?LC`DEvC?T?`E?R?\\Kj@?DAFAH?F?\\?d@GhH?x@?v@?p@EnE?hACrC?`@Ab@?T?V@P?JBNBLBJDNfA`CHRZz@L`@DNPb@vApDh@vA~A`EJTFLBFDH@FDJBL?@@F@DEd@?J@H@JFR"
                     },
                     "start_location" : {
                        "lat" : 49.2700645,
                        "lng" : -123.1003149
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 280
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 49
                     },
                     "end_location" : {
                        "lat" : 49.2669988,
                        "lng" : -123.117962
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCommodore Rd\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "ytukHzzlnVFPJ^BJHXNVXn@`A`Cl@|Ar@dBFNDJ@D@B?B@B?D?B?H?DADENINOV"
                     },
                     "start_location" : {
                        "lat" : 49.2681299,
                        "lng" : -123.1148638
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 220
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 40
                     },
                     "end_location" : {
                        "lat" : 49.2662497,
                        "lng" : -123.1205453
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMoberly Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "wmukHfnmnVFh@@PD\\Fj@NlADb@BNBLBHFRDLDJDN@H@H?L?Z?F?H?J?J@HBLBH@DDFFBFBD@TD"
                     },
                     "start_location" : {
                        "lat" : 49.2669988,
                        "lng" : -123.117962
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 532
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 90
                     },
                     "end_location" : {
                        "lat" : 49.2663462,
                        "lng" : -123.1278413
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eCharleson\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "aiukHl~mnVFd@@L@P@R?RAV?bB?jA?fBAvAAfE?P?^C`FAxD?TA~@A`BAZANAJKt@"
                     },
                     "start_location" : {
                        "lat" : 49.2662497,
                        "lng" : -123.1205453
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 858
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 169
                     },
                     "end_location" : {
                        "lat" : 49.2694053,
                        "lng" : -123.1378836
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eLameys Mill Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "uiukH~konVClA?L?JA\\?l@Al@?V?D?VAZ@JAt@?NC|@Av@ANATCb@C`@Iz@Eb@Ed@KbACLARCRCXEZADUpAG\\ABKj@Mp@Kr@Mp@Mr@GZETQhAWtACJGXCNKh@IXMXKXMTWb@Wd@OTSXSREAMNKJA@MJIFKDMDMBIDc@LGBIFCBCFENAHCHEJCF"
                     },
                     "start_location" : {
                        "lat" : 49.2663462,
                        "lng" : -123.1278413
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 216
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 54
                     },
                     "end_location" : {
                        "lat" : 49.2697098,
                        "lng" : -123.1407911
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eW 2nd Ave\u003c/b\u003e",
                     "polyline" : {
                        "points" : "y|ukHvjqnVARCJENCJI`@CNCLEXCTAPANA\\?n@Av@ClBAt@AlA"
                     },
                     "start_location" : {
                        "lat" : 49.2694053,
                        "lng" : -123.1378836
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 454
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 70
                     },
                     "end_location" : {
                        "lat" : 49.2732697,
                        "lng" : -123.142993
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eFir St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "u~ukH||qnVkAAK@M@E@GBGBQPa@`@q@t@URm@f@MNOLMJONOJA@QLSNMLULYTMJKHED_@Zq@j@UP_@ZOLKDG@A?CAEGCAEICIIY"
                     },
                     "start_location" : {
                        "lat" : 49.2697098,
                        "lng" : -123.1407911
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 270
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 43
                     },
                     "end_location" : {
                        "lat" : 49.2737115,
                        "lng" : -123.146292
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}tvkHtjrnVc@`@IFKFCBMPKPKTEZAVAh@@p@FnA@jB@t@@l@Br@Bb@AZ"
                     },
                     "start_location" : {
                        "lat" : 49.2732697,
                        "lng" : -123.142993
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 129
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 27
                     },
                     "end_location" : {
                        "lat" : 49.2748702,
                        "lng" : -123.146235
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eChestnut St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "uwvkHh_snVg@AeBEyAC"
                     },
                     "start_location" : {
                        "lat" : 49.2737115,
                        "lng" : -123.146292
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 433
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 57
                     },
                     "end_location" : {
                        "lat" : 49.27498509999999,
                        "lng" : -123.1521978
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}~vkH|~rnVEbHAtA?`AC|F?lAEjE?n@?v@A`ACj@"
                     },
                     "start_location" : {
                        "lat" : 49.2748702,
                        "lng" : -123.146235
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "56 m",
                        "value" : 56
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 10
                     },
                     "end_location" : {
                        "lat" : 49.2745279,
                        "lng" : -123.1524976
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eArbutus St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "u_wkHfdtnVLJTRJFHFHDHBL@"
                     },
                     "start_location" : {
                        "lat" : 49.27498509999999,
                        "lng" : -123.1521978
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "45 m",
                        "value" : 45
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 7
                     },
                     "end_location" : {
                        "lat" : 49.274704,
                        "lng" : -123.1530245
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eCreelman Ave\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "y|vkHbftnV?BAFAD?FAH?FAFAJCJCFILED"
                     },
                     "start_location" : {
                        "lat" : 49.2745279,
                        "lng" : -123.1524976
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "39 m",
                        "value" : 39
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 7
                     },
                     "end_location" : {
                        "lat" : 49.2748736,
                        "lng" : -123.1533979
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eCreelman Ave\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "{}vkHjitnV?H?BAD?DCD?@A@A@A@A@C@?B?B?D?D?BA@?@A??@A?A?C?A?A@"
                     },
                     "start_location" : {
                        "lat" : 49.274704,
                        "lng" : -123.1530245
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "15 m",
                        "value" : 15
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 2
                     },
                     "end_location" : {
                        "lat" : 49.274876,
                        "lng" : -123.1535989
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eCreelman Ave\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}~vkHvktnV?L?LAJ"
                     },
                     "start_location" : {
                        "lat" : 49.2748736,
                        "lng" : -123.1533979
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 175
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 32
                     },
                     "end_location" : {
                        "lat" : 49.2736003,
                        "lng" : -123.1549203
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eSeaside Bicycle Route\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "__wkH~ltnVFDLLb@\\LFFDNFJBFBDBFFBBFDFHBBDFZZV\\LRHNHRHX"
                     },
                     "start_location" : {
                        "lat" : 49.274876,
                        "lng" : -123.1535989
                     },
                     "travel_mode" : "BICYCLING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "8.8 km",
                  "value" : 8795
               },
               "duration" : {
                  "text" : "35 mins",
                  "value" : 2120
               },
               "end_address" : "Vancouver, BC V6T 1Z4, Canada",
               "end_location" : {
                  "lat" : 49.2700515,
                  "lng" : -123.2560719
               },
               "start_address" : "Kitsilano Beach, Vancouver, BC, Canada",
               "start_location" : {
                  "lat" : 49.2736003,
                  "lng" : -123.1549203
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "74 m",
                        "value" : 74
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 12
                     },
                     "end_location" : {
                        "lat" : 49.2734458,
                        "lng" : -123.1558944
                     },
                     "html_instructions" : "Head \u003cb\u003esouthwest\u003c/b\u003e toward \u003cb\u003eSeaside Bicycle Route\u003c/b\u003e",
                     "polyline" : {
                        "points" : "_wvkHfutnVHZDRDXDV@X@Z?ZAL"
                     },
                     "start_location" : {
                        "lat" : 49.2736003,
                        "lng" : -123.1549203
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "46 m",
                        "value" : 46
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 8
                     },
                     "end_location" : {
                        "lat" : 49.2730689,
                        "lng" : -123.1560869
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "avvkHh{tnVf@FF@B@DDDDBDBDBB"
                     },
                     "start_location" : {
                        "lat" : 49.2734458,
                        "lng" : -123.1558944
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 239
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 54
                     },
                     "end_location" : {
                        "lat" : 49.2732271,
                        "lng" : -123.1593381
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "usvkHp|tnV?p@ApBAf@?X?N?b@Af@CtACRAHAJALATAP@@@B@D?D?F?FAZCZEj@AJ"
                     },
                     "start_location" : {
                        "lat" : 49.2730689,
                        "lng" : -123.1560869
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 372
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 86
                     },
                     "end_location" : {
                        "lat" : 49.2731692,
                        "lng" : -123.1643649
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "utvkHzpunVDBFDBFBHBF?B@H?TAlBAt@AlB?v@AnCA|B?v@ErG"
                     },
                     "start_location" : {
                        "lat" : 49.2732271,
                        "lng" : -123.1593381
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "49 m",
                        "value" : 49
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 16
                     },
                     "end_location" : {
                        "lat" : 49.2727303,
                        "lng" : -123.1643746
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eSeaside Bicycle Route\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eTrafalgar St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "itvkHfpvnVh@@l@?"
                     },
                     "start_location" : {
                        "lat" : 49.2731692,
                        "lng" : -123.1643649
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 312
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 75
                     },
                     "end_location" : {
                        "lat" : 49.27145669999999,
                        "lng" : -123.1681256
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003ePoint Grey Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "qqvkHhpvnVAp@?VBT@N@FDVFTH\\JZ\\hA`@rABLp@zBf@`Bl@nBBJBH"
                     },
                     "start_location" : {
                        "lat" : 49.2727303,
                        "lng" : -123.1643746
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "42 m",
                        "value" : 42
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 5
                     },
                     "end_location" : {
                        "lat" : 49.2713063,
                        "lng" : -123.1686441
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e at \u003cb\u003eMacdonald St\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "sivkHxgwnV?VBNX|@"
                     },
                     "start_location" : {
                        "lat" : 49.27145669999999,
                        "lng" : -123.1681256
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.4 km",
                        "value" : 1384
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 231
                     },
                     "end_location" : {
                        "lat" : 49.2722968,
                        "lng" : -123.1874649
                     },
                     "html_instructions" : "Continue onto \u003cb\u003ePoint Grey Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "uhvkH~jwnVHZH^DRDR@L@HH|A@RAlBAtBA|EAnFAP?N?NAL?LAJAXc@nIBl@Bh@AF?FCHEHADAB?D?H?L?D?D?BCDCFCb@QvCCXc@rICv@?Vi@vJU`ES`EQvDAZAT?T?^?\\?D?z@?^?\\E~H?L?J"
                     },
                     "start_location" : {
                        "lat" : 49.2713063,
                        "lng" : -123.1686441
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 404
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 54
                     },
                     "end_location" : {
                        "lat" : 49.2686648,
                        "lng" : -123.1876517
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eHighbury St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{nvkHr`{nV`BBt@@b@?P?jABb@@r@BxABxADvAFxAB"
                     },
                     "start_location" : {
                        "lat" : 49.2722968,
                        "lng" : -123.1874649
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.5 km",
                        "value" : 2536
                     },
                     "duration" : {
                        "text" : "15 mins",
                        "value" : 872
                     },
                     "end_location" : {
                        "lat" : 49.2687509,
                        "lng" : -123.2221723
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eW 4th Ave\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "cxukHxa{nV?rEIh@ErICjFAl@?~@CzE?\\CzFA|EAf@?dAAt@?VATAdD?j@AlB?v@?D?n@?R?B?TBXBXBXFXBNZvANt@Nj@Hd@Hd@BNDZBV@X@T@VDb@?@?d@Ad@?`@AH?BA`@C^CVETEZo@hE_AjGCZCL?NAL?P?bA?ZE~BAp@?~@AV?f@ApBAv@?hACrEAzC?x@At@?VA|AA|BAdDCbD?h@?jB?VApA?V?`B?nA?L?H@~@?V@R@f@?VBjA@B?BFhB@VBb@?l@ALJnB\\hHH~A"
                     },
                     "start_location" : {
                        "lat" : 49.2686648,
                        "lng" : -123.1876517
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "81 m",
                        "value" : 81
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 14
                     },
                     "end_location" : {
                        "lat" : 49.26865189999999,
                        "lng" : -123.2232834
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eChancellor Blvd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "uxukHpyaoVHnADdA@d@@`@"
                     },
                     "start_location" : {
                        "lat" : 49.2687509,
                        "lng" : -123.2221723
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 223
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 29
                     },
                     "end_location" : {
                        "lat" : 49.2702618,
                        "lng" : -123.2249451
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eSpanish Trail (23)\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "axukHn`boVGBMDMFIDIDGNGJMNGBA@ODODGDGJGRGNIVADGLIRCLONIFQDURSNMJMJGLED"
                     },
                     "start_location" : {
                        "lat" : 49.26865189999999,
                        "lng" : -123.2232834
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 368
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 68
                     },
                     "end_location" : {
                        "lat" : 49.2708816,
                        "lng" : -123.2294369
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eChancellor Trail (29)\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "cbvkH|jboV?D@TAHCHEDINCTANGZAJCPGZ?DCLAJKXCNM`@CX?T?N?PATC^@LDLHNHJ@BDR?NEPGb@?LEPIPMXM^Of@CTCNK\\AD?D?JBPDX?FRN?@"
                     },
                     "start_location" : {
                        "lat" : 49.2702618,
                        "lng" : -123.2249451
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.9 km",
                        "value" : 1903
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 356
                     },
                     "end_location" : {
                        "lat" : 49.27135269999999,
                        "lng" : -123.2540229
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eChancellor Blvd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_fvkH~fcoVm@nBUz@I\\GPOl@[pAQp@CNq@bD_@dBGb@G\\SfAMp@EVERKp@YnBADIh@ABE^EXGj@ABSfBGf@ALc@dEALGt@QhBIbAMdC[rGEfAEzACh@EbBCrB?^AzA?`@?J?L?\\@dB@zB?N?`@@Z?H@\\@p@FhDBbABn@\\dF@VFXNrAJ|@Ff@?DNhAV`BBPBLH`@Hb@FZVdAJ`@DNRr@h@zA\\~@@BPb@BH@BJVd@fA|@jB"
                     },
                     "start_location" : {
                        "lat" : 49.2708816,
                        "lng" : -123.2294369
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 464
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 99
                     },
                     "end_location" : {
                        "lat" : 49.2686792,
                        "lng" : -123.2588924
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eNW Marine Dr\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "}hvkHr`hoVRTZTJNbA~BTj@DJJVPd@z@xB^`ADJDJVl@Zr@Rd@N^FLl@|ANb@@@Tj@HNr@pA"
                     },
                     "start_location" : {
                        "lat" : 49.27135269999999,
                        "lng" : -123.2540229
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "17 m",
                        "value" : 17
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 3
                     },
                     "end_location" : {
                        "lat" : 49.2688212,
                        "lng" : -123.2589733
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eNW Marine Dr\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "gxukH`_ioVMJA@C@C?C?"
                     },
                     "start_location" : {
                        "lat" : 49.2686792,
                        "lng" : -123.2588924
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "25 m",
                        "value" : 25
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 25
                     },
                     "end_location" : {
                        "lat" : 49.26862269999999,
                        "lng" : -123.2588363
                     },
                     "html_instructions" : "Make a \u003cb\u003eU-turn\u003c/b\u003e",
                     "maneuver" : "uturn-left",
                     "polyline" : {
                        "points" : "cyukHp_ioVB?B?BA@ALKJI"
                     },
                     "start_location" : {
                        "lat" : 49.2688212,
                        "lng" : -123.2589733
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 256
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 113
                     },
                     "end_location" : {
                        "lat" : 49.2700515,
                        "lng" : -123.2560719
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eNW Marine Dr\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{wukHv~hoVu@sAGQWk@?COc@_@cAMWEOOa@Se@[s@Wm@CIg@oA"
                     },
                     "start_location" : {
                        "lat" : 49.26862269999999,
                        "lng" : -123.2588363
                     },
                     "travel_mode" : "BICYCLING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : [
                  {
                     "location" : {
                        "lat" : 49.2707263,
                        "lng" : -123.2270975
                     },
                     "step_index" : 12,
                     "step_interpolation" : 0.4606355598834289
                  }
               ]
            }
         ],
         "overview_polyline" : {
            "points" : "unwkHb`lnV^a@LeARs@ZSj@C^c@Ma@a@eAe@eBWsBCsB@oD`BBXHx@@`@@`@LHHDMFc@B{FD}E@oCRUb@ArAsAr@_@~@SbBGv@[jBANFNN`@Ph@H\\j@?NDDRf@B`A@|CDL^HD@@B@R|AYAp@b@CtABtCD@oBEqAHqOHa@HODe@Kq@DCt@}AlB_EpFoLp@iBBKLSB]@mA@cBTHdAXn@BT?@wD@_J@{EFwJVuCt@sGvBqRfAyJ^qDFyO@iCD_E?gAHi@z@oDJONEvA??gD?{ESAk@Ay@A[?Ji@j@mCTcAtBqJbBoGq@E?o@DkEB}EDkj@@kIvA@BiCBwC|@?n@?jA@Gt@CnFwAAAhICxLC|Y?|DaCnIy@|CqBjI_ArD{@fD]xAR?bB@p@B?bK_B@MJo@`C[bB@|AEbBCdE?dCGbKI~AqCrVeBtOi@pEGlBCpMAdIAlB?xCU?A?a@AeAWMESGAh@?~A?TGt@MVQn@iEfJeFpKMRJp@Ed@MTELI|I?tEKhAC^GfLKrRDdAFXlApCx@`CrFnNh@xAA~@Rz@Nj@Xp@|DtJRv@Gd@Yf@Hz@b@zDRz@Rr@@z@@j@Nd@j@NLxAEtREpMGlEM`ACzACdCE`FI`CYfDUxBa@lCsAtHs@`Ea@lB_AlBoAhBSLMLq@^cAZMJIVOf@Oz@WxAItAGjGAlAkAAYBg@ZsAvAcAz@{@x@w@j@oDtCqA`AI@IIWo@}@t@Yb@Qp@C`AH`CHbG@~@mCGyACEbHAvCIfQAxBCj@LJ`@ZRLVDAJC^Kf@OR?LERGFE\\E@E?ANAXTRhAr@`@RVVfAtAf@xAR~A@v@ALf@FJBJJFJBt@CbEAjAGhBGx@?RBHAp@IfABNR^?pCEjJAtDErGh@@l@?Ap@Bl@PdA`FrPFTBf@r@lCRhCCtMC`HE`Ac@nIBl@@p@K`@Ev@]|EqAzW}@vQAhB?~BElI?J`BBxA@|ABjGNpDJ?rEIh@I~PAlBIrUCzDEvMFlAj@zCr@lDN|AHrACvBI|A{BfOIfAEpFKxRMhYAvMJdGLhDAz@h@xKZzG@`@UHWLQT_@`@_@JOP[`AQ`@S\\[Li@b@i@j@?d@INMd@OhAMz@a@dBAlAAl@N\\JNDb@StAu@rBSbA@h@D`@RPuAzEaA`EaBjIm@dDgAzH_BtOy@dPS|I@vLPtK`@tGHp@b@~Dn@jEr@fDnA`Et@pBpBnEn@j@nAnCx@tBfBrE~CxH^z@r@pAMJEBG?LCXU}@eBgAwCw@oB_B{D"
         },
         "summary" : "Central Valley Greenway",
         "warnings" : [
            "Bicycling directions are in beta. Use caution – This route may contain streets that aren't suited for bicycling."
         ],
         "waypoint_order" : []
      }
   ],
   "status" : "OK"
}
```
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
