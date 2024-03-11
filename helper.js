// SOME OF THIS CODE IS MINE. THIS IS JUST A TEST.
function load(data) {
    // Select chartholder
    var chartHolder = d3.select("#scatter");

    // Declare the chart component
    var scatter = d3.x3d.chart.particlePlot()
        .mappings({ x: "Lstar", y: "astar", z: "bstar", color: "cmy" });

    // Generate chart
    chartHolder.datum(data).call(scatter);
}

// Generate Chart from Pollen CSV Data
// Source: http://metagrid2.sv.vt.edu/~npolys/InfoVis2019/pollen.csv
var C = [];
var M = [];
var Y = [];

var Lstar = [];
var astar = [];
var bstar = [];

var indices = [];

var j = 0;

var colorAssn = {
        key: 'ColorAssn',
        values: []
};

for (uid in window.userData) {
    for (i in window.userData[uid]['test']['answers']) {
        C[j] = window.userData[uid]['test']['answers'][i]['beauty'];
        M[j] = window.userData[uid]['test']['answers'][i]['health'];
        Y[j] = window.userData[uid]['test']['answers'][i]['temperature'];

        Lstar[j] = window.userData[uid]['test']['colors'][i]['Lstar'];
        astar[j] = window.userData[uid]['test']['colors'][i]['astar'];
        bstar[j] = window.userData[uid]['test']['colors'][i]['bstar'];

        indices[j] = j;

        colorAssn.values.push({
        key: 'Point' + indices[j],
        values: [
            { key: "Lstar", value: Lstar[j] },
            { key: "astar", value: astar[j] },
            { key: "bstar", value: bstar[j] },
            { key: "cmy", value: d3.rgb(255-C[j],255-M[j],255-Y[j]) },
        ]
        })

        j++;
    }
}

window.colorAssn = colorAssn;

load(colorAssn);
x3dom.reload();