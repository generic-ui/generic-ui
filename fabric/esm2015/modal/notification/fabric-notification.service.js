import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';
import { FabricNotificationsOverlayComponent } from './fabric-notifications-overlay.component';
import { Theme } from '../../themes/theme';
import { themeToken } from '../../themes/theme.token';
import { FabricNotification } from './fabric-notification';
import { FabricModal } from '../../common/modal/fabric-modal';
import { FabricNotificationPosition } from './fabric-notification-position';
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
FabricNotificationService.decorators = [
    { type: Injectable }
];
FabricNotificationService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL21vZGFsL25vdGlmaWNhdGlvbi9mYWJyaWMtbm90aWZpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBbUIsTUFBTSxlQUFlLENBQUM7QUFDeEgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDL0YsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFJNUUsTUFBTSxPQUFPLHlCQUEwQixTQUFRLFdBQWdEO0lBVTlGLFlBQVksd0JBQWtELEVBQzNELGNBQThCLEVBQzlCLFFBQWtCLEVBQ0EsUUFBYTtRQUNqQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQVJyRSxzQkFBaUIsR0FBVyxDQUFDLENBQUM7UUFFYixXQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQU94QyxDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO0lB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Z0QsUUFBUTs0Q0EyQjFFLE1BQU0sU0FBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgT25EZXN0cm95LCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvbnNPdmVybGF5Q29tcG9uZW50IH0gZnJvbSAnLi9mYWJyaWMtbm90aWZpY2F0aW9ucy1vdmVybGF5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZSc7XG5pbXBvcnQgeyB0aGVtZVRva2VuIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lLnRva2VuJztcbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvbiB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb25Db25maWcgfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb24tY29uZmlnJztcbmltcG9ydCB7IEZhYnJpY01vZGFsIH0gZnJvbSAnLi4vLi4vY29tbW9uL21vZGFsL2ZhYnJpYy1tb2RhbCc7XG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbiB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbi1wb3NpdGlvbic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY05vdGlmaWNhdGlvblNlcnZpY2UgZXh0ZW5kcyBGYWJyaWNNb2RhbDxGYWJyaWNOb3RpZmljYXRpb25zT3ZlcmxheUNvbXBvbmVudD4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfRFVSQVRJT04gPSA0MDAwO1xuXG5cdGZhYnJpY05vdGlmaWNhdGlvbjogRmFicmljTm90aWZpY2F0aW9uO1xuXG5cdG5vdGlmaWNhdGlvbkluZGV4OiBudW1iZXIgPSAwO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdW5zdWIkID0gbmV3IFN1YmplY3QoKTtcblxuXHRjb25zdHJ1Y3Rvcihjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRcdFx0YXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLFxuXHRcdFx0XHRpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50OiBhbnkpIHtcblx0XHRzdXBlcihjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIGFwcGxpY2F0aW9uUmVmLCBpbmplY3RvciwgZG9jdW1lbnQpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5yZW1vdmVOb3RpZmljYXRpb25Db250YWluZXIoKTtcblx0fVxuXG5cdGdldENvbXBvbmVudCgpOiBUeXBlPEZhYnJpY05vdGlmaWNhdGlvbnNPdmVybGF5Q29tcG9uZW50PiB7XG5cdFx0cmV0dXJuIEZhYnJpY05vdGlmaWNhdGlvbnNPdmVybGF5Q29tcG9uZW50O1xuXHR9XG5cblx0b3Blbihub3RpZmljYXRpb246IHN0cmluZywgY29uZmlnPzogRmFicmljTm90aWZpY2F0aW9uQ29uZmlnKTogdm9pZCB7XG5cdFx0bGV0IHBvc2l0aW9uID0gRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uVE9QX1JJR0hUO1xuXG5cdFx0aWYgKGNvbmZpZyAmJiBjb25maWcucG9zaXRpb24pIHtcblx0XHRcdHBvc2l0aW9uID0gY29uZmlnLnBvc2l0aW9uO1xuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlRmFicmljTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbiwgY29uZmlnLCBwb3NpdGlvbik7XG5cblx0XHRpZiAoIXRoaXMuZ2V0Q29tcG9uZW50UmVmKCkpIHtcblxuXHRcdFx0bGV0IHRoZW1lID0gVGhlbWUuRkFCUklDLFxuXHRcdFx0XHRwYXJlbnRJbmplY3RvciA9IHRoaXMuZ2V0SW5qZWN0b3IoKTtcblxuXG5cdFx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy50aGVtZSkge1xuXHRcdFx0XHR0aGVtZSA9IGNvbmZpZy50aGVtZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNvbmZpZyAmJiBjb25maWcuaW5qZWN0b3IpIHtcblx0XHRcdFx0cGFyZW50SW5qZWN0b3IgPSBjb25maWcuaW5qZWN0b3I7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG5cdFx0XHRcdHByb3ZpZGVyczogW3tcblx0XHRcdFx0XHRwcm92aWRlOiB0aGVtZVRva2VuLFxuXHRcdFx0XHRcdHVzZVZhbHVlOiB0aGVtZVxuXHRcdFx0XHR9XSxcblx0XHRcdFx0cGFyZW50OiBwYXJlbnRJbmplY3RvclxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuY3JlYXRlQW5kQXBwZW5kKGluamVjdG9yKTtcblx0XHRcdHRoaXMucHVzaE5vdGlmaWNhdGlvbihwb3NpdGlvbik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucHVzaE5vdGlmaWNhdGlvbihwb3NpdGlvbik7XG5cdFx0fVxuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0dGhpcy5yZW1vdmVOb3RpZmljYXRpb25Db250YWluZXIoKTtcblx0XHR0aGlzLnVuc3ViJC5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YiQuY29tcGxldGUoKTtcblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlTm90aWZpY2F0aW9uQ29udGFpbmVyKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmdldENvbXBvbmVudFJlZigpKSB7XG5cdFx0XHR0aGlzLnJlbW92ZUNvbXBvbmVudCgpO1xuXHRcdFx0dGhpcy5ub3RpZmljYXRpb25JbmRleCA9IDA7XG5cdFx0XHR0aGlzLmZhYnJpY05vdGlmaWNhdGlvbiA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVGYWJyaWNOb3RpZmljYXRpb24oZGVzY3JpcHRpb246IHN0cmluZywgY29uZmlnOiBGYWJyaWNOb3RpZmljYXRpb25Db25maWcsIHBvc2l0aW9uOiBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbik6IHZvaWQge1xuXHRcdGxldCBkdXJhdGlvbiA9IEZhYnJpY05vdGlmaWNhdGlvblNlcnZpY2UuREVGQVVMVF9EVVJBVElPTixcblx0XHRcdGVuYWJsZWQgPSB0cnVlO1xuXG5cdFx0aWYgKGNvbmZpZyAmJiBjb25maWcudGltZXIpIHtcblx0XHRcdGR1cmF0aW9uID0gY29uZmlnLnRpbWVyLmR1cmF0aW9uO1xuXG5cdFx0XHRpZiAoY29uZmlnLnRpbWVyLmV4dGVuZFRpbWVyKSB7XG5cdFx0XHRcdGR1cmF0aW9uID0gY29uZmlnLnRpbWVyLmR1cmF0aW9uICogKHRoaXMubm90aWZpY2F0aW9uSW5kZXggKyAxKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNvbmZpZy50aW1lci5lbmFibGVkICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0ZW5hYmxlZCA9IGNvbmZpZy50aW1lci5lbmFibGVkO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuZmFicmljTm90aWZpY2F0aW9uID0gbmV3IEZhYnJpY05vdGlmaWNhdGlvbihcblx0XHRcdGRlc2NyaXB0aW9uLFxuXHRcdFx0dGhpcy5ub3RpZmljYXRpb25JbmRleCxcblx0XHRcdHsgZHVyYXRpb24sIGVuYWJsZWQgfSxcblx0XHRcdHBvc2l0aW9uKTtcblx0XHR0aGlzLm5vdGlmaWNhdGlvbkluZGV4ICs9IDE7XG5cdH1cblxuXHRwcml2YXRlIHB1c2hOb3RpZmljYXRpb24ocG9zaXRpb246IEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uKTogdm9pZCB7XG5cblx0XHRzd2l0Y2ggKHBvc2l0aW9uKSB7XG5cblx0XHRcdGNhc2UgRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uVE9QX1JJR0hUOlxuXHRcdFx0XHR0aGlzLmdldENvbXBvbmVudFJlZigpLmluc3RhbmNlLm5vdGlmaWNhdGlvbnNUb3BSaWdodCA9XG5cdFx0XHRcdFx0dGhpcy5nZXRDb21wb25lbnRSZWYoKS5pbnN0YW5jZS5ub3RpZmljYXRpb25zVG9wUmlnaHQuY29uY2F0KHRoaXMuZmFicmljTm90aWZpY2F0aW9uKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uVE9QX0xFRlQ6XG5cdFx0XHRcdHRoaXMuZ2V0Q29tcG9uZW50UmVmKCkuaW5zdGFuY2Uubm90aWZpY2F0aW9uc1RvcExlZnQgPVxuXHRcdFx0XHRcdHRoaXMuZ2V0Q29tcG9uZW50UmVmKCkuaW5zdGFuY2Uubm90aWZpY2F0aW9uc1RvcExlZnQuY29uY2F0KHRoaXMuZmFicmljTm90aWZpY2F0aW9uKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uQk9UVE9NX1JJR0hUOlxuXHRcdFx0XHR0aGlzLmdldENvbXBvbmVudFJlZigpLmluc3RhbmNlLm5vdGlmaWNhdGlvbnNCb3R0b21SaWdodCA9XG5cdFx0XHRcdFx0dGhpcy5nZXRDb21wb25lbnRSZWYoKS5pbnN0YW5jZS5ub3RpZmljYXRpb25zQm90dG9tUmlnaHQuY29uY2F0KHRoaXMuZmFicmljTm90aWZpY2F0aW9uKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uQk9UVE9NX0xFRlQ6XG5cdFx0XHRcdHRoaXMuZ2V0Q29tcG9uZW50UmVmKCkuaW5zdGFuY2Uubm90aWZpY2F0aW9uc0JvdHRvbUxlZnQgPVxuXHRcdFx0XHRcdHRoaXMuZ2V0Q29tcG9uZW50UmVmKCkuaW5zdGFuY2Uubm90aWZpY2F0aW9uc0JvdHRvbUxlZnQuY29uY2F0KHRoaXMuZmFicmljTm90aWZpY2F0aW9uKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHRoaXMuZ2V0Q29tcG9uZW50UmVmKCkuaW5zdGFuY2UuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG59XG4iXX0=