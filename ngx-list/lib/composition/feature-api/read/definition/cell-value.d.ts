export declare enum CellValueType {
    TEXT = 0,
    HTML = 1
}
export declare class CellValue {
    value: any;
    readonly type: CellValueType;
    constructor(value: any, type: CellValueType);
    static text(value: any): CellValue;
    static HTML(value: any): CellValue;
}
