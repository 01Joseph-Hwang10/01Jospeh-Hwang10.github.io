import React from "react";
import MultitoneSVGIcon from "./base/MultitoneSVGIcon";
import { ViewBox } from "./base/utils";

class CppIcon extends MultitoneSVGIcon {
  protected get viewBox(): ViewBox {
    return ViewBox.fromRect(306, 344.35);
  }

  render(): React.JSX.Element {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className={this.className}
        x="0px"
        y="0px"
        width={this.width}
        height={this.height}
        viewBox={this.viewBox.toString()}
        enable-background={`new ${this.viewBox.toString()}`}
        css={this.css}
      >
        <path
          className={this.useColorAt(0)}
          d="M302.107,258.262c2.401-4.159,3.893-8.845,3.893-13.053V99.14c0-4.208-1.49-8.893-3.892-13.052L153,172.175  L302.107,258.262z"
        />
        <path
          className={this.useColorAt(0)}
          d="M166.25,341.193l126.5-73.034c3.644-2.104,6.956-5.737,9.357-9.897L153,172.175L3.893,258.263  c2.401,4.159,5.714,7.793,9.357,9.896l126.5,73.034C147.037,345.401,158.963,345.401,166.25,341.193z"
        />
        <path
          className={this.useColorAt(0)}
          d="M302.108,86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25,3.156c-7.287-4.208-19.213-4.208-26.5,0  L13.25,76.19C5.962,80.397,0,90.725,0,99.14v146.069c0,4.208,1.491,8.894,3.893,13.053L153,172.175L302.108,86.087z"
        />
        <g>
          <path
            className={this.useColorAt(1)}
            d="M153,274.175c-56.243,0-102-45.757-102-102s45.757-102,102-102c36.292,0,70.139,19.53,88.331,50.968   l-44.143,25.544c-9.105-15.736-26.038-25.512-44.188-25.512c-28.122,0-51,22.878-51,51c0,28.121,22.878,51,51,51   c18.152,0,35.085-9.776,44.191-25.515l44.143,25.543C223.142,254.644,189.294,274.175,153,274.175z"
          />
        </g>
        <g>
          <polygon
            className={this.useColorAt(1)}
            points="255,166.508 243.666,166.508 243.666,155.175 232.334,155.175 232.334,166.508 221,166.508    221,177.841 232.334,177.841 232.334,189.175 243.666,189.175 243.666,177.841 255,177.841  "
          />
        </g>
        <g>
          <polygon
            className={this.useColorAt(1)}
            points="297.5,166.508 286.166,166.508 286.166,155.175 274.834,155.175 274.834,166.508 263.5,166.508    263.5,177.841 274.834,177.841 274.834,189.175 286.166,189.175 286.166,177.841 297.5,177.841  "
          />
        </g>
        <script />
      </svg>
    );
  }
}
export default CppIcon;
