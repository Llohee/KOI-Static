import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogPortal,
} from "./dialog";
import Button from "./button";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
  handleFormSubmit: () => void;
  label?: string;
  actionButtonLabel?: string;
}

const Modal = (props: ModalProps) => {
  return (
    <>
      <Dialog open={props.isOpen} onOpenChange={props.closeModal}>
        <DialogPortal>
          <DialogContent>
            <DialogHeader>{props.label ? props.label : "Create"}</DialogHeader>
            {props.children}
            <DialogFooter>
              <DialogClose asChild>
                <Button styleBtn={"outline"} size={"sm"}>
                  Close
                </Button>
              </DialogClose>
              <Button
                intent={"default"}
                size={"sm"}
                type={"button"}
                onClick={props.handleFormSubmit}
              >
                {props.actionButtonLabel ? props.actionButtonLabel : "Create"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </>
  );
};

export default Modal;
