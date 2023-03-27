import React from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";

const DefaultLayout = React.lazy(
	() => import("@/components/layout/DefaultLayout")
);
const HomePage = React.lazy(() => import("@/pages/HomePage"));

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/*'>
			<Route element={<DefaultLayout />}>
				<Route index element={<HomePage />} />
				<Route path='supply' element={<HomePage />} />
				<Route path='commision' element={<HomePage />} />
				<Route path='terms' element={<HomePage />} />
			</Route>
		</Route>
	)
);
