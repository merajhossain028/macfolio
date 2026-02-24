import dayjs from "dayjs";
import { Signal, Wifi, BatteryFull } from "lucide-react";

import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  return (
    <nav>
      {/* Desktop: macOS menu bar */}
      <div className="max-sm:hidden">
        <img src="/images/logo.svg" alt="logo" className="w-8 h-8" />
        <p className="font-bold">Meraj's Portfolio</p>
        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="max-sm:hidden">
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="icon-hover" alt={`icon-${id}`} />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>

      {/* Mobile: iOS status bar */}
      <div className="sm:hidden ios-status-bar">
        <time className="ios-time">{dayjs().format("h:mm")}</time>
        <div className="ios-status-icons">
          <Signal size={14} strokeWidth={2.5} />
          <Wifi size={14} strokeWidth={2.5} />
          <BatteryFull size={16} strokeWidth={2} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
