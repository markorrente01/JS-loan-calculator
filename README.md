![preview](/images/preview-loanCalculator.png)
# Loan Calculator Built with JS.

## Contents

  - [Screenshot](#screenshot)
  - [Link](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resource](#useful-resources)
- [Author](#author)

### Screenshot

![ios7](/images/jsLoan-caculator-ios7.png)
![ipad](/images/JsLoan-calculator-sc-iospad.png)
![desktop](/images/jsLoan-calculator-sc-desktop.png)

### Link

- Live Site URL: [Live site](https://markorrente01.github.io/JS-loan-calculator/)

### Built with

- Semantic HTML5 markup
- CSS Grid
- SCSS
- Javascript


### What I learned

In this mini-project i learnt how to create a progress bar with javascript.

```js
let animating = false;
function loadAnimation() {
    if (animating) return; {
        animating = true;
        const progressAnimation = document.querySelector('.progress__animation');
            progressAnimation.style.width = '0%';
        let width = 0;
        const id = setInterval(()=>{
            if (width>=100) {
                clearInterval(id);
                animating = false;
            } else {
                width++
                progressAnimation.style.width = `${width}%`
            }
                }, 10)
            } 
}
```
### Continued development

Will later recreate this with a better ui experience using react.js instead of pure vanilla js.

### Useful resource

- [chatgpt](https://chatgpt.com/) - This is a great help when you get stuck in a project but you must give it a good prompt for better result.

## Author

- Frontend Mentor - [@Markorrente](https://www.frontendmentor.io/profile/markorrente01);
- X(formally known as twitter) - [markorrente01](https://twitter.com/markorrente01);