import Joi from 'joi';

const userValidationSchema = Joi.object({
    name: Joi.string().required().trim(),
    email: Joi.string().email().required().trim(),
    password: Joi.string().required().min(6).trim(), // Minimum length for passwords
});

// Function to validate user data
export const validateUser = (userData) => {
    return userValidationSchema.validate(userData);
};
