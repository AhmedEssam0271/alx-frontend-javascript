// Step 1: Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Step 2: Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

const student3: Student = {
  firstName: "Ahmed",
  lastName: "Essam",
  age: 30,
  location: "Egypt",
};

// Step 3: Store them in an array
const studentsList: Student[] = [student1, student2, student3];

// Step 4: Render a table in the DOM using vanilla JavaScript
const table: HTMLTableElement = document.createElement("table");

//  Add basic styling
table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";

// Add table header
const headerRow: HTMLTableRowElement = table.insertRow();
const headers: string[] = ["First Name", "Location"];
headers.forEach((text) => {
  const th: HTMLTableCellElement = document.createElement("th");
  th.textContent = text;
  th.style.border = "1px solid black";
  th.style.padding = "8px";
  headerRow.appendChild(th);
});

// Add student rows
studentsList.forEach((student) => {
  const row: HTMLTableRowElement = table.insertRow();
  const firstNameCell: HTMLTableCellElement = row.insertCell();
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.border = "1px solid black";
  firstNameCell.style.padding = "8px";

  const locationCell: HTMLTableCellElement = row.insertCell();
  locationCell.textContent = student.location;
  locationCell.style.border = "1px solid black";
  locationCell.style.padding = "8px";
});

// Append the table to the document body
document.body.appendChild(table);
