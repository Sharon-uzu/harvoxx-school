import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Supabase } from "../config/supabase-config";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const Apply = () => {
  const [team, setTeam] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'auto'; // Enable scrolling
  }, [pathname]);

  const initialValues = {
    name: "",
    email: "",
    gender: "",
    state: "",
    age: "",
    product: "",
    link: "",
    team: "",
    noOfTeam: "",
    noOfTeamComing: "",
    desc: "",
    fb: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    phone: "",
    image: "",
  };

  const [form1, setForm1] = useState(true);
  const [form2, setForm2] = useState(false);
  const [formData, setFormData] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploading(true);
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      Supabase.storage
        .from('python-brand-logo') //bucket name
        .upload(filePath, file)
        .then(({ error, data }) => {
          if (error) {
            throw error;
          }
          console.log('Uploaded file:', data); // Log the returned file data
          setFormData({ ...formData, image: data.Key || data.path });
        })
        .catch((error) => {
          console.error('Error uploading file:', error.message);
        })
        .finally(() => {
          setUploading(false);
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formData);
      Supabase.from("python-applicants")
        .upsert([
          {
            name: formData.name,
            email: formData.email,
            metadata: formData,
          },
        ])
        .then((response) => {
          console.log(response);
          navigate("/steps");
        })
        .catch((error) => {
          console.error('Error submitting form:', error.message);
        });
    }
  }, [formErrors, isSubmit]);

  const formCompletion = (values) => {
    setForm1(false);
    setForm2(true);
  };

  const formC = () => {
    setForm1(true);
    setForm2(false);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = "Full name is required";
      alert('Full name is required');
    } else if (!values.phone) {
      errors.phone = "Phone number is required";
      alert('Phone number is required');

    } else if (!values.email) {
      errors.email = "Email is required";
      alert('Email is required');

    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
      alert('This is not a valid email');

    } else if (!values.gender) {
      errors.gender = "Select your gender";
      alert('Select a gender');

    } else if (!values.age) {
      errors.age = "Age range is required";
      alert('Age range is required');

    } else if (!values.product) {
      errors.product = "Product name is required";
      alert('Product name is required');

    }else if (!values.image) {
      errors.image = "Image is required";
      alert('Image is required')
      
    } else if (!values.link) {
      errors.link = "Web or App link is required";
    } else if (!values.team) {
      errors.team = "Do you have a team?";
    } else if (!values.noOfTeam) {
      errors.noOfTeam = "Number of team members is required";
    } else if (!values.noOfTeamComing) {
      errors.noOfTeamComing = "Number of team members coming is required";
    } else if (!values.desc) {
      errors.desc = "Product description is required";
    } else if (!values.fb) {
      errors.fb = "Facebook link is required";
    } else if (!values.instagram) {
      errors.instagram = "Instagram link is required";
    } else if (!values.linkedin) {
      errors.linkedin = "Linkedin link is required";
    } else if (!values.twitter) {
      errors.twitter = "Twitter link is required";
    } 
    return errors;
  };

  const teamMember = (event) => {
    const selectedValue = event.target.value;
    setFormData({
      ...formData,
      team: selectedValue,
    });

    if (selectedValue === "yes") {
      setTeam(true);
    } else if (selectedValue === "no") {
      setTeam(false);
    }
  };

  return (
    <div>
      <Header />

      <div className='apply'>
        {form1 ? (
          <>
            <h2>Registration Form</h2>

            <label htmlFor="">
              <p>Name Of Representative</p>
              <input type="text" name="name"
                value={formData.name}
                onChange={handleChange} />
              <p style={{ color: "red", fontSize: "14px" }}>
                {formErrors.name}
              </p>
            </label>

            <label htmlFor="">
              <p>Email</p>
              <input type="email" name="email"
                value={formData.email}
                onChange={handleChange} />
              <p style={{ color: "red", fontSize: "14px" }}>
                {formErrors.email}
              </p>
            </label>

            <label htmlFor="">
              <p>Phone Number</p>
              <input type="tel" name="phone"
                value={formData.phone}
                onChange={handleChange} />
              <p style={{ color: "red", fontSize: "14px" }}>
                {formErrors.phone}
              </p>
            </label>

            <label htmlFor="">
              <p>Gender</p>
              <select name="gender" id=""
                value={formData.gender}
                onChange={handleChange}>
                <option value={null}>Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <p style={{ color: "red", fontSize: "14px" }}>
                {formErrors.gender}
              </p>
            </label>

            <label htmlFor="">
              <p>States</p>
              <select name="state" id=""
                value={formData.state}
                onChange={handleChange}>
                <option value={null}>Select state</option>
                <option value="Abia">Abia</option>
                <option value="Akwa Ibom">Akwa Ibom</option>
                <option value="Anambra">Anambra</option>
                <option value="Bayelsa">Bayelsa</option>
                <option value="Cross River">Cross River</option>
                <option value="Delta">Delta</option>
                <option value="Ebonyi">Ebonyi</option>
                <option value="Edo">Edo</option>
                <option value="Enugu">Enugu</option>
                <option value="Imo">Imo</option>
                <option value="Rivers">Rivers</option>
              </select>
              <p style={{ color: "red", fontSize: "14px" }}>
                {formErrors.state}
              </p>
            </label>

            <label htmlFor="">
              <p>Age Range</p>
              <select name="age" id=""
                value={formData.age}
                onChange={handleChange}>
                <option value={null}>Select age range</option>
                <option value="11-20">11 - 20</option>
                <option value="21-35">21 - 35</option>
                <option value="36-45">36 - 45</option>
              </select>
              <p style={{ color: "red", fontSize: "14px" }}>
                {formErrors.age}
              </p>
            </label>

            <label htmlFor="">
              <p>Product Name</p>
              <input type="text" name="product"
                value={formData.product}
                onChange={handleChange} />
              <p style={{ color: "red", fontSize: "14px" }}>
                {formErrors.product}
              </p>
            </label>

            <label htmlFor="">
              <p>Upload Product Image</p>
              <input type="file" name="image"
                onChange={handleFileChange} />
              {uploading && <p>Uploading...</p>}
              <p style={{ color: "red", fontSize: "14px" }}>
                {formErrors.image}
              </p>
            </label>

            <div className="btns">
              <h2 className="btn" onClick={formCompletion}>Continue</h2>
            </div>
          </>
        ) : null}

        {form2 ? (
          <>
            <div className="arrow-back">
              <span className='bk' onClick={formC}><IoArrowBackCircleOutline className='py-i' /><span>Back</span></span>
            </div>

            <label htmlFor="">
              <p>Website/App link</p>
              <input type="text" name="link"
                value={formData.link}
                onChange={handleChange} />
              <p style={{ color: "red", fontSize: "14px" }}>
                {formErrors.link}
              </p>
            </label>

            <label htmlFor="">
              <p>Do you have team members</p>
              <select name="team" id=""
                value={formData.team}
                onChange={teamMember}>
                <option value={null}>Do you have team members?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <p style={{ color: "red", fontSize: "14px" }}>
                {formErrors.team}
              </p>
            </label>

            {team ? (
              <>
                <label htmlFor="">
                  <p>Number of team members</p>
                  <select name="noOfTeam" id=""
                    value={formData.noOfTeam}
                    onChange={handleChange}>
                    <option value={null}>No. of team members</option>
                    <option value="1member">1</option>
                    <option value="2members">2</option>
                    <option value="3members">3</option>
                    <option value="4members">4</option>
                    <option value="5members">5</option>
                    <option value="6members">6</option>
                  </select>
                  <p style={{ color: "red", fontSize: "14px" }}>
                    {formErrors.noOfTeam}
                  </p>
                </label>

                <label htmlFor="">
                  <p>No. of team members coming</p>
                  <select name="noOfTeamComing" id=""
                    value={formData.noOfTeamComing}
                    onChange={handleChange}>
                    <option value={null}>No. of team members coming</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                  <p style={{ color: "red", fontSize: "14px" }}>
                    {formErrors.noOfTeamComing}
                  </p>
                </label>
              </>
            ) : null}

            <label htmlFor="">
              <p>Brief product description</p>
              <textarea name="desc" id="" cols="30" rows="10"
                value={formData.desc}
                onChange={handleChange}></textarea>
              <p style={{ color: "red", fontSize: "14px" }}>
                {formErrors.desc}
              </p>
            </label>

            <label htmlFor="">
              <p>Social Media Handles</p>
              <div className="sos">
                <input type="text" name="fb" placeholder='facebook link'
                  value={formData.fb}
                  onChange={handleChange} />
                <p style={{ color: "red", fontSize: "14px" }}>
                  {formErrors.fb}
                </p>
                <input type="text" name="instagram" placeholder='instagram link'
                  value={formData.instagram}
                  onChange={handleChange} />
                <p style={{ color: "red", fontSize: "14px" }}>
                  {formErrors.instagram}
                </p>
                <input type="text" name="linkedin" placeholder='linkedin link'
                  value={formData.linkedin}
                  onChange={handleChange} />
                <p style={{ color: "red", fontSize: "14px" }}>
                  {formErrors.linkedin}
                </p>
                <input type="text" name="twitter" placeholder='X link'
                  value={formData.twitter}
                  onChange={handleChange} />
              </div>
              <p style={{ color: "red", fontSize: "14px" }}>
                {formErrors.twitter}
              </p>
            </label>

            <div className="btns btnss">
              <button className="btn" onClick={handleSubmit}>Apply</button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default Apply;
