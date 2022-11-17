{
    // Deklaracja finkcji
    const welcome = () => {
        console.log("welcome everyone to my homework!");
    }
    // Wywołanie funckji
    welcome();
}



{
    const result = () => {
        let amount = amountElement.value; // deklaracja wartości zmiennych
        let currency = currencyElement.value; // deklaracja wartości zmiennych
        let result = ((amount / currency).toFixed(2)); // deklaracja przeliczenia
        resultElement.innerText = (`${result} PLN`); // prezentacja wyniku w zaokragleniu do 2 miejsc po przecinku
    };

    // złapanie elementu w HTML i przypisanie go do zmiennej
    let formElement = document.querySelector(".js-form");
    let resultElement = document.querySelector(".js-result"); // złapanie elementu w HTML i przypisanie go do zmiennej
    let currencyElement = document.querySelector(".js-currencyList");
    let amountElement = document.querySelector(".js-inputAmount")
    
    formElement.addEventListener("click", result); // Wywołanie funckji: zatwierdzenie formularza poprzez uruchomienie dtałej result
}