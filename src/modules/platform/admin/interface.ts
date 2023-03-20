export interface Campaign {
    id: number;
    name: string;
    createdBy: string;
    status: string;
    time: string;
    impression: string;
    totatlBA: string;
    allow_duplicate: boolean;
    description: string;
}

export interface ActionProp {
    disabled?: boolean;
    modalIsOpen: boolean;
    openModal: () => void;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    item?: any;
}
