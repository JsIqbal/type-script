import { Button } from "react-bootstrap";

interface Props {
    className?: string;
    element?: React.ReactNode;
    event?: () => void;
    variant?: string;
    size?: "sm" | "lg";
    disabled?: boolean;
}

function ModButton({
    className,
    element,
    event,
    variant,
    size,
    disabled,
}: Props) {
    return (
        <Button
            // variant={variant ? variant : "gradient"}
            size={size}
            className={className}
            onClick={event}
            disabled={disabled}
        >
            {element}
        </Button>
    );
}

export default ModButton;
