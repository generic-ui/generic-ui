/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';
import { FabricNotificationsContainerComponent } from './fabric-notifications-container.component';
import { Theme } from '../../themes/theme';
import { themeToken } from '../../themes/theme.token';
import { FabricNotification } from './fabric-notification';
export class FabricNotificationService {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} applicationRef
     * @param {?} injector
     * @param {?} document
     */
    constructor(componentFactoryResolver, applicationRef, injector, document) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
        this.document = document;
        this.notificationContainer = null;
        this.notificationIndex = 0;
        this.unsub$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeNotificationContainer();
    }
    /**
     * @param {?} notification
     * @param {?=} config
     * @return {?}
     */
    open(notification, config) {
        this.createFabricNotification(notification, config);
        if (!this.notificationContainer) {
            /** @type {?} */
            let theme = Theme.FABRIC;
            /** @type {?} */
            let parentInjector = this.injector;
            if (config && config.theme) {
                theme = config.theme;
            }
            if (config && config.injector) {
                parentInjector = config.injector;
            }
            /** @type {?} */
            const injector = Injector.create({
                providers: [{
                        provide: themeToken,
                        useValue: theme
                    }],
                parent: parentInjector
            });
            this.createAndAppend(injector);
        }
        else {
            this.notificationContainer.instance.notifications.push(this.fabricNotification);
            this.notificationContainer.instance.changeDetectorRef.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    close() {
        this.removeNotificationContainer();
        this.unsub$.next();
        this.unsub$.complete();
    }
    /**
     * @private
     * @param {?} injector
     * @return {?}
     */
    createAndAppend(injector) {
        /** @type {?} */
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(FabricNotificationsContainerComponent)
            .create(injector);
        componentRef.instance.notifications.push(this.fabricNotification);
        componentRef.changeDetectorRef.detectChanges();
        this.applicationRef.attachView(componentRef.hostView);
        /** @type {?} */
        const domNotificationContainerElement = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView)))
            .rootNodes[0]));
        this.document.body.appendChild(domNotificationContainerElement);
        this.notificationContainer = componentRef;
    }
    /**
     * @private
     * @return {?}
     */
    removeNotificationContainer() {
        if (this.notificationContainer) {
            this.applicationRef.detachView(this.notificationContainer.hostView);
            this.notificationContainer.destroy();
            this.notificationContainer = null;
            this.notificationIndex = 0;
            this.fabricNotification = null;
        }
    }
    /**
     * @private
     * @param {?} description
     * @param {?} config
     * @return {?}
     */
    createFabricNotification(description, config) {
        /** @type {?} */
        let duration = FabricNotificationService.DEFAULT_DURATION;
        /** @type {?} */
        let enabled = true;
        if (config && config.timer) {
            duration = config.timer.duration;
            if (config.timer.enabled !== undefined) {
                enabled = config.timer.enabled;
            }
        }
        this.fabricNotification = new FabricNotification(description, this.notificationIndex, { duration: duration, enabled: enabled });
        this.notificationIndex += 1;
    }
}
FabricNotificationService.DEFAULT_DURATION = 4000;
FabricNotificationService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FabricNotificationService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricNotificationService.DEFAULT_DURATION;
    /** @type {?} */
    FabricNotificationService.prototype.notificationContainer;
    /** @type {?} */
    FabricNotificationService.prototype.fabricNotification;
    /** @type {?} */
    FabricNotificationService.prototype.notificationIndex;
    /**
     * @type {?}
     * @private
     */
    FabricNotificationService.prototype.unsub$;
    /**
     * @type {?}
     * @private
     */
    FabricNotificationService.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    FabricNotificationService.prototype.applicationRef;
    /**
     * @type {?}
     * @private
     */
    FabricNotificationService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    FabricNotificationService.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibW9kYWwvbm90aWZpY2F0aW9uL2ZhYnJpYy1ub3RpZmljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSx3QkFBd0IsRUFBaUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDakosT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbkcsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUszRCxNQUFNLE9BQU8seUJBQXlCOzs7Ozs7O0lBWXJDLFlBQTZCLHdCQUFrRCxFQUMzRCxjQUE4QixFQUM5QixRQUFrQixFQUNBLFFBQWE7UUFIdEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUMzRCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNBLGFBQVEsR0FBUixRQUFRLENBQUs7UUFYbkQsMEJBQXFCLEdBQXdELElBQUksQ0FBQztRQUlsRixzQkFBaUIsR0FBVyxDQUFDLENBQUM7UUFFYixXQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQU14QyxDQUFDOzs7O0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO0lBQ3BDLENBQUM7Ozs7OztJQUVELElBQUksQ0FBQyxZ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Q0FBQyxRQUFRLENBQUM7WUFFakMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7Z0JBQ3ZDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzthQUMvQjtTQUNEO1FBRUQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksa0JBQWtCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDaEksSUFBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOztBQXJHdUIsMENBQWdCLEdBQUcsSUFBSSxDQUFDOztZQUhoRCxVQUFVOzs7O1lBWGMsd0JBQXdCO1lBQXhDLGNBQWM7WUFBK0UsUUFBUTs0Q0EyQnpHLE1BQU0sU0FBQyxRQUFROzs7Ozs7O0lBYm5CLDJDQUFnRDs7SUFFaEQsMERBQWtGOztJQUVsRix1REFBdUM7O0lBRXZDLHNEQUE4Qjs7Ozs7SUFFOUIsMkNBQXdDOzs7OztJQUU1Qiw2REFBbUU7Ozs7O0lBQzVFLG1EQUErQzs7Ozs7SUFDL0MsNkNBQW1DOzs7OztJQUNuQyw2Q0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIEVtYmVkZGVkVmlld1JlZiwgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvbnNDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb25zLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUnO1xuaW1wb3J0IHsgdGhlbWVUb2tlbiB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZS50b2tlbic7XG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb24gfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgRmFicmljTm90aWZpY2F0aW9uQ29uZmlnIH0gZnJvbSAnLi9mYWJyaWMtbm90aWZpY2F0aW9uLWNvbmZpZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY05vdGlmaWNhdGlvblNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfRFVSQVRJT04gPSA0MDAwO1xuXG5cdG5vdGlmaWNhdGlvbkNvbnRhaW5lcjogQ29tcG9uZW50UmVmPEZhYnJpY05vdGlmaWNhdGlvbnNDb250YWluZXJDb21wb25lbnQ+ID0gbnVsbDtcblxuXHRmYWJyaWNOb3RpZmljYXRpb246IEZhYnJpY05vdGlmaWNhdGlvbjtcblxuXHRub3RpZmljYXRpb25JbmRleDogbnVtYmVyID0gMDtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHVuc3ViJCA9IG5ldyBTdWJqZWN0KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIHJlYWRvbmx5IGRvY3VtZW50OiBhbnkpIHtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMucmVtb3ZlTm90aWZpY2F0aW9uQ29udGFpbmVyKCk7XG5cdH1cblxuXHRvcGVuKG5vdGlmaWNhdGlvbjogc3RyaW5nLCBjb25maWc/OiBGYWJyaWNOb3RpZmljYXRpb25Db25maWcpOiB2b2lkIHtcblxuXHRcdHRoaXMuY3JlYXRlRmFicmljTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbiwgY29uZmlnKTtcblxuXHRcdGlmICghdGhpcy5ub3RpZmljYXRpb25Db250YWluZXIpIHtcblxuXHRcdFx0bGV0IHRoZW1lID0gVGhlbWUuRkFCUklDLFxuXHRcdFx0XHRwYXJlbnRJbmplY3RvciA9IHRoaXMuaW5qZWN0b3I7XG5cblx0XHRcdGlmIChjb25maWcgJiYgY29uZmlnLnRoZW1lKSB7XG5cdFx0XHRcdHRoZW1lID0gY29uZmlnLnRoZW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy5pbmplY3Rvcikge1xuXHRcdFx0XHRwYXJlbnRJbmplY3RvciA9IGNvbmZpZy5pbmplY3Rvcjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcblx0XHRcdFx0cHJvdmlkZXJzOiBbe1xuXHRcdFx0XHRcdHByb3ZpZGU6IHRoZW1lVG9rZW4sXG5cdFx0XHRcdFx0dXNlVmFsdWU6IHRoZW1lXG5cdFx0XHRcdH1dLFxuXHRcdFx0XHRwYXJlbnQ6IHBhcmVudEluamVjdG9yXG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5jcmVhdGVBbmRBcHBlbmQoaW5qZWN0b3IpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm5vdGlmaWNhdGlvbkNvbnRhaW5lci5pbnN0YW5jZS5ub3RpZmljYXRpb25zLnB1c2godGhpcy5mYWJyaWNOb3RpZmljYXRpb24pO1xuXHRcdFx0dGhpcy5ub3RpZmljYXRpb25Db250YWluZXIuaW5zdGFuY2UuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdH1cblx0fVxuXG5cdGNsb3NlKCk6IHZvaWQge1xuXHRcdHRoaXMucmVtb3ZlTm90aWZpY2F0aW9uQ29udGFpbmVyKCk7XG5cdFx0dGhpcy51bnN1YiQubmV4dCgpO1xuXHRcdHRoaXMudW5zdWIkLmNvbXBsZXRlKCk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUFuZEFwcGVuZChpbmplY3RvcjogSW5qZWN0b3IpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG5cdFx0XHRcdFx0XHRcdFx0IC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShGYWJyaWNOb3RpZmljYXRpb25zQ29udGFpbmVyQ29tcG9uZW50KVxuXHRcdFx0XHRcdFx0XHRcdCAuY3JlYXRlKGluamVjdG9yKTtcblxuXHRcdGNvbXBvbmVudFJlZi5pbnN0YW5jZS5ub3RpZmljYXRpb25zLnB1c2godGhpcy5mYWJyaWNOb3RpZmljYXRpb24pO1xuXG5cdFx0Y29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblxuXHRcdHRoaXMuYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXG5cdFx0Y29uc3QgZG9tTm90aWZpY2F0aW9uQ29udGFpbmVyRWxlbWVudCA9IChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXG5cdFx0XHQucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuXG5cdFx0dGhpcy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbU5vdGlmaWNhdGlvbkNvbnRhaW5lckVsZW1lbnQpO1xuXG5cdFx0dGhpcy5ub3RpZmljYXRpb25Db250YWluZXIgPSBjb21wb25lbnRSZWY7XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZU5vdGlmaWNhdGlvbkNvbnRhaW5lcigpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5ub3RpZmljYXRpb25Db250YWluZXIpIHtcblx0XHRcdHRoaXMuYXBwbGljYXRpb25SZWYuZGV0YWNoVmlldyh0aGlzLm5vdGlmaWNhdGlvbkNvbnRhaW5lci5ob3N0Vmlldyk7XG5cdFx0XHR0aGlzLm5vdGlmaWNhdGlvbkNvbnRhaW5lci5kZXN0cm95KCk7XG5cdFx0XHR0aGlzLm5vdGlmaWNhdGlvbkNvbnRhaW5lciA9IG51bGw7XG5cdFx0XHR0aGlzLm5vdGlmaWNhdGlvbkluZGV4ID0gMDtcblx0XHRcdHRoaXMuZmFicmljTm90aWZpY2F0aW9uID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUZhYnJpY05vdGlmaWNhdGlvbihkZXNjcmlwdGlvbjogc3RyaW5nLCBjb25maWc6IGFueSk6IHZvaWQge1xuXHRcdGxldCBkdXJhdGlvbiA9IEZhYnJpY05vdGlmaWNhdGlvblNlcnZpY2UuREVGQVVMVF9EVVJBVElPTixcblx0XHRcdGVuYWJsZWQgPSB0cnVlO1xuXG5cdFx0aWYgKGNvbmZpZyAmJiBjb25maWcudGltZXIpIHtcblx0XHRcdGR1cmF0aW9uID0gY29uZmlnLnRpbWVyLmR1cmF0aW9uO1xuXG5cdFx0XHRpZiAoY29uZmlnLnRpbWVyLmVuYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRlbmFibGVkID0gY29uZmlnLnRpbWVyLmVuYWJsZWQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5mYWJyaWNOb3RpZmljYXRpb24gPSBuZXcgRmFicmljTm90aWZpY2F0aW9uKGRlc2NyaXB0aW9uLCB0aGlzLm5vdGlmaWNhdGlvbkluZGV4LCB7IGR1cmF0aW9uOiBkdXJhdGlvbiwgZW5hYmxlZDogZW5hYmxlZCB9KTtcblx0XHR0aGlzLm5vdGlmaWNhdGlvbkluZGV4ICs9IDE7XG5cdH1cblxufVxuIl19