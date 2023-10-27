import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
const BASE_PATH = process.env.BASE_PATH || "/room-inator/";

export default defineConfig({
	plugins: [react()],
	base: BASE_PATH,
});
