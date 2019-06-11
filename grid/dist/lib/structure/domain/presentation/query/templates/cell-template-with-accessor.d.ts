import { TemplateRef } from '@angular/core';
export declare class CellTemplateWithAccessor {
    template: TemplateRef<any>;
    accessor: (element: any) => any;
    width: number;
    constructor(template: TemplateRef<any>, accessor: (element: any) => any, width: number);
}
