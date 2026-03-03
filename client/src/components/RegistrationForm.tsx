import { type SubmitHandler, useForm } from "react-hook-form";
import { LoginFormShema } from "../shemas/RegistrationFormShema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import AuthService from "../services/AuthService.ts";
import { UseRequest } from "../hooks/UseRequest.tsx";
import type { RegistrationType } from "../types/AuthRequestType.tsx";
import { MyButton } from "../ui/MyButton.tsx";

type Props = {
  setAuth: () => void;
};

export function RegistrationForm({ setAuth }: Props) {
  const [isNext, setIsNext] = useState<boolean>(false);
  const [isAccess, setIsAccess] = useState<boolean>(false);
  const {
    register,
    handleSubmit: loginFormSubmitHandler,
    formState: { errors },
  } = useForm<LoginFormShema>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(LoginFormShema),
  });

  const { isLoading, fetchFunction } = UseRequest<void, RegistrationType>({
    request: AuthService.registration,
    successCb: () => {
      setAuth();
    },
  });

  const onNextRegisterHandler = () => {
    if (errors?.email?.message) {
      return;
    }

    setIsNext(true);
  };

  const setChekBoxHandler = (value: boolean) => {
    setIsAccess(value);
  };

  const onSubmit: SubmitHandler<LoginFormShema> = (data) => {
    fetchFunction(data);
  };

  return isLoading ? (
    <span>Loading...</span>
  ) : (
    <div className="relative w-full flex  items-start text-start justify-center overflow-hidden ">
      <div className="relative w-full max-w-[600px] bg-white/70 backdrop-blur-sm rounded-[48px] p-10 shadow-xl border border-white/50 m-4">
        <h1 className="text-4xl font-bold text-center text-[#2D2D2D] mb-8">
          Регистрация
        </h1>

        <form className="space-y-6" onSubmit={loginFormSubmitHandler(onSubmit)}>
          {isNext ? (
            <div className="space-y-2">
              <label className="block text-sm text-gray-500 ml-1">login</label>
              <input
                {...register("login")}
                type="text"
                key="login-input"
                placeholder="Введи login"
                className="w-full px-5 py-4 bg-gray-100/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-gray-400"
              />
              <div className="text-red-600">{errors?.login?.message}</div>
              <div className="space-y-2">
                <label className="block text-sm text-gray-500 ml-1">
                  password
                </label>
                <input
                  {...register("password")}
                  type="text"
                  key="password-input"
                  placeholder="Введи password"
                  className="w-full px-5 py-4 bg-gray-100/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-gray-400"
                />
                <div className="text-red-600">{errors?.password?.message}</div>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <label className="block text-sm text-gray-500 ml-1">
                Корпоративный e-mail
              </label>
              <input
                {...register("email")}
                type="email"
                key="email-input"
                placeholder="Введи почту"
                className="w-full px-5 py-4 bg-gray-100/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-gray-400"
              />
              <div className="text-red-600">{errors?.email?.message}</div>
            </div>
          )}

          <div className="flex items-center gap-3 px-1">
            <input
              onChange={(event) => setChekBoxHandler(event?.target?.checked)}
              checked={isAccess}
              type="checkbox"
              id="privacy"
              className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              defaultChecked
            />
            <label
              htmlFor="privacy"
              className="text-sm text-[#4A55A2] leading-tight"
            >
              Я подтверждаю согласие с
              <a href="#" className="text-blue-600 hover:underline">
                политикой конфиденциальности
              </a>
            </label>
          </div>

          <div className="space-y-3 pt-4">
            {isNext ? (
              <MyButton variant={"gray"}>войти</MyButton>
            ) : (
              <MyButton variant={"blue"} onClick={onNextRegisterHandler}>
                продолжить
              </MyButton>
            )}
          </div>
        </form>

        <div className="mt-8 text-center space-y-1">
          <p className="text-sm text-gray-600">
            Возник вопрос или что-то сломалось?
          </p>
          <a
            href="#"
            className="text-sm text-blue-600 font-medium hover:underline block"
          >
            Вступай в чат и задавай вопрос
          </a>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
