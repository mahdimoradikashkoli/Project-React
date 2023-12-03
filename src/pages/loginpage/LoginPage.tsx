import { useForm } from "react-hook-form";
import { Button, Textfield } from "../../components";
import email from "/svg/email.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    const navigate=useNavigate()

    const loginSchema=Yup.object({
        email:Yup.string().email("inter a valid email").required("email is required"),
        phonenumber:Yup.number().required("phone number is required"),
        password:Yup.string().required("password is required").min(5)
    })
  const { register, handleSubmit,formState:{errors} } = useForm({
    resolver:yupResolver(loginSchema)
  });

  const handleLogin = handleSubmit((Data) => {
    const phoneNumber = Data.phonenumber;
        const phoneNumberToString = phoneNumber.toString();
        if (phoneNumberToString.length < 10 || phoneNumberToString.length > 10)
          return alert("The length of the phone number must be 11");

    const getUsers=localStorage.getItem("users")
    const parseGetUsers=getUsers?JSON.parse(getUsers):null
    const existUser=parseGetUsers.find((user:typeof Data)=> user.email === Data.email && user.phonenumber === Data.phonenumber && user.password === Data.password)
    if(existUser){
        navigate("/")
    }else{
        return alert("user is not exist")
    }
  });

  return (
    <>
      <div className="fixed top-2">
        <h2 className="text-white">Login Page</h2>
      </div>
      <div className="w-2/3 fixed top-8 h-96 px-2 py-1 bg-purple-800 rounded-lg mt-2 overflow-y-auto">
        <form className="flex flex-col gap-3" onSubmit={handleLogin}>
          <Textfield
            validation={register("email")}
            label="inter your email"
            placeholder="Example:Mahdi@gmail.com"
            icon={email}
            helpertext={<>{errors.email?.message}</>}
          />
          <Textfield
            validation={register("phonenumber")}
            label="inter your phone number"
            placeholder="Example:09176578675"
            helpertext={<>{errors.phonenumber?.message}</>}
          />
          <Textfield
            validation={register("password")}
            label="inter your password"
            type="password"
            helpertext={<>{errors.password?.message}</>}
          />
          <Button className="my-2" variant="outline" children="Login" />
        </form>
      </div>
    </>
  );
};
export default LoginPage;
