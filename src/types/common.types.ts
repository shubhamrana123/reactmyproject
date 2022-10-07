export interface IInputFields {

    required: any,
    maxLength: number,
    minLength: number
}


export interface IInputProps {
    controller: any,
    type: any,
    fields: IInputFields,
    register: (controller: string, fields: IInputFields) => {},
    errors: any
    label: any,
    placeholder:any
}
export interface IModal {
    Title : string,
    component : any,
    onClose: any
}