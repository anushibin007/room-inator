const BASE_PATH = import.meta.env.VITE_BASE_PATH || "/room-inator/";
const BUILD_NUMBER = import.meta.env.VITE_BUILD_NUMBER || "local-build";
const BACKEND_SERVER_ROOT = import.meta.env.VITE_BACKEND_SERVER_ROOT || "http://localhost:8080";
const IMAGE_PLACEHOLDER_URL =
	import.meta.env.VITE_IMAGE_PLACEHOLDER_URL ||
	"https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg";
const IMAGE_ROOT_DIR_URL = import.meta.env.VITE_IMAGE_ROOT_DIR_URL || undefined;

export default {
	BASE_PATH,
	BUILD_NUMBER,
	BACKEND_SERVER_ROOT,
	IMAGE_PLACEHOLDER_URL,
	IMAGE_ROOT_DIR_URL,
};
