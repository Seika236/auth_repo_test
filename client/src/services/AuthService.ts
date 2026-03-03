import type { RegistrationType } from "../types/AuthRequestType.tsx";
import axios from "axios";

export class AuthService {
  static async registration(data: RegistrationType) {
    await axios.post("http://localhost:3000/auth", data);
  }
}

export default AuthService;
