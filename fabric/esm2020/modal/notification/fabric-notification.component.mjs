import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FabricNotificationPosition } from './fabric-notification-position';
import * as i0 from "@angular/core";
import * as i1 from "../../common/icons/close-icon/fabric-close-icon.component";
export class FabricNotificationComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.onNotificationClose = new EventEmitter();
        this.unsub$ = new Subject();
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
}
FabricNotificationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FabricNotificationComponent, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
FabricNotificationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.2", type: FabricNotificationComponent, selector: "gui-notification", inputs: { notification: "notification" }, outputs: { onNotificationClose: "onNotificationClose" }, viewQueries: [{ propertyName: "notificationRef", first: true, predicate: ["guiNotification"], descendants: true, read: ElementRef }], ngImport: i0, template: `
		<div #guiNotification
			 [class.gui-notification-right-side]="isRightSide()"
			 [class.gui-notification-left-side]="!isRightSide()"
			 class="gui-notification">
			<gui-close-icon (click)="closeNotification()"></gui-close-icon>
			{{notification.description}}
		</div>
	`, isInline: true, dependencies: [{ kind: "component", type: i1.FabricCloseIconComponent, selector: "gui-close-icon" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FabricNotificationComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbW9kYWwvbm90aWZpY2F0aW9uL2ZhYnJpYy1ub3RpZmljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7O0FBZ0I1RSxNQUFNLE9BQU8sMkJBQTJCO0lBYXZDLFlBQTZCLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFKdkMsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQXNCLENBQUM7UUFFckQsV0FBTSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFHOUMsQ0FBQztJQUVELFFBQVE7UUFDUCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUVyQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO2lCQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDNUIsU0FBUyxDQUNULEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUM5QixDQUFDO1NBQ0g7SUFDRixDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsaUJBQWlCO1FBQ2hCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDUixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM1QixTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQ2hFLENBQUM7SUFDSixDQUFDO0lBRUQsaUJBQWlCO1FBQ2hCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN6QixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQztZQUUxRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUseUJBQXlCLENBQUMsQ0FBQztTQUNsRTtJQUNGLENBQUM7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVEsS0FBSywwQkFBMEIsQ0FBQyxTQUFTO2VBQ3ZFLElBQUksQ0FBQyxZQUFZLEVBQUUsUUFBUSxLQUFLLDBCQUEwQixDQUFDLFlBQVksQ0FBQztJQUM3RSxDQUFDOzt3SEFuRFcsMkJBQTJCOzRHQUEzQiwyQkFBMkIsMFBBRUQsVUFBVSw2QkFkdEM7Ozs7Ozs7O0VBUVQ7MkZBSVcsMkJBQTJCO2tCQWR2QyxTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7RUFRVDtvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQy9DO2dHQUlTLGVBQWU7c0JBRHZCLFNBQVM7dUJBQUMsaUJBQWlCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0JBSWpFLFlBQVk7c0JBRFgsS0FBSztnQkFJRyxtQkFBbUI7c0JBRDNCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPbkRlc3Ryb3ksXG5cdE9uSW5pdCxcblx0T3V0cHV0LFxuXHRSZW5kZXJlcjIsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb24gfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgU3ViamVjdCwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uIH0gZnJvbSAnLi9mYWJyaWMtbm90aWZpY2F0aW9uLXBvc2l0aW9uJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLW5vdGlmaWNhdGlvbicsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiAjZ3VpTm90aWZpY2F0aW9uXG5cdFx0XHQgW2NsYXNzLmd1aS1ub3RpZmljYXRpb24tcmlnaHQtc2lkZV09XCJpc1JpZ2h0U2lkZSgpXCJcblx0XHRcdCBbY2xhc3MuZ3VpLW5vdGlmaWNhdGlvbi1sZWZ0LXNpZGVdPVwiIWlzUmlnaHRTaWRlKClcIlxuXHRcdFx0IGNsYXNzPVwiZ3VpLW5vdGlmaWNhdGlvblwiPlxuXHRcdFx0PGd1aS1jbG9zZS1pY29uIChjbGljayk9XCJjbG9zZU5vdGlmaWNhdGlvbigpXCI+PC9ndWktY2xvc2UtaWNvbj5cblx0XHRcdHt7bm90aWZpY2F0aW9uLmRlc2NyaXB0aW9ufX1cblx0XHQ8L2Rpdj5cblx0YCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljTm90aWZpY2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBWaWV3Q2hpbGQoJ2d1aU5vdGlmaWNhdGlvbicsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KVxuXHRyZWFkb25seSBub3RpZmljYXRpb25SZWY/OiBFbGVtZW50UmVmO1xuXG5cdEBJbnB1dCgpXG5cdG5vdGlmaWNhdGlvbj86IEZhYnJpY05vdGlmaWNhdGlvbjtcblxuXHRAT3V0cHV0KClcblx0cmVhZG9ubHkgb25Ob3RpZmljYXRpb25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8RmFicmljTm90aWZpY2F0aW9uPigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdW5zdWIkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLm5vdGlmaWNhdGlvbj8udGltZXIuZW5hYmxlZCkge1xuXG5cdFx0XHR0aW1lcih0aGlzLm5vdGlmaWNhdGlvbi50aW1lci5kdXJhdGlvbilcblx0XHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWIkKSlcblx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0XHQoKSA9PiB0aGlzLmNsb3NlTm90aWZpY2F0aW9uKClcblx0XHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLnVuc3ViJC5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YiQuY29tcGxldGUoKTtcblx0fVxuXG5cdGNsb3NlTm90aWZpY2F0aW9uKCk6IHZvaWQge1xuXHRcdHRoaXMuYWRkQ2xvc2VBbmltYXRpb24oKTtcblx0XHR0aW1lcigyMDApXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YiQpKVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uTm90aWZpY2F0aW9uQ2xvc2UuZW1pdCh0aGlzLm5vdGlmaWNhdGlvbilcblx0XHRcdCk7XG5cdH1cblxuXHRhZGRDbG9zZUFuaW1hdGlvbigpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5ub3RpZmljYXRpb25SZWYpIHtcblx0XHRcdGNvbnN0IG5vdGlmaWNhdGlvbkVsID0gdGhpcy5ub3RpZmljYXRpb25SZWYubmF0aXZlRWxlbWVudDtcblxuXHRcdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyhub3RpZmljYXRpb25FbCwgJ2d1aS1ub3RpZmljYXRpb24tYWN0aXZlJyk7XG5cdFx0fVxuXHR9XG5cblx0aXNSaWdodFNpZGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubm90aWZpY2F0aW9uPy5wb3NpdGlvbiA9PT0gRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uVE9QX1JJR0hUXG5cdFx0XHR8fCB0aGlzLm5vdGlmaWNhdGlvbj8ucG9zaXRpb24gPT09IEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uLkJPVFRPTV9SSUdIVDtcblx0fVxufVxuIl19