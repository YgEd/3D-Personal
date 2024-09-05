export default function Menu({ onSectionChange, menuOpened, setMenuOpened }) {
  return (
    <>
      <button
        onClick={() => {
          setMenuOpened(!menuOpened);
        }}
        className="fixed top=12 right-12 bg-purple-700 w-11 h-11 rounded-md"
      ></button>
    </>
  );
}
