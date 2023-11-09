import { ElementRef, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { HermesObservable } from '@generic-ui/hermes';
import { GuiSubscriber } from '../gui.subscriber';
import * as i0 from "@angular/core";
export declare class GuiClassDirective implements OnChanges, OnDestroy {
    private readonly subscriber;
    private readonly elementRef;
    guiClass: HermesObservable<Array<string>>;
    private readonly manager;
    constructor(subscriber: GuiSubscriber, elementRef: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GuiClassDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<GuiClassDirective, "[guiClass]", never, { "guiClass": "guiClass"; }, {}, never, never, false, never>;
}
