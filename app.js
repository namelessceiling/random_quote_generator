console.log('connected!');

const url = 'https://type.fit/api/quotes';

function newQuote() {
    let test;
    let thing;
    let quote;
    fetch(url).then(res => res.json()).then(data => test = data).then(test => thing = test[Math.floor(Math.random() * test.length)])
.then(thing => quote = thing.text + ' - ' + thing.author).then(quote => document.getElementById('quote').innerHTML = quote);
}