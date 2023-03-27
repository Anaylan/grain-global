import React from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<React.StrictMode>
		<React.Suspense>
			<App />
		</React.Suspense>
	</React.StrictMode>
);
