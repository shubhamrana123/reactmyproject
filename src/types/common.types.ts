export interface IInputFields {

    required: any,
    maxLength: number,
    minLength: number
}


export interface IInputProps {
    controller: any,
    type: any,
    fields: IInputFields,
    register: any,
    errors: any
    label: any,
}
export interface IModal {
    Title : string,
    component : any,
    onClose: any
}