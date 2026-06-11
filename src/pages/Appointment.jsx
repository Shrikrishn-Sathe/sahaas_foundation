import React, { useEffect, useState } from "react";
import "./Appointment.css";

const SCRIPT_URL =
  import.meta.env.VITE_GOOGLE_SCRIPT_URL ||
  "https://script.google.com/macros/s/AKfycbyX_hLH3zK-rDqu0numqnsJ4vq35rN9CdOOovsXYOrMZF9KsQ2eOKnqY9AtRQtK4zKu/exec";

// const SCRIPT_URL =
//   "https://invalid-url-test.com/submit";

const GOOGLE_FORM_URL = "https://forms.gle/fZzvbYzUKvcHHrG6A";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10}$/;
const aadhaarRegex = /^[0-9]{12}$/;

const initialFormData = {
  studentName: "",
  dob: "",
  gender: "",
  age: "",
  schoolName: "",
  diagnosis: "",
  bloodGroup: "",
  aadhaar: "",
  fatherName: "",
  motherName: "",
  guardianName: "",
  contact1: "",
  contact2: "",
  email: "",
  address: "",
  medications: "",
  allergies: "",
  medicalHistory: "",
  doctorDetails: "",
  previousTherapy: "",
  strengths: "",
  supportNeeded: "",
  programSelection: "",
  emergencyName: "",
  relationship: "",
  emergencyNumber: "",
};

export default function Appointment() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showGoogleForm, setShowGoogleForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: undefined,
    }));
  };

  const handleNumberInput = (e, maxLength) => {
    const value = e.target.value.replace(/\D/g, "");

    setFormData((current) => ({
      ...current,
      [e.target.name]: value.slice(0, maxLength),
    }));

    setErrors((current) => ({
      ...current,
      [e.target.name]: undefined,
    }));
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const validateForm = (data) => {
    const validation = {};

    if (!data.studentName.trim()) {
      validation.studentName = "Student name is required.";
    }

    if (!data.dob.trim()) {
      validation.dob = "Date of birth is required.";
    }

    if (!data.gender.trim()) {
      validation.gender = "Gender is required.";
    }

    if (!data.age.trim()) {
      validation.age = "Age is required.";
    } else if (Number(data.age) <= 0 || Number(data.age) > 99) {
      validation.age = "Enter valid age.";
    }

    if (!data.diagnosis.trim()) {
      validation.diagnosis = "Diagnosis is required.";
    }

    if (!data.bloodGroup.trim()) {
      validation.bloodGroup = "Blood group is required.";
    }

    if (data.aadhaar.trim() && !aadhaarRegex.test(data.aadhaar)) {
      validation.aadhaar = "Enter a valid 12-digit Aadhaar.";
    }

    if (data.contact1.trim() && !phoneRegex.test(data.contact1)) {
      validation.contact1 = "Enter a valid 10-digit phone number.";
    }

    if (data.contact2.trim() && !phoneRegex.test(data.contact2)) {
      validation.contact2 = "Enter a valid 10-digit phone number.";
    }

    if (data.email.trim() && !emailRegex.test(data.email)) {
      validation.email = "Enter a valid email address.";
    }

    if (!data.medications.trim()) {
      validation.medications = "Current medications field is required.";
    }

    if (!data.allergies.trim()) {
      validation.allergies = "Allergies field is required.";
    }

    if (!data.medicalHistory.trim()) {
      validation.medicalHistory = "Medical history is required.";
    }

    if (!data.strengths.trim()) {
      validation.strengths = "Student interests/strengths are required.";
    }

    if (!data.programSelection.trim()) {
      validation.programSelection = "Please select a program.";
    }

    if (!data.emergencyName.trim()) {
      validation.emergencyName = "Emergency contact name is required.";
    }

    if (!data.relationship.trim()) {
      validation.relationship = "Relationship is required.";
    }

    if (!phoneRegex.test(data.emergencyNumber)) {
      validation.emergencyNumber = "Enter a valid 10-digit emergency number.";
    }

    return validation;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      setMessage("Please fix the highlighted fields and try again.");
      setShowGoogleForm(false);
      setShowPopup(true);
      return;
    }

    setLoading(true);
    setMessage("");

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      setMessage(
        "✅ Form submitted successfully! Our team will contact you soon. Thank you for connecting with SAHAAS FOUNDATION 💚"
      );
      setShowGoogleForm(false);
      setShowPopup(true);
      setFormData(initialFormData);
      setErrors({});
    } catch (error) {
      const errorMessage =
        error.name === "AbortError"
          ? "⚠️ Network issue detected. Please check your internet connection and try again."
          : "⚠️ Something went wrong. Please try again.";

      setMessage(errorMessage);
      setShowGoogleForm(true);
      setShowPopup(true);
    } finally {
      clearTimeout(timeout);
      setLoading(false);
    }
  };

  const fieldClass = (name) => `input ${errors[name] ? "input-error" : ""}`;

  return (
    <div className="appointment-page">
      <div className="appointment-card">
        <div className="form-intro">
          <span className="form-kicker">NGO Health Support</span>
          <h1>🌿 SAHAAS FOUNDATION</h1>
          <h2>📋 Student Admission Form</h2>
        </div>

        <form className="appointment-form" onSubmit={handleSubmit} noValidate>
          <h3>👨‍🎓 Student Information</h3>

          <div>
            <input
              type="text"
              name="studentName"
              placeholder="Student Full Name"
              value={formData.studentName}
              onChange={handleChange}
              required
              className={fieldClass("studentName")}
              aria-invalid={!!errors.studentName}
              aria-describedby="error-studentName"
            />
            {errors.studentName && (
              <span id="error-studentName" className="field-error">
                {errors.studentName}
              </span>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Date of Birth"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => {
                if (!e.target.value) e.target.type = "text";
              }}
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className={fieldClass("dob")}
              aria-invalid={!!errors.dob}
              aria-describedby="error-dob"
            />
            {errors.dob && (
              <span id="error-dob" className="field-error">
                {errors.dob}
              </span>
            )}
          </div>

          <div>
            <input
              type="text"
              name="gender"
              placeholder="Gender"
              value={formData.gender}
              onChange={handleChange}
              className={fieldClass("gender")}
              aria-invalid={!!errors.gender}
              aria-describedby="error-gender"
            />
            {errors.gender && (
              <span id="error-gender" className="field-error">
                {errors.gender}
              </span>
            )}
          </div>

          <div>
            <input
              type="text"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={(e) => handleNumberInput(e, 2)}
              className={fieldClass("age")}
              inputMode="numeric"
              maxLength={2}
              aria-invalid={!!errors.age}
              aria-describedby="error-age"
            />
            {errors.age && (
              <span id="error-age" className="field-error">
                {errors.age}
              </span>
            )}
          </div>

          <div>
            <input
              type="text"
              name="schoolName"
              placeholder="School Name"
              value={formData.schoolName}
              onChange={handleChange}
              className={fieldClass("schoolName")}
              aria-invalid={!!errors.schoolName}
              aria-describedby="error-schoolName"
            />
            {errors.schoolName && (
              <span id="error-schoolName" className="field-error">
                {errors.schoolName}
              </span>
            )}
          </div>

          <div>
            <input
              type="text"
              name="diagnosis"
              placeholder="Diagnosis / Condition"
              value={formData.diagnosis}
              onChange={handleChange}
              className={fieldClass("diagnosis")}
              aria-invalid={!!errors.diagnosis}
              aria-describedby="error-diagnosis"
            />
            {errors.diagnosis && (
              <span id="error-diagnosis" className="field-error">
                {errors.diagnosis}
              </span>
            )}
          </div>

          <div>
            <input
              type="text"
              name="bloodGroup"
              placeholder="Blood Group"
              value={formData.bloodGroup}
              onChange={handleChange}
              className={fieldClass("bloodGroup")}
              aria-invalid={!!errors.bloodGroup}
              aria-describedby="error-bloodGroup"
            />
            {errors.bloodGroup && (
              <span id="error-bloodGroup" className="field-error">
                {errors.bloodGroup}
              </span>
            )}
          </div>

          <div>
            <input
              type="tel"
              name="aadhaar"
              placeholder="Aadhaar Number"
              value={formData.aadhaar}
              onChange={(e) => handleNumberInput(e, 12)}
              className={fieldClass("aadhaar")}
              inputMode="numeric"
              maxLength={12}
              aria-invalid={!!errors.aadhaar}
              aria-describedby="error-aadhaar"
            />
            {errors.aadhaar && (
              <span id="error-aadhaar" className="field-error">
                {errors.aadhaar}
              </span>
            )}
          </div>

          <h3>👨‍👩‍👧 Parent / Guardian Information</h3>

          <div>
            <input
              type="text"
              name="fatherName"
              placeholder="Father Name"
              value={formData.fatherName}
              onChange={handleChange}
              className={fieldClass("fatherName")}
              aria-invalid={!!errors.fatherName}
              aria-describedby="error-fatherName"
            />
            {errors.fatherName && (
              <span id="error-fatherName" className="field-error">
                {errors.fatherName}
              </span>
            )}
          </div>

          <div>
            <input
              type="text"
              name="motherName"
              placeholder="Mother Name"
              value={formData.motherName}
              onChange={handleChange}
              className={fieldClass("motherName")}
              aria-invalid={!!errors.motherName}
              aria-describedby="error-motherName"
            />
            {errors.motherName && (
              <span id="error-motherName" className="field-error">
                {errors.motherName}
              </span>
            )}
          </div>

          <div>
            <input
              type="text"
              name="guardianName"
              placeholder="Guardian Name"
              value={formData.guardianName}
              onChange={handleChange}
              className={fieldClass("guardianName")}
              aria-invalid={!!errors.guardianName}
              aria-describedby="error-guardianName"
            />
            {errors.guardianName && (
              <span id="error-guardianName" className="field-error">
                {errors.guardianName}
              </span>
            )}
          </div>

          <div>
            <input
              type="tel"
              name="contact1"
              placeholder="Contact Number 1"
              value={formData.contact1}
              onChange={(e) => handleNumberInput(e, 10)}
              className={fieldClass("contact1")}
              inputMode="numeric"
              maxLength={10}
              aria-invalid={!!errors.contact1}
              aria-describedby="error-contact1"
            />
            {errors.contact1 && (
              <span id="error-contact1" className="field-error">
                {errors.contact1}
              </span>
            )}
          </div>

          <div>
            <input
              type="tel"
              name="contact2"
              placeholder="Contact Number 2"
              value={formData.contact2}
              onChange={(e) => handleNumberInput(e, 10)}
              className={fieldClass("contact2")}
              inputMode="numeric"
              maxLength={10}
              aria-invalid={!!errors.contact2}
              aria-describedby="error-contact2"
            />
            {errors.contact2 && (
              <span id="error-contact2" className="field-error">
                {errors.contact2}
              </span>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
              className={fieldClass("email")}
              aria-invalid={!!errors.email}
              aria-describedby="error-email"
            />
            {errors.email && (
              <span id="error-email" className="field-error">
                {errors.email}
              </span>
            )}
          </div>

          <div>
            <textarea
              name="address"
              placeholder="Residential Address"
              value={formData.address}
              onChange={handleChange}
              className={fieldClass("address")}
              aria-invalid={!!errors.address}
              aria-describedby="error-address"
            />
            {errors.address && (
              <span id="error-address" className="field-error">
                {errors.address}
              </span>
            )}
          </div>

          <h3>🏥 Medical Information</h3>

          <div>
            <textarea
              name="medications"
              placeholder="Current Medications"
              value={formData.medications}
              onChange={handleChange}
              className={fieldClass("medications")}
            />
            {errors.medications && (
              <span className="field-error">{errors.medications}</span>
            )}
          </div>

          <div>
            <textarea
              name="allergies"
              placeholder="Allergies"
              value={formData.allergies}
              onChange={handleChange}
              className={fieldClass("allergies")}
            />
            {errors.allergies && (
              <span className="field-error">{errors.allergies}</span>
            )}
          </div>

          <div>
            <textarea
              name="medicalHistory"
              placeholder="Medical History"
              value={formData.medicalHistory}
              onChange={handleChange}
              className={fieldClass("medicalHistory")}
            />
            {errors.medicalHistory && (
              <span className="field-error">{errors.medicalHistory}</span>
            )}
          </div>

          <textarea
            name="doctorDetails"
            placeholder="Doctor Details"
            value={formData.doctorDetails}
            onChange={handleChange}
            className="input"
          />

          <textarea
            name="previousTherapy"
            placeholder="Previous Therapy Taken"
            value={formData.previousTherapy}
            onChange={handleChange}
            className="input"
          />

          <div>
            <textarea
              name="strengths"
              placeholder="Student Strengths / Interests"
              value={formData.strengths}
              onChange={handleChange}
              className={fieldClass("strengths")}
            />
            {errors.strengths && (
              <span className="field-error">{errors.strengths}</span>
            )}
          </div>

          <textarea
            name="supportNeeded"
            placeholder="Areas Need Support"
            value={formData.supportNeeded}
            onChange={handleChange}
            className="input"
          />

          <div>
            <select
              name="programSelection"
              value={formData.programSelection}
              onChange={handleChange}
              className={fieldClass("programSelection")}
              required
              aria-invalid={!!errors.programSelection}
              aria-describedby="error-programSelection"
            >
              <option value="">🎯 Select Program</option>
              <option value="Fitness Training">💪 Fitness Training</option>
              <option value="Sensory Activities">🧠 Sensory Activities</option>
              <option value="Sports Training">⚽ Sports Training</option>
              <option value="Swimming">🏊 Swimming</option>
              <option value="Yoga & Meditation">🧘 Yoga & Meditation</option>
              <option value="Brain Gym Activities">🎯 Brain Gym Activities</option>
              <option value="Gross Motor Development">🚶 Gross Motor Development</option>
              <option value="All Program">✅ All</option>
            </select>
            {errors.programSelection && (
              <span id="error-programSelection" className="field-error">
                {errors.programSelection}
              </span>
            )}
          </div>

          <h3>🚨 Emergency Contact</h3>

          <div>
            <input
              type="text"
              required
              name="emergencyName"
              placeholder="Emergency Contact Name"
              value={formData.emergencyName}
              onChange={handleChange}
              className={fieldClass("emergencyName")}
              aria-invalid={!!errors.emergencyName}
              aria-describedby="error-emergencyName"
            />
            {errors.emergencyName && (
              <span id="error-emergencyName" className="field-error">
                {errors.emergencyName}
              </span>
            )}
          </div>

          <div>
            <input
              type="text"
              required
              name="relationship"
              placeholder="Relationship with Student"
              value={formData.relationship}
              onChange={handleChange}
              className={fieldClass("relationship")}
              aria-invalid={!!errors.relationship}
              aria-describedby="error-relationship"
            />
            {errors.relationship && (
              <span id="error-relationship" className="field-error">
                {errors.relationship}
              </span>
            )}
          </div>

          <div>
            <input
              type="tel"
              required
              name="emergencyNumber"
              placeholder="Emergency Contact Number"
              value={formData.emergencyNumber}
              onChange={(e) => handleNumberInput(e, 10)}
              className={fieldClass("emergencyNumber")}
              inputMode="numeric"
              maxLength={10}
              aria-invalid={!!errors.emergencyNumber}
              aria-describedby="error-emergencyNumber"
            />
            {errors.emergencyNumber && (
              <span id="error-emergencyNumber" className="field-error">
                {errors.emergencyNumber}
              </span>
            )}
          </div>

          <button type="submit" disabled={loading} className="submit-button">
            {loading ? (
              <>
                <span className="button-loader" aria-hidden="true" />
                Submitting...
              </>
            ) : (
              "Submit Form"
            )}
          </button>
        </form>
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <p style={{ whiteSpace: "pre-line" }}>{message}</p>

            {showGoogleForm && (
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="google-form-btn"
              >
                Submit via Google Form
              </a>
            )}

            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}