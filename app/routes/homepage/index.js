import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Page from '../Page';

export default class Homepage extends Component {
	render () {
		return (
			<Page>
				XD
				<Link to='/jan'>JAN</Link>
			</Page>
		);
	}
}
