import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";

const AbsoluteHeader = styled.header`
  position: absolute;
  width: 100%;
`;

const Logo = styled.h1`
  margin: 1rem 0 0 2rem;

  & > * {
    color: white;
    text-decoration: none;
  }
`;

const Header = ({ siteTitle }) => (
  <AbsoluteHeader>
    <Logo>
      <Link to="/" >
        {siteTitle}
      </Link>
    </Logo>
  </AbsoluteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
