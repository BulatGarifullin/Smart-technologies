import React from 'react';
import ReactDOM from 'react-dom/client';
import { Shop } from './shop';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { LoaderProvider } from './loader-context';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<BrowserRouter>
		<Provider store={store}>
			<LoaderProvider>
				<Shop />
			</LoaderProvider>
		</Provider>
	</BrowserRouter>,
);
