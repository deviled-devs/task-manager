import React from "react";
import styled from "styled-components";

import { ReactComponent as ducky } from "./ducky.svg";
import { ReactComponent as addressBook } from "./addressBook.svg";
import { ReactComponent as home } from "./home.svg";
import { ReactComponent as sliders } from "./sliders.svg";
import { ReactComponent as userCircle } from "./userCircle.svg";

// get theme
// import useTheme from "../../../../hooks";

const icons: {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
} = {
  ducky
};

const sizes: { [key: string]: string } = {
  s: "16px",
  m: "20px",
  l: "32px",
  xl: "64px"
};

interface Props {
  variant?: string;
  size?: string;
}

const Icon = ({ variant = "ducky", size = sizes["s"] }: Props) => {
  let Svg = icons[variant] || icons["ducky"];

  let _size = sizes[size] || sizes["s"];

  if (variant === "logo") {
    _size = sizes["xl"];

    return <Svg style={{ height: _size }} />;
  }

  return <Svg style={{ height: _size }} />;
};

export default Icon;
