import React from "react";
import FooterBrand from "../components/FooterComponents/FooterBrand";
import FooterCopyright from "../components/FooterComponents/FooterCopyright";
import FooterLinks from "../components/FooterComponents/FooterLinks";

function Footer() {
  return (
    <footer className="font-['Montserrat',ui-sans-serif,system-ui]">
      <FooterBrand />
      <FooterLinks />
      <FooterCopyright />
    </footer>
  );
}

export default Footer;
