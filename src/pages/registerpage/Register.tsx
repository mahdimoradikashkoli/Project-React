import { Form } from "./partails";

const Register = () => {
  
  return (
    <>
      <div className="fixed top-2">
        <h2 className="text-white">Register Page</h2>
      </div>
      <div className="w-2/3 fixed top-8 h-96 px-2 py-1 bg-purple-800 rounded-lg mt-2 overflow-y-auto">
        <Form/>
      </div>
    </>
  );
};
export default Register;
