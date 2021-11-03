import { EventEmitter } from '@angular/core';
import { FabricNotification } from './fabric-notification';
import { FabricNotificationPosition } from './fabric-notification-position';
export declare class FabricNotificationsContainerComponent {
    notifications: Array<FabricNotification>;
    position: FabricNotificationPosition;
    onNotificationClose: EventEmitter<any>;
    FabricNotificationPosition: typeof FabricNotificationPosition;
    emitClosedNotification(selectedNotification: FabricNotification): void;
    isPosition(fabricNotificationPosition: FabricNotificationPosition): boolean;
}
