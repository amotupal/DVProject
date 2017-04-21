var usCounties;

function readGeoJSon(state_name, cb) {
    d3.json(full_states[state_name], function (_countyJson) {
        cb(state_name, _countyJson);
    });
}

for (propertyName in full_states) {
    readGeoJSon(propertyName, function (_name, _countyJson) {
        countyJson[_name] = _countyJson;
    })
}


var color_sheme = ["#E2F2FF", "#C4E4FF", "#9ED2FF", "#81C5FF", "#6BBAFF", "#51AEFF", "#36A2FF", "#1E96FF", "#0089FF", "#0061B5"];
// var color_sheme = ['#006837', '#1a9850', '#66bd63', '#a6d96a', '#d9ef8b', '#fee08b', '#fdae61', '#f46d43', '#d73027', '#a50026']
var geo_color_scheme = ['#fef0d9', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#990000']
var heatmap_colors = ['#006837', '#1a9850', '#66bd63', '#a6d96a', '#d9ef8b', '#ffffbf', '#fee08b', '#fdae61', '#f46d43', '#d73027', '#a50026'];
// ['#a50026','#d73027','#f46d43','#fdae61','#fee08b','#ffffbf','#d9ef8b','#a6d96a','#66bd63','#1a9850','#006837'];
// ['#1a9641', '#a6d96a', '#ffffbf', '#fdae61', '#d7191c']
// ['#a50026','#d73027','#f46d43','#fdae61','#fee08b','#d9ef8b','#a6d96a','#66bd63','#1a9850','#006837'];
// ["#E2F2FF", "#C4E4FF", "#9ED2FF", "#81C5FF", "#6BBAFF", "#51AEFF", "#36A2FF", "#1E96FF", "#0089FF", "#0061B5"];
// var ndx = crossfilter(data);

var county_colors = ['#fef0d9', '#fdcc8a', '#fc8d59', '#e34a33', '#b30000'];
var parseDate = d3.time.format("%m/%d/%Y").parse;
var numberFormat = d3.format('.2f');
var states;
var stateRaisedCount;
var accident_facts;
var population_map = {};
var county_population_map = {};

var github_path_countypop = "https://raw.githubusercontent.com/amotupal/DVProject/master/Data/County_Population.csv";
d3.csv(github_path_countypop, (error, pops) => {
    if (error) {
        console.log(error);
    } else {
        pops.forEach((item, index) => {
            county_population_map[item.County] = item.Population;
        });
    }
});
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

var path = "https://raw.githubusercontent.com/amotupal/DVProject/master/Sample_Data/accident_all.csv"
var local_path = "../Sample_Data/accident_all.csv"
var dataSet;
var dayOfTheMonthDim;
var statsByDayOfMonthGroup;

function drawParallelStes(dimen, path) {
    d3.csv(path, function (error, csv) {
        drawFromCSV(dimen, csv);
    })
}

function drawFromCSV(dimen, csvFile){
    var chart = d3.parsets()
        .dimensions(dimen)
        .width(750).height(450);
    var vis = d3.select("#dc-parallel-graph").append("svg").attr("id", "parallelSets")
        .attr("width", chart.width())
        .attr("height", chart.height());
    vis.datum(csvFile).call(chart);
}
var parseDate1 = d3.time.format("%Y-%m-%d %H:%M:%S").parse;

var checkList = [];
var testDim;
d3.csv(path, (error, csv) => {
    dataSet = csv;
    csv.forEach((item) => {
        item.Year = parseDate1(item.TimeStamp).getFullYear();
        item.Month = parseDate1(item.TimeStamp).getMonth() + 1;
        item.Day = parseDate1(item.TimeStamp).getDay() + 1;
        var tempDate = new Date(item.TimeStamp);
        item.TimeStamp = tempDate;
        item.FATALS = +item.FATALS;
        item.PERSONS = +item.PERSONS;
        item.HIT_RUN = +item.HIT_RUN;
    });

    accident_facts = crossfilter(csv);

    states = accident_facts.dimension(function (d) {
        return d.STATE_ABBR;
    });
    stateGroup = states.group();
    stateRaisedCount = stateGroup.reduceCount();

    // stateRaisedFatalities = stateGroup.reduceSum(function (d) {
    //     return d.FATALS;
    // });
    var projection = d3.geo.albersUsa()
        .scale(600)
        .translate([250, 150]);
    var usChart = dc.geoChoroplethChart("#dc-map-chart", "map");
    usChart.width(660)
        .height(300)
        .projection(projection)
        .dimension(states)
        .group(stateRaisedCount)
        .colors(geo_color_scheme)
        .colorAccessor(function (d) {
            return d;
        })
        .overlayGeoJson(geoJson.features, "state", function (d) {
            return d.properties.name;
        })
        .valueAccessor(function (kv) {
            return kv.value / population_map[kv.key];
        })
        .title(function (d) {
            return "State: " + d.key + "\nNumber of accidents: " + numberFormat(d.value ? d.value * population_map[d.key] : 0);
        })
        .on("filtered",function(chart){
            console.log("after US filter: 0");
            $('#parallelSets').remove();
            drawFromCSV(checkList, states.top(Infinity))
        });


    // Data preparation of county chart
    counties = accident_facts.dimension(function (d) {
        return d.GEO_ID;
    });
    countyGroup = counties.group();
    countyRaisedCount = countyGroup.reduceCount();

    // countyRaisedFatalities = countyGroup.reduceSum(function (d) {
    //     return d.FATALS;
    // });
    
    var stateChart;
    stateChart = dc.geoChoroplethChart("#dc-map-counties", "map");
    stateChart.width(560)
        .height(300)
        .dimension(counties)
        .group(countyRaisedCount)
        .colors(county_colors)
        .overlayGeoJson(countyJson['AZ'].features, 'AZ', function (d) {
            return d.properties.GEO_ID;
        })
        // .colorDomain([bottom_county, top_county])
        .colorAccessor(function (d) {
            return d;
        })
        .valueAccessor(function (kv) {
            // console.log(kv)
            return kv.value / county_population_map[kv.key];
        })
        .title(function (d) {
            return "County: " + county_names[d.key] + "\nNumber of accidents : " + numberFormat(d.value ? d.value * county_population_map[d.key]: 0);
        })
        .on("filtered",function(chart){
            console.log("after state filter: 0");
            $('#parallelSets').remove();
            drawFromCSV(checkList, counties.top(Infinity))
        });

    // var scale = Math.min(960 * 1.2, 500 * 2.1);

    dc.renderAll("counties_chart")
    var previous;

    stateChart.on('preRender', (chart) => {


        if (usChart.filters().length == 1) {
            var projection = d3.geo.albersUsa()
                .scale(scales[usChart.filters()[0]])
                .translate(translations[usChart.filters()[0]]);
            chart.projection(projection)
                .overlayGeoJson(countyJson[usChart.filters()[0]].features, usChart.filters()[0], function (d) {
                    return d.properties.GEO_ID;
                })
        } else {
            document.getElementById('dc-map-counties').style.visibility = "hidden";
        }
        chart.colorDomain(d3.extent(chart.data(), chart.valueAccessor()));
    });
    stateChart.on('preRedraw', (chart) => {

        if (usChart.filters().length == 1) {

            var projection = d3.geo.albersUsa()
                .scale(scales[usChart.filters()[0]])
                .translate(translations[usChart.filters()[0]]);
            document.getElementById('dc-map-counties').style.visibility = "visible";
            chart.projection(projection)
                .overlayGeoJson(countyJson[usChart.filters()[0]].features, usChart.filters()[0], function (d) {
                    return d.properties.GEO_ID;
                })
        } else {
            document.getElementById('dc-map-counties').style.visibility = "hidden";
                       stateJsons = chart.geoJsons();
            stateJsons.forEach((statejson) => {
                chart.removeGeoJson(statejson.name)
            });
        }
        chart.colorDomain(d3.extent(chart.data(), chart.valueAccessor()));
    })
    usChart.on('preRender', (chart) => {
        chart.colorDomain(d3.extent(chart.data(), chart.valueAccessor()));
    });
    usChart.on('preRedraw', (chart) => {
        var selected_states = usChart.filters()
        /*
        AREA CHART----
        */
        if (selected_states.length == 0) {
            stackedAreaChart
                .width(700).height(300)
                .dimension(dateDim)
                .transitionDuration(1000)
                // .mouseZoomable(true)
                .group(dateDim.group().reduceCount(), 'US')
                // (StateSumGroup, "AZ", sel_stack('AZ'))
                //.group(incidents, "incidents")
                //.stack(fatalities, "fatalities")
                .renderArea(true)
                // .x(d3.time.scale().domain([minDate.getMonth, maxDate.getMonth]))
                .x(d3.scale.linear().domain([1, 18]))
                .elasticX(true)
                .elasticY(true)
                .brushOn(true)
                .legend(dc.legend().x(60).y(10).itemHeight(13).gap(5))
                .yAxisLabel("Per Day")
                //.ordinalColors(["#78CC00", "#7B71C5", "#56B2EA", "#E064CD", "#F8B700"])
                .title(function (d) {
                    console.log(d);
                    return getvalues(d.data);
                })
                .margins({
                    top: 10,
                    left: 50,
                    right: 10,
                    bottom: 50
                })
                .on("filtered",function(chart){
                    console.log("after area filter: 0");
                    $('#parallelSets').remove();
                    drawFromCSV(checkList, dateDim.top(Infinity))
                });
        } else {

            stackedAreaChart
                .width(700).height(300)
                .dimension(dateDim)
                //.transitionDuration(1000)
                // .mouseZoomable(true)
                .group(StateSumGroup, selected_states[0], sel_stack(selected_states[0]))
                //.group(incidents, "incidents")
                //.stack(fatalities, "fatalities")
                .renderArea(true)
                // .x(d3.time.scale().domain([minDate.getMonth, maxDate.getMonth]))
                .x(d3.scale.linear().domain([1, 18]))
                .elasticX(true)
                .elasticY(true)
                .brushOn(true)
                .legend(dc.legend().x(60).y(10).itemHeight(13).gap(5))
                .yAxisLabel("Per Day")
                //.ordinalColors(["#78CC00", "#7B71C5", "#56B2EA", "#E064CD", "#F8B700"])
                .title(function (d) {
                    // console.log(d);
                    return getvalues(d.data);
                })
                .margins({
                    top: 10,
                    left: 50,
                    right: 10,
                    bottom: 50
                })
                .on("filtered",function(chart){
                    console.log("after area filter > 0");
                    $('#parallelSets').remove();
                    drawFromCSV(checkList, dateDim.top(Infinity))
                });
            for (var i = 1; i < selected_states.length; ++i) {
                stackedAreaChart.stack(StateSumGroup, selected_states[i], sel_stack(selected_states[i]));
            }
        }
        dc.renderAll('map');
        chart.colorDomain(d3.extent(chart.data(), chart.valueAccessor()));
    })

    /************
    Year Ring
    *************/
    var yearRingChart = dc.pieChart("#dc-yr-pie-graph", "map");
    var accYearDim = accident_facts.dimension(function (d) {
        return +d.Year;
    });
    var acc_year_total = accYearDim.group().reduceCount(function (d) {
        return d.Year;
    });
    testDim = accYearDim.top(Infinity);
    print_filter("testDim")

    yearRingChart
        .width(260)
        .height(220)
        .externalLabels(25)
        .externalRadiusPadding(30)
        .drawPaths(true)
        .dimension(accYearDim)
        .group(acc_year_total)
        .ordinalColors(["#78CC00", "#7B71C5", "#56B2EA", "#E064CD", "#F8B700"]);

    yearRingChart.on("filtered",function(chart){
        console.log("after ring filter");
        $('#parallelSets').remove();
        drawFromCSV(checkList, accYearDim.top(Infinity))
    });
    /************
    Stacked Area Chart
    *************/
    var m = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var stackedAreaChart = dc.lineChart("#dc-line-graph", "map");
    var dateDim = accident_facts.dimension(function (d) {
        return d.TimeStamp.getFullYear();
    });

    function reduceAdd(p, v) {
        p[v.STATE_ABBR] = (p[v.STATE_ABBR] || 0) + 1;
        return p;
    }

    function reduceRemove(p, v) {
        p[v.STATE_ABBR] = (p[v.STATE_ABBR] || 0) - 1;
        return p;
    }

    function reduceInitial() {
        return {};
    }
    var StateSumGroup = dateDim.group().reduce(reduceAdd, reduceRemove, reduceInitial);

    incidents = dateDim.group().reduceCount();
    // var minDate = dateDim.bottom(1)[0].TimeStamp;
    // var maxDate = dateDim.top(1)[0].TimeStamp;
    // var fatalities = dateDim.group().reduceSum(function (d) {
    //     return d.FATALS;
    // });
    var dateFormat = d3.time.format("%Y-%m-%d %H:%M:%S").parse;

    function sel_stack(i) {
        return function (d) {
            // console.log(i,": ",d.value[i])
            return (d.value[i] || 0);
        };
    }
    stackedAreaChart
        .width(700).height(300)
        .dimension(dateDim)
        //.transitionDuration(1000)
        // .mouseZoomable(true)
        .group(incidents, 'US')
        //.group(incidents, "incidents")
        //.stack(fatalities, "fatalities")
        .renderArea(true)
        // .x(d3.time.scale().domain([minDate.getMonth, maxDate.getMonth]))
        .x(d3.scale.linear().domain([1, 18]))
        .elasticX(true)
        .elasticY(true)
        .brushOn(true)
        .legend(dc.legend().x(60).y(10).itemHeight(13).gap(5))
        .yAxisLabel("Per Day")
        //.ordinalColors(["#78CC00", "#7B71C5", "#56B2EA", "#E064CD", "#F8B700"])
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

    stackedAreaChart.xAxis().ticks(11);

    stackedAreaChart.on("filtered",function(chart){
        console.log("after area filter");
        $('#parallelSets').remove();
        drawFromCSV(checkList, dateDim.top(Infinity))
    });
    // for (var i = 2; i < 16; ++i) {
    //     stackedAreaChart.stack(StateSumGroup, 'TX', sel_stack(i));
    // }
    // dc.renderAll('map')


    var hits = dateDim.group().reduceSum(function (d) {
        return d.FATALS;
    });
    // var minDate = dateDim.bottom(1)[0].date;
    // var maxDate = dateDim.top(1)[0].date;


    var volumeChart = dc.barChart("#dc-line-chart", "map");
    var month_total = dateDim.group().reduceCount();


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

    volumeChart.xAxis().ticks(0);

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

    var monthOfTheYearDim = accident_facts.dimension(function (d) {
        return [+d.Month, +d.Year];
    });

    // var statsByMonthOfYearGroup = monthOfTheYearDim.group().reduceSum(function (d) {
    //     return +d.FATALS;
    // });

    var statsByMonthOfYearGroup = monthOfTheYearDim.group().reduce(heatMapAdd, heatMapDel, heatMapInit);
    /* callback for when data is added to the current filter results */
    function heatMapAdd(p, v) {

        // console.log("p add: ",p)
        //++p.count;
        p.FATALS += v.FATALS;
        p.PERSONS += v.PERSONS;
        p.HIT_RUN += v.HIT_RUN;
        return p;
    }
    /* callback for when data is removed from the current filter results */
    function heatMapDel(p, v) {

        // console.log("p del: ",p)
        //--p.count;
        p.FATALS -= v.FATALS;
        p.PERSONS -= v.PERSONS;
        p.HIT_RUN -= v.HIT_RUN;
        return p;
    }
    /* initialize p */
    function heatMapInit() {
        return {
            FATALS: 0,
            PERSONS: 0,
            HIT_RUN: 0
        };
    }

    var heatMapChart = dc.heatMap("#dc-heat-map-tot", "map");

    var heatColorMapping = d3.scale.linear()
        // .domain([100, 1000, 4000])
        .range(["green", "orange", "red"]);

    heatMapChart
        .width(700)
        .height(250)
        .dimension(monthOfTheYearDim)
        .group(statsByMonthOfYearGroup)
        .keyAccessor(function (d) {
            return +d.key[0];
        })
        .valueAccessor(function (d) {
            return +d.key[1];
        })
        .colorAccessor(function (d) {
            return +d.value.FATALS;
        })
        .title(function (d) {
            return " Month:   " + d.key[0] + "\n" +
                " Year:   " + d.key[1] + "\n" +
                " Fatalities:   " + d.value.FATALS;
        })
        .margins({
            top: 30,
            left: 50,
            right: 20,
            bottom: 15
        })
        // .ordinalColors(color_sheme);
        .colors(heatmap_colors)
        .calculateColorDomain();

    heatMapChart.on('preRender', (chart) => {
        // var heatColorMapping = d3.scale.linear()
        //     .domain(d3.extent(chart.data(), chart.valueAccessor()))
        //     .range(["green", "orange", "red"]);
        chart.calculateColorDomain();
    });
    heatMapChart.on('preRedraw', (chart) => {
        // var heatColorMapping = d3.scale.linear()
        //     .domain(d3.extent(chart.data(), chart.valueAccessor()))
        //     .range(["green", "orange", "red"]);
        chart.calculateColorDomain();
    })
    heatMapChart.xBorderRadius(1);
    heatMapChart.yBorderRadius(1);

    heatMapChart.on("filtered",function(chart){
        console.log("after heat filter");
        $('#parallelSets').remove();
        drawFromCSV(checkList, monthOfTheYearDim.top(Infinity))
    });

    // $('#dc-heat-map-tot').on('click', function (d) {
    //     var selected = heatMapChart.filters()
    //     console.log("selected", selected)
    //     var selectStr = "" + selected[0][0] + "" + selected[0][1]

    //     dayOfTheMonthDim = accident_facts.dimension(function (d) {
    //         return [d.Day, d.Month, d.Year]
    //     });
    //     dayOfTheMonthDim.filter(function (d) {
    //         // console.log("filter d: ",d[1]," " ,d[2],":::",selected[0][0]," ",selected[0][1])
    //         return d[1] + "" + d[2] === selectStr;
    //     })
    //     statsByDayOfMonthGroup = dayOfTheMonthDim.group().reduce(heatMap1Add, heatMap1Del, heatMap1Init);

    //     function heatMap1Add(p, v) {
    //         p.FATALS += v.FATALS;
    //         p.PERSONS += v.PERSONS;
    //         p.HIT_RUN += v.HIT_RUN;
    //         return p;
    //     }

    //     function heatMap1Del(p, v) {
    //         p.FATALS -= v.FATALS;
    //         p.PERSONS -= v.PERSONS;
    //         p.HIT_RUN -= v.HIT_RUN;
    //         return p;
    //     }

    //     function heatMap1Init() {
    //         return {
    //             FATALS: 0,
    //             PERSONS: 0,
    //             HIT_RUN: 0
    //         };
    //     }

    //     var yearlyHeatMapChart = dc.heatMap("#dc-heat-map-yearly", "map");

    //     yearlyHeatMapChart
    //         .width(900)
    //         .height(50)
    //         .dimension(dayOfTheMonthDim)
    //         .group(statsByMonthOfYearGroup)
    //         .keyAccessor(function (d) {
    //             console.log(d);
    //             return +d.key[0] % 7 + 1;
    //         })
    //         .valueAccessor(function (d) {
    //             return +d.key[1];
    //         })
    //         .colorAccessor(function (d) {
    //             return +d.value.FATALS;
    //         })
    //         .title(function (d) {
    //             return " Month:   " + d.key[0] + "\n" +
    //                 " Year:   " + d.key[1] + "\n" +
    //                 " Fatalities:   " + d.value.FATALS;
    //         })
    //         // .ordinalColors(color_sheme);
    //         .colors(heatColorMapping);
    //     yearlyHeatMapChart.xBorderRadius(1);
    //     yearlyHeatMapChart.yBorderRadius(1);
    // });
    
    //print_filter("statsByDayOfMonthGroup")

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