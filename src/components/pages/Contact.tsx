import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

import img1 from "../../assets/blob5.png";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  agreeToPolicy: boolean;
}

const Contact = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  /* -------------------- FORM STATE -------------------- */
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agreeToPolicy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  /* -------------------- SCROLL PROGRESS -------------------- */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const progress = scrollYProgress;

  /* -------------------- FADE + SCALE -------------------- */
  const rawOpacity = useTransform(
    progress,
    [0, 0.1, 0.3, 0.4],
    [0, 0, 0.90, 1]
  );

  const opacity = useSpring(rawOpacity, {
    stiffness: 90,
    damping: 22,
    mass: 1.1,
  });

  const rawScale = useTransform(
    progress,
    [0, 0.2, 0.45, 0.7],
    [0.9, 0.93, 0.97, 1]
  );

  const scale = useSpring(rawScale, {
    stiffness: 80,
    damping: 20,
  });

  /* -------------------- Y AXIS (FROM TOP) -------------------- */
  const y = useTransform(progress, [0, 0.7], ["-160px", "0px"]);

  /* -------------------- IMAGE PARALLAX -------------------- */
  const imageY = useTransform(progress, [0, 1], ["120px", "0px"]);
  const imageScale = useTransform(progress, [0, 1], [0.92, 1]);

  /* -------------------- SUBMIT -------------------- */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_76iyswo",
        "template_atwxl39",
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          message: formData.message,
        },
        "r5YiIsdb36lHA5gVB"
      )
      .then(() => {
        setSubmitSuccess(true);
        setIsSubmitting(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
          agreeToPolicy: false,
        });
        setTimeout(() => setSubmitSuccess(false), 3000);
      })
      .catch(() => {
        setIsSubmitting(false);
        alert("Something went wrong");
      });
  };

  return (
    <section ref={ref} id="contact" className="contacts-section">
      <motion.div
        className="contact-container"
        style={{ opacity, scale, y }}
      >
        {/* ---------------- IMAGE ---------------- */}
        <motion.div
          className="contact-left image-panel"
          style={{ y: imageY, scale: imageScale, opacity }}
        >
          <img src={img1} alt="Contact" className="contact-image" />
        </motion.div>

        {/* ---------------- FORM ---------------- */}
        <motion.div className="contact-right" style={{opacity, scale: imageScale, y: imageY,}}>
          <div className="animated-background">
            <div className="glow-line line-1" />
            <div className="glow-line line-2" />
            <div className="glow-orb orb-1" />
            <div className="glow-orb orb-2" />
          </div>

          <div className="form-wrapper">
            <span className="contact-badge">Contact</span>
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-subtitle">
              Questions, ideas or collaboration — let’s talk.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
                <input
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <textarea
                placeholder="Your message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />

              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={formData.agreeToPolicy}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      agreeToPolicy: e.target.checked,
                    })
                  }
                />
                I agree to the privacy policy
              </label>

              <button
                type="submit"
                className={`submit-button ${
                  isSubmitting ? "loading" : submitSuccess ? "success" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Sending…"
                  : submitSuccess
                  ? "Message Sent"
                  : "Send Message"}
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
