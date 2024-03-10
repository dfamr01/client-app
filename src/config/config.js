import Constants from "expo-constants";

let {
  EXPO_PUBLIC_APP_NAME,
  EXPO_PUBLIC_REACT_APP_HOST,
  EXPO_PUBLIC_REACT_APP_API,
  EXPO_PUBLIC_REACT_APP_MODE,
  EXPO_PUBLIC_REACT_APP_STRIP_PUBLIC_KEY,
  EXPO_PUBLIC_REACT_APP_GOOGLE_API_CLIENT_ID,
  EXPO_PUBLIC_REACT_APP_GOOGLE_API_KEY,
  EXPO_PUBLIC_REACT_APP_MIX_PANEL_API_KEY,
  EXPO_PUBLIC_REACT_APP_ZOOM_SERVICE,
  EXPO_PUBLIC_REACT_APP_ZOOM_CLIENT_ID,
  EXPO_PUBLIC_PROTOCOL,
} = process.env;

const protocol = `${EXPO_PUBLIC_PROTOCOL}//`;
const api_base_url = "api";
const api_version = "v1";
let host = `${EXPO_PUBLIC_REACT_APP_API}.${EXPO_PUBLIC_REACT_APP_HOST}`;
let zoomServiceUrl = `${EXPO_PUBLIC_REACT_APP_ZOOM_SERVICE}.${EXPO_PUBLIC_REACT_APP_HOST}`;

let websocketHost = `${protocol}${host}`;
if (EXPO_PUBLIC_REACT_APP_MODE === "local") {
  host = "localhost:3000";
  zoomServiceUrl = "localhost:3030";
  websocketHost = host;
}

const api_url = `${protocol}${host}/${api_base_url}/${api_version}`;

export const appName = EXPO_PUBLIC_APP_NAME;
export const HOST = `${protocol}${host}`;
export const WEBSOCKET_HOST = websocketHost;
export const ZOOM_SERVICE_HOST = `${protocol}${zoomServiceUrl}`;
export const API_URL = api_url;
export const CHUNKED_VIDEO_UPLOAD_URL = `${api_url}/upload/chunked/video`;
export const STRIPE_PUBLIC_KEY = EXPO_PUBLIC_REACT_APP_STRIP_PUBLIC_KEY;
export const GOOGLE_API_CLIENT_ID = EXPO_PUBLIC_REACT_APP_GOOGLE_API_CLIENT_ID;
export const GOOGLE_API_KEY = EXPO_PUBLIC_REACT_APP_GOOGLE_API_KEY;
export const MIX_PANEL_API_KEY = EXPO_PUBLIC_REACT_APP_MIX_PANEL_API_KEY;
// export const ZOOM_REDIRECT_URL = `${document.location.origin}/authenticate-zoom`;
export const ZOOM_CLIENT_ID = EXPO_PUBLIC_REACT_APP_ZOOM_CLIENT_ID;
