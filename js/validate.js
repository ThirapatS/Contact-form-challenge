const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const message = document.getElementById('message');
const successWindow = document.getElementById('successWindow');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submit')
    if (validateForm() && validateRCheck() && validateCCheck()) {
        successWindow.style.top = "5%"
    }
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.err');

    errorDisplay.innerText = message;
    element.style.outline = '1px solid var(--primary-color-red)';
}

const validateForm = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    const emailTemP = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let isPass = true

    if (firstnameValue === "") {
        setError(firstname, "This field is require");
        isPass = false;
    }

    if (lastnameValue === "") {
        setError(lastname, "This field is require");
        isPass = false;
    }

    if (emailValue === "") {
        setError(email, "This field is require");
        isPass = false;
    } else if (!emailTemP.test(emailValue)) {
        setError(email, "Please enter a valid email address");
        isPass = false;
    }

    if (messageValue === "") {
        setError(message, "This field is require");
        isPass = false;
    }
    return isPass;
}

const validateRCheck = () => {
    const type = document.getElementsByName('queryType');
    let isRadioCheck = false;

    Array.from(type).forEach(radio => {
        if (radio.checked) {
            isRadioCheck = true
        }
    });

    if (!isRadioCheck) {
        const inputControl = type[0].closest('.type');
        const errorDisplay = inputControl.querySelector('.err');

        errorDisplay.innerText = "Please select a query type";
    }
    return true;
} 

const validateCCheck = () => {
    const consent = document.getElementById('consent');

    if (!consent.checked) {
        const errorDisplay = document.querySelector('.submitCheck .err');
        errorDisplay.innerText = "To submit this form, please consent to being contacted";
    }
    return true;
}
