import { ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FabricNotification } from './fabric-notification';
export declare class FabricNotificationComponent implements OnInit, OnDestroy {
    private renderer;
    notificationRef: ElementRef;
    notification: FabricNotification;
    onNotificationClose: EventEmitter<number>;
    private readonly unsub$;
    constructor(renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    closeNotification(): void;
    addCloseAnimation(): void;
}
