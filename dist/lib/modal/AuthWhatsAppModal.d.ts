type Props = {
    isOpen: boolean;
    phone: string;
    isVerifying: boolean;
    error?: string;
    onClose: () => void;
    onSubmit: (code: string) => void;
};
declare const AuthWhatsAppModal: ({ isOpen, phone, isVerifying, error, onClose, onSubmit, }: Props) => import("react/jsx-runtime").JSX.Element | null;
export default AuthWhatsAppModal;
