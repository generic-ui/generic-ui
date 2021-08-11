/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, forwardRef, Inject, Renderer2, ViewEncapsulation } from '@angular/core';
import { FabricNotificationService } from './fabric-notification.service';
import { Theme } from '../../themes/theme';
import { themeToken } from '../../themes/theme.token';
import { FabricNotificationPosition } from './fabric-notification-position';
import { FabricThemedComponent } from '../../common/modal/fabric-themed-component';
import { FabricModalThemeService } from '../../themes/fabric-modal-theme.service';
var FabricNotificationsOverlayComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabricNotificationsOverlayComponent, _super);
    function FabricNotificationsOverlayComponent(changeDetectorRef, componentFactoryResolver, elRef, renderer, themeService, theme, notificationsService) {
        var _this = _super.call(this, elRef, renderer, themeService) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.elRef = elRef;
        _this.notificationsService = notificationsService;
        _this.notificationsTopRight = [];
        _this.notificationsTopLeft = [];
        _this.notificationsBottomRight = [];
        _this.notificationsBottomLeft = [];
        _this.FabricNotificationPosition = FabricNotificationPosition;
        return _this;
    }
    /**
     * @param {?} selectedNotification
     * @return {?}
     */
    FabricNotificationsOverlayComponent.prototype.removeNotification = /**
     * @param {?} selectedNotification
     * @return {?}
     */
    function (selectedNotification) {
        switch (selectedNotification.position) {
            case FabricNotificationPosition.TOP_RIGHT:
                this.notificationsTopRight = this.notificationsTopRight
                    .filter((/**
                 * @param {?} notification
                 * @return {?}
                 */
                function (notification) { return notification.index !== selectedNotification.index; }));
                break;
            case FabricNotificationPosition.TOP_LEFT:
                this.notificationsTopLeft = this.notificationsTopLeft
                    .filter((/**
                 * @param {?} notification
                 * @return {?}
                 */
                function (notification) { return notification.index !== selectedNotification.index; }));
                break;
            case FabricNotificationPosition.BOTTOM_RIGHT:
                this.notificationsBottomRight = this.notificationsBottomRight
                    .filter((/**
                 * @param {?} notification
                 * @return {?}
                 */
                function (notification) { return notification.index !== selectedNotification.index; }));
                break;
            case FabricNotificationPosition.BOTTOM_LEFT:
                this.notificationsBottomLeft = this.notificationsBottomLeft
                    .filter((/**
                 * @param {?} notification
                 * @return {?}
                 */
                function (notification) { return notification.index !== selectedNotification.index; }));
                break;
        }
        this.detectChanges();
        this.checkNotificationsLength();
    };
    /**
     * @return {?}
     */
    FabricNotificationsOverlayComponent.prototype.detectChanges = /**
     * @return {?}
     */
    function () {
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @return {?}
     */
    FabricNotificationsOverlayComponent.prototype.checkNotificationsLength = /**
     * @return {?}
     */
    function () {
        if (this.notificationsTopRight.length === 0
            && this.notificationsTopLeft.length === 0
            && this.notificationsBottomRight.length === 0
            && this.notificationsBottomLeft.length === 0) {
            this.notificationsService.close();
        }
    };
    /**
     * @param {?} container
     * @return {?}
     */
    FabricNotificationsOverlayComponent.prototype.isContainerNotEmpty = /**
     * @param {?} container
     * @return {?}
     */
    function (container) {
        return container && container.length > 0;
    };
    FabricNotificationsOverlayComponent.decorators = [
        { type: Component, args: [{
                    template: "<gui-notifications-container (onNotificationClose)=\"removeNotification($event)\"\n\t\t\t\t\t\t\t *ngIf=\"isContainerNotEmpty(notificationsTopRight)\"\n\t\t\t\t\t\t\t [notifications]=\"notificationsTopRight\"\n\t\t\t\t\t\t\t [position]=\"FabricNotificationPosition.TOP_RIGHT\"></gui-notifications-container>\n\n<gui-notifications-container (onNotificationClose)=\"removeNotification($event)\"\n\t\t\t\t\t\t\t *ngIf=\"isContainerNotEmpty(notificationsTopLeft)\"\n\t\t\t\t\t\t\t [notifications]=\"notificationsTopLeft\"\n\t\t\t\t\t\t\t [position]=\"FabricNotificationPosition.TOP_LEFT\"></gui-notifications-container>\n\n<gui-notifications-container (onNotificationClose)=\"removeNotification($event)\"\n\t\t\t\t\t\t\t *ngIf=\"isContainerNotEmpty(notificationsBottomRight)\"\n\t\t\t\t\t\t\t [notifications]=\"notificationsBottomRight\"\n\t\t\t\t\t\t\t [position]=\"FabricNotificationPosition.BOTTOM_RIGHT\"></gui-notifications-container>\n\n<gui-notifications-container (onNotificationClose)=\"removeNotification($event)\"\n\t\t\t\t\t\t\t *ngIf=\"isContainerNotEmpty(notificationsBottomLeft)\"\n\t\t\t\t\t\t\t [notifications]=\"notificationsBottomLeft\"\n\t\t\t\t\t\t\t [position]=\"FabricNotificationPosition.BOTTOM_LEFT\"></gui-notifications-container>\n",
                    host: {
                        '[class.gui-notifications-overlay]': 'true'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-notifications-overlay{-ms-flex-align:center;align-items:center;font-family:Arial;-ms-flex-pack:center;justify-content:center;max-width:400px;position:fixed;z-index:1000}.gui-notifications-overlay gui-notifications-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:fixed}.gui-notifications-overlay gui-notifications-container.gui-notifications-top-left{left:0;top:0}.gui-notifications-overlay gui-notifications-container.gui-notifications-top-right{right:0;top:0}.gui-notifications-overlay gui-notifications-container.gui-notifications-bottom-left{bottom:0;left:0}.gui-notifications-overlay gui-notifications-container.gui-notifications-bottom-right{bottom:0;right:0}.gui-notifications-overlay .gui-notification{background:#fff;box-shadow:0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05);display:block;margin:16px;padding:32px;position:relative}.gui-notifications-overlay .gui-notification.gui-notification-right-side{-webkit-animation:.1s forwards loadNotificationRightSide;animation:.1s forwards loadNotificationRightSide}.gui-notifications-overlay .gui-notification.gui-notification-left-side{-webkit-animation:.1s forwards loadNotificationLeftSide;animation:.1s forwards loadNotificationLeftSide}@-webkit-keyframes loadNotificationRightSide{0%{transform:translateX(50%)}100%{transform:translateX(0)}}@keyframes loadNotificationRightSide{0%{transform:translateX(50%)}100%{transform:translateX(0)}}@-webkit-keyframes loadNotificationLeftSide{0%{transform:translateX(-50%)}100%{transform:translateX(0)}}@keyframes loadNotificationLeftSide{0%{transform:translateX(-50%)}100%{transform:translateX(0)}}.gui-notifications-overlay .gui-notification.gui-notification-active.gui-notification-right-side{-webkit-animation:.2s forwards closeNotificationRightSide;animation:.2s forwards closeNotificationRightSide}@-webkit-keyframes closeNotificationRightSide{0%{transform:translateX(0)}100%{transform:translateX(100%)}}@keyframes closeNotificationRightSide{0%{transform:translateX(0)}100%{transform:translateX(100%)}}.gui-notifications-overlay .gui-notification.gui-notification-active.gui-notification-left-side{-webkit-animation:.2s forwards closeNotificationLeftSide;animation:.2s forwards closeNotificationLeftSide}@-webkit-keyframes closeNotificationLeftSide{0%{transform:translateX(0)}100%{transform:translateX(-100%)}}@keyframes closeNotificationLeftSide{0%{transform:translateX(0)}100%{transform:translateX(-100%)}}", ".gui-dark .gui-notification{background:#424242}", ".gui-material .gui-notification{background:#3949ab;color:#fff;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:500}"]
                }] }
    ];
    /** @nocollapse */
    FabricNotificationsOverlayComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ComponentFactoryResolver },
        { type: ElementRef },
        { type: Renderer2 },
        { type: FabricModalThemeService },
        { type: Theme, decorators: [{ type: Inject, args: [themeToken,] }] },
        { type: FabricNotificationService, decorators: [{ type: Inject, args: [forwardRef((/**
                         * @return {?}
                         */
                        function () { return FabricNotificationService; })),] }] }
    ]; };
    return FabricNotificationsOverlayComponent;
}(FabricThemedComponent));
export { FabricNotificationsOverlayComponent };
if (false) {
    /** @type {?} */
    FabricNotificationsOverlayComponent.prototype.notificationsTopRight;
    /** @type {?} */
    FabricNotificationsOverlayComponent.prototype.notificationsTopLeft;
    /** @type {?} */
    FabricNotificationsOverlayComponent.prototype.notificationsBottomRight;
    /** @type {?} */
    FabricNotificationsOverlayComponent.prototype.notificationsBottomLeft;
    /** @type {?} */
    FabricNotificationsOverlayComponent.prototype.FabricNotificationPosition;
    /**
     * @type {?}
     * @private
     */
    FabricNotificationsOverlayComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    FabricNotificationsOverlayComponent.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    FabricNotificationsOverlayComponent.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    FabricNotificationsOverlayComponent.prototype.notificationsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbnMtb3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJtb2RhbC9ub3RpZmljYXRpb24vZmFicmljLW5vdGlmaWNhdGlvbnMtb3ZlcmxheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1Qsd0JBQXdCLEVBQ3hCLFVBQVUsRUFDVixVQUFVLEVBQ1YsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUdsRjtJQWF5RCwrREFBcUI7SUFZN0UsNkNBQTZCLGlCQUFvQyxFQUM3Qyx3QkFBa0QsRUFDbEQsS0FBaUIsRUFDbEMsUUFBbUIsRUFDbkIsWUFBcUMsRUFDakIsS0FBWSxFQUNzQyxvQkFBK0M7UUFOeEgsWUFPQyxrQkFBTSxLQUFLLEVBQUUsUUFBUSxFQUFFLFlBQVksQ0FBQyxTQUNwQztRQVI0Qix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUlvQywwQkFBb0IsR0FBcEIsb0JBQW9CLENBQTJCO1FBaEJ4SCwy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QUF6QixDQUF5QixFQUFDOztJQWdEdkQsMENBQUM7Q0FBQSxBQS9FRCxDQWF5RCxxQkFBcUIsR0FrRTdFO1NBbEVZLG1DQUFtQzs7O0lBRS9DLG9FQUFzRDs7SUFFdEQsbUVBQXFEOztJQUVyRCx1RUFBeUQ7O0lBRXpELHNFQUF3RDs7SUFFeEQseUVBQXdEOzs7OztJQUU1QyxnRUFBcUQ7Ozs7O0lBQzlELHVFQUFtRTs7Ozs7SUFDbkUsb0RBQWtDOzs7OztJQUlsQyxtRUFBcUgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRFbGVtZW50UmVmLFxuXHRmb3J3YXJkUmVmLFxuXHRJbmplY3QsXG5cdFJlbmRlcmVyMixcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZSc7XG5pbXBvcnQgeyB0aGVtZVRva2VuIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lLnRva2VuJztcbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvbiB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbiB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbi1wb3NpdGlvbic7XG5pbXBvcnQgeyBGYWJyaWNUaGVtZWRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21tb24vbW9kYWwvZmFicmljLXRoZW1lZC1jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljTW9kYWxUaGVtZVNlcnZpY2UgfSBmcm9tICcuLi8uLi90aGVtZXMvZmFicmljLW1vZGFsLXRoZW1lLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZVVybDogJ2ZhYnJpYy1ub3RpZmljYXRpb25zLW92ZXJsYXkuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9mYWJyaWMtbm90aWZpY2F0aW9uLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvZmFicmljLW5vdGlmaWNhdGlvbi5kYXJrLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvZmFicmljLW5vdGlmaWNhdGlvbi5tYXRlcmlhbC5uZ3guc2Nzcydcblx0XSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLW5vdGlmaWNhdGlvbnMtb3ZlcmxheV0nOiAndHJ1ZSdcblx0fSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljTm90aWZpY2F0aW9uc092ZXJsYXlDb21wb25lbnQgZXh0ZW5kcyBGYWJyaWNUaGVtZWRDb21wb25lbnQge1xuXG5cdG5vdGlmaWNhdGlvbnNUb3BSaWdodDogQXJyYXk8RmFicmljTm90aWZpY2F0aW9uPiA9IFtdO1xuXG5cdG5vdGlmaWNhdGlvbnNUb3BMZWZ0OiBBcnJheTxGYWJyaWNOb3RpZmljYXRpb24+ID0gW107XG5cblx0bm90aWZpY2F0aW9uc0JvdHRvbVJpZ2h0OiBBcnJheTxGYWJyaWNOb3RpZmljYXRpb24+ID0gW107XG5cblx0bm90aWZpY2F0aW9uc0JvdHRvbUxlZnQ6IEFycmF5PEZhYnJpY05vdGlmaWNhdGlvbj4gPSBbXTtcblxuXHRGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbiA9IEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsUmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRyZW5kZXJlcjogUmVuZGVyZXIyLFxuXHRcdFx0XHR0aGVtZVNlcnZpY2U6IEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlLFxuXHRcdFx0XHRASW5qZWN0KHRoZW1lVG9rZW4pIHRoZW1lOiBUaGVtZSxcblx0XHRcdFx0QEluamVjdChmb3J3YXJkUmVmKCgpID0+IEZhYnJpY05vdGlmaWNhdGlvblNlcnZpY2UpKSBwcml2YXRlIHJlYWRvbmx5IG5vdGlmaWNhdGlvbnNTZXJ2aWNlOiBGYWJyaWNOb3RpZmljYXRpb25TZXJ2aWNlKSB7XG5cdFx0c3VwZXIoZWxSZWYsIHJlbmRlcmVyLCB0aGVtZVNlcnZpY2UpO1xuXHR9XG5cblx0cmVtb3ZlTm90aWZpY2F0aW9uKHNlbGVjdGVkTm90aWZpY2F0aW9uOiBGYWJyaWNOb3RpZmljYXRpb24pOiB2b2lkIHtcblxuXHRcdHN3aXRjaCAoc2VsZWN0ZWROb3RpZmljYXRpb24ucG9zaXRpb24pIHtcblx0XHRcdGNhc2UgRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uVE9QX1JJR0hUOlxuXHRcdFx0XHR0aGlzLm5vdGlmaWNhdGlvbnNUb3BSaWdodCA9IHRoaXMubm90aWZpY2F0aW9uc1RvcFJpZ2h0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgLmZpbHRlcigobm90aWZpY2F0aW9uOiBGYWJyaWNOb3RpZmljYXRpb24pID0+IG5vdGlmaWNhdGlvbi5pbmRleCAhPT0gc2VsZWN0ZWROb3RpZmljYXRpb24uaW5kZXgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbi5UT1BfTEVGVDpcblx0XHRcdFx0dGhpcy5ub3RpZmljYXRpb25zVG9wTGVmdCA9IHRoaXMubm90aWZpY2F0aW9uc1RvcExlZnRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5maWx0ZXIoKG5vdGlmaWNhdGlvbjogRmFicmljTm90aWZpY2F0aW9uKSA9PiBub3RpZmljYXRpb24uaW5kZXggIT09IHNlbGVjdGVkTm90aWZpY2F0aW9uLmluZGV4KTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uQk9UVE9NX1JJR0hUOlxuXHRcdFx0XHR0aGlzLm5vdGlmaWNhdGlvbnNCb3R0b21SaWdodCA9IHRoaXMubm90aWZpY2F0aW9uc0JvdHRvbVJpZ2h0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5maWx0ZXIoKG5vdGlmaWNhdGlvbjogRmFicmljTm90aWZpY2F0aW9uKSA9PiBub3RpZmljYXRpb24uaW5kZXggIT09IHNlbGVjdGVkTm90aWZpY2F0aW9uLmluZGV4KTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uQk9UVE9NX0xFRlQ6XG5cdFx0XHRcdHRoaXMubm90aWZpY2F0aW9uc0JvdHRvbUxlZnQgPSB0aGlzLm5vdGlmaWNhdGlvbnNCb3R0b21MZWZ0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAuZmlsdGVyKChub3RpZmljYXRpb246IEZhYnJpY05vdGlmaWNhdGlvbikgPT4gbm90aWZpY2F0aW9uLmluZGV4ICE9PSBzZWxlY3RlZE5vdGlmaWNhdGlvbi5pbmRleCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHR0aGlzLmRldGVjdENoYW5nZXMoKTtcblx0XHR0aGlzLmNoZWNrTm90aWZpY2F0aW9uc0xlbmd0aCgpO1xuXHR9XG5cblx0ZGV0ZWN0Q2hhbmdlcygpOiB2b2lkIHtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdGNoZWNrTm90aWZpY2F0aW9uc0xlbmd0aCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5ub3RpZmljYXRpb25zVG9wUmlnaHQubGVuZ3RoID09PSAwXG5cdFx0XHQmJiB0aGlzLm5vdGlmaWNhdGlvbnNUb3BMZWZ0Lmxlbmd0aCA9PT0gMFxuXHRcdFx0JiYgdGhpcy5ub3RpZmljYXRpb25zQm90dG9tUmlnaHQubGVuZ3RoID09PSAwXG5cdFx0XHQmJiB0aGlzLm5vdGlmaWNhdGlvbnNCb3R0b21MZWZ0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0dGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5jbG9zZSgpO1xuXHRcdH1cblx0fVxuXG5cdGlzQ29udGFpbmVyTm90RW1wdHkoY29udGFpbmVyOiBBcnJheTxGYWJyaWNOb3RpZmljYXRpb24+KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGNvbnRhaW5lciAmJiBjb250YWluZXIubGVuZ3RoID4gMDtcblx0fVxuXG59XG4iXX0=