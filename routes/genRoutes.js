const express = require("express");
const router = express.Router();
const genController = require("../controllers/genController");

router.get("/listar-gen", genController.getAllGen);
router.get("/gen/:id", genController.getGenById);
router.post("/agregar-gen", genController.createGen);
router.put("/modificar-gen/:id", genController.updateGen);
router.delete("/borrar-gen/:id", genController.deleteGen);

module.exports = router;
