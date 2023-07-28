import { getEmployeePairs } from './getEmployeesPairs';
import { calculateDaysWorkedTogether } from './calculateDaysWorkedTogether';

export function sortByProjectId(employeesData) {

  // get the pairs of employees that have worked together on a common project
  const employeePairs = getEmployeePairs(employeesData);

  let result = [];

  for (const signlePair of Object.values(employeePairs)) {
    if (signlePair.length < 2) { continue; }

    let pair = calculateDaysWorkedTogether(signlePair);

    result.push(pair)
  }

  //sort array to show the pair that have worked for most days together, at the top of the result table
  return result.sort((a, b) => b.duration - a.duration);
}
