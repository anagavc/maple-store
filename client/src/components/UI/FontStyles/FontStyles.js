import React from "react";

export const HeadingFour = ({ title, color, textColor }) => {
  return (
    <div className="flex justify-between items-center space-x-2">
      <div className={`w-40 border border-${color} bg-${color}`}></div>

      <h4 className={`${textColor} font-heading text-base font-medium`}>
        {title}
      </h4>
      <div className={`w-40 border border-${color} bg-${color}`}></div>
    </div>
  );
};

export const HeadingTwo = ({ title, color, size }) => {
  return <h2 className={`font-heading  ${color} ${size}`}>{title}</h2>;
};

export const HeadingThree = ({ title, color }) => {
  return (
    <div className={`border-b border-b-${color} w-full flex justify-center`}>
      <h3 className={`font-heading text-3xl text-${color} mb-4`}>{title}</h3>
    </div>
  );
};

export const Paragraph = ({ children }) => {
  return (
    <p className="tracking-widest font-body  text-pry-100 text-base">
      {children}
    </p>
  );
};

export const ParagraphLarge = ({ children }) => {
  return <p className="text-gold font-body text-lg font-bold">{children}</p>;
};
export const TableHeader = ({ children }) => {
  return (
    <h3 className="flex items-center justify-center font-body text-pry-100 font-bold text-lg flex-1">
      {children}
    </h3>
  );
};
export const TableItem = ({ children }) => {
  return (
    <h3 className="flex items-center justify-center  flex-1">{children}</h3>
  );
};
