import React, { Component } from 'react';
import HorizontalScroll from 'react-scroll-horizontal'

class Gallery extends Component{
	render(){
		const child = {width:`100em`, height:`100em`, backgroundColor:`#e6b52e`, margin:`10px`, backgroundImage:`url(https://upload.wikimedia.org/wikipedia/commons/d/d9/Collage_of_Nine_Dogs.jpg)`}
		const parent = {width:`1080px`, height:`800px`}
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

