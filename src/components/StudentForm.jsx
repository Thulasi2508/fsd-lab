
import FormFooter from "./FormFooter";

function StudentForm() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const student = Object.fromEntries(formData.entries());

    alert("Registration successful!");

    console.log("Student Details:", student);
    event.currentTarget.reset();
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your 10 digit mobile number"
            pattern="[0-9]{10}"
            maxLength="10"
            title="Enter a valid 10 digit mobile number"
            required
          />
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input type="date" name="dob" required />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                required
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
              />
              Female
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
              />
              Other
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Department</label>
          <select name="department" defaultValue="" required>
            <option value="" disabled>Select Department</option>
            <option value="IT">Information Technology</option>
            <option value="CSE">Computer Science</option>
            <option value="ECE">Electronics and Communication</option>
            <option value="EEE">Electrical and Electronics</option>
            <option value="MECH">Mechanical Engineering</option>
            <option value="CIVIL">Civil Engineering</option>
          </select>
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea
            name="address"
            placeholder="Enter your complete address"
            rows="3"
            required
          />
        </div>

        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            placeholder="Enter your city"
            required
          />
        </div>

        <div className="form-group">
          <label>State</label>
          <select name="state" defaultValue="" required>
            <option value="" disabled>Select State</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Kerala">Kerala</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Telangana">Telangana</option>
            <option value="Maharashtra">Maharashtra</option>
          </select>
        </div>

        <div className="form-group">
          <label>Pin Code</label>
          <input
            type="text"
            name="pinCode"
            placeholder="Enter your pin code"
            pattern="[0-9]{6}"
            maxLength="6"
            title="Enter a valid 6 digit pin code"
            required
          />
        </div>
      </div>

      <div className="form-group upload-group">
        <label>Upload Document</label>
        <input
          type="file"
          name="document"
          accept=".jpg,.jpeg,.png,.pdf"
        />
        <small>Allowed formats: JPG, PNG, PDF (Max size: 2MB)</small>
      </div>

      <FormFooter />
    </form>
  );
}

export default StudentForm;
