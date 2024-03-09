import React from "react";
import MonotoneSVGIcon from "./base/MonotoneSVGIcon";
import { ViewBox } from "./base/utils";

class YAMLIcon extends MonotoneSVGIcon {
  protected get viewBox(): ViewBox {
    return ViewBox.fromRect(512, 470.647);
  }

  render(): React.JSX.Element {
    return (
      <svg
        className={this.className}
        width={this.width}
        height={this.height}
        viewBox={this.viewBox.toString()}
        xmlns="http://www.w3.org/2000/svg"
        css={this.css}
      >
        <polygon
          id="Y"
          points="235.793 0 143.978 137.674 143.978 224.949 87.702 224.949 87.702 137.674 0 0 63.25 0 119.018 88.646 175.243 0 235.793 0 235.793 0"
        />
        <path
          id="A"
          d="M330.294,175.451h-101.861l-20.717,50.024h-45.106l95.38,-224.949h46.137l91.51,224.949h-48.2l-17.144,-50.024zm-16.92,-44.911l-31.226,-82.55l-34.837,82.55h66.063z"
        />
        <polygon
          id="M"
          points="87.701 250.177 87.701 470.647 135.004 470.647 135.004 318.569 184.509 420.789 221.743 420.789 272.939 314.976 272.939 470.602 318.318 470.602 318.318 250.177 256.358 250.177 201.381 349.883 149.021 250.177 87.701 250.177 87.701 250.177"
        />
        <polygon
          id="L"
          points="512 422.735 395.638 422.735 395.638 250.125 347.442 250.125 347.442 469.647 512 469.647 512 422.737 512 422.735"
        />
      </svg>
    );
  }
}

export default YAMLIcon;
