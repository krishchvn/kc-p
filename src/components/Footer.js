import insta_f from '../images/insta_fill.jpg';
import linkedin_f from '../images/linkedin_fill.jpg';
import mail_f from '../images/mail_f.jpg';
import outlook_f from '../images/outlook_f.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {
	//const [hover, setHover] = useState(false);

	return (
		<div className=' bg-gradient-to-b from-red-800 to-black w-full h-full bg-black opacity-90'>
			<div className='flex'>
				<div className=' my-8 py-8   text-center text-gray-400 w-1/3 flex-col border-r border-gray-100'>
					<p className='p-1 text-white font-bold'>NAVIGATE</p>
					<p className='  p-1  hover:text-gray-100'>
						<Link to='/'>Home</Link>
					</p>
					<p className='p-1 hover:text-gray-100'>
						<Link to='/'>About</Link>
					</p>
					<p className='p-1 hover:text-gray-100'>Projects</p>
					<p className='p-1 hover:text-gray-100'>Skills</p>
				</div>
				<div className='my-8 border-r border-gray-100 w-1/3 flex-col  '>
					<div className=' text-center my-8 text-lg md:text-2xl text-gray-100   '>
						<span className='p-2  '>Contact & View My Other Profiles</span>
						<div className='flex justify-center '>
							<div className='mx-2 my-1'>
								<a href='mailto:kchavan@buffalo.edu' target='_blank'>
									<img className='h-8 w-8' src={outlook_f} alt='' />
								</a>
							</div>
							<div className='mx-2 my-1 pt-1'>
								<a href='mailto:krishnakumarchavan11@gmail.com' target='_blank'>
									<img className='h-5 w-8' src={mail_f} alt='' />
								</a>
							</div>
							<div className='mx-2 my-1 '>
								<a
									href='https://www.linkedin.com/in/krishnakumar-chavan/'
									target='_blank'
								>
									<img className='h-8 w-8 ' src={linkedin_f} alt='' />
								</a>
							</div>
							<div className='mx-2 my-1  cursor-pointer'>
								<a href='https://www.instagram.com/krishchvn/' target='_blank'>
									<img className='h-8 w-8' src={insta_f} alt='instagram' />
								</a>
							</div>
						</div>
					</div>
					<div className=' text-center mt-10'>
						<span className=' text-xs md:text-sm text-gray-400'>
							Made using React and TailwindCSS
						</span>
					</div>
				</div>
				<div className=' text-center text-md md:text-2xl my-16 mx-2  w-1/3'>
					<span className='text-white'>Designed & Created By</span>
					<p className='text-gray-300'>Krishnakumar Chavan</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
