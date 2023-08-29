import React from "react";
import MonotoneSVGIcon from "./base/MonotoneSVGIcon";
import { ViewBox } from "./base/utils";

class FirebaseIcon extends MonotoneSVGIcon {
  protected get viewBox(): ViewBox {
    return ViewBox.fromSquare(24);
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
        <path d="m3.89 15.673 2.365-15.212a.542.542 0 0 1 1.015-.172l2.543 4.771zm16.795 3.691-2.252-13.999a.543.543 0 0 0 -.918-.295l-14.2 14.294 7.857 4.428a1.62 1.62 0 0 0 1.587 0zm-6.385-12.216-1.82-3.482a.542.542 0 0 0 -.96 0l-7.99 14.318z" />
      </svg>
    );
  }
}

export default FirebaseIcon;
