type Props = {
    isOpen: boolean;
    callPhone: string;
    error?: string;
    onClose?: () => void;
    isVerifying?: boolean;
};
declare const AuthCallModal: ({ isOpen, callPhone, error, onClose, isVerifying }: Props) => import("react/jsx-runtime").JSX.Element | null;
export default AuthCallModal;
