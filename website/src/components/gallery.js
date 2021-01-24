import React, { Component } from 'react';
import HorizontalScroll from 'react-scroll-horizontal'
import { SRLWrapper } from "simple-react-lightbox"; 

class Gallery extends Component{
	render(props){
		console.log(this.props.album);
		const parent = {width:`1080px`, height:`800px`};
		const options = {
			settings: {
    			overlayColor: "rgb(255, 255, 255)",
  			},
  			buttons: {
			  backgroundColor: 'rgba(255,255,255)',
			  iconColor: 'rgba(0,0,0)',
			  iconPadding: '10px',
			  showAutoplayButton: false,
			  showCloseButton: true,
			  showDownloadButton: false,
			  showFullscreenButton: true,
			  showNextButton: false,
			  showPrevButton: false,
			  showThumbnailsButton: false,
			  size: '40px'
			},
  			caption: {
    			captionColor: "#000000",
    			captionfontFamily: 'Libre Baskerville, serif',
    			captionFontWeight: "300"
  			},
  			thumbnails: {
  				showThumbnails: false
  			}
		} 

		return(
			<div className="gallery_wrapper">
				<SRLWrapper options={options}>
					{this.props.album}
       			</SRLWrapper>
			</div>
		)
	}
}

export default Gallery;

