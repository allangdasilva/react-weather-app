interface TextBodyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const TextBody = ({ children }: TextBodyProps) => {
  return <p className="font-body text-light">{children}</p>;
};

export default TextBody;
