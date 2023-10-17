 for (let i = 1; i <= 15; i++) {
    if (i == 1) {
        document.write("a. Counting : " + i + " ");
    }
    else {
        document.write(i + " " );
    }
}

document.write("</br>");

for (let i = 15; i >= 1; i--) {
    if (i == 15) {
        document.write("b. Reverse : " + i + " ");
    }
    else {
        document.write(i + " ");
    }
}

document.write("</br>");

for (let i = 0; i <= 20; i+=2) {
    if (i == 0) {
        document.write("c. Even: " + i + " ");
    }
    else {
        document.write(i + " ");
    }
}

document.write("</br>");

for (let i = 1; i <= 20; i+=2) {
    if (i == 1) {
        document.write("d. Odd : " + i + " ");
    }
    else {
        document.write(i + " ");
    }
}

document.write("</br>");

for (let i = 2; i <= 20; i+=2) {
    if (i == 2) {
        document.write("e. Series : " + i + "k ");
    }
    else {
        document.write(i + "k ");
    }
}