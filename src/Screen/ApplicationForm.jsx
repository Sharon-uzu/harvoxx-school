import React, { useState, useEffect } from "react";
import logo from "../Images/logo.png";
import pix from "../Images/business-3d-three-young-women-with-phones 1.png";
import shape from "../Images/Ellipse 11.png";
import { Link, useNavigate } from "react-router-dom";
import { Supabase } from "../config/supabase-config";
import Modal from "react-modal";
import { validCodes } from "../utils/Data";

const ApplicationForm = () => {
  // REACT MODAL
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // let [formData, setFormData] = useState({});
  const initialValues = {
    fullname: "",
    gender: "",
    age: "",
    email: "",
    address: "",
    course: "",
    phone: "",
    code: "",
  };
  

  const [formData, setFormData] = useState(initialValues);

  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    // const {fullname, value} = e.target;
    setFormData({ ...formData, fullname: e.target.value });
    console.log(formData);
  };

  // code section starts here

  const [inputValue, setInputValue] = useState("");

  // Your array of valid codes
  // const isInArray = validCodes.includes(formData.code);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const checkInputAgainstArray = (input) => {
    return validCodes.some((value) => value === input);
  };

  // code section ends here

  const handleSubmit = (e) => {
    setFormErrors(validate(formData));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formData);
    }
  }, [formErrors]);

//   const validate = (values) => {
//     const errors = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

//     if (inputValue.trim() !== "" && !checkInputAgainstArray(inputValue)) {
//       // console.log('Input value does not match any value in the array:', inputValue);
//       // Handle the case when inputValue doesn't match any value in the array
//       errors.code = inputValue + " is an invalid code";
//     } else if (!values.fullname) {
//       errors.fullname = "Full name is required";
//     } else if (!values.phone) {
//       errors.phone = "Phone number is required";
//     } else if (!values.email) {
//       errors.email = "Full name is required";
//     } else if (!regex.test(values.email)) {
//       errors.email = "This is not a valid email";
//     } else if (!values.gender) {
//       errors.gender = "Select your gender";
//     } else if (!values.age) {
//       errors.age = "Age range is required";
//     } else if (!values.course) {
//       errors.course = "Select preferred course";
//     } else if (!values.address) {
//       errors.address = "Fill in your address";
//     } else {
//       // check if code is used
// console.log("started....")
//       Supabase.from("user_public")
//         .select()
//         .eq("code", inputValue)
//         .then((res) => {
//           console.log("fetched......")
//           if (res.data.length > 0) {
//             errors.code = inputValue + " has already";
//           } else {
//             Supabase.from("user_public")
//               .upsert([
//                 {
//                   name: formData.fullname,
//                   email: formData.email,
//                   metadata: formData,
//                   code:inputValue
//                 },
//               ])
              
//               .then((response) => {
//                 console.log("inderted....")
//                 console.log(response);
//                 setIsOpen(true);
//                 // navigate("/Congrat");
//               });
//           }
//         })
//         .catch((error) => {});
//     }
//     return errors;
//   };

const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (inputValue.trim() !== "" && !checkInputAgainstArray(inputValue)) {
    // console.log('Input value does not match any value in the array:', inputValue);
    // Handle the case when inputValue doesn't match any value in the array
    errors.code = inputValue + " is an invalid code";
  }
   else if (!values.fullname) {
    errors.fullname = "Full name is required";
  } else if (!values.phone) {
    errors.phone = "Phone number is required";
  } else if (!values.email) {
    errors.email = "Full name is required";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email";
  } else if (!values.gender) {
    errors.gender = "Select your gender";
  } else if (!values.age) {
    errors.age = "Age range is required";
  } else if (!values.course) {
    errors.course = "Select preferred course";
  } else if (!values.address) {
    errors.address = "Fill in your address";
  } else if(inputValue.length > 0){
          // check if code is used
    console.log("started....")
          Supabase.from("user_public")
            .select()
            .eq("code", inputValue)
            .then((res) => {
              console.log("fetched......")
              if (res.data.length > 0) {
                errors.code = inputValue + " has already been used";

                alert('Code has already been used')
              } else {
                Supabase.from("user_public")
                  .upsert([
                    {
                      name: formData.fullname,
                      email: formData.email,
                      metadata: formData,
                      code:inputValue
                    },
                  ])
                  
                  .then((response) => {
                    console.log("inderted....")
                    console.log(response);
                    setIsOpen(true);
                    // navigate("/Congrat");
                  });
              }
            })
            // .catch((error) => {});
        }
        else{
          Supabase.from("user_public")
      .upsert([
        {
          name: formData.fullname,
          email: formData.email,
          metadata: formData,
          code:inputValue
        },
      ])
      .then((response) => {
        console.log(response);
        setIsOpen(true);
        // navigate("/Congrat");
      });
        }
  return errors;
};


  const navigate = useNavigate();

  const saveItem = () => {
    // setFormErrors(validate(formData));
    // validate();
    // after validations
    console.log(
      "Started................................................................"
    );
    // crate a record in a public supabase schema.
    Supabase.from("user_public")
      .upsert([
        {
          name: formData.fullname,
          email: formData.email,
          metadata: formData,
        },
      ])
      .then((response) => {
        console.log(response);
        setIsOpen(true);
        // navigate("/Congrat");
      });
    // console.log(formData)

    // return errors;
  };

  const congrat = () => {
    navigate("/Congrat");
  };

  return (
    <div className="application">
      <div className="form-text">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <h2>
          "Embrace the power of learning tech skills, for with each new skill
          you acquire, you unlock the door to innovation and shape a brighter
          future for yourself and the world."
        </h2>
        <div className="pix1">
          <img src={pix} alt="" />
        </div>
        <img src={shape} alt="" className="pix2" />
      </div>

      <div className="formHolder">
        <h4>Application for DSP-300</h4>
        <p>Fill in your Details</p>
        <div className="form">
          <label htmlFor="name">
            <p>Fullname</p>
            <input
              type="text"
              name="fullname"
              placeholder="Enter First Name"
              value={formData.fullname}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  fullname: e.target.value,
                });
              }}
            />
            <p style={{ color: "red", fontSize: "14px" }}>
              {formErrors.fullname}
            </p>
          </label>

          <label htmlFor="">
            <p>Phone Number</p>
            <input
              value={formData.phone}
              type="tel"
              name=""
              id=""
              placeholder="07012345575"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  phone: e.target.value,
                });
              }}
            />
            <p style={{ color: "red", fontSize: "14px" }}>{formErrors.phone}</p>
          </label>

          <label htmlFor="">
            <p>Email Address</p>
            <input
              type="email"
              name=""
              id=""
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  email: e.target.value,
                });
              }}
            />
            <p style={{ color: "red", fontSize: "14px" }}>{formErrors.email}</p>
          </label>

          <label htmlFor="">
            {" "}
            <p>Gender</p>
            <select
              value={formData.gender}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  gender: e.target.value,
                });
              }}
              id=""
            >
              <option value={null} style={{ fontSize: "10px" }}>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <p style={{ color: "red", fontSize: "14px" }}>
              {formErrors.gender}
            </p>
          </label>

          <label htmlFor="">
            <p>Age Range</p>

            <select
              value={formData.age}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  age: e.target.value,
                });
              }}
              id=""
            >
              <option value={null} style={{ fontSize: "10px" }}>
                Select Age Range
              </option>
              <option value="1">18 - 25</option>
              <option value="2">26 - 30</option>
              <option value="3">31 - 35</option>
            </select>
            <p style={{ color: "red", fontSize: "14px" }}>{formErrors.age}</p>
          </label>

          <label htmlFor="">
            {" "}
            <p>Select Course</p>
            <select
              value={formData.course}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  course: e.target.value,
                });
              }}
              id=""
            >
              <option value={null}>Select Course</option>
              <option value="1">Product Design</option>
              <option value="2">Cybersecurity</option>
              <option value="3">Data Analysis</option>
              <option value="4">Frontend</option>
            </select>
            <p style={{ color: "red", fontSize: "14px" }}>
              {formErrors.course}
            </p>
          </label>

          <label htmlFor="">
            <p>Residential Address/Location</p>
            <input
              value={formData.address}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  address: e.target.value,
                });
              }}
              type="text"
              name=""
              id=""
              placeholder="Enter your home address"
            />
            <p style={{ color: "red", fontSize: "14px" }}>
              {formErrors.address}
            </p>
          </label>

          <label htmlFor="referral-code">
            <p>Recommendation Code(Optional)</p>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="optional"
            />
            <p style={{ color: "red", fontSize: "14px" }}>{formErrors.code}</p>
          </label>
        </div>
        <div className="submit">
          <button type="submit" onClick={handleSubmit}>
            Enroll
          </button>
        </div>
      </div>

      {/* MODAL */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Example Modal"
        className="two"
        style={{
          overlay: {
            position: "fixed",
            top: "0px",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 12,
            // backgroundColor: "hsl(0, 0%, 0%, .5)",
            backgroundColor: "hsl(0, 0%, 0%, .6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <div className="confirm">
          <h1>Requirements</h1>
          <ul>
            <li>Laptop</li>
            <li>Internet Access</li>
          </ul>
          <button type="button" onClick={congrat}>
            Confirm Application
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ApplicationForm;
