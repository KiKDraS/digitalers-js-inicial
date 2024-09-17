import { loadPage } from "./loadPage.js";

export default async function navbar() {
  const navbar = await loadPage("/views/navbar.html");

  return navbar;
}
