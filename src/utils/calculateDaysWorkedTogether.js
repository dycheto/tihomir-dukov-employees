export function calculateDaysWorkedTogether(employeesPair) {
    let pair;

    for (let i = 0; i < employeesPair.length - 1; i += 2) {
        const startDateA = new Date(employeesPair[i].DateFrom);
        const endDateA = new Date(employeesPair[i].DateTo);
        const startDateB = new Date(employeesPair[i + 1].DateFrom);
        const endDateB = new Date(employeesPair[i + 1].DateTo);
        //in the next lines we set the start date and the end date of the pair common work
        const overlapStartDate = new Date(Math.max(startDateA, startDateB));
        const overlapEndDate = new Date(Math.min(endDateA, endDateB));

        // we calculate the total days of working together
        const durationInMs = overlapEndDate - overlapStartDate;
        const durationInDays = Math.round(durationInMs / (1000 * 60 * 60 * 24));

        if (i === 0) {
            pair = {
                firstEmployeeId: employeesPair[i].EmpID,
                secondEmployeeId: employeesPair[i + 1].EmpID,
                projectId: employeesPair[i].ProjectID,
                duration: durationInDays
            };
        } else {
            // add to existing
            // if the pair worked together at the same project but at different time period
            pair.duration += durationInDays;
        }
    }

    return pair
}