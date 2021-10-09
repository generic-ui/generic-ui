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
            default:
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsibW9kYWwvbm90aWZpY2F0aW9uL2ZhYnJpYy1ub3RpZmljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQW1CLE1BQU0sZUFBZSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQy9GLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRzVFO0lBQytDLHFEQUFnRDtJQVU5RixtQ0FBWSx3QkFBa0QsRUFDM0QsY0FBOEIsRUFDOUIsUUFBa0IsRUFDQSxRQUFhO1FBSGxDLFlBSUMsa0JBQU0sd0JBQXdCLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsU0FDbkU7UUFURCx1QkFBaUIsR0FBVyxDQUFDLENBQUM7UUFFYixZQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUFPeEMsQ0FBQzs7OztJQUVELCtDQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCxn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QUFDOztnQkFIaEQsVUFBVTs7OztnQkFiYyx3QkFBd0I7Z0JBQXhDLGNBQWM7Z0JBQWdELFFBQVE7Z0RBMkIxRSxNQUFNLFNBQUMsUUFBUTs7SUFxSHBCLGdDQUFDO0NBQUEsQUFuSUQsQ0FDK0MsV0FBVyxHQWtJekQ7U0FsSVkseUJBQXlCOzs7Ozs7SUFFckMsMkNBQWdEOztJQUVoRCx1REFBdUM7O0lBRXZDLHNEQUE4Qjs7Ozs7SUFFOUIsMkNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgT25EZXN0cm95LCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvbnNPdmVybGF5Q29tcG9uZW50IH0gZnJvbSAnLi9mYWJyaWMtbm90aWZpY2F0aW9ucy1vdmVybGF5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZSc7XG5pbXBvcnQgeyB0aGVtZVRva2VuIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lLnRva2VuJztcbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvbiB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb25Db25maWcgfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb24tY29uZmlnJztcbmltcG9ydCB7IEZhYnJpY01vZGFsIH0gZnJvbSAnLi4vLi4vY29tbW9uL21vZGFsL2ZhYnJpYy1tb2RhbCc7XG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbiB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbi1wb3NpdGlvbic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY05vdGlmaWNhdGlvblNlcnZpY2UgZXh0ZW5kcyBGYWJyaWNNb2RhbDxGYWJyaWNOb3RpZmljYXRpb25zT3ZlcmxheUNvbXBvbmVudD4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfRFVSQVRJT04gPSA0MDAwO1xuXG5cdGZhYnJpY05vdGlmaWNhdGlvbjogRmFicmljTm90aWZpY2F0aW9uO1xuXG5cdG5vdGlmaWNhdGlvbkluZGV4OiBudW1iZXIgPSAwO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdW5zdWIkID0gbmV3IFN1YmplY3QoKTtcblxuXHRjb25zdHJ1Y3Rvcihjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRcdFx0YXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLFxuXHRcdFx0XHRpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50OiBhbnkpIHtcblx0XHRzdXBlcihjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIGFwcGxpY2F0aW9uUmVmLCBpbmplY3RvciwgZG9jdW1lbnQpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5yZW1vdmVOb3RpZmljYXRpb25Db250YWluZXIoKTtcblx0fVxuXG5cdGdldENvbXBvbmVudCgpOiBUeXBlPEZhYnJpY05vdGlmaWNhdGlvbnNPdmVybGF5Q29tcG9uZW50PiB7XG5cdFx0cmV0dXJuIEZhYnJpY05vdGlmaWNhdGlvbnNPdmVybGF5Q29tcG9uZW50O1xuXHR9XG5cblx0b3Blbihub3RpZmljYXRpb246IHN0cmluZywgY29uZmlnPzogRmFicmljTm90aWZpY2F0aW9uQ29uZmlnKTogdm9pZCB7XG5cdFx0bGV0IHBvc2l0aW9uID0gRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uVE9QX1JJR0hUO1xuXG5cdFx0aWYgKGNvbmZpZyAmJiBjb25maWcucG9zaXRpb24pIHtcblx0XHRcdHBvc2l0aW9uID0gY29uZmlnLnBvc2l0aW9uO1xuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlRmFicmljTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbiwgY29uZmlnLCBwb3NpdGlvbik7XG5cblx0XHRpZiAoIXRoaXMuZ2V0Q29tcG9uZW50UmVmKCkpIHtcblxuXHRcdFx0bGV0IHRoZW1lID0gVGhlbWUuRkFCUklDLFxuXHRcdFx0XHRwYXJlbnRJbmplY3RvciA9IHRoaXMuZ2V0SW5qZWN0b3IoKTtcblxuXG5cdFx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy50aGVtZSkge1xuXHRcdFx0XHR0aGVtZSA9IGNvbmZpZy50aGVtZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNvbmZpZyAmJiBjb25maWcuaW5qZWN0b3IpIHtcblx0XHRcdFx0cGFyZW50SW5qZWN0b3IgPSBjb25maWcuaW5qZWN0b3I7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG5cdFx0XHRcdHByb3ZpZGVyczogW3tcblx0XHRcdFx0XHRwcm92aWRlOiB0aGVtZVRva2VuLFxuXHRcdFx0XHRcdHVzZVZhbHVlOiB0aGVtZVxuXHRcdFx0XHR9XSxcblx0XHRcdFx0cGFyZW50OiBwYXJlbnRJbmplY3RvclxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuY3JlYXRlQW5kQXBwZW5kKGluamVjdG9yKTtcblx0XHRcdHRoaXMucHVzaE5vdGlmaWNhdGlvbihwb3NpdGlvbik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucHVzaE5vdGlmaWNhdGlvbihwb3NpdGlvbik7XG5cdFx0fVxuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0dGhpcy5yZW1vdmVOb3RpZmljYXRpb25Db250YWluZXIoKTtcblx0XHR0aGlzLnVuc3ViJC5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YiQuY29tcGxldGUoKTtcblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlTm90aWZpY2F0aW9uQ29udGFpbmVyKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmdldENvbXBvbmVudFJlZigpKSB7XG5cdFx0XHR0aGlzLnJlbW92ZUNvbXBvbmVudCgpO1xuXHRcdFx0dGhpcy5ub3RpZmljYXRpb25JbmRleCA9IDA7XG5cdFx0XHR0aGlzLmZhYnJpY05vdGlmaWNhdGlvbiA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVGYWJyaWNOb3RpZmljYXRpb24oZGVzY3JpcHRpb246IHN0cmluZywgY29uZmlnOiBGYWJyaWNOb3RpZmljYXRpb25Db25maWcsIHBvc2l0aW9uOiBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbik6IHZvaWQge1xuXHRcdGxldCBkdXJhdGlvbiA9IEZhYnJpY05vdGlmaWNhdGlvblNlcnZpY2UuREVGQVVMVF9EVVJBVElPTixcblx0XHRcdGVuYWJsZWQgPSB0cnVlO1xuXG5cdFx0aWYgKGNvbmZpZyAmJiBjb25maWcudGltZXIpIHtcblx0XHRcdGR1cmF0aW9uID0gY29uZmlnLnRpbWVyLmR1cmF0aW9uO1xuXG5cdFx0XHRpZiAoY29uZmlnLnRpbWVyLmV4dGVuZFRpbWVyKSB7XG5cdFx0XHRcdGR1cmF0aW9uID0gY29uZmlnLnRpbWVyLmR1cmF0aW9uICogKHRoaXMubm90aWZpY2F0aW9uSW5kZXggKyAxKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNvbmZpZy50aW1lci5lbmFibGVkICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0ZW5hYmxlZCA9IGNvbmZpZy50aW1lci5lbmFibGVkO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuZmFicmljTm90aWZpY2F0aW9uID0gbmV3IEZhYnJpY05vdGlmaWNhdGlvbihcblx0XHRcdGRlc2NyaXB0aW9uLFxuXHRcdFx0dGhpcy5ub3RpZmljYXRpb25JbmRleCxcblx0XHRcdHsgZHVyYXRpb24sIGVuYWJsZWQgfSxcblx0XHRcdHBvc2l0aW9uKTtcblx0XHR0aGlzLm5vdGlmaWNhdGlvbkluZGV4ICs9IDE7XG5cdH1cblxuXHRwcml2YXRlIHB1c2hOb3RpZmljYXRpb24ocG9zaXRpb246IEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uKTogdm9pZCB7XG5cblx0XHRzd2l0Y2ggKHBvc2l0aW9uKSB7XG5cblx0XHRcdGNhc2UgRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uVE9QX1JJR0hUOlxuXHRcdFx0XHR0aGlzLmdldENvbXBvbmVudFJlZigpLmluc3RhbmNlLm5vdGlmaWNhdGlvbnNUb3BSaWdodCA9XG5cdFx0XHRcdFx0dGhpcy5nZXRDb21wb25lbnRSZWYoKS5pbnN0YW5jZS5ub3RpZmljYXRpb25zVG9wUmlnaHQuY29uY2F0KHRoaXMuZmFicmljTm90aWZpY2F0aW9uKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uVE9QX0xFRlQ6XG5cdFx0XHRcdHRoaXMuZ2V0Q29tcG9uZW50UmVmKCkuaW5zdGFuY2Uubm90aWZpY2F0aW9uc1RvcExlZnQgPVxuXHRcdFx0XHRcdHRoaXMuZ2V0Q29tcG9uZW50UmVmKCkuaW5zdGFuY2Uubm90aWZpY2F0aW9uc1RvcExlZnQuY29uY2F0KHRoaXMuZmFicmljTm90aWZpY2F0aW9uKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uQk9UVE9NX1JJR0hUOlxuXHRcdFx0XHR0aGlzLmdldENvbXBvbmVudFJlZigpLmluc3RhbmNlLm5vdGlmaWNhdGlvbnNCb3R0b21SaWdodCA9XG5cdFx0XHRcdFx0dGhpcy5nZXRDb21wb25lbnRSZWYoKS5pbnN0YW5jZS5ub3RpZmljYXRpb25zQm90dG9tUmlnaHQuY29uY2F0KHRoaXMuZmFicmljTm90aWZpY2F0aW9uKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uQk9UVE9NX0xFRlQ6XG5cdFx0XHRcdHRoaXMuZ2V0Q29tcG9uZW50UmVmKCkuaW5zdGFuY2Uubm90aWZpY2F0aW9uc0JvdHRvbUxlZnQgPVxuXHRcdFx0XHRcdHRoaXMuZ2V0Q29tcG9uZW50UmVmKCkuaW5zdGFuY2Uubm90aWZpY2F0aW9uc0JvdHRvbUxlZnQuY29uY2F0KHRoaXMuZmFicmljTm90aWZpY2F0aW9uKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHRoaXMuZ2V0Q29tcG9uZW50UmVmKCkuaW5zdGFuY2UuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG59XG4iXX0=