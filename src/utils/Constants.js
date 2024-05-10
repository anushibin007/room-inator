const BASE_PATH = import.meta.env.VITE_BASE_PATH || "/room-inator/";
const BUILD_NUMBER = import.meta.env.VITE_BUILD_NUMBER || "local-build";
const BACKEND_SERVER_ROOT = import.meta.env.VITE_BACKEND_SERVER_ROOT || "http://localhost:8080";

export default { BASE_PATH, BUILD_NUMBER, BACKEND_SERVER_ROOT };
