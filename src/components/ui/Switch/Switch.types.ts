export interface SwitchProps {
    id?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    customClass?: {
        container?: string;
    };
}
