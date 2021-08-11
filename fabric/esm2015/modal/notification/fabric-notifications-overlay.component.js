/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, forwardRef, Inject, Renderer2, ViewEncapsulation } from '@angular/core';
import { FabricNotificationService } from './fabric-notification.service';
import { Theme } from '../../themes/theme';
import { themeToken } from '../../themes/theme.token';
import { FabricNotificationPosition } from './fabric-notification-position';
import { FabricThemedComponent } from '../../common/modal/fabric-themed-component';
import { FabricModalThemeService } from '../../themes/fabric-modal-theme.service';
export class FabricNotificationsOverlayComponent extends FabricThemedComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} componentFactoryResolver
     * @param {?} elRef
     * @param {?} renderer
     * @param {?} themeService
     * @param {?} theme
     * @param {?} notificationsService
     */
    constructor(changeDetectorRef, componentFactoryResolver, elRef, renderer, themeService, theme, notificationsService) {
        super(elRef, renderer, themeService);
        this.changeDetectorRef = changeDetectorRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.elRef = elRef;
        this.notificationsService = notificationsService;
        this.notificationsTopRight = [];
        this.notificationsTopLeft = [];
        this.notificationsBottomRight = [];
        this.notificationsBottomLeft = [];
        this.FabricNotificationPosition = FabricNotificationPosition;
    }
    /**
     * @param {?} selectedNotification
     * @return {?}
     */
    removeNotification(selectedNotification) {
        switch (selectedNotification.position) {
            case FabricNotificationPosition.TOP_RIGHT:
                this.notificationsTopRight = this.notificationsTopRight
                    .filter((/**
                 * @param {?} notification
                 * @return {?}
                 */
                (notification) => notification.index !== selectedNotification.index));
                break;
            case FabricNotificationPosition.TOP_LEFT:
                this.notificationsTopLeft = this.notificationsTopLeft
                    .filter((/**
                 * @param {?} notification
                 * @return {?}
                 */
                (notification) => notification.index !== selectedNotification.index));
                break;
            case FabricNotificationPosition.BOTTOM_RIGHT:
                this.notificationsBottomRight = this.notificationsBottomRight
                    .filter((/**
                 * @param {?} notification
                 * @return {?}
                 */
                (notification) => notification.index !== selectedNotification.index));
                break;
            case FabricNotificationPosition.BOTTOM_LEFT:
                this.notificationsBottomLeft = this.notificationsBottomLeft
                    .filter((/**
                 * @param {?} notification
                 * @return {?}
                 */
                (notification) => notification.index !== selectedNotification.index));
                break;
        }
        this.detectChanges();
        this.checkNotificationsLength();
    }
    /**
     * @return {?}
     */
    detectChanges() {
        this.changeDetectorRef.detectChanges();
    }
    /**
     * @return {?}
     */
    checkNotificationsLength() {
        if (this.notificationsTopRight.length === 0
            && this.notificationsTopLeft.length === 0
            && this.notificationsBottomRight.length === 0
            && this.notificationsBottomLeft.length === 0) {
            this.notificationsService.close();
        }
    }
    /**
     * @param {?} container
     * @return {?}
     */
    isContainerNotEmpty(container) {
        return container && container.length > 0;
    }
}
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
FabricNotificationsOverlayComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ComponentFactoryResolver },
    { type: ElementRef },
    { type: Renderer2 },
    { type: FabricModalThemeService },
    { type: Theme, decorators: [{ type: Inject, args: [themeToken,] }] },
    { type: FabricNotificationService, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => FabricNotificationService)),] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbnMtb3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJtb2RhbC9ub3RpZmljYXRpb24vZmFicmljLW5vdGlmaWNhdGlvbnMtb3ZlcmxheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCx3QkFBd0IsRUFDeEIsVUFBVSxFQUNWLFVBQVUsRUFDVixNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXRELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBZ0JsRixNQUFNLE9BQU8sbUNBQW9DLFNBQVEscUJBQXFCOzs7Ozs7Ozs7O0lBWTdFLFlBQTZCLGlCQUFvQyxFQUM3Qyx3QkFBa0QsRUFDbEQsS0FBaUIsRUFDbEMsUUFBbUIsRUFDbkIsWUFBcUMsRUFDakIsS0FBWSxFQUNzQyxvQkFBK0M7UUFDdkgsS0FBSyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFQVCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUlvQyx5QkFBb0IsR0FBcEIs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eUQ7O0lBRXpELHNFQUF3RDs7SUFFeEQseUVBQXdEOzs7OztJQUU1QyxnRUFBcUQ7Ozs7O0lBQzlELHVFQUFtRTs7Ozs7SUFDbkUsb0RBQWtDOzs7OztJQUlsQyxtRUFBcUgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRFbGVtZW50UmVmLFxuXHRmb3J3YXJkUmVmLFxuXHRJbmplY3QsXG5cdFJlbmRlcmVyMixcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZSc7XG5pbXBvcnQgeyB0aGVtZVRva2VuIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lLnRva2VuJztcbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvbiB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbiB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbi1wb3NpdGlvbic7XG5pbXBvcnQgeyBGYWJyaWNUaGVtZWRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21tb24vbW9kYWwvZmFicmljLXRoZW1lZC1jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljTW9kYWxUaGVtZVNlcnZpY2UgfSBmcm9tICcuLi8uLi90aGVtZXMvZmFicmljLW1vZGFsLXRoZW1lLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZVVybDogJ2ZhYnJpYy1ub3RpZmljYXRpb25zLW92ZXJsYXkuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9mYWJyaWMtbm90aWZpY2F0aW9uLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvZmFicmljLW5vdGlmaWNhdGlvbi5kYXJrLm5neC5zY3NzJyxcblx0XHQnLi90aGVtZXMvZmFicmljLW5vdGlmaWNhdGlvbi5tYXRlcmlhbC5uZ3guc2Nzcydcblx0XSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLW5vdGlmaWNhdGlvbnMtb3ZlcmxheV0nOiAndHJ1ZSdcblx0fSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljTm90aWZpY2F0aW9uc092ZXJsYXlDb21wb25lbnQgZXh0ZW5kcyBGYWJyaWNUaGVtZWRDb21wb25lbnQge1xuXG5cdG5vdGlmaWNhdGlvbnNUb3BSaWdodDogQXJyYXk8RmFicmljTm90aWZpY2F0aW9uPiA9IFtdO1xuXG5cdG5vdGlmaWNhdGlvbnNUb3BMZWZ0OiBBcnJheTxGYWJyaWNOb3RpZmljYXRpb24+ID0gW107XG5cblx0bm90aWZpY2F0aW9uc0JvdHRvbVJpZ2h0OiBBcnJheTxGYWJyaWNOb3RpZmljYXRpb24+ID0gW107XG5cblx0bm90aWZpY2F0aW9uc0JvdHRvbUxlZnQ6IEFycmF5PEZhYnJpY05vdGlmaWNhdGlvbj4gPSBbXTtcblxuXHRGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbiA9IEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsUmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRyZW5kZXJlcjogUmVuZGVyZXIyLFxuXHRcdFx0XHR0aGVtZVNlcnZpY2U6IEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlLFxuXHRcdFx0XHRASW5qZWN0KHRoZW1lVG9rZW4pIHRoZW1lOiBUaGVtZSxcblx0XHRcdFx0QEluamVjdChmb3J3YXJkUmVmKCgpID0+IEZhYnJpY05vdGlmaWNhdGlvblNlcnZpY2UpKSBwcml2YXRlIHJlYWRvbmx5IG5vdGlmaWNhdGlvbnNTZXJ2aWNlOiBGYWJyaWNOb3RpZmljYXRpb25TZXJ2aWNlKSB7XG5cdFx0c3VwZXIoZWxSZWYsIHJlbmRlcmVyLCB0aGVtZVNlcnZpY2UpO1xuXHR9XG5cblx0cmVtb3ZlTm90aWZpY2F0aW9uKHNlbGVjdGVkTm90aWZpY2F0aW9uOiBGYWJyaWNOb3RpZmljYXRpb24pOiB2b2lkIHtcblxuXHRcdHN3aXRjaCAoc2VsZWN0ZWROb3RpZmljYXRpb24ucG9zaXRpb24pIHtcblx0XHRcdGNhc2UgRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uVE9QX1JJR0hUOlxuXHRcdFx0XHR0aGlzLm5vdGlmaWNhdGlvbnNUb3BSaWdodCA9IHRoaXMubm90aWZpY2F0aW9uc1RvcFJpZ2h0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgLmZpbHRlcigobm90aWZpY2F0aW9uOiBGYWJyaWNOb3RpZmljYXRpb24pID0+IG5vdGlmaWNhdGlvbi5pbmRleCAhPT0gc2VsZWN0ZWROb3RpZmljYXRpb24uaW5kZXgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbi5UT1BfTEVGVDpcblx0XHRcdFx0dGhpcy5ub3RpZmljYXRpb25zVG9wTGVmdCA9IHRoaXMubm90aWZpY2F0aW9uc1RvcExlZnRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5maWx0ZXIoKG5vdGlmaWNhdGlvbjogRmFicmljTm90aWZpY2F0aW9uKSA9PiBub3RpZmljYXRpb24uaW5kZXggIT09IHNlbGVjdGVkTm90aWZpY2F0aW9uLmluZGV4KTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uQk9UVE9NX1JJR0hUOlxuXHRcdFx0XHR0aGlzLm5vdGlmaWNhdGlvbnNCb3R0b21SaWdodCA9IHRoaXMubm90aWZpY2F0aW9uc0JvdHRvbVJpZ2h0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5maWx0ZXIoKG5vdGlmaWNhdGlvbjogRmFicmljTm90aWZpY2F0aW9uKSA9PiBub3RpZmljYXRpb24uaW5kZXggIT09IHNlbGVjdGVkTm90aWZpY2F0aW9uLmluZGV4KTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uQk9UVE9NX0xFRlQ6XG5cdFx0XHRcdHRoaXMubm90aWZpY2F0aW9uc0JvdHRvbUxlZnQgPSB0aGlzLm5vdGlmaWNhdGlvbnNCb3R0b21MZWZ0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAuZmlsdGVyKChub3RpZmljYXRpb246IEZhYnJpY05vdGlmaWNhdGlvbikgPT4gbm90aWZpY2F0aW9uLmluZGV4ICE9PSBzZWxlY3RlZE5vdGlmaWNhdGlvbi5pbmRleCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHR0aGlzLmRldGVjdENoYW5nZXMoKTtcblx0XHR0aGlzLmNoZWNrTm90aWZpY2F0aW9uc0xlbmd0aCgpO1xuXHR9XG5cblx0ZGV0ZWN0Q2hhbmdlcygpOiB2b2lkIHtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdGNoZWNrTm90aWZpY2F0aW9uc0xlbmd0aCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5ub3RpZmljYXRpb25zVG9wUmlnaHQubGVuZ3RoID09PSAwXG5cdFx0XHQmJiB0aGlzLm5vdGlmaWNhdGlvbnNUb3BMZWZ0Lmxlbmd0aCA9PT0gMFxuXHRcdFx0JiYgdGhpcy5ub3RpZmljYXRpb25zQm90dG9tUmlnaHQubGVuZ3RoID09PSAwXG5cdFx0XHQmJiB0aGlzLm5vdGlmaWNhdGlvbnNCb3R0b21MZWZ0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0dGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5jbG9zZSgpO1xuXHRcdH1cblx0fVxuXG5cdGlzQ29udGFpbmVyTm90RW1wdHkoY29udGFpbmVyOiBBcnJheTxGYWJyaWNOb3RpZmljYXRpb24+KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGNvbnRhaW5lciAmJiBjb250YWluZXIubGVuZ3RoID4gMDtcblx0fVxuXG59XG4iXX0=