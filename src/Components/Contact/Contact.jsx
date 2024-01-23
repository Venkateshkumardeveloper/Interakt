import React, { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    gender: "",
    phone: "",
    dob: "",
    area:''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted with data:", formData);

    setFormData({
      username: "",
      email: "",
      gender: "",
      phone: "",
      dob: "",
      area:''
    });
  };

  return (
    <>
      <div className={styles.contactmain}>
        <div>
          <h3 className={styles.contacttext}>Details</h3>
        </div>
        <div className={styles.formdetails}>
          <form onSubmit={handleSubmit}>
            <div className={styles.label}>
            <label className={styles.labelitems}>
              Name:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                style={{ width: "15rem", height: "1.25rem" }}
                placeholder="username"
              />
            </label>
            </div>
            <div className={styles.label}>
            <label htmlFor="" className={styles.labelitems}>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleInputChange}
                style={{ width: "15rem", height: "1.25rem" }}
              />
            </label>
            </div>
            <div className={styles.label}>
            <label htmlFor="" className={styles.labelitems}>
              Gender:
              <select
                type="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                style={{ width: "15rem", height: "1.25rem" }}
              >
                <option value="">-- Select --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
            </div>
            <div className={styles.label1}>
            <label htmlFor="" className={styles.labelitems}>
              Whatsapp No:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                placeholder="phone"
                pattern="[0-9]{10}" required
                maxLength={10}
                onChange={handleInputChange}
                style={{ width: "15rem", height: "1.25rem" }}
                className={styles.number}
              />
            </label>
            </div>
            <div className={styles.label1}>
            <label htmlFor="" className={styles.labelitems}>
              Date of Birth:
              <input
                type="date"
                name="dob"
                value={formData.dob}
                placeholder="dob"
                onChange={handleInputChange}
                style={{ width: "15rem", height: "1.25rem" }}
              />
            </label>
            </div>
            leave a comment:
            <div className={styles.label2}>
            <textarea
              name="area"
              value={formData.area}
              onChange={handleInputChange}
              id=""
              cols="30"
              rows="10"
              style={{ width: "15rem", height: "1.25rem" }}
              className={styles.textarea}
            ></textarea>
          
            <button type="submit" className={styles.contactbtn}>
              Submit
            </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
