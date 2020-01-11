import React, { useEffect } from "react";
import { connect } from "react-redux";
import SmurfDisplay from "./SmurfDisplay";
import { fetchInfo } from "../actions";

const SmurfInfo = props => {
  useEffect(() => {
    props.fetchInfo();
  }, []);

  if (props.isFetching) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {props.error && <p>{props.error}</p>}
      {props.smurfData && props.smurfData.map(info => (
        <SmurfDisplay key={info.id} info={info} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfData: state.smurfData,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchInfo }
)(SmurfInfo);