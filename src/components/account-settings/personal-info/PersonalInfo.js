import React from "react";
import Input from "./Input";
import Title from "./Title";
import Button from "./Button"
import "./PersonalInfo.css";

const PersonalInfo = () => {
  return (
    <div className="container">
      <section className="personal-info">
        <h4 className="heading">Personal Information</h4>
        <p className="info">
          Use this page to update your your contact information and change your
          password
        </p>

        <div className="photo-container">
          <img src="./img_avatar.png" alt="photo1" className="photo" />
          <a href="/profile" className="link">
            Update a new profile image
          </a>
          <p className="small1">Maximum size is 600kb of PNG, JPEG, JPG</p>
        </div>
        <div className="email">
          <Title
            text="Email Address"
            position="absolute"
            left="6.25px"
            top="90px"
            width="304px"
            fontSize="10px"
            color="#4c0032"
            textTransform="uppercase"
          />
          <Input
            placeholder="amarachukwu@gmail.com"
            position="absolute"
            left="6.25px"
            top="110px"
            width="200px"
            textAlign="center"
            background="#e7e7e7"
            outline="none"
            borderRadius="4px"
            boxSizing="border-box"
            border="1px solid #d3d3d3"
            height="30px"
          />

          <Title
            text="Full name"
            position="absolute"
            left="6.25px"
            top="170px"
            width="304px"
            fontSize="10px"
            color="#4c0032"
            textTransform="uppercase"
          />

          <Input
            placeholder="Olatunji Joseph"
            position="absolute"
            left="6.25px"
            top="200px"
            width="200px"
            textAlign="left"
            background="rgba(235,218,206,0.2)"
            outline="none"
            borderRadius="4px"
            boxSizing="border-box"
            border="1px solid #d3d3d3"
            height="30px"
          />

          <Title
            text="User name"
            position="absolute"
            left="240.25px"
            top="170px"
            width="304px"
            fontSize="10px"
            color="#4c0032"
            textTransform="uppercase"
          />

          <Input
            placeholder="Madjozi"
            position="absolute"
            left="240.25px"
            top="200px"
            width="200px"
            textAlign="left"
            background="rgba(235,218,206,0.2)"
            outline="none"
            borderRadius="4px"
            boxSizing="border-box"
            border="1px solid #d3d3d3"
            height="30px"
          />

          <Title
            text="Birth Date"
            position="absolute"
            left="475.25px"
            top="170px"
            width="304px"
            fontSize="10px"
            color="#4c0032"
            textTransform="uppercase"
          />

          <Input
            placeholder="07/11/1990"
            position="absolute"
            left="475.25px"
            top="200px"
            width="200px"
            textAlign="left"
            background="#e7e7e7"
            outline="none"
            borderRadius="4px"
            boxSizing="border-box"
            border="1px solid #d3d3d3"
            height="30px"
          />

          <Button
            text="Save Changes"
            position="absolute"
            left="8.25px"
            top="250px"
            width="150px"
            fontSize="10px"
            color="#fff"
            background="#f58634"
            height="40px"
            outline="none"
          />
        </div>
        <div className="underline"></div>
        <Title
          text="current password"
          position="absolute"
          left="28.25px"
          top="400px"
          width="304px"
          fontSize="10px"
          color="#4c0032"
          textTransform="uppercase"
        />

        <Input
          placeholder="........"
          position="absolute"
          left="28.25px"
          top="430px"
          width="200px"
          textAlign="center"
          background="rgba(235,218,206,0.2)"
          outline="none"
          borderRadius="4px"
          boxSizing="border-box"
          border="1px solid #d3d3d3"
          height="30px"
        />

        <Title
          text="new password"
          position="absolute"
          left="268.25px"
          top="400px"
          width="304px"
          fontSize="10px"
          color="#4c0032"
          textTransform="uppercase"
        />

        <Input
          placeholder=""
          position="absolute"
          left="265.25px"
          top="430px"
          width="200px"
          textAlign="center"
          background="rgba(235,218,206,0.2)"
          outline="none"
          borderRadius="4px"
          boxSizing="border-box"
          border="1px solid #d3d3d3"
          height="30px"
        />

        <Title
          text="confirm password"
          position="absolute"
          left="500.25px"
          top="400px"
          width="304px"
          fontSize="10px"
          color="#4c0032"
          textTransform="uppercase"
        />

        <Input
          placeholder=""
          position="absolute"
          left="500.25px"
          top="430px"
          width="200px"
          textAlign="center"
          background="rgba(235,218,206,0.2)"
          outline="none"
          borderRadius="4px"
          boxSizing="border-box"
          border="1px solid #d3d3d3"
          height="30px"
        />

        <Button
          text="Save Changes"
          position="absolute"
          left="30.25px"
          top="480px"
          width="150px"
          fontSize="10px"
          color="#fff"
          background="#f58634"
          height="40px"
          outline="none"
        />
      </section>
    </div>
  );
};

export default PersonalInfo;
