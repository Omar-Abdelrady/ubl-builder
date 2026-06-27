interface IGenericKeyValue<T> {
    [id: string]: T;
}
type SchemaDocumentChild = {
    order: number;
    childName: string;
    min: number;
    max?: number;
};
export declare const INVOICE_CHILDREN_MAP: IGenericKeyValue<SchemaDocumentChild>;
export {};
