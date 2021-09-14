const { UserError } = require("./user.error");

class UserController {
  static async getUsers(req, res, next) {
    try {
      const { query } = req;

      if (!query.name) {
        throw new UserError("Requirement Value", 400, "Need a name", true);
      }

      return res.json({ name: query.name });
    } catch (error) {
      return res.status(error.httpCode || 500).json(error);
    }
  }
}

module.exports = UserController;
