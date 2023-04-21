import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import viteImagemin from "vite-plugin-imagemin";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		viteImagemin({
			gifsicle: {
				optimizationLevel: 7,
				interlaced: false,
			},
			optipng: {
				optimizationLevel: 7,
			},
			mozjpeg: {
				quality: 20,
			},
			pngquant: {
				quality: [0.9, 1],
				speed: 1,
			},
			webp: {
				preset: "photo",
				quality: 0.8,
			},
			svgo: {
				plugins: [
					{
						name: "removeViewBox",
					},
					{
						name: "removeEmptyAttrs",
						active: false,
					},
				],
			},
		}),
	],
	server: {
		host: "0.0.0.0",
		port: 3096,
	},
});
