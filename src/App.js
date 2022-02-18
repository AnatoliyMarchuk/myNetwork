import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile';
import './App.css';
import { Routes, Route } from 'react-router-dom';
function App() {
	return (
		<div className="app-wrapper">
			<Header />
			<Navbar />
			<Profile />
			<Profile />
		</div>
	);
}

export default App;
