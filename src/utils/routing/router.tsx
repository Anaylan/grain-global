import DefaultLayout from "@/components/layout/DefaultLayout";
import React from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Routes,
} from "react-router-dom";

// const DefaultLayout = React.lazy(
// 	() => import("@/components/layout/DefaultLayout")
// );
const HomePage = React.lazy(() => import("@/pages/HomePage"));
const LoginPage = React.lazy(() => import("@/pages/auth/LoginPage"));

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/*'>
			<Route element={<DefaultLayout />}>
				<Route index element={<HomePage />} />
				<Route path='supply' element={<HomePage />} />
				<Route path='commision' element={<HomePage />} />
				<Route path='terms' element={<HomePage />} />
				<Route path='privacy' element={<HomePage />} />
				<Route path='auth/*'>
					<Route path='signin' element={<LoginPage />} />
				</Route>
			</Route>
		</Route>
	)
);
