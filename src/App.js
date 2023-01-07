import React from "react";
import { useState } from "react";

import Card from "./components/Card"

import "./App.css"
import PianoBg from "./assets/images/piano background.png"
import RArrow from "./assets/images/arrow right.png"
import LArrow from "./assets/images/arrow left.png"
import InstrumentBg from "./assets/images/instruments bg.png"
import NotesBg from "./assets/images/notesBg.png"
import Header from "./components/Header"
import MusicianBg from "./assets/images/Musicians background.png"

const display_imgs = [
	{
		id: 1,
		imageBg: PianoBg
	},
	{
		id: 2,
		imageBg: InstrumentBg
	},
	{
		id: 3,
		imageBg: NotesBg
	}
]




const App = () => {


	const [image,setImage] = useState(0);


	const forwardImage = () => {

		const fImg = document.querySelector('.image')

		if ( display_imgs.length-1 > image) {
			setImage((prevImage) => prevImage + 1)
			fImg.classList.add('image-trans')
			setTimeout(() => {
			fImg.classList.remove('image-trans')
			}, 500)
		}
		
	}



	const backImage = () => {
		
		const bImg = document.querySelector('.image')

		if (image > 0) {
			setImage((prevImage) => prevImage - 1);
			bImg.classList.add('image-trans')
			setTimeout(() => {
			bImg.classList.remove('image-trans')
			}, 500)
		}
		
		
	}

	return (
		<div className="app">
			
		<Header />

		 <div className="image-display">
			<button className="arrow-btn" onClick={backImage}>
			 <img src={LArrow}></img>
			</button>
			<Card image={display_imgs[image].imageBg} />
			<button className="arrow-btn" onClick={forwardImage}>
			 <img src={RArrow}></img>
			</button>
		 </div>
		
		<section className="section-image">
			<span className="caption">
				<h1 className="caption-title">Which instruments you prefer?</h1>
				<p className="caption-descrip">Explore each category of the instruments:</p>
				<ul className="instr-list">
					<span>
						<li>Piano</li>
					</span>
					<span>
						<li>Strings</li>
					</span>
					<span>
						<li>Woodwinds</li>
					</span>
					<span>
						<li>Brass</li>
					</span>
					<span>
						<li>Percussion</li>
					</span>
				</ul>
			</span>
			<img className="img-section" src={MusicianBg}></img>
		</section>


		</div>	
	);
}

export default App;