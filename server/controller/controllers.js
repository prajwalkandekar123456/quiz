/** Get all questions */
import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from "../database/data.js";
export async function getQuestions(req, res) {
  try {
    const q = await Questions.find();
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}

/** Insert all questions */
export async function insertQuestions(req, res) {
  try {
    Questions.insertMany(
      {
        questions,
        answers,
      },
      function (err, data) {
        res.json({ msg: "Data Saved Successfully...!" });
      }
    );
  } catch (error) {
    res.json(error);
  }
}

/** Delete all Questions */
export async function dropQuestions(req, res) {
  try {
    await Questions.deleteMany();
    res.json({ msg: "Questions deleted successfully" });
  } catch (error) {
    res.json({ error });
  }
}

/** Get all results */

export async function getResult(req, res) {
  try {
    const r = await Results.find();
    res.json(r);
  } catch (error) {
    res.json({ error });
  }
}
/** Post all results */

export async function storeResult(req, res) {
  try {
    const { username, result, attempts, points, achieved } = req.body;
    if (!username && !result) throw new Error("Data not Provided..!");

    Results.create(
      { username, result, attempts, points, achieved },
      function (err, data) {
        res.json({ msg: "Result Saved Succcessfully...!" });
      }
    );
  } catch (error) {
    res.json({ error });
  }
}

/** Delete all the results */

export async function dropResult(req, res) {
  try {
    await Results.deleteMany();
    res.json({ msg: "Result Deleted Successfully..!" });
  } catch (error) {
    res.json({ error });
  }
}
