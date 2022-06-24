import { ApplicationRef, ComponentFactoryResolver, Injector, OnDestroy, Type } from '@angular/core';
import { FabricNotificationsOverlayComponent } from './fabric-notifications-overlay.component';
import { FabricNotification } from './fabric-notification';
import { FabricNotificationConfig } from './fabric-notification-config';
import { FabricModal } from '../../common/modal/fabric-modal';
import * as i0 from "@angular/core";
export declare class FabricNotificationService extends FabricModal<FabricNotificationsOverlayComponent> implements OnDestroy {
    private static readonly DEFAULT_DURATION;
    fabricNotification?: FabricNotification;
    notificationIndex: number;
    private readonly unsub$;
    constructor(componentFactoryResolver: ComponentFactoryResolver, applicationRef: ApplicationRef, injector: Injector, document: any);
    ngOnDestroy(): void;
    getComponent(): Type<FabricNotificationsOverlayComponent>;
    open(notification: string, config?: FabricNotificationConfig): void;
    close(): void;
    private removeNotificationContainer;
    private createFabricNotification;
    private pushNotification;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricNotificationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FabricNotificationService>;
}
