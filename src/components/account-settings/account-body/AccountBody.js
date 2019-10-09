import React from "react";
import AccountCaption from "../accountCaption/AccountCaption";
import "./AccounBody.css";
import PersonalInfo from "../personal-info/PersonalInfo";
import ResidenceInfo from "../residence-info/ResidenceInfo";

const AccountBody = () => {
  return (
    <>
      <div className="account-body">
        <AccountCaption />
        <PersonalInfo />
        <ResidenceInfo />
      </div>
    </>
  );
};

export default AccountBody;
