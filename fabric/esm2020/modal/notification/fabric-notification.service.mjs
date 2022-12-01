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
}
FabricNotificationService.DEFAULT_DURATION = 4000;
FabricNotificationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FabricNotificationService, deps: [{ token: i0.ComponentFactoryResolver }, { token: i0.ApplicationRef }, { token: i0.Injector }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
FabricNotificationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FabricNotificationService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FabricNotificationService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL21vZGFsL25vdGlmaWNhdGlvbi9mYWJyaWMtbm90aWZpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUEwRCxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBbUIsTUFBTSxlQUFlLENBQUM7QUFDdEksT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDL0YsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBSTVFLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxXQUFnRDtJQVU5RixZQUFZLHdCQUFrRCxFQUMzRCxjQUE4QixFQUM5QixRQUFrQixFQUNBLFFBQWE7UUFDakMsS0FBSyxDQUFDLHdCQUF3QixFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFSckUsc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBRWIsV0FBTSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFPOUMsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsWUFBWTtR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OzJGQUF6Qix5QkFBeUI7a0JBRHJDLFVBQVU7OzBCQWNOLE1BQU07MkJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgT25EZXN0cm95LCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvbnNPdmVybGF5Q29tcG9uZW50IH0gZnJvbSAnLi9mYWJyaWMtbm90aWZpY2F0aW9ucy1vdmVybGF5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZSc7XG5pbXBvcnQgeyB0aGVtZVRva2VuIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lLnRva2VuJztcbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvbiB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb25Db25maWcgfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb24tY29uZmlnJztcbmltcG9ydCB7IEZhYnJpY01vZGFsIH0gZnJvbSAnLi4vLi4vY29tbW9uL21vZGFsL2ZhYnJpYy1tb2RhbCc7XG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbiB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbi1wb3NpdGlvbic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY05vdGlmaWNhdGlvblNlcnZpY2UgZXh0ZW5kcyBGYWJyaWNNb2RhbDxGYWJyaWNOb3RpZmljYXRpb25zT3ZlcmxheUNvbXBvbmVudD4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfRFVSQVRJT04gPSA0MDAwO1xuXG5cdGZhYnJpY05vdGlmaWNhdGlvbj86IEZhYnJpY05vdGlmaWNhdGlvbjtcblxuXHRub3RpZmljYXRpb25JbmRleDogbnVtYmVyID0gMDtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHVuc3ViJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cblx0Y29uc3RydWN0b3IoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0XHRcdGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcblx0XHRcdFx0aW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudDogYW55KSB7XG5cdFx0c3VwZXIoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBhcHBsaWNhdGlvblJlZiwgaW5qZWN0b3IsIGRvY3VtZW50KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMucmVtb3ZlTm90aWZpY2F0aW9uQ29udGFpbmVyKCk7XG5cdH1cblxuXHRnZXRDb21wb25lbnQoKTogVHlwZTxGYWJyaWNOb3RpZmljYXRpb25zT3ZlcmxheUNvbXBvbmVudD4ge1xuXHRcdHJldHVybiBGYWJyaWNOb3RpZmljYXRpb25zT3ZlcmxheUNvbXBvbmVudDtcblx0fVxuXG5cdG9wZW4obm90aWZpY2F0aW9uOiBzdHJpbmcsIGNvbmZpZz86IEZhYnJpY05vdGlmaWNhdGlvbkNvbmZpZyk6IHZvaWQge1xuXHRcdGxldCBwb3NpdGlvbiA9IEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uLlRPUF9SSUdIVDtcblxuXHRcdGlmIChjb25maWcgJiYgY29uZmlnLnBvc2l0aW9uKSB7XG5cdFx0XHRwb3NpdGlvbiA9IGNvbmZpZy5wb3NpdGlvbjtcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZUZhYnJpY05vdGlmaWNhdGlvbihub3RpZmljYXRpb24sIHBvc2l0aW9uLCBjb25maWcpO1xuXG5cdFx0aWYgKCF0aGlzLmlzQ29tcG9uZW50Q3JlYXRlZCgpKSB7XG5cblx0XHRcdGxldCB0aGVtZSA9IFRoZW1lLkZBQlJJQyxcblx0XHRcdFx0cGFyZW50SW5qZWN0b3IgPSB0aGlzLmdldEluamVjdG9yKCk7XG5cblxuXHRcdFx0aWYgKGNvbmZpZyAmJiBjb25maWcudGhlbWUpIHtcblx0XHRcdFx0dGhlbWUgPSBjb25maWcudGhlbWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjb25maWcgJiYgY29uZmlnLmluamVjdG9yKSB7XG5cdFx0XHRcdHBhcmVudEluamVjdG9yID0gY29uZmlnLmluamVjdG9yO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuXHRcdFx0XHRwcm92aWRlcnM6IFt7XG5cdFx0XHRcdFx0cHJvdmlkZTogdGhlbWVUb2tlbixcblx0XHRcdFx0XHR1c2VWYWx1ZTogdGhlbWVcblx0XHRcdFx0fV0sXG5cdFx0XHRcdHBhcmVudDogcGFyZW50SW5qZWN0b3Jcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLmNyZWF0ZUFuZEFwcGVuZCh7IGluamVjdG9yIH0pO1xuXHRcdFx0dGhpcy5wdXNoTm90aWZpY2F0aW9uKHBvc2l0aW9uKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wdXNoTm90aWZpY2F0aW9uKHBvc2l0aW9uKTtcblx0XHR9XG5cdH1cblxuXHRjbG9zZSgpOiB2b2lkIHtcblx0XHR0aGlzLnJlbW92ZU5vdGlmaWNhdGlvbkNvbnRhaW5lcigpO1xuXHRcdHRoaXMudW5zdWIkLm5leHQoKTtcblx0XHR0aGlzLnVuc3ViJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSByZW1vdmVOb3RpZmljYXRpb25Db250YWluZXIoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNDb21wb25lbnRDcmVhdGVkKCkpIHtcblx0XHRcdHRoaXMucmVtb3ZlQ29tcG9uZW50KCk7XG5cdFx0XHR0aGlzLm5vdGlmaWNhdGlvbkluZGV4ID0gMDtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUZhYnJpY05vdGlmaWNhdGlvbihkZXNjcmlwdGlvbjogc3RyaW5nLCBwb3NpdGlvbjogRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24sIGNvbmZpZz86IEZhYnJpY05vdGlmaWNhdGlvbkNvbmZpZyk6IHZvaWQge1xuXHRcdGxldCBkdXJhdGlvbiA9IEZhYnJpY05vdGlmaWNhdGlvblNlcnZpY2UuREVGQVVMVF9EVVJBVElPTixcblx0XHRcdGVuYWJsZWQgPSB0cnVlO1xuXG5cdFx0aWYgKGNvbmZpZyAmJiBjb25maWcudGltZXIpIHtcblxuXHRcdFx0aWYgKGNvbmZpZy50aW1lci5kdXJhdGlvbikge1xuXHRcdFx0XHRkdXJhdGlvbiA9IGNvbmZpZy50aW1lci5kdXJhdGlvbjtcblxuXHRcdFx0XHRpZiAoY29uZmlnLnRpbWVyLmV4dGVuZFRpbWVyKSB7XG5cdFx0XHRcdFx0ZHVyYXRpb24gPSBjb25maWcudGltZXIuZHVyYXRpb24gKiAodGhpcy5ub3RpZmljYXRpb25JbmRleCArIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjb25maWcudGltZXIuZW5hYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGVuYWJsZWQgPSBjb25maWcudGltZXIuZW5hYmxlZDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLmZhYnJpY05vdGlmaWNhdGlvbiA9IG5ldyBGYWJyaWNOb3RpZmljYXRpb24oXG5cdFx0XHRkZXNjcmlwdGlvbixcblx0XHRcdHRoaXMubm90aWZpY2F0aW9uSW5kZXgsXG5cdFx0XHR7IGR1cmF0aW9uLCBlbmFibGVkIH0sXG5cdFx0XHRwb3NpdGlvbik7XG5cdFx0dGhpcy5ub3RpZmljYXRpb25JbmRleCArPSAxO1xuXHR9XG5cblx0cHJpdmF0ZSBwdXNoTm90aWZpY2F0aW9uKHBvc2l0aW9uOiBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbik6IHZvaWQge1xuXHRcdGlmICghdGhpcy5mYWJyaWNOb3RpZmljYXRpb24gfHwgIXRoaXMuaXNDb21wb25lbnRDcmVhdGVkKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5nZXRDb21wb25lbnRSZWYoKSBhcyBDb21wb25lbnRSZWY8RmFicmljTm90aWZpY2F0aW9uc092ZXJsYXlDb21wb25lbnQ+O1xuXG5cdFx0c3dpdGNoIChwb3NpdGlvbikge1xuXG5cdFx0XHRjYXNlIEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uLlRPUF9SSUdIVDpcblx0XHRcdFx0Y29tcG9uZW50UmVmLmluc3RhbmNlLm5vdGlmaWNhdGlvbnNUb3BSaWdodCA9XG5cdFx0XHRcdFx0Y29tcG9uZW50UmVmLmluc3RhbmNlLm5vdGlmaWNhdGlvbnNUb3BSaWdodC5jb25jYXQodGhpcy5mYWJyaWNOb3RpZmljYXRpb24pO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbi5UT1BfTEVGVDpcblx0XHRcdFx0Y29tcG9uZW50UmVmLmluc3RhbmNlLm5vdGlmaWNhdGlvbnNUb3BMZWZ0ID1cblx0XHRcdFx0XHRjb21wb25lbnRSZWYuaW5zdGFuY2Uubm90aWZpY2F0aW9uc1RvcExlZnQuY29uY2F0KHRoaXMuZmFicmljTm90aWZpY2F0aW9uKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uQk9UVE9NX1JJR0hUOlxuXHRcdFx0XHRjb21wb25lbnRSZWYuaW5zdGFuY2Uubm90aWZpY2F0aW9uc0JvdHRvbVJpZ2h0ID1cblx0XHRcdFx0XHRjb21wb25lbnRSZWYuaW5zdGFuY2Uubm90aWZpY2F0aW9uc0JvdHRvbVJpZ2h0LmNvbmNhdCh0aGlzLmZhYnJpY05vdGlmaWNhdGlvbik7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uLkJPVFRPTV9MRUZUOlxuXHRcdFx0XHRjb21wb25lbnRSZWYuaW5zdGFuY2Uubm90aWZpY2F0aW9uc0JvdHRvbUxlZnQgPVxuXHRcdFx0XHRcdGNvbXBvbmVudFJlZi5pbnN0YW5jZS5ub3RpZmljYXRpb25zQm90dG9tTGVmdC5jb25jYXQodGhpcy5mYWJyaWNOb3RpZmljYXRpb24pO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0Y29tcG9uZW50UmVmLmluc3RhbmNlLmRldGVjdENoYW5nZXMoKTtcblx0fVxufVxuIl19