const pool = require("../../db");
const queries = require("./queries");

const getStudents = (req, res) => {
  pool.query(queries.getStudents, (error, results) => {
    if (error) throw error;

    res.status(200).json(results.rows);
  });
};

const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;

  // Check if email exists
  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (results.rows.length) res.send("User With Same Email Already Exists");
    else {
      pool.query(
        queries.addStudent,
        [name, email, age, dob],
        (error, results) => {
          if (error) throw error;
          else res.status(201).send("Student Has Been Created Successfully");
        }
      );
    }
  });
};

const deleteStudent = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getStudentByID, [id], (error, results) => {
    if (!results.rows.length)
      res.send("No Student Found With Given ID.Nothing To Delete");
    else {
      pool.query(queries.deleteStudent, [id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Student Removed Successfully");
      });
    }
  });
};

const updateStudent = (req, res) => {
  const id = parseInt(req.params.id);

  const { name } = req.body;

  pool.query(queries.getStudentByID, [id], (error, results) => {
    if (!results.rows.length)
      res.send("No Student Found With Given Id. Nothing To Update");
    else {
      pool.query(queries.updateStudent, [name, id], (error, results) => {
        if (error) throw error;

        res.status(200).send("Student Updated Successfully");
      });
    }
  });
};

const getStudentByID = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentByID, [id], (error, results) => {
    if (error) throw error;

    res.status(200).json(results.rows);
  });
};

module.exports = {
  getStudents,
  getStudentByID,
  addStudent,
  deleteStudent,
  updateStudent,
};
