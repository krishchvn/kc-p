import { useState, useEffect } from 'react';
import 'animate.css';
import profile_pic from '../images/profile_pic_cropped.jpg';
import profile_pic2 from '../images/profile_pic2.jpg';

const FrontPage = () => {
	const [firstInfo, setFirstInfo] = useState(true);
	const [secondInfo, setSecondInfo] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setFirstInfo(false);
			setSecondInfo(true);
		}, 4000);

		const interval1 = setInterval(() => {
			setFirstInfo(true);
			setSecondInfo(false);
		}, 8000);

		return () => {
			clearInterval(interval);
			clearInterval(interval1);
		};
	}, []);

	return (
		<div className='h-screen w-full bg-black flex items-center justify-center relative '>
			<div className='w-80 h-80  relative h-full w-full'>
				<img
					src='https://www.pngkey.com/png/full/63-633306_tall-building-silhouette-at-getdrawings-png-transparent-skyscraper.png'
					alt='Background Image'
					className='w-full h-full object-cover object-center absolute top-0 left-0 opacity-5'
				/>
			</div>

			<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
				<img
					src={profile_pic2}
					alt='Overlay Image'
					className='w-full xs:w-24 xs:h-24 sm:w-40 sm:h-40 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full mx-auto mb-4'
				/>

				<div className='text-base text-center pt-4 '>
					{firstInfo && !secondInfo && (
						<div className='text-2xl xs:text-2xl sm:text-4xl md:text-4xl lg:text-5xl animate-fadeIn  font-oswald'>
							<span className='text-white'>Hi, I'm Krishnakumar </span>
							<span className='text-yellow-400'>Chavan</span>
						</div>
					)}

					{secondInfo && !firstInfo && (
						<div className=' text-2xl  xs:text-2xl sm:text-4xl md:text-4xl lg:text-5xl animate-fadeIn font-oswald'>
							<span className='text-white'>
								Seeking Internship Opportunities
							</span>
							<span className='text-yellow-400'> For Summer 2024 </span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default FrontPage;
