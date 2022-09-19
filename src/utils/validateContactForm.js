export const validateContactForm = (values) => {
    const errors = {};

    //this checks if values.firstName exists. If it does not, we will add a firstName property to the errors object, containing the text string 'Required'.
    if (!values.firstName) {
        errors.firstName = 'Required';
    //check that values.firstName contains at least 2 chars if not, errors.firstName value to a string of 'Must be at least 2 characters'
    } else if (values.firstName.length < 2) {
        errors.firstName = 'Must be at least 2 characters.';

    //check values.firstName contains no  more tha 15 characters. If max value is exceeded set errors.firstName value to string of 'Must be 15 characters or less'
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length < 2) {
        errors.lastName = 'Must be at least 2 characters.';
    } else if (values.lastName.length > 15) {
        errors.lastName = 'Must be 15 characters or less';
    }

    //This expresssion will test that a value compared against it will contain only digits.
    const reg = /^\d+$/;
    if (!reg.test(values.phoneNum)) {
        errors.phoneNum = 'The phone number should contain only numbers.';
    }

    if (!values.email.includes('@')) {
        errors.email = 'Email should contain a @';
    }

    return errors;
};