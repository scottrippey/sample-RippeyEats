import React from 'react';
import classNames from 'classnames';
import { LogoSvg } from "~/common/images";
import { NAV_ITEMS } from "~/common/nav";

export const Header: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  return <header className="text-white text-16">
    <h1 className="bg-blue-light px-40 leading-52 flex items-center">
      <LogoSvg className="fill-current inline-block h-35 mr-15"  />
      <span className="flex-grow text-center lg:text-left">
        Eats.
      </span>
    </h1>
    <h2 className="bg-blue px-40 leading-52 flex">
      { NAV_ITEMS.map(({ id, label }, index) =>
        <a
          key={id}
          className={classNames(
            "inline-block px-20 first:-ml-20",
            "underline cursor-pointer",
            { "bg-blue-dark text-yellow": index === selectedIndex }
          )}
          onClick={() => setSelectedIndex(index)}
        >
          {label}
        </a>
      ) }
    </h2>
  </header>
};
