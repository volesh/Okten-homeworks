let qoote = document.querySelector('.quote')
let author = document.querySelector('.author')
let button = document.querySelector('.footer_container_button')


fetch('quotes.json')
    .then(text => text.json())
    .then(quotes => {


        function generateQuote() {
            let random = Math.round(Math.random() * 39);

            qoote.innerHTML = `${quotes[random].text}`
            author.innerHTML = `${quotes[random].author}`
        }

        generateQuote()

        button.addEventListener('click', generateQuote)
    });
