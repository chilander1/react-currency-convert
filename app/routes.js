import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import SelectedCurrency from './containers/SelectedCurrency';
import DatepickerCont from './containers/DatepickerCont';
import About from './components/About';
import App1 from './containers/App1';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={DatepickerCont} />
		<Route path="/SelectedCurrency" component={SelectedCurrency}/>
		<Route path="/App1" component={App1}/>
		<Route path="/about" component={About} />
	</Route>
);
