const getStudents = "SELECT * FROM students";
const getStudentByID = "SELECT * FROM students WHERE id= $1";
const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1";
const deleteStudent = "DELETE FROM students WHERE id =$1";
const addStudent =
  "INSERT INTO students  (name,email,age,dob) VALUES($1,$2,$3,$4)";

const updateStudent = "UPDATE students SET name=$1 where id=$2";

module.exports = {
  getStudents,
  getStudentByID,
  checkEmailExists,
  addStudent,
  deleteStudent,
  updateStudent,
};
