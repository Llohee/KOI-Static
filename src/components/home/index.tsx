import { useTranslation } from "react-i18next";
import Button from "../ui/button";
import { useState } from "react";
import Modal from "../ui/modal";
import { toast } from "sonner";

const HomeWrapper = () => {
  const { t } = useTranslation();
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-8">
        <div className="flex gap-4 items-center">
          <div className="text-heading-1">{t("Landing.title")}</div>
          <div className="text-heading-2">{t("Landing.title")}</div>
          <div className="text-heading-3">{t("Landing.title")}</div>
        </div>
        <div className="flex gap-4 items-center">
          <Button
            intent={"default"}
            size={"lg"}
            onClick={() => setIsOpenModal(true)}
          >
            Modal
          </Button>
          <Button intent={"default"} size={"md"} disabled>
            Default medium
          </Button>
          <Button intent={"default"} size={"sm"} isLoading>
            Default small
          </Button>
        </div>
        <div className="flex gap-4 items-center">
          <Button
            intent={"default"}
            styleBtn={"outline"}
            size={"lg"}
            onClick={() =>
              toast.success("hello", {
                description: "Hello",
                action: {
                  label: "Close",
                  onClick: () => toast.dismiss(),
                },
              })
            }
          >
            Toast
          </Button>
          <Button intent={"default"} styleBtn={"outline"} size={"md"}>
            Default medium
          </Button>
          <Button intent={"default"} styleBtn={"outline"} size={"sm"}>
            Default small
          </Button>
        </div>
        <div className="flex gap-4 items-center">
          <Button intent={"primary"} size={"lg"}>
            Primary large
          </Button>
          <Button intent={"primary"} size={"md"}>
            Primary medium
          </Button>
          <Button intent={"primary"} size={"sm"}>
            Primary small
          </Button>
        </div>
        <div className="flex gap-4">
          <Button intent={"primary"} styleBtn={"outline"} size={"lg"}>
            Primary large
          </Button>
          <Button intent={"primary"} styleBtn={"outline"} size={"md"}>
            Primary medium
          </Button>
          <Button intent={"primary"} styleBtn={"outline"} size={"sm"}>
            Primary small
          </Button>
        </div>
      </div>
      <Modal
        isOpen={isOpenModal}
        closeModal={() => setIsOpenModal(false)}
        handleFormSubmit={() => {}}
      >
        <div className="h-[200px] px-6">Modal content</div>
      </Modal>
    </div>
  );
};

export default HomeWrapper;
