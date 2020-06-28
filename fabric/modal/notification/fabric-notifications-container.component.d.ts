import { AfterViewInit, ChangeDetectorRef, ComponentFactoryResolver, ElementRef, Renderer2 } from '@angular/core';
import { FabricNotificationService } from './fabric-notification.service';
import { Theme } from '../../themes/theme';
import { DialogComponent } from '../common/dialog.component';
import { FabricNotification } from './fabric-notification';
export declare class FabricNotificationsContainerComponent extends DialogComponent implements AfterViewInit {
    readonly changeDetectorRef: ChangeDetectorRef;
    private readonly componentFactoryResolver;
    private readonly elRef;
    private readonly notificationsService;
    notifications: Array<FabricNotification>;
    constructor(changeDetectorRef: ChangeDetectorRef, componentFactoryResolver: ComponentFactoryResolver, elRef: ElementRef, renderer: Renderer2, theme: Theme, notificationsService: FabricNotificationService);
    ngAfterViewInit(): void;
    removeNotification(index: number): void;
    checkNotificationsLength(): void;
}
