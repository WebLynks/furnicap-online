import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.scss';
import Home from './Pages/Home';
import Error from './Pages/Error';

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Outlet />,
			children: [{ path: '', element: <Home /> }],
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
