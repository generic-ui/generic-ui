import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FabricNotificationPosition } from './fabric-notification-position';
import * as i0 from "@angular/core";
import * as i1 from "../../common/icons/close-icon/fabric-close-icon.component";
const _c0 = ["guiNotification"];
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
FabricNotificationComponent.ɵfac = function FabricNotificationComponent_Factory(t) { return new (t || FabricNotificationComponent)(i0.ɵɵdirectiveInject(i0.Renderer2)); };
FabricNotificationComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricNotificationComponent, selectors: [["gui-notification"]], viewQuery: function FabricNotificationComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.notificationRef = _t.first);
    } }, inputs: { notification: "notification" }, outputs: { onNotificationClose: "onNotificationClose" }, decls: 4, vars: 5, consts: [[1, "gui-notification"], ["guiNotification", ""], [3, "click"]], template: function FabricNotificationComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵelementStart(2, "gui-close-icon", 2);
        i0.ɵɵlistener("click", function FabricNotificationComponent_Template_gui_close_icon_click_2_listener() { return ctx.closeNotification(); });
        i0.ɵɵelementEnd();
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("gui-notification-right-side", ctx.isRightSide())("gui-notification-left-side", !ctx.isRightSide());
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", ctx.notification.description, " ");
    } }, directives: [i1.FabricCloseIconComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricNotificationComponent, [{
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
    }], function () { return [{ type: i0.Renderer2 }]; }, { notificationRef: [{
            type: ViewChild,
            args: ['guiNotification', { static: false }]
        }], notification: [{
            type: Input
        }], onNotificationClose: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbW9kYWwvbm90aWZpY2F0aW9uL2ZhYnJpYy1ub3RpZmljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7O0FBZ0I1RSxNQUFNLE9BQU8sMkJBQTJCO0lBWXZDLFlBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFKdkMsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQXNCLENBQUM7UUFFNUMsV0FBTSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFHeEMsQ0FBQztJQUVELFFBQVE7UUFDUCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUVwQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO2lCQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDNUIsU0FBUyxDQUNULEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUM5QixDQUFDO1NBQ0g7SUFDRixDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsaUJBQWlCO1FBQ2hCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDUixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM1QixTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQ2hFLENBQUM7SUFDSixDQUFDO0lBRUQsaUJBQWlCO1FBQ2hCLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDO1FBRTFELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsS0FBSywwQkFBMEIsQ0FBQyxTQUFTO2VBQ3RFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxLQUFLLDBCQUEwQixDQUFDLFlBQVksQ0FBQztJQUM1RSxDQUFDOztzR0FoRFcsMkJBQTJCOzhFQUEzQiwyQkFBMkI7Ozs7OztRQVh0QyxpQ0FHMkI7UUFDMUIseUNBQThDO1FBQTlCLGdIQUFTLHVCQUFtQixJQUFDO1FBQUMsaUJBQWlCO1FBQy9ELFlBQ0Q7UUFBQSxpQkFBTTs7UUFMSixnRUFBbUQsa0RBQUE7UUFJcEQsZUFDRDtRQURDLDZEQUNEOzt1RkFLVywyQkFBMkI7Y0FkdkMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7RUFRVDtnQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDL0M7NERBR0EsZUFBZTtrQkFEZCxTQUFTO21CQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUkvQyxZQUFZO2tCQURYLEtBQUs7WUFJTixtQkFBbUI7a0JBRGxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPbkRlc3Ryb3ksXG5cdE9uSW5pdCxcblx0T3V0cHV0LFxuXHRSZW5kZXJlcjIsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb24gfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgU3ViamVjdCwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uIH0gZnJvbSAnLi9mYWJyaWMtbm90aWZpY2F0aW9uLXBvc2l0aW9uJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLW5vdGlmaWNhdGlvbicsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiAjZ3VpTm90aWZpY2F0aW9uXG5cdFx0XHQgW2NsYXNzLmd1aS1ub3RpZmljYXRpb24tcmlnaHQtc2lkZV09XCJpc1JpZ2h0U2lkZSgpXCJcblx0XHRcdCBbY2xhc3MuZ3VpLW5vdGlmaWNhdGlvbi1sZWZ0LXNpZGVdPVwiIWlzUmlnaHRTaWRlKClcIlxuXHRcdFx0IGNsYXNzPVwiZ3VpLW5vdGlmaWNhdGlvblwiPlxuXHRcdFx0PGd1aS1jbG9zZS1pY29uIChjbGljayk9XCJjbG9zZU5vdGlmaWNhdGlvbigpXCI+PC9ndWktY2xvc2UtaWNvbj5cblx0XHRcdHt7bm90aWZpY2F0aW9uLmRlc2NyaXB0aW9ufX1cblx0XHQ8L2Rpdj5cblx0YCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljTm90aWZpY2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXHRAVmlld0NoaWxkKCdndWlOb3RpZmljYXRpb24nLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0bm90aWZpY2F0aW9uUmVmOiBFbGVtZW50UmVmO1xuXG5cdEBJbnB1dCgpXG5cdG5vdGlmaWNhdGlvbjogRmFicmljTm90aWZpY2F0aW9uO1xuXG5cdEBPdXRwdXQoKVxuXHRvbk5vdGlmaWNhdGlvbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxGYWJyaWNOb3RpZmljYXRpb24+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSB1bnN1YiQgPSBuZXcgU3ViamVjdCgpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0aWYgKHRoaXMubm90aWZpY2F0aW9uLnRpbWVyLmVuYWJsZWQpIHtcblxuXHRcdFx0dGltZXIodGhpcy5ub3RpZmljYXRpb24udGltZXIuZHVyYXRpb24pXG5cdFx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3ViJCkpXG5cdFx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdFx0KCkgPT4gdGhpcy5jbG9zZU5vdGlmaWNhdGlvbigpXG5cdFx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bnN1YiQubmV4dCgpO1xuXHRcdHRoaXMudW5zdWIkLmNvbXBsZXRlKCk7XG5cdH1cblxuXHRjbG9zZU5vdGlmaWNhdGlvbigpOiB2b2lkIHtcblx0XHR0aGlzLmFkZENsb3NlQW5pbWF0aW9uKCk7XG5cdFx0dGltZXIoMjAwKVxuXHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWIkKSlcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vbk5vdGlmaWNhdGlvbkNsb3NlLmVtaXQodGhpcy5ub3RpZmljYXRpb24pXG5cdFx0XHQpO1xuXHR9XG5cblx0YWRkQ2xvc2VBbmltYXRpb24oKTogdm9pZCB7XG5cdFx0Y29uc3Qgbm90aWZpY2F0aW9uRWwgPSB0aGlzLm5vdGlmaWNhdGlvblJlZi5uYXRpdmVFbGVtZW50O1xuXG5cdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyhub3RpZmljYXRpb25FbCwgJ2d1aS1ub3RpZmljYXRpb24tYWN0aXZlJyk7XG5cdH1cblxuXHRpc1JpZ2h0U2lkZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5ub3RpZmljYXRpb24ucG9zaXRpb24gPT09IEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uLlRPUF9SSUdIVFxuXHRcdFx0fHwgdGhpcy5ub3RpZmljYXRpb24ucG9zaXRpb24gPT09IEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uLkJPVFRPTV9SSUdIVDtcblx0fVxufVxuIl19