// Parallax effect

// add a mousemove event listener to the document, and call the 'parallax' function when the event is fired
document.addEventListener('mousemove', parallax);

// the 'parallax' function
function parallax(event) {
    // select all elements with the class 'element', and loop through each of them
    document.querySelectorAll('.element')?.forEach(element => {
        // get the 'data-parallax-value' attribute of the current element
        const position = element.getAttribute('data-parallax-value');
        // calculate the horizontal displacement of the element based on the mouse position and the 'position' attribute
        const x = (window.innerWidth - event.pageX * position) / 90;
        // calculate the vertical displacement of the element based on the mouse position and the 'position' attribute
        const y = (window.innerWidth - event.pageY * position) / 90;
        // set the 'transform' CSS property of the element to move it according to the calculated displacements
        element.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

// Submit Form

// add a submit event listener to the first form element in the document, and call an anonymous function when the event is fired
document.querySelector('form')?.addEventListener('submit', (event) => {
    // prevent the default form submission behavior
    event.preventDefault();

    // get the values of the 'email' and 'password' input fields, and store them in 'email' and 'password' variables
    const email = document.querySelector(`input[name=email]`)?.value;
    const password = document.querySelector(`input[name=password]`)?.value;

    // log the values of 'email' and 'password' to the console
    console.log(`
        YOUR DATA \n
        Email: ${ email },
        Password: ${ password }
    `)
})
