const students = [];
const studentTable = document.getElementById("studentTable");
const addStudentBtn = document.getElementById("addStudentBtn");
const noDataMessage = document.getElementById("noDataMessage");

function calculateGrade(marks) {
  if (marks >= 90) return "A";
  if (marks >= 75) return "B";
  if (marks >= 50) return "C";
  return "F";
}

function renderTable(data = students) {
  studentTable.innerHTML = ""; // Clear existing rows
  noDataMessage.classList.toggle("hidden", data.length > 0);

  data.forEach((student, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="px-4 py-2 border">${index + 1}</td>
      <td class="px-4 py-2 border">${student.name}</td>
      <td class="px-4 py-2 border">${student.marks}</td>
      <td class="px-4 py-2 border">${student.grade}</td>
      <td class="px-4 py-2 border">
        <button 
          class="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition"
          onclick="deleteStudent(${index})"
        >
          Delete
        </button>
      </td>
    `;
    studentTable.appendChild(row);
  });
}

function validateForm(name, marks) {
  const errors = [];

  // Check for empty name
  if (!name) errors.push("Name cannot be empty.");

  // Check for invalid marks
  if (isNaN(marks)) {
    errors.push("Marks must be a valid number.");
  } else if (marks < 0 || marks > 100) {
    errors.push("Marks must be between 0 and 100.");
  }

  return errors;
}

function displayErrors(errors) {
  const errorContainer = document.getElementById("errorContainer");
  errorContainer.innerHTML = ""; // Clear old errors
  errorContainer.classList.remove("hidden");

  errors.forEach((error) => {
    const errorItem = document.createElement("p");
    errorItem.className = "text-red-500 text-sm";
    errorItem.textContent = `• ${error}`;
    errorContainer.appendChild(errorItem);
  });
}

function addStudent() {
  const name = document.getElementById("studentName").value.trim();
  const marks = parseInt(document.getElementById("studentMarks").value, 10);

  const errors = validateForm(name, marks);

  if (errors.length > 0) {
    displayErrors(errors);
    return;
  }

  // Hide error container on successful validation
  document.getElementById("errorContainer").classList.add("hidden");

  const grade = calculateGrade(marks);
  students.push({ name, marks, grade });
  renderTable();
  document.getElementById("studentName").value = "";
  document.getElementById("studentMarks").value = "";
}

function deleteStudent(index) {
  students.splice(index, 1);
  renderTable();
}

function sortStudentsByMarks() {
  students.sort((a, b) => b.marks - a.marks);
  renderTable();
}

function filterStudents(status) {
  const filteredStudents = students.filter((student) =>
    status === "pass" ? student.marks >= 50 : student.marks < 50
  );
  renderTable(filteredStudents);
}

addStudentBtn.addEventListener("click", addStudent);
