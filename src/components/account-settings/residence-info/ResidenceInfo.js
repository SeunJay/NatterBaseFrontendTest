import React from 'react';
import "./ResidenceInfo.css";
import Title from "../personal-info/Title";
import Input from "../personal-info/Input";
import Button from "../personal-info/Button"

const ResidenceInfo = () => {
  return (
    <section className="residence-info">
      <h4 className="heading2">Change State of Residence</h4>
      <p className="info">
        Use this page to update your your contact information and change your
        password
      </p>

      <Title
        text="current state"
        position="absolute"
        left="28.25px"
        top="100px"
        width="304px"
        fontSize="10px"
        color="#4c0032"
        textTransform="uppercase"
      />

      <Input
        placeholder="Niger"
        position="absolute"
        left="28.25px"
        top="120px"
        width="250px"
        textAlign="center"
        background="#e7e7e7"
        outline="none"
        borderRadius="4px"
        boxSizing="border-box"
        border="1px solid #d3d3d3"
        height="30px"
      />

      <Title
        text="new state of residence"
        position="absolute"
        left="28.25px"
        top="180px"
        width="304px"
        fontSize="10px"
        color="#4c0032"
        textTransform="uppercase"
      />

      <Input
        placeholder=""
        position="absolute"
        left="28.25px"
        top="210px"
        width="250px"
        textAlign="center"
        background="rgba(235,218,206,0.2)"
        outline="none"
        borderRadius="4px"
        boxSizing="border-box"
        border="1px solid #d3d3d3"
        height="30px"
      />

      <Title
        text="what lga do you live in"
        position="absolute"
        left="320.25px"
        top="180px"
        width="304px"
        fontSize="10px"
        color="#4c0032"
        textTransform="uppercase"
      />

      <Input
        placeholder=""
        position="absolute"
        left="320.25px"
        top="210px"
        width="250px"
        textAlign="center"
        background="rgba(235,218,206,0.2)"
        outline="none"
        borderRadius="4px"
        boxSizing="border-box"
        border="1px solid #d3d3d3"
        height="30px"
      />

      <Title
        text="federal constituencies"
        position="absolute"
        left="628.25px"
        top="180px"
        width="304px"
        fontSize="10px"
        color="#4c0032"
        textTransform="uppercase"
      />

      <Input
        placeholder=""
        position="absolute"
        left="628.25px"
        top="210px"
        width="250px"
        textAlign="center"
        background="rgba(235,218,206,0.2)"
        outline="none"
        borderRadius="4px"
        boxSizing="border-box"
        border="1px solid #d3d3d3"
        height="30px"
      />

      <Title
        text="senetorial district"
        position="absolute"
        left="28.25px"
        top="270px"
        width="304px"
        fontSize="10px"
        color="#4c0032"
        textTransform="uppercase"
      />

      <Input
        placeholder=""
        position="absolute"
        left="28.25px"
        top="300px"
        width="250px"
        textAlign="center"
        background="rgba(235,218,206,0.2)"
        outline="none"
        borderRadius="4px"
        boxSizing="border-box"
        border="1px solid #d3d3d3"
        height="30px"
      />

      <Title
        text="state constituencies"
        position="absolute"
        left="318.25px"
        top="270px"
        width="304px"
        fontSize="10px"
        color="#4c0032"
        textTransform="uppercase"
      />

      <Input
        placeholder=""
        position="absolute"
        left="318.25px"
        top="300px"
        width="250px"
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
        top="350px"
        width="190px"
        fontSize="10px"
        color="#fff"
        background="#f58634"
        height="40px"
        outline="none"
      />
    </section>
  );
}

export default ResidenceInfo
