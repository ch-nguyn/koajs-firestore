import yup from "yup";

export const checkCreateInput = async (ctx, next) => {
  try {
    const { body } = ctx.req;
    let schema = yup.object().shape({
      text: yup.string().required().trim(),
    });

    await schema.validate(body);
    next();
  } catch (e) {
    ctx.status = 400;
    ctx.body = {
      success: false,
      errors: e.errors,
      errorName: e.name,
    };
  }
};
//# sourceMappingURL=checkInputTodo.js.map
