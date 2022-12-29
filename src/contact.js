
const createContact = () => {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const contactContent = document.createElement("h1");
    contactContent.textContent = "Contact";
    contact.appendChild(contactContent);

    contact.appendChild(createForm());
    return contact;
};
const createForm = () => {
    const contactForm = document.createElement("form");
    contactForm.classList.add("contact-form");

    const nameField = document.createElement("fieldset");
    nameField.classList.add("name-field");
    const firstName = document.createElement("input");
    firstName.type = "text";
    firstName.placeholder = "First Name";
    firstName.classList.add("name-inputs");
    const lastName = document.createElement("input");
    lastName.type = "text";
    lastName.placeholder = "Last Name";
    lastName.classList.add("name-inputs");
    nameField.appendChild(firstName);
    nameField.appendChild(lastName);
    

    const infoField = document.createElement("fieldset");
    infoField.classList.add("info-field");
    const email = document.createElement("input");
    email.type = "text";
    email.placeholder = "Email";
    email.classList.add("info-inputs");
    const phoneNumber = document.createElement("input");
    phoneNumber.type = "text";
    phoneNumber.placeholder = "Phone Number";
    phoneNumber.classList.add("info-inputs");
    infoField.appendChild(email);
    infoField.appendChild(phoneNumber);



    const messageField = document.createElement("fieldset");
    messageField.classList.add("message-field");

    contactForm.appendChild(nameField);
    contactForm.appendChild(infoField);
    // contactForm.appendChild(messageField);


    return contactForm;
};
const loadContactTab = () => {
    const currentContent = document.querySelector(".main");
    currentContent.textContent = '';
    currentContent.appendChild(createContact());
};
export default loadContactTab;