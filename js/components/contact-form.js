const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name") || "";
    const phone = formData.get("phone") || "";
    const email = formData.get("email") || "";
    const service = formData.get("service") || "";
    const message = formData.get("message") || "";

    const subject = encodeURIComponent(`Quote request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}
Phone / WhatsApp: ${phone}
Email: ${email}
Service: ${service}

Project details:
${message}`,
    );

    window.location.href = `mailto:info@venetic.co.za?subject=${subject}&body=${body}`;
  });
}
