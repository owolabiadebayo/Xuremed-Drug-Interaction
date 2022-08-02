

const  router = require("express").Router();
import {signup} from '../controller/signup'
import {login} from '../controller/signin';
import {dashboard, fetchDrug} from '../controller/dashboard';
import  {requiresignin} from '../middleware/index'

router.post("/login", login)
router.post("/signup",signup)
router.post("/dashboard",requiresignin,dashboard)
router.get("/dashboard/fetchdrug",fetchDrug)

module.exports = router;

