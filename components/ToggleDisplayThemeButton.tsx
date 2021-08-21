export default function ToggleDisplayThemeButton(props) {
    return (
      <button
        onClick={props.onClick}
        className={`text-4xl duration-200 ease-in-out fixed right-1.5	top-1.5	${
          props.displayTheme == "dark" ? "rotate-360" : ""
        }`}
      >
        {props.displayTheme == "dark" ? "🌝" : "🌚"}
      </button>
    );
  }