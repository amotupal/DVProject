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

var state_shape = [{
    "WA": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/WA.geo.json",
    "NV": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/NV.geo.json",
    "ID": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/ID.geo.json",
    "AK": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/AK.geo.json",
    "KY": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/KY.geo.json",
    "NC": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/NC.geo.json",
    "ND": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/ND.geo.json",
    "CO": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/CO.geo.json",
    "NJ": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/NJ.geo.json",
    "TN": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/TN.geo.json",
    "SC": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/SC.geo.json",
    "FL": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/FL.geo.json",
    "AZ": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/AZ.geo.json",
    "IN": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/AR.geo.json",
    "MI": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/MI.geo.json",
    "OK": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/OK.geo.json",
    "OR": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/OR.geo.json",
    "PR": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/PR.geo.json",
    "KS": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/KS.geo.json",
    "OH": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/OH.geo.json",
    "DC": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/DC.geo.json",
    "UT": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/UT.geo.json",
    "VI": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/VI.geo.json",
    "WI": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/WI.geo.json",
    "SD": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/SD.geo.json",
    "MT": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/MT.geo.json",
    "MO": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/MO.geo.json",
    "WV": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/WV.geo.json",
    "GU": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/GU.geo.json"
}];
var full_states = [{
    "WA": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/WA.geo.json",
    "NV": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/NV.geo.json",
    "ID": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/ID.geo.json",
    "AK": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/AK.geo.json",
    "KY": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/KY.geo.json",
    "NC": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/NC.geo.json",
    "ND": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/ND.geo.json",
    "CO": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/CO.geo.json",
    "NJ": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/NJ.geo.json",
    "TN": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/TN.geo.json",
    "SC": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/SC.geo.json",
    "FL": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/FL.geo.json",
    "AZ": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/AZ.geo.json",
    "IN": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/IN.geo.json",
    "HI": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/HI.geo.json",
    "ME": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/ME.geo.json",
    "NY": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/NY.geo.json",
    "DE": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/DE.geo.json",
    "IA": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/IA.geo.json",
    "GA": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/GA.geo.json",
    "NE": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/NE.geo.json",
    "MD": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/MD.geo.json",
    "TX": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/TX.geo.json",
    "MP": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/MP.geo.json",
    "CT": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/CT.geo.json",
    "VT": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/VT.geo.json",
    "WY": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/WY.geo.json",
    "LA": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/LA.geo.json",
    "AL": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/AL.geo.json",
    "MA": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/MA.geo.json",
    "CA": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/CA.geo.json",
    "PA": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/PA.geo.json",
    "AS": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/AS.geo.json",
    "MN": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/MN.geo.json",
    "NH": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/NH.geo.json",
    "NM": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/NM.geo.json",
    "VA": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/VA.geo.json",
    "IL": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/IL.geo.json",
    "MS": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/MS.geo.json",
    "RI": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/RI.geo.json",
    "AR": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/AR.geo.json",
    "MI": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/MI.geo.json",
    "OK": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/OK.geo.json",
    "OR": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/OR.geo.json",
    "PR": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/PR.geo.json",
    "KS": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/KS.geo.json",
    "OH": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/OH.geo.json",
    "DC": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/DC.geo.json",
    "UT": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/UT.geo.json",
    "VI": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/VI.geo.json",
    "WI": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/WI.geo.json",
    "SD": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/SD.geo.json",
    "MT": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/MT.geo.json",
    "MO": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/MO.geo.json",
    "WV": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/WV.geo.json",
    "GU": "https://raw.githubusercontent.com/amotupal/DVProject/master/geo/states/GU.geo.json"
}];
var color_sheme = ["#E2F2FF", "#C4E4FF", "#9ED2FF", "#81C5FF", "#6BBAFF", "#51AEFF", "#36A2FF", "#1E96FF", "#0089FF", "#0061B5"];
var ndx = crossfilter(data);
var parseDate = d3.time.format("%m/%d/%Y").parse;
var numberFormat = d3.format('.2f');
data.forEach(function (d) {
    d.date = parseDate(d.date);
    d.Year = d.date.getFullYear();
    d.Day = d.date.getDay() + 1;
});
/************
Year Ring
*************/
var yearRingChart = dc.pieChart("#dc-yr-pie-graph", "chart");
var yearDim = ndx.dimension(function (d) {
    return +d.Year;
});
// print_filter("yearDim");
var year_total = yearDim.group().reduceSum(function (d) {
    return d.hits;
});
yearRingChart
    .width(180).height(180)
    .legend(dc.legend().x(70).y(70).itemHeight(13).gap(5))
    .dimension(yearDim)
    .group(year_total)
    .innerRadius(45)
    .renderLabel(false)
    .renderTitle(false)
    .ordinalColors(["#78CC00", "#7B71C5", "#56B2EA", "#E064CD", "#F8B700"]);
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

statusRingChart
    .width(180).height(180)
    .legend(dc.legend().x(65).y(65).itemHeight(13).gap(5))
    .dimension(statusDim)
    .group(hit_status)
    .innerRadius(45)
    .renderLabel(false)
    .renderTitle(false)
    .ordinalColors(["#78CC00", "#7B71C5", "#56B2EA", "#E064CD", "#F8B700"]);

dc.renderAll("chart");



$('#dc-yr-pie-graph').on('click', function () {

    var minDate2 = dateDim.bottom(1)[0].date;
    var maxDate2 = dateDim.top(1)[0].date;
    // console.log("minDate2: ",minDate2,"maxDate2: ",maxDate2)
    volumeChart.x(d3.time.scale().domain([minDate2, maxDate2]));
    volumeChart.redraw();
});

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

var path = "https://raw.githubusercontent.com/amotupal/DVProject/master/Sample_Data/accident_new.csv"

var local_path = "../Sample_Data/accident_new.csv"

d3.csv(path, (error, csv) => {

    csv.forEach((item) => {
        // console.log(item);
        var tempDate = new Date(item.TimeStamp);
        item.TimeStamp = tempDate;

        // console.log(item.TimeStamp);

    });
    // console.log(csv)
    // console.log(typeof csv.TimeStamp)
    accident_facts = crossfilter(csv);

    states = accident_facts.dimension(function (d) {
        return d.STATE;
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
    // console.log(statevalues)
    var top_state = d3.max(statevalues)
    var bottom_state = d3.min(statevalues)

    // console.log(top_state, bottom_state)

    // orderedStateGroup = stateGroup.top(51)
    // var top_state = orderedStateGroup[0].value / population_map[orderedStateGroup[0].key];
    // var bottom_state = orderedStateGroup[50].value / population_map[orderedStateGroup[50].key];

    var usChart = dc.geoChoroplethChart("#dc-map-chart", "map");

    usChart.width(960)
        .height(500)
        .dimension(states)
        .group(stateRaisedCount)
        .colors(color_sheme)
        .colorDomain([bottom_state, top_state])
        .colorAccessor(function (d) {
            return d
        })
        .overlayGeoJson(geoJson.features, "state", function (d) {
            return d.properties.name;
        })
        .valueAccessor(function (kv) {
            //console.log("kv: ",kv);
            return kv.value / population_map[kv.key];
        })
        .title(function (d) {
            return "State: " + d.key + "\nTotal Amount Raised: " + numberFormat(d.value ? d.value : 0) + "M";
        });
    /************
    Stacked Area Chart
    *************/
    var stackedAreaChart = dc.lineChart("#dc-line-graph", "map");
    var dateDim = accident_facts.dimension(function (d) {
        return d.TimeStamp.getMonth();
    });
    var incidents = dateDim.group().reduceCount();
    // print_filter(incidents)
    var minDate = dateDim.bottom(1)[0].TimeStamp;
    var maxDate = dateDim.top(1)[0].TimeStamp;
    var fatalities = dateDim.group().reduceSum(function (d) {
        return d.FATALS;
    });
    console.log("minDate: ", minDate, ", maxDate: ", maxDate);
    stackedAreaChart
        .width(1000).height(400)
        .dimension(dateDim)
        //.transitionDuration(1000)
        // .mouseZoomable(true)
        .group(incidents, "incidents")
        .stack(fatalities, "fatalities")
        .renderArea(true)
        .x(d3.time.scale().domain([minDate.getMonth, maxDate.getMonth]))
        .elasticX(true)
        .brushOn(true)
        .legend(dc.legend().x(60).y(10).itemHeight(13).gap(5))
        .yAxisLabel("per day")
        .ordinalColors(["#78CC00", "#7B71C5", "#56B2EA", "#E064CD", "#F8B700"])
        .title(function (d) {
            console.log(d);
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
    var minDate = dateDim.bottom(1)[0].date;
    var maxDate = dateDim.top(1)[0].date;


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
        .x(d3.time.scale().domain([minDate, maxDate]))
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