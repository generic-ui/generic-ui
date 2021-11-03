import { EventEmitter } from '@angular/core';
import { FabricNotification } from './fabric-notification';
import { FabricNotificationPosition } from './fabric-notification-position';
import * as i0 from "@angular/core";
export declare class FabricNotificationsContainerComponent {
    notifications: Array<FabricNotification>;
    position: FabricNotificationPosition;
    onNotificationClose: EventEmitter<any>;
    FabricNotificationPosition: typeof FabricNotificationPosition;
    emitClosedNotification(selectedNotification: FabricNotification): void;
    isPosition(fabricNotificationPosition: FabricNotificationPosition): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricNotificationsContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FabricNotificationsContainerComponent, "gui-notifications-container", never, { "notifications": "notifications"; "position": "position"; }, { "onNotificationClose": "onNotificationClose"; }, never, never>;
}
//# sourceMappingURL=fabric-notifications-container.component.d.ts.map