import about from "./about.js";
import contact from "./contact.js";
import home from "./home.js";
import navbar from "./navbar.js";

export const renderPage = async (pageName) => {
  const nav = await navbar();

  switch (pageName) {
    case "home": {
      const html = await home();
      return nav + html;
    }
    case "contact": {
      const html = await contact();
      return nav + html;
    }
    case "about": {
      const html = await about();
      return nav + html;
    }

    //Para que el usuario final siempre tenga una vista, retorne el home en caso de que no se obtenga un pageName
    default: {
      const html = await home();
      return nav + html;
    }
  }
};
