"use strict";
function firstLetterUppercase(name) {
    let firstLetter = name.charAt(0).toUpperCase();
    return `${firstLetter}${name.substring(1)}`;
}
const nome = (name) => name.charAt(0).toUpperCase + name.substring(1);
