import { ChangeDetectorRef } from '@angular/core';
import { HermesObservable } from '@generic-ui/hermes';
export declare class GuiPushSubscriber {
    private readonly cd;
    private value;
    private actualObs$;
    private baseValues$;
    private destroy$;
    constructor(cd: ChangeDetectorRef);
    destroy(): void;
    subscribe<T>(value: HermesObservable<T>): any;
    scheduleCD(): void;
}
