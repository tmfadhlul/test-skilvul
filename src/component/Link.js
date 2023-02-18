const Link = ({ children, href, className }) => {
  return (
    <div className={className}>
      <a href={href}>{children}</a>
    </div>
  );
};

export default Link;
