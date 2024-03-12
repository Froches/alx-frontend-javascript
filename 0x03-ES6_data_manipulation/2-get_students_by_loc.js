// Returns an array of objects located in a specific location
//
export default function getStudentsByLocation(arrOfObj, city) {
  const filteredStudents = arrOfObj.filter((student) => student.city === city);
  return filteredStudents;
}
