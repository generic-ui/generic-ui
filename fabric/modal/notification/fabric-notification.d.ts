import { FabricNotificationTimer } from './fabric-notification-timer';
import { FabricNotificationPosition } from './fabric-notification-position';
export declare class FabricNotification {
    readonly description: string;
    readonly index: number;
    readonly timer: FabricNotificationTimer;
    readonly position: FabricNotificationPosition;
    constructor(description: string, index: number, timer: FabricNotificationTimer, position: FabricNotificationPosition);
}
