let person = {
    name: 'Joery',
    age: 40,
    city: "Vlijmen",
    length: "1.83m",
    gender: "male"
};

// Object.entries(person).map(info => {
//     console.log(info)
// })

Object.entries(person).forEach(info => {
    console.log(info)
})

// for (const info of Object.entries(person)) {
//     console.log(info)
// }

// Hoeveel regels neemt mijn for loop en mijn while loop in beslag? for loop 5, while loop 7 (incl <enter> ed).
// Hoeveel regels neemt mijn forEach method in beslag? forEach loop, 3 regels incl <enter>
// Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Ik vind vooral minder code en toch makkelijk te lezen het voordeel
// Kun je een array method gebruiken op een object? Het antwoord is nee.
// Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
// Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren? JA