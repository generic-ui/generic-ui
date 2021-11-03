import { Injector } from '@angular/core';
import { Theme } from '../../themes/theme';
import { FabricNotificationTimer } from './fabric-notification-timer';
import { FabricNotificationPosition } from './fabric-notification-position';
export interface FabricNotificationConfig {
    injector?: Injector;
    theme?: Theme;
    timer?: FabricNotificationTimer;
    position?: FabricNotificationPosition;
}
//# sourceMappingURL=fabric-notification-config.d.ts.map