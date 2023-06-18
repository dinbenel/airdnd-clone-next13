"use client";

type Props = {
  onClick: () => void;
  title: string;
};

const MenuItem = ({ title, onClick }: Props) => {
  return (
    <div className="user-menu-item" onClick={onClick}>
      {title}
    </div>
  );
};

export default MenuItem;
