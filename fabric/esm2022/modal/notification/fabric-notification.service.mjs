import { Inject, Injectable, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';
import { FabricNotificationsOverlayComponent } from './fabric-notifications-overlay.component';
import { Theme } from '../../themes/theme';
import { themeToken } from '../../themes/theme.token';
import { FabricNotification } from './fabric-notification';
import { FabricModal } from '../../common/modal/fabric-modal';
import { FabricNotificationPosition } from './fabric-notification-position';
import * as i0 from "@angular/core";
export class FabricNotificationService extends FabricModal {
    static DEFAULT_DURATION = 4000;
    fabricNotification;
    notificationIndex = 0;
    unsub$ = new Subject();
    constructor(componentFactoryResolver, applicationRef, injector, document) {
        super(componentFactoryResolver, applicationRef, injector, document);
    }
    ngOnDestroy() {
        this.removeNotificationContainer();
    }
    getComponent() {
        return FabricNotificationsOverlayComponent;
    }
    open(notification, config) {
        let position = FabricNotificationPosition.TOP_RIGHT;
        if (config && config.position) {
            position = config.position;
        }
        this.createFabricNotification(notification, position, config);
        if (!this.isComponentCreated()) {
            let theme = Theme.FABRIC, parentInjector = this.getInjector();
            if (config && config.theme) {
                theme = config.theme;
            }
            if (config && config.injector) {
                parentInjector = config.injector;
            }
            const injector = Injector.create({
                providers: [{
                        provide: themeToken,
                        useValue: theme
                    }],
                parent: parentInjector
            });
            this.createAndAppend({ injector });
            this.pushNotification(position);
        }
        else {
            this.pushNotification(position);
        }
    }
    close() {
        this.removeNotificationContainer();
        this.unsub$.next();
        this.unsub$.complete();
    }
    removeNotificationContainer() {
        if (this.isComponentCreated()) {
            this.removeComponent();
            this.notificationIndex = 0;
        }
    }
    createFabricNotification(description, position, config) {
        let duration = FabricNotificationService.DEFAULT_DURATION, enabled = true;
        if (config && config.timer) {
            if (config.timer.duration) {
                duration = config.timer.duration;
                if (config.timer.extendTimer) {
                    duration = config.timer.duration * (this.notificationIndex + 1);
                }
            }
            if (config.timer.enabled !== undefined) {
                enabled = config.timer.enabled;
            }
        }
        this.fabricNotification = new FabricNotification(description, this.notificationIndex, { duration, enabled }, position);
        this.notificationIndex += 1;
    }
    pushNotification(position) {
        if (!this.fabricNotification || !this.isComponentCreated()) {
            return;
        }
        const componentRef = this.getComponentRef();
        switch (position) {
            case FabricNotificationPosition.TOP_RIGHT:
                componentRef.instance.notificationsTopRight =
                    componentRef.instance.notificationsTopRight.concat(this.fabricNotification);
                break;
            case FabricNotificationPosition.TOP_LEFT:
                componentRef.instance.notificationsTopLeft =
                    componentRef.instance.notificationsTopLeft.concat(this.fabricNotification);
                break;
            case FabricNotificationPosition.BOTTOM_RIGHT:
                componentRef.instance.notificationsBottomRight =
                    componentRef.instance.notificationsBottomRight.concat(this.fabricNotification);
                break;
            case FabricNotificationPosition.BOTTOM_LEFT:
                componentRef.instance.notificationsBottomLeft =
                    componentRef.instance.notificationsBottomLeft.concat(this.fabricNotification);
                break;
            default:
                break;
        }
        componentRef.instance.detectChanges();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricNotificationService, deps: [{ token: i0.ComponentFactoryResolver }, { token: i0.ApplicationRef }, { token: i0.Injector }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricNotificationService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricNotificationService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL21vZGFsL25vdGlmaWNhdGlvbi9mYWJyaWMtbm90aWZpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUEwRCxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBbUIsTUFBTSxlQUFlLENBQUM7QUFDdEksT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDL0YsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBSTVFLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxXQUFnRDtJQUV0RixNQUFNLENBQVUsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0lBRWhELGtCQUFrQixDQUFzQjtJQUV4QyxpQkFBaUIsR0FBVyxDQUFDLENBQUM7SUFFYixNQUFNLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQUU5QyxZQUFZLHdCQUFrRCxFQUMzRCxjQUE4QixFQUM5QixRQUFrQixFQUNBLFFBQWE7UUFDakMsS0FBSyxDQUFDLHdCQUF3QixFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELFdB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eUIsZ0hBYTFCLFFBQVE7MkdBYlAseUJBQXlCOzsyRkFBekIseUJBQXlCO2tCQURyQyxVQUFVOzswQkFjTixNQUFNOzJCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIE9uRGVzdHJveSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb25zT3ZlcmxheUNvbXBvbmVudCB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbnMtb3ZlcmxheS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUnO1xuaW1wb3J0IHsgdGhlbWVUb2tlbiB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZS50b2tlbic7XG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb24gfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgRmFicmljTm90aWZpY2F0aW9uQ29uZmlnIH0gZnJvbSAnLi9mYWJyaWMtbm90aWZpY2F0aW9uLWNvbmZpZyc7XG5pbXBvcnQgeyBGYWJyaWNNb2RhbCB9IGZyb20gJy4uLy4uL2NvbW1vbi9tb2RhbC9mYWJyaWMtbW9kYWwnO1xuaW1wb3J0IHsgRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24gfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb24tcG9zaXRpb24nO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWJyaWNOb3RpZmljYXRpb25TZXJ2aWNlIGV4dGVuZHMgRmFicmljTW9kYWw8RmFicmljTm90aWZpY2F0aW9uc092ZXJsYXlDb21wb25lbnQ+IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0RVUkFUSU9OID0gNDAwMDtcblxuXHRmYWJyaWNOb3RpZmljYXRpb24/OiBGYWJyaWNOb3RpZmljYXRpb247XG5cblx0bm90aWZpY2F0aW9uSW5kZXg6IG51bWJlciA9IDA7XG5cblx0cHJpdmF0ZSByZWFkb25seSB1bnN1YiQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG5cdGNvbnN0cnVjdG9yKGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRhcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYsXG5cdFx0XHRcdGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0QEluamVjdChET0NVTUVOVCkgZG9jdW1lbnQ6IGFueSkge1xuXHRcdHN1cGVyKGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgYXBwbGljYXRpb25SZWYsIGluamVjdG9yLCBkb2N1bWVudCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnJlbW92ZU5vdGlmaWNhdGlvbkNvbnRhaW5lcigpO1xuXHR9XG5cblx0Z2V0Q29tcG9uZW50KCk6IFR5cGU8RmFicmljTm90aWZpY2F0aW9uc092ZXJsYXlDb21wb25lbnQ+IHtcblx0XHRyZXR1cm4gRmFicmljTm90aWZpY2F0aW9uc092ZXJsYXlDb21wb25lbnQ7XG5cdH1cblxuXHRvcGVuKG5vdGlmaWNhdGlvbjogc3RyaW5nLCBjb25maWc/OiBGYWJyaWNOb3RpZmljYXRpb25Db25maWcpOiB2b2lkIHtcblx0XHRsZXQgcG9zaXRpb24gPSBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbi5UT1BfUklHSFQ7XG5cblx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy5wb3NpdGlvbikge1xuXHRcdFx0cG9zaXRpb24gPSBjb25maWcucG9zaXRpb247XG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVGYWJyaWNOb3RpZmljYXRpb24obm90aWZpY2F0aW9uLCBwb3NpdGlvbiwgY29uZmlnKTtcblxuXHRcdGlmICghdGhpcy5pc0NvbXBvbmVudENyZWF0ZWQoKSkge1xuXG5cdFx0XHRsZXQgdGhlbWUgPSBUaGVtZS5GQUJSSUMsXG5cdFx0XHRcdHBhcmVudEluamVjdG9yID0gdGhpcy5nZXRJbmplY3RvcigpO1xuXG5cblx0XHRcdGlmIChjb25maWcgJiYgY29uZmlnLnRoZW1lKSB7XG5cdFx0XHRcdHRoZW1lID0gY29uZmlnLnRoZW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy5pbmplY3Rvcikge1xuXHRcdFx0XHRwYXJlbnRJbmplY3RvciA9IGNvbmZpZy5pbmplY3Rvcjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcblx0XHRcdFx0cHJvdmlkZXJzOiBbe1xuXHRcdFx0XHRcdHByb3ZpZGU6IHRoZW1lVG9rZW4sXG5cdFx0XHRcdFx0dXNlVmFsdWU6IHRoZW1lXG5cdFx0XHRcdH1dLFxuXHRcdFx0XHRwYXJlbnQ6IHBhcmVudEluamVjdG9yXG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5jcmVhdGVBbmRBcHBlbmQoeyBpbmplY3RvciB9KTtcblx0XHRcdHRoaXMucHVzaE5vdGlmaWNhdGlvbihwb3NpdGlvbik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucHVzaE5vdGlmaWNhdGlvbihwb3NpdGlvbik7XG5cdFx0fVxuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0dGhpcy5yZW1vdmVOb3RpZmljYXRpb25Db250YWluZXIoKTtcblx0XHR0aGlzLnVuc3ViJC5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YiQuY29tcGxldGUoKTtcblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlTm90aWZpY2F0aW9uQ29udGFpbmVyKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzQ29tcG9uZW50Q3JlYXRlZCgpKSB7XG5cdFx0XHR0aGlzLnJlbW92ZUNvbXBvbmVudCgpO1xuXHRcdFx0dGhpcy5ub3RpZmljYXRpb25JbmRleCA9IDA7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVGYWJyaWNOb3RpZmljYXRpb24oZGVzY3JpcHRpb246IHN0cmluZywgcG9zaXRpb246IEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uLCBjb25maWc/OiBGYWJyaWNOb3RpZmljYXRpb25Db25maWcpOiB2b2lkIHtcblx0XHRsZXQgZHVyYXRpb24gPSBGYWJyaWNOb3RpZmljYXRpb25TZXJ2aWNlLkRFRkFVTFRfRFVSQVRJT04sXG5cdFx0XHRlbmFibGVkID0gdHJ1ZTtcblxuXHRcdGlmIChjb25maWcgJiYgY29uZmlnLnRpbWVyKSB7XG5cblx0XHRcdGlmIChjb25maWcudGltZXIuZHVyYXRpb24pIHtcblx0XHRcdFx0ZHVyYXRpb24gPSBjb25maWcudGltZXIuZHVyYXRpb247XG5cblx0XHRcdFx0aWYgKGNvbmZpZy50aW1lci5leHRlbmRUaW1lcikge1xuXHRcdFx0XHRcdGR1cmF0aW9uID0gY29uZmlnLnRpbWVyLmR1cmF0aW9uICogKHRoaXMubm90aWZpY2F0aW9uSW5kZXggKyAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY29uZmlnLnRpbWVyLmVuYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRlbmFibGVkID0gY29uZmlnLnRpbWVyLmVuYWJsZWQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5mYWJyaWNOb3RpZmljYXRpb24gPSBuZXcgRmFicmljTm90aWZpY2F0aW9uKFxuXHRcdFx0ZGVzY3JpcHRpb24sXG5cdFx0XHR0aGlzLm5vdGlmaWNhdGlvbkluZGV4LFxuXHRcdFx0eyBkdXJhdGlvbiwgZW5hYmxlZCB9LFxuXHRcdFx0cG9zaXRpb24pO1xuXHRcdHRoaXMubm90aWZpY2F0aW9uSW5kZXggKz0gMTtcblx0fVxuXG5cdHByaXZhdGUgcHVzaE5vdGlmaWNhdGlvbihwb3NpdGlvbjogRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24pOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuZmFicmljTm90aWZpY2F0aW9uIHx8ICF0aGlzLmlzQ29tcG9uZW50Q3JlYXRlZCgpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuZ2V0Q29tcG9uZW50UmVmKCkgYXMgQ29tcG9uZW50UmVmPEZhYnJpY05vdGlmaWNhdGlvbnNPdmVybGF5Q29tcG9uZW50PjtcblxuXHRcdHN3aXRjaCAocG9zaXRpb24pIHtcblxuXHRcdFx0Y2FzZSBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbi5UT1BfUklHSFQ6XG5cdFx0XHRcdGNvbXBvbmVudFJlZi5pbnN0YW5jZS5ub3RpZmljYXRpb25zVG9wUmlnaHQgPVxuXHRcdFx0XHRcdGNvbXBvbmVudFJlZi5pbnN0YW5jZS5ub3RpZmljYXRpb25zVG9wUmlnaHQuY29uY2F0KHRoaXMuZmFicmljTm90aWZpY2F0aW9uKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uVE9QX0xFRlQ6XG5cdFx0XHRcdGNvbXBvbmVudFJlZi5pbnN0YW5jZS5ub3RpZmljYXRpb25zVG9wTGVmdCA9XG5cdFx0XHRcdFx0Y29tcG9uZW50UmVmLmluc3RhbmNlLm5vdGlmaWNhdGlvbnNUb3BMZWZ0LmNvbmNhdCh0aGlzLmZhYnJpY05vdGlmaWNhdGlvbik7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uLkJPVFRPTV9SSUdIVDpcblx0XHRcdFx0Y29tcG9uZW50UmVmLmluc3RhbmNlLm5vdGlmaWNhdGlvbnNCb3R0b21SaWdodCA9XG5cdFx0XHRcdFx0Y29tcG9uZW50UmVmLmluc3RhbmNlLm5vdGlmaWNhdGlvbnNCb3R0b21SaWdodC5jb25jYXQodGhpcy5mYWJyaWNOb3RpZmljYXRpb24pO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbi5CT1RUT01fTEVGVDpcblx0XHRcdFx0Y29tcG9uZW50UmVmLmluc3RhbmNlLm5vdGlmaWNhdGlvbnNCb3R0b21MZWZ0ID1cblx0XHRcdFx0XHRjb21wb25lbnRSZWYuaW5zdGFuY2Uubm90aWZpY2F0aW9uc0JvdHRvbUxlZnQuY29uY2F0KHRoaXMuZmFicmljTm90aWZpY2F0aW9uKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGNvbXBvbmVudFJlZi5pbnN0YW5jZS5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cbn1cbiJdfQ==