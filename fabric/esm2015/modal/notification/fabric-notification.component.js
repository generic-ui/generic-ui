/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { FabricNotification } from './fabric-notification';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FabricNotificationPosition } from './fabric-notification-position';
export class FabricNotificationComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.onNotificationClose = new EventEmitter();
        this.unsub$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.notification.timer.enabled) {
            timer(this.notification.timer.duration)
                .pipe(takeUntil(this.unsub$))
                .subscribe((/**
             * @return {?}
             */
            () => this.closeNotification()));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsub$.next();
        this.unsub$.complete();
    }
    /**
     * @return {?}
     */
    closeNotification() {
        this.addCloseAnimation();
        timer(200)
            .pipe(takeUntil(this.unsub$))
            .subscribe((/**
         * @return {?}
         */
        () => this.onNotificationClose.emit(this.notification)));
    }
    /**
     * @return {?}
     */
    addCloseAnimation() {
        /** @type {?} */
        const notificationEl = this.notificationRef.nativeElement;
        this.renderer.addClass(notificationEl, 'gui-notification-active');
    }
    /**
     * @return {?}
     */
    isRightSide() {
        return this.notification.position === FabricNotificationPosition.TOP_RIGHT
            || this.notification.position === FabricNotificationPosition.BOTTOM_RIGHT;
    }
}
FabricNotificationComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-notification',
                template: `
		<div #guiNotification
			 [class.gui-notification-right-side]="isRightSide()"
			 [class.gui-notification-left-side]="!isRightSide()"
			 class="gui-notification">
			<gui-close-icon (click)="closeNotification()"></gui-close-icon>
			{{notification.description}}
		</div>
	`,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
FabricNotificationComponent.ctorParameters = () => [
    { type: Renderer2 }
];
FabricNotificationComponent.propDecorators = {
    notificationRef: [{ type: ViewChild, args: ['guiNotification', { static: false },] }],
    notification: [{ type: Input }],
    onNotificationClose: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FabricNotificationComponent.prototype.notificationRef;
    /** @type {?} */
    FabricNotificationComponent.prototype.notification;
    /** @type {?} */
    FabricNotificationComponent.prototype.onNotificationClose;
    /**
     * @type {?}
     * @private
     */
    FabricNotificationComponent.prototype.unsub$;
    /**
     * @type {?}
     * @private
     */
    FabricNotificationComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJtb2RhbC9ub3RpZmljYXRpb24vZmFicmljLW5vdGlmaWNhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFnQjVFLE1BQU0sT0FBTywyQkFBMkI7Ozs7SUFZdkMsWUFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUp2Qyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBc0IsQ0FBQztRQUU1QyxXQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUd4QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1lBRXBDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7aUJBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUM1QixTQUFTOzs7WUFDVCxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFDOUIsQ0FBQztTQUNIO0lBQ0YsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNoQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ1IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDNUIsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQ2hFLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsaUJBQWlCOztjQUNWLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWE7UUFFekQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLHlCQUF5QixDQUFDLENBQUM7SUFDbkUsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxLQUFLLDBCQUEwQixDQUFDLFNBQVM7ZUFDdEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEtBQUssMEJBQTBCLENBQUMsWUFBWSxDQUFDO0lBQzVFLENBQUM7OztZQTlERCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOzs7Ozs7OztFQVFUO2dCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMvQzs7OztZQXRCQSxTQUFTOzs7OEJBd0JSLFNBQVMsU0FBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7MkJBRzlDLEtBQUs7a0NBR0wsTUFBTTs7OztJQU5QLHNEQUM0Qjs7SUFFNUIsbURBQ2lDOztJQUVqQywwREFDNkQ7Ozs7O0lBRTdELDZDQUF3Qzs7Ozs7SUFFNUIsK0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0RXZlbnRFbWl0dGVyLFxuXHRJbnB1dCxcblx0T25EZXN0cm95LFxuXHRPbkluaXQsXG5cdE91dHB1dCxcblx0UmVuZGVyZXIyLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmFicmljTm90aWZpY2F0aW9uIH0gZnJvbSAnLi9mYWJyaWMtbm90aWZpY2F0aW9uJztcbmltcG9ydCB7IFN1YmplY3QsIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbiB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbi1wb3NpdGlvbic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1ub3RpZmljYXRpb24nLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgI2d1aU5vdGlmaWNhdGlvblxuXHRcdFx0IFtjbGFzcy5ndWktbm90aWZpY2F0aW9uLXJpZ2h0LXNpZGVdPVwiaXNSaWdodFNpZGUoKVwiXG5cdFx0XHQgW2NsYXNzLmd1aS1ub3RpZmljYXRpb24tbGVmdC1zaWRlXT1cIiFpc1JpZ2h0U2lkZSgpXCJcblx0XHRcdCBjbGFzcz1cImd1aS1ub3RpZmljYXRpb25cIj5cblx0XHRcdDxndWktY2xvc2UtaWNvbiAoY2xpY2spPVwiY2xvc2VOb3RpZmljYXRpb24oKVwiPjwvZ3VpLWNsb3NlLWljb24+XG5cdFx0XHR7e25vdGlmaWNhdGlvbi5kZXNjcmlwdGlvbn19XG5cdFx0PC9kaXY+XG5cdGAsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY05vdGlmaWNhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblx0QFZpZXdDaGlsZCgnZ3VpTm90aWZpY2F0aW9uJywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdG5vdGlmaWNhdGlvblJlZjogRWxlbWVudFJlZjtcblxuXHRASW5wdXQoKVxuXHRub3RpZmljYXRpb246IEZhYnJpY05vdGlmaWNhdGlvbjtcblxuXHRAT3V0cHV0KClcblx0b25Ob3RpZmljYXRpb25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8RmFicmljTm90aWZpY2F0aW9uPigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdW5zdWIkID0gbmV3IFN1YmplY3QoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdGlmICh0aGlzLm5vdGlmaWNhdGlvbi50aW1lci5lbmFibGVkKSB7XG5cblx0XHRcdHRpbWVyKHRoaXMubm90aWZpY2F0aW9uLnRpbWVyLmR1cmF0aW9uKVxuXHRcdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YiQpKVxuXHRcdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRcdCgpID0+IHRoaXMuY2xvc2VOb3RpZmljYXRpb24oKVxuXHRcdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMudW5zdWIkLm5leHQoKTtcblx0XHR0aGlzLnVuc3ViJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0Y2xvc2VOb3RpZmljYXRpb24oKTogdm9pZCB7XG5cdFx0dGhpcy5hZGRDbG9zZUFuaW1hdGlvbigpO1xuXHRcdHRpbWVyKDIwMClcblx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3ViJCkpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHRoaXMub25Ob3RpZmljYXRpb25DbG9zZS5lbWl0KHRoaXMubm90aWZpY2F0aW9uKVxuXHRcdFx0KTtcblx0fVxuXG5cdGFkZENsb3NlQW5pbWF0aW9uKCk6IHZvaWQge1xuXHRcdGNvbnN0IG5vdGlmaWNhdGlvbkVsID0gdGhpcy5ub3RpZmljYXRpb25SZWYubmF0aXZlRWxlbWVudDtcblxuXHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3Mobm90aWZpY2F0aW9uRWwsICdndWktbm90aWZpY2F0aW9uLWFjdGl2ZScpO1xuXHR9XG5cblx0aXNSaWdodFNpZGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubm90aWZpY2F0aW9uLnBvc2l0aW9uID09PSBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbi5UT1BfUklHSFRcblx0XHRcdHx8IHRoaXMubm90aWZpY2F0aW9uLnBvc2l0aW9uID09PSBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbi5CT1RUT01fUklHSFQ7XG5cdH1cbn1cbiJdfQ==