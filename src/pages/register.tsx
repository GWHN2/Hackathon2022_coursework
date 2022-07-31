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
        <div className="inline-block">
          <div className="form-check inline-block">
            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label className="form-check-label inline-block text-gray-800" >
              Male
            </label>
          </div>
          <div className="form-check inline-block">
            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
            <label className="form-check-label inline-block text-gray-800" >
              Female
            </label>
          </div>
        </div>
      </div>

      <div className="block">
        <label htmlFor="dateOfBirth">Date of birth</label>

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
