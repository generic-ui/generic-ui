import { ChangeDetectorRef, ComponentFactoryResolver, ElementRef, Renderer2 } from '@angular/core';
import { FabricNotificationService } from './fabric-notification.service';
import { Theme } from '../../themes/theme';
import { FabricNotification } from './fabric-notification';
import { FabricNotificationPosition } from './fabric-notification-position';
import { FabricThemedComponent } from '../../common/modal/fabric-themed-component';
import { FabricModalThemeService } from '../../themes/fabric-modal-theme.service';
import * as i0 from "@angular/core";
export declare class FabricNotificationsOverlayComponent extends FabricThemedComponent {
    private readonly changeDetectorRef;
    private readonly componentFactoryResolver;
    private readonly elRef;
    private readonly notificationsService;
    notificationsTopRight: Array<FabricNotification>;
    notificationsTopLeft: Array<FabricNotification>;
    notificationsBottomRight: Array<FabricNotification>;
    notificationsBottomLeft: Array<FabricNotification>;
    FabricNotificationPosition: typeof FabricNotificationPosition;
    constructor(changeDetectorRef: ChangeDetectorRef, componentFactoryResolver: ComponentFactoryResolver, elRef: ElementRef, renderer: Renderer2, themeService: FabricModalThemeService, theme: Theme, notificationsService: FabricNotificationService);
    removeNotification(selectedNotification: FabricNotification): void;
    detectChanges(): void;
    checkNotificationsLength(): void;
    isContainerNotEmpty(container: Array<FabricNotification>): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricNotificationsOverlayComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FabricNotificationsOverlayComponent, "ng-component", never, {}, {}, never, never>;
}
//# sourceMappingURL=fabric-notifications-overlay.component.d.ts.map