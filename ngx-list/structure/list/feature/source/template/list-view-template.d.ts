import { TemplateRef } from '@angular/core';
export declare class ListViewTemplate {
    private readonly template;
    private readonly templRef;
    constructor(template: (item: any) => string, templRef: TemplateRef<any>);
    hasTemplateRef(): boolean;
    getTemplateRef(): TemplateRef<any>;
    getTemplateMethod(): (item: any) => string;
}
//# sourceMappingURL=list-view-template.d.ts.map