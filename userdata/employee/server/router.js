import { Router } from "express";
// import auth from "./middleware/auth.js"


import * as rh from "./request-handler.js";


const router = Router()

router.route("/register").post(rh.register);
// router.route("/login").post(rh.login);
// router.route("/get-all").get(rh.getAll);
router.route("/get-employee/:id").get(rh.getEmployee);
router.route("/emp-list").get(rh.EmpList)
router.route("/update/:id").put(rh.update)
router.route("/delete/:id").delete(rh.Delete)

export default router;