import { useState } from "react";
import "./ActualForm.css";

const ActualForm = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "",email:" "});
 
  const changeHandler = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form action="" className="actual-form childs" onSubmit={submitHandler}>
        <div className="form-inputs">
          <label htmlFor="first-name">First Name: </label>
          <input
            id="first-name"
            type="text"
            placeholder="Enter first name"
            onChange={changeHandler}
            name="firstName"
          />
        </div>

        <div className="form-inputs">
          <label htmlFor="last-name">Last Name: </label>
          <input
            id="last-name"
            name="lastName"
            type="text"
            placeholder="Enter last name"
            onChange={changeHandler}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="last-name">Email: </label>
          <input
            id="last-name"
            name="email"
            type="email"
            placeholder="Enter email:"
            onChange={changeHandler}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
      <div className="output-div childs">
        <h3>FirstName: {formData.firstName}</h3>
        <h3>LastName: {formData.lastName}</h3>
        <h3>Email: {formData.email}</h3>
      </div>
    </>
  );
};

export default ActualForm;
