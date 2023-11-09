import { ChangeDetectorRef, TemplateRef, ViewContainerRef } from '@angular/core';
export declare class GuiLetViewChanger {
    private readonly cd;
    private readonly vcr;
    private readonly template;
    constructor(cd: ChangeDetectorRef, vcr: ViewContainerRef, template: TemplateRef<any>);
    onNext(v: any): void;
}
