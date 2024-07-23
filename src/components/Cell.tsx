interface Prop {
  filled: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isDisabled: boolean;
}
export const Cell = ({ filled, onClick, isDisabled }: Prop) => {
  return (
    
      <button
        type="button"
        className={filled ? "bg-green-600 w-24 h-24" : "bg-white w-24 h-24" }
        onClick={onClick}
        disabled={isDisabled}
      ></button>
   
  );
};
