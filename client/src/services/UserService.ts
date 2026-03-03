import axios from "axios";
import type { IUser } from "../types/Models/IUser.ts";

export class UserService {
  static async getAllUsers() {
    const result = await axios.get<IUser[]>("http://localhost:3000/users");
    return result.data;
  }
}

export default UserService;
