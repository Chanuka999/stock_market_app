import Link from "next/link";

interface FooterLinkProps {
  text: string;
  linkText: string;
  href: string;
}

const FooterLink = ({ text, linkText, href }: FooterLinkProps) => {
  return (
    <div className="text-center pt-4">
      <span className="text-sm text-gray-500">{text} </span>
      <Link href={href} className="text-sm text-blue-600 hover:underline">
        {linkText}
      </Link>
    </div>
  );
};

export default FooterLink;
