import { useState } from "react";
import Button from "../frontend/components/common/Button";
import TextInput from "../frontend/components/common/TextInput";
import { makeHelloActor } from "../frontend/service/actor-locator";

function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [sex, setSex] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const helloActor = makeHelloActor();
  const [dateOfBirth, setDateOfBirth] = useState("");

  const onFirstNameChange = (e: string) => {
    setFirstName(e);
  };

  const onLastNameChange = (e: string) => {
    setLastName(e);
  };

  const onSexChange = (e: string) => {
    setSex(e);
  };

  const onPhoneChange = (e: string) => {
    setPhone(e);
  };

  const onAddressChange = (e: string) => {
    setAddress(e);
  };

  const onUpdate = async () => {
    const data = {
      name: `${firstName} ${lastName}`,
      birthday: "",
    };
    const result = await helloActor.create_account(data);
  };

  const onCancel = () => { };

  return (
    <div>
      <h1>Update</h1>

      <div className="block">
        <label htmlFor="firstName">First name</label>
        <TextInput placeholder="First name" onchange={onFirstNameChange} value={firstName} />
      </div>

      <div className="block">
        <label htmlFor="lastName">Last name</label>
        <TextInput placeholder="Last name" onchange={onLastNameChange} value={lastName} />
      </div>

      <div className="block">
        <label htmlFor="sex">Sex</label>
        <div className="inline-block">
          <div className="inline-block form-check">
            <input
              className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="inline-block text-gray-800 form-check-label">
              Male
            </label>
          </div>
          <div className="inline-block form-check">
            <input
              className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label className="inline-block text-gray-800 form-check-label">
              Female
            </label>
          </div>
        </div>
      </div>

      <div className="block">
        <label htmlFor="dateOfBirth">Date of birth</label>
        <input
          value={dateOfBirth}
          type="date"
          id="dateOfBirth"
          onChange={(e) => {
            setDateOfBirth(e.target.value);
          }}
        />
      </div>

      <div className="block">
        <label htmlFor="phone">Phone</label>
        <TextInput placeholder="Phone" onchange={onPhoneChange} value={phone} />
      </div>

      <div className="block">
        <label htmlFor="address">Address</label>
        <TextInput placeholder="Address" onchange={onAddressChange} value={address} />
      </div>

      <Button
        children="Update"
        layoutClassName="w-auto"
        onClick={onUpdate}
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
