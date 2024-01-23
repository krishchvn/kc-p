import React, { useEffect, useRef } from 'react';
import { useScroll } from '../context/ScrollContext';
import hemoscribe from '../images/Hemoscribe.jpg';
import chickfork from '../images/chickfork.jpg';
import gesture from '../images/Gesture.jpg';

const Projects = () => {
	const project = [
		{
			imageSrc: hemoscribe,
			description: (
				<div className=''>
					-Conducted data modification, cleaning, and visualization on a smoking
					dataset to enhance feature understanding. <br /> -Utilized Principal
					Component Analysis (PCA), hyperparameter tuning, and implemented 8
					different Machine Learning models to evaluate performance metrics.
					<br />
					-Developed a full-stack, dynamic, and responsive user interface using
					Flask and Streamlit and integrated user input functionality into the
					interface, allowing the system to provide predictions with high
					accuracy.
					<br /> -Demonstrated proficiency in data preprocessing, machine
					learning model selection, and web development to create an end-to-end
					solution for smoking prediction.
					<br />
				</div>
			),
			title: 'HemoScribe: Tobacco Use Profiler',
		},
		{
			imageSrc: gesture,
			description: (
				<div className=''>
					-Designed and implemented a webcam-based gesture recognition
					application, showcasing my technical proficiency
					<br />
					-Utilized OpenCV and Mediapipe to analyze and translate gestures,
					highlighting my adaptability and precision.
					<br /> -Created a seamless, low-latency website using Django,
					reflecting my commitment to enhancing user experiences and
					contributing to the efficient operation indicating similar skills for
					office assistance.
					<br />
				</div>
			),
			title: 'Gesture Recognition System',
		},
		{
			imageSrc: chickfork,
			description: (
				<div className=''>
					-Developed a MERN stack restaurant webpage with dynamic features.
					<br />
					-Utilized HTML/CSS, Bootstrap, React.js, and React Hooks for frontend
					and Node.js, and Express.js for backend functionality.
					<br /> -Implemented Add To Cart, Remove from Cart, Axios data
					fetching, and Node-based JWT authentication for a smooth ordering
					tasks experience for customers..
					<br />
					-Utilized MongoDB for efficient data management demonstrating skills
					applicable to elevating customer interactions
				</div>
			),
			title: 'Chickfork - The Restaurant App',
		},
	];

	const scrollRef = useRef(null);
	const scrollToElement = useScroll();

	useEffect(() => {
		scrollToElement.projects = scrollRef;
	}, [scrollToElement]);

	return (
		<div ref={scrollRef} className=' container mx-auto px-8 '>
			<p className='text-center text-white opacity-80 text-3xl md:text-4xl lg:text-6xl font-oswald font-normal px-24 py-12 tracking-widest'>
				Projects
			</p>
			<div className=''>
				{project.map((proj, index) => (
					<div key={index} className='flex flex-col md:flex-row my-16'>
						<div className='md:w-4/5 w-full h-auto  pr-4 animate_left '>
							<img
								src={proj.imageSrc}
								alt={`Project ${index + 1}`}
								className='w-full rounded-lg border-t border-b  border-white'
							/>
						</div>
						<div className=' w-full md:w-2/3 my-4  animate_right'>
							<p className='text-center text-gray-400  text-center m-2 md:m-4 lg:m-6 text-md md:text-xl lg:text-3xl font-bold '>
								{proj.title}
							</p>
							<p className='md:my-2 text-left text-sm text-gray-400 md:m-2 lg:m-4 md:text-lg lg:text-xl'>
								{proj.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
