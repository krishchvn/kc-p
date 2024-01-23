import { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import { Link } from 'react-router-dom';
import { useScroll } from '../context/ScrollContext';

const Navbar = () => {
	const [showNav, setShowNav] = useState(false);
	//const [page, setPage] = useState('Home');

	const showHandler = () => {
		setShowNav(!showNav);
	};
	const scrollRefs = useScroll();

	const handleScrollClick = ref => {
		if (scrollRefs[ref] && scrollRefs[ref].current) {
			scrollRefs[ref].current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<nav className='bg-gradient-to-b from-yellow-700 to-yellow-600 p-8 h-auto w-full font-oswald font-light   text-white '>
			<SlideDown>
				{showNav ? (
					<div className=' flex-col justify-between'>
						<div className=' float-left mx-2 mt-1 lg:hidden '>
							<button onClick={showHandler} className=''>
								<MenuIcon />
							</button>
						</div>
						<div className='md:flex md:justify-center text-center text-sm  md:text-lg lg:text-3xl'>
							<div className='px-10 md:px-4 py-1 '>
								<Link to='/'>
									<button className=' transform font-light transition duration-500 hover:scale-110 opacity-90'>
										home
									</button>
								</Link>
							</div>
							<div className='px-4 py-1 '>
								<button
									onClick={() => handleScrollClick('about')}
									className='transform font-light transition duration-500 hover:scale-110 opacity-90'
								>
									about
								</button>
							</div>
							<div className='px-4 py-1'>
								<button
									onClick={() => handleScrollClick('projects')}
									className=' transform font-light transition duration-500 hover:scale-110 opacity-90 '
								>
									projects
								</button>
							</div>
							<div className='px-4 py-1'>
								<button
									onClick={() => handleScrollClick('skills')}
									className='transform font-light transition duration-500 hover:scale-110 opacity-90 '
								>
									skills
								</button>
							</div>
						</div>
					</div>
				) : (
					<div className=' w-full h-auto py-1 '>
						<div className=' lg:hidden'>
							<button onClick={showHandler} className='justify-end pl-2'>
								<MenuIcon />
							</button>
						</div>
						<div className=' hidden lg:flex justify-center text-center   text-md md:text-lg lg:text-3xl'>
							<div className='px-4 py-2'>
								<button className='transform font-light transition duration-500 hover:scale-110 opacity-80'>
									<Link to='/'>home</Link>
								</button>
							</div>
							<div className='px-4 py-2  '>
								<button
									onClick={() => handleScrollClick('about')}
									className=' transform font-light transition duration-500 hover:scale-110 opacity-80'
								>
									about
								</button>
							</div>
							<div className='px-4 py-2'>
								<button
									onClick={() => handleScrollClick('projects')}
									className=' transform font-light transition duration-500 hover:scale-110 opacity-80 '
								>
									projects
								</button>
							</div>
							<div className='px-4 py-2'>
								<button
									onClick={() => handleScrollClick('skills')}
									className=' transform font-light transition duration-500 hover:scale-110 opacity-80 '
								>
									skills
								</button>
							</div>
							<div className=''></div>
						</div>
					</div>
				)}
			</SlideDown>
		</nav>
	);
};

export default Navbar;
