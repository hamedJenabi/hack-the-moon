import classNames from "classnames";
import React from "react";

// make sure to use data-no-slide attribute on direct child component of Slider so that Swiper.js correctly interprets it
const SliderControl = ({ direction, className, ...props }) => (
  <button>left</button>
);

export default SliderControl;
