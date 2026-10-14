
function FormFooter() {
  return (
    <>
      <button type="submit" className="register-btn">
        Register
      </button>

      <p className="footer-text">
        Already have an account?{" "}
        <a href="#login" onClick={(e) => {
          e.preventDefault();
          alert("Login page coming soon!");
        }}>
          Login here
        </a>
      </p>
    </>
  );
}

export default FormFooter;
