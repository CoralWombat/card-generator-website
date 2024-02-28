import { Divider } from "primereact/divider";
import "./Footer.scss";

const Footer = ({}) => {
  return (
    <div className="no-print">
      <Divider />
      <div id="footer" className="pb-4 pt-2 px-6">
        {`Card Generator Website, created by ${process.env.APP_AUTHOR}.`}
        <br />
        {`Copyright © 2024. All Rights Reserved.`}
        <br />
        {`version ${process.env.APP_VERSION} alpha`}
      </div>
    </div>
  );
};

export default Footer;
