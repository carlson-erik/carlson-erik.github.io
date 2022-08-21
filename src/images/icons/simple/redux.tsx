import React from "react";
import { DevIcon, SocialIcon } from "../../styled";
import { IconProps } from "../../types";

const ICON_DEFAULT = "#764abc";

const Redux = (props: IconProps) => {
  const { color, type } = props;
  const fillColor = color && color !== "" ? color : ICON_DEFAULT;
  const Icon = type === "social" ? SocialIcon : DevIcon;
  return (
    <Icon role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path
        d="M22.177 22.005c1.161-0.099 2.057-1.12 2-2.339-0.063-1.219-1.063-2.197-2.276-2.197h-0.084c-1.255 0.041-2.239 1.099-2.197 2.359 0.041 0.641 0.301 1.156 0.661 1.536-1.401 2.719-3.495 4.715-6.677 6.396-2.135 1.115-4.391 1.537-6.588 1.235-1.839-0.255-3.276-1.077-4.156-2.396-1.319-2-1.439-4.151-0.339-6.312 0.801-1.557 2-2.699 2.796-3.256-0.197-0.52-0.437-1.395-0.557-2.057-5.916 4.235-5.312 10.032-3.515 12.767 1.339 2 4.072 3.276 7.067 3.276 0.803 0 1.641-0.057 2.459-0.261 5.199-1 9.131-4.115 11.385-8.708zM29.307 17.011c-3.093-3.636-7.651-5.636-12.843-5.636h-0.683c-0.333-0.735-1.115-1.197-1.995-1.197h-0.057c-1.26 0-2.24 1.083-2.199 2.339 0.043 1.197 1.057 2.197 2.276 2.197h0.1c0.9-0.041 1.677-0.599 2-1.401h0.739c3.079 0 5.991 0.901 8.652 2.657 2.031 1.337 3.495 3.099 4.312 5.197 0.719 1.713 0.677 3.396-0.063 4.797-1.135 2.192-3.057 3.353-5.588 3.353-1.599 0-3.156-0.5-3.959-0.859-0.479 0.396-1.281 1.057-1.86 1.459 1.761 0.796 3.537 1.255 5.256 1.255 3.896 0 6.792-2.193 7.891-4.312 1.197-2.396 1.099-6.433-1.959-9.891zM8.651 22.724c0.043 1.197 1.057 2.197 2.281 2.197h0.079c1.281-0.041 2.255-1.099 2.197-2.359 0-1.199-1.036-2.199-2.255-2.199h-0.084c-0.077 0-0.197 0-0.301 0.043-1.656-2.797-2.355-5.797-2.095-9.032 0.157-2.437 0.959-4.552 2.396-6.312 1.199-1.495 3.453-2.24 4.995-2.276 4.313-0.084 6.115 5.296 6.251 7.432l2 0.599c-0.464-6.552-4.536-9.989-8.432-9.989-3.656 0-7.032 2.656-8.391 6.552-1.855 5.199-0.636 10.188 1.64 14.188-0.197 0.255-0.317 0.719-0.281 1.156z"
        fill={fillColor}
      />
    </Icon>
  );
};

export default Redux;
