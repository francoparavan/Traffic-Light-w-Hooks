import React, { useState } from "react";

const Home = () => {
	const [selectedColor, setSelectedColor] = useState("red");
	return (
		<div className="container">
			<h1>Traffic Light w/ Hooks</h1>
			<div className="trafficLight">
				<div onClick={() => setSelectedColor("red")}
					className={`light red ${selectedColor === "red" ? "glow" : ""}`}></div>

				<div onClick={() => setSelectedColor("yellow")}
					className={`light yellow ${selectedColor === "yellow" ? "glow" : ""}`}></div>

				<div onClick={() => setSelectedColor("green")}
					className={`light green ${selectedColor === "green" ? "glow" : ""}`}></div>
			</div>
		</div>
	);
};

export default Home;

