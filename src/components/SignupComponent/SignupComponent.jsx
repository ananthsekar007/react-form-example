import React, { useState } from "react";
import { InputComponent as Input } from "../InputComponent/InputComponent";
import { ButtonComponent as Button } from "../ButtonComponent/ButtonComponent";
import { ModalComponent } from "../ModalComponent/ModalComponent";
import "react-responsive-modal/styles.css";

export const SignupComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [signupDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    mobileNumber: "",
  });

  const onOpenModal = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const onCloseModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    setSignUpDetails({ ...signupDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-96 bg-white rounded shadow hover:shadow-xl">
      <form className="flex flex-col p-10 space-y-5" onSubmit={onOpenModal}>
        <p className="text-xl font-semibold">Sign Up</p>
        <div className="flex space-x-2">
          <Input
            placeholder="First Name"
            value={signupDetails.firstName}
            type="text"
            name="firstName"
            onChange={handleInputChange}
          />
          <Input
            placeholder="Last Name"
            value={signupDetails.lastName}
            type="text"
            name="lastName"
            onChange={handleInputChange}
          />
        </div>
        <Input
          placeholder="Email"
          value={signupDetails.email}
          type="email"
          name="email"
          onChange={handleInputChange}
        />
        <Input
          placeholder="User Name"
          value={signupDetails.username}
          type="text"
          name="username"
          onChange={handleInputChange}
        />
        <Input
          placeholder="Password"
          value={signupDetails.password}
          type="password"
          name="password"
          onChange={handleInputChange}
        />
        <Input
          placeholder="Mobile Number"
          value={signupDetails.mobileNumber}
          type="tel"
          name="mobileNumber"
          onChange={handleInputChange}
        />
        <Button type="submit" buttonText={"Sign Up"} />
        <ModalComponent
          open={modalOpen}
          onClose={onCloseModal}
          modalHeader={"Details"}
        >
          <div className="mb-4 flex space-x-8">
            <p className="block text-gray-700 text-sm font-bold mb-2">
              First Name :
            </p>
            <p>{signupDetails.firstName}</p>
          </div>
          <div className="mb-4 flex space-x-8">
          <p className="block text-gray-700 text-sm font-bold mb-2">
              Last Name :
            </p>
            <p>{signupDetails.lastName}</p>
          </div>
          <div className="mb-4 flex space-x-8">
          <p className="block text-gray-700 text-sm font-bold mb-2">
              Email :
            </p>
            <p>{signupDetails.email}</p>
          </div>
          <div className="mb-4 flex space-x-8">
          <p className="block text-gray-700 text-sm font-bold mb-2">
              Username :
            </p>
            <p>{signupDetails.username}</p>
          </div>
          <div className="mb-4 flex space-x-8">
          <p className="block text-gray-700 text-sm font-bold mb-2">
              Password :
            </p>
            <p>{signupDetails.password}</p>
          </div>
          <div className="mb-4 flex space-x-8">
          <p className="block text-gray-700 text-sm font-bold mb-2">
              Mobile Number:
            </p>
            <p>{signupDetails.mobileNumber}</p>
          </div>
        </ModalComponent>
      </form>
    </div>
  );
};
