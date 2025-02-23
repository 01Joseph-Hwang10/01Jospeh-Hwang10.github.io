import React from "react";
import MonotoneSVGIcon from "./base/MonotoneSVGIcon";
import { ViewBox } from "./base/utils";

class JupyterIcon extends MonotoneSVGIcon {
  protected get viewBox(): ViewBox {
    return ViewBox.fromSquare(32);
  }

  render(): React.JSX.Element {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className={this.className}
        width={this.width}
        height={this.height}
        viewBox={this.viewBox.toString()}
        css={this.css}
      >
        <title>jupyter</title>
        <path d="M16.265 24.136c-5.068 0-9.599-1.871-12-4.537 0.932 2.401 2.537 4.537 4.667 6 2.136 1.469 4.667 2.265 7.333 2.265s5.204-0.796 7.333-2.265c2.136-1.463 3.735-3.599 4.667-6-2.401 2.667-6.932 4.537-12 4.537zM16.265 6.531c5.068 0 9.599 1.871 12 4.537-0.932-2.401-2.531-4.537-4.667-6-2.265-1.599-4.796-2.401-7.333-2.401-2.667 0-5.197 0.803-7.333 2.265-2.129 1.599-3.735 3.599-4.667 6.136 2.401-2.803 6.803-4.537 12-4.537zM25.599 0.136c-2.489 0-2.489 3.728 0 3.728s2.489-3.728 0-3.728zM6.803 27.068c-1.329 0-2.401 1.072-2.401 2.401 0 1.323 1.072 2.395 2.401 2.395 1.323 0 2.395-1.072 2.395-2.395 0-1.329-1.072-2.401-2.395-2.401zM4.803 3.068c-1.781 0-1.781 2.667 0 2.667 1.776 0 1.776-2.667 0-2.667z" />
      </svg>
    );
  }
}

export default JupyterIcon;
