import React from "react";


const Card = (props) => {

	return (
		<div className="card">
			<div className="box-card">
				<img className="image" src={props.image}></img>
			</div>
		</div>


	)


}

export default Card;
