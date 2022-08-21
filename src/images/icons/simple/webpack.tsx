import React from "react";
import { DevIcon, SocialIcon } from "../../styled";
import { IconProps } from "../../types";

const ICON_DEFAULT = "#EA2D2E";

const Webpack = (props: IconProps) => {
  const { color, type } = props;
  const fillColor = color && color !== "" ? color : ICON_DEFAULT;
  const Icon = type === "social" ? SocialIcon : DevIcon;
  return (
    <Icon role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path
        fill={fillColor}
        d="M28.021 24.161l-11.552 6.505v-5.068l7.198-3.943zM28.813 23.448v-13.609l-4.229 2.432v8.745zM3.901 24.161l11.552 6.505v-5.068l-7.198-3.943zM3.109 23.448v-13.609l4.229 2.432v8.745zM3.604 8.958l11.849-6.672v4.901l-7.646 4.188zM28.318 8.958l-11.849-6.672v4.901l7.646 4.188zM15.453 24.448l-7.099-3.891v-7.703l7.099 4.083zM16.469 24.448l7.099-3.891v-7.703l-7.099 4.083zM8.833 11.964l7.13-3.901 7.13 3.901-7.13 4.099z"
      />
    </Icon>
  );
};

export default Webpack;
