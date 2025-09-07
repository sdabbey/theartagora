import React, { useState } from "react";

interface ExplorerSubscribeProps {
  onClose: () => void;
}

interface UserSubscribeFormData {
  
  email: string;
  specialRequests?: string;
  agreeToTerms: boolean;
}

export default function ExplorerSubscribe({ onClose }: ExplorerSubscribeProps) {
  const [form, setForm] = useState<UserSubscribeFormData>({
    
    email: "",
    specialRequests: "",
    agreeToTerms: false,
  });



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
      alert("You must agree to the terms to subscribe.");
      return;
    }

    console.log("User Subscription Data:", form);
    // Call your backend API here
  };

  const isFormValid =
    form.email.trim() !== "" &&
    // form.specialRequests?.trim() !== "" &&
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
        <h2>Subscribe to The Art Agora today</h2>
        <p>Join our community of art explorers and enthusiasts!<br/>You'll receive update on new offers and artworks available.</p>
        <div className="fields">
          
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

          <div>
            <label htmlFor="specialRequests">Special Requests</label>
            <input
              name="specialRequests"
              type="text"
              placeholder="Any special requests?"
              onChange={handleChange}
              value={form.specialRequests}
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
            By ticking this, you are agreeing The Art Agora's {" "}
            <a href="#">Terms of Service</a> and are acknowledging our{" "}
            <a href="#">Privacy Notice</a> applies
          </span>
        </label>

        <button type="submit" className="signup-btn" disabled={!isFormValid}>
          Subscribe
        </button>

        
      </form>
    </div>
  );
}
