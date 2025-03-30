import { LuSignature } from "react-icons/lu";
import { ActionButton, type ActionButtonProps } from "./ActionButton.tsx";
export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  return (
    <ActionButton {...props}>
      <LuSignature className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  );
};
