function canPlaceFlowers(flowerbed: number[], n: number): boolean {

    if(n === 0) return true;

    for(let i = 0; i < flowerbed.length; i++) {
        let curr = flowerbed[i];
        let prev = flowerbed[i - 1] || 0;
        let next = flowerbed[i + 1] || 0;
        if(prev === curr && next === curr) {
            flowerbed[i] = curr === 1 ? 0 : 1;
            n--;
            if(n === 0) return true;
        }
    }
    return false;
};