/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, forwardRef, Inject, Renderer2, ViewEncapsulation } from '@angular/core';
import { FabricNotificationService } from './fabric-notification.service';
import { Theme } from '../../themes/theme';
import { themeToken } from '../../themes/theme.token';
import { DialogComponent } from '../common/dialog.component';
export class FabricNotificationsContainerComponent extends DialogComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} componentFactoryResolver
     * @param {?} elRef
     * @param {?} renderer
     * @param {?} theme
     * @param {?} notificationsService
     */
    constructor(changeDetectorRef, componentFactoryResolver, elRef, renderer, theme, notificationsService) {
        super(elRef, renderer, theme);
        this.changeDetectorRef = changeDetectorRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.elRef = elRef;
        this.notificationsService = notificationsService;
        this.notifications = [];
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.addTheme();
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeNotification(index) {
        this.notifications = this.notifications.filter((/**
         * @param {?} notification
         * @return {?}
         */
        (notification) => notification.index !== index));
        this.changeDetectorRef.detectChanges();
        this.checkNotificationsLength();
    }
    /**
     * @return {?}
     */
    checkNotificationsLength() {
        if (this.notifications.length === 0) {
            this.notificationsService.close();
        }
    }
}
FabricNotificationsContainerComponent.decorators = [
    { type: Component, args: [{
                template: `
		<div class="gui-notifications-container">
			<div *ngFor="let notification of notifications; let index=index">
				<gui-notification [notification]="notification"
								  (onNotificationClose)="removeNotification($event)">
				</gui-notification>
			</div>
		</div>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-notifications-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;font-family:Arial;position:fixed;max-width:400px;right:0;top:0;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;z-index:1000}.gui-notifications-container .gui-notification{background:#fff;display:block;position:relative;margin:16px;padding:32px;box-shadow:0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05);-webkit-animation:.1s forwards load;animation:.1s forwards load}@-webkit-keyframes load{0%{transform:translateX(50%)}100%{transform:translateX(0)}}@keyframes load{0%{transform:translateX(50%)}100%{transform:translateX(0)}}.gui-notifications-container .gui-notification.gui-notification-active{-webkit-animation:.2s forwards close;animation:.2s forwards close}@-webkit-keyframes close{0%{transform:translateX(0)}100%{transform:translateX(100%)}}@keyframes close{0%{transform:translateX(0)}100%{transform:translateX(100%)}}"]
            }] }
];
/** @nocollapse */
FabricNotificationsContainerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ComponentFactoryResolver },
    { type: ElementRef },
    { type: Renderer2 },
    { type: Theme, decorators: [{ type: Inject, args: [themeToken,] }] },
    { type: FabricNotificationService, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => FabricNotificationService)),] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbnMtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbIm1vZGFsL25vdGlmaWNhdGlvbi9mYWJyaWMtbm90aWZpY2F0aW9ucy1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRU4sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1Qsd0JBQXdCLEVBQ3hCLFVBQVUsRUFDVixVQUFVLEVBQ1YsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFxQjdELE1BQU0sT0FBTyxxQ0FBc0MsU0FBUSxlQUFlOzs7Ozs7Ozs7SUFHekUsWUFBNEIsaUJBQW9DLEVBQzVDLHdCQUFrRCxFQUNsRCxLQUFpQixFQUNsQyxRQUFtQixFQUNDLEtBQVksRUFDc0Msb0JBQStDO1FBQ3ZILEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBTkgsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM1Qyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELFVBQUssR0FBTCxLQUFLLENBQVk7UUFHb0MseUJBQW9CLEdBQXBCLG9CQUFvQixDQUEyQjtRQVB4SCxrQkFBYSxHQUE4QixFQUFFLENBQUM7SUFTOUMsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxZQUFnQyxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBQyxDQUFDO1FBQ25ILElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsd0JBQXdCO1FBQ3ZCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNsQztJQUNGLENBQUM7OztZQTNDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFOzs7Ozs7OztFQVFUO2dCQUtELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDckM7Ozs7WUFqQ0EsaUJBQWlCO1lBRWpCLHdCQUF3QjtZQUN4QixVQUFVO1lBR1YsU0FBUztZQUtELEtBQUssdUJBOEJULE1BQU0sU0FBQyxVQUFVO1lBL0JiLHlCQUF5Qix1QkFnQzdCLE1BQU0sU0FBQyxVQUFVOzs7b0JBQUMsR0FBRyxFQUFFLENBQUMseUJBQXlCLEVBQUM7Ozs7SUFQdEQsOERBQThDOztJQUVsQyxrRUFBb0Q7Ozs7O0lBQzdELHlFQUFtRTs7Ozs7SUFDbkUsc0RBQWtDOzs7OztJQUdsQyxxRUFBcUgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBZnRlclZpZXdJbml0LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRFbGVtZW50UmVmLFxuXHRmb3J3YXJkUmVmLFxuXHRJbmplY3QsXG5cdFJlbmRlcmVyMixcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZSc7XG5pbXBvcnQgeyB0aGVtZVRva2VuIH0gZnJvbSAnLi4vLi4vdGhlbWVzL3RoZW1lLnRva2VuJztcbmltcG9ydCB7IERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvbiB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbic7XG5cblxuQENvbXBvbmVudCh7XG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBjbGFzcz1cImd1aS1ub3RpZmljYXRpb25zLWNvbnRhaW5lclwiPlxuXHRcdFx0PGRpdiAqbmdGb3I9XCJsZXQgbm90aWZpY2F0aW9uIG9mIG5vdGlmaWNhdGlvbnM7IGxldCBpbmRleD1pbmRleFwiPlxuXHRcdFx0XHQ8Z3VpLW5vdGlmaWNhdGlvbiBbbm90aWZpY2F0aW9uXT1cIm5vdGlmaWNhdGlvblwiXG5cdFx0XHRcdFx0XHRcdFx0ICAob25Ob3RpZmljYXRpb25DbG9zZSk9XCJyZW1vdmVOb3RpZmljYXRpb24oJGV2ZW50KVwiPlxuXHRcdFx0XHQ8L2d1aS1ub3RpZmljYXRpb24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YCxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vZmFicmljLW5vdGlmaWNhdGlvbi5uZ3guc2Nzcydcblx0XHQvLyAnLi90aGVtZXMvZmFicmljLW5vdGlmaWNhdGlvbnMuZGFyay5uZ3guc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljTm90aWZpY2F0aW9uc0NvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXHRub3RpZmljYXRpb25zOiBBcnJheTxGYWJyaWNOb3RpZmljYXRpb24+ID0gW107XG5cblx0Y29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0QEluamVjdCh0aGVtZVRva2VuKSB0aGVtZTogVGhlbWUsXG5cdFx0XHRcdEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBGYWJyaWNOb3RpZmljYXRpb25TZXJ2aWNlKSkgcHJpdmF0ZSByZWFkb25seSBub3RpZmljYXRpb25zU2VydmljZTogRmFicmljTm90aWZpY2F0aW9uU2VydmljZSkge1xuXHRcdHN1cGVyKGVsUmVmLCByZW5kZXJlciwgdGhlbWUpO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHRoaXMuYWRkVGhlbWUoKTtcblx0fVxuXG5cdHJlbW92ZU5vdGlmaWNhdGlvbihpbmRleDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5ub3RpZmljYXRpb25zID0gdGhpcy5ub3RpZmljYXRpb25zLmZpbHRlcigobm90aWZpY2F0aW9uOiBGYWJyaWNOb3RpZmljYXRpb24pID0+IG5vdGlmaWNhdGlvbi5pbmRleCAhPT0gaW5kZXgpO1xuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdHRoaXMuY2hlY2tOb3RpZmljYXRpb25zTGVuZ3RoKCk7XG5cdH1cblxuXHRjaGVja05vdGlmaWNhdGlvbnNMZW5ndGgoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMubm90aWZpY2F0aW9ucy5sZW5ndGggPT09IDApIHtcblx0XHRcdHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuY2xvc2UoKTtcblx0XHR9XG5cdH1cblxufVxuIl19