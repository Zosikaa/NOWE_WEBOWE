/*	ZADANIE 2 (łatwe-średnie) - Tworzenie Schematu
	------------------------------------------------------------
	Zadanie:
	Stwórz schemat dla kolekcji 'Przedmiot' w systemie szkolnym.
	Schemat powinien zawierać:
	- nazwa: String, wymagana, minlength: 3
	- opis: String, niewymagany
	- liczbaGodzin: Number, wymagana, min: 1, max: 10
	- obowiazkowy: Boolean, domyślnie: true

	Następnie stwórz Model na podstawie tego schematu.
	Na końcu wyeksportuj Model.

	Wskazówka: Użyj new mongoose.Schema() i mongoose.model()

	Miejsce na Twoje rozwiązanie:
	javascript (
		// Twój schemat tutaj

		// Twój model tutaj

		// Eksport modelu tutaj
	)
*/

import mongoose from "mongoose";

const URI = 'mongodb://localhost:27017/mojaSzkola';

async function polaczSieBaza() {

    try {
        await mongoose.connect(URI);
        console.log("Połączono!") ;
    }catch (blad) {
        console.log("Błąd połączenia: ", blad.message);
        process.exit(1); } }


const przedmiotSchema = new mongoose.Schema({
    nazwa: {
        type: String,
        required: true,
        minlenght: 3
    },

    opis: {
        type: String,
        required: false
    },

    liczbaGodzin: {
        type: Number,
        required: true,
        min: 1,
        max: 10
    },

    obowiazkowy: {
        type: Boolean,
        deafult: true
    }

});

const przedmiot = mongoose.model("Przedmiot", przedmiotSchema);

const nowyPrzedmiot = new przedmiot({
    nazwa: "biologia",
    opis: "",
    liczbaGodzin: 2,
    obowiazkowy: true

})

nowyPrzedmiot.save()
	.then(doc => console.log('Zapisano:', doc))
	.catch(err => console.log('Błąd:', err));



module.exports = przedmiot;

polaczSieBaza();    

