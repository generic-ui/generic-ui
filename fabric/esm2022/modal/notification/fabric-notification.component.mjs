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
            timer(this.notification.timer.duration || 0)
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricNotificationComponent, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: FabricNotificationComponent, selector: "gui-notification", inputs: { notification: "notification" }, outputs: { onNotificationClose: "onNotificationClose" }, viewQueries: [{ propertyName: "notificationRef", first: true, predicate: ["guiNotification"], descendants: true, read: ElementRef }], ngImport: i0, template: `
		<div #guiNotification
			 [class.gui-notification-right-side]="isRightSide()"
			 [class.gui-notification-left-side]="!isRightSide()"
			 class="gui-notification">
			<gui-close-icon (click)="closeNotification()"></gui-close-icon>
			{{notification.description}}
		</div>
	`, isInline: true, dependencies: [{ kind: "component", type: i1.FabricCloseIconComponent, selector: "gui-close-icon" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricNotificationComponent, decorators: [{
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
        }], ctorParameters: () => [{ type: i0.Renderer2 }], propDecorators: { notificationRef: [{
                type: ViewChild,
                args: ['guiNotification', { read: ElementRef, static: false }]
            }], notification: [{
                type: Input
            }], onNotificationClose: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbW9kYWwvbm90aWZpY2F0aW9uL2ZhYnJpYy1ub3RpZmljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7O0FBZ0I1RSxNQUFNLE9BQU8sMkJBQTJCO0lBYVY7SUFWcEIsZUFBZSxDQUFjO0lBR3RDLFlBQVksQ0FBc0I7SUFHekIsbUJBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQXNCLENBQUM7SUFFckQsTUFBTSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFFOUMsWUFBNkIsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUNoRCxDQUFDO0lBRUQsUUFBUTtRQUNQLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBRXJDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO2lCQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDNUIsU0FBUyxDQUNULEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUM5QixDQUFDO1NBQ0g7SUFDRixDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsaUJBQWlCO1FBQ2hCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDUixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM1QixTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQ2hFLENBQUM7SUFDSixDQUFDO0lBRUQsaUJBQWlCO1FBQ2hCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN6QixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQztZQUUxRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUseUJBQXlCLENBQUMsQ0FBQztTQUNsRTtJQUNGLENBQUM7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVEsS0FBSywwQkFBMEIsQ0FBQyxTQUFTO2VBQ3ZFLElBQUksQ0FBQyxZQUFZLEVBQUUsUUFBUSxLQUFLLDBCQUEwQixDQUFDLFlBQVksQ0FBQztJQUM3RSxDQUFDO3VHQW5EVywyQkFBMkI7MkZBQTNCLDJCQUEyQiwwUEFFRCxVQUFVLDZCQWR0Qzs7Ozs7Ozs7RUFRVDs7MkZBSVcsMkJBQTJCO2tCQWR2QyxTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7RUFRVDtvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQy9DOzhFQUlTLGVBQWU7c0JBRHZCLFNBQVM7dUJBQUMsaUJBQWlCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0JBSWpFLFlBQVk7c0JBRFgsS0FBSztnQkFJRyxtQkFBbUI7c0JBRDNCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPbkRlc3Ryb3ksXG5cdE9uSW5pdCxcblx0T3V0cHV0LFxuXHRSZW5kZXJlcjIsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb24gfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgU3ViamVjdCwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uIH0gZnJvbSAnLi9mYWJyaWMtbm90aWZpY2F0aW9uLXBvc2l0aW9uJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLW5vdGlmaWNhdGlvbicsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiAjZ3VpTm90aWZpY2F0aW9uXG5cdFx0XHQgW2NsYXNzLmd1aS1ub3RpZmljYXRpb24tcmlnaHQtc2lkZV09XCJpc1JpZ2h0U2lkZSgpXCJcblx0XHRcdCBbY2xhc3MuZ3VpLW5vdGlmaWNhdGlvbi1sZWZ0LXNpZGVdPVwiIWlzUmlnaHRTaWRlKClcIlxuXHRcdFx0IGNsYXNzPVwiZ3VpLW5vdGlmaWNhdGlvblwiPlxuXHRcdFx0PGd1aS1jbG9zZS1pY29uIChjbGljayk9XCJjbG9zZU5vdGlmaWNhdGlvbigpXCI+PC9ndWktY2xvc2UtaWNvbj5cblx0XHRcdHt7bm90aWZpY2F0aW9uLmRlc2NyaXB0aW9ufX1cblx0XHQ8L2Rpdj5cblx0YCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljTm90aWZpY2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBWaWV3Q2hpbGQoJ2d1aU5vdGlmaWNhdGlvbicsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KVxuXHRyZWFkb25seSBub3RpZmljYXRpb25SZWY/OiBFbGVtZW50UmVmO1xuXG5cdEBJbnB1dCgpXG5cdG5vdGlmaWNhdGlvbj86IEZhYnJpY05vdGlmaWNhdGlvbjtcblxuXHRAT3V0cHV0KClcblx0cmVhZG9ubHkgb25Ob3RpZmljYXRpb25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8RmFicmljTm90aWZpY2F0aW9uPigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdW5zdWIkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLm5vdGlmaWNhdGlvbj8udGltZXIuZW5hYmxlZCkge1xuXG5cdFx0XHR0aW1lcih0aGlzLm5vdGlmaWNhdGlvbi50aW1lci5kdXJhdGlvbiB8fCAwKVxuXHRcdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YiQpKVxuXHRcdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRcdCgpID0+IHRoaXMuY2xvc2VOb3RpZmljYXRpb24oKVxuXHRcdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25EZXN0cm95KCk6IHZvaWQge1xuXHRcdHRoaXMudW5zdWIkLm5leHQoKTtcblx0XHR0aGlzLnVuc3ViJC5jb21wbGV0ZSgpO1xuXHR9XG5cblx0Y2xvc2VOb3RpZmljYXRpb24oKTogdm9pZCB7XG5cdFx0dGhpcy5hZGRDbG9zZUFuaW1hdGlvbigpO1xuXHRcdHRpbWVyKDIwMClcblx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3ViJCkpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHRoaXMub25Ob3RpZmljYXRpb25DbG9zZS5lbWl0KHRoaXMubm90aWZpY2F0aW9uKVxuXHRcdFx0KTtcblx0fVxuXG5cdGFkZENsb3NlQW5pbWF0aW9uKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLm5vdGlmaWNhdGlvblJlZikge1xuXHRcdFx0Y29uc3Qgbm90aWZpY2F0aW9uRWwgPSB0aGlzLm5vdGlmaWNhdGlvblJlZi5uYXRpdmVFbGVtZW50O1xuXG5cdFx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKG5vdGlmaWNhdGlvbkVsLCAnZ3VpLW5vdGlmaWNhdGlvbi1hY3RpdmUnKTtcblx0XHR9XG5cdH1cblxuXHRpc1JpZ2h0U2lkZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5ub3RpZmljYXRpb24/LnBvc2l0aW9uID09PSBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbi5UT1BfUklHSFRcblx0XHRcdHx8IHRoaXMubm90aWZpY2F0aW9uPy5wb3NpdGlvbiA9PT0gRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uQk9UVE9NX1JJR0hUO1xuXHR9XG59XG4iXX0=