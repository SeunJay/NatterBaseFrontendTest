import React from "react";
import AccountCaption from "../accountCaption/AccountCaption";
import "./AccounBody.css";
import PersonalInfo from "../personal-info/PersonalInfo";

const AccountBody = () => {
  return (
    <>
      <div className="account-body">
        <AccountCaption />
        <PersonalInfo />
      </div>
    </>
  );
};

export default AccountBody;
