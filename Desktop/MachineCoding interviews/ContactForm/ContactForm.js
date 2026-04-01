
import { useState } from "react";
const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState({});
  const [submitted, setSubmitted] = useState("");
  const [submitName, setSubmitName] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is Required";
    if (!form.email.trim()) {
      newErrors.email = "Email is Required";
    } else if (!/^\$+@\s+\.\s+$/.test(form.email)) {
      newErrors.email = "Invallid email format";
    }

    if (!form.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
      setSubmitName(form.name);
      setSubmitted(true);
      setError({});
      setForm({ name: "", email: "", message: "" });
    }
  };
  return (
    <div
      style={{
        maxWidth: "400px",
        padding: "2rem",
        margin: "2rem auto",
        fontSize: "15px",
        fontFamily: "sans-serif",
        border: "1px solid black",
        borderRadius: "3%",
        textAlign: "left",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email"> Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <button style={{ padding: "1rem", width: "100%" }}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
