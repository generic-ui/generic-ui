import { ElementRef, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { HermesObservable } from '@generic-ui/hermes';
import { GuiSubscriber } from '../gui.subscriber';
import * as i0 from "@angular/core";
export declare class GuiStyleDirective implements OnChanges, OnDestroy {
    private readonly subscriber;
    private readonly elementRef;
    private static readonly STYLE;
    guiStyle: HermesObservable<{
        [key: string]: string;
    }>;
    constructor(subscriber: GuiSubscriber, elementRef: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private setStyleByName;
    private set;
    static ɵfac: i0.ɵɵFactoryDeclaration<GuiStyleDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<GuiStyleDirective, "[guiStyle]", never, { "guiStyle": "guiStyle"; }, {}, never, never, false, never>;
}
