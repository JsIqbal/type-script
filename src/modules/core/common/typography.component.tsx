import { TypoProps } from "../interface";

function Typography({
    element,
    className,
    color,
    variant,
    as,
    ...rest
}: TypoProps) {
    return (
        <span
            {...rest}
            className={className ? className : "p-1 font-normal"}
            style={{ color: color ? color : "blue-gray" }}
        >
            {element}
        </span>
    );
}

export default Typography;
