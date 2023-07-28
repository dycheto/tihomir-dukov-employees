import { getEmployeePairs } from './getImployeesPairs'

export function sortByProjectId(employeesData) {

  // get the pairs of employees that have worked together on a common project
  const employeePairs = getEmployeePairs(employeesData);

  let result = [];

  for (const projectEmployees of Object.values(employeePairs)) {
    if (projectEmployees.length !== 2) { continue; }
    // set the start date and the end date of both employees 
    const startDateA = new Date(projectEmployees[0].DateFrom);
    const endDateA = new Date(projectEmployees[0].DateTo);
    const startDateB = new Date(projectEmployees[1].DateFrom);
    const endDateB = new Date(projectEmployees[1].DateTo);

    //in the next lines we set the start date and the end date of the pair common work
    const overlapStartDate = new Date(Math.max(startDateA, startDateB));
    const overlapEndDate = new Date(Math.min(endDateA, endDateB));

    // we calculate the total days of working together
    const durationInMs = overlapEndDate - overlapStartDate;
    const durationInDays = durationInMs / (1000 * 60 * 60 * 24);


    let pair = {
      firstEmployeeId: projectEmployees[0].EmpID,
      secondEmployeeId: projectEmployees[1].EmpID,
      projectId: projectEmployees[0].ProjectID,
      duration: durationInDays
    };

    //push pair in array
    result.push(pair)
  }

  //sort array to show the pair that have worked for most days together, at the top of the result table
  return result.sort((a, b) => b.duration - a.duration);
}
