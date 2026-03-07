function dailyTemperatures(temperatures: number[]): number[] {
    
    let answers = [];
    let lastcount = 0;
    for(let i = 0; i < temperatures.length; i++) {
        if(temperatures[i] === temperatures[i - 1] && lastcount > 0) {
            answers[i] = --lastcount;
            continue;
        }
        let count = 0;
        let temp = temperatures[i];
        for(let j = i + 1; j < temperatures.length; j++) {
            if(temperatures[j] > temperatures[i]) {
                count = j - i;
                lastcount = count;
                break;
            }
        }
        answers[i] = count;
    }
    return answers;
};