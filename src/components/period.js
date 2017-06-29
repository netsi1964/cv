import React from "react";
import Moment from "react-moment";

const Period = props => {
  var actualEnd, periodEnd;
  if (props.to) {
    actualEnd = props.to;
    periodEnd = (
      <Moment format="YYYY">
        {props.to}
      </Moment>
    );
  } else {
    actualEnd = new Date();
    periodEnd = "Present";
  }

  return (
    <div className={`period ${props.className}`}>
      <div className="period-from">
        <Moment format="YYYY">{props.from}</Moment>&#160;-&#160;
      </div>
      <div className="period-to">
        {periodEnd}
      </div>
      <div className="period-duration">
        <Moment from={props.from} ago>
          {actualEnd}
        </Moment>
      </div>
    </div>
  );
};

export default Period;
