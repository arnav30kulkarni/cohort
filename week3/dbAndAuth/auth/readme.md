# AUTHORIZATION CONCEPTS:-

## Hashing:-

> in hashing some sensitive fields like password etc, are converted into some random letters and numbers and stored in database, these converted text cannot be decrypted

when the user again signs in the password is converted into hashed and in compared with the previously hashed password to give access

### note:- hashing is only one way

## Encrytion:-

>It is kind of similar to hashing just works two way

## JSON web tokens:-

> JWT takes an object as an input and converts it to some really  long string consisting of random letters and numbers (it is like a digital signature)

the only difference is that we can find out input from it where as in hashing we can re convert it 

### note :- when an object in passed through jwt.encode we get a sting and if we pass that string through jwt.verify we can get original data.

## Local storage:-

>When a user inputs his username password into the website it is converted into the backend and the backend returns a jwt file , when the client gets the jwt file it stores it into its local storage in the browser almost forever that is until the user logs out

### this token is used to verify the user to  use the websites features rather than putting id password everytime.