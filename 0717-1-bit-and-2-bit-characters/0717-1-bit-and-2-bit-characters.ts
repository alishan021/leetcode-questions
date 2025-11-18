function isOneBitCharacter(bits: number[]): boolean {
    
    for(let i = 0; i < bits.length; i++) {
        if(bits[i] !== 0) {
            i++;
        }else {
            if(bits[i] === 0 && i === bits.length - 1) return true;
        }
    }

    return false;
};