import React from "react";

const Title = ({
  title,
  className,
}: {
  title?: string;
  className?: string;
}) => {
  return (
    <h1 className={`text-3xl py-10 font-bold gradient-text ${className}`}>
      {title}
    </h1>
  );
};

export default Title;
