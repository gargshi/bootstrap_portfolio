import React, { useEffect, useState } from "react";
import './Header.css';
const words = ["Developer", "Programmer","Game Developer"];
const Header = () => {
	const [index, setIndex] = useState(0);
	const [subIndex, setSubIndex] = useState(0);
	const [blink, setBlink] = useState(true);
	const [reverse, setReverse] = useState(false);
	const [text,setText] = useState('');

	// typeWriter
	useEffect(() => {
		// console.log(index,subIndex);
		if (index === words.length - 1 && subIndex === words[index].length) {
			setReverse(true);
			//return;
		}

		if (
			subIndex === words[index].length + 1 &&
			index !== words.length - 1 &&
			!reverse
		) {
			setReverse(true);
			return;
		}

		if (subIndex === 0 && reverse) {
			if (index === words.length-1){
				setIndex(-1);
			}
			setReverse(false);
			// console.log('index is now :',index);
			setIndex((prev) => prev + 1);
			return;
		}

		const timeout = setTimeout(() => {
			setSubIndex((prev) => prev + (reverse ? -1 : 1));
		}, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 :
		150, parseInt(Math.random() * 250)));

		return () => clearTimeout(timeout);
	}, [subIndex, index, reverse]);
	return (
		<>
			<header>
				<div className="banner">
					<p className="heading">This is Shivam Garg, welcome to my site</p>
					<p className="sub-heading">I am a {words[index].substring(0, subIndex)}<span className="block-cur">|</span></p>
					{/* <div className="sample-text-1 sub-heading" id='displayy'>{words[index]}</div> to be used in main headings*/}
				</div>
			</header>
		</>
	);}


export default Header;