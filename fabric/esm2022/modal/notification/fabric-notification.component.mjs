import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FabricNotificationPosition } from './fabric-notification-position';
import * as i0 from "@angular/core";
import * as i1 from "../../common/icons/close-icon/fabric-close-icon.component";
export class FabricNotificationComponent {
    renderer;
    notificationRef;
    notification;
    onNotificationClose = new EventEmitter();
    unsub$ = new Subject();
    constructor(renderer) {
        this.renderer = renderer;
    }
    ngOnInit() {
        if (this.notification?.timer.enabled) {
            timer(this.notification.timer.duration)
                .pipe(takeUntil(this.unsub$))
                .subscribe(() => this.closeNotification());
        }
    }
    ngOnDestroy() {
        this.unsub$.next();
        this.unsub$.complete();
    }
    closeNotification() {
        this.addCloseAnimation();
        timer(200)
            .pipe(takeUntil(this.unsub$))
            .subscribe(() => this.onNotificationClose.emit(this.notification));
    }
    addCloseAnimation() {
        if (this.notificationRef) {
            const notificationEl = this.notificationRef.nativeElement;
            this.renderer.addClass(notificationEl, 'gui-notification-active');
        }
    }
    isRightSide() {
        return this.notification?.position === FabricNotificationPosition.TOP_RIGHT
            || this.notification?.position === FabricNotificationPosition.BOTTOM_RIGHT;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricNotificationComponent, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FabricNotificationComponent, selector: "gui-notification", inputs: { notification: "notification" }, outputs: { onNotificationClose: "onNotificationClose" }, viewQueries: [{ propertyName: "notificationRef", first: true, predicate: ["guiNotification"], descendants: true, read: ElementRef }], ngImport: i0, template: `
		<div #guiNotification
			 [class.gui-notification-right-side]="isRightSide()"
			 [class.gui-notification-left-side]="!isRightSide()"
			 class="gui-notification">
			<gui-close-icon (click)="closeNotification()"></gui-close-icon>
			{{notification.description}}
		</div>
	`, isInline: true, dependencies: [{ kind: "component", type: i1.FabricCloseIconComponent, selector: "gui-close-icon" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricNotificationComponent, decorators: [{
            type: Component,
            args: [{
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
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }]; }, propDecorators: { notificationRef: [{
                type: ViewChild,
                args: ['guiNotification', { read: ElementRef, static: false }]
            }], notification: [{
                type: Input
            }], onNotificationClose: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbW9kYWwvbm90aWZpY2F0aW9uL2ZhYnJpYy1ub3RpZmljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7O0FBZ0I1RSxNQUFNLE9BQU8sMkJBQTJCO0lBYVY7SUFWcEIsZUFBZSxDQUFjO0lBR3RDLFlBQVksQ0FBc0I7SUFHekIsbUJBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQXNCLENBQUM7SUFFckQsTUFBTSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFFOUMsWUFBNkIsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUNoRCxDQUFDO0lBRUQsUUFBUTtRQUNQLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBRXJDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7aUJBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUM1QixTQUFTLENBQ1QsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQzlCLENBQUM7U0FDSDtJQUNGLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxpQkFBaUI7UUFDaEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzVCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDaEUsQ0FBQztJQUNKLENBQUM7SUFFRCxpQkFBaUI7UUFDaEIsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDO1lBRTFELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1NBQ2xFO0lBQ0YsQ0FBQztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsUUFBUSxLQUFLLDBCQUEwQixDQUFDLFNBQVM7ZUFDdkUsSUFBSSxDQUFDLFlBQVksRUFBRSxRQUFRLEtBQUssMEJBQTBCLENBQUMsWUFBWSxDQUFDO0lBQzdFLENBQUM7d0dBbkRXLDJCQUEyQjs0RkFBM0IsMkJBQTJCLDBQQUVELFVBQVUsNkJBZHRDOzs7Ozs7OztFQVFUOzs0RkFJVywyQkFBMkI7a0JBZHZDLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFOzs7Ozs7OztFQVFUO29CQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDL0M7Z0dBSVMsZUFBZTtzQkFEdkIsU0FBUzt1QkFBQyxpQkFBaUIsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtnQkFJakUsWUFBWTtzQkFEWCxLQUFLO2dCQUlHLG1CQUFtQjtzQkFEM0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdE9uRGVzdHJveSxcblx0T25Jbml0LFxuXHRPdXRwdXQsXG5cdFJlbmRlcmVyMixcblx0Vmlld0NoaWxkLFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvbiB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBTdWJqZWN0LCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24gfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb24tcG9zaXRpb24nO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktbm90aWZpY2F0aW9uJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2ICNndWlOb3RpZmljYXRpb25cblx0XHRcdCBbY2xhc3MuZ3VpLW5vdGlmaWNhdGlvbi1yaWdodC1zaWRlXT1cImlzUmlnaHRTaWRlKClcIlxuXHRcdFx0IFtjbGFzcy5ndWktbm90aWZpY2F0aW9uLWxlZnQtc2lkZV09XCIhaXNSaWdodFNpZGUoKVwiXG5cdFx0XHQgY2xhc3M9XCJndWktbm90aWZpY2F0aW9uXCI+XG5cdFx0XHQ8Z3VpLWNsb3NlLWljb24gKGNsaWNrKT1cImNsb3NlTm90aWZpY2F0aW9uKClcIj48L2d1aS1jbG9zZS1pY29uPlxuXHRcdFx0e3tub3RpZmljYXRpb24uZGVzY3JpcHRpb259fVxuXHRcdDwvZGl2PlxuXHRgLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNOb3RpZmljYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cblx0QFZpZXdDaGlsZCgnZ3VpTm90aWZpY2F0aW9uJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IGZhbHNlIH0pXG5cdHJlYWRvbmx5IG5vdGlmaWNhdGlvblJlZj86IEVsZW1lbnRSZWY7XG5cblx0QElucHV0KClcblx0bm90aWZpY2F0aW9uPzogRmFicmljTm90aWZpY2F0aW9uO1xuXG5cdEBPdXRwdXQoKVxuXHRyZWFkb25seSBvbk5vdGlmaWNhdGlvbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxGYWJyaWNOb3RpZmljYXRpb24+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSB1bnN1YiQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuXHR9XG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMubm90aWZpY2F0aW9uPy50aW1lci5lbmFibGVkKSB7XG5cblx0XHRcdHRpbWVyKHRoaXMubm90aWZpY2F0aW9uLnRpbWVyLmR1cmF0aW9uKVxuXHRcdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YiQpKVxuXHRcdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRcdCgpID0+IHRoaXMuY2xvc2VOb3RpZmljYXRpb24oKVxuXHRcdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25EZXN0cm95KCk6IHZvaWQge1xuXHRcdHRoaXMudW5zdWIkLm5leHQoKTtcblx0XHR0aGlzLnVuc3ViJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0Y2xvc2VOb3RpZmljYXRpb24oKTogdm9pZCB7XG5cdFx0dGhpcy5hZGRDbG9zZUFuaW1hdGlvbigpO1xuXHRcdHRpbWVyKDIwMClcblx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3ViJCkpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHRoaXMub25Ob3RpZmljYXRpb25DbG9zZS5lbWl0KHRoaXMubm90aWZpY2F0aW9uKVxuXHRcdFx0KTtcblx0fVxuXG5cdGFkZENsb3NlQW5pbWF0aW9uKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLm5vdGlmaWNhdGlvblJlZikge1xuXHRcdFx0Y29uc3Qgbm90aWZpY2F0aW9uRWwgPSB0aGlzLm5vdGlmaWNhdGlvblJlZi5uYXRpdmVFbGVtZW50O1xuXG5cdFx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKG5vdGlmaWNhdGlvbkVsLCAnZ3VpLW5vdGlmaWNhdGlvbi1hY3RpdmUnKTtcblx0XHR9XG5cdH1cblxuXHRpc1JpZ2h0U2lkZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5ub3RpZmljYXRpb24/LnBvc2l0aW9uID09PSBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbi5UT1BfUklHSFRcblx0XHRcdHx8IHRoaXMubm90aWZpY2F0aW9uPy5wb3NpdGlvbiA9PT0gRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uQk9UVE9NX1JJR0hUO1xuXHR9XG59XG4iXX0=