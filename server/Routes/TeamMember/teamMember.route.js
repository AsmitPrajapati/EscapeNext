const express = require("express");
const router = express.Router();
const {
    addTeamMember,
    getTeamMembers,
} = require("../../controller/TeamMember/teamMember.controller");

router.post("/teamMember/add", addTeamMember);
router.get("/teamMember/get", getTeamMembers);

module.exports = router;