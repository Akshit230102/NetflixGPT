export const validateSignUp = (name, email, password) => {
    const isValidName = /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name);
    const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isValidPassword = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(password);
   if(!isValidName) return "Please enter a valid name";
   if(!isValidEmail) return "Please enter a valid email id";
   if(!isValidPassword) return "Enter a password with at least one uppercase letter, one lowercase letter, one digit and between 8-32 characters";
   return null;
}

export const validateSignIn = (email, password) => {
    const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isValidPassword = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(password);
   if(!isValidEmail) return "Please enter a valid email id";
   if(!isValidPassword) return "Enter a password with at least one uppercase letter, one lowercase letter, one digit and between 8-32 characters";
   return null;
}