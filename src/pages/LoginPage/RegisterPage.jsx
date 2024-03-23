import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  // const addData = async (data) => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3001/CAuth/register",
  //       data,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    phoneNo: "",
    state: "",
    country: "",
    district: "",
    email: "",
    password: "",
    confirmPassword: "",
    language: "",
    skillset: [],
    experience: "",
    customers: [],
    hrate: "",
    wrate: "",
    mrate: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      if (checked) {
        setFormData((prevData) => ({
          ...prevData,
          skillset: [...prevData.skillset, name],
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          skillset: prevData.skillset.filter((skill) => skill !== name),
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};
    if (!formData.firstName) {
      validationErrors.firstName = "First Name is required.";
    }
    if (!formData.lastName) {
      validationErrors.lastName = "Last Name is required.";
    }
    if (!formData.age) {
      validationErrors.age = "age";
    }
    if (!formData.phoneNo) {
      validationErrors.phoneNo = "Phone No is required.";
    }
    if (!formData.gender) {
      validationErrors.gender = "Gender is required.";
    }
    if (!formData.confirmPassword) {
      validationErrors.confirmPassword = " confirm password is required.";
    }
    if (!formData.state) {
      validationErrors.state = "state is required.";
    }
    if (!formData.district) {
      validationErrors.district = "district is required.";
    }
    if (!formData.country) {
      validationErrors.country = "country is required.";
    }
    if (!formData.language) {
      validationErrors.language = "language is required.";
    }
    if (!formData.skillset) {
      validationErrors.skillset = "skills are required";
    }
    if (!formData.experience) {
      validationErrors.experience = "experience is required";
    }

    // Basic email validation (example)
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        formData.email
      )
    ) {
      validationErrors.email = "Invalid email address.";
    }
    if (!formData.password || formData.password.length < 8) {
      validationErrors.password =
        "Password must be at least 8 characters long.";
    }
    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match.";
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      let abc = formData;
      setFormData(abc);
      console.log(abc);
    }
  };
  return (
    <div className="w-full h-auto bg-backGround flex flex-col items-center justify-center ">
      <div className="w-full sm:w-[70%] h-full flex flex-row items-center justify-center sm:p-10 p-3">
        <form
          action=""
          onSubmit={handleSubmit}
          className="w-[90%] sm:w-full p-7  h-full rounded-lg  bg-green-600"
        >
          <div className="w-full flex items-center justify-center mt-5 mb-5 h-auto ">
            <h1 className="font-semibold text-lg">Worker Registration</h1>
          </div>
          <div className="mb-5  flex flex-col items-center justify-center">
            <div className="sm:w-[50%] w-full h-full  sm:h-auto  flex justify-center flex-col">
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                First Name
              </label>

              <input
                type="text"
                id="firstName"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
                className={`bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex w-full p-2.5 `}
              />

              {errors.firstName && (
                <p className="text-red-500  text-[0.55rem]">
                  {errors.firstName}
                </p>
              )}
            </div>
          </div>
          {/* first */}
          <div className="mb-5  flex flex-col items-center justify-center">
            <div className="sm:w-[50%] w-full h-full  sm:h-auto  flex justify-center flex-col">
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Last Name
              </label>

              <input
                type="text"
                id="lastName"
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}
                className={`bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex w-full p-2.5 `}
              />

              {errors.lastName && (
                <p className="text-red-500  text-[0.55rem]">
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>
          {/* last */}
          <div className="mb-5 flex flex-col  items-center justify-center">
            <div className="sm:w-[50%] w-full h-full  sm:h-auto just flex flex-col">
              <label
                htmlFor="gender"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={` px-5 py-2 border w-[60%] sm:w-[40%]  border-gray-30  rounded-md text-gray-500 `}
              >
                <option value="" className="text-gray-500 ">
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">others</option>
              </select>
              {errors.gender && (
                <p className="text-red-500  text-[0.55rem]">{errors.gender}</p>
              )}
            </div>
          </div>
          {/*gender*/}
          <div className="mb-5 flex flex-col  items-center justify-center ">
            <div className="sm:w-[50%] w-full h-full  sm:h-auto just flex flex-col">
              <label
                htmlFor="age"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                min={18}
                max={100}
                value={formData.age}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20%] p-2.5
      "
              />

              {errors.age && (
                <p className="text-red-500 text-[0.55rem]">{errors.age}</p>
              )}
            </div>
          </div>
          {/* age */}
          <div className="mb-5 flex flex-col  items-center justify-center">
            <div className="sm:w-[50%] w-full h-full  sm:h-auto just flex flex-col">
              <label
                htmlFor="phoneNo"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Phone No
              </label>
              <div className="relative w-full items-start flex flex-col ">
                <span className="absolute inset-y-0 text-sm start-0 flex items-center px-2 pointer-events-none">
                  +91
                </span>
                <input
                  type="number"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  id="phoneNo"
                  className="bg-gray-50 border border-gray-300 ps-10 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[70%] sm:w-[50%] p-2.5"
                />
              </div>
              {errors.phoneNo && (
                <p className="text-red-500  text-[0.55rem]">{errors.phoneNo}</p>
              )}
            </div>
          </div>
          {/* phone No */}
          <div className="mb-5  flex flex-col items-center justify-center">
            <div className="sm:w-[50%] w-full h-full  sm:h-auto  flex justify-center flex-col">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                className={`bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex w-full p-2.5 `}
              />

              {errors.email && (
                <p className="text-red-500  text-[0.55rem]">{errors.email}</p>
              )}
            </div>
          </div>
          {/* email */}
          <div className="mb-5  flex flex-col items-center justify-center">
            <div className="sm:w-[50%] w-full h-full  sm:h-auto  flex justify-center flex-col">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                password
              </label>

              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                value={formData.password}
                className={`bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex w-full p-2.5 `}
              />

              {errors.password && (
                <p className="text-red-500  text-[0.55rem]">
                  {errors.password}
                </p>
              )}
            </div>
          </div>
          {/* pass */}
          <div className="mb-5  flex flex-col items-center justify-center">
            <div className="sm:w-[50%] w-full h-full  sm:h-auto  flex justify-center flex-col">
              <label
                htmlFor="=confirmPassword"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Last Name
              </label>

              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                onChange={handleChange}
                value={formData.confirmPassword}
                className={`bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex w-full p-2.5 `}
              />

              {errors.confirmPassword && (
                <p className="text-red-500  text-[0.55rem]">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>
          {/* confirm */}
          <div className="mb-5  flex flex-col items-center justify-center">
            <div className="sm:w-[50%] w-full h-full  sm:h-auto  flex justify-center flex-col">
              <label
                htmlFor="district"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                district
              </label>

              <input
                type="text"
                id="district"
                name="district"
                onChange={handleChange}
                value={formData.district}
                className={`bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex w-full p-2.5 `}
              />
              {errors.district && (
                <p className="text-red-500  text-[0.55rem]">
                  {errors.district}
                </p>
              )}
            </div>
          </div>
          {/* district */}

          <div className="mb-5  flex flex-col items-center justify-center">
            <div className="sm:w-[50%] w-full h-full  sm:h-auto  flex justify-center flex-col">
              <label
                htmlFor="state"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                State
              </label>

              <input
                type="text"
                id="state"
                name="state"
                onChange={handleChange}
                value={formData.state}
                className={`bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex w-full p-2.5 `}
              />

              {errors.state && (
                <p className="text-red-500  text-[0.55rem]">{errors.state}</p>
              )}
            </div>
          </div>
          {/* state */}
          <div className="mb-5  flex flex-col items-center justify-center">
            <div className="sm:w-[50%] w-full h-full  sm:h-auto  flex justify-center flex-col">
              <label
                htmlFor="country"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Country
              </label>

              <input
                type="text"
                id="country"
                name="country"
                onChange={handleChange}
                value={formData.country}
                className={`bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex w-full p-2.5 `}
              />

              {errors.country && (
                <p className="text-red-500  text-[0.55rem]">{errors.country}</p>
              )}
            </div>
          </div>
          {/* country */}
          <div className="mb-5  flex flex-col items-center justify-center">
            <div className="sm:w-[50%] w-full h-full  sm:h-auto  flex justify-center flex-col">
              <label
                htmlFor="language"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                language
              </label>

              <input
                type="text"
                id="language"
                name="language"
                onChange={handleChange}
                value={formData.language}
                className={`bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex w-full p-2.5 `}
              />

              {errors.language && (
                <p className="text-red-500  text-[0.55rem]">
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>
          {/* language */}
          <div className="mb-5  flex flex-col items-center justify-center">
            <div className="sm:w-[50%] w-full h-full  sm:h-auto  flex justify-center flex-col">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Skills
              </label>
              <div className="grid  grid-flow-row gap-4 ">
                <div className="flex  items-center">
                  <input
                    type="checkbox"
                    id="Dusting & Wiping"
                    name="Dusting & Wiping"
                    checked={formData.skillset.includes("Dusting & Wiping")}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="Dusting & Wiping">Dusting & Wiping</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="Total Cleaning"
                    name="Total Cleaning"
                    checked={formData.skillset.includes("Total Cleaning")}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="Total Cleaning">Total Cleaning</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="brooming"
                    name="brooming"
                    checked={formData.skillset.includes("brooming")}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="brooming">Brooming</label>
                </div>
              </div>
              {errors.skillset && (
                <p className="text-red-500 text-[0.55rem]">{errors.skillset}</p>
              )}{" "}
            </div>
          </div>

          <div className="mb-5  flex flex-col items-center justify-center">
            <div className="sm:w-[50%] w-full h-full  sm:h-auto  flex justify-center flex-col">
              <label
                htmlFor="experience"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Experience
              </label>

              <input
                type="number"
                min={1}
                id="experience"
                name="experience"
                onChange={handleChange}
                value={formData.experience}
                className={`bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex w-[50%] p-2.5 `}
              />

              {errors.experience && (
                <p className="text-red-500  text-[0.55rem]">
                  {errors.experience}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center  justify-center w-full">
            <button
              type="submit"
              className="  sm:px-5  sm:py-2 px-4 py-2.5 sm:m-2 m-0 bg-backGround text-white rounded-md hover:bg-backGround  font-semibold"
            >
              SUBMIT
            </button>
          </div>
          <div className="w-full h-[20%] mt-5 justify-center  items-center flex">
            <div className=" w-full h-[50%] text-white flex flex-row gap-3 items-center justify-center ">
              <p> Have an Account</p>
              <Link
                to="/login"
                className="text-backGround font-semibold hover:text-green-500  ease-linear text-lg "
              >
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
