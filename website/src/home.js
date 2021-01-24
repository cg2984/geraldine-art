import React, {useState} from "react";
import Gallery from "./components/gallery.js"
function About({Data}) {
	const[index, setIndex] = useState(0);
	let tempIndex = index
	let albumA = [
	]
	let albumB = [
	]
	let albumC = [
	]
	let arrayLen = Data.data.length

	for(let i=0;i<arrayLen;i++){
		if (i<(arrayLen/3)){
			albumA.push(<img src={Data.data[i].link} alt={Data.data[i].description}/>);
		} if (i<((arrayLen/3)*2) && i>(arrayLen/3)){
			albumB.push(<img src={Data.data[i].link} alt={Data.data[i].description}/>);
		} if (i<(arrayLen) && i>((arrayLen/3)*2)){
			albumC.push(<img src={Data.data[i].link} alt={Data.data[i].description}/>);
		}
	}

	let galArray = [
		<Gallery album={albumA}/>,
		<Gallery album={albumB}/>,
		<Gallery album={albumC}/>,
	]

	console.log("index", index);
	return (
		<main>
	  		<button onClick={() => setIndex((tempIndex+2)%3)}>Next</button>
	  		{galArray[index]}
  		</main>
  	);
}

export default About;
