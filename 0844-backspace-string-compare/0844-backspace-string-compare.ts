function backspaceCompare(s: string, t: string): boolean {
    
    let scopy = "", tcopy = "", count = 0;
    for(let i = s.length - 1; i >= 0; i--) {
        if(s[i] == '#') {
            count++;
            continue;
        }else {
            if(count > 0) {
                count--;
                continue;
            }else {
                scopy = s[i] + scopy;
            }
        }

    }
    count = 0;
    for(let i = t.length - 1; i >= 0; i--) {
        if(t[i] == '#') {
            count++;
            continue;
        }else {
            if(count > 0) {
                count--;
                continue;
            }else {
                tcopy = t[i] + tcopy;
            }
        }

    }

    return scopy == tcopy;
};