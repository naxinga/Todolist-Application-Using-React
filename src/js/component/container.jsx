import React from "react";
import react, {useState} from "react";

import Formulario from "./formulario.jsx";

const Container = () => {
  
	return (
		<div className="container">
			<div className="row">
				<div className="col"></div>
				<div className="col text-center border centro" >
					<h1 className="text-center mt-5">Procrastinando</h1>
					<Formulario/>
				</div>
				<div className="col"></div>
			</div>
		</div>
		
		
	);
};

export default Container;
