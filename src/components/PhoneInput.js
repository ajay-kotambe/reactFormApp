import { useState } from "react";

export default function PhoneInput() {
  const [phone, setPhone] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    // Allow only numbers (remove anything else)
    if (/^\d*$/.test(value)) {
      setPhone(value);
    }
  };

  return (
    <div>
      <label>
        Phone Number:
        <input
          type="text"
          value={phone}
          onChange={handleChange}
          placeholder="Enter phone number"
        />
      </label>
      <p>Current value: {phone}</p>
    </div>
  );
}
