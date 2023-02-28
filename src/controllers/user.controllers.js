
const userSchema = require("../models/user");






exports.add_one = async (req, res) => {
  try {
    const user = userSchema(req.body);
    await user
      .save()
      .then((data) => res.status(200).json(data))
      .catch((error) => res.status(404).json({ message: "User not added" }));
    return;

  } catch (error) {
    //500 server error
    res.status(500).json({ message: error.message });
  }
};



exports.getall = async (req, res) => {
  try {
    await userSchema
      .find()
      .then((data) => res.status(200).json(data))
      .catch((error) => res.status(404).json({ message: "Users not found" }));
    return;

  } catch (error) {
    //500 server error
    res.status(500).json({ message: error.message });
  }
};



exports.getSingle = async (req, res) => {
  try {
    const { id } = req.params;
    await userSchema
      .findById(id)
      .then((data) => res.status(200).json(data))
      .catch((error) => res.status(404).json({ message: "User not found" }));

    return;

  } catch (error) {
    //500 server error
    res.status(500).json({ message: error.message });
  }
};





exports.delete_one = async (req, res) => {
  try {
    const { id } = req.params;
    await userSchema
      .remove({ _id: id })
      .then((data) => res.status(200).json(data))
      .catch((error) => res.status(404).json({ message: "User not deleted" }));

    return;

  } catch (error) {
    //500 server error
    res.status(500).json({ message: error.message });
  }
};





exports.update_one = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, email } = req.body;
    userSchema
      .updateOne({ _id: id }, { $set: { name, age, email } })
      .then((data) => res.status(200).json(data))
      .catch((error) => res.status(404).json({ message: "User not updated" }));

    return;

  } catch (error) {
    //500 server error
    res.status(500).json({ message: error.message });
  }
};


