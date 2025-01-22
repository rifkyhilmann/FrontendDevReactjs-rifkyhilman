import { IconSign } from "../../assets/icons";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputField from "../../components/ui/InputField";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authReducer";

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string()
        .min(2, 'Password must be at least 2 characters')
        .required('Password is required'),
});

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    return (
        <div className="w-full h-max min-h-screen flex items-center justify-center font-poppins ">
            <div className="w-[90%] max-w-[1200px] h-full md:h-[80%] flex items-center justify-between gap-5 ">
                <div className="w-full h-full flex items-center justify-center ">
                    <div className="h-max  w-full max-w-[460px] border-none md:border rounded shadow-none md:shadow-lg flex flex-col p-6 md:p-9 gap-9 ">
                        <p className="font-medium">Restaurant</p>
                        <div className="flex flex-col gap-2 ">
                            <p className="text-3xl font-medium">Sign in</p>
                            <p className="text-sm">
                                Welcome back! Please login to continue.
                            </p>
                        </div>

                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                if (values.email === 'admin@gmail.com' || values.password === "admin") {
                                    navigate('/')
                                    dispatch(login({
                                        email : values.email
                                    }))
                                } else {
                                    alert('Email dan password salah')
                                }
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form className="flex flex-col gap-4">
                                    <InputField 
                                        label="Email"
                                        name="email"
                                        type="email"
                                        id="email"
                                        error="email"
                                        placeholder="Enter your Email"
                                        className={`${errors.email && touched.email ? 'border-red-500' : ''}`}
                                    />
                                    <InputField 
                                        label="Password"
                                        name="password"
                                        type="password"
                                        id="password"
                                        error="password"
                                        placeholder="Enter your Password"
                                        className={`${errors.password && touched.password ? 'border-red-500' : ''}`}
                                    />
                                    
                                    <button
                                        type="submit"
                                        className="h-12 w-full bg-black hover:opacity-45 text-white rounded my-5"
                                    >
                                        Submit
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
                <div className="w-full hidden md:flex items-center justify-center h-full">
                    <img src={IconSign} className="w-full" alt="Icons Sign" />
                </div>
            </div>
        </div>
    );
};

export default Login;
