import React, { useState } from "react";

interface ExplorerSignupProps {
  onClose: () => void;
}

interface UserSignupFormData {
  username: string;
  email: string;
  password: string;
  dateOfBirth: string;
  agreeToTerms: boolean;
}

export default function ExplorerSignup({ onClose }: ExplorerSignupProps) {
  const [form, setForm] = useState<UserSignupFormData>({
    username: "",
    email: "",
    password: "",
    dateOfBirth: "",
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agreeToTerms) {
      alert("You must agree to the terms to sign up.");
      return;
    }

    console.log("User Signup Data:", form);
    // Call your backend API here
  };

  const isFormValid =
    form.username.trim() !== "" &&
    form.email.trim() !== "" &&
    form.password.trim() !== "" &&   
    form.dateOfBirth.trim() !== "" &&
    form.agreeToTerms;

  return (
    <div className="explorer-signup-modal">
      <form
        onSubmit={handleSubmit}
        className="explorer-signup-form"
        autoComplete="off"
      >
        <button
          type="button"
          className="close-btn"
          onClick={onClose}
          style={{ float: "right", marginBottom: "1rem" }}
        >
          ×
        </button>
        <h2>Join The Art Agora today</h2>

        <div className="fields">
          <div>
            <label htmlFor="username">Username</label>
            <input
              name="username"
              type="text"
              placeholder="e.g. John Doe"
              required
              onChange={handleChange}
              value={form.username}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <div style={{ position: "relative" }}>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                required
                onChange={handleChange}
                value={form.password}
                style={{ paddingRight: "4rem" }} // give room for toggle button
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                style={{
                  position: "absolute",
                  right: "0.7rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1rem",
                  color: "white"
                }}
              >
                {showPassword ? <i className='bx  bx-eye-closed'  ></i>  : <i className='bx  bx-eye'  ></i> }
              </button>
            </div>
          </div>

          

          <div>
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              name="dateOfBirth"
              type="date"
              required
              onChange={handleChange}
              value={form.dateOfBirth}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              autoComplete="off"
              placeholder="john.doe@example.com"
              required
              onChange={handleChange}
              value={form.email}
            />
          </div>
        </div>

        <label className="terms-checkbox">
          <input
            name="agreeToTerms"
            type="checkbox"
            required
            onChange={handleChange}
            checked={form.agreeToTerms}
          />
          <span>
            By ticking this, you are agreeing to The Art Agora's{" "}
            <a href="#">Terms of Service</a> and are acknowledging our{" "}
            <a href="#">Privacy Notice</a> applies
          </span>
        </label>

        <button type="submit" className="signup-btn" disabled={!isFormValid}>
          Sign Up
        </button>

        <a className="login-btn" href="#">
          Already have an account? Log in
        </a>
      </form>
    </div>
  );
}
