import { celebrate, Joi, Segments } from 'celebrate';

class schemaTasks {
  private insertSchema = {
    [Segments.BODY]: Joi.object({
      titulo: Joi.string().required(),
    }),
  };

  private updateSchema = {
    [Segments.BODY]: Joi.object({
      titulo: Joi.string().optional(),
      status: Joi.string().optional(),
      categoria: Joi.string().optional(),
    }),
    [Segments.PARAMS]: Joi.object({
      id: Joi.string().uuid().required(),
    }),
  };

  private deleteSchema = {
    [Segments.PARAMS]: Joi.object({
      id: Joi.string().uuid().required(),
    }),
  };

  private getByIdSchema = {
    [Segments.PARAMS]: Joi.object({
      id: Joi.string().uuid().required(),
    }),
  };

  private types = {
    insert: celebrate(this.insertSchema),
    update: celebrate(this.updateSchema),
    delete: celebrate(this.deleteSchema),
    getById: celebrate(this.getByIdSchema),
  };

  getValidator(type: 'insert' | 'update' | 'delete' | 'getById') {
    return this.types[type];
  }
}

export default new schemaTasks();
