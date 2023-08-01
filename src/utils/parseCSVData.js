/*
I am using papaparse library to help me parse the CSV data.
The method takes two props, CSV as string and setEmployees function
*/

import Papa from 'papaparse';

export function parseCSVData(csvString, setEmployees) {
    Papa.parse(csvString, {
        header: true,
        complete: (results) => {
            //removes unwanted bug element in the array
            results.data.pop();
            setEmployees(results.data);
        },
        error: (error) => {
            console.error('Error parsing CSV:', error);
        },
    });
};