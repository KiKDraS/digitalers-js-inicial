import { loadPage } from "./loadPage.js";

export default async function about() {
  const html = await loadPage("/views/about.html");

  return html;
}
