import { Button } from "react-bootstrap";

interface Props {
    className?: string;
    element?: React.ReactNode;
    event?: () => void;
    variant?: string;
    size?: "sm" | "lg";
}

function ModButton({ className, element, event, variant, size }: Props) {
    return (
        <Button
            // variant={variant ? variant : "gradient"}
            size={size}
            className={className}
            onClick={event}
        >
            {element}
        </Button>
    );
}

export default ModButton;
