import React, { useState } from "react";
import { siteConfig } from "../config/siteConfig";
import { Send, MessageCircle, CheckCircle, Phone, Mail, AlertCircle, Loader2 } from "lucide-react";
import "./InquiryForm.css";

const InstagramIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 18,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

interface FormData {
  name: string;
  phone: string;
  notes: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  notes?: string;
}

export const InquiryForm: React.FC = () => {
  const { contact } = siteConfig;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    notes: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your name.";
    }

    const cleanPhone = formData.phone.replace(/[^0-9+]/g, "");
    if (!cleanPhone || cleanPhone.length < 7) {
      newErrors.phone = "Please enter a valid phone or WhatsApp number.";
    }

    if (!formData.notes.trim() || formData.notes.trim().length < 5) {
      newErrors.notes = "Please share a few words about your upcoming wedding.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const accessKey = contact.web3FormsAccessKey || import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setIsSubmitting(false);
      setSubmitError(
        "Email dispatch service is awaiting your Web3Forms access key. Please add VITE_WEB3FORMS_ACCESS_KEY in your .env or Vercel environment settings, or send your inquiry directly via WhatsApp or Email below."
      );
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          phone: formData.phone,
          message: formData.notes,
          subject: `New Wedding Inquiry from ${formData.name} — KNOTS Atelier`,
          from_name: "KNOTS Atelier Inquiry Desk",
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        throw new Error(data.message || "Email dispatch failed. Please contact us directly.");
      }
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error
          ? err.message
          : "Network error occurred while submitting. Please use WhatsApp or Email directly.";
      console.warn("Email dispatch error:", errorMsg);
      setSubmitError(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppLink = () => {
    const phone = contact.whatsappNumber.replace(/[^0-9]/g, "");
    const text = encodeURIComponent(
      `Hello Knots by Deva Jain team!\nName: ${formData.name}\nPhone: ${formData.phone}\nWedding Vision:\n${formData.notes}`
    );
    return `https://wa.me/${phone}?text=${text}`;
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(
      `New Wedding Inquiry from ${formData.name || "Client"} — KNOTS Atelier`
    );
    const body = encodeURIComponent(
      `Hello Knots Atelier Desk,\n\nName: ${formData.name}\nPhone / WhatsApp: ${formData.phone}\nWedding Vision & Notes:\n${formData.notes}\n\nWarm regards`
    );
    return `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="inquiry-section section-padding" aria-label="Contact Atelier">
      {/* Anchor support for both #contact and #inquiry */}
      <div id="inquiry" tabIndex={-1} style={{ position: "relative", top: "-80px" }} />

      <div className="container">
        {/* Minimal Section Header */}
        <div className="section-header-minimal">
          <h2 className="heading-section section-title">{contact.title}</h2>
          <p className="section-subtitle">{contact.subtitle}</p>
        </div>

        {/* 2-Column Minimal Layout: Form & Direct Contact */}
        <div className="inquiry-layout">
          {/* Form Column */}
          <div className="inquiry-form-container">
            {isSubmitted ? (
              <div className="inquiry-success-state" role="status">
                <CheckCircle size={32} className="success-icon" />
                <h3 className="success-title heading-sub">Inquiry Dispatched</h3>
                <p className="success-msg">
                  Thank you, <strong>{formData.name}</strong>. Your inquiry has been sent directly to our atelier desk ({contact.email}). We will reach out shortly.
                </p>
                <div className="success-actions">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <MessageCircle size={16} />
                    <span>CONNECT ALSO VIA WHATSAPP</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", phone: "", notes: "" });
                    }}
                    className="btn btn-outline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="minimal-wedding-form">
                <div className={`form-group ${errors.name ? "has-error" : ""}`}>
                  <label htmlFor="name" className="field-label">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="field-input"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>

                <div className={`form-group ${errors.phone ? "has-error" : ""}`}>
                  <label htmlFor="phone" className="field-label">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="field-input"
                    placeholder="Enter phone or WhatsApp number"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                  />
                  {errors.phone && <span className="field-error">{errors.phone}</span>}
                </div>

                <div className={`form-group ${errors.notes ? "has-error" : ""}`}>
                  <label htmlFor="notes" className="field-label">
                    Wedding Vision
                  </label>
                  <textarea
                    id="notes"
                    rows={4}
                    className="field-textarea"
                    placeholder="City, dates, estimated guest count, or decor dreams..."
                    value={formData.notes}
                    onChange={(e) => {
                      setFormData({ ...formData, notes: e.target.value });
                      if (errors.notes) setErrors({ ...errors, notes: undefined });
                    }}
                  />
                  {errors.notes && <span className="field-error">{errors.notes}</span>}
                </div>

                {submitError && (
                  <div className="inquiry-error-banner" role="alert">
                    <AlertCircle size={18} className="error-icon" />
                    <div className="error-content">
                      <p className="error-text">{submitError}</p>
                      <div className="error-fallback-actions">
                        <a
                          href={getWhatsAppLink()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="fallback-link"
                        >
                          <MessageCircle size={13} />
                          <span>Send via WhatsApp</span>
                        </a>
                        <a href={getMailtoLink()} className="fallback-link">
                          <Mail size={13} />
                          <span>Send via Email App</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span>TRANSMITTING INQUIRY...</span>
                      <Loader2 size={15} className="submit-spinner" />
                    </>
                  ) : (
                    <>
                      <span>SEND INQUIRY</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Direct Concierge Column */}
          <div className="inquiry-direct-info">
            <h3 className="direct-title heading-sub">Direct Inquiries</h3>
            <p className="direct-desc">
              For date availability, destination scouting, or immediate conversations, reach our atelier desk directly.
            </p>

            <div className="direct-links-list">

              <a
                href="https://www.instagram.com/knottss.co?rpxt=MW1rb2ZkeXkzMDA2OA=="
                target="_blank"
                rel="noopener noreferrer"
                className="direct-link-item"
              >
                <InstagramIcon size={18} className="direct-link-icon" />
                <div>
                  <span className="direct-link-label">Instagram</span>
                  <span className="direct-link-value">@knottss.co</span>
                </div>
              </a>

              <a
                href={`https://wa.me/${contact.whatsappNumber.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="direct-link-item"
              >
                <MessageCircle size={18} className="direct-link-icon" />
                <div>
                  <span className="direct-link-label">WhatsApp</span>
                  <span className="direct-link-value">{contact.whatsappNumber}</span>
                </div>
              </a>

              <a href={`tel:${contact.phone}`} className="direct-link-item">
                <Phone size={18} className="direct-link-icon" />
                <div>
                  <span className="direct-link-label">Direct Atelier Phone</span>
                  <span className="direct-link-value">{contact.phone}</span>
                </div>
              </a>

              <a href={`mailto:${contact.email}`} className="direct-link-item">
                <Mail size={18} className="direct-link-icon" />
                <div>
                  <span className="direct-link-label">Email</span>
                  <span className="direct-link-value">{contact.email}</span>
                </div>
              </a>
            </div>

            <p className="confidentiality-note">
              Every commission is treated with complete privacy and discretion.
            </p>
          </div>
        </div>
      </div>
    </section >
  );
};
