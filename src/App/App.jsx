import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.scss';
import Home from './Pages/Home';
import Error from './Pages/Error';
import Product from './Pages/Product';
import Products from './Pages/Products';
import About from './Pages/About';
import Contact from './Pages/Contact';

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Outlet />,
			children: [
				{
					path: '',
					element: <Home />,
				},
				{
					path: 'products',
					element: <Products />,
				},
				{
					path: 'products/:productName',
					element: <Product />,
				},
				{
					path: 'about',
					element: <About />,
				},
				{
					path: 'contact',
					element: <Contact />,
				},
			],
			errorElement: (
				<>
					<Error />
				</>
			),
		},
	],
	{ basename: '/furnicap-online' }
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
