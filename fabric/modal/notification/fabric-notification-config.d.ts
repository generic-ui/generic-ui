import { Injector } from '@angular/core';
import { Theme } from '../../themes/theme';
import { FabricNotificationTimer } from './fabric-notification-timer';
export interface FabricNotificationConfig {
    injector?: Injector;
    theme?: Theme;
    timer?: FabricNotificationTimer;
}
