import React,{useState} from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [colourLightRed,setColourLightRed] = useState("red")
	const [colourLightYellow,setColourLightYellow] = useState("yellow")
	const [colourLightGreen,setColourLightGreen] = useState("green")

	function changeRed() {
		setColourLightRed("redLight");
		setColourLightYellow("yellow");
		setColourLightGreen("green");
	}

	function changeYellow() {
		setColourLightYellow("yellowLight");
		setColourLightRed("red");
		setColourLightGreen("green");
	}

	function changeGreen() {
		setColourLightGreen("greenLight");
		setColourLightYellow("yellow");
		setColourLightRed("red");
	}

	return (
		<div className="text-center">
			<div className="container" id="trafficTop"></div>
			<div className="container rounded-5" id="container">
				<div className={"container rounded-circle light red "+colourLightRed} onClick={changeRed}></div>
				<div className={"container rounded-circle light "+colourLightYellow} onClick={changeYellow}></div>
				<div className={"container rounded-circle light "+colourLightGreen} onClick={changeGreen}></div>
			</div>
		</div>
	);
};

export default Home;
