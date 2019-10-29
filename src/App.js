import React, { Component } from 'react';
import Projects from './Projects';

class App extends Component {

	state = { displayBio: false };

	toggleDisplayBio = () => {
		this.setState( {displayBio: !this.state.displayBio} );
	}

	render() {
		let bio =  this.state.displayBio ? (
			<div>
				<p> I live in Toronto and i like to code every day</p>
				<p> My favourite language is JavaScript, and I think React.js is awesome </p>
				<p> Besides coding, I also love Pizza and Burritos !</p>
				<button onClick={this.toggleDisplayBio}> Show Less </button>
			</div>
		) : <div> <button onClick={this.toggleDisplayBio}> Read More </button> </div>;

		return (
			<div>
				<h1> Hello !</h1>
				<p> My name is Rutul. I'm a software engineer </p>
				<p> I am always looking forward to working on meaningful projects.</p>
				{bio}
			<Projects />
			<hr />
			</div>
		);
	}
}

export default App;
