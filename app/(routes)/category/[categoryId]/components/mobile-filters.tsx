"use client";
import Button from "@/components/ui/button";
import { Color, Size } from "@/types";
import { Dialog } from "@headlessui/react";
import { Plus } from "lucide-react";
import { useState } from "react";

interface MobileFilterProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<MobileFilterProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>
      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        {/* Background */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        {/* Dialog Position */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="rea"></Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
