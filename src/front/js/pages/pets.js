import React, { useState, useEffect, useContext } from "react";
import "../../styles/pets.scss";

export const Pet = () => {
	return (
		<div className="container-flex">
			<div className="row">
				<h1 className="text">Characters</h1>
				<div className="col-3 col-xs-6 card-profiles">
					<div className="card">
						<img src="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">DOG ONE</h5>
							<a className="btn btn-primary" href="">
								This Is My Pet!
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
