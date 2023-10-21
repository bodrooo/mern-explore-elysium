import { ChangeEvent, FormEvent, useState } from "react";
import "./login.sass";
import Footer from "../../components/Footer/Footer";

interface IFormData {
  username: string;
  password: string;
}

const Login = () => {
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
      <div className="login">
        <div className="wrapper">
          <h1>Login</h1>
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
              <input type="submit" value="Login" disabled={isSubmitDisabled} />
              <p>
                Don't Have An Account? <a href="/register">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
