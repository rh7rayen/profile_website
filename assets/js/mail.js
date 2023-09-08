const handleFormSubmit = async (e) => {
  e.preventDefault();
  try {
    const result = await emailjs.sendForm(
      "service_5tb2s8d",
      "template_yhqfxm1",
      e.target,
      "TMw3ivBr_9XPW5k3w"
    );
    if (result.text === "OK") {
      Swal.fire({
        icon: "success",
        title: "Message envoyé avec succès!",
        text: "Votre message a été envoyé avec succès.",
      }).then(() => {
        console.log("succées");
      });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Erreur",
      text: "Une erreur s'est produite lors de l'envoi du message.",
    });
  }
};
