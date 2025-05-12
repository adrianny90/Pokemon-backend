import ErrorResponse from "../utils/ErrorResponse.js";

export const validateSchema = (joiSchema) => (req, res, next) => {
  const { error } = joiSchema.validate(req.body);

  if (error) throw new ErrorResponse("Invalid body", 400);

  next();
};
