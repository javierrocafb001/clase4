Ext.define('Admin.view.dashboard.Sales', {
    extend: 'Ext.Panel',
    xtype: 'sales',
    ui: 'light',
    requires: [
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Bar'
    ],
    height: 130,
    layout: "fit",
    title: "",
    cls: "quick-graph-panel",
    header: {
        docked: "bottom"
    },
    platformConfig: {
        "!phone": {
            iconCls: "x-fa fa-briefcase"
        }
    },
    items: [{
        xtype: "cartesian",
        animation: !Ext.isIE9m && Ext.os.is.Desktop,
        background: "#8561c5",
        height: "100%",
        width: "100%",
        colors: ["#ffffff"],
        bind: "{charData}",
        axes: [{
            type: "category",
            fields: ["_id"],
            hidden: true,
            position: "bottom"
        }, {
            type: "numeric",
            fields: ["number"],
            grid: {
                odd: {
                    fill: "#e8e8e8"
                }
            },
            hidden: true,
            position: "left"
        }],
        series: [{
            type: "bar",
            xField: "_id",
            yField: ["number"]
        }],
        interactions: [{
            type: "panzoom"
        }]
    }]

});
