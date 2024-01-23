import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FrontPage from './components/FrontPage';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import { ScrollProvider } from './context/ScrollContext';

function App() {
	return (
		<div className='App bg-black'>
			<Router>
				<Switch>
					<Route path='/' exact>
						<ScrollProvider>
							<FrontPage />
							<Navbar />
							<About />
							<Projects />
							<Skills />
							<Footer />
						</ScrollProvider>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
