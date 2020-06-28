/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, forwardRef, Inject, Renderer2, ViewEncapsulation } from '@angular/core';
import { FabricNotificationService } from './fabric-notification.service';
import { Theme } from '../../themes/theme';
import { themeToken } from '../../themes/theme.token';
import { DialogComponent } from '../common/dialog.component';
var FabricNotificationsContainerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FabricNotificationsContainerComponent, _super);
    function FabricNotificationsContainerComponent(changeDetectorRef, componentFactoryResolver, elRef, renderer, theme, notificationsService) {
        var _this = _super.call(this, elRef, renderer, theme) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.elRef = elRef;
        _this.notificationsService = notificationsService;
        _this.notifications = [];
        return _this;
    }
    /**
     * @return {?}
     */
    FabricNotificationsContainerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.addTheme();
    };
    /**
     * @param {?} index
     * @return {?}
     */
    FabricNotificationsContainerComponent.prototype.removeNotification = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.notifications = this.notifications.filter((/**
         * @param {?} notification
         * @return {?}
         */
        function (notification) { return notification.index !== index; }));
        this.changeDetectorRef.detectChanges();
        this.checkNotificationsLength();
    };
    /**
     * @return {?}
     */
    FabricNotificationsContainerComponent.prototype.checkNotificationsLength = /**
     * @return {?}
     */
    function () {
        if (this.notifications.length === 0) {
            this.notificationsService.close();
        }
    };
    FabricNotificationsContainerComponent.decorators = [
        { type: Component, args: [{
                    template: "\n\t\t<div class=\"gui-notifications-container\">\n\t\t\t<div *ngFor=\"let notification of notifications; let index=index\">\n\t\t\t\t<gui-notification [notification]=\"notification\"\n\t\t\t\t\t\t\t\t  (onNotificationClose)=\"removeNotification($event)\">\n\t\t\t\t</gui-notification>\n\t\t\t</div>\n\t\t</div>\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-notifications-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;font-family:Arial;position:fixed;max-width:400px;right:0;top:0;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;z-index:1000}.gui-notifications-container .gui-notification{background:#fff;display:block;position:relative;margin:16px;padding:32px;box-shadow:0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05);-webkit-animation:.1s forwards load;animation:.1s forwards load}@-webkit-keyframes load{0%{transform:translateX(50%)}100%{transform:translateX(0)}}@keyframes load{0%{transform:translateX(50%)}100%{transform:translateX(0)}}.gui-notifications-container .gui-notification.gui-notification-active{-webkit-animation:.2s forwards close;animation:.2s forwards close}@-webkit-keyframes close{0%{transform:translateX(0)}100%{transform:translateX(100%)}}@keyframes close{0%{transform:translateX(0)}100%{transform:translateX(100%)}}"]
                }] }
    ];
    /** @nocollapse */
    FabricNotificationsContainerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ComponentFactoryResolver },
        { type: ElementRef },
        { type: Renderer2 },
        { type: Theme, decorators: [{ type: Inject, args: [themeToken,] }] },
        { type: FabricNotificationService, decorators: [{ type: Inject, args: [forwardRef((/**
                         * @return {?}
                         */
                        function () { return FabricNotificationService; })),] }] }
    ]; };
    return FabricNotificationsContainerComponent;
}(DialogComponent));
export { FabricNotificationsContainerComponent };
if (false) {
    /** @type {?} */
    FabricNotificationsContainerComponent.prototype.notifications;
    /** @type {?} */
    FabricNotificationsContainerComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    FabricNotificationsContainerComponent.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    FabricNotificationsContainerComponent.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    FabricNotificationsContainerComponent.prototype.notificationsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbnMtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbIm1vZGFsL25vdGlmaWNhdGlvbi9mYWJyaWMtbm90aWZpY2F0aW9ucy1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULHdCQUF3QixFQUN4QixVQUFVLEVBQ1YsVUFBVSxFQUNWLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBSTdEO0lBaUIyRCxpRUFBZTtJQUd6RSwrQ0FBNEIsaUJBQW9DLEVBQzVDLHdCQUFrRCxFQUNsRCxLQUFpQixFQUNsQyxRQUFtQixFQUNDLEtBQVksRUFDc0Msb0JBQStDO1FBTHhILFlBTUMsa0JBQU0sS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsU0FDN0I7UUFQMkIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM1Qyw4QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELFdBQUssR0FBTCxLQUFLLENBQVk7UUFHb0MsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUEyQjtRQVB4SCxtQkFBYSxHQUE4QixFQUFFLENBQUM7O0lBUzlDLENBQUM7Ozs7SUFFRCwrREFBZTs7O0lBQWY7UUFDQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFFRCxrRUFBa0I7Ozs7SUFBbEIsVUFBbUIsS0FBYTtRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsWUFBZ0MsSUFBSyxPQUFBLFlBQVksQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUE1QixDQUE0QixFQUFDLENBQUM7UUFDbkgsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCx3RUFBd0I7OztJQUF4QjtRQUNDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNsQztJQUNGLENBQUM7O2dCQTNDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDZUQVFUO29CQUtELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3JDOzs7O2dCQWpDQSxpQkFBaUI7Z0JBRWpCLHdCQUF3QjtnQkFDeEIsVUFBVTtnQkFHVixTQUFTO2dCQUtELEtBQUssdUJBOEJULE1BQU0sU0FBQyxVQUFVO2dCQS9CYix5QkFBeUIsdUJBZ0M3QixNQUFNLFNBQUMsVUFBVTs7O3dCQUFDLGNBQU0sT0FBQSx5QkFBeUIsRUFBekIsQ0FBeUIsRUFBQzs7SUFvQnZELDRDQUFDO0NBQUEsQUE3Q0QsQ0FpQjJELGVBQWUsR0E0QnpFO1NBNUJZLHFDQUFxQzs7O0lBQ2pELDhEQUE4Qzs7SUFFbEMsa0VBQW9EOzs7OztJQUM3RCx5RUFBbUU7Ozs7O0lBQ25FLHNEQUFrQzs7Ozs7SUFHbEMscUVBQXFIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QWZ0ZXJWaWV3SW5pdCxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0RWxlbWVudFJlZixcblx0Zm9yd2FyZFJlZixcblx0SW5qZWN0LFxuXHRSZW5kZXJlcjIsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUnO1xuaW1wb3J0IHsgdGhlbWVUb2tlbiB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZS50b2tlbic7XG5pbXBvcnQgeyBEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb24gfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb24nO1xuXG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgY2xhc3M9XCJndWktbm90aWZpY2F0aW9ucy1jb250YWluZXJcIj5cblx0XHRcdDxkaXYgKm5nRm9yPVwibGV0IG5vdGlmaWNhdGlvbiBvZiBub3RpZmljYXRpb25zOyBsZXQgaW5kZXg9aW5kZXhcIj5cblx0XHRcdFx0PGd1aS1ub3RpZmljYXRpb24gW25vdGlmaWNhdGlvbl09XCJub3RpZmljYXRpb25cIlxuXHRcdFx0XHRcdFx0XHRcdCAgKG9uTm90aWZpY2F0aW9uQ2xvc2UpPVwicmVtb3ZlTm90aWZpY2F0aW9uKCRldmVudClcIj5cblx0XHRcdFx0PC9ndWktbm90aWZpY2F0aW9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdGAsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL2ZhYnJpYy1ub3RpZmljYXRpb24ubmd4LnNjc3MnXG5cdFx0Ly8gJy4vdGhlbWVzL2ZhYnJpYy1ub3RpZmljYXRpb25zLmRhcmsubmd4LnNjc3MnXG5cdF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY05vdGlmaWNhdGlvbnNDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblx0bm90aWZpY2F0aW9uczogQXJyYXk8RmFicmljTm90aWZpY2F0aW9uPiA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWxSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdEBJbmplY3QodGhlbWVUb2tlbikgdGhlbWU6IFRoZW1lLFxuXHRcdFx0XHRASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gRmFicmljTm90aWZpY2F0aW9uU2VydmljZSkpIHByaXZhdGUgcmVhZG9ubHkgbm90aWZpY2F0aW9uc1NlcnZpY2U6IEZhYnJpY05vdGlmaWNhdGlvblNlcnZpY2UpIHtcblx0XHRzdXBlcihlbFJlZiwgcmVuZGVyZXIsIHRoZW1lKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLmFkZFRoZW1lKCk7XG5cdH1cblxuXHRyZW1vdmVOb3RpZmljYXRpb24oaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMubm90aWZpY2F0aW9ucyA9IHRoaXMubm90aWZpY2F0aW9ucy5maWx0ZXIoKG5vdGlmaWNhdGlvbjogRmFicmljTm90aWZpY2F0aW9uKSA9PiBub3RpZmljYXRpb24uaW5kZXggIT09IGluZGV4KTtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHR0aGlzLmNoZWNrTm90aWZpY2F0aW9uc0xlbmd0aCgpO1xuXHR9XG5cblx0Y2hlY2tOb3RpZmljYXRpb25zTGVuZ3RoKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLm5vdGlmaWNhdGlvbnMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHR0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmNsb3NlKCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==