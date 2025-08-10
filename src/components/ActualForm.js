import { useState } from "react";
import "./ActualForm.css";

const ActualForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isVisible: false,
  });
  console.log(formData);

  const changeHandler = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
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
            value={formData.firstName}
            autoComplete="firstName"
          />
        </div>

        <div className="form-inputs">
          <label htmlFor="last-name">Last Name: </label>
          <input
            id="last-name"
            name="lastName"
            type="text"
            placeholder="Enter last name"
            autoComplete="lastName"
            onChange={changeHandler}
            value={formData.lastName}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Enter email:"
            value={formData.email}
            onChange={changeHandler}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="comments">Address: </label>
          <textarea
            id="comments"
            name="comment"
            autoComplete="no comments..!"
            rows={4}
            cols={50}
            placeholder="Enter Comments"
            value={formData.comment}
            onChange={changeHandler}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="isVisible"> am I visible</label>
          <input
            type="checkbox"
            id="isVisible"
            
            onChange={changeHandler}
            name="isVisible"
            checked={formData.isVisible}
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
        <h3>Comments: {formData.comment}</h3>
        <h3>isVisible: {formData.isVisible ? "Yes" : "No"}</h3>
      </div>
    </>
  );
};

export default ActualForm;
