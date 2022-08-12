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

  /** 
 *  @param {String} expr
 * 
 */
function decode(expr) {
    return expr.match(/.{1,10}/g)
        .map(str => {
            const tranformedStr = str
                .replace(/^0+/, '')
                .replace(/^\*+/, ' ')
                .replace(/10/g, '.')
                .replace(/11/g, '-');
            return tranformedStr !== ' ' ? MORSE_TABLE[tranformedStr] : ' ';
        }).join('');
}

module.exports = {
    decode
}