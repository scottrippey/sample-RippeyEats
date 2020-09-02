import React from 'react';
import classNames from 'classnames';
import { CloseSvg, LogoSvg, MenuSvg, SearchSvg } from "~/common/images";
import { NAV_ITEMS } from "~/common/nav";

const EATS = "Eats.";
const PLACEHOLDER_TEXT = "e.g. delicious sandwiches";

export const Header: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [navOpen, setNavOpen] = React.useState(false);

  return <header className="text-white text-16">

    {/* Main Header, with menu, logo, search */}
    <nav className="bg-blue-light px-20 lg:px-40 justify-between leading-52 flex items-center">
      {/* Hamburger menu, hidden on large */}
      <span
        className={classNames(
          "lg:hidden -ml-20 p-20 inline-block bg-blue-light transition-color",
          "cursor-pointer select-none",
          { "bg-blue": navOpen },
        )}
        onClick={(ev) => {
          ev.preventDefault();
          setNavOpen(open => !open);
        }}
      >
        { !navOpen
          ? <MenuSvg className="w-20" />
          : <CloseSvg className="w-20" />
        }
      </span>

      {/* Literal Hamburger logo */}
      <span className="mr-15 text-center">
        <LogoSvg className="h-35"  />
      </span>

      {/* "Eats." title */}
      <span className="hidden lg:block lg:flex-grow">
        {EATS}
      </span>

      {/* Search icon */}
      <span className="relative -mr-20">
        <span
          className={classNames(
            "cursor-pointer select-none block p-20 bg-blue-light transition-color",
            { "bg-blue": searchOpen }
          )}
          onClick={(ev) => {
            ev.preventDefault();
            setSearchOpen(current => !current);
          }}
        >
          {
            !searchOpen
              ? <SearchSvg className="w-20" />
              : <CloseSvg className="w-20" />
          }
        </span>
        { !searchOpen ? null :
          <span className="absolute top-100 right-0">
            <SearchBox />
          </span>
        }
      </span>
    </nav>

    {/* Secondary nav (mobile: only shows when menu clicked) */}
    <nav
      className="bg-blue lg:px-40 leading-52 flex flex-col lg:flex-row h-0 lg:h-auto overflow-hidden transition-height"
      style={{ height: !navOpen ? "" : `${NAV_ITEMS.length * 52}px` }}
    >
      { NAV_ITEMS.map(({ id, label }, index) =>
        <a
          key={id}
          className={classNames(
            "inline-block px-20 lg:first:-ml-20 border-white border-t first:border-0 lg:border-none",
            "underline cursor-pointer select-none whitespace-no-wrap",
            { "bg-blue-dark text-yellow": index === selectedIndex }
          )}
          onClick={() => setSelectedIndex(index)}
        >
          {label}
        </a>
      ) }
    </nav>
  </header>
};


const SearchBox: React.FC = () => {
  return <div className="bg-blue p-20 flex items-center leading-52 text-black">
    <input
      type="text"
      inputMode="search"
      placeholder={PLACEHOLDER_TEXT}
      className="placeholder-gray pl-20 pr-52"
      style={{ width: '350px' }}
    />
    <span className="cursor-pointer absolute p-15" style={{ right: 20 }}>
      <SearchSvg className="w-20" />
    </span>
  </div>;
};
