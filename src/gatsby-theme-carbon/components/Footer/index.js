import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
    <p>
     {buildTime}      <br />
      &copy; Merative US L.P. 1999, 2022
    </p>
    {/* <p>
      The default export from a shadowed component will replace that component
      in the theme.
    </p>
    <p>
      <a href="https://www.gatsbyjs.org/docs/themes/api-reference/#component-shadowing">
        More about component shadowing
      </a>
    </p> */}
  </>
);

const links = {
  firstCol: [
   // { href: 'https://github.com/curam-spm-devops/wh-support-docs/', linkText: 'GitHub' },
  ],
  secondCol: [
    // { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    // { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    // { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    // { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
  ],
};

const Logo = () => (
  <svg
    width="81"
    height="32"
    xmlns="http://www.w3.org/2000/svg">
    <g fillRule="evenodd">
      
    </g>
  </svg>
);

const CustomFooter = () => <Footer links={links} Content={Content} Logo={Logo} />;

export default CustomFooter;
