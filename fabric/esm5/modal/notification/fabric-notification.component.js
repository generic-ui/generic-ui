/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { FabricNotification } from './fabric-notification';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FabricNotificationPosition } from './fabric-notification-position';
var FabricNotificationComponent = /** @class */ (function () {
    function FabricNotificationComponent(renderer) {
        this.renderer = renderer;
        this.onNotificationClose = new EventEmitter();
        this.unsub$ = new Subject();
    }
    /**
     * @return {?}
     */
    FabricNotificationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.notification.timer.enabled) {
            timer(this.notification.timer.duration)
                .pipe(takeUntil(this.unsub$))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.closeNotification(); }));
        }
    };
    /**
     * @return {?}
     */
    FabricNotificationComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsub$.next();
        this.unsub$.complete();
    };
    /**
     * @return {?}
     */
    FabricNotificationComponent.prototype.closeNotification = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.addCloseAnimation();
        timer(200)
            .pipe(takeUntil(this.unsub$))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.onNotificationClose.emit(_this.notification); }));
    };
    /**
     * @return {?}
     */
    FabricNotificationComponent.prototype.addCloseAnimation = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var notificationEl = this.notificationRef.nativeElement;
        this.renderer.addClass(notificationEl, 'gui-notification-active');
    };
    /**
     * @return {?}
     */
    FabricNotificationComponent.prototype.isRightSide = /**
     * @return {?}
     */
    function () {
        return this.notification.position === FabricNotificationPosition.TOP_RIGHT
            || this.notification.position === FabricNotificationPosition.BOTTOM_RIGHT;
    };
    FabricNotificationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-notification',
                    template: "\n\t\t<div #guiNotification\n\t\t\t [class.gui-notification-right-side]=\"isRightSide()\"\n\t\t\t [class.gui-notification-left-side]=\"!isRightSide()\"\n\t\t\t class=\"gui-notification\">\n\t\t\t<gui-close-icon (click)=\"closeNotification()\"></gui-close-icon>\n\t\t\t{{notification.description}}\n\t\t</div>\n\t",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    FabricNotificationComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    FabricNotificationComponent.propDecorators = {
        notificationRef: [{ type: ViewChild, args: ['guiNotification', { static: false },] }],
        notification: [{ type: Input }],
        onNotificationClose: [{ type: Output }]
    };
    return FabricNotificationComponent;
}());
export { FabricNotificationComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJtb2RhbC9ub3RpZmljYXRpb24vZmFicmljLW5vdGlmaWNhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFNUU7SUEwQkMscUNBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFKdkMsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQXNCLENBQUM7UUFFNUMsV0FBTSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFHeEMsQ0FBQzs7OztJQUVELDhDQUFROzs7SUFBUjtRQUFBLGlCQVNDO1FBUkEsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFFcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztpQkFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzVCLFNBQVM7OztZQUNULGNBQU0sT0FBQSxLQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBeEIsQ0FBd0IsRUFDOUIsQ0FBQztTQUNIO0lBQ0YsQ0FBQzs7OztJQUVELGlEQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsdURBQWlCOzs7SUFBakI7UUFBQSxpQkFNQztRQUxBLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDUixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM1QixTQUFTOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLEVBQWhELENBQWdELEVBQ2hFLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsdURBQWlCOzs7SUFBakI7O1lBQ08sY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYTtRQUV6RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUseUJBQXlCLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7O0lBRUQsaURBQVc7OztJQUFYO1FBQ0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsS0FBSywwQkFBMEIsQ0FBQyxTQUFTO2VBQ3RFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxLQUFLLDBCQUEwQixDQUFDLFlBQVksQ0FBQztJQUM1RSxDQUFDOztnQkE5REQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSwwVEFRVDtvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQy9DOzs7O2dCQXRCQSxTQUFTOzs7a0NBd0JSLFNBQVMsU0FBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7K0JBRzlDLEtBQUs7c0NBR0wsTUFBTTs7SUEwQ1Isa0NBQUM7Q0FBQSxBQS9ERCxJQStEQztTQWpEWSwyQkFBMkI7OztJQUN2QyxzREFDNEI7O0lBRTVCLG1EQUNpQzs7SUFFakMsMERBQzZEOzs7OztJQUU3RCw2Q0FBd0M7Ozs7O0lBRTVCLCtDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdE9uRGVzdHJveSxcblx0T25Jbml0LFxuXHRPdXRwdXQsXG5cdFJlbmRlcmVyMixcblx0Vmlld0NoaWxkLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvbiB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBTdWJqZWN0LCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24gfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb24tcG9zaXRpb24nO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktbm90aWZpY2F0aW9uJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2ICNndWlOb3RpZmljYXRpb25cblx0XHRcdCBbY2xhc3MuZ3VpLW5vdGlmaWNhdGlvbi1yaWdodC1zaWRlXT1cImlzUmlnaHRTaWRlKClcIlxuXHRcdFx0IFtjbGFzcy5ndWktbm90aWZpY2F0aW9uLWxlZnQtc2lkZV09XCIhaXNSaWdodFNpZGUoKVwiXG5cdFx0XHQgY2xhc3M9XCJndWktbm90aWZpY2F0aW9uXCI+XG5cdFx0XHQ8Z3VpLWNsb3NlLWljb24gKGNsaWNrKT1cImNsb3NlTm90aWZpY2F0aW9uKClcIj48L2d1aS1jbG9zZS1pY29uPlxuXHRcdFx0e3tub3RpZmljYXRpb24uZGVzY3JpcHRpb259fVxuXHRcdDwvZGl2PlxuXHRgLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNOb3RpZmljYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cdEBWaWV3Q2hpbGQoJ2d1aU5vdGlmaWNhdGlvbicsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRub3RpZmljYXRpb25SZWY6IEVsZW1lbnRSZWY7XG5cblx0QElucHV0KClcblx0bm90aWZpY2F0aW9uOiBGYWJyaWNOb3RpZmljYXRpb247XG5cblx0QE91dHB1dCgpXG5cdG9uTm90aWZpY2F0aW9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPEZhYnJpY05vdGlmaWNhdGlvbj4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHVuc3ViJCA9IG5ldyBTdWJqZWN0KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRpZiAodGhpcy5ub3RpZmljYXRpb24udGltZXIuZW5hYmxlZCkge1xuXG5cdFx0XHR0aW1lcih0aGlzLm5vdGlmaWNhdGlvbi50aW1lci5kdXJhdGlvbilcblx0XHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWIkKSlcblx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0XHQoKSA9PiB0aGlzLmNsb3NlTm90aWZpY2F0aW9uKClcblx0XHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVuc3ViJC5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YiQuY29tcGxldGUoKTtcblx0fVxuXG5cdGNsb3NlTm90aWZpY2F0aW9uKCk6IHZvaWQge1xuXHRcdHRoaXMuYWRkQ2xvc2VBbmltYXRpb24oKTtcblx0XHR0aW1lcigyMDApXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YiQpKVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uTm90aWZpY2F0aW9uQ2xvc2UuZW1pdCh0aGlzLm5vdGlmaWNhdGlvbilcblx0XHRcdCk7XG5cdH1cblxuXHRhZGRDbG9zZUFuaW1hdGlvbigpOiB2b2lkIHtcblx0XHRjb25zdCBub3RpZmljYXRpb25FbCA9IHRoaXMubm90aWZpY2F0aW9uUmVmLm5hdGl2ZUVsZW1lbnQ7XG5cblx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKG5vdGlmaWNhdGlvbkVsLCAnZ3VpLW5vdGlmaWNhdGlvbi1hY3RpdmUnKTtcblx0fVxuXG5cdGlzUmlnaHRTaWRlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm5vdGlmaWNhdGlvbi5wb3NpdGlvbiA9PT0gRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uVE9QX1JJR0hUXG5cdFx0XHR8fCB0aGlzLm5vdGlmaWNhdGlvbi5wb3NpdGlvbiA9PT0gRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uQk9UVE9NX1JJR0hUO1xuXHR9XG59XG4iXX0=