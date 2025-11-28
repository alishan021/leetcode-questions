function areaOfMaxDiagonal(dimensions: number[][]): number {
    
    let resultIndex = 0;
    let longestDia = 0;
    for(let i = 0; i < dimensions.length; i++) {
        let diagonal = Math.sqrt(( dimensions[i][0] * dimensions[i][0]) + ( dimensions[i][1]) * dimensions[i][1]);
        if( diagonal > longestDia) {
            longestDia = diagonal;
            resultIndex = i;
        }
    }

    return dimensions[ resultIndex][0] * dimensions[ resultIndex][1];
};