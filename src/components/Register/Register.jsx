import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;

    console.log(email, password, name);

    // create user with email and password
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR!", error.message);
      });
  };
  return (
    <div className="card text-center bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-3xl font-bold">Register now!</h1>
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="mb-4 ml-4">
        Already have an account? Please
        <Link className="text-blue-600 hover:text-blue-400" to="/login">
          {" "}
          Login.
        </Link>
      </p>
    </div>
  );
};

export default Register;
