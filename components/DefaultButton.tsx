interface DefaultButtonProps {
  textButton: string;
  onClickAction: () => void;
  isFilled: boolean;
  isSmall: boolean;
}

export default function DefaultButton(props: DefaultButtonProps) {
  return (
    <button
      className={`border-gray-800 border-2 ${
        props.isSmall ? "px-6 py-2" : "px-8 py-2 "
      } text-sm rounded-sm transition-all duration-300  ${
        props.isFilled
          ? "bg-gray-800 text-white hover:bg-gray-900"
          : "hover:bg-gray-800 hover:text-white"
      }`}
      onClick={props.onClickAction}
    >
      {props.textButton}
    </button>
  );
}
