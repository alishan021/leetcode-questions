function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
    let count = 0
    for(let h of hours) {
        if(h >= target) count++;
    }
    return count;
};