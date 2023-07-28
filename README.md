# Title and Project Description

The project title is Employees.
This project is made for the intern position at Sirma Solutions.
It is a simple app, that can load CSV files from the local system, and then display the
data in tables, one of which is sorted by the criteria of most days that the employees have
worked together on a common project.

# Istallation

### `npm install`

All dependencies will be installed.

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

# Usage

After the initial load of the page, there will be 2 buttons on the screen.
The first one is "Choose file", when clicking on it, the user can choose a file from
the local system. The file should be a CSV file. If the user uploads a different file type,
an alert will appear on the screen with warning text.
All types of JavaScript Date input formats are supported.
After the user chooses the file, he has to click on the "IMPORT CSV" button. After clicking it
the two tables components will be loaded on the screen. The first one will show all the
raw data, and the second one will show the pair of employees that have worked together on
a common project for the longest time.
If the user tries to access an invalid route, there is a Not Found Page displayed.
