import React, { Component } from "react";
import { appleStock } from "@vx/mock-data";
import { scaleTime, scaleLinear } from "@vx/scale";
import { extent, max } from "d3-array";
import { AreaClosed, Line } from "@vx/shape";
import { Group } from "@vx/group";
import { Text } from "@vx/text";
import { withTooltip, TooltipWithBounds } from "@vx/tooltip";
import { localPoint } from "@vx/event";
export class TestVe extends Component {
  handleMouseOver = (event, datum) => {
    // Lay toa do
    const coords = localPoint(event.target.ownerSVGElement, event);
    console.log(coords);
  };
  render() {
    const width = 750;
    const height = 400;
    const {
      tooltipData,
      tooltipLeft,
      tooltipTop,
      tooltipOpen,
      hideTooltip
    } = this.props;
    return (
      <svg width={width} height={height}>
        <Text
          verticalAnchor="start"
          style={{ fill: "red", fontWeight: "bold" }}
          width={width}
          x={width / 2}
          y={height / 2}
          onMouseOver={this.handleMouseOver}
          onMouseOut={hideTooltip}
        >
          Hello world
        </Text>
      </svg>
    );
  }
}

export default TestVe;
