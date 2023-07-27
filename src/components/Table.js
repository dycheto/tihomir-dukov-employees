import { v4 } from 'uuid';
import {formatDate} from '../utils/formatDate';

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
                    {employeesData.map((item) => (
                        <tr key={v4()}>
                            {Object.values(item).map((val) => {
                                if (val === "null") {
                                    val = formatDate();
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