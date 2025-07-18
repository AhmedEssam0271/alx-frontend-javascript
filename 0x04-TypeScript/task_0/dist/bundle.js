/******/ (() => { // webpackBootstrap
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
// Step 2: Create two students
var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 21,
    location: "New York",
};
var student2 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles",
};
var student3 = {
    firstName: "Ahmed",
    lastName: "Essam",
    age: 30,
    location: "Egypt",
};
// Step 3: Store them in an array
var studentsList = [student1, student2, student3];
// Step 4: Render a table in the DOM using vanilla JavaScript
var table = document.createElement("table");
//  Add basic styling
table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";
// Add table header
var headerRow = table.insertRow();
var headers = ["First Name", "Location"];
headers.forEach(function (text) {
    var th = document.createElement("th");
    th.textContent = text;
    th.style.border = "1px solid black";
    th.style.padding = "8px";
    headerRow.appendChild(th);
});
// Add student rows
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var firstNameCell = row.insertCell();
    firstNameCell.textContent = student.firstName;
    firstNameCell.style.border = "1px solid black";
    firstNameCell.style.padding = "8px";
    var locationCell = row.insertCell();
    locationCell.textContent = student.location;
    locationCell.style.border = "1px solid black";
    locationCell.style.padding = "8px";
});
// Append the table to the document body
document.body.appendChild(table);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFRQSw4QkFBOEI7QUFDOUIsSUFBTSxRQUFRLEdBQVk7SUFDeEIsU0FBUyxFQUFFLE1BQU07SUFDakIsUUFBUSxFQUFFLEtBQUs7SUFDZixHQUFHLEVBQUUsRUFBRTtJQUNQLFFBQVEsRUFBRSxVQUFVO0NBQ3JCLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBWTtJQUN4QixTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsT0FBTztJQUNqQixHQUFHLEVBQUUsRUFBRTtJQUNQLFFBQVEsRUFBRSxhQUFhO0NBQ3hCLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBWTtJQUN4QixTQUFTLEVBQUUsT0FBTztJQUNsQixRQUFRLEVBQUUsT0FBTztJQUNqQixHQUFHLEVBQUUsRUFBRTtJQUNQLFFBQVEsRUFBRSxPQUFPO0NBQ2xCLENBQUM7QUFFRixpQ0FBaUM7QUFDakMsSUFBTSxZQUFZLEdBQWMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBRS9ELDZEQUE2RDtBQUM3RCxJQUFNLEtBQUssR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUVoRSxxQkFBcUI7QUFDckIsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLENBQUM7QUFDdkMsS0FBSyxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDO0FBRXhDLG1CQUFtQjtBQUNuQixJQUFNLFNBQVMsR0FBd0IsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ3pELElBQU0sT0FBTyxHQUFhLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3JELE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO0lBQ25CLElBQU0sRUFBRSxHQUF5QixRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlELEVBQUUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLGlCQUFpQixDQUFDO0lBQ3BDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN6QixTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQyxDQUFDO0FBRUgsbUJBQW1CO0FBQ25CLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO0lBQzNCLElBQU0sR0FBRyxHQUF3QixLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkQsSUFBTSxhQUFhLEdBQXlCLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM3RCxhQUFhLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7SUFDOUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLENBQUM7SUFDL0MsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBRXBDLElBQU0sWUFBWSxHQUF5QixHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUQsWUFBWSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQzVDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLGlCQUFpQixDQUFDO0lBQzlDLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztBQUNyQyxDQUFDLENBQUMsQ0FBQztBQUVILHdDQUF3QztBQUN4QyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTdGVwIDE6IERlZmluZSB0aGUgU3R1ZGVudCBpbnRlcmZhY2VcclxuaW50ZXJmYWNlIFN0dWRlbnQge1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgYWdlOiBudW1iZXI7XHJcbiAgbG9jYXRpb246IHN0cmluZztcclxufVxyXG5cclxuLy8gU3RlcCAyOiBDcmVhdGUgdHdvIHN0dWRlbnRzXHJcbmNvbnN0IHN0dWRlbnQxOiBTdHVkZW50ID0ge1xyXG4gIGZpcnN0TmFtZTogXCJKb2huXCIsXHJcbiAgbGFzdE5hbWU6IFwiRG9lXCIsXHJcbiAgYWdlOiAyMSxcclxuICBsb2NhdGlvbjogXCJOZXcgWW9ya1wiLFxyXG59O1xyXG5cclxuY29uc3Qgc3R1ZGVudDI6IFN0dWRlbnQgPSB7XHJcbiAgZmlyc3ROYW1lOiBcIkphbmVcIixcclxuICBsYXN0TmFtZTogXCJTbWl0aFwiLFxyXG4gIGFnZTogMjIsXHJcbiAgbG9jYXRpb246IFwiTG9zIEFuZ2VsZXNcIixcclxufTtcclxuXHJcbmNvbnN0IHN0dWRlbnQzOiBTdHVkZW50ID0ge1xyXG4gIGZpcnN0TmFtZTogXCJBaG1lZFwiLFxyXG4gIGxhc3ROYW1lOiBcIkVzc2FtXCIsXHJcbiAgYWdlOiAzMCxcclxuICBsb2NhdGlvbjogXCJFZ3lwdFwiLFxyXG59O1xyXG5cclxuLy8gU3RlcCAzOiBTdG9yZSB0aGVtIGluIGFuIGFycmF5XHJcbmNvbnN0IHN0dWRlbnRzTGlzdDogU3R1ZGVudFtdID0gW3N0dWRlbnQxLCBzdHVkZW50Miwgc3R1ZGVudDNdO1xyXG5cclxuLy8gU3RlcCA0OiBSZW5kZXIgYSB0YWJsZSBpbiB0aGUgRE9NIHVzaW5nIHZhbmlsbGEgSmF2YVNjcmlwdFxyXG5jb25zdCB0YWJsZTogSFRNTFRhYmxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuXHJcbi8vICBBZGQgYmFzaWMgc3R5bGluZ1xyXG50YWJsZS5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBibGFja1wiO1xyXG50YWJsZS5zdHlsZS5ib3JkZXJDb2xsYXBzZSA9IFwiY29sbGFwc2VcIjtcclxuXHJcbi8vIEFkZCB0YWJsZSBoZWFkZXJcclxuY29uc3QgaGVhZGVyUm93OiBIVE1MVGFibGVSb3dFbGVtZW50ID0gdGFibGUuaW5zZXJ0Um93KCk7XHJcbmNvbnN0IGhlYWRlcnM6IHN0cmluZ1tdID0gW1wiRmlyc3QgTmFtZVwiLCBcIkxvY2F0aW9uXCJdO1xyXG5oZWFkZXJzLmZvckVhY2goKHRleHQpID0+IHtcclxuICBjb25zdCB0aDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgdGgudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gIHRoLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIGJsYWNrXCI7XHJcbiAgdGguc3R5bGUucGFkZGluZyA9IFwiOHB4XCI7XHJcbiAgaGVhZGVyUm93LmFwcGVuZENoaWxkKHRoKTtcclxufSk7XHJcblxyXG4vLyBBZGQgc3R1ZGVudCByb3dzXHJcbnN0dWRlbnRzTGlzdC5mb3JFYWNoKChzdHVkZW50KSA9PiB7XHJcbiAgY29uc3Qgcm93OiBIVE1MVGFibGVSb3dFbGVtZW50ID0gdGFibGUuaW5zZXJ0Um93KCk7XHJcbiAgY29uc3QgZmlyc3ROYW1lQ2VsbDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gIGZpcnN0TmFtZUNlbGwudGV4dENvbnRlbnQgPSBzdHVkZW50LmZpcnN0TmFtZTtcclxuICBmaXJzdE5hbWVDZWxsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIGJsYWNrXCI7XHJcbiAgZmlyc3ROYW1lQ2VsbC5zdHlsZS5wYWRkaW5nID0gXCI4cHhcIjtcclxuXHJcbiAgY29uc3QgbG9jYXRpb25DZWxsOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgbG9jYXRpb25DZWxsLnRleHRDb250ZW50ID0gc3R1ZGVudC5sb2NhdGlvbjtcclxuICBsb2NhdGlvbkNlbGwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgYmxhY2tcIjtcclxuICBsb2NhdGlvbkNlbGwuc3R5bGUucGFkZGluZyA9IFwiOHB4XCI7XHJcbn0pO1xyXG5cclxuLy8gQXBwZW5kIHRoZSB0YWJsZSB0byB0aGUgZG9jdW1lbnQgYm9keVxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRhYmxlKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9