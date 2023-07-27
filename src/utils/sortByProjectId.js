import { formatDate } from "./formatDate";

export function sortByProjectId(employeesData) {
  const employeePairs = getEmployeePairs(employeesData);

  let result = [];

  for (const projectEmployees of Object.values(employeePairs)) {
    if (projectEmployees.length !== 2) { continue; }
    const startDateA = new Date(projectEmployees[0].DateFrom);
    const endDateA = new Date(projectEmployees[0].DateTo);
    const startDateB = new Date(projectEmployees[1].DateFrom);
    const endDateB = new Date(projectEmployees[1].DateTo);

    const overlapStartDate = new Date(Math.max(startDateA, startDateB));
    const overlapEndDate = new Date(Math.min(endDateA, endDateB));

    const durationInMs = overlapEndDate - overlapStartDate;
    const durationInDays = durationInMs / (1000 * 60 * 60 * 24);

    let pair = {
      firstEmployeeId: projectEmployees[0].EmpID,
      secondEmployeeId: projectEmployees[1].EmpID,
      projectId: projectEmployees[0].ProjectID,
      duration: durationInDays
    };

    result.push(pair)
  }

  return result.sort((a, b) => b.duration - a.duration);
}

function getEmployeePairs(employeesData) {
  const projectsData = {};

  employeesData.forEach(employee => {
    if (employee.DateTo === "null") {
      employee.DateTo = formatDate();
    }
    const { EmpID, ProjectID, DateFrom, DateTo } = employee;
    if (!projectsData[ProjectID]) {
      projectsData[ProjectID] = [];
    }
    projectsData[ProjectID].push({ EmpID, ProjectID, DateFrom, DateTo });
  });

  return projectsData;
}

