function isAnagram(s: string, t: string): boolean {
    
    if(s.length !== t.length) return false;

    let ss = s.split('').sort().toString();
    let tt = t.split('').sort().toString();
    console.log(ss, tt)
    return ss === tt ? true : false;
};