import { NextApiHandler } from "next";
import data from "../../../lib/data.json";

const employee: NextApiHandler = (req, res) => {
  const { id } = req.query;
  const employeeData = data.find(e=> String(e.id) === String(id));

  if (employeeData) {
    res.status(200).json(employeeData);
  } else {
    res.status(404).end();
  }
};

export default employee;