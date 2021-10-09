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
            default:
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbnMtb3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJtb2RhbC9ub3RpZmljYXRpb24vZmFicmljLW5vdGlmaWNhdGlvbnMtb3ZlcmxheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1Qsd0JBQXdCLEVBQ3hCLFVBQVUsRUFDVixVQUFVLEVBQ1YsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUdsRjtJQWF5RCwrREFBcUI7SUFZN0UsNkNBQTZCLGlCQUFvQyxFQUM3Qyx3QkFBa0QsRUFDbEQsS0FBaUIsRUFDbEMsUUFBbUIsRUFDbkIsWUFBcUMsRUFDakIsS0FBWSxFQUNzQyxvQkFBK0M7UUFOeEgsWUFPQyxrQkFBTSxLQUFLLEVBQUUsUUFBUSxFQUFFLFlBQVksQ0FBQyxTQUNwQztRQVI0Qix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUlvQywwQkFBb0IsR0FBcEIsb0JBQW9CLENBQTJCO1FBaEJ4SCwy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QU0sT0FBQSx5QkFBeUIsRUFBekIsQ0FBeUIsRUFBQzs7SUFtRHZELDBDQUFDO0NBQUEsQUFsRkQsQ0FheUQscUJBQXFCLEdBcUU3RTtTQXJFWSxtQ0FBbUM7OztJQUUvQyxvRUFBc0Q7O0lBRXRELG1FQUFxRDs7SUFFckQsdUVBQXlEOztJQUV6RCxzRUFBd0Q7O0lBRXhELHlFQUF3RDs7Ozs7SUFFNUMsZ0VBQXFEOzs7OztJQUM5RCx1RUFBbUU7Ozs7O0lBQ25FLG9EQUFrQzs7Ozs7SUFJbEMsbUVBQXFIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0RWxlbWVudFJlZixcblx0Zm9yd2FyZFJlZixcblx0SW5qZWN0LFxuXHRSZW5kZXJlcjIsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUnO1xuaW1wb3J0IHsgdGhlbWVUb2tlbiB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZS50b2tlbic7XG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb24gfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24gfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb24tcG9zaXRpb24nO1xuaW1wb3J0IHsgRmFicmljVGhlbWVkQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tbW9uL21vZGFsL2ZhYnJpYy10aGVtZWQtY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdGhlbWVzL2ZhYnJpYy1tb2RhbC10aGVtZS5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGVVcmw6ICdmYWJyaWMtbm90aWZpY2F0aW9ucy1vdmVybGF5LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vZmFicmljLW5vdGlmaWNhdGlvbi5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL2ZhYnJpYy1ub3RpZmljYXRpb24uZGFyay5uZ3guc2NzcycsXG5cdFx0Jy4vdGhlbWVzL2ZhYnJpYy1ub3RpZmljYXRpb24ubWF0ZXJpYWwubmd4LnNjc3MnXG5cdF0sXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1ub3RpZmljYXRpb25zLW92ZXJsYXldJzogJ3RydWUnXG5cdH0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY05vdGlmaWNhdGlvbnNPdmVybGF5Q29tcG9uZW50IGV4dGVuZHMgRmFicmljVGhlbWVkQ29tcG9uZW50IHtcblxuXHRub3RpZmljYXRpb25zVG9wUmlnaHQ6IEFycmF5PEZhYnJpY05vdGlmaWNhdGlvbj4gPSBbXTtcblxuXHRub3RpZmljYXRpb25zVG9wTGVmdDogQXJyYXk8RmFicmljTm90aWZpY2F0aW9uPiA9IFtdO1xuXG5cdG5vdGlmaWNhdGlvbnNCb3R0b21SaWdodDogQXJyYXk8RmFicmljTm90aWZpY2F0aW9uPiA9IFtdO1xuXG5cdG5vdGlmaWNhdGlvbnNCb3R0b21MZWZ0OiBBcnJheTxGYWJyaWNOb3RpZmljYXRpb24+ID0gW107XG5cblx0RmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24gPSBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0dGhlbWVTZXJ2aWNlOiBGYWJyaWNNb2RhbFRoZW1lU2VydmljZSxcblx0XHRcdFx0QEluamVjdCh0aGVtZVRva2VuKSB0aGVtZTogVGhlbWUsXG5cdFx0XHRcdEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBGYWJyaWNOb3RpZmljYXRpb25TZXJ2aWNlKSkgcHJpdmF0ZSByZWFkb25seSBub3RpZmljYXRpb25zU2VydmljZTogRmFicmljTm90aWZpY2F0aW9uU2VydmljZSkge1xuXHRcdHN1cGVyKGVsUmVmLCByZW5kZXJlciwgdGhlbWVTZXJ2aWNlKTtcblx0fVxuXG5cdHJlbW92ZU5vdGlmaWNhdGlvbihzZWxlY3RlZE5vdGlmaWNhdGlvbjogRmFicmljTm90aWZpY2F0aW9uKTogdm9pZCB7XG5cblx0XHRzd2l0Y2ggKHNlbGVjdGVkTm90aWZpY2F0aW9uLnBvc2l0aW9uKSB7XG5cdFx0XHRjYXNlIEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uLlRPUF9SSUdIVDpcblx0XHRcdFx0dGhpcy5ub3RpZmljYXRpb25zVG9wUmlnaHQgPSB0aGlzLm5vdGlmaWNhdGlvbnNUb3BSaWdodFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IC5maWx0ZXIoKG5vdGlmaWNhdGlvbjogRmFicmljTm90aWZpY2F0aW9uKSA9PiBub3RpZmljYXRpb24uaW5kZXggIT09IHNlbGVjdGVkTm90aWZpY2F0aW9uLmluZGV4KTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uVE9QX0xFRlQ6XG5cdFx0XHRcdHRoaXMubm90aWZpY2F0aW9uc1RvcExlZnQgPSB0aGlzLm5vdGlmaWNhdGlvbnNUb3BMZWZ0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuZmlsdGVyKChub3RpZmljYXRpb246IEZhYnJpY05vdGlmaWNhdGlvbikgPT4gbm90aWZpY2F0aW9uLmluZGV4ICE9PSBzZWxlY3RlZE5vdGlmaWNhdGlvbi5pbmRleCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uLkJPVFRPTV9SSUdIVDpcblx0XHRcdFx0dGhpcy5ub3RpZmljYXRpb25zQm90dG9tUmlnaHQgPSB0aGlzLm5vdGlmaWNhdGlvbnNCb3R0b21SaWdodFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuZmlsdGVyKChub3RpZmljYXRpb246IEZhYnJpY05vdGlmaWNhdGlvbikgPT4gbm90aWZpY2F0aW9uLmluZGV4ICE9PSBzZWxlY3RlZE5vdGlmaWNhdGlvbi5pbmRleCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uLkJPVFRPTV9MRUZUOlxuXHRcdFx0XHR0aGlzLm5vdGlmaWNhdGlvbnNCb3R0b21MZWZ0ID0gdGhpcy5ub3RpZmljYXRpb25zQm90dG9tTGVmdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgLmZpbHRlcigobm90aWZpY2F0aW9uOiBGYWJyaWNOb3RpZmljYXRpb24pID0+IG5vdGlmaWNhdGlvbi5pbmRleCAhPT0gc2VsZWN0ZWROb3RpZmljYXRpb24uaW5kZXgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdHRoaXMuY2hlY2tOb3RpZmljYXRpb25zTGVuZ3RoKCk7XG5cdH1cblxuXHRkZXRlY3RDaGFuZ2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0Y2hlY2tOb3RpZmljYXRpb25zTGVuZ3RoKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLm5vdGlmaWNhdGlvbnNUb3BSaWdodC5sZW5ndGggPT09IDBcblx0XHRcdCYmIHRoaXMubm90aWZpY2F0aW9uc1RvcExlZnQubGVuZ3RoID09PSAwXG5cdFx0XHQmJiB0aGlzLm5vdGlmaWNhdGlvbnNCb3R0b21SaWdodC5sZW5ndGggPT09IDBcblx0XHRcdCYmIHRoaXMubm90aWZpY2F0aW9uc0JvdHRvbUxlZnQubGVuZ3RoID09PSAwKSB7XG5cdFx0XHR0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmNsb3NlKCk7XG5cdFx0fVxuXHR9XG5cblx0aXNDb250YWluZXJOb3RFbXB0eShjb250YWluZXI6IEFycmF5PEZhYnJpY05vdGlmaWNhdGlvbj4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gY29udGFpbmVyICYmIGNvbnRhaW5lci5sZW5ndGggPiAwO1xuXHR9XG5cbn1cbiJdfQ==