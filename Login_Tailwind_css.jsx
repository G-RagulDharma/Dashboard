import React from "react";
import Container from "react-bootstrap/esm/Container";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

const Login_Tailwind_css = () => {
    return (
        <Container fluid className="flex justify-center vw-100 vh-100 items-center fluid">
            <div className="p-5 rounded bg-white w-sm h-80 shadow-2xl">
                <form>
                    <h3 className="flex justify-center mb-8">Sign-In</h3>
                    <div className="relative mt-4">
                        <FontAwesomeIcon icon={faEnvelope} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input type='email' placeholder='Email' className="form-control mt-4"></input>
                    </div>
                    <div className="relative mt-3">
                        <FontAwesomeIcon icon={faKey} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input type="password" placeholder="Password" className="form-control pl-10 w-full" />
                    </div>
                    <div className='grid mt-4'>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 w-full py-2 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition rounded"
                        >
                            Submit
                        </motion.button>
                    </div>
                </form>
                <p className="text-center text-sm text-gray-500 mt-2">
                    Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
                </p>
            </div>

        </Container>
    )
}
export default Login_Tailwind_css