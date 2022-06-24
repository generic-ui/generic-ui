import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FabricNotificationPosition } from './fabric-notification-position';
import * as i0 from "@angular/core";
import * as i1 from "./fabric-notification.component";
import * as i2 from "@angular/common";
export class FabricNotificationsContainerComponent {
    constructor() {
        this.notifications = [];
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
FabricNotificationsContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricNotificationsContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FabricNotificationsContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FabricNotificationsContainerComponent, selector: "gui-notifications-container", inputs: { notifications: "notifications", position: "position" }, outputs: { onNotificationClose: "onNotificationClose" }, host: { properties: { "class.gui-notifications-top-right": "isPosition(FabricNotificationPosition.TOP_RIGHT)", "class.gui-notifications-top-left": "isPosition(FabricNotificationPosition.TOP_LEFT)", "class.gui-notifications-bottom-right": "isPosition(FabricNotificationPosition.BOTTOM_RIGHT)", "class.gui-notifications-bottom-left": "isPosition(FabricNotificationPosition.BOTTOM_LEFT)" } }, ngImport: i0, template: `
		<gui-notification *ngFor="let notification of notifications"
						  [notification]="notification"
						  (onNotificationClose)="emitClosedNotification($event)">
		</gui-notification>
	`, isInline: true, components: [{ type: i1.FabricNotificationComponent, selector: "gui-notification", inputs: ["notification"], outputs: ["onNotificationClose"] }], directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricNotificationsContainerComponent, decorators: [{
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
        }], propDecorators: { notifications: [{
                type: Input
            }], position: [{
                type: Input
            }], onNotificationClose: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbnMtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9tb2RhbC9ub3RpZmljYXRpb24vZmFicmljLW5vdGlmaWNhdGlvbnMtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7O0FBbUI1RSxNQUFNLE9BQU8scUNBQXFDO0lBakJsRDtRQW9CQyxrQkFBYSxHQUE4QixFQUFFLENBQUM7UUFNckMsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVsRCwrQkFBMEIsR0FBRywwQkFBMEIsQ0FBQztLQVN4RDtJQVBBLHNCQUFzQixDQUFDLG9CQUF3QztRQUM5RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELFVBQVUsQ0FBQywwQkFBc0Q7UUFDaEUsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLDBCQUEwQixDQUFDO0lBQ3JELENBQUM7O21JQW5CVyxxQ0FBcUM7dUhBQXJDLHFDQUFxQyxva0JBZnZDOzs7OztFQUtUOzRGQVVXLHFDQUFxQztrQkFqQmpELFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsUUFBUSxFQUFFOzs7OztFQUtUO29CQUNELElBQUksRUFBRTt3QkFDTCxxQ0FBcUMsRUFBRSxrREFBa0Q7d0JBQ3pGLG9DQUFvQyxFQUFFLGlEQUFpRDt3QkFDdkYsd0NBQXdDLEVBQUUscURBQXFEO3dCQUMvRix1Q0FBdUMsRUFBRSxvREFBb0Q7cUJBQzdGO29CQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDL0M7OEJBSUEsYUFBYTtzQkFEWixLQUFLO2dCQUlOLFFBQVE7c0JBRFAsS0FBSztnQkFJRyxtQkFBbUI7c0JBRDNCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb24gfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24gfSBmcm9tICcuL2ZhYnJpYy1ub3RpZmljYXRpb24tcG9zaXRpb24nO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktbm90aWZpY2F0aW9ucy1jb250YWluZXInLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxndWktbm90aWZpY2F0aW9uICpuZ0Zvcj1cImxldCBub3RpZmljYXRpb24gb2Ygbm90aWZpY2F0aW9uc1wiXG5cdFx0XHRcdFx0XHQgIFtub3RpZmljYXRpb25dPVwibm90aWZpY2F0aW9uXCJcblx0XHRcdFx0XHRcdCAgKG9uTm90aWZpY2F0aW9uQ2xvc2UpPVwiZW1pdENsb3NlZE5vdGlmaWNhdGlvbigkZXZlbnQpXCI+XG5cdFx0PC9ndWktbm90aWZpY2F0aW9uPlxuXHRgLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktbm90aWZpY2F0aW9ucy10b3AtcmlnaHRdJzogJ2lzUG9zaXRpb24oRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uVE9QX1JJR0hUKScsXG5cdFx0J1tjbGFzcy5ndWktbm90aWZpY2F0aW9ucy10b3AtbGVmdF0nOiAnaXNQb3NpdGlvbihGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbi5UT1BfTEVGVCknLFxuXHRcdCdbY2xhc3MuZ3VpLW5vdGlmaWNhdGlvbnMtYm90dG9tLXJpZ2h0XSc6ICdpc1Bvc2l0aW9uKEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uLkJPVFRPTV9SSUdIVCknLFxuXHRcdCdbY2xhc3MuZ3VpLW5vdGlmaWNhdGlvbnMtYm90dG9tLWxlZnRdJzogJ2lzUG9zaXRpb24oRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uQk9UVE9NX0xFRlQpJ1xuXHR9LFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNOb3RpZmljYXRpb25zQ29udGFpbmVyQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRub3RpZmljYXRpb25zOiBBcnJheTxGYWJyaWNOb3RpZmljYXRpb24+ID0gW107XG5cblx0QElucHV0KClcblx0cG9zaXRpb24/OiBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbjtcblxuXHRAT3V0cHV0KClcblx0cmVhZG9ubHkgb25Ob3RpZmljYXRpb25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbiA9IEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uO1xuXG5cdGVtaXRDbG9zZWROb3RpZmljYXRpb24oc2VsZWN0ZWROb3RpZmljYXRpb246IEZhYnJpY05vdGlmaWNhdGlvbik6IHZvaWQge1xuXHRcdHRoaXMub25Ob3RpZmljYXRpb25DbG9zZS5lbWl0KHNlbGVjdGVkTm90aWZpY2F0aW9uKTtcblx0fVxuXG5cdGlzUG9zaXRpb24oZmFicmljTm90aWZpY2F0aW9uUG9zaXRpb246IEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucG9zaXRpb24gPT09IGZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uO1xuXHR9XG59XG4iXX0=