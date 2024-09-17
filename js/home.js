import { loadPage } from "./loadPage.js";

export default async function home() {
  const signIn = await loadPage("/views/home.html");
  return signIn;
}
