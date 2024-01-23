import { useState, useEffect, useRef } from 'react';
import { useScroll } from '../context/ScrollContext';

const Skills = () => {
	const arr = [
		{ skill: 'Python', rating: '90%' },
		{ skill: 'Data Structures', rating: '85%' },
		{ skill: 'SQL', rating: '90%' },
		{ skill: 'Machine Learning', rating: '90%' },
		{ skill: 'PyTorch', rating: '70%' },
		{ skill: 'C++', rating: '90%' },
		{ skill: 'JavaScript', rating: '80%' },
		{ skill: 'ReactJS', rating: '80%' },
		{ skill: 'TailwindCSS', rating: '90%' },
		{ skill: 'Bootstrap', rating: '70%' },
		{ skill: 'Algorithms', rating: '85%' },
		{ skill: 'NodeJS', rating: '90%' },
	];

	//const [shuffle, setShuffle] = useState(arr);
	//const [keepLooping, setKeepLooping] = useState(false);

	/* 	useEffect(() => {
		setInterval(() => {
			setTimeout(() => {
				setKeepLooping(!keepLooping);
				console.log(keepLooping, 'before');
			}, 1000);
			if (keepLooping) {
				setShuffle(arr.sort(() => Math.random() - 0.5));
			}
			setTimeout(() => {
				setKeepLooping(!keepLooping);
				console.log(keepLooping, 'after');
			}, 1000);
		}, 4000);
	}, []); */

	const scrollRef = useRef();
	const scrollToElement = useScroll();

	useEffect(() => {
		scrollToElement.skills = scrollRef;
	}, [scrollToElement]);

	return (
		<div
			ref={scrollRef}
			className='bg-gradient-to-b from-black  to-red-900 w-full h-full pb-24'
		>
			<div className='relative'>
				<p className='text-center text-white opacity-80 text-3xl md:text-4xl lg:text-6xl font-oswald font-normal px-24 py-20 tracking-widest'>
					Skills
				</p>
			</div>

			<div className='grid grid-cols-4 gap-4 mx-10'>
				{arr.map(item => (
					<div className=''>
						<div className='text-center mt-0 m-2 md:m-4 lg:m-6 text-md md:text-xl lg:text-3xl'>
							<p className='text-gray-400'>{item.skill}</p>
						</div>
						<div class='w-full bg-gray-600 rounded-full h-1 dark:bg-gray-600'>
							<div
								class='bg-red-500 h-1 rounded-full'
								style={{ width: item.rating }}
							></div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
