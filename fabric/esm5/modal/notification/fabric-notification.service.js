/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';
import { FabricNotificationsOverlayComponent } from './fabric-notifications-overlay.component';
import { Theme } from '../../themes/theme';
import { themeToken } from '../../themes/theme.token';
import { FabricNotification } from './fabric-notification';
import { FabricModal } from '../../common/modal/fabric-modal';
import { FabricNotificationPosition } from './fabric-notification-position';
var FabricNotificationService = /** @class */ (function (_super) {
    tslib_1.__extends(FabricNotificationService, _super);
    function FabricNotificationService(componentFactoryResolver, applicationRef, injector, document) {
        var _this = _super.call(this, componentFactoryResolver, applicationRef, injector, document) || this;
        _this.notificationIndex = 0;
        _this.unsub$ = new Subject();
        return _this;
    }
    /**
     * @return {?}
     */
    FabricNotificationService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeNotificationContainer();
    };
    /**
     * @return {?}
     */
    FabricNotificationService.prototype.getComponent = /**
     * @return {?}
     */
    function () {
        return FabricNotificationsOverlayComponent;
    };
    /**
     * @param {?} notification
     * @param {?=} config
     * @return {?}
     */
    FabricNotificationService.prototype.open = /**
     * @param {?} notification
     * @param {?=} config
     * @return {?}
     */
    function (notification, config) {
        /** @type {?} */
        var position = FabricNotificationPosition.TOP_RIGHT;
        if (config && config.position) {
            position = config.position;
        }
        this.createFabricNotification(notification, config, position);
        if (!this.getComponentRef()) {
            /** @type {?} */
            var theme = Theme.FABRIC;
            /** @type {?} */
            var parentInjector = this.getInjector();
            if (config && config.theme) {
                theme = config.theme;
            }
            if (config && config.injector) {
                parentInjector = config.injector;
            }
            /** @type {?} */
            var injector = Injector.create({
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
    };
    /**
     * @return {?}
     */
    FabricNotificationService.prototype.close = /**
     * @return {?}
     */
    function () {
        this.removeNotificationContainer();
        this.unsub$.next();
        this.unsub$.complete();
    };
    /**
     * @private
     * @return {?}
     */
    FabricNotificationService.prototype.removeNotificationContainer = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.getComponentRef()) {
            this.removeComponent();
            this.notificationIndex = 0;
            this.fabricNotification = null;
        }
    };
    /**
     * @private
     * @param {?} description
     * @param {?} config
     * @param {?} position
     * @return {?}
     */
    FabricNotificationService.prototype.createFabricNotification = /**
     * @private
     * @param {?} description
     * @param {?} config
     * @param {?} position
     * @return {?}
     */
    function (description, config, position) {
        /** @type {?} */
        var duration = FabricNotificationService.DEFAULT_DURATION;
        /** @type {?} */
        var enabled = true;
        if (config && config.timer) {
            duration = config.timer.duration;
            if (config.timer.extendTimer) {
                duration = config.timer.duration * (this.notificationIndex + 1);
            }
            if (config.timer.enabled !== undefined) {
                enabled = config.timer.enabled;
            }
        }
        this.fabricNotification = new FabricNotification(description, this.notificationIndex, { duration: duration, enabled: enabled }, position);
        this.notificationIndex += 1;
    };
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    FabricNotificationService.prototype.pushNotification = /**
     * @private
     * @param {?} position
     * @return {?}
     */
    function (position) {
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
        }
        this.getComponentRef().instance.detectChanges();
    };
    FabricNotificationService.DEFAULT_DURATION = 4000;
    FabricNotificationService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FabricNotificationService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return FabricNotificationService;
}(FabricModal));
export { FabricNotificationService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricNotificationService.DEFAULT_DURATION;
    /** @type {?} */
    FabricNotificationService.prototype.fabricNotification;
    /** @type {?} */
    FabricNotificationService.prototype.notificationIndex;
    /**
     * @type {?}
     * @private
     */
    FabricNotificationService.prototype.unsub$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibW9kYWwvbm90aWZpY2F0aW9uL2ZhYnJpYy1ub3RpZmljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQW1CLE1BQU0sZUFBZSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQy9GLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRzVFO0lBQytDLHFEQUFnRDtJQVU5RixtQ0FBWSx3QkFBa0QsRUFDM0QsY0FBOEIsRUFDOUIsUUFBa0IsRUFDQSxRQUFhO1FBSGxDLFlBSUMsa0JBQU0sd0JBQXdCLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsU0FDbkU7UUFURCx1QkFBaUIsR0FBVyxDQUFDLENBQUM7UUFFYixZQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUFPeEMsQ0FBQzs7OztJQUVELCtDQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCxn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Ozs7O2dCQWJjLHdCQUF3QjtnQkFBeEMsY0FBYztnQkFBZ0QsUUFBUTtnREEyQjFFLE1BQU0sU0FBQyxRQUFROztJQWtIcEIsZ0NBQUM7Q0FBQSxBQWhJRCxDQUMrQyxXQUFXLEdBK0h6RDtTQS9IWSx5QkFBeUI7Ozs7OztJQUVyQywyQ0FBZ0Q7O0lBRWhELHVEQUF1Qzs7SUFFdkMsc0RBQThCOzs7OztJQUU5QiwyQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbmplY3QsIEluamVjdGFibGUsIEluamVjdG9yLCBPbkRlc3Ryb3ksIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRmFicmljTm90aWZpY2F0aW9uc092ZXJsYXlDb21wb25lbnQgfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb25zLW92ZXJsYXkuY29tcG9uZW50JztcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lJztcbmltcG9ydCB7IHRoZW1lVG9rZW4gfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUudG9rZW4nO1xuaW1wb3J0IHsgRmFicmljTm90aWZpY2F0aW9uIH0gZnJvbSAnLi9mYWJyaWMtbm90aWZpY2F0aW9uJztcbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvbkNvbmZpZyB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbi1jb25maWcnO1xuaW1wb3J0IHsgRmFicmljTW9kYWwgfSBmcm9tICcuLi8uLi9jb21tb24vbW9kYWwvZmFicmljLW1vZGFsJztcbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uIH0gZnJvbSAnLi9mYWJyaWMtbm90aWZpY2F0aW9uLXBvc2l0aW9uJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFicmljTm90aWZpY2F0aW9uU2VydmljZSBleHRlbmRzIEZhYnJpY01vZGFsPEZhYnJpY05vdGlmaWNhdGlvbnNPdmVybGF5Q29tcG9uZW50PiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9EVVJBVElPTiA9IDQwMDA7XG5cblx0ZmFicmljTm90aWZpY2F0aW9uOiBGYWJyaWNOb3RpZmljYXRpb247XG5cblx0bm90aWZpY2F0aW9uSW5kZXg6IG51bWJlciA9IDA7XG5cblx0cHJpdmF0ZSByZWFkb25seSB1bnN1YiQgPSBuZXcgU3ViamVjdCgpO1xuXG5cdGNvbnN0cnVjdG9yKGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRhcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYsXG5cdFx0XHRcdGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0QEluamVjdChET0NVTUVOVCkgZG9jdW1lbnQ6IGFueSkge1xuXHRcdHN1cGVyKGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgYXBwbGljYXRpb25SZWYsIGluamVjdG9yLCBkb2N1bWVudCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnJlbW92ZU5vdGlmaWNhdGlvbkNvbnRhaW5lcigpO1xuXHR9XG5cblx0Z2V0Q29tcG9uZW50KCk6IFR5cGU8RmFicmljTm90aWZpY2F0aW9uc092ZXJsYXlDb21wb25lbnQ+IHtcblx0XHRyZXR1cm4gRmFicmljTm90aWZpY2F0aW9uc092ZXJsYXlDb21wb25lbnQ7XG5cdH1cblxuXHRvcGVuKG5vdGlmaWNhdGlvbjogc3RyaW5nLCBjb25maWc/OiBGYWJyaWNOb3RpZmljYXRpb25Db25maWcpOiB2b2lkIHtcblx0XHRsZXQgcG9zaXRpb24gPSBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbi5UT1BfUklHSFQ7XG5cblx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy5wb3NpdGlvbikge1xuXHRcdFx0cG9zaXRpb24gPSBjb25maWcucG9zaXRpb247XG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVGYWJyaWNOb3RpZmljYXRpb24obm90aWZpY2F0aW9uLCBjb25maWcsIHBvc2l0aW9uKTtcblxuXHRcdGlmICghdGhpcy5nZXRDb21wb25lbnRSZWYoKSkge1xuXG5cdFx0XHRsZXQgdGhlbWUgPSBUaGVtZS5GQUJSSUMsXG5cdFx0XHRcdHBhcmVudEluamVjdG9yID0gdGhpcy5nZXRJbmplY3RvcigpO1xuXG5cblx0XHRcdGlmIChjb25maWcgJiYgY29uZmlnLnRoZW1lKSB7XG5cdFx0XHRcdHRoZW1lID0gY29uZmlnLnRoZW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy5pbmplY3Rvcikge1xuXHRcdFx0XHRwYXJlbnRJbmplY3RvciA9IGNvbmZpZy5pbmplY3Rvcjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcblx0XHRcdFx0cHJvdmlkZXJzOiBbe1xuXHRcdFx0XHRcdHByb3ZpZGU6IHRoZW1lVG9rZW4sXG5cdFx0XHRcdFx0dXNlVmFsdWU6IHRoZW1lXG5cdFx0XHRcdH1dLFxuXHRcdFx0XHRwYXJlbnQ6IHBhcmVudEluamVjdG9yXG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5jcmVhdGVBbmRBcHBlbmQoaW5qZWN0b3IpO1xuXHRcdFx0dGhpcy5wdXNoTm90aWZpY2F0aW9uKHBvc2l0aW9uKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wdXNoTm90aWZpY2F0aW9uKHBvc2l0aW9uKTtcblx0XHR9XG5cdH1cblxuXHRjbG9zZSgpOiB2b2lkIHtcblx0XHR0aGlzLnJlbW92ZU5vdGlmaWNhdGlvbkNvbnRhaW5lcigpO1xuXHRcdHRoaXMudW5zdWIkLm5leHQoKTtcblx0XHR0aGlzLnVuc3ViJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSByZW1vdmVOb3RpZmljYXRpb25Db250YWluZXIoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuZ2V0Q29tcG9uZW50UmVmKCkpIHtcblx0XHRcdHRoaXMucmVtb3ZlQ29tcG9uZW50KCk7XG5cdFx0XHR0aGlzLm5vdGlmaWNhdGlvbkluZGV4ID0gMDtcblx0XHRcdHRoaXMuZmFicmljTm90aWZpY2F0aW9uID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUZhYnJpY05vdGlmaWNhdGlvbihkZXNjcmlwdGlvbjogc3RyaW5nLCBjb25maWc6IEZhYnJpY05vdGlmaWNhdGlvbkNvbmZpZywgcG9zaXRpb246IEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uKTogdm9pZCB7XG5cdFx0bGV0IGR1cmF0aW9uID0gRmFicmljTm90aWZpY2F0aW9uU2VydmljZS5ERUZBVUxUX0RVUkFUSU9OLFxuXHRcdFx0ZW5hYmxlZCA9IHRydWU7XG5cblx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy50aW1lcikge1xuXHRcdFx0ZHVyYXRpb24gPSBjb25maWcudGltZXIuZHVyYXRpb247XG5cblx0XHRcdGlmIChjb25maWcudGltZXIuZXh0ZW5kVGltZXIpIHtcblx0XHRcdFx0ZHVyYXRpb24gPSBjb25maWcudGltZXIuZHVyYXRpb24gKiAodGhpcy5ub3RpZmljYXRpb25JbmRleCArIDEpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY29uZmlnLnRpbWVyLmVuYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRlbmFibGVkID0gY29uZmlnLnRpbWVyLmVuYWJsZWQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5mYWJyaWNOb3RpZmljYXRpb24gPSBuZXcgRmFicmljTm90aWZpY2F0aW9uKFxuXHRcdFx0ZGVzY3JpcHRpb24sXG5cdFx0XHR0aGlzLm5vdGlmaWNhdGlvbkluZGV4LFxuXHRcdFx0eyBkdXJhdGlvbiwgZW5hYmxlZCB9LFxuXHRcdFx0cG9zaXRpb24pO1xuXHRcdHRoaXMubm90aWZpY2F0aW9uSW5kZXggKz0gMTtcblx0fVxuXG5cdHByaXZhdGUgcHVzaE5vdGlmaWNhdGlvbihwb3NpdGlvbjogRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24pOiB2b2lkIHtcblxuXHRcdHN3aXRjaCAocG9zaXRpb24pIHtcblxuXHRcdFx0Y2FzZSBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbi5UT1BfUklHSFQ6XG5cdFx0XHRcdHRoaXMuZ2V0Q29tcG9uZW50UmVmKCkuaW5zdGFuY2Uubm90aWZpY2F0aW9uc1RvcFJpZ2h0ID1cblx0XHRcdFx0XHR0aGlzLmdldENvbXBvbmVudFJlZigpLmluc3RhbmNlLm5vdGlmaWNhdGlvbnNUb3BSaWdodC5jb25jYXQodGhpcy5mYWJyaWNOb3RpZmljYXRpb24pO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbi5UT1BfTEVGVDpcblx0XHRcdFx0dGhpcy5nZXRDb21wb25lbnRSZWYoKS5pbnN0YW5jZS5ub3RpZmljYXRpb25zVG9wTGVmdCA9XG5cdFx0XHRcdFx0dGhpcy5nZXRDb21wb25lbnRSZWYoKS5pbnN0YW5jZS5ub3RpZmljYXRpb25zVG9wTGVmdC5jb25jYXQodGhpcy5mYWJyaWNOb3RpZmljYXRpb24pO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbi5CT1RUT01fUklHSFQ6XG5cdFx0XHRcdHRoaXMuZ2V0Q29tcG9uZW50UmVmKCkuaW5zdGFuY2Uubm90aWZpY2F0aW9uc0JvdHRvbVJpZ2h0ID1cblx0XHRcdFx0XHR0aGlzLmdldENvbXBvbmVudFJlZigpLmluc3RhbmNlLm5vdGlmaWNhdGlvbnNCb3R0b21SaWdodC5jb25jYXQodGhpcy5mYWJyaWNOb3RpZmljYXRpb24pO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbi5CT1RUT01fTEVGVDpcblx0XHRcdFx0dGhpcy5nZXRDb21wb25lbnRSZWYoKS5pbnN0YW5jZS5ub3RpZmljYXRpb25zQm90dG9tTGVmdCA9XG5cdFx0XHRcdFx0dGhpcy5nZXRDb21wb25lbnRSZWYoKS5pbnN0YW5jZS5ub3RpZmljYXRpb25zQm90dG9tTGVmdC5jb25jYXQodGhpcy5mYWJyaWNOb3RpZmljYXRpb24pO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHR0aGlzLmdldENvbXBvbmVudFJlZigpLmluc3RhbmNlLmRldGVjdENoYW5nZXMoKTtcblx0fVxufVxuIl19