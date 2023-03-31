import db from "../models/index";

export const getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("home.view.ejs", {
      data: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};
