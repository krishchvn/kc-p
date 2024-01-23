import React, { useEffect, useRef } from 'react';
import { useScroll } from '../context/ScrollContext';

const About = () => {
	const openDocument = () => {
		const doc =
			'https://drive.google.com/file/d/1lnlzhtNw0YrvCShldlwJmr8AEjA1Nmpx/view?usp=sharing';
		//console.log(doc);
		window.open(doc, '_blank');
	};

	const scrollRef = useRef();
	const scrollToElement = useScroll();

	useEffect(() => {
		scrollToElement.about = scrollRef;
	}, [scrollToElement]);

	return (
		<div
			ref={scrollRef}
			className='bg-gradient-to-b from-yellow-600 to-black p-8 text-white '
		>
			<div className='skew-y-6'>
				<h2 className='text-center text-white opacity-80 text-3xl md:text-4xl lg:text-6xl font-oswald font-normal px-24 py-12 tracking-widest'>
					About Me
				</h2>
				<p className='text-sm text-gray-300 md:m-2 lg:m-4 md:text-lg lg:text-xl'>
					I'm currently pursuing Masters in Computer Science with a
					specialization of AI/ML at University at Buffalo - SUNY. I am an
					aspiring Software Developer. I have expertise in Python, Machine
					Learning, and Deep Learning. I have also worked on <br />
					&nbsp;&nbsp;&nbsp;&nbsp; -Automation Testing,
					<br /> &nbsp;&nbsp;&nbsp;&nbsp; -Backup and Restore Services on
					Databases <br /> &nbsp;&nbsp;&nbsp;&nbsp; -Web Development tools such
					as Javascript, React.js, Node.js (MERN Stack).
					<br />
					<br />
					My objective is to contribute towards the organization's goals,
					emphasizing ethical values. I aim to align with the global team's
					action plans, fostering collaboration to achieve overall customer
					satisfaction. My focus is on cultivating a positive and enriching work
					experience for myself and the team. <br />
					(PS: I came up with the above line, without ChatGPT, which I am fairly
					proud of lol.)
					<br />
					<br />
					Outside of professionalism and student life, you'll find me exploring
					diverse interests, from going hiking to playing basketball to watching
					classic old movies on weekends.
					<br />
					<br />
					Check out more about me below
				</p>
				<div className=' text-center opacity-80   mt-6  text-sm  sm:text-md  md:text-xl lg:text-2xl'>
					<button
						onClick={openDocument}
						className='transition duration-500 ease-in-out border-2 border-white w-auto px-2 py-1 sm:px-4 sm:py-2 text-white font-oswald hover:border-red-500 transform hover:-translate-y-1 hover:scale-110 '
					>
						<span className=''>Resume </span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default About;
