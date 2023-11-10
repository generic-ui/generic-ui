import { ChangeDetectorRef, OnChanges, OnDestroy, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { HermesObservable } from '@generic-ui/hermes';
import { GuiSubscriber } from '../gui.subscriber';
import * as i0 from "@angular/core";
export declare class GuiLetDirective implements OnChanges, OnDestroy {
    private readonly subscriber;
    private readonly cd;
    private readonly vcr;
    private readonly template;
    guiLet: HermesObservable<any>;
    private readonly guiLetViewChanger;
    constructor(subscriber: GuiSubscriber, cd: ChangeDetectorRef, vcr: ViewContainerRef, template: TemplateRef<any>);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GuiLetDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<GuiLetDirective, "[guiLet]", never, { "guiLet": { "alias": "guiLet"; "required": false; }; }, {}, never, never, false, never>;
}
