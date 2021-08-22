export default function ToggleDisplayThemeButton(props) {
    return (
      <button
        onClick={props.onClick}
        className={`text-4xl z-50	duration-200 ease-in-out fixed right-1.5	top-1.5	${
          props.displayTheme == "dark" ? "rotate-360" : ""
        }`}
      >
        {props.displayTheme == "dark" ? "🌝" : "🌚"}
      </button>
    );
  }