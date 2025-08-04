import React, { useState } from "react";

interface ArtistSignupProps {
  onClose: () => void;
}

interface ArtistFormData {
  username: string;
  email: string;
  password: string;
  agreeToTerms: boolean;
  displayName: string;
  bio: string;
  portfolioUrl: string;
  preferredMedium: string;
}

export default function ArtistSignup({ onClose }: ArtistSignupProps) {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState<ArtistFormData>({
    username: "",
    email: "",
    password: "",
    agreeToTerms: false,
    displayName: "",
    bio: "",
    portfolioUrl: "",
    preferredMedium: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleNext = () => {
    if (
      form.username &&
      form.email &&
      form.password &&
      form.agreeToTerms
    ) {
      setStep(2);
    } else {
      alert("Please fill all required fields and agree to terms.");
    }
  };

  const handleBack = () => setStep(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Artist Signup Data:", form);
    // API call here
  };

  return (
    <div className="artist-signup-modal">
      <form onSubmit={handleSubmit} className="artist-signup-form" autoComplete="off">
        <button
          type="button"
          className="close-btn"
          onClick={onClose}
          style={{ float: "right", marginBottom: "1rem" }}
        >
          ×
        </button>

        <h2>{step === 1 ? "Create Your Account" : "Tell Us About Your Art"}</h2>

        {step === 1 && (
          <div className="fields">
            <div>
              <label htmlFor="username">Username</label>
              <input
                name="username"
                type="text"
                placeholder="e.g. john_artist"
                value={form.username}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <div style={{ position: "relative" }}>
                <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="off"
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

            <label className="terms-checkbox">
              <input
                name="agreeToTerms"
                type="checkbox"
                checked={form.agreeToTerms}
                onChange={handleChange}
                required
              />
              <span>
                By ticking this, you are agreeing to The Art Agora's{" "}
            <a href="#">Terms of Service</a> and are acknowledging our{" "}
            <a href="#">Privacy Notice</a> applies
              </span>
            </label>

            <button type="button" onClick={handleNext} className="next-btn">
              Next
            </button>
            <a className="login-btn" href="#">
            Already an artist? Log in
            </a>
          </div>
        )}

        {step === 2 && (
          <div className="fields">
            <div>
              <label htmlFor="displayName">Artist Name</label>
              <input
                name="displayName"
                type="text"
                placeholder="e.g. Jane Doe"
                value={form.displayName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="bio">Bio</label>
              <textarea
                name="bio"
                placeholder="Tell us a bit about yourself as an artist..."
                value={form.bio}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="portfolioUrl">Portfolio Link</label>
              <input
                name="portfolioUrl"
                type="url"
                placeholder="https://myartportfolio.com"
                value={form.portfolioUrl}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="preferredMedium">Preferred Medium</label>
              <input
                name="preferredMedium"
                type="text"
                placeholder="e.g. Digital, Acrylic, Mixed Media"
                value={form.preferredMedium}
                onChange={handleChange}
              />
            </div>

            <div className="step-buttons">
              <button type="button" onClick={handleBack} className="back-btn">
                Back
              </button>
              <button type="submit" className="signup-btn">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
