import { NextApiHandler } from "next";
import data from "../../../lib/writers.json";

const writers: NextApiHandler = (req, res) => {
  const { id } = req.query;
  const writersData = data.find((e) => String(e.id) === String(id));

  if (writersData) {
    res.status(200).json(writersData);
  } else {
    res.status(404).end();
  }
};

export default writers;
