document.addEventListener("DOMContentLoaded", () => {
  const popupContainer = document.getElementById("popup-container");
  const popupImage = document.getElementById("popup-image");
  const popupLink = document.getElementById("popup-link");
  const loadInvitationButton = document.getElementById("load-invitation");

  // Lista de invitaciones (puedes agregar más)
  const invitations = [
    {
      image: "https://drive.google.com/uc?id=1gpziurbt49myjdkXNM2A-y9t4ILmeWdJ", //Enlace directo
      link: "https://sites.google.com/view/muestra-verde-esmeralda/home",
    },
  ];

  // Función para cargar una invitación al azar
  function loadRandomInvitation() {
    const randomIndex = Math.floor(Math.random() * invitations.length);
    const invitation = invitations[randomIndex];

    popupImage.src = invitation.image;
    popupLink.href = invitation.link;
    popupContainer.classList.remove("hidden");
  }

  // Cierra el pop-up al hacer clic fuera de él
  popupContainer.addEventListener("click", (e) => {
    if (e.target === popupContainer) {
      popupContainer.classList.add("hidden");
    }
  });

  // Botón para cargar una invitación
  loadInvitationButton.addEventListener("click", loadRandomInvitation);
