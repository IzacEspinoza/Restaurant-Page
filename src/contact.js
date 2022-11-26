//This will display contact info(socials, phone number, email etc.,)loads on button/tab click
const createContact = () => {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const contactContent = document.createElement("h1");
    contactContent.textContent = "This is the contact form";
    contact.appendChild(contactContent);
    return contact;
};

const loadContactTab = () => {
    const currentContent = document.getElementById("content");
    currentContent.textContent = '';
    currentContent.appendChild(createContact());
};

export default loadContactTab;