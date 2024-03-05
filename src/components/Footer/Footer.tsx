import { Divider } from "primereact/divider";
import "./Footer.scss";

type FooterProps = {
  className?: string;
};

const Footer = ({ className }: FooterProps) => {
  return (
    <div className={className}>
      <Divider />
      <div id="footer" className="pb-4 pt-2 px-6">
        {`Cad of Cards, created by ${process.env.APP_AUTHOR}.`}
        <br />
        {`Copyright © 2024. All Rights Reserved.`}
        <br />
        {`version ${process.env.APP_VERSION} alpha`}
      </div>
    </div>
  );
};

export default Footer;
