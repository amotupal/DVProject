var data = [{
        "status": "http_302",
        "hits": 0,
        "date": "01/03/2013"
    },
    {
        "status": "http_200",
        "hits": 90,
        "date": "01/03/2013"
    },
    {
        "status": "http_200",
        "hits": 200,
        "date": "01/07/2013"
    },
    {
        "status": "http_302",
        "hits": 254,
        "date": "01/06/2013"
    },
    {
        "status": "http_200",
        "hits": 200,
        "date": "01/06/2013"
    },
    {
        "status": "http_404",
        "hits": 123,
        "date": "01/06/2013"
    },
    {
        "status": "http_302",
        "hits": 0,
        "date": "01/05/2013"
    },
    {
        "status": "http_200",
        "hits": 90,
        "date": "01/05/2013"
    },
    {
        "status": "http_404",
        "hits": 65,
        "date": "01/05/2013"
    },
    {
        "status": "http_302",
        "hits": 34,
        "date": "01/04/2013"
    },
    {
        "status": "http_200",
        "hits": 90,
        "date": "01/04/2013"
    },
    {
        "status": "http_404",
        "hits": 123,
        "date": "01/04/2013"
    },
    {
        "status": "http_302",
        "hits": 100,
        "date": "01/07/2013"
    },
    {
        "status": "http_404",
        "hits": 144,
        "date": "01/07/2013"
    },
    {
        "status": "http_404",
        "hits": 28,
        "date": "01/03/2013"
    },
    {
        "status": "http_302",
        "hits": 17,
        "date": "01/02/2013"
    },
    {
        "status": "http_200",
        "hits": 10,
        "date": "01/02/2013"
    },
    {
        "status": "http_404",
        "hits": 1,
        "date": "01/02/2013"
    },
    {
        "status": "http_302",
        "hits": 23,
        "date": "01/01/2013"
    },
    {
        "status": "http_200",
        "hits": 90,
        "date": "01/01/2013"
    },
    {
        "status": "http_404",
        "hits": 2,
        "date": "01/01/2013"
    },
    {
        "status": "http_302",
        "hits": 87,
        "date": "12/31/2012"
    },
    {
        "status": "http_200",
        "hits": 90,
        "date": "12/31/2012"
    },
    {
        "status": "http_302",
        "hits": 100,
        "date": "12/27/2012"
    },
    {
        "status": "http_404",
        "hits": 2,
        "date": "12/27/2012"
    },
    {
        "status": "http_200",
        "hits": 90,
        "date": "12/30/2012"
    },
    {
        "status": "http_404",
        "hits": 2,
        "date": "12/30/2012"
    },
    {
        "status": "http_302",
        "hits": 200,
        "date": "12/29/2012"
    },
    {
        "status": "http_200",
        "hits": 300,
        "date": "12/29/2012"
    },
    {
        "status": "http_404",
        "hits": 116,
        "date": "12/29/2012"
    },
    {
        "status": "http_302",
        "hits": 100,
        "date": "12/28/2012"
    },
    {
        "status": "http_200",
        "hits": 10,
        "date": "12/28/2012"
    },
    {
        "status": "http_404",
        "hits": 77,
        "date": "12/28/2012"
    },
    {
        "status": "http_200",
        "hits": 190,
        "date": "12/27/2012"
    },
    {
        "status": "http_404",
        "hits": 100,
        "date": "12/31/2012"
    },
    {
        "status": "http_302",
        "hits": 0,
        "date": "12/30/2012"
    },
    {
        "status": "http_404",
        "hits": 100,
        "date": "12/31/2012"
    },
    {
        "status": "http_404",
        "hits": 123,
        "date": "12/30/2012"
    },
];

full_states = {};
full_states['WA'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/WA.json";
full_states['NV'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/NV.json";
full_states['ID'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/ID.json";
full_states['AK'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/AK.json";
full_states['KY'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/KY.json";
full_states['NC'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/NC.json";
full_states['ND'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/ND.json";
full_states['CO'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/CO.json";
full_states['NJ'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/NJ.json";
full_states['TN'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/TN.json";
full_states['SC'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/SC.json";
full_states['FL'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/FL.json";
full_states['AZ'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/AZ.json";
full_states['IN'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/IN.json";
full_states['HI'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/HI.json";
full_states['ME'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/ME.json";
full_states['NY'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/NY.json";
full_states['DE'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/DE.json";
full_states['IA'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/IA.json";
full_states['GA'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/GA.json";
full_states['NE'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/NE.json";
full_states['MD'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/MD.json";
full_states['TX'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/TX.json";
full_states['CT'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/CT.json";
full_states['VT'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/VT.json";
full_states['WY'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/WY.json";
full_states['LA'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/LA.json";
full_states['AL'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/AL.json";
full_states['MA'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/MA.json";
full_states['CA'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/CA.json";
full_states['PA'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/PA.json";
full_states['MN'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/MN.json";
full_states['NH'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/NH.json";
full_states['NM'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/NM.json";
full_states['VA'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/VA.json";
full_states['IL'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/IL.json";
full_states['MS'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/MS.json";
full_states['RI'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/RI.json";
full_states['AR'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/AR.json";
full_states['MI'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/MI.json";
full_states['OK'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/OK.json";
full_states['OR'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/OR.json";
full_states['PR'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/PR.json";
full_states['KS'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/KS.json";
full_states['OH'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/OH.json";
full_states['DC'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/DC.json";
full_states['UT'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/UT.json";
full_states['WI'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/WI.json";
full_states['SD'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/SD.json";
full_states['MT'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/MT.json";
full_states['MO'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/MO.json";
full_states['WV'] = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/WV.json";

// var state = 'AZ';

var countyJson = {};

var usCounties;

// full_states[0].keys().forEach((d) => {
//     console.log(d);
// })

function readGeoJSon(state_name, cb) {
    d3.json(full_states[state_name], function (_countyJson) {
        cb(state_name, _countyJson);
    });
}

for (propertyName in full_states) {
    // countyJson[propertyName] = readGeoJSon(propertyName);
    readGeoJSon(propertyName, function (_name, _countyJson) {
        countyJson[_name] = _countyJson;
    })

    // console.log(readGeoJSon(propertyName))
}
var usCountiesJsonPath = "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/AZ.json"

d3.json(usCountiesJsonPath, (_usCounties) => {
    usCounties = _usCounties;
    console.log(usCounties);
})


var color_sheme = ["#E2F2FF", "#C4E4FF", "#9ED2FF", "#81C5FF", "#6BBAFF", "#51AEFF", "#36A2FF", "#1E96FF", "#0089FF", "#0061B5"];

// var color_sheme = ['#006837', '#1a9850', '#66bd63', '#a6d96a', '#d9ef8b', '#fee08b', '#fdae61', '#f46d43', '#d73027', '#a50026']
// ['#a50026','#d73027','#f46d43','#fdae61','#fee08b','#d9ef8b','#a6d96a','#66bd63','#1a9850','#006837'];
// ["#E2F2FF", "#C4E4FF", "#9ED2FF", "#81C5FF", "#6BBAFF", "#51AEFF", "#36A2FF", "#1E96FF", "#0089FF", "#0061B5"];
var ndx = crossfilter(data);
var parseDate = d3.time.format("%m/%d/%Y").parse;
var numberFormat = d3.format('.2f');
data.forEach(function (d) {
    d.date = parseDate(d.date);
    d.Year = d.date.getFullYear();
    d.Day = d.date.getDay() + 1;
});
/************
Status Ring
*************/
var statusRingChart = dc.pieChart("#dc-sts-pie-graph", "chart");
var statusDim = ndx.dimension(function (d) {
    return d.status;
});
var hit_status = statusDim.group().reduceSum(function (d) {
    return d.hits;
});

var dateDim = ndx.dimension(function (d) {
    return d.date;
});

// statusRingChart
//     .width(220).height(220)
//     .legend(dc.legend().x(65).y(65).itemHeight(13).gap(5))
//     .dimension(statusDim)
//     .group(hit_status)
//     .innerRadius(35)
//     .externalRadiusPadding(50)
//     .drawPaths(true)
//     .externalLabels(50)
//     .renderLabel(false)
//     .renderTitle(false)
//     .ordinalColors(["#78CC00", "#7B71C5", "#56B2EA", "#E064CD", "#F8B700"]);

statusRingChart
    .width(260)
    .height(220)
    .externalLabels(25)
    .externalRadiusPadding(30)
    .drawPaths(true)
    .dimension(statusDim)
    .group(hit_status)
    .ordinalColors(["#78CC00", "#7B71C5", "#56B2EA", "#E064CD", "#F8B700"]);

dc.renderAll("chart");



// $('#dc-yr-pie-graph').on('click', function () {

//     var minDate2 = dateDim.bottom(1)[0].date;
//     var maxDate2 = dateDim.top(1)[0].date;
//     // console.log("minDate2: ",minDate2,"maxDate2: ",maxDate2)
//     volumeChart.x(d3.time.scale().domain([minDate2, maxDate2]));
//     volumeChart.redraw();
// });
//var temp;
var demo;
var states;
var stateRaisedCount;
var accident_facts;
var population_map = {};

var github_path = "https://raw.githubusercontent.com/amotupal/DVProject/master/Sample_Data/state_population.csv"
var local_path = "../Sample_Data/state_population.csv"
d3.csv(github_path, (error, pops) => {
    if (error) {
        console.log(error);
    } else {
        pops.forEach((item, index) => {
            population_map[item.State] = item.Population;
        });
        // console.log(population_map);
    }
});

var geoJson;
d3.json("Data/us_states.json", function (statesJson) {
    geoJson = statesJson;
});

var dimValues = ["FATALS","PEDS","HIT_RUN","DRUNK_DR"]
var path = "https://raw.githubusercontent.com/amotupal/DVProject/master/Sample_Data/accident_new.csv"


// d3.csv("https://raw.githubusercontent.com/amotupal/DVProject/master/Sample_Data/accident_new.csv", function(csv) {
//     //console.log("what:::",csv)
//   vis.datum(csv).call(chart);
// });
var local_path = "../Sample_Data/accident_new.csv"
var dataSet;
function drawParallelStes(dimen, path){
    var chart = d3.parsets()
        .dimensions(dimen)
        .width(750).height(450);
    var vis = d3.select("#dc-parallel-graph").append("svg").attr("id","parallelSets")
        .attr("width", chart.width())
        .attr("height", chart.height());
    d3.csv(path,function(error, csv){
        vis.datum(csv).call(chart)
    })
}
var parseDate1 = d3.time.format("%Y-%m-%d %H:%M:%S").parse;
drawParallelStes(dimValues, path);


var testDim;
d3.csv(path, (error, csv) => {
    dataSet = csv;
    csv.forEach((item) => {
        item.Year = parseDate1(item.TimeStamp).getFullYear();
        item.Month = parseDate1(item.TimeStamp).getMonth();
        var tempDate = new Date(item.TimeStamp);
        item.TimeStamp = tempDate;
        item.FATALS = +item.FATALS;
        item.PERSONS = +item.PERSONS;
        item.HIT_RUN = +item.HIT_RUN;
    });

    // var nested_data = d3.nest()
    // .key(function(d) { return d.STATE_ABBR}).sortKeys(d3.ascending)
    // .rollup(function(v) { return d3.sum(v, function(d) { return d.HIT_RUN + d.SCH_BUS; }); })
    // .entries(csv);

    // var list = d3.select("#featSlect")

    // list.selectAll("option")
    //     .data(nested_data)
    //     .enter()
    //     .append("option")
    //     .attr("value", function(d) {return d.key;})
    //     .text(function(d) {
    //     return d.key; });


    var expenseMetrics = d3.nest()
        .key(function(d) { return d.STATE_ABBR; })
        .rollup(function(v) { return d3.sum(v, function(d) { return d.HIT_RUN + d.SCH_BUS; }); })
        .map(csv);
    
    // console.log("expenseMetrics: ",JSON.stringify(expenseMetrics));

    // console.log(csv)
    // console.log(typeof csv.TimeStamp)
    accident_facts = crossfilter(csv);

    states = accident_facts.dimension(function (d) {
        return d.STATE_ABBR;
    });
    stateGroup = states.group();
    stateRaisedCount = stateGroup.reduceCount();
    stateCounts = stateRaisedCount.all()

    stateRaisedFatalities = stateGroup.reduceSum(function (d) {
        return d.FATALS;
    });
    var statevalues = []
    stateCounts.forEach((index, value) => {
        statevalues.push(index.value / population_map[index.key])
    });
    var top_state = d3.max(statevalues)
    var bottom_state = d3.min(statevalues)

    // console.log(top_state, bottom_state)
    // print_filter(stateRaisedCount)
    // orderedStateGroup = stateGroup.top(51)
    // var top_state = orderedStateGroup[0].value / population_map[orderedStateGroup[0].key];
    // var bottom_state = orderedStateGroup[50].value / population_map[orderedStateGroup[50].key];
    console.log(top_state, bottom_state)

    var usChart = dc.geoChoroplethChart("#dc-map-chart", "map");
    // var scale = Math.min(960 * 1.2, 500 * 2.1);

    // var projection = albersUsaPr()
    //       .scale(scale)
    //       .translate([width / 2, height / 2]);
    usChart.width(960)
        .height(500)
        .dimension(states)
        .group(stateRaisedCount)
        .colors(color_sheme)
        .colorDomain([bottom_state, top_state])
        // .projection(projection)
        .colorAccessor(function (d) {
            return d;
        })
        .overlayGeoJson(geoJson.features, "state", function (d) {
            return d.properties.name;
        })
        .valueAccessor(function (kv) {
            // console.log("kv: ",kv);
            return kv.value / population_map[kv.key];
        })
        .title(function (d) {
            // console.log(d);
            return "State: " + d.key + "\nTotal Amount Raised: " + numberFormat(d.value ? d.value : 0) + "M";
        });


    // var state = 'AZ';
    // // states.filterExact(state);
    // counties = accident_facts.dimension(function (d) {
    //     return d.COUNTY;
    // });
    // countyGroup = counties.group();
    
    // countyRaisedCount = countyGroup.reduceCount();
    // // counties.filterFunction(function(d,k){
    // //     // console.log(d, k)
    // //     return k > 0;
    // // })

    // // countyCounts = countyRaisedCount.all()
    // // print_filter(countyRaisedCount)
    // // countyRaisedFatalities = countyGroup.reduceSum(function (d) {
    // //     return d.FATALS;
    // // });

    // // var countyvalues = []
    // // countyCounts.forEach((index, value) => {
    // //     if (index.key[0] == state) {
    // //         countyvalues.push(index.value)
    // //     }

    // //     //  / population_map[index.key])
    // // });
    // // // console.log(countyvalues)
    // // var top_county = d3.max(countyvalues)
    // // var bottom_county = d3.min(countyvalues)


    // // // console.log(top_county, bottom_county)

    // // // orderedcountyGroup = countyGroup.top(51)
    // // // var top_county = orderedcountyGroup[0].value / population_map[orderedcountyGroup[0].key];
    // // // var bottom_county = orderedcountyGroup[50].value / population_map[orderedcountyGroup[50].key];

    // var countyChart = dc.geoChoroplethChart("#dc-map-counties", "chart");
    // // console.log(countyJson[state])
    // countyChart.width(1460)
    //     .height(1000)
    //     .dimension(counties)
    //     .group(countyRaisedCount)
    //     // .colors(color_sheme)
    //     // .colorDomain([bottom_county, top_county])
    //     // .colorAccessor(function (d) {
    //     //     console.log(d);
    //     //     return d;
    //     // })
    //     .overlayGeoJson(countyJson[state], "county", function (d) {
    //         // console.log(d);
    //         return d.features.counties.name;
    //     })
    //     .valueAccessor(function (kv) {
    //         // console.log("kv: ",kv);
    //         return kv.value;
    //         //  / population_map[kv.key];
    //     })
    //     .title(function (d) {
    //         return "county: " + d.key[1] + "\nAccidents per 10000 people: " + numberFormat(d.value ? d.value : 0);
    //     });

// dc.renderAll("chart")

    counties = accident_facts.dimension(function (d) {
        return d.GEO_ID;
    });
    countyGroup = counties.group();
    countyRaisedCount = countyGroup.reduceCount();
    countyCounts = countyRaisedCount.all()

    countyRaisedFatalities = countyGroup.reduceSum(function (d) {
        return d.FATALS;
    });
    var countyvalues = []
    countyCounts.forEach((index, value) => {
        countyvalues.push(index.value)
        //  / population_map[index.key])
    });
    var top_county = d3.max(countyvalues)
    var bottom_county = d3.min(countyvalues)

    // console.log(top_state, bottom_state)
    // print_filter(stateRaisedCount)
    // orderedStateGroup = stateGroup.top(51)
    // var top_state = orderedStateGroup[0].value / population_map[orderedStateGroup[0].key];
    // var bottom_state = orderedStateGroup[50].value / population_map[orderedStateGroup[50].key];
    var stateChart;


    // var scale = Math.min(960 * 1.2, 500 * 2.1);
    var width = 560;
    var height = 500;

    dc.renderAll("counties_chart")
    var previous;

    $('#dc-map-chart').on('click', function (d) {
        var selected_states = usChart.filters()
        console.log(selected_states)


        if (selected_states.length == 1) {
            var projection = d3.geo.albersUsa()
                .scale(2000)
                .translate([400, 0]);
            // stateChart.removeGeoJson(previous)
            previous = selected_states[0];
            stateChart = dc.geoChoroplethChart("#dc-map-counties", "counties_chart");
            stateChart.width(560)
                .height(500)
                .dimension(counties)
                .group(countyRaisedCount)
                .colors(color_sheme)
                // .colorDomain([bottom_state, top_state])
                .projection(projection)
                .colorAccessor(function (d) {
                    return d;
                })
                .overlayGeoJson(countyJson[selected_states].features, selected_states, function (d) {
                    return d.properties.GEO_ID;
                })
                .valueAccessor(function (kv) {
                    // console.log("kv: ",kv);
                    return kv.value;
                    //  / population_map[kv.key];
                })
                .title(function (d) {
                    // console.log(d);
                    return "State: " + d.key + "\nTotal Amount Raised: " + numberFormat(d.value ? d.value : 0) + "M";
                });
            // stateChart.projection(projection);
            // stateChart.resetSvg();
            dc.renderAll('counties_chart');

        } else {
            stateChart.resetSvg();
        }
        // var minDate2 = dateDim.bottom(1)[0].date;
        // var maxDate2 = dateDim.top(1)[0].date;
        // // console.log("minDate2: ",minDate2,"maxDate2: ",maxDate2)
        // volumeChart.x(d3.time.scale().domain([minDate2, maxDate2]));
        // volumeChart.redraw();
    });

    /************
    Year Ring
    *************/
    var yearRingChart = dc.pieChart("#dc-yr-pie-graph", "map");
    var accYearDim = accident_facts.dimension(function (d) {
        return +d.Year;
    });
    // print_filter("yearDim");
    var acc_year_total = accYearDim.group().reduceCount(function (d) {
        return d.Year;
    });
    yearRingChart
        .width(180).height(180)
        .legend(dc.legend().x(70).y(70).itemHeight(13).gap(5))
        .dimension(accYearDim)
        .group(acc_year_total)
        .innerRadius(45)
        .renderLabel(false)
        .renderTitle(false)
        .ordinalColors(["#78CC00", "#7B71C5", "#56B2EA", "#E064CD", "#F8B700"]);
    /************
    Stacked Area Chart
    *************/
    var stackedAreaChart = dc.lineChart("#dc-line-graph", "map");
    var dateDim = accident_facts.dimension(function (d) {
        return d.TimeStamp.getMonth();
    });
    var incidents = dateDim.group().reduceCount();
    // print_filter()
    // var minDate = dateDim.bottom(1)[0].TimeStamp;
    // var maxDate = dateDim.top(1)[0].TimeStamp;
    var fatalities = dateDim.group().reduceSum(function (d) {
        return d.FATALS;
    });
    // console.log("minDate: ", minDate, ", maxDate: ", maxDate);
    var dateFormat = d3.time.format("%Y-%m-%d %H:%M:%S").parse;
    stackedAreaChart
        .width(900).height(400)
        .dimension(dateDim)
        //.transitionDuration(1000)
        // .mouseZoomable(true)
        .group(incidents, "incidents")
        .stack(fatalities, "fatalities")
        .renderArea(true)
        // .x(d3.time.scale().domain([minDate.getMonth, maxDate.getMonth]))
        .x(d3.time.scale())
        .elasticX(true)
        .elasticY(true)
        .brushOn(true)
        .legend(dc.legend().x(60).y(10).itemHeight(13).gap(5))
        .yAxisLabel("Per Day")
        .ordinalColors(["#78CC00", "#7B71C5", "#56B2EA", "#E064CD", "#F8B700"])
        .title(function (d) {
            // console.log(d);
            return getvalues(d.data);
        })
        .margins({
            top: 10,
            left: 50,
            right: 10,
            bottom: 50
        });


    var hits = dateDim.group().reduceSum(function (d) {
        return d.FATALS;
    });
    // var minDate = dateDim.bottom(1)[0].date;
    // var maxDate = dateDim.top(1)[0].date;


    var volumeChart = dc.barChart("#dc-line-chart", "map");
    var month_total = dateDim.group().reduceCount();

    //print_filter("day_total");

    volumeChart
        .width(500).height(80)
        .margins({
            top: 10,
            left: 50,
            right: 20,
            bottom: 20
        })
        .dimension(dateDim)
        .group(month_total)
        // .centerBar(true)
        .gap(2)
        // .x(d3.time.scale().domain([minDate, maxDate]))
        .x(d3.time.scale())
        .round(d3.time.months)
        .xUnits(d3.time.months)
        // .xUnits(function (d) {
        //     var m = d.getMonth();
        //     var y = d.getFullYear();
        //     return new Date(y, m, 0).getUTCDate();

        // })
        .elasticX(true);
    // .yAxis().ticks(4);

    volumeChart.xAxis().ticks(11).tickValues();

    function getvalues(d) {
        var str = d.key.getDate() + "/" + (d.key.getMonth() + 1) + "/" + d.key.getFullYear() + "\n";
        var key_filter = dateDim.filter(d.key).top(Infinity);
        var total = 0
        key_filter.forEach(function (a) {
            str += a.status + ": " + a.FATALS + " Hit(s)\n";
            total += a.FATALS;
        });
        str += "Total:" + total;
        dateDim.filterAll();
        return str;
    }

    // .on("renderlet.tic", function (chart) {
    //     chart.selectAll("g.x text").attr('dx', '-30').attr('dy', '-7').attr('transform', "rotate(-90)");
    // });

    var monthOfTheYearDim = accident_facts.dimension(function(d) { return [+d.Month, +d.Year]; });
    var statsByMonthOfYearGroup = monthOfTheYearDim.group().reduce(
            /* callback for when data is added to the current filter results */
            function (p, v) {
                ++p.count;
                p.FATALS += v.FATALS;
                p.PERSONS += v.PERSONS;
                p.HIT_RUN += v.HIT_RUN;
                return p;
            },
            /* callback for when data is removed from the current filter results */
            function (p, v) {
                --p.count;
                p.FATALS -= v.FATALS;
                p.PERSONS -= v.PERSONS;
                p.HIT_RUN -= v.HIT_RUN;
                return p;
            },
            /* initialize p */
            function () {
                return {count: 0, FATALS: 0, PERSONS: 0, HIT_RUN: 0};
            }
        );

    testDim = monthOfTheYearDim;
    var heatMapChart = dc.heatMap("#dc-heat-map","map");

    var heatColorMapping = d3.scale.linear()
            .domain([2500, 3200, 4000])
            .range([ "green","orange","red"]);
    
    heatMapChart
            .width(900)
            .height(50)
            .dimension(monthOfTheYearDim)
            .group(statsByMonthOfYearGroup)
            .keyAccessor(function(d) { return +d.key[0]; })
            .valueAccessor(function(d) { return +d.key[1]; })
            .colorAccessor(function(d) { return +d.value.FATALS; })
            .title(function(d) {
                return " Month:   " + d.key[0] + "\n" +
                       " Year:   " + d.key[1] + "\n" +
                       " Fatalities:   " + d.value.FATALS;})
            // .ordinalColors(color_sheme);
            .colors(heatColorMapping);
    heatMapChart.xBorderRadius(1);
    heatMapChart.yBorderRadius(1);
    heatMapChart.render();


    dc.renderAll("map");
});

function print_filter(filter) {
    var f = eval(filter);
    if (typeof (f.length) != "undefined") {} else {}
    if (typeof (f.top) != "undefined") {
        f = f.top(Infinity);
    } else {}
    if (typeof (f.dimension) != "undefined") {
        f = f.dimension(function (d) {
            return "";
        }).top(Infinity);
    } else {}
    console.log(filter + "(" + f.length + ") = " + JSON.stringify(f).replace("[", "[\n\t").replace(/}\,/g, "},\n\t").replace("]", "\n]"));
}


// function getCheckedBoxes(chkboxName) {
// console.log("in here sseeee:  ",chkboxName.id)
//   var checkboxes = document.getElementById(chkboxName.id);
//   var checkboxesChecked = [];
//   // loop over them all
//   console.log("checkboxes",checkboxes)
//   //console.log("@2", checkboxes.selectedIndex)
//   for (var i=0; i<checkboxes.length; i++) {
//      // And stick the checked ones onto an array...
//      if (checkboxes[i].selected) {
//         checkboxesChecked.push(checkboxes[i].value);
//      }
//   }
//   console.log("Axes: ",checkboxesChecked);
// //   chart.dimensions(checkboxesChecked);
// //   vis.call(chart);
//   //console.log(checkboxesChecked);// Return the array if it is non-empty, or null
//   //return checkboxesChecked.length > 0 ? checkboxesChecked : null;
// }
