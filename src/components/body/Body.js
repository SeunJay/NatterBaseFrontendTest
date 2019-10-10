import React from "react";
import "./Body.css";
import { connect } from "react-redux";
import request from "../../request";
import { getStats } from "../../actions/stats";
import { getApplications } from "../../actions/applicaation";
import Moment from "react-moment";
import Spinner from "../spinner/Spinner";

class Body extends React.Component {
  async componentDidMount() {
    await this.props.getStats(request);
    await this.props.getApplications(request);
  }

  render() {
    const { name } = this.props;
    const { fetching, fetched, statistics } = this.props.stats;
    const {loaded, applications } = this.props.applications;
    const {
      totalInsurancesBought,
      totalInsuranceAmount,
      totalClaimsAmount,
      totalInsuranceClaims
    } = statistics;

    return (
      <>
        {fetching && (
          <div>
            <Spinner />
          </div>
        )}
        {fetched && (
          <div style={{ background: "#e5e5e5" }}>
            <h3 className="salutation">Welcome, {name}</h3>{" "}
            <p className="date">Monday July 22, 2019.</p>
            <section className="flex-container">
              <div className="box1">
                <h3 className="figure">{totalInsurancesBought}</h3>
                <p className="small">Total Insurance Bought</p>
              </div>
              <div className="box2">
                <h3 className="figure">{totalInsuranceAmount}</h3>
                <p className="small">Total Amount of Insurance</p>
              </div>
              <div className="box3">
                <h3 className="figure">{totalInsuranceClaims}</h3>
                <p className="small">Total Insurance Claims</p>
              </div>
              <div className="box4">
                <h3 className="figure">{totalClaimsAmount}</h3>
                <p className="small">Total Amount of Claims</p>
              </div>
            </section>
            <section className="applications">
              <div className="container">
                <h3 className="caption">Insurance Applications</h3>
              </div>
              <div className="underline1"></div>
              <div className="container2">
                <p className="sn">S.N</p>
                <p className="insurance-type">Insurance Type</p>
                <p className="amount">Amount</p>
                <p className="date1">Date</p>
                <p className="status">Status</p>
                <p className="action">Action</p>
              </div>
              {loaded && (
                <div>
                  {applications.map((el, i) => (
                    <ul
                      key={i}
                      className="container3"
                      style={{
                        backgroundColor: i % 2 === 0 ? "#f8f7f6" : "#fff"
                      }}
                    >
                      <li className="point sn1">{i + 1}</li>
                      <li className="point insurance-type1">
                        {el.insuranceType}
                      </li>
                      <li className="point amount1">{el.amount}</li>
                      <li className="point date2">
                        <Moment format="YYYY/MM/DD">{el.createdDate}</Moment>
                      </li>
                      <button className={el.complete ? "btn-green" : "btn-red"}>
                        <p style={{ fontSize: "12px" }}>
                          {el.complete ? "Complete" : "Incomplete"}
                        </p>
                      </button>

                      <button className="action2">Claim</button>
                      <a href="/more-actions" className="more-actions">
                        More Actions
                      </a>
                    </ul>
                  ))}
                </div>
              )}
            </section>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = ({ stats, applications }) => {
  return {
    stats,
    applications
  };
};

export default connect(
  mapStateToProps,
  { getStats, getApplications }
)(Body);
