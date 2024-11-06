const validName = (name) => {
    const words = name.split(' ');
    let firstWordInitial = false;
    let secondWordInitial = false;

    if(words.length !== 2 && words.length !== 3){
        console.log('Must be 2 or 3 words');
        return false;
    }

    for (let i = 0; i < words.length; i++) {
        if(!(words[i].charCodeAt(0) >= 65 && words[i].charCodeAt(0) <= 90)){
            console.log('Incorrect capitalization');
            return false;
        }

        let tempWord = words[i].replace(".", "");

        if(tempWord.length === 1){
            if(words[i].indexOf('.') < 0){
                console.log('Missing dot after initial');
                return false;
            }
            if(words.length === 3) {
                if(i === 0){
                    firstWordInitial = true;
                } else if(i === 1){
                    secondWordInitial = true;
                }
            }
        } else {
            if(words[i].lastIndexOf('.') === words[i].length - 1){
                console.log('Words cannot end with a dot (only initials can)');
                return false;
            }
        }

        if(i === words.length - 1) {
            if(tempWord.length < 2) {
                console.log('Last name cannot be initial');
                return false;
            }
        }
    }

    if(words.length === 3) {
        if(firstWordInitial !== secondWordInitial){
            if(firstWordInitial){
                console.log('Cannot have: initial first name + word middle name');
                return false;
            }
        }
    }

    console.log("Nama tersebut adalah nama yang valid");
    return true;
}

validName("Angelina K. Putri");