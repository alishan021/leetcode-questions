function differenceOfSum(nums: number[]): number {
    
    let elementSum = 0, digitSum = 0;

    for(let i = 0; i < nums.length; i++) {
        elementSum += nums[i];
        digitSum += sumOfAllDigits(nums[i]);
    }

    return absoluteDifference( elementSum, digitSum);
    // return 0;
};

function sumOfAllDigits(num) {

    let sum = 0;
    while(num >= 10) {
        sum = sum + (num % 10);
        num = floor(num / 10);
    }
    sum += num;
    return sum;

}

function absoluteDifference( x, y) {
    
    let num1 = 0, num2 = 0;
    if(x > y) {
        num1 = x;
        num2 = y;
    }else {
        num1 = y;
        num2 = x
    }
    return num1 - num2;

}


let floor = ( value ) => {
    let newValue = value - (value % 1);
    return newValue < 0 && value !== newValue ? newValue - 1 : newValue;
}