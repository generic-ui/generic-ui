import { ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FabricNotification } from './fabric-notification';
import * as i0 from "@angular/core";
export declare class FabricNotificationComponent implements OnInit, OnDestroy {
    private readonly renderer;
    readonly notificationRef?: ElementRef;
    notification?: FabricNotification;
    readonly onNotificationClose: EventEmitter<FabricNotification>;
    private readonly unsub$;
    constructor(renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    closeNotification(): void;
    addCloseAnimation(): void;
    isRightSide(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricNotificationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FabricNotificationComponent, "gui-notification", never, { "notification": "notification"; }, { "onNotificationClose": "onNotificationClose"; }, never, never>;
}
