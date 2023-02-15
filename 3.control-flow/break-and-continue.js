
// Break = jump out of the loop
//Continue = reiterate and go back to the beginning

let i = 0;
while (i <=10) {
//    if (i === 5) break;
    if (i % 2 === 0) {
        i++;
        continue;
    }

    console.log(i);
    i++;
}

// when continue is seen it will jump back to the start of the loop








