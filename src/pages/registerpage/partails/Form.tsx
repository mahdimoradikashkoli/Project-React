import { useForm } from "react-hook-form";
import { Button, Textfield } from "../../../components"
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import email from "/svg/email.svg"
import React from "react";


export const Form:React.FC=()=>{

    const registerSchema = Yup.object({
        name: Yup.string().required("name is required"),
        email: Yup.string()
          .required("email is required")
          .email("inter a valid email"),
        phonenumber: Yup.number().required("phone number is required"),
        password: Yup.string().min(5).required("password is required"),
        repaetpassword: Yup.string().min(5).required("repaetpassword is required"),
      });
      
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(registerSchema),
      });
    
      const handleCreateContact = handleSubmit((Data) => {
        const phoneNumber = Data.phonenumber;
        const phoneNumberToString = phoneNumber.toString();
        if (phoneNumberToString.length < 10 || phoneNumberToString.length > 10)
          return alert("The length of the phone number must be 11");
    
        const getUsers = localStorage.getItem("users");
        const parseGetUsers = getUsers ? JSON.parse(getUsers) : null;
    
        if (parseGetUsers) {
          const existUser1 = parseGetUsers.find(
            (user: typeof Data) => user.email === Data.email
          );
          if (existUser1) return alert("This user already exists");
          const existUser2 = parseGetUsers.find(
            (user: typeof Data) => user.phonenumber === Data.phonenumber
          );
          if (existUser2) return alert("This Phone Number already exists");
    
          if (Data.password !== Data.repaetpassword)
            return alert("The password is not the same as repeating the password");
    
          parseGetUsers.push(Data);
          const jsonNewUser = JSON.stringify(parseGetUsers);
    
          localStorage.setItem("users", jsonNewUser);
        } else {
          const isonData = JSON.stringify([Data]);
          localStorage.setItem("users", isonData);
        }
      });

    return (
        <form
          onSubmit={handleCreateContact}
          className="flex flex-col gap-2"
          action=""
        >
          <Textfield
            label="inter your Name"
            placeholder="Example:Mahdi"
            helpertext={<>{errors.name?.message}</>}
            validation={register("name")}
          />
          <Textfield
            label="inter your email"
            icon={email}
            placeholder="Example:Mahdi@gmail.com"
            helpertext={<>{errors.email?.message}</>}
            validation={register("email")}
          />

          <Textfield
            label="inter your PhoneNumber"
            type="number"
            placeholder="Example:+989174530840"
            helpertext={<>{errors.phonenumber?.message}</>}
            validation={register("phonenumber")}
          />

          <Textfield
            type="password"
            label="inter your password"
            helpertext={<>{errors.password?.message}</>}
            validation={register("password")}
          />
          <Textfield
            type="password"
            label="Repaet password"
            helpertext={<>{errors.repaetpassword?.message}</>}
            validation={register("repaetpassword")}
          />
          <Button className="my-2" variant="contained" children="Submit" />
        </form>
    )
}