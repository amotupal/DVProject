var usCounties;
var incfat = "fatalities";

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
$('#form1 input').on('change', function () {
    var newincfat = $('input[name=choro]:checked', '#form1').val();
    if (newincfat != incfat) {
        incfat = newincfat;
        dc.renderAll("map")
    }

});


var color_sheme = ["#E2F2FF", "#C4E4FF", "#9ED2FF", "#81C5FF", "#6BBAFF", "#51AEFF", "#36A2FF", "#1E96FF", "#0089FF", "#0061B5"];
var geo_color_scheme = ['#fef0d9', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#990000']
var heatmap_colors = ['#ffffcc','#ffeda0','#fed976','#feb24c','#fd8d3c','#fc4e2a','#e31a1c','#bd0026','#800026']
var yearBarChartColors = ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a']


var county_colors = ['#fef0d9', '#fdcc8a', '#fc8d59', '#e34a33', '#b30000'];
var parseDate = d3.time.format("%m/%d/%Y").parse;
var numberFormat = d3.format('.2f');
var states;
var stateRaisedCount;
var stateRaisedFatalities;
var accident_facts;
var population_map = {};
var county_population_map = {};

var colTypeCheckList = [];
var newColTypeCheckList = [];

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
    }
});
var int2Yr = ["","January","February","March","April","May","June","July","August","September","October","November","December"]
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

function drawFromCSV(dimen, csvFile) {
    var chart = d3.parsets()
        .dimensions(dimen)
        .width(800).height(640);
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
    var checkboxes = document.getElementById('multicheckbox');
    var checkboxesChecked = [];
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].selected) {
            checkboxesChecked.push(checkboxes[i].value);
        }
    }
    drawFromCSV(checkboxesChecked, dataSet)
    checkList = checkboxesChecked;

    var colTypeCheck = document.getElementById('multicheckbox');
    for (var i = 0; i < colTypeCheck.length; i++) {
        if (colTypeCheck[i].selected) {
            colTypeCheckList.push(colTypeCheck[i].value);
        }
    }

    csv.forEach((item) => {
        item.Year = parseDate1(item.TimeStamp).getFullYear();
        item.Month = parseDate1(item.TimeStamp).getMonth() + 1;
        item.Day = parseDate1(item.TimeStamp).getDay() + 1;
        item.FullMonth = int2Yr[parseDate1(item.TimeStamp).getMonth() + 1];
        var tempDate = new Date(item.TimeStamp);
        item.TimeStamp = tempDate;
        item.FATALS = +item.FATALS;
        item.PERSONS = +item.PERSONS;
        item.HIT_RUN = +item.HIT_RUN;
    });

    accident_facts = crossfilter(csv);


    for (var i = 0; i < checkboxesChecked.length; i++) {
        generateRingChart('attr' + (i + 1).toString(), checkboxesChecked[i])
    }

    states = accident_facts.dimension(function (d) {
        return d.STATE_ABBR;
    });
    stateGroup = states.group();
    stateRaisedCount = stateGroup.reduceCount();
    stateRaisedFatalities = stateGroup.reduceSum(function (d) {
        return d.FATALS;
    });


    var projection = d3.geo.albersUsa()
        .scale(600)
        .translate([250, 150]);
    var usChart = dc.geoChoroplethChart("#dc-map-chart", "map");
    usChart.width(860)
        .height(300)
        .projection(projection)
        .dimension(states)
        .group(stateRaisedFatalities)
        .colors(geo_color_scheme)
        .legend(dc.legend().x(60).y(10).itemHeight(13).gap(5))
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
            return "State: " + name2abbr[d.key] + "\nNumber of accidents per 1000 population: " + numberFormat(d.value ? d.value : 0);
        })
        // 
        .on("filtered", function (chart) {
            $('#parallelSets').remove();
            dataSet = states.top(Infinity);
            drawFromCSV(checkList, dataSet);
        });

    // Data preparation of county chart
    counties = accident_facts.dimension(function (d) {
        return d.GEO_ID;
    });
    countyGroup = counties.group();
    countyRaisedCount = countyGroup.reduceCount();
    countyRaisedFatalities = countyGroup.reduceSum(function (d) {
        return d.FATALS;
    });

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
        .colorAccessor(function (d) {
            return d;
        })
        .valueAccessor(function (kv) {
            return kv.value / county_population_map[kv.key];
        })
        .title(function (d) {
            return "County: " + county_names[d.key] + "\nNumber of accidents : " + numberFormat(d.value ? d.value * county_population_map[d.key] : 0);
        })
        .on("filtered", function (chart) {
            $('#parallelSets').remove();
            dataSet = counties.top(Infinity);
            drawFromCSV(checkList, dataSet)
        });

    dc.renderAll("counties_chart")
    var previous;

    stateChart.on('preRender', (chart) => {
        if (usChart.filters().length == 1) {
            // document.getElementById('dc-map-counties').style.visibility = "visible";
            document.getElementById("state-chart-label").innerHTML = "County Level Chart for " + name2abbr[usChart.filters()[0]]
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
            document.getElementById("state-chart-label").innerHTML = "County Level Chart for " + name2abbr[usChart.filters()[0]]
            var projection = d3.geo.albersUsa()
                .scale(scales[usChart.filters()[0]])
                .translate(translations[usChart.filters()[0]]);
            document.getElementById('dc-map-counties').style.visibility = "visible";
            chart.projection(projection)
                .overlayGeoJson(countyJson[usChart.filters()[0]].features, usChart.filters()[0], function (d) {
                    return d.properties.GEO_ID;
                })
        } else {
            if (usChart.filters().length == 0) {
                document.getElementById("state-chart-label").innerHTML = "Select a State to view county level map"
            } else {
                document.getElementById("state-chart-label").innerHTML = "County Level Chart is only available for a single state"
            }
            document.getElementById('dc-map-counties').style.visibility = "hidden";
            stateJsons = chart.geoJsons();
            stateJsons.forEach((statejson) => {
                chart.removeGeoJson(statejson.name)
            });
        }
        chart.colorDomain(d3.extent(chart.data(), chart.valueAccessor()));
    });
    usChart.on('preRender', (chart) => {
        chart.colorDomain(d3.extent(chart.data(), chart.valueAccessor()));
    });
    usChart.on('preRedraw', (chart) => {
        dc.renderAll('map');
        chart.colorDomain(d3.extent(chart.data(), chart.valueAccessor()));
    })

    /************
    Year Ring
    *************/
    var yearSelection = dc.barChart("#dc-yr-pie-graph", "map");
    var accYearDim = accident_facts.dimension(function (d) {
        return +d.Year;
    });
    var colors = d3.scale.ordinal().domain([2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015])
        .range(yearBarChartColors)
    var acc_year_total = accYearDim.group().reduceCount();
    yearSelection
        .width(730)
        .height(70)
        .barPadding(0.1)
        .outerPadding(0.05)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .brushOn(false)
        .elasticY(true)
        .dimension(accYearDim)
        .group(acc_year_total)
        .colorAccessor(function (d) {
            return colors(d.key);
        })
    yearSelection.on("filtered", function (chart) {
        $('#parallelSets').remove();
        dataSet = dateDim.top(Infinity);
        drawFromCSV(checkList, dataSet)
    });
    yearSelection.yAxis().ticks(0);

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
    var all_incidents = incidents.all()
    var dateFormat = d3.time.format("%Y-%m-%d %H:%M:%S").parse;

    function sel_stack(i) {
        return function (d) {
            if (i == 'US') {
                return all_incidents[d.key - 2006].value
            } else {

                return (d.value[i] || 0);
            }

        };
    }
    stackedAreaChart
        .width(700).height(300)
        .dimension(dateDim)
        .group(incidents, 'US')
        .renderArea(true)
        .x(d3.scale.linear().domain([1, 18]))
        .elasticX(true)
        .elasticY(true)
        .brushOn(true)
        .legend(dc.legend().x(60).y(10).itemHeight(13).gap(5))
        .yAxisLabel("Per Day")
        .title(function (d) {
            return getvalues(d.data);
        })
        .margins({
            top: 10,
            left: 50,
            right: 10,
            bottom: 50
        });

    stackedAreaChart.xAxis().ticks(11);
    stackedAreaChart.on("preRender", function (chart) {
        var selected_states = usChart.filters()
        if (selected_states.length == 0) {
            chart
                .dimension(dateDim)
                .group(incidents, 'US', sel_stack('US'))
                .x(d3.scale.linear().domain([1, 18]))
                .legend(dc.legend().x(60).y(10).itemHeight(13).gap(5))
                .title(function (d) {
                    return getvalues(d.data);
                });
        } else {
            chart
                .dimension(dateDim)
                .group(StateSumGroup, selected_states[0], sel_stack(selected_states[0]))
                .x(d3.scale.linear().domain([1, 18]))
                .legend(dc.legend().x(60).y(10).itemHeight(13).gap(5))
                .title(function (d) {
                    return getvalues(d.data);
                });
            for (var i = 1; i < selected_states.length; ++i) {
                stackedAreaChart.stack(StateSumGroup, selected_states[i], sel_stack(selected_states[i]));
            }
        }
    });
    stackedAreaChart.on("filtered", function (chart) {
        $('#parallelSets').remove();
        dataSet = dateDim.top(Infinity);
        drawFromCSV(checkList, dataSet)
    });


    var monthOfTheYearDim = accident_facts.dimension(function (d) {
        return [d.FullMonth, +d.Year, +d.Month];
    });

    var statsByMonthOfYearGroup = monthOfTheYearDim.group().reduce(heatMapAdd, heatMapDel, heatMapInit);
    /* callback for when data is added to the current filter results */
    function heatMapAdd(p, v) {
        p.FATALS += v.FATALS;
        p.PERSONS += v.PERSONS;
        p.CollisionType += v.CollisionType;
        return p;
    }
    /* callback for when data is removed from the current filter results */
    function heatMapDel(p, v) {
        p.FATALS -= v.FATALS;
        p.PERSONS -= v.PERSONS;
        p.CollisionType -= v.CollisionType;
        return p;
    }
    /* initialize p */
    function heatMapInit() {
        return {
            FATALS: 0,
            PERSONS: 0,
            CollisionType: 0
        };
    }

    var heatMapChart = dc.heatMap("#dc-heat-map-tot", "map");
    
    heatMapChart
        .width(700)
        .height(260)
        .dimension(monthOfTheYearDim)
        .group(statsByMonthOfYearGroup)
        .keyAccessor(function (d) {
            return +d.key[2];
        })
        .valueAccessor(function (d) {
            return +d.key[1];
        })
        .colorAccessor(function (d) {
            return +d.value.FATALS;
        })
        .title(function (d) {
            return  "     Month: " + d.key[0] + "\n" +
                    "        Year: " + d.key[1] + "\n" +
                    " Fatalities: " + d.value.FATALS;
        })
        .margins({
            top: 50,
            left: 50,
            right: 20,
            bottom: 15
        })
        .colors(heatmap_colors)
        .calculateColorDomain();
    heatMapChart.xBorderRadius(0);
    heatMapChart.yBorderRadius(0);
    heatMapChart.on('preRender', (chart) => {
        chart.calculateColorDomain();
    });
    heatMapChart.on('preRedraw', (chart) => {
        chart.calculateColorDomain();
    });


    heatMapChart.on("filtered", function (chart) {
        $('#parallelSets').remove();
        dataSet = monthOfTheYearDim.top(Infinity);
        drawFromCSV(checkList, dataSet)
    });

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

function generateRingChart(divId, attrName) {
    console.log("in here: ",divId, attrName)
    document.getElementById(divId + 'Name').innerHTML = '<h4>'+attrName+'</h4>';
    document.getElementById(divId + 'prnt').setAttribute("style", "display: block");
    var attrRingChart = dc.barChart('#' + divId, "map");
    var attrDim = accident_facts.dimension(function (d) {
        return d[attrName];
    });
    var attr_total = attrDim.group().reduceCount(function (d) {
        return d[attrName];
    });

    attrRingChart
        .width(350)
        .height(280)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .brushOn(false)
        .barPadding(0.1)
        .outerPadding(0.05)
        .xAxisLabel('Category')
        .yAxisLabel('Count')
        .elasticY(true)
        .dimension(attrDim)
        .group(attr_total)
        
        .title(function (d) {
            return " Category: " + window[attrName][d.key] + "\n" +
                " Value: " + d.value;
        })
        .margins({
            top: 5,
            left: 70,
            right: 0,
            bottom: 30
        })

    attrRingChart.on("filtered", function (chart) {
        $('#parallelSets').remove();
        dataSet = attrDim.top(Infinity);
        drawFromCSV(checkList, dataSet)
    });
    dc.renderAll("map")
}