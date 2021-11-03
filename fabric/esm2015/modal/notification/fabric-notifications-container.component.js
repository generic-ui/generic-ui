import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FabricNotificationPosition } from './fabric-notification-position';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./fabric-notification.component";
function FabricNotificationsContainerComponent_gui_notification_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "gui-notification", 1);
    i0.ɵɵlistener("onNotificationClose", function FabricNotificationsContainerComponent_gui_notification_0_Template_gui_notification_onNotificationClose_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.emitClosedNotification($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const notification_r1 = ctx.$implicit;
    i0.ɵɵproperty("notification", notification_r1);
} }
export class FabricNotificationsContainerComponent {
    constructor() {
        this.onNotificationClose = new EventEmitter();
        this.FabricNotificationPosition = FabricNotificationPosition;
    }
    emitClosedNotification(selectedNotification) {
        this.onNotificationClose.emit(selectedNotification);
    }
    isPosition(fabricNotificationPosition) {
        return this.position === fabricNotificationPosition;
    }
}
FabricNotificationsContainerComponent.ɵfac = function FabricNotificationsContainerComponent_Factory(t) { return new (t || FabricNotificationsContainerComponent)(); };
FabricNotificationsContainerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FabricNotificationsContainerComponent, selectors: [["gui-notifications-container"]], hostVars: 8, hostBindings: function FabricNotificationsContainerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("gui-notifications-top-right", ctx.isPosition(ctx.FabricNotificationPosition.TOP_RIGHT))("gui-notifications-top-left", ctx.isPosition(ctx.FabricNotificationPosition.TOP_LEFT))("gui-notifications-bottom-right", ctx.isPosition(ctx.FabricNotificationPosition.BOTTOM_RIGHT))("gui-notifications-bottom-left", ctx.isPosition(ctx.FabricNotificationPosition.BOTTOM_LEFT));
    } }, inputs: { notifications: "notifications", position: "position" }, outputs: { onNotificationClose: "onNotificationClose" }, decls: 1, vars: 1, consts: [[3, "notification", "onNotificationClose", 4, "ngFor", "ngForOf"], [3, "notification", "onNotificationClose"]], template: function FabricNotificationsContainerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, FabricNotificationsContainerComponent_gui_notification_0_Template, 1, 1, "gui-notification", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.notifications);
    } }, directives: [i1.NgForOf, i2.FabricNotificationComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricNotificationsContainerComponent, [{
        type: Component,
        args: [{
                selector: 'gui-notifications-container',
                template: `
		<gui-notification *ngFor="let notification of notifications"
						  [notification]="notification"
						  (onNotificationClose)="emitClosedNotification($event)">
		</gui-notification>
	`,
                host: {
                    '[class.gui-notifications-top-right]': 'isPosition(FabricNotificationPosition.TOP_RIGHT)',
                    '[class.gui-notifications-top-left]': 'isPosition(FabricNotificationPosition.TOP_LEFT)',
                    '[class.gui-notifications-bottom-right]': 'isPosition(FabricNotificationPosition.BOTTOM_RIGHT)',
                    '[class.gui-notifications-bottom-left]': 'isPosition(FabricNotificationPosition.BOTTOM_LEFT)'
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { notifications: [{
            type: Input
        }], position: [{
            type: Input
        }], onNotificationClose: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbnMtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9tb2RhbC9ub3RpZmljYXRpb24vZmFicmljLW5vdGlmaWNhdGlvbnMtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7SUFLMUUsMkNBRTZEO0lBQXZELG9SQUFzRDtJQUM1RCxpQkFBbUI7OztJQUZiLDhDQUE2Qjs7QUFhckMsTUFBTSxPQUFPLHFDQUFxQztJQWpCbEQ7UUEwQkMsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV6QywrQkFBMEIsR0FBRywwQkFBMEIsQ0FBQztLQVN4RDtJQVBBLHNCQUFzQixDQUFDLG9CQUF3QztRQUM5RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELFVBQVUsQ0FBQywwQkFBc0Q7UUFDaEUsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLDBCQUEwQixDQUFDO0lBQ3JELENBQUM7OzBIQW5CVyxxQ0FBcUM7d0ZBQXJDLHFDQUFxQzs7O1FBZGhELGdIQUdtQjs7UUFId0IsMkNBQWdCOzt1RkFjaEQscUNBQXFDO2NBakJqRCxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsUUFBUSxFQUFFOzs7OztFQUtUO2dCQUNELElBQUksRUFBRTtvQkFDTCxxQ0FBcUMsRUFBRSxrREFBa0Q7b0JBQ3pGLG9DQUFvQyxFQUFFLGlEQUFpRDtvQkFDdkYsd0NBQXdDLEVBQUUscURBQXFEO29CQUMvRix1Q0FBdUMsRUFBRSxvREFBb0Q7aUJBQzdGO2dCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMvQztnQkFJQSxhQUFhO2tCQURaLEtBQUs7WUFJTixRQUFRO2tCQURQLEtBQUs7WUFJTixtQkFBbUI7a0JBRGxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb24gfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24gfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb24tcG9zaXRpb24nO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktbm90aWZpY2F0aW9ucy1jb250YWluZXInLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxndWktbm90aWZpY2F0aW9uICpuZ0Zvcj1cImxldCBub3RpZmljYXRpb24gb2Ygbm90aWZpY2F0aW9uc1wiXG5cdFx0XHRcdFx0XHQgIFtub3RpZmljYXRpb25dPVwibm90aWZpY2F0aW9uXCJcblx0XHRcdFx0XHRcdCAgKG9uTm90aWZpY2F0aW9uQ2xvc2UpPVwiZW1pdENsb3NlZE5vdGlmaWNhdGlvbigkZXZlbnQpXCI+XG5cdFx0PC9ndWktbm90aWZpY2F0aW9uPlxuXHRgLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktbm90aWZpY2F0aW9ucy10b3AtcmlnaHRdJzogJ2lzUG9zaXRpb24oRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uVE9QX1JJR0hUKScsXG5cdFx0J1tjbGFzcy5ndWktbm90aWZpY2F0aW9ucy10b3AtbGVmdF0nOiAnaXNQb3NpdGlvbihGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbi5UT1BfTEVGVCknLFxuXHRcdCdbY2xhc3MuZ3VpLW5vdGlmaWNhdGlvbnMtYm90dG9tLXJpZ2h0XSc6ICdpc1Bvc2l0aW9uKEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uLkJPVFRPTV9SSUdIVCknLFxuXHRcdCdbY2xhc3MuZ3VpLW5vdGlmaWNhdGlvbnMtYm90dG9tLWxlZnRdJzogJ2lzUG9zaXRpb24oRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uQk9UVE9NX0xFRlQpJ1xuXHR9LFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNOb3RpZmljYXRpb25zQ29udGFpbmVyQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRub3RpZmljYXRpb25zOiBBcnJheTxGYWJyaWNOb3RpZmljYXRpb24+O1xuXG5cdEBJbnB1dCgpXG5cdHBvc2l0aW9uOiBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbjtcblxuXHRAT3V0cHV0KClcblx0b25Ob3RpZmljYXRpb25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbiA9IEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uO1xuXG5cdGVtaXRDbG9zZWROb3RpZmljYXRpb24oc2VsZWN0ZWROb3RpZmljYXRpb246IEZhYnJpY05vdGlmaWNhdGlvbik6IHZvaWQge1xuXHRcdHRoaXMub25Ob3RpZmljYXRpb25DbG9zZS5lbWl0KHNlbGVjdGVkTm90aWZpY2F0aW9uKTtcblx0fVxuXG5cdGlzUG9zaXRpb24oZmFicmljTm90aWZpY2F0aW9uUG9zaXRpb246IEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucG9zaXRpb24gPT09IGZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uO1xuXHR9XG59XG4iXX0=