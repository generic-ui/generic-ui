import { OnChanges, OnDestroy, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { HermesObservable } from '@generic-ui/hermes';
import { GuiSubscriber } from '../gui.subscriber';
import * as i0 from "@angular/core";
export declare class GuiForDirective implements OnChanges, OnDestroy {
    private readonly subscriber;
    private readonly vcr;
    private readonly template;
    guiForOf: HermesObservable<Array<any>>;
    constructor(subscriber: GuiSubscriber, vcr: ViewContainerRef, template: TemplateRef<any>);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GuiForDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<GuiForDirective, "[guiFor]", never, { "guiForOf": "guiForOf"; }, {}, never, never, false, never>;
}
