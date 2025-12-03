function reverseWords(s: string): string {
    
    // return s.split(' ').map( word => word.split('').reverse().join('')).join(' ');

    // let result = "", word: string[] = [];
    // for(let i = 0; i < s.length; i++) {
    //     if(s[i] !== ' ') word.push(s[i]);
    //     else {
    //         result += reverse(word) + ' ';
    //         word = [];
    //     }
    // }
    // result += reverse(word);
    // return result;

     let result = "", word: string[] = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] !== ' ') word.unshift(s[i]);
        else {
            result += word.join('') + ' ';
            word = [];
        }
    }
    result += word.join('');
    return result;
};

// function reverse(word) {
//     let left = 0, right = word.length - 1;
//     console.log(word)
//         while( left < right ) {
//             console.log(word[left], word[right])
//             [ word[left], word[right]] = [ word[right], word[left]];
//             left++;
//             right--;
//         }
//     return word.join('');
// }