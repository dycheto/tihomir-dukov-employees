/*
This method gets raw employeed data as props and returns it in new object.
The object takes the ProjectId as keys and set the pair of employees that work on it in array
that contains the whole information about each employee.
*/

import { setTodaysDate } from "./setTodaysDate";

export function getEmployeePairs(employeesData) {
    const employeesPairsInCommonProject = {};

    employeesData.forEach(employee => {
        if (employee.DateTo === "null") {
            employee.DateTo = setTodaysDate();
        }
        const { EmpID, ProjectID, DateFrom, DateTo } = employee;

        if (!employeesPairsInCommonProject[ProjectID]) {
            employeesPairsInCommonProject[ProjectID] = [];
        }
        employeesPairsInCommonProject[ProjectID].push({ EmpID, ProjectID, DateFrom, DateTo });
    });

    return employeesPairsInCommonProject;
}