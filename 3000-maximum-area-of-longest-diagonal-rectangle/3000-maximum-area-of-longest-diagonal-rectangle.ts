function areaOfMaxDiagonal(dimensions: number[][]): number {
    
    let longestDia = 0;
    let resultArr = [];
    dimensions.forEach( value => {
        let dia = Math.sqrt((value[0] * value[0]) + (value[1] * value[1]));
        if(dia === longestDia) {
            resultArr.push(value);
        }else if(dia > longestDia) {
            longestDia = dia;
            resultArr = [];
            resultArr.push(value);
        }
        return dia;
    });

    return resultArr.reduce(( acc, cur ) => {
        if(cur[0] * cur[1] > acc) {
            return cur[0] * cur[1];
        }else {
            return acc;
        }
    }, 0);
};