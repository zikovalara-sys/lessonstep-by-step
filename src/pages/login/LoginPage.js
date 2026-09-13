import {useForm} from "react-hook-form";
import {loginSchema} from "./validation";
import {zodResolver} from "@hookform/resolvers/zod";

const defaultValues={
    email: "",
    password: ""
}

const LoginPage = () => {
    const{
        register,
        handleSubmit,
        formState: { errors },
    }=useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: defaultValues,
    })

    const onMySubmit = (data) => {
        console.log("Дані форми входу",data);
    }

    return (
        <>
            <h1 className={"text-center"}>Вхід на сайт</h1>
            <form className={"col-md-6 offset-md-3"} onSubmit={handleSubmit(onMySubmit)}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Електронна пошта</label>
                    <input type="email"
                           className="form-control"
                           id="exampleInputEmail1"
                           {...register("email")}
                           aria-describedby="emailHelp"/>
                    {errors.email && <span className={"text-danger"}>{errors.email.message}</span>}
                </div>
                <div className="mb-3">
                <label htmlFor="password" className="form-label">Пароль</label>
                <input type="password"
                       className="form-control"
                       id="exampleInputEmail1"
                       {...register("password")}
                       aria-describedby="emailHelp"/>
                    {errors.password && <span className={"text-danger"}>{errors.password.message}</span>}

            </div>
                <input type={"submit"} className={"btn btn-danger"} value={"Вхід"}/>
            </form>

        </>
    )
}
export default LoginPage