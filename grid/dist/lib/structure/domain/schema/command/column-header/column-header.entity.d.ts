export declare class ColumnHeaderEntity {
    private top;
    private bottom;
    constructor(top: boolean, bottom: boolean);
    setHeaderTop(enabled: boolean): void;
    setHeaderBottom(enabled: boolean): void;
    isHeaderOnTop(): boolean;
    isHeaderOnBottom(): boolean;
}
