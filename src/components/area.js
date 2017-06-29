import React, { Component } from "react";
import Period from "./period";

class Area extends Component {
  items() {
    return this.props.items.map((item, i) => {
      return (
        <div className={`item list-item--${this.props.name}`} key={i}>
          <div className="item-primary">
            <Period from={item.from} to={item.to} className="item-period" />
            <div className="item-facts">
              <div className="item-company">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              </div>
              <div className="item-label">
                {item.label}
              </div>
            </div>
          </div>

          <div
            className={`item-description $((item.description) ? "" : "hidden")`}
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        </div>
      );
    });
  }
  render() {
    return (
      <div className={`area area--${this.props.name}`}>
        <h2 className="area-header">
          {this.props.name}
        </h2>
        <div className={`area-list list list--${this.props.name}`}>
          {this.items()}
        </div>
      </div>
    );
  }
}

export default Area;
