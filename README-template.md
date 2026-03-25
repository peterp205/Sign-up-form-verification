# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./images/Form%20verification.png)


### Links

- Live Site URL: [Completed GithubPage](https://peterp205.github.io/Sign-up-form-verification/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript


### What I learned

I took on this project to further my knowledge in two key area's which where using grid as I usually use Flexbox for previous layout options and Applying Javascript for websites. 

Both of these went well although the Javascript I still need to experiment with more to really get to grips. I still struggle with knowing the best logical way to approach it without support. 

Some of the code I was happy with is below:

```css
main{
    max-width: 144rem;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: "box1"
    "box2"
    "box3";
    justify-items: center;
    align-items: center;
    justify-content: center;
    align-content: center;
    gap: var(--mid-space);
    padding: 0 var(--lrg-space);
}
```
```js
form.addEventListener('submit', logSubmit);

function logSubmit(e) {
    e.preventDefault();
    console.log('form submitted');
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    const exclamationMark = formControl.querySelector('.exclamation-mark');
    exclamationMark.classList.add('hidden');
    const small = formControl.querySelector('small');
    small.classList.add('hidden');
}
```

### Continued development

I will continue to use grid and I actually found this surprisngly simple but would like a good complex grid to really understand. JavaScript I would like to also further my knowledge with and build more independent ways of writing JavaScript

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Cacti Web Design](https://www.cv.cactiwebdesign.com)
- Frontend Mentor - [@peterp205](https://www.frontendmentor.io/profile/peterp205)
- LinkedIn - [@PeterBrewster](https://www.linkedin.com/in/peter-brewster-9342792a5/)
