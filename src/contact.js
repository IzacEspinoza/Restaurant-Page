
const createContact = () => {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const contactContent = document.createElement("h1");
    contactContent.textContent = "This is the contact form";
    contact.appendChild(contactContent);

    return contact;
};
const loadContactTab = () => {
    const currentContent = document.querySelector(".main");
    currentContent.textContent = '';
    currentContent.appendChild(createContact());
};
export default loadContactTab;