import React, { Component } from 'react';
import DB from '../Database/DB_Internet';
import Plan from './Plan';
import PropTypes from 'prop-types';

class Internet extends Component {
	
	constructor(props) {
		super(props);
	}

	get Internet() {
		// console.table(DB);
		let InternetPlans = [];
		Object.keys(DB).forEach( (sku) => {
			const plan = {};
			plan[sku] = DB[sku];
			InternetPlans.push(plan);
		});
		return InternetPlans;
	}

	render() {
		return (
			<div className="Internet"> 
				<h1>Internet Plans</h1>
				{this.Internet.map((plan) => {
					return ( 
						<Plan 
							key={Object.keys(plan)[0]} 
							plan={plan}
						/>
					)
				})}
			</div>
		)
	}

}

export default Internet;