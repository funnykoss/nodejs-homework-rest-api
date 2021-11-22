const { User } = require("../../models");
const fs = require("fs/promises");
const path = require("path");
const { NotFound } = require("http-errors");
const userDir = path.join(__dirname, "../../", "public/avatars");
const Jimp = require("jimp");

const updateAvatar = async (req, res) => {
  const { id } = req.params;
  const { path: tempUpload, originalname } = req.file;

  try {
    const filename = `${id}_${date}_${originalname}`;
    const resultUpload = path.join(productsDir, id, filename);
    await fs.rename(tempUpload, resultUpload);
    const avatar = path.join("/avatars", id, filename);

    await Jimp.read(resultUpload)
      .then((avatar) => {
        return avatar.resize(250, 250).write(resultUpload);
      })
      .catch((err) => {
        throw new Error(err.message);
      });

    const result = await User.findByIdAndUpdate(
      id,
      { avatarURL: avatar },
      { new: true },
    );
    if (!result) {
      throw NotFound(`Product with id=${id} not found`);
    }

    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    await fs.unlink(tmpDir);
  }
};

module.exports = updateAvatar;
