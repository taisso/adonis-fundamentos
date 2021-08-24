import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    const user = await User.all();

    if (user) {
      return response.notFound({ erros: { message: "Users not found" } });
    }

    return user;
  }

  public async store({ request }: HttpContextContract) {
    const body = request.only(['email', 'password'])

    const user = await User.create(body)

    return user
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
