import React from "react";
import { Dimensions } from "react-native";
import { VictoryLine } from "victory-chart/es";
import { G } from "react-native-svg";

import VictoryLabel from "./victory-label";
import VictoryContainer from "./victory-container";
import VictoryClipContainer from "./victory-clip-container";
import { Curve } from "../index";

export default class extends VictoryLine {
  static defaultProps = Object.assign({}, VictoryLine.defaultProps, {
    dataComponent: <Curve/>,
    labelComponent: <VictoryLabel/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  });
}
