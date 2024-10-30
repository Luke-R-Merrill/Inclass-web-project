import "bootstrap"

function getMax(x, y, z) {
    let max = x;
    if (y > x) {
        max = y;
    }
    if (z > x) {
        max = z;
    }

    return max;
}
console.log(getMax(4, 5, 1));

function getMin(x, y, z) {
    let min = x;
    if (y < x) {
        min = y;
    }
    if (z < x) {
        min = z;
    }

    return min;
}
console.log(getMin(4, 5, 1));

function getMean(x, y, z) {
    let mean = (x + y + z) / 3;
    return mean;
}
console.log(getMean(4, 5, 1));

function compare(word1, word2) {
    if (word1 == word2) {
        return 0;
    } else if (word1 > word2) {
        return 1;
    } else {
        return -1;
    }
}
console.log(compare("howdy", "howdy"))
console.log(compare("car", "telaphone"))
console.log(compare("toaster", "rat"))

function arrow(size) {
    let result = "";
    let i = 1;
    //upper part
    while (i <= size) {
        for (let j = 0; j < i; j++) {
            result += "*";
        }
        result += "\n";
        i++;
    }
    //lower part
    i = size - 1;
    while (i > 0) {
        for (let j = 0; j < i; j++) {
            result += "*";
        }
        result += "\n";
        i--;
    }

    return result;
}
console.log(arrow(3));
console.log(arrow(12));

function getCharPerLine(str, indent) {
    let result = "";

    for (let i = 0, spaces = ""; i < str.length; i++) {
        if (str[i] !== " ") {
            result += spaces + str[i] + "\n";
            if (indent) spaces += " ";
        }
    }
    return result;
}
console.log(getCharPerLine("Hello World!", false));
console.log(getCharPerLine("Hello World!", true));

