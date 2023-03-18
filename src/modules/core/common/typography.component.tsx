interface Typo extends React.HTMLAttributes<HTMLSpanElement> {
    element?: React.ReactNode;
    className?: string;
    color?: string;
    variant?: string;
    as?: string;
}

function Typography({ element, className, color, variant, as, ...rest }: Typo) {
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
