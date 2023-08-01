import { getEmployeePairs } from './getEmployeesPairs';
import { calculateDaysWorkedTogetherNew } from './calculateDaysWorkedTogether';

// upgraded function
export function sortByProjectId(employeesData) {

  // get the pairs of employees that have worked together on a common project
  const employeePairs = getEmployeePairs(employeesData);
  let result = [];

  for (const [projectId, signlePair] of Object.entries(employeePairs)) {
    if (signlePair.length < 2) { return; }

    let pair = calculateDaysWorkedTogetherNew(signlePair, projectId);

    result.push(pair);
  }
  //sort array to show the pair that have worked for most days together, at the top of the result table
  return result.sort((a, b) => b.duration - a.duration);
}