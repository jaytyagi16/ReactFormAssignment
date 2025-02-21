import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'

type signupFormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const schemaValidation = Yup.object({
  firstName: Yup.string().required("First Name is Required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Not in email format").required("Email is required"),
  password: Yup.string().matches(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{9,15}$/,
    "Password must be 9-15 characters, include uppercase, lowercase, number and special character"
  ).required("Password is required")
})

interface SignupFormProps{
    setLogin: (val: boolean) => void
}

const SignupForm: React.FC<SignupFormProps> = (props) => {
    const {setLogin} = props;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<signupFormInputs>({
    resolver: yupResolver(schemaValidation)
  });

  const onSubmit = (data: signupFormInputs) => {
    console.log(data);

    let credentials = {
        email: data.email,
        password: data.password
    }

    localStorage.setItem("credentials", JSON.stringify(credentials))
    setLogin(false);
  };

  return (
    <div>
      <h2 className='font-bold text-2xl'>Sign up to Dribble</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-10 flex flex-col gap-8 max-w-[446px]'>
        {/* first name and last name */}
        <div className='flex items-center gap-10'>
          {/* first name */}
          <div className='flex flex-col gap-1'>
            <label className='font-bold'>First Name</label>
            <input
              {...register("firstName")}
              className='border-2 border-gray-300 rounded px-2 h-9'
            />
            {
              errors.firstName && <p className='text-red-500 text-sm'>{errors.firstName.message}</p>
            }
          </div>
          {/* last name */}
          <div className='flex flex-col gap-1'>
            <label className='font-bold'>Last Name</label>
            <input
              {...register("lastName")}
              className='border-2 border-gray-300 rounded px-2 h-9'
            />
            {
              errors.lastName && <p className='text-red-500 text-sm'>{errors.lastName.message}</p>
            }
          </div>
        </div>
        {/* email */}
        <div className='flex flex-col gap-1'>
          <label className='font-bold'>Email</label>
          <input
            {...register("email")}
            className='border-2 border-gray-300 rounded px-2 h-9'
          />
          {
            errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>
          }
        </div>
        {/* password */}
        <div className='flex flex-col gap-1'>
          <label className='font-bold'>Password</label>
          <input
            type='password'
            {...register("password")}
            className='border-2 border-gray-300 rounded px-2 h-9'
          />
          {
            errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>
          }
        </div>
        
        <button 
          type="submit" 
          className="bg-slate-900 text-white py-4 px-4 hover:bg-slate-700 font-bold rounded-full cursor-pointer"
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default SignupForm