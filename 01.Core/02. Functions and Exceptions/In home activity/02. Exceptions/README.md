<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg)" alt="logo" width="300px" style="margin-top: 20px;"/>

# Exceptions - Tasks

1. Re-write your functions from **Functions - In home activity** to throw errors instead of printing error messages

- Check if any of the arguments is not a number and throw an Error

     - Check for type in JavaScript

     ```js
     throw new Error(`${item} is not a number`);
     ```

   - Use try catch to catch the error

     ```js
     try {
       add('Telerik', 1, 2);
     } catch (error) {
       console.log(error.message);
     }
     ```
