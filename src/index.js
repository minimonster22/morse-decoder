const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const morseToChar = (morse) => {
        if (morse === '**********') {
            return ' ';
        }
        // Убираем ведущие нули, затем заменяем 10 на ".", 11 на "-"
        morse = morse.replace(/^0+/, '').replace(/10/g, '.').replace(/11/g, '-');
        return MORSE_TABLE[morse];
    }

    const words = expr.split('**********');
    const decodedWords = words.map((word) => {
        const letters = word.match(/.{1,10}/g);
        const decodedLetters = letters.map(morseToChar);
        return decodedLetters.join('');
    });

    return decodedWords.join(' ');
}

module.exports = {
    decode
}