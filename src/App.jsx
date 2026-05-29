import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BetterLife from './pages/BetterLife/BetterLife';
import getBetterLifeLoader from './pages/BetterLife/BetterLifeLoader';

const router = createBrowserRouter([
	{
		path: '/',
		element: <BetterLife />,
		loader: getBetterLifeLoader
	},
	{
		path: 'betterlife',
		element: <BetterLife />,
		loader: getBetterLifeLoader
	},
	{
		path: 'better-life',
		element: <BetterLife />,
		loader: getBetterLifeLoader
	},
	{
		path: 'adoptionmeansabetterlife',
		element: <BetterLife />,
		loader: getBetterLifeLoader
	},
	{
		path: 'adoption-means-a-better-life',
		element: <BetterLife />,
		loader: getBetterLifeLoader
	},
])

function App() {
	return (
		<RouterProvider router={router} />
	)
}

export default App;
