import { OnDestroy, PipeTransform } from '@angular/core';
import { HermesObservable } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export declare class GuiPushPipe implements PipeTransform, OnDestroy {
    private readonly cd;
    private readonly subscriber;
    transform<T>(value: HermesObservable<T>): T;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GuiPushPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<GuiPushPipe, "guiPush", false>;
}
