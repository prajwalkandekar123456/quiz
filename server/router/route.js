import { Router } from "express";
const router = Router();

/** Import controllers */
import * as controller from "../controller/controllers.js";
/** Questions Routes */
router
  .route("/questions")
  .get(controller.getQuestions) /** Get request */
  .post(controller.insertQuestions) /** Post request */
  .delete(controller.dropQuestions); /** Delete request */

router
  .route("/result")
  .get(controller.getResult)
  .post(controller.storeResult)
  .delete(controller.dropResult);
export default router;
