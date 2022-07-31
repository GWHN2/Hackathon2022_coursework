import { count } from "console";
import { useState } from "react";
import { useRecoilState } from "recoil";
import Button from "../frontend/components/common/Button";
import TextInput from "../frontend/components/common/TextInput";
import { CountIDState } from "../frontend/data/globalState";
import { makeHelloActor } from "../frontend/service/actor-locator";

function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [sex, setSex] = useState(false);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const helloActor = makeHelloActor();
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [CountID, setCountID] = useRecoilState(CountIDState);

  const onFirstNameChange = (e: string) => {
    setFirstName(e);
  };

  const onLastNameChange = (e: string) => {
    setLastName(e);
  };

  const onPhoneChange = (e: string) => {
    setPhone(e);
  };

  const onAddressChange = (e: string) => {
    setAddress(e);
  };

  const onSave = async () => {
    const data = {
      name: `${firstName} ${lastName}`,
      birthday: dateOfBirth,
      phone: phone,
      address: address,
      sex: sex,
    };
    const result = await helloActor.create_account(data);
    if (result) {
      setCountID(CountID + 1);
    }
  };

  const onCancel = () => {};

  return (
    <div>
      <h1>Register</h1>

      <div className="block">
        <label htmlFor="firstName">First name</label>
        <TextInput placeholder="First name" onchange={onFirstNameChange} />
      </div>

      <div className="block">
        <label htmlFor="lastName">Last name</label>
        <TextInput placeholder="Last name" onchange={onLastNameChange} />
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
              checked={sex}
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
              checked={sex}
              onChange={(e) => {
                setSex(e.target.checked);
              }}
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
        <TextInput placeholder="Phone" onchange={onPhoneChange} />
      </div>

      <div className="block">
        <label htmlFor="address">Address</label>
        <TextInput placeholder="Address" onchange={onAddressChange} />
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
