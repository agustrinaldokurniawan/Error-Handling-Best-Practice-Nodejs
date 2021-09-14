function UserError(name, httpCode, description, isOperational) {
  Error.call(this);
  Error.captureStackTrace(this);
  this.name = name;
  this.description = description;
  this.httpCode = httpCode;
  this.isOperational = isOperational;
}

UserError.prototype = Object.create(Error.prototype);
UserError.prototype.constructor = UserError;

module.exports.UserError = UserError;
