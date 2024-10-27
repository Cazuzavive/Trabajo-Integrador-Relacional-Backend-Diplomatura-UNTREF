const express = require("express");
const router = express.Router();
const posterController = require("../controllers/posterController");

router.get("/listar-poster", posterController.getAllPosters);
router.get("/poster/:id", posterController.getPosterById);
router.post("/agregar-poster", posterController.createPoster);
router.put("/modificar-poster/:id", posterController.updatePoster);
router.delete("/borrar-poster/:id", posterController.deletePoster);

module.exports = router;
