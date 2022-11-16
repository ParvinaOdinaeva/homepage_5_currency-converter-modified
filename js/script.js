// złapanie elementu w HTML i przypisanie go do zmiennej
let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-inputAmount");
let currencyElement  = document.querySelector(".js-currencyList");
let resultElement  = document.querySelector(".js-result");

// wydarzenie/akcja: zatwierdzenie formularza, blokując wysyłkę
// deklaracja wartości zmiennych
// deklaracja przeliczenia
// prezentacja wyniku w zaokragleniu do 2 miejsc po przecinku
formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let amount = amountElement .value;
    let currency = currencyElement .value;
    let result = ((amount / currency).toFixed(2));
    resultElement.innerText = (`${result} PLN`);
});