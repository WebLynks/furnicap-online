import {
	createBrowserRouter,
	Outlet,
	redirect,
	RouterProvider,
} from 'react-router-dom';
import './App.scss';
import Home from './Pages/Home';
import Error from './Pages/Error';
import Product from './Pages/Product';

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Outlet />,
			children: [
				{ path: '', element: <Home /> },
				{
					path: 'products',
					loader: () => {
						return redirect('/#products');
					},
				},
				{ path: 'products/:productName', element: <Product /> },
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
