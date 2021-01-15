function splitText(text, charsCount = 10) {
    /** array of words in text - without spaces*/
    let words = text.split(" ");
    /**the output text*/
    let line = "";
    let resultText;



    for (let index = 0; index <= words.length; index++) {

        if (line.length < charsCount) {
        line += ` ${words[index]} `
        } else {
            resultText += `${line}\n`
            line = ""
        }
    }
    return resultText;
}


/**text to split */
let longText = "Pokud chcete někomu udělat radost a upřednostňujete elektronické knihy, pak naše pohádky najdete v sekci Pohádky jako e-knihy: Jak lišák tropil lotroviny, Princezna ze rmutného dolu a Jak hloupost zlatě vykvetla. V současné době připravujeme sbírku křesťanských legend Jak přišel sedláček do nebe. Zakoupením e-knihy podpoříte i na naši činnost. Děkujeme!!"

console.log(splitText(longText, 20));
// console.log(splitText(longText))


