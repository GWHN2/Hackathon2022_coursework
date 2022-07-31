import { useState } from "react";
import Button from "../frontend/components/common/Button";
import TextInput from "../frontend/components/common/TextInput";

function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [sex, setSex] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const onFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  }

  const onLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  }

  const onSexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSex(e.target.value);
  }

  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  }

  const onAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  }

  const onSave = () => {

  }

  const onCancel = () => {

  }

  return (
    <div>
      <h1>Register</h1>

      <div className="block">
        <label htmlFor="firstName">First name</label>
        <TextInput
          placeholder="First name"
          onChange={onFirstNameChange}
        />
      </div>

      <div className="block">
        <label htmlFor="lastName">Last name</label>
        <TextInput
          placeholder="Last name"
          onChange={onLastNameChange}
        />
      </div>

      <div className="block">
        <label htmlFor="sex">Sex</label>
        <TextInput
          placeholder="Sex"
          onChange={onSexChange}
        />
      </div>

      <div className="block">
        <label htmlFor="phone">Phone</label>
        <TextInput
          placeholder="Phone"
          onChange={onPhoneChange}
        />
      </div>

      <div className="block">
        <label htmlFor="address">Address</label>
        <TextInput
          placeholder="Address"
          onChange={onAddressChange}
        />
      </div>

      <Button
        children="Save"
        layoutClassName="w-auto"
        onClick={onSave}
      ></Button>

      <Button
        children="Cancel"
        layoutClassName="w-auto"
        onClick={onCancel}
      ></Button>


    </div>
  );
}

export default RegisterPage;
