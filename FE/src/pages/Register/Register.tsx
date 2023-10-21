import { ChangeEvent, FormEvent, useState } from "react";
import "./register.sass";
import Footer from "../../components/Footer/Footer";

interface IFormData {
  username: string;
  password: string;
}

const Register = () => {
  const [formData, setFormData] = useState<IFormData>({
    username: "",
    password: "",
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const isSubmitDisabled = formData.username === "" || formData.password === "";

  return (
    <>
      <div className="register">
        <div className="wrapper">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label>Username</label>
              <input
                type="text"
                name="username"
                id="username"
                onChange={handleOnChange}
                value={formData.username}
              />
            </div>
            <div className="field">
              <label>Password</label>
              <input
                type="text"
                name="password"
                id="password"
                onChange={handleOnChange}
                value={formData.password}
              />
            </div>
            <div className="text-button">
              <input
                type="submit"
                value="Register"
                disabled={isSubmitDisabled}
              />
              <p>
                Already Have An Account? <a href="/login">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
