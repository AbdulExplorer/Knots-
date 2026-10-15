import React, { useState } from "react";
import { siteConfig } from "../config/siteConfig";
import { Send, MessageCircle, CheckCircle, Phone, Sparkles } from "lucide-react";
import "./InquiryForm.css";

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

  // The 3 required form fields
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    notes: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Simple, beginner-friendly validation for exactly 3 fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your name.";
    }

    // Check that phone has at least 7 digits
    const cleanPhone = formData.phone.replace(/[^0-9+]/g, "");
    if (!cleanPhone || cleanPhone.length < 7) {
      newErrors.phone = "Please enter a valid phone or WhatsApp number.";
    }

    if (!formData.notes.trim() || formData.notes.trim().length < 5) {
      newErrors.notes = "Please tell us a few words about your upcoming wedding.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate sending brief to local demo state
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  // Helper to open WhatsApp with pre-filled message
  const getWhatsAppLink = () => {
    const phone = contact.whatsappNumber.replace(/[^0-9]/g, "");
    const text = encodeURIComponent(
      `Hello Knots by Deva Jain team!\nName: ${formData.name}\nPhone: ${formData.phone}\nWedding Vision:\n${formData.notes}`
    );
    return `https://wa.me/${phone}?text=${text}`;
  };

  return (
    <section id="inquiry" className="inquiry-section section-padding" aria-label="Wedding Inquiry Form">
      <div className="container">
        
        {/* Header Block */}
        <div className="inquiry-header">
          <span className="section-eyebrow">BEGIN THE CONVERSATION</span>
          <h2 className="heading-section inquiry-title">
            PLAN YOUR WEDDING WITH US
          </h2>
          <p className="inquiry-subtitle">
            Share a few initial details and our wedding director will connect with you to discuss dates, venues, and decor visions.
          </p>
        </div>

        {/* 2-Column Layout: Form + Direct WhatsApp/Phone Concierge */}
        <div className="inquiry-grid">
          
          {/* Column 1: Exactly 3-Field Inquiry Form */}
          <div className="inquiry-form-card">
            {isSubmitted ? (
              // Honest Local Confirmation State
              <div className="inquiry-success-box" role="status">
                <div className="success-icon-wrap">
                  <CheckCircle size={32} className="success-icon" />
                </div>
                <h3 className="success-heading heading-sub">Inquiry Recorded</h3>
                <p className="success-text">
                  Thank you, <strong className="text-italic-accent">{formData.name}</strong>. Your wedding vision has been recorded in this local preview.
                </p>

                {/* Honest note explaining backend is not connected yet */}
                <div className="demo-notice">
                  <p>
                    <strong>Local Demo Notice:</strong> This preview is not yet linked to an external database or server. To send your message immediately, click below to chat on WhatsApp:
                  </p>
                </div>

                <div className="success-action-row">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <MessageCircle size={16} />
                    <span>SEND DIRECTLY VIA WHATSAPP</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", phone: "", notes: "" });
                    }}
                    className="reset-btn"
                  >
                    Submit another message
                  </button>
                </div>
              </div>
            ) : (
              // The 3-field form
              <form onSubmit={handleSubmit} noValidate className="wedding-form">
                
                {/* FIELD 1: Name */}
                <div className={`form-field ${errors.name ? "error" : ""}`}>
                  <label htmlFor="name" className="field-label">
                    1. Your Name <span className="req">*</span>
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
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <span className="field-error-text">{errors.name}</span>}
                </div>

                {/* FIELD 2: Phone number */}
                <div className={`form-field ${errors.phone ? "error" : ""}`}>
                  <label htmlFor="phone" className="field-label">
                    2. Phone / WhatsApp Number <span className="req">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="field-input"
                    placeholder="Enter your number"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && <span className="field-error-text">{errors.phone}</span>}
                </div>

                {/* FIELD 3: Tell us about your wedding */}
                <div className={`form-field ${errors.notes ? "error" : ""}`}>
                  <label htmlFor="notes" className="field-label">
                    3. Tell Us About Your Wedding <span className="req">*</span>
                  </label>
                  <textarea
                    id="notes"
                    rows={4}
                    className="field-textarea"
                    placeholder="Desired wedding city, tentative dates or season, guest count, or any decor dreams you have in mind..."
                    value={formData.notes}
                    onChange={(e) => {
                      setFormData({ ...formData, notes: e.target.value });
                      if (errors.notes) setErrors({ ...errors, notes: undefined });
                    }}
                    aria-invalid={!!errors.notes}
                  />
                  {errors.notes && <span className="field-error-text">{errors.notes}</span>}
                </div>

                {/* Submit Button */}
                <div className="form-submit-row">
                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    <span>{isSubmitting ? "RECORDING INQUIRY..." : "SEND INQUIRY"}</span>
                    <Send size={15} />
                  </button>
                  <span className="form-privacy-hint">Strictly discrete and confidential.</span>
                </div>

              </form>
            )}
          </div>

          {/* Column 2: Direct Concierge & Contact Card */}
          <div className="inquiry-contact-card">
            <span className="contact-card-eyebrow">WEDDING CONCIERGE</span>
            <h3 className="contact-card-title heading-sub">
              Prefer Immediate Direct Conversation?
            </h3>
            <p className="contact-card-text">
              Reach our private wedding desk directly via WhatsApp or call to check date availability for your celebrations.
            </p>

            <div className="contact-methods">
              <a
                href={`https://wa.me/${contact.whatsappNumber.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method-item"
              >
                <MessageCircle size={18} className="contact-method-icon" />
                <div>
                  <span className="contact-method-label">WHATSAPP DIRECT</span>
                  <span className="contact-method-val">{contact.whatsappNumber}</span>
                </div>
              </a>

              <a href={`tel:${contact.whatsappNumber}`} className="contact-method-item">
                <Phone size={18} className="contact-method-icon" />
                <div>
                  <span className="contact-method-label">CALL WEDDING ATELIER</span>
                  <span className="contact-method-val">{contact.whatsappNumber}</span>
                </div>
              </a>

              <div className="contact-method-item">
                <Sparkles size={18} className="contact-method-icon" />
                <div>
                  <span className="contact-method-label">AVAILABILITY</span>
                  <span className="contact-method-val">{siteConfig.brand.availability}</span>
                </div>
              </div>
            </div>

            <div className="contact-quote">
              <p className="text-italic-accent">
                "We accept a limited number of weddings each season to guarantee total creative devotion to every bride, groom, and family."
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
