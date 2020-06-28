import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injector, OnDestroy } from '@angular/core';
import { FabricNotificationsContainerComponent } from './fabric-notifications-container.component';
import { FabricNotification } from './fabric-notification';
import { FabricNotificationConfig } from './fabric-notification-config';
export declare class FabricNotificationService implements OnDestroy {
    private readonly componentFactoryResolver;
    private readonly applicationRef;
    private readonly injector;
    private readonly document;
    private static readonly DEFAULT_DURATION;
    notificationContainer: ComponentRef<FabricNotificationsContainerComponent>;
    fabricNotification: FabricNotification;
    notificationIndex: number;
    private readonly unsub$;
    constructor(componentFactoryResolver: ComponentFactoryResolver, applicationRef: ApplicationRef, injector: Injector, document: any);
    ngOnDestroy(): void;
    open(notification: string, config?: FabricNotificationConfig): void;
    close(): void;
    private createAndAppend;
    private removeNotificationContainer;
    private createFabricNotification;
}
