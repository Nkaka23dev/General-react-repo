import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Forms() {
  const schema = yup.object().shape({
    fullName: yup.string().required("Your Full Name is required!"),
    email: yup.string("").email("Invalid Email").required(),
    age: yup.number("Only numbers are allowed").positive("Only numbers are allowed").required("Age is required").integer("Only numbers are allowed").min(18),
    password: yup.string().required("Password is required").min(4).max(20),
    comfirmPassword: yup.string().oneOf([yup.ref("password"), null],"Password don't match"),
  });
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("DATA SUBMITED SUCCESSFULL");
    console.log(data);
  };
  return (
    <section>
      <div className="max-w-3xl mx-auto py-10 space-y-5">
        <h1 className="text-3xl font-semibold">React Form</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-3 ">
            <label className="text-xl font-semibold" htmlFor="useraname">
              Full Name
            </label>
            <input
              type="text"
              {...register("fullName")}
              placeholder="Enter your name...."
              className="w-full py-3 px-5 border border-gray-500 focus:outline-0"
            />
            <p className="text-xl font-semibold text-red-500">{errors.fullName?.message}</p>
          </div>
          {/* Email */}
          <div className="space-y-3 ">
            <label className="text-xl font-semibold" htmlFor="useraname">
              Email
            </label>
            <input
              {...register("email")}
              type="text"
              placeholder="Enter your Email...."
              className="w-full py-3 px-5 border border-gray-500 focus:outline-0"
            />
            <p className="text-xl font-semibold text-red-500">{errors.email?.message}</p>
          </div>
          {/* Age */}
          <div className="space-y-3 ">
            <label className="text-xl font-semibold" htmlFor="useraname">
              Your Age
            </label>
            <input
              {...register("age")}
              type="number"
              placeholder="Enter your name...."
              className="w-full py-3 px-5 border border-gray-500 focus:outline-0"
            />
            <p className="text-xl font-semibold text-red-500">{errors.age?.message}</p>
          </div>
          {/* Password */}
          <div className="space-y-3 ">
            <label className="text-xl font-semibold" htmlFor="useraname">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="Enter your Password...."
              className="w-full py-3 px-5 border border-gray-500 focus:outline-0"
            />
              <p className="text-xl font-semibold text-red-500">{errors.password?.message}</p>
          </div>
          {/* Comfirm password */}
          <div className="space-y-3 ">
            <label className="text-xl font-semibold" htmlFor="useraname">
              Comfirm Password
            </label>
            <input
              {...register("comfirmPassword")}
              type="password"
              placeholder="Comfirm your password...."
              className="w-full py-3 px-5 border border-gray-500 focus:outline-0"
            />
              <p className="text-xl font-semibold text-red-500">{errors.comfirmPassword?.message}</p>
          </div>
          {/* button */}
          <button className="text-white p-3 font-semibold hover:bg-blue-600 text-center bg-blue-500 w-full mt-6">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
