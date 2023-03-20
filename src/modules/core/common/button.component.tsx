import { Button } from "react-bootstrap";
import { ButtonProps } from "../interface";

function ModButton({
    className,
    element,
    event,
    variant,
    size,
    disabled,
}: ButtonProps) {
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
