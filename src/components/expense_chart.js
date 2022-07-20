import React, { Component } from 'react';
import CanvasJSReact from '../assets/lib/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class ExpenseChart extends Component {	
	constructor(props) {
		super(props);
		this.props = props;
		this.pdp1 = props.chartDataPoint;
		this.pdp2 = props.chartDataPoint2;
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	}
	
	toggleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}
	
	render() {
		const options = {
			theme: "light2",
			animationEnabled: true,
			title:{
				text: "Expenses Data Sheet"
			},
			subtitles: [{
				text: "Click Legend to Hide or Unhide Data Series"
			}],
			axisX: {
				title: "Expenditure"
			},
			axisY: {
				title: "Money Spent $",
				titleFontColor: "#6D78AD",
				lineColor: "red",
				labelFontColor: "#6D78AD",
				tickColor: "#3547AC"
			},
			// axisY2: {
			// 	title: "Money Added $",
			// 	titleFontColor: "#51CDA0",
			// 	lineColor: "#F0582E",
			// 	labelFontColor: "#51CDA0",
			// 	tickColor: "#F0582E"
			// },
			toolTip: {
				shared: true
			},
			legend: {
				cursor: "pointer",
				itemclick: this.toggleDataSeries
			},
			data: [{
				type: "spline",
				name: "Money Spent $",
				showInLegend: true,
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "$#,##0.#",
				dataPoints: this.props.chartDataPoint
			},
			// {
			// 	type: "spline",
			// 	name: "Money Added $",
			// 	axisYType: "secondary",
			// 	showInLegend: true,
			// 	xValueFormatString: "MMM YYYY",
			// 	yValueFormatString: "$#,##0.#",
			// 	dataPoints: this.pdp2
			// }
		]
		}
		
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				 onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
			
}
 
export default ExpenseChart;  