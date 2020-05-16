import { TemplateRef } from '@angular/core';
export declare class ListCardTemplate {
    private readonly template;
    private readonly templRef;
    constructor(template: (item: any) => string, templRef: TemplateRef<any>);
    hasTemplateRef(): boolean;
    getTemplateRef(): TemplateRef<any>;
    getTemplateMethod(): (item: any) => string;
}
