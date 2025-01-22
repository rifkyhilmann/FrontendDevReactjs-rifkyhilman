export interface InputFieldProps {
    label : string;
    name : string;
    type : string;
    placeholder : string;
    className : string;
    id : string;
    error : string;
}

export interface CardItemsProps {
    id : string;
    title : string;
    rating : number;
    price : number;
    image : string;
    isOpen : boolean;
    category : string;
}