function isAnagram(s: string, t: string): boolean {
    
    if(s.length !== t.length) return false;

    // let ss = s.split('').sort().toString();
    // let tt = t.split('').sort().toString();
    // console.log(ss, tt)
    // return ss === tt ? true : false;

    let map = new Map();
    for(let i = 0; i < s.length; i++) {
        map.set( s[i], (map.get(s[i]) || 0) + 1);
        map.set( t[i], (map.get(t[i]) || 0) - 1);
    }

    for(let val of map.values()) {
        if(val !== 0) return false;
    }

    return true;
};