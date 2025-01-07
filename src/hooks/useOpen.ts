import { useState } from "react";

const useOpen = () => {
    const [open, setOpen] = useState(true);

    const onOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onOpenToggle = () => {
        setOpen((prev) => !prev);
    };

    return { open, onOpen, onClose, onOpenToggle };
};

export default useOpen;
