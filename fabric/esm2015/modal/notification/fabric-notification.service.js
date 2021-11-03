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
    constructor(componentFactoryResolver, applicationRef, injector, document) {
        super(componentFactoryResolver, applicationRef, injector, document);
        this.notificationIndex = 0;
        this.unsub$ = new Subject();
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
        this.createFabricNotification(notification, config, position);
        if (!this.getComponentRef()) {
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
            this.createAndAppend(injector);
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
        if (this.getComponentRef()) {
            this.removeComponent();
            this.notificationIndex = 0;
            this.fabricNotification = null;
        }
    }
    createFabricNotification(description, config, position) {
        let duration = FabricNotificationService.DEFAULT_DURATION, enabled = true;
        if (config && config.timer) {
            duration = config.timer.duration;
            if (config.timer.extendTimer) {
                duration = config.timer.duration * (this.notificationIndex + 1);
            }
            if (config.timer.enabled !== undefined) {
                enabled = config.timer.enabled;
            }
        }
        this.fabricNotification = new FabricNotification(description, this.notificationIndex, { duration, enabled }, position);
        this.notificationIndex += 1;
    }
    pushNotification(position) {
        switch (position) {
            case FabricNotificationPosition.TOP_RIGHT:
                this.getComponentRef().instance.notificationsTopRight =
                    this.getComponentRef().instance.notificationsTopRight.concat(this.fabricNotification);
                break;
            case FabricNotificationPosition.TOP_LEFT:
                this.getComponentRef().instance.notificationsTopLeft =
                    this.getComponentRef().instance.notificationsTopLeft.concat(this.fabricNotification);
                break;
            case FabricNotificationPosition.BOTTOM_RIGHT:
                this.getComponentRef().instance.notificationsBottomRight =
                    this.getComponentRef().instance.notificationsBottomRight.concat(this.fabricNotification);
                break;
            case FabricNotificationPosition.BOTTOM_LEFT:
                this.getComponentRef().instance.notificationsBottomLeft =
                    this.getComponentRef().instance.notificationsBottomLeft.concat(this.fabricNotification);
                break;
            default:
                break;
        }
        this.getComponentRef().instance.detectChanges();
    }
}
FabricNotificationService.DEFAULT_DURATION = 4000;
FabricNotificationService.ɵfac = function FabricNotificationService_Factory(t) { return new (t || FabricNotificationService)(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(DOCUMENT)); };
FabricNotificationService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FabricNotificationService, factory: FabricNotificationService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricNotificationService, [{
        type: Injectable
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL21vZGFsL25vdGlmaWNhdGlvbi9mYWJyaWMtbm90aWZpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUE0QyxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBbUIsTUFBTSxlQUFlLENBQUM7QUFDeEgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDL0YsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBSTVFLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxXQUFnRDtJQVU5RixZQUFZLHdCQUFrRCxFQUMzRCxjQUE4QixFQUM5QixRQUFrQixFQUNBLFFBQWE7UUFDakMsS0FBSyxDQUFDLHdCQUF3QixFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFSckUsc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBRWIsV0FBTSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFPeEMsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsWUFBWTtR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QkFBeUI7Y0FEckMsVUFBVTs7c0JBY04sTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgT25EZXN0cm95LCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvbnNPdmVybGF5Q29tcG9uZW50IH0gZnJvbSAnLi9mYWJyaWMtbm90aWZpY2F0aW9ucy1vdmVybGF5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZSc7XG5pbXBvcnQgeyB0aGVtZVRva2VuIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lLnRva2VuJztcbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvbiB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb25Db25maWcgfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb24tY29uZmlnJztcbmltcG9ydCB7IEZhYnJpY01vZGFsIH0gZnJvbSAnLi4vLi4vY29tbW9uL21vZGFsL2ZhYnJpYy1tb2RhbCc7XG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbiB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbi1wb3NpdGlvbic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY05vdGlmaWNhdGlvblNlcnZpY2UgZXh0ZW5kcyBGYWJyaWNNb2RhbDxGYWJyaWNOb3RpZmljYXRpb25zT3ZlcmxheUNvbXBvbmVudD4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfRFVSQVRJT04gPSA0MDAwO1xuXG5cdGZhYnJpY05vdGlmaWNhdGlvbjogRmFicmljTm90aWZpY2F0aW9uO1xuXG5cdG5vdGlmaWNhdGlvbkluZGV4OiBudW1iZXIgPSAwO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdW5zdWIkID0gbmV3IFN1YmplY3QoKTtcblxuXHRjb25zdHJ1Y3Rvcihjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRcdFx0YXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLFxuXHRcdFx0XHRpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50OiBhbnkpIHtcblx0XHRzdXBlcihjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIGFwcGxpY2F0aW9uUmVmLCBpbmplY3RvciwgZG9jdW1lbnQpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5yZW1vdmVOb3RpZmljYXRpb25Db250YWluZXIoKTtcblx0fVxuXG5cdGdldENvbXBvbmVudCgpOiBUeXBlPEZhYnJpY05vdGlmaWNhdGlvbnNPdmVybGF5Q29tcG9uZW50PiB7XG5cdFx0cmV0dXJuIEZhYnJpY05vdGlmaWNhdGlvbnNPdmVybGF5Q29tcG9uZW50O1xuXHR9XG5cblx0b3Blbihub3RpZmljYXRpb246IHN0cmluZywgY29uZmlnPzogRmFicmljTm90aWZpY2F0aW9uQ29uZmlnKTogdm9pZCB7XG5cdFx0bGV0IHBvc2l0aW9uID0gRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uVE9QX1JJR0hUO1xuXG5cdFx0aWYgKGNvbmZpZyAmJiBjb25maWcucG9zaXRpb24pIHtcblx0XHRcdHBvc2l0aW9uID0gY29uZmlnLnBvc2l0aW9uO1xuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlRmFicmljTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbiwgY29uZmlnLCBwb3NpdGlvbik7XG5cblx0XHRpZiAoIXRoaXMuZ2V0Q29tcG9uZW50UmVmKCkpIHtcblxuXHRcdFx0bGV0IHRoZW1lID0gVGhlbWUuRkFCUklDLFxuXHRcdFx0XHRwYXJlbnRJbmplY3RvciA9IHRoaXMuZ2V0SW5qZWN0b3IoKTtcblxuXG5cdFx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy50aGVtZSkge1xuXHRcdFx0XHR0aGVtZSA9IGNvbmZpZy50aGVtZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNvbmZpZyAmJiBjb25maWcuaW5qZWN0b3IpIHtcblx0XHRcdFx0cGFyZW50SW5qZWN0b3IgPSBjb25maWcuaW5qZWN0b3I7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG5cdFx0XHRcdHByb3ZpZGVyczogW3tcblx0XHRcdFx0XHRwcm92aWRlOiB0aGVtZVRva2VuLFxuXHRcdFx0XHRcdHVzZVZhbHVlOiB0aGVtZVxuXHRcdFx0XHR9XSxcblx0XHRcdFx0cGFyZW50OiBwYXJlbnRJbmplY3RvclxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuY3JlYXRlQW5kQXBwZW5kKGluamVjdG9yKTtcblx0XHRcdHRoaXMucHVzaE5vdGlmaWNhdGlvbihwb3NpdGlvbik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucHVzaE5vdGlmaWNhdGlvbihwb3NpdGlvbik7XG5cdFx0fVxuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0dGhpcy5yZW1vdmVOb3RpZmljYXRpb25Db250YWluZXIoKTtcblx0XHR0aGlzLnVuc3ViJC5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YiQuY29tcGxldGUoKTtcblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlTm90aWZpY2F0aW9uQ29udGFpbmVyKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmdldENvbXBvbmVudFJlZigpKSB7XG5cdFx0XHR0aGlzLnJlbW92ZUNvbXBvbmVudCgpO1xuXHRcdFx0dGhpcy5ub3RpZmljYXRpb25JbmRleCA9IDA7XG5cdFx0XHR0aGlzLmZhYnJpY05vdGlmaWNhdGlvbiA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVGYWJyaWNOb3RpZmljYXRpb24oZGVzY3JpcHRpb246IHN0cmluZywgY29uZmlnOiBGYWJyaWNOb3RpZmljYXRpb25Db25maWcsIHBvc2l0aW9uOiBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbik6IHZvaWQge1xuXHRcdGxldCBkdXJhdGlvbiA9IEZhYnJpY05vdGlmaWNhdGlvblNlcnZpY2UuREVGQVVMVF9EVVJBVElPTixcblx0XHRcdGVuYWJsZWQgPSB0cnVlO1xuXG5cdFx0aWYgKGNvbmZpZyAmJiBjb25maWcudGltZXIpIHtcblx0XHRcdGR1cmF0aW9uID0gY29uZmlnLnRpbWVyLmR1cmF0aW9uO1xuXG5cdFx0XHRpZiAoY29uZmlnLnRpbWVyLmV4dGVuZFRpbWVyKSB7XG5cdFx0XHRcdGR1cmF0aW9uID0gY29uZmlnLnRpbWVyLmR1cmF0aW9uICogKHRoaXMubm90aWZpY2F0aW9uSW5kZXggKyAxKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNvbmZpZy50aW1lci5lbmFibGVkICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0ZW5hYmxlZCA9IGNvbmZpZy50aW1lci5lbmFibGVkO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuZmFicmljTm90aWZpY2F0aW9uID0gbmV3IEZhYnJpY05vdGlmaWNhdGlvbihcblx0XHRcdGRlc2NyaXB0aW9uLFxuXHRcdFx0dGhpcy5ub3RpZmljYXRpb25JbmRleCxcblx0XHRcdHsgZHVyYXRpb24sIGVuYWJsZWQgfSxcblx0XHRcdHBvc2l0aW9uKTtcblx0XHR0aGlzLm5vdGlmaWNhdGlvbkluZGV4ICs9IDE7XG5cdH1cblxuXHRwcml2YXRlIHB1c2hOb3RpZmljYXRpb24ocG9zaXRpb246IEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uKTogdm9pZCB7XG5cblx0XHRzd2l0Y2ggKHBvc2l0aW9uKSB7XG5cblx0XHRcdGNhc2UgRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uVE9QX1JJR0hUOlxuXHRcdFx0XHR0aGlzLmdldENvbXBvbmVudFJlZigpLmluc3RhbmNlLm5vdGlmaWNhdGlvbnNUb3BSaWdodCA9XG5cdFx0XHRcdFx0dGhpcy5nZXRDb21wb25lbnRSZWYoKS5pbnN0YW5jZS5ub3RpZmljYXRpb25zVG9wUmlnaHQuY29uY2F0KHRoaXMuZmFicmljTm90aWZpY2F0aW9uKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uVE9QX0xFRlQ6XG5cdFx0XHRcdHRoaXMuZ2V0Q29tcG9uZW50UmVmKCkuaW5zdGFuY2Uubm90aWZpY2F0aW9uc1RvcExlZnQgPVxuXHRcdFx0XHRcdHRoaXMuZ2V0Q29tcG9uZW50UmVmKCkuaW5zdGFuY2Uubm90aWZpY2F0aW9uc1RvcExlZnQuY29uY2F0KHRoaXMuZmFicmljTm90aWZpY2F0aW9uKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uQk9UVE9NX1JJR0hUOlxuXHRcdFx0XHR0aGlzLmdldENvbXBvbmVudFJlZigpLmluc3RhbmNlLm5vdGlmaWNhdGlvbnNCb3R0b21SaWdodCA9XG5cdFx0XHRcdFx0dGhpcy5nZXRDb21wb25lbnRSZWYoKS5pbnN0YW5jZS5ub3RpZmljYXRpb25zQm90dG9tUmlnaHQuY29uY2F0KHRoaXMuZmFicmljTm90aWZpY2F0aW9uKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uQk9UVE9NX0xFRlQ6XG5cdFx0XHRcdHRoaXMuZ2V0Q29tcG9uZW50UmVmKCkuaW5zdGFuY2Uubm90aWZpY2F0aW9uc0JvdHRvbUxlZnQgPVxuXHRcdFx0XHRcdHRoaXMuZ2V0Q29tcG9uZW50UmVmKCkuaW5zdGFuY2Uubm90aWZpY2F0aW9uc0JvdHRvbUxlZnQuY29uY2F0KHRoaXMuZmFicmljTm90aWZpY2F0aW9uKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHRoaXMuZ2V0Q29tcG9uZW50UmVmKCkuaW5zdGFuY2UuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG59XG4iXX0=