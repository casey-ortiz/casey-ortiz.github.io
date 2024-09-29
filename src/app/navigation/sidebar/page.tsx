import clsx from "clsx";
import { IconContext } from "react-icons";
import { TbMusicUp } from "react-icons/tb";

export default function Sidebar({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div
      className={clsx(
        {
          "hidden": isOpen === false,
          "flex": true,
          "justify-end": true,
          "pe-2": true,
        }
      )}
      style={{
        opacity: `${isOpen ? "1" : "0"}`,
      }}
    >
      <button onClick={toggle}>
        <IconContext.Provider value={{ className: "shared-class", size: "40" }}>
          <TbMusicUp />
        </IconContext.Provider>
      </button>
    </div>
  )
}