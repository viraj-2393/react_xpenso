import React, { Component } from 'react';
import CanvasJSReact from '../assets/lib/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class ExpensePieChart extends Component {	
	constructor(props){
		super(props);
		this.pdp = props.pieDataPoints;
	}
	render() {
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: "Monthly Budget"
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}%",		
				startAngle: -90,
				dataPoints: this.pdp
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
 
export default ExpensePieChart;  