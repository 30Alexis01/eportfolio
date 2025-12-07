export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "E-Portfolio DIEU Alexis";

export const APP_LOGO = "https://placehold.co/128x128/003A6E/FFFFFF?text=DA";

// Navigation pages
export const NAV_ITEMS = [
  { label: "Accueil", path: "/" },
  { label: "Parcours Ingénieur", path: "/engineering" },
  { label: "Mobilité Internationale", path: "/mobility" },
  { label: "Engagement RSE", path: "/rse" },
  { label: "Sport & Activités", path: "/sports" },
  { label: "Développement de Carrière", path: "/career" },
  { label: "Contact", path: "/contact" },
];

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
