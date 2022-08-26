import { Joi, Segments } from "celebrate";

class UserValidation {

    public createUserIsValid() {
        return ({
            [Segments.BODY]: {
                name: Joi.string().required(),
                email: Joi.string().email().required(),
                password: Joi.string().required()
            }
        });
    }

    public createSessionIsValid() {
        return ({
            [Segments.BODY]: {
                email: Joi.string().required(),
                password: Joi.string().required(),
            }
        });
    }
}

export const userBody = new UserValidation();