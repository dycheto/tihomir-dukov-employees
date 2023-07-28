import { v4 } from 'uuid';
import {setTodaysDate} from '../utils/setTodaysDate';

export default function Table({
    headerKeys,
    employeesData
}) {
    return (
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr key="header">
                        {headerKeys.map((key) => (
                            <th key={v4()}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {employeesData.map((employee) => (
                        <tr key={v4()}>
                            {Object.values(employee).map((val) => {
                                if (val === "null") {
                                    val = setTodaysDate();
                                }
                                return <td key={v4()}>{val}</td>
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};