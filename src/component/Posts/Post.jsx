import React from "react";
import "./Post.css";
import { Link } from 'react-router-dom';

const Post = ({ post: { id,title, body,
imgUrl, date,summary }}) => {
return (
	
		<div className="post-container">
			<div className="post">
				<Link to={`/Blog/${id}`}>
					<h1 className="heading">{title}</h1>
				</Link>
				<p><strong>Date: {date}</strong></p>
				<img className="image" src={`/images/${imgUrl}`} alt="post" />
				<h4>{summary}</h4>		
			</div>
		</div>
);
};

export default Post;