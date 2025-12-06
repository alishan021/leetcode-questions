function canPlaceFlowers(flowerbed: number[], n: number): boolean {

    for(let i = 0; i < flowerbed.length; i++) {
        let adj = flowerbed[i];
        // let badj = flowerbed[i - 1] || oppositeNum(flowerbed[i]);
        // let aadj = flowerbed[i + 1] || oppositeNum(flowerbed[i]);
        let badj = flowerbed[i - 1] || 0;
        let aadj = flowerbed[i + 1] || 0;
        if(badj === adj && aadj === adj) {
            flowerbed[i] = oppositeNum(flowerbed[i]);
            n--;
            console.log(flowerbed)
        }
    }
    let result = n <= 0 ? true : false;
    return result;
};

function oppositeNum(num) {
    return num = num === 1 ? 0 : 1;
}