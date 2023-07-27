import { useState } from "react";
import Papa from 'papaparse';
import Table from "./components/Table";
import ImputForm from "./components/ImputForm";
import ResultTable from "./components/ResultTable";

export default function Main() {

    const [file, setFile] = useState(null);
    const [employees, setEmployees] = useState([]);

    const fileReader = new FileReader();

    const handleOnChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
    };

    const parseCSVData = (csvString) => {
        Papa.parse(csvString, {
            header: true,
            complete: (results) => {
                setEmployees(results.data);
            },
            error: (error) => {
                console.error('Error parsing CSV:', error);
            },
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (file) {
            fileReader.onload = function (event) {
                const text = event.target.result;
                parseCSVData(text);
            };

            fileReader.readAsText(file);
        }
    };

    const headerKeys = Object.keys(Object.assign({}, ...employees));

    return (
        <>
            <ImputForm
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
            />

            {employees.length > 0 &&
                <>
                    <Table
                        headerKeys={headerKeys}
                        employeesData={employees}
                    />
                    <ResultTable
                        employeesData={employees}
                    />
                </>
            }
        </>
    );
};