import { useState } from "react";
import { parseCSVData } from './utils/parseCSVData';
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

    const handleOnSubmit = (e) => {
        e.preventDefault();

        // validates the type of the input file
        if (file && file.type === "text/csv") {
            fileReader.onload = function (event) {
                const text = event.target.result;
                parseCSVData(text, setEmployees);
            };

            fileReader.readAsText(file);
        } else {
            alert(`You are uploading unsupported file. Only CSV files are supported!`);
        }
    };

    //take the keys of the provided object and returns them in array
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