module.exports = function toReadable(number) {
    function convertToStringWith1Char(numberWith1Char) {
        if (numberWith1Char == 0) {
            return 'zero';
        }
        if (numberWith1Char == 1) {
            return 'one';
        }
        if (numberWith1Char == 2) {
            return 'two';
        }
        if (numberWith1Char == 3) {
            return 'three';
        }
        if (numberWith1Char == 4) {
            return 'four';
        }
        if (numberWith1Char == 5) {
            return 'five';
        }
        if (numberWith1Char == 6) {
            return 'six';
        }
        if (numberWith1Char == 7) {
            return 'seven';
        }
        if (numberWith1Char == 8) {
            return 'eight';
        }
        if (numberWith1Char == 9) {
            return 'nine';
        }
    }

    function convertToStringWith2Char(numberWith2Char) {
        if (numberWith2Char == 10) {
            return 'ten';
        } else if (numberWith2Char == 11) {
            return 'eleven';
        } else if (numberWith2Char == 12) {
            return 'twelve';
        } else if (numberWith2Char == 13) {
            return 'thirteen';
        } else if (numberWith2Char == 14) {
            return 'fourteen';
        } else if (numberWith2Char == 15) {
            return 'fifteen';
        } else if (numberWith2Char == 16) {
            return 'sixteen';
        } else if (numberWith2Char == 17) {
            return 'seventeen';
        } else if (numberWith2Char == 18) {
            return 'eighteen';
        } else if (numberWith2Char == 19) {
            return 'nineteen';
        } else if (numberWith2Char == 20) {
            return 'twenty';
        } else if (numberWith2Char == 30) {
            return 'thirty';
        } else if (numberWith2Char == 40) {
            return 'forty';
        } else if (numberWith2Char == 50) {
            return 'fifty';
        } else if (numberWith2Char == 60) {
            return 'sixty';
        } else if (numberWith2Char == 70) {
            return 'seventy';
        } else if (numberWith2Char == 80) {
            return 'eighty';
        } else if (numberWith2Char == 90) {
            return 'ninety';
        } else {
            return convertToStringWith2Char(numberWith2Char[0] + '0') + ' ' + convertToStringWith1Char(numberWith2Char[1]);
        }
    }

    function convertToStringWith3Char(numberWith3Char) {
        if (numberWith3Char[1] == 0 && numberWith3Char[2] == 0) {
            return convertToStringWith1Char(numberWith3Char[0]) + ' hundred';
        } else if (numberWith3Char[1] == 0) {
            return convertToStringWith1Char(numberWith3Char[0]) + ' hundred ' + convertToStringWith1Char(numberWith3Char[2]);
        } else {
            return convertToStringWith1Char(numberWith3Char[0]) + ' hundred ' + convertToStringWith2Char(numberWith3Char[1] + numberWith3Char[2]);
        }
    }

    const numberToString = number.toString();
    const numberLength = numberToString.length;

    if (numberLength === 1) {
        return convertToStringWith1Char(numberToString);
    }

    if (numberLength === 2) {
        return convertToStringWith2Char(numberToString);
    }

    if (numberLength === 3) {
        return convertToStringWith3Char(numberToString);
    }
}
