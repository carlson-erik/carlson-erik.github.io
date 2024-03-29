import React from "react";
import { DevIcon, SocialIcon } from "../../styled";
import { IconProps } from "../../types";

const ICON_DEFAULT = "#64328B";

const Gatsby = (props: IconProps) => {
  const { color, type } = props;
  const fillColor = color && color !== "" ? color : ICON_DEFAULT;
  const Icon = type === "social" ? SocialIcon : DevIcon;
  return (
    <Icon role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path
        fill={fillColor}
        d="M16 0.011c-8.901 0-15.989 7.088-15.989 15.989s7.088 15.995 15.989 15.995c8.901 0 15.989-7.093 15.989-15.995s-7.088-15.989-15.989-15.989zM3.484 16.14l12.38 12.376c-6.817 0-12.38-5.563-12.38-12.376zM18.781 28.24l-15.016-15.021c1.251-5.563 6.256-9.735 12.235-9.735 4.011 0.011 7.776 1.917 10.151 5.147l-1.807 1.531c-1.912-2.801-5.089-4.468-8.48-4.453-4.333-0.025-8.197 2.719-9.599 6.819l13.073 13.072c3.197-1.115 5.703-3.896 6.396-7.235h-5.423v-2.364h8.204c0 5.979-4.172 10.989-9.735 12.24z"
      ></path>
    </Icon>
  );
};

export default Gatsby;
