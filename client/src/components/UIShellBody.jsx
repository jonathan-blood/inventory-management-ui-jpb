import React, { Component } from "react";
import StockItemList from "./StockItemList";
import "../pattern-components/patterns.scss";

class UIShellBody extends Component {
  components = {
    "Stock Items": StockItemList
  };
  defaultComponent = "Stock Items";

  render() {
    const PatternName = this.components[
      this.props.patternName || this.defaultComponent
    ];
    return (
      <div className="pattern-container">
        <PatternName showDescription={true} stockService={this.props.stockService} />
      </div>
    );
  }
}
export default UIShellBody;
