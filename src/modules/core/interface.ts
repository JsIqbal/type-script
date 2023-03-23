export interface ButtonProps {
    className?: string;
    element?: React.ReactNode;
    event?: () => void;
    variant?: string;
    size?: "sm" | "lg";
    disabled?: boolean;
}

export interface TypoProps extends React.HTMLAttributes<HTMLSpanElement> {
    element?: React.ReactNode;
    className?: string;
    color?: string;
    variant?: string;
    as?: string;
    event?: () => void;
}
