import React, { useState } from "react";

interface ReviewFormProps {
  onClose: () => void;
}

interface ReviewFormData {
  username: string;
  email: string;
  rating: number;
  comment: string;
  headline: string;
}

export default function ReviewForm({ onClose }: ReviewFormProps) {
  const [form, setForm] = useState<ReviewFormData>({
    username: "",
    email: "",
    rating: 0,
    comment: "",
    headline: ""
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.rating) {
      alert("You must provide a rating to submit your review.");
      return;
    }

    console.log("User Signup Data:", form);
    // Call your backend API here
  };

  const isFormValid =
    form.username.trim() !== "" &&
    form.email.trim() !== "" &&
    form.rating !== 0 &&
    form.comment.trim() !== "" &&
    form.headline.trim() !== "";

  return (
    <div className="review-form-modal">
      <form
        onSubmit={handleSubmit}
        className="review-form"
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
        <h2>Share your thoughts</h2>

        <div className="fields">
          <div>
            <label htmlFor="rating">Rate your experience *</label>
            <input
              name="rating"
              type="number"
              min="1"
              max="5"
              required
              onChange={handleChange}
              value={form.rating}
            />
          </div>

          <div>
            <label htmlFor="comment">Write a review *</label>  
            <textarea
                name="comment"
                placeholder="Write your review here..."
                required
                onChange={handleChange}
                value={form.comment}
                
            />
             
          </div>

          

          <div>
            <label htmlFor="headline">Add a headline *</label>
            <input
              name="headline"
              type="text"
              required
              onChange={handleChange}
              value={form.headline}
            />
          </div>

         <div className="row-display">
            <div>
                  <label htmlFor="username">Your name *</label>
                  <input
                  name="username"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                  value={form.username}
                  />
            </div>

            <div>
              <label htmlFor="email">Your email address *</label>
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
        </div>

       
        <div>
            <p style={{ fontSize: "0.8rem", margin: "1rem 0" }}>
            * Required fields
            </p>
            <button type="submit" className="send-btn" disabled={!isFormValid}>
            Send
            </button>
        </div>

        
      </form>
    </div>
  );
}
