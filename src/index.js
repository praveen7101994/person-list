import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const Person = ({img, name, job, children}) => {
	const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
	return (
		<article className="person">
			<img src = {url}  alt="person" />
			<h4>{name}</h4>
			<h4>{job}</h4>
			{children}
		</article>
		)
}

const PersonList = () => {
	return (
		<section className="person-list">
			<Person img="34" name="praveen" job="developer" />
			<Person img="35" name="john" job="assistant">
			<p>
				This is the person's job description area in short.
			</p>
			</Person>
			<Person img="36" name="andrew" job="designer" />
		</section>
		)
}
ReactDOM.render(<PersonList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
