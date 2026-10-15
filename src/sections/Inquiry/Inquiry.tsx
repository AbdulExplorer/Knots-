import React, { useState } from "react";
import { siteConfig } from "../../config/site";
import { SectionLabel } from "../../components/ui/SectionLabel";
import { MagneticButton } from "../../components/ui/MagneticButton";
import {
  Send,
  MessageCircle,
  Mail,
  AlertCircle,
  CheckCircle,
  Clock,
  MapPin,
  Calendar,
  Sparkles,
} from "lucide-react";
import "./Inquiry.css";

interface FormData {
  name: string;
  contact: string;
  eventType: string;
  approxDate: string;
  city: string;
  budget: string;
  description: string;
}

interface FormErrors {
  name?: string;
  contact?: string;
  eventType?: string;
  approxDate?: string;
  city?: string;
  description?: string;
}

export const Inquiry: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contact: "",
    eventType: "Weddings & Unions",
    approxDate: "",
    city: "",
    budget: "$50,000 – $100,000",
    description: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const eventTypeOptions = [
    "Weddings & Unions",
    "Corporate Galas & Summits",
    "Private Celebrations & Dinners",
    "Milestone Birthdays & Anniversaries",
    "Concerts & Live Experiences",
    "Brand Launches & Premieres",
    "Other Bespoke Engagement",
  ];

  const budgetOptions = [
    "Under $30,000",
    "$30,000 – $50,000",
    "$50,000 – $100,000",
    "$100,000 – $250,000",
    "$250,000+",
    "To be determined with Atelier",
  ];

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please provide your full name or entity.";
    }

    const contactClean = formData.contact.trim();
    if (!contactClean) {
      errs.contact = "Please provide a valid email or phone number.";
    } else if (!contactClean.includes("@") && contactClean.replace(/[^0-9]/g, "").length < 7) {
      errs.contact = "Please enter a valid email address or phone number.";
    }

    if (!formData.eventType) {
      errs.eventType = "Please select an event category.";
    }

    if (!formData.approxDate.trim()) {
      errs.approxDate = "Please provide an approximate date, season, or year.";
    }

    if (!formData.city.trim()) {
      errs.city = "Please specify the desired host city or destination.";
    }

    if (!formData.description.trim() || formData.description.trim().length < 10) {
      errs.description = "Please share a brief sentence describing your vision or guest count.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate realistic asynchronous concierge verification
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 800);
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(`Inquiry: ${formData.eventType} in ${formData.city || "TBD"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nContact: ${formData.contact}\nEvent Discipline: ${formData.eventType}\nTarget Date: ${formData.approxDate}\nDestination: ${formData.city}\nEstimated Budget: ${formData.budget}\n\nVision Notes:\n${formData.description}`
    );
    return `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  };

  const generateWhatsAppUrl = () => {
    if (!siteConfig.contact.whatsappNumber) return "#";
    const cleanNumber = siteConfig.contact.whatsappNumber.replace(/[^0-9+]/g, "");
    const text = encodeURIComponent(
      `Hello AFTERGLOW Studio, my name is ${formData.name || "a prospective client"}. I would like to discuss an upcoming ${formData.eventType || "event"} in ${formData.city || "our destination"}.`
    );
    return `https://wa.me/${cleanNumber}?text=${text}`;
  };

  return (
    <section id="inquiry" className="inquiry-section" aria-label="Inquiry and Commission Form">
      <div className="site-container">
        {/* Header Block */}
        <div className="inquiry-header">
          <SectionLabel number="07" label="THE INQUIRY" />
          <div className="inquiry-header-grid">
            <div>
              <h2 className="display-statement inquiry-headline">
                WHAT ARE <br />
                <span className="font-italic-accent">WE CELEBRATING?</span>
              </h2>
            </div>
            <div className="inquiry-header-copy">
              <p className="body-lead">
                Tell us what you're imagining. We'll help you shape the experience.
              </p>
              <div className="inquiry-timing-tag">
                <Clock size={14} className="timing-icon" />
                <span>Typical atelier response within 24 to 48 hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid: Form + Studio Coordinates */}
        <div className="inquiry-layout-grid">
          {/* Left: Interactive Accessible Form */}
          <div className="inquiry-form-card">
            {submittedData ? (
              <div className="inquiry-success-view" role="status" aria-live="polite">
                <div className="success-icon-wrap">
                  <CheckCircle size={36} className="success-icon" />
                </div>
                <h3 className="success-title font-serif">Inquiry Registered</h3>
                <p className="success-lead body-standard">
                  Thank you, <strong className="font-italic-accent">{submittedData.name}</strong>. Your creative brief outline has been recorded for review.
                </p>

                <div className="honest-integration-notice">
                  <AlertCircle size={18} className="notice-icon" />
                  <div className="notice-content">
                    <span className="notice-title">STUDIO ARCHITECTURE NOTICE</span>
                    <p>
                      This site is currently in client preview mode and is not yet tethered to a live transactional CRM database. To dispatch your details immediately to our creative director, choose one of the direct channels below:
                    </p>
                  </div>
                </div>

                <div className="success-action-buttons">
                  <a
                    href={generateMailtoUrl()}
                    className="btn-magnetic btn-primary btn-md"
                    data-cursor="interactive"
                  >
                    <Mail size={16} />
                    <span>TRANSMIT VIA DIRECT EMAIL</span>
                  </a>

                  {siteConfig.contact.whatsappNumber && (
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-magnetic btn-secondary btn-md"
                      data-cursor="interactive"
                    >
                      <MessageCircle size={16} />
                      <span>DISCUSS ON WHATSAPP</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSubmittedData(null)}
                  className="reset-form-link"
                  data-cursor="interactive"
                >
                  Edit or submit another brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="inquiry-form">
                <div className="form-fields-grid">
                  {/* Name */}
                  <div className={`form-group ${errors.name ? "has-error" : ""}`}>
                    <label htmlFor="inquiry-name" className="form-label">
                      Your Name or Organization <span className="required-star">*</span>
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Lady Genevieve Vance / Vesper Media"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      required
                    />
                    {errors.name && (
                      <span id="name-error" className="form-error-msg" role="alert">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Contact (Email / Phone) */}
                  <div className={`form-group ${errors.contact ? "has-error" : ""}`}>
                    <label htmlFor="inquiry-contact" className="form-label">
                      Email or Phone <span className="required-star">*</span>
                    </label>
                    <input
                      id="inquiry-contact"
                      type="text"
                      className="form-input"
                      placeholder="genevieve@atelier.com or +1 (555) 019-2831"
                      value={formData.contact}
                      onChange={(e) => {
                        setFormData({ ...formData, contact: e.target.value });
                        if (errors.contact) setErrors({ ...errors, contact: undefined });
                      }}
                      aria-invalid={!!errors.contact}
                      aria-describedby={errors.contact ? "contact-error" : undefined}
                      required
                    />
                    {errors.contact && (
                      <span id="contact-error" className="form-error-msg" role="alert">
                        {errors.contact}
                      </span>
                    )}
                  </div>

                  {/* Event Type */}
                  <div className="form-group">
                    <label htmlFor="inquiry-event-type" className="form-label">
                      Event Discipline <span className="required-star">*</span>
                    </label>
                    <div className="form-select-wrap">
                      <select
                        id="inquiry-event-type"
                        className="form-select"
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      >
                        {eventTypeOptions.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Approximate Date */}
                  <div className={`form-group ${errors.approxDate ? "has-error" : ""}`}>
                    <label htmlFor="inquiry-date" className="form-label">
                      Target Date or Season <span className="required-star">*</span>
                    </label>
                    <div className="input-with-icon">
                      <Calendar size={16} className="field-icon" />
                      <input
                        id="inquiry-date"
                        type="text"
                        className="form-input"
                        placeholder="e.g. October 2026 / Autumn Solstice"
                        value={formData.approxDate}
                        onChange={(e) => {
                          setFormData({ ...formData, approxDate: e.target.value });
                          if (errors.approxDate) setErrors({ ...errors, approxDate: undefined });
                        }}
                        aria-invalid={!!errors.approxDate}
                        aria-describedby={errors.approxDate ? "date-error" : undefined}
                        required
                      />
                    </div>
                    {errors.approxDate && (
                      <span id="date-error" className="form-error-msg" role="alert">
                        {errors.approxDate}
                      </span>
                    )}
                  </div>

                  {/* City */}
                  <div className={`form-group ${errors.city ? "has-error" : ""}`}>
                    <label htmlFor="inquiry-city" className="form-label">
                      Host City or Region <span className="required-star">*</span>
                    </label>
                    <div className="input-with-icon">
                      <MapPin size={16} className="field-icon" />
                      <input
                        id="inquiry-city"
                        type="text"
                        className="form-input"
                        placeholder="e.g. Lake Como, Paris, or New York"
                        value={formData.city}
                        onChange={(e) => {
                          setFormData({ ...formData, city: e.target.value });
                          if (errors.city) setErrors({ ...errors, city: undefined });
                        }}
                        aria-invalid={!!errors.city}
                        aria-describedby={errors.city ? "city-error" : undefined}
                        required
                      />
                    </div>
                    {errors.city && (
                      <span id="city-error" className="form-error-msg" role="alert">
                        {errors.city}
                      </span>
                    )}
                  </div>

                  {/* Optional Budget Range */}
                  <div className="form-group">
                    <label htmlFor="inquiry-budget" className="form-label">
                      Anticipated Production Scope (Optional)
                    </label>
                    <div className="form-select-wrap">
                      <select
                        id="inquiry-budget"
                        className="form-select"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Brief Description */}
                <div className={`form-group form-group-full ${errors.description ? "has-error" : ""}`}>
                  <label htmlFor="inquiry-desc" className="form-label">
                    Brief Vision &amp; Notes <span className="required-star">*</span>
                  </label>
                  <textarea
                    id="inquiry-desc"
                    rows={4}
                    className="form-textarea"
                    placeholder="Tell us about the atmosphere, approximate guest count, architectural venue preferences, or any specific emotions you wish to evoke..."
                    value={formData.description}
                    onChange={(e) => {
                      setFormData({ ...formData, description: e.target.value });
                      if (errors.description) setErrors({ ...errors, description: undefined });
                    }}
                    aria-invalid={!!errors.description}
                    aria-describedby={errors.description ? "desc-error" : undefined}
                    required
                  />
                  {errors.description && (
                    <span id="desc-error" className="form-error-msg" role="alert">
                      {errors.description}
                    </span>
                  )}
                </div>

                {/* Form Action */}
                <div className="form-submit-row">
                  <MagneticButton
                    variant="primary"
                    size="lg"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? "CALIBRATING BRIEF..." : "SUBMIT INITIAL BRIEF"}</span>
                    <Send size={16} />
                  </MagneticButton>

                  <span className="form-privacy-note">
                    Confidential &amp; discrete. We do not distribute client information.
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Right: Studio Direct Channels & Concierge Details */}
          <div className="inquiry-info-panel">
            <div className="info-card-top">
              <span className="info-badge">STUDIO CONCIERGE</span>
              <h3 className="info-title font-serif">Direct Access</h3>
              <p className="info-desc body-standard">
                For sensitive engagements, private commissions, or expedited date holds, connect directly with our studio partners.
              </p>
            </div>

            <div className="direct-channels-list">
              <div className="direct-channel-item">
                <Mail size={18} className="channel-icon" />
                <div>
                  <span className="channel-label">ELECTRONIC MAIL</span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="channel-value">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {siteConfig.contact.whatsappNumber ? (
                <div className="direct-channel-item">
                  <MessageCircle size={18} className="channel-icon" />
                  <div>
                    <span className="channel-label">ENCRYPTED MESSAGING</span>
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="channel-value whatsapp-highlight"
                    >
                      {siteConfig.contact.whatsappNumber} (WhatsApp)
                    </a>
                  </div>
                </div>
              ) : (
                <div className="direct-channel-item">
                  <MessageCircle size={18} className="channel-icon" />
                  <div>
                    <span className="channel-label">STUDIO DIRECT</span>
                    <span className="channel-value">Available upon brief submission</span>
                  </div>
                </div>
              )}

              <div className="direct-channel-item">
                <Sparkles size={18} className="channel-icon" />
                <div>
                  <span className="channel-label">ENGAGEMENT CAPACITY</span>
                  <span className="channel-value">{siteConfig.brand.availability}</span>
                </div>
              </div>
            </div>

            <div className="info-card-quote">
              <p className="font-serif">
                "We accept a deliberately constrained number of engagements each season to ensure uncompromising artistic immersion."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
