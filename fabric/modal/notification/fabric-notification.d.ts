import { FabricNotificationTimer } from './fabric-notification-timer';
export declare class FabricNotification {
    readonly description: string;
    readonly index: number;
    readonly timer: FabricNotificationTimer;
    constructor(description: string, index: number, timer: FabricNotificationTimer);
}
