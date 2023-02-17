import React from "react";
import styled from "styled-components";
import Button from "../components/shared/Button";

const Footer = () => {
  return (
    <Root>
      <div>
        <h3>Your Company</h3>
        <p>
          Our mission is to make gadjet purchase, accessible and affordable.
        </p>
      </div>
      <div>
        <h3>Helpful links</h3>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Marketplace</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <h3>Site Map</h3>
        <ul>
          <li>Our Mobile App</li>
          <li>Frequently Asked Questions</li>
          <li>Help Desk</li>
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
        </ul>
      </div>
      <div>
        <h3>Contact Us</h3>
        <ul className="links">
          <li>
            <Button
              size="x-small"
              shape="round"
              icon="facebook"
              variant="primary-light"
            />
          </li>
          <li>
            <Button
              size="x-small"
              shape="round"
              icon="facebook"
              variant="primary-light"
            />
          </li>
          <li>
            <Button
              size="x-small"
              shape="round"
              icon="facebook"
              variant="primary-light"
            />
          </li>
          <li>
            <Button
              size="x-small"
              shape="round"
              icon="facebook"
              variant="primary-light"
            />
          </li>
        </ul>
        <p>hello@yourcompany.com</p>
      </div>
    </Root>
  );
};

export default Footer;

const Root = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 34px 34px;

  > * {
    padding: 0 10px;
    max-width: 300px;

    h3 {
      margin-bottom: 30px;
    }

    ul {
      list-style: none;

      li {
        margin-bottom: 15px;
      }
    }
    .links {
      display: flex;

      li {
        margin-right: 15px;
      }

      margin-right: -15px;
    }
  }
`;
