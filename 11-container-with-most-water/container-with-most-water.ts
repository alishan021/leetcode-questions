function maxArea(height: number[]): number {
    
    let max = 0;
    let i = 0, j = height.length - 1;
    while( i < j ) {
        // let x = j - i;
        let y = Math.min( height[i], height[j] );
        max = Math.max( (j - i) * y, max )
        // let area = x * y;
        // if( max < area ) max = area;

        if(height[i] < height[j]) {
            i++
        }else {
            j--
        }
    }

    return max;
};