import { OnChanges, OnDestroy, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { HermesObservable } from '@generic-ui/hermes';
import { GuiSubscriber } from '../gui.subscriber';
import * as i0 from "@angular/core";
export declare class GuiIfDirective implements OnChanges, OnDestroy {
    private readonly subscriber;
    private readonly vcr;
    private readonly template;
    guiIf: HermesObservable<boolean>;
    constructor(subscriber: GuiSubscriber, vcr: ViewContainerRef, template: TemplateRef<any>);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GuiIfDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<GuiIfDirective, "[guiIf]", never, { "guiIf": { "alias": "guiIf"; "required": false; }; }, {}, never, never, false, never>;
}
