// função SnapCrackle

function snapCrackle(maxValue) {
    let texto = "";
    for (let n = 1; n <= maxValue; n++) {
        if (n % 2 !== 0 && n % 5 === 0) {
            texto += "SnapCrackle, ";
            continue;
        }
        if (n % 2 !== 0) {
            texto += "Snap, ";
            continue;
        }
        if (n % 5 === 0) {
            texto += "Crackle, ";
            continue;
        }
        texto += n + ", ";
    }
    console.log(texto);
}

snapCrackle();

