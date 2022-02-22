import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
export default function MyPosts(props) {
	let newPostElement = React.createRef();

	const addPost = () => {
		let text = newPostElement.current.value;
		newPostElement.current.value = '';

		props.addPost(text);
	};

	const posts = props.postsData.map((item, index) => {
		return (
			<Post
				message={item.message}
				count={item.count}
				img={item.img}
				key={index}
			/>
		);
	});

	return (
		<div className={s.posts}>
			<div>
				<h3>My posts</h3>
				<div>
					<textarea ref={newPostElement}></textarea>
				</div>
				<button onClick={addPost} className={`btn ${s.btn}`}>
					Add post
				</button>
			</div>
			<div>New post</div>
			{posts}
			Main content
		</div>
	);
}
