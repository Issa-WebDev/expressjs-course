const allStudent = (req, res) => {
  res.send("All student");
};

const createStudent = (req, res) => {
  res.send("Create student");
};

const updateStudent = (req, res) => {
  res.send("Update student");
};

const deleteStudent = (req, res) => {
  res.send("Delete student");
};

export { allStudent, createStudent, updateStudent, deleteStudent };
