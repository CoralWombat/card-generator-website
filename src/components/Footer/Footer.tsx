import { Divider } from "primereact/divider";

type FooterProps = {
  className?: string;
};

const Footer = ({ className }: FooterProps) => {
  return (
    <div className={className}>
      <Divider />
      <div className="text-sm pb-4 pt-2 px-6">
        {`CAD of Cards, created by ${process.env.APP_AUTHOR}.`}
        <br />
        {`Copyright © 2024. All Rights Reserved.`}
        <br />
        {`version ${process.env.APP_VERSION} alpha`}
      </div>
    </div>
  );
};

export default Footer;
