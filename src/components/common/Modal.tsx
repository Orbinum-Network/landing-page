import { Icon } from "@iconify/react/dist/iconify.js";
import { ReactNode } from "react";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    children: ReactNode;
}

export const Modal = ({ isOpen = true, onClose, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                >
                    <Icon icon="material-symbols:close" width="24" height="24" />
                </button>
                {children}
            </div>
        </div>
    );
};