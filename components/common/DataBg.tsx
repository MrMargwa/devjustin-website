import { useEffect } from "react";

export default function DataBg() {
  useEffect(() => {
    // We controleren of document beschikbaar is voordat we elementen zoeken
    const elements =
      document.querySelectorAll<HTMLElement>("[data-background]");

    if (elements.length > 0) {
      elements.forEach((element) => {
        const backgroundImage = element.getAttribute("data-background");
        if (backgroundImage) {
          element.style.backgroundImage = `url(${backgroundImage})`;
        }
      });
    }
  }, []); // Zorg ervoor dat dit alleen wordt uitgevoerd bij de initiële rendering

  // Omdat er geen visuele weergave is, returnen we null
  return null;
}
