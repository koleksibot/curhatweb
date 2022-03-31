/* eslint-disable @typescript-eslint/naming-convention */
const baseUrlTemp = process.env.REACT_APP_BASE_URL;

export const BASE_URL =
  (baseUrlTemp?.substr(baseUrlTemp.length - 1) === '/' ? baseUrlTemp.slice(0, -1) : baseUrlTemp) ||
  '';

export const DEBUG_MODE = process.env.REACT_APP_DEBUG_MODE ?? true;

export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? '';

export const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? '';

export const TINY_MCE_API_KEY = process.env.REACT_APP_TINY_MCE_API_KEY ?? '';
