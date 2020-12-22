import React, { Component } from 'react';
import HorizontalScroll from 'react-scroll-horizontal'

class Gallery extends Component{
	render(){
		const child = {width:`30em`, height:`30em`, backgroundColor:`#e6b52e`, margin:`10px`}
		const parent = {width:`1080px`, height:`500px`}
		return(
			<div style={parent}>
				<HorizontalScroll>
					<div style={child}/>
					<div style={child}/>
					<div style={child}/>
					<div style={child}/>
				</HorizontalScroll>
			</div>
		)
	}
}

export default Gallery;

