import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Messages from './components/Dialogs/Messages';

function App(props) {
	return (
		<div className="app-wrapper app-wrapper-content">
			<Header />
			<Navbar state={props.state.sidebar} />

			<div className=" app-wrapper-content">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route
						path="profile"
						element={
							<Profile
								state={props.state.profilePage}
								addPost={props.addPost}
							/>
						}
					/>
					<Route
						path="dialogs/*"
						element={<Messages state={props.state.messagesPage} />}
					/>
					<Route path="music" element={<Music />} />
					<Route path="news" element={<News />} />
					<Route path="settings" element={<Settings />} />
					<Route
						path="*"
						element={
							<main>
								{' '}
								<p> There's nothing!</p>
							</main>
						}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
