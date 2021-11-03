import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FabricNotificationPosition } from './fabric-notification-position';
export class FabricNotificationComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.onNotificationClose = new EventEmitter();
        this.unsub$ = new Subject();
    }
    ngOnInit() {
        if (this.notification.timer.enabled) {
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
        const notificationEl = this.notificationRef.nativeElement;
        this.renderer.addClass(notificationEl, 'gui-notification-active');
    }
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
            },] }
];
FabricNotificationComponent.ctorParameters = () => [
    { type: Renderer2 }
];
FabricNotificationComponent.propDecorators = {
    notificationRef: [{ type: ViewChild, args: ['guiNotification', { static: false },] }],
    notification: [{ type: Input }],
    onNotificationClose: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbW9kYWwvbm90aWZpY2F0aW9uL2ZhYnJpYy1ub3RpZmljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQWdCNUUsTUFBTSxPQUFPLDJCQUEyQjtJQVl2QyxZQUFvQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBSnZDLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFzQixDQUFDO1FBRTVDLFdBQU0sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBR3hDLENBQUM7SUFFRCxRQUFRO1FBQ1AsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFFcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztpQkFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzVCLFNBQVMsQ0FDVCxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FDOUIsQ0FBQztTQUNIO0lBQ0YsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGlCQUFpQjtRQUNoQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ1IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDNUIsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUNoRSxDQUFDO0lBQ0osQ0FBQztJQUVELGlCQUFpQjtRQUNoQixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQztRQUUxRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUseUJBQXlCLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEtBQUssMEJBQTBCLENBQUMsU0FBUztlQUN0RSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsS0FBSywwQkFBMEIsQ0FBQyxZQUFZLENBQUM7SUFDNUUsQ0FBQzs7O1lBOURELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7Ozs7O0VBUVQ7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQy9DOzs7WUF0QkEsU0FBUzs7OzhCQXdCUixTQUFTLFNBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzJCQUc5QyxLQUFLO2tDQUdMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPbkRlc3Ryb3ksXG5cdE9uSW5pdCxcblx0T3V0cHV0LFxuXHRSZW5kZXJlcjIsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb24gfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgU3ViamVjdCwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uIH0gZnJvbSAnLi9mYWJyaWMtbm90aWZpY2F0aW9uLXBvc2l0aW9uJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLW5vdGlmaWNhdGlvbicsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiAjZ3VpTm90aWZpY2F0aW9uXG5cdFx0XHQgW2NsYXNzLmd1aS1ub3RpZmljYXRpb24tcmlnaHQtc2lkZV09XCJpc1JpZ2h0U2lkZSgpXCJcblx0XHRcdCBbY2xhc3MuZ3VpLW5vdGlmaWNhdGlvbi1sZWZ0LXNpZGVdPVwiIWlzUmlnaHRTaWRlKClcIlxuXHRcdFx0IGNsYXNzPVwiZ3VpLW5vdGlmaWNhdGlvblwiPlxuXHRcdFx0PGd1aS1jbG9zZS1pY29uIChjbGljayk9XCJjbG9zZU5vdGlmaWNhdGlvbigpXCI+PC9ndWktY2xvc2UtaWNvbj5cblx0XHRcdHt7bm90aWZpY2F0aW9uLmRlc2NyaXB0aW9ufX1cblx0XHQ8L2Rpdj5cblx0YCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljTm90aWZpY2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXHRAVmlld0NoaWxkKCdndWlOb3RpZmljYXRpb24nLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0bm90aWZpY2F0aW9uUmVmOiBFbGVtZW50UmVmO1xuXG5cdEBJbnB1dCgpXG5cdG5vdGlmaWNhdGlvbjogRmFicmljTm90aWZpY2F0aW9uO1xuXG5cdEBPdXRwdXQoKVxuXHRvbk5vdGlmaWNhdGlvbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxGYWJyaWNOb3RpZmljYXRpb24+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSB1bnN1YiQgPSBuZXcgU3ViamVjdCgpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0aWYgKHRoaXMubm90aWZpY2F0aW9uLnRpbWVyLmVuYWJsZWQpIHtcblxuXHRcdFx0dGltZXIodGhpcy5ub3RpZmljYXRpb24udGltZXIuZHVyYXRpb24pXG5cdFx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3ViJCkpXG5cdFx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdFx0KCkgPT4gdGhpcy5jbG9zZU5vdGlmaWNhdGlvbigpXG5cdFx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bnN1YiQubmV4dCgpO1xuXHRcdHRoaXMudW5zdWIkLmNvbXBsZXRlKCk7XG5cdH1cblxuXHRjbG9zZU5vdGlmaWNhdGlvbigpOiB2b2lkIHtcblx0XHR0aGlzLmFkZENsb3NlQW5pbWF0aW9uKCk7XG5cdFx0dGltZXIoMjAwKVxuXHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWIkKSlcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vbk5vdGlmaWNhdGlvbkNsb3NlLmVtaXQodGhpcy5ub3RpZmljYXRpb24pXG5cdFx0XHQpO1xuXHR9XG5cblx0YWRkQ2xvc2VBbmltYXRpb24oKTogdm9pZCB7XG5cdFx0Y29uc3Qgbm90aWZpY2F0aW9uRWwgPSB0aGlzLm5vdGlmaWNhdGlvblJlZi5uYXRpdmVFbGVtZW50O1xuXG5cdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyhub3RpZmljYXRpb25FbCwgJ2d1aS1ub3RpZmljYXRpb24tYWN0aXZlJyk7XG5cdH1cblxuXHRpc1JpZ2h0U2lkZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5ub3RpZmljYXRpb24ucG9zaXRpb24gPT09IEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uLlRPUF9SSUdIVFxuXHRcdFx0fHwgdGhpcy5ub3RpZmljYXRpb24ucG9zaXRpb24gPT09IEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uLkJPVFRPTV9SSUdIVDtcblx0fVxufVxuIl19