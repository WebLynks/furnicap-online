import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.scss';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Error from './Pages/Error';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Outlet />,
		children: [
			{ path: '', element: <Home /> },
			{ path: 'products', element: <Products /> },
		],
		errorElement: (
			<>
				<Error />
			</>
		),
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;

