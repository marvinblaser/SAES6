document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");
  
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); // Empêche le comportement par défaut du lien
  
        const targetUrl = link.getAttribute("href");
  
        // Vérifie si l'API View Transition est supportée
        if (document.startViewTransition) {
          try {
            document.startViewTransition(() => {
              window.location.href = targetUrl; // Change de page
            });
          } catch (error) {
            console.error("Erreur lors de la transition : ", error);
            window.location.href = targetUrl;
          }
        } else {
          // Si l'API n'est pas supportée, utilise le comportement par défaut
          window.location.href = targetUrl;
        }
      });
    });
  });
  