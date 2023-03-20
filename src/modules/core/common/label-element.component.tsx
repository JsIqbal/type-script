interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    htmlFor: string;
    title: string;
}

const Label = ({ htmlFor, title }: LabelProps) => {
    return <label htmlFor={htmlFor}>{title}</label>;
};

export default Label;
