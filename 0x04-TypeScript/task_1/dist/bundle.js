/******/ (() => { // webpackBootstrap
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
var teacher3 = {
    firstName: "John",
    fullTimeEmployee: false,
    lastName: "Doe",
    location: "London",
    contract: false,
};
console.log(teacher3);
var director1 = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
var printTeacher = function (firstName, lastName) {
    return firstName.charAt(0) + ". " + lastName;
};
console.log(printTeacher("John", "Doe")); // Output: J. Doe
// Class implementation
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
// Example usage:
var student = new StudentClass("Alice", "Smith");
console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName()); // Output: Alice

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFTQSxJQUFNLFFBQVEsR0FBWTtJQUN4QixTQUFTLEVBQUUsTUFBTTtJQUNqQixnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLEtBQUs7Q0FDaEIsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFRdEIsSUFBTSxTQUFTLEdBQWM7SUFDM0IsU0FBUyxFQUFFLE1BQU07SUFDakIsUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLGVBQWUsRUFBRSxFQUFFO0NBQ3BCLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBT3ZCLElBQU0sWUFBWSxHQUF5QixVQUFDLFNBQVMsRUFBRSxRQUFRO0lBQzdELE9BQVUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBSyxRQUFVLENBQUM7QUFDL0MsQ0FBQyxDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUI7QUFlM0QsdUJBQXVCO0FBQ3ZCO0lBSUUsc0JBQVksU0FBaUIsRUFBRSxRQUFnQjtRQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQscUNBQWMsR0FBZDtRQUNFLE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQztBQUVELGlCQUFpQjtBQUNqQixJQUFNLE9BQU8sR0FBRyxJQUFJLFlBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLDRCQUE0QjtBQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUksZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBUZWFjaGVyIHtcclxuICByZWFkb25seSBmaXJzdE5hbWU6IHN0cmluZzsgLy8gb25seSBzZXQgYXQgaW5pdGlhbGl6YXRpb25cclxuICByZWFkb25seSBsYXN0TmFtZTogc3RyaW5nOyAvLyBvbmx5IHNldCBhdCBpbml0aWFsaXphdGlvblxyXG4gIGZ1bGxUaW1lRW1wbG95ZWU6IGJvb2xlYW47IC8vIGFsd2F5cyByZXF1aXJlZFxyXG4gIHllYXJzT2ZFeHBlcmllbmNlPzogbnVtYmVyOyAvLyBvcHRpb25hbFxyXG4gIGxvY2F0aW9uOiBzdHJpbmc7IC8vIGFsd2F5cyByZXF1aXJlZFxyXG4gIFtrZXk6IHN0cmluZ106IGFueTsgLy8gYWxsb3cgYW55IGV4dHJhIHByb3BlcnRpZXNcclxufVxyXG5cclxuY29uc3QgdGVhY2hlcjM6IFRlYWNoZXIgPSB7XHJcbiAgZmlyc3ROYW1lOiBcIkpvaG5cIixcclxuICBmdWxsVGltZUVtcGxveWVlOiBmYWxzZSxcclxuICBsYXN0TmFtZTogXCJEb2VcIixcclxuICBsb2NhdGlvbjogXCJMb25kb25cIixcclxuICBjb250cmFjdDogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zb2xlLmxvZyh0ZWFjaGVyMyk7XHJcblxyXG4vLyBEZWZpbmUgYSBuZXcgaW50ZXJmYWNlIERpcmVjdG9ycyB0aGF0IGV4dGVuZHMgVGVhY2hlclxyXG4vLyBhbmQgYWRkcyBhIG51bWJlck9mUmVwb3J0cyBwcm9wZXJ0eVxyXG5pbnRlcmZhY2UgRGlyZWN0b3JzIGV4dGVuZHMgVGVhY2hlciB7XHJcbiAgbnVtYmVyT2ZSZXBvcnRzOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IGRpcmVjdG9yMTogRGlyZWN0b3JzID0ge1xyXG4gIGZpcnN0TmFtZTogXCJKb2huXCIsXHJcbiAgbGFzdE5hbWU6IFwiRG9lXCIsXHJcbiAgbG9jYXRpb246IFwiTG9uZG9uXCIsXHJcbiAgZnVsbFRpbWVFbXBsb3llZTogdHJ1ZSxcclxuICBudW1iZXJPZlJlcG9ydHM6IDE3LFxyXG59O1xyXG5cclxuY29uc29sZS5sb2coZGlyZWN0b3IxKTtcclxuLy8gRGVmaW5lIGEgZnVuY3Rpb24gdHlwZSB0aGF0IHRha2VzIGZpcnN0TmFtZSBhbmQgbGFzdE5hbWUgYXMgcGFyYW1ldGVyc1xyXG4vLyBhbmQgcmV0dXJucyBhIHN0cmluZyBpbiB0aGUgZm9ybWF0IFwiRi4gTGFzdE5hbWVcIlxyXG5pbnRlcmZhY2UgcHJpbnRUZWFjaGVyRnVuY3Rpb24ge1xyXG4gIChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgcHJpbnRUZWFjaGVyOiBwcmludFRlYWNoZXJGdW5jdGlvbiA9IChmaXJzdE5hbWUsIGxhc3ROYW1lKSA9PiB7XHJcbiAgcmV0dXJuIGAke2ZpcnN0TmFtZS5jaGFyQXQoMCl9LiAke2xhc3ROYW1lfWA7XHJcbn07XHJcblxyXG5jb25zb2xlLmxvZyhwcmludFRlYWNoZXIoXCJKb2huXCIsIFwiRG9lXCIpKTsgLy8gT3V0cHV0OiBKLiBEb2VcclxuXHJcbi8vIEludGVyZmFjZSBmb3IgdGhlIGNvbnN0cnVjdG9yXHJcbmludGVyZmFjZSBTdHVkZW50Q29uc3RydWN0b3Ige1xyXG4gIG5ldyAoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBTdHVkZW50Q2xhc3NJbnRlcmZhY2U7XHJcbn1cclxuXHJcbi8vIEludGVyZmFjZSBmb3IgdGhlIGNsYXNzXHJcbmludGVyZmFjZSBTdHVkZW50Q2xhc3NJbnRlcmZhY2Uge1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgd29ya09uSG9tZXdvcmsoKTogc3RyaW5nO1xyXG4gIGRpc3BsYXlOYW1lKCk6IHN0cmluZztcclxufVxyXG5cclxuLy8gQ2xhc3MgaW1wbGVtZW50YXRpb25cclxuY2xhc3MgU3R1ZGVudENsYXNzIGltcGxlbWVudHMgU3R1ZGVudENsYXNzSW50ZXJmYWNlIHtcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XHJcbiAgICB0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWU7XHJcbiAgfVxyXG5cclxuICB3b3JrT25Ib21ld29yaygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIFwiQ3VycmVudGx5IHdvcmtpbmdcIjtcclxuICB9XHJcblxyXG4gIGRpc3BsYXlOYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5maXJzdE5hbWU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBFeGFtcGxlIHVzYWdlOlxyXG5jb25zdCBzdHVkZW50ID0gbmV3IFN0dWRlbnRDbGFzcyhcIkFsaWNlXCIsIFwiU21pdGhcIik7XHJcbmNvbnNvbGUubG9nKHN0dWRlbnQud29ya09uSG9tZXdvcmsoKSk7IC8vIE91dHB1dDogQ3VycmVudGx5IHdvcmtpbmdcclxuY29uc29sZS5sb2coc3R1ZGVudC5kaXNwbGF5TmFtZSgpKTsgICAgLy8gT3V0cHV0OiBBbGljZVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=