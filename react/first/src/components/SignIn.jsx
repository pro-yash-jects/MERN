import "./SignIn.css";
function SignIn() {
  return (
    <>
      <div className="sign">
      <h1>Sign UP </h1>
      <form>
        <label htmlFor="uname">
        <p>Username: </p>
          <input type="text" placeholder="Username" required id="uname" />
        </label>
        <br />
        <br />
        <label htmlFor="pwd">
          Password:
          <input type="password" placeholder="Password" required id="pwd" />
        </label>
        <br />
        <br />
        <label htmlFor="email">
          Email:
          <input type="email" placeholder="Email" required id="email" />
        </label>
        <br />
        <br />
        <label htmlFor="DOB">
          Date of Birth: <input type="date" name="DOB" id="DOB" />
        </label>
        <br />
        <br />
        <button>Sign Up</button>
      </form>
      </div>
    </>
  );
}

export default SignIn;
