const express = require("express");
const router = express.Router();
const { VehicleImage } = require("../../db/models");
const {
  setTokenCookie,
  restoreUser,
  requireAuth,
} = require("../../utils/auth");

//Delete a SpotImage
router.delete("/:imageId", restoreUser, requireAuth, async (req, res) => {
  const image = await VehicleImage.findByPk(req.params.imageId);
  if (!image) {
    res.status(404);
    return res.json({
      message: "Vehicle Image couldn't be found",
      statusCode: 404,
    });
  }

  await image.destroy();
  res.status(200);
  return res.json({
    message: "Successfully deleted",
    statusCode: 200,
  });
});

module.exports = router;
