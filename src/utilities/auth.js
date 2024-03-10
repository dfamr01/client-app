// import { setLogin, setLogout } from "../reduxUtils/auth/actions";
// import {getStore} from './store';
import {
  AUTH_KEY,
  INCOMPLETE_EVENT_KEY,
  INCOMPLETE_WORKSHOP_EVENT_KEY,
  INCOMPLETE_WORKSHOP_KEY,
} from "../config/constants";
// import { logoutFromGoogle } from "utilities/gapi";
import localStorage from "../utilities/localStorage";

export async function getAuth() {
  const data = await localStorage.getData(AUTH_KEY);
  const res = data ? JSON.parse(data) : {};
  return res;
}

export function setAuth(auth) {
  return localStorage.setItem(AUTH_KEY, JSON.stringify(auth));
}

export async function clearLocalStorage() {
  const unfinishedEvent = await localStorage.getData(INCOMPLETE_EVENT_KEY);
  const unfinishedWorkshopEvent = await localStorage.getData(
    INCOMPLETE_WORKSHOP_EVENT_KEY
  );
  const unfinishedWorkshop = await localStorage.getData(
    INCOMPLETE_WORKSHOP_KEY
  );

  await localStorage.clear();

  unfinishedEvent &&
    localStorage.setData(INCOMPLETE_EVENT_KEY, unfinishedEvent);
  unfinishedWorkshopEvent &&
    localStorage.setData(
      INCOMPLETE_WORKSHOP_EVENT_KEY,
      unfinishedWorkshopEvent
    );
  unfinishedWorkshop &&
    localStorage.setData(INCOMPLETE_WORKSHOP_KEY, unfinishedWorkshop);
}

export async function getAccessToken() {
  const token = (await getAuth())?.token;
  return token;
}

export async function isLoggedIn() {
  const data = await getAccessToken();
  return !!data;
}

// export function login(accessToken) {
//   const {dispatch} = getStore();
//   setAuth(accessToken);
//   dispatch(setLogin(accessToken));
// }

// export function logout() {
//   logoutFromGoogle();
//   const {dispatch} = getStore();
//   clearLocalStorage();
//   dispatch(setLogout());
// }
