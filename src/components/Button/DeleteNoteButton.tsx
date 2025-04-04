import { FaRegTrashCan } from "react-icons/fa6";
import { ActionButton, type ActionButtonProps } from "./ActionButton";
export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  return (
    <ActionButton {...props}>
      <FaRegTrashCan className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  );
};
