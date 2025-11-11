function maxFreqSum(s: string): number {
    // let maxVowels = new Map();
    // let maxConsonants = new Map();
    let maxFreq = new Map();

    for(let char of s) {
        // if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
        //     maxVowels.set( char, (maxVowels.get(char) || 0) + 1);
        // }else {
        //     maxConsonants.set( char, ( maxConsonants.get(char) || 0) + 1);
        // }
        maxFreq.set( char, (maxFreq.get(char) || 0) + 1);
    }

    let entries = maxFreq.entries();

    let maxVowels = 0, maxCons = 0;
    for(let [ key, value] of entries) {
        if(key == 'a' || key == 'e' || key == 'i' || key == 'o' || key == 'u') {
            if(value > maxVowels) maxVowels = value;
        }else {
            if(value > maxCons) maxCons = value;
        }
    }

    return maxVowels + maxCons;
};