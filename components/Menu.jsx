import { motion } from "framer-motion";

export default function Menu({ onSectionChange, menuOpened, setMenuOpened }) {
  return (
    <>
      <button
        onClick={() => {
          console.log("Menu clicked!");
          setMenuOpened(!menuOpened);
        }}
        className="z-20 fixed top-12 right-12 bg-gray-400 w-11 h-11 rounded-lg p-3"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45 translate-y-0.5" : ""
          }`}
        />

        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />

        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>
      {/* Menu Body */}
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overlfow-hidden flex flex-col ${
          menuOpened ? "w-80" : "w-0"
        }`}
      >
        <div className="flex-1 flex flex-col items-start justify-center gap-6 p-8">
          <MenuButton label={"About Me"} onClick={() => onSectionChange(0)} />
          <MenuButton label={"Skills"} onClick={() => onSectionChange(1)} />
          <MenuButton label={"Projects"} onClick={() => onSectionChange(2)} />
          <MenuButton label={"Contact Me"} onClick={() => onSectionChange(3)} />
        </div>
      </div>
    </>
  );
}

const MenuButton = ({ label, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      whileHover={{
        opacity: 0.4,
        transition: {
          duration: 0.15,
        },
      }}
    >
      <button onClick={onClick} className="text-2xl font-mono cursor-pointer">
        {label}
      </button>
    </motion.div>
  );
};
