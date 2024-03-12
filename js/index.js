// window.addEventListener('DOMContentLoaded', (event) => { 


// const input = document.querySelector('input').value;

//     let count = 5; // Maximum number of tries
//     const guess = 10;                                                                                                                
//     console.log(guess)

//     document.getElementById("btn").addEventListener("click", function() {

      
//         if (count > 0) {
//             if (input === guess){
//                 alert("You are correct");
//             }

//             else if (input !== guess) {
//                 alert("Your guess is too wrong");
//             }
//             count--;
            
//             if (count === 0) {
//                 // Disable the button when count reaches 0
//                 document.getElementById("btn").disabled = true;
//                 alert("You are out of guesses.");
//             }
//         } else {
//             alert("You have maxed out your number of tries. Please reload the page to attempt again.");
//         }
//     });



//  })

//  Math.floor(Math.random() *100)


window.addEventListener('DOMContentLoaded', (event) => {
    let count = 5; // Maximum number of tries
    const correctGuess = 10;
    const footerElement = document.querySelector('.footer');

      // Set the initial content of the footer
      footerElement.innerHTML = `Number of Tries: ${count}`;


    document.getElementById("btn").addEventListener("click", function() {
        const input = (document.querySelector('input').value.trim()); // Get the input value and convert it to an integer
     

        if (input === '') {
            alert('Please enter your guess');
            return
        }

        const guess = parseInt(input)

        if (count > 0) {
            if (guess === correctGuess) {
                footerElement.innerHTML = "You are correct";
                
            } else {
                footerElement.innerHTML = `Your guess is incorrect. Tries left: ${count - 1}`;
                
            }
            count--;

            if (count === 0) {
                // Disable the button when count reaches 0
                document.getElementById("btn").style.backgroundColor = "gray";
                document.getElementById("btn").disabled = true;
       
                footerElement.innerHTML = "You are out of guesses.";
            }
        } else {
            footerElement.innerHTML = "You have maxed out your number of tries. Please reload the page to attempt again.";
        }
    });
});