import React from "react";
import './Navbar.css';
const Navbar = () => {
	const mode = 'dark'; //dark mode navbar controller variable
	const fixedOrNot = 'fixed-top';
	return (
		<>
			<nav className={"navbar navbar-expand-lg " + fixedOrNot + " navbar-" + mode + " bg-" + mode}>
				
				<div className="container-fluid">
					<a className="navbar-brand" href="#"></a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#about">About</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#card_2">Resume</a>
							</li>
							{/* <li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Dropdown link
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<li><a className="dropdown-item" href="#">Action</a></li>
									<li><a className="dropdown-item" href="#">Another action</a></li>
									<li><a className="dropdown-item" href="#">Something else here</a></li>
								</ul>
							</li> */}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;