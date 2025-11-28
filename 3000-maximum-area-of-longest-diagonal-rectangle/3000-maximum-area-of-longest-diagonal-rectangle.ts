function areaOfMaxDiagonal(dimensions: number[][]): number {
    
    // let resultIndex = 0;
    // let longestDia = 0;
    // let resultArr = [];
    // for(let i = 0; i < dimensions.length; i++) {
    //     let diagonal = Math.sqrt(( dimensions[i][0] * dimensions[i][0]) + ( dimensions[i][1]) * dimensions[i][1]);
    //     if( diagonal > longestDia) {
    //         longestDia = diagonal;
    //         resultIndex = i;
    //     }else if(diagonal === lognestDia) {
    //         resultArr.push(dimensions[i]);
    //     }
    // }

    // resultArr = resultArr.map( value => value[0] * value[1]);

    // if(resultArr.length > 1) {
        
    // }

    // return dimensions[ resultIndex][0] * dimensions[ resultIndex][1];
    let longestDia = 0;
    let resultArr = [];
    let diaArr = dimensions.map( value => {
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

    console.log(longestDia, diaArr, resultArr)
    let result = resultArr.reduce(( acc, cur ) => {
        if(cur[0] * cur[1] > acc) {
            return cur[0] * cur[1];
        }else {
            return acc;
        }
    }, 0);

    // console.log(result);
    return result;
};