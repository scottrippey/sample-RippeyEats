import React from 'react';
import classNames from 'classnames';
import { NAV_ITEMS } from "~/common/nav";


export const Header: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return <section className="text-white text-lg">
    <h1 className="bg-blue-light px-10 flex">
      <span className="p-4 first:-ml-4 self-center flex-grow text-center">
        Eats.
      </span>
    </h1>
    <h2 className="bg-blue px-10 flex">
      { NAV_ITEMS.map(({ id, label }, index) =>
        <a
          key={id}
          className={classNames(
            "inline-block p-4 first:-ml-4 underline self-center",
            { "bg-blue-dark text-yellow": index === selectedIndex }
          )}
          onClick={() => setSelectedIndex(index)}
        >
          {label}
        </a>
      ) }
    </h2>
  </section>
};
