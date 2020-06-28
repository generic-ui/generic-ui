/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { FabricNotification } from './fabric-notification';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
        () => this.onNotificationClose.emit(this.notification.index)));
    }
    /**
     * @return {?}
     */
    addCloseAnimation() {
        /** @type {?} */
        const notificationEl = this.notificationRef.nativeElement;
        this.renderer.addClass(notificationEl, 'gui-notification-active');
    }
}
FabricNotificationComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-notification',
                template: `
		<div #guiNotification class="gui-notification">
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJtb2RhbC9ub3RpZmljYXRpb24vZmFicmljLW5vdGlmaWNhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFhM0MsTUFBTSxPQUFPLDJCQUEyQjs7OztJQVl2QyxZQUFvQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBSnZDLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFaEMsV0FBTSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFHeEMsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUVwQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO2lCQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDNUIsU0FBUzs7O1lBQ1QsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQzlCLENBQUM7U0FDSDtJQUNGLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxpQkFBaUI7UUFDaEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzVCLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFDdEUsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxpQkFBaUI7O2NBQ1YsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYTtRQUV6RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUseUJBQXlCLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7WUF0REQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7RUFLVDtnQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDL0M7Ozs7WUFsQkEsU0FBUzs7OzhCQW9CUixTQUFTLFNBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzJCQUc5QyxLQUFLO2tDQUdMLE1BQU07Ozs7SUFOUCxzREFDNEI7O0lBRTVCLG1EQUNpQzs7SUFFakMsMERBQ2lEOzs7OztJQUVqRCw2Q0FBd0M7Ozs7O0lBRTVCLCtDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdE9uRGVzdHJveSxcblx0T25Jbml0LFxuXHRPdXRwdXQsXG5cdFJlbmRlcmVyMixcblx0Vmlld0NoaWxkLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvbiB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBTdWJqZWN0LCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktbm90aWZpY2F0aW9uJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2ICNndWlOb3RpZmljYXRpb24gY2xhc3M9XCJndWktbm90aWZpY2F0aW9uXCI+XG5cdFx0XHQ8Z3VpLWNsb3NlLWljb24gKGNsaWNrKT1cImNsb3NlTm90aWZpY2F0aW9uKClcIj48L2d1aS1jbG9zZS1pY29uPlxuXHRcdFx0e3tub3RpZmljYXRpb24uZGVzY3JpcHRpb259fVxuXHRcdDwvZGl2PlxuXHRgLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNOb3RpZmljYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cdEBWaWV3Q2hpbGQoJ2d1aU5vdGlmaWNhdGlvbicsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRub3RpZmljYXRpb25SZWY6IEVsZW1lbnRSZWY7XG5cblx0QElucHV0KClcblx0bm90aWZpY2F0aW9uOiBGYWJyaWNOb3RpZmljYXRpb247XG5cblx0QE91dHB1dCgpXG5cdG9uTm90aWZpY2F0aW9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHVuc3ViJCA9IG5ldyBTdWJqZWN0KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRpZiAodGhpcy5ub3RpZmljYXRpb24udGltZXIuZW5hYmxlZCkge1xuXG5cdFx0XHR0aW1lcih0aGlzLm5vdGlmaWNhdGlvbi50aW1lci5kdXJhdGlvbilcblx0XHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWIkKSlcblx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0XHQoKSA9PiB0aGlzLmNsb3NlTm90aWZpY2F0aW9uKClcblx0XHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVuc3ViJC5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YiQuY29tcGxldGUoKTtcblx0fVxuXG5cdGNsb3NlTm90aWZpY2F0aW9uKCk6IHZvaWQge1xuXHRcdHRoaXMuYWRkQ2xvc2VBbmltYXRpb24oKTtcblx0XHR0aW1lcigyMDApXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YiQpKVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uTm90aWZpY2F0aW9uQ2xvc2UuZW1pdCh0aGlzLm5vdGlmaWNhdGlvbi5pbmRleClcblx0XHRcdCk7XG5cdH1cblxuXHRhZGRDbG9zZUFuaW1hdGlvbigpOiB2b2lkIHtcblx0XHRjb25zdCBub3RpZmljYXRpb25FbCA9IHRoaXMubm90aWZpY2F0aW9uUmVmLm5hdGl2ZUVsZW1lbnQ7XG5cblx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKG5vdGlmaWNhdGlvbkVsLCAnZ3VpLW5vdGlmaWNhdGlvbi1hY3RpdmUnKTtcblx0fVxufVxuIl19