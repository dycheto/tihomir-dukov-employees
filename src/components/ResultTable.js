import { sortByProjectId } from '../utils/sortByProjectId';
import { v4 } from 'uuid';

const ResultTable = ({ employeesData }) => {

    const employeesPairs = sortByProjectId(employeesData);

    let employee1ID = "";
    let employee2ID = "";
    let projectID = "";
    let daysWorked = "";

    if (employeesPairs.length === 0) {
        return (
            <div className="no-emploees">
                <h1>There are no employees that have worked together on a common project!</h1>
            </div>
        )
    }

    return (
        <div className='table-container'>
            <h2 >Employee ID #{employee1ID} and Employee ID #{employee2ID} worked together for the most days.</h2>
            <table className='table'>
                <thead>
                    <tr className='header'>
                        <th>Employee ID #1</th>
                        <th>Employee ID #2</th>
                        <th>Project ID</th>
                        <th>Days Worked</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employeesPairs.map(pair => (
                            <tr key={v4()}>
                                <td>{pair.firstEmployeeId}</td>
                                <td>{pair.secondEmployeeId}</td>
                                <td>{pair.projectId}</td>
                                <td>{pair.duration}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ResultTable;
