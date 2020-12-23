import React, { Component } from 'react';
import HorizontalScroll from 'react-scroll-horizontal'

class Gallery extends Component{
	render(){
		const parent = {width:`1080px`, height:`800px`}
		return(
			<div style={parent}>
				<HorizontalScroll>
					<div className = "child"/>
					<div className = "child"/>
					<div className = "child"/>
					<div className = "child"/>
					<div className = "child"/>
				</HorizontalScroll>
			</div>
		)
	}
}

export default Gallery;

