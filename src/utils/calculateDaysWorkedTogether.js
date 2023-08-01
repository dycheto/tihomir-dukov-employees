// upgraded function
export function calculateDaysWorkedTogetherNew(employeesPair, projectId) {
    let firstEmployeeId = Object.keys(employeesPair)[0];
    let secondEmployeeId = Object.keys(employeesPair)[1];
    let firstEmployeeDates = employeesPair[firstEmployeeId];
    let secondEmployeeDates = employeesPair[secondEmployeeId];

    let pair = {
        firstEmployeeId: firstEmployeeId,
        secondEmployeeId: secondEmployeeId,
        projectId: projectId,
        duration: 0
    };

    for (let i = 0; i < firstEmployeeDates.length; i++) {
        const startDateA = new Date(firstEmployeeDates[i][0]);
        const endDateA = new Date(firstEmployeeDates[i][1]);

        for (let j = 0; j < secondEmployeeDates.length; j++) {
            const startDateB = new Date(secondEmployeeDates[j][0]);
            const endDateB = new Date(secondEmployeeDates[j][1]);

            //in the next lines we set the start date and the end date of the pair common work
            const overlapStartDate = new Date(Math.max(startDateA, startDateB));
            const overlapEndDate = new Date(Math.min(endDateA, endDateB));

            // we calculate the total days of working together
            const durationInMs = overlapEndDate - overlapStartDate;

            if (durationInMs < 0) {
                continue;
            }

            const durationInDays = Math.round(durationInMs / (1000 * 60 * 60 * 24)) + 1;

            // add to existing
            // if the pair worked together at the same project but at different time period

            pair.duration += durationInDays;
        }
    }

    return pair
}