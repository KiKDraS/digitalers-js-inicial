import { loadPage } from "./loadPage.js";

export default async function contact() {
  const html = await loadPage("/views/contact.html");

  return html;
}
