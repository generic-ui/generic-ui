import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FabricNotificationPosition } from './fabric-notification-position';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./fabric-notification.component";
export class FabricNotificationsContainerComponent {
    notifications = [];
    position;
    onNotificationClose = new EventEmitter();
    FabricNotificationPosition = FabricNotificationPosition;
    emitClosedNotification(selectedNotification) {
        this.onNotificationClose.emit(selectedNotification);
    }
    isPosition(fabricNotificationPosition) {
        return this.position === fabricNotificationPosition;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricNotificationsContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FabricNotificationsContainerComponent, selector: "gui-notifications-container", inputs: { notifications: "notifications", position: "position" }, outputs: { onNotificationClose: "onNotificationClose" }, host: { properties: { "class.gui-notifications-top-right": "isPosition(FabricNotificationPosition.TOP_RIGHT)", "class.gui-notifications-top-left": "isPosition(FabricNotificationPosition.TOP_LEFT)", "class.gui-notifications-bottom-right": "isPosition(FabricNotificationPosition.BOTTOM_RIGHT)", "class.gui-notifications-bottom-left": "isPosition(FabricNotificationPosition.BOTTOM_LEFT)" } }, ngImport: i0, template: `
		<gui-notification *ngFor="let notification of notifications"
						  [notification]="notification"
						  (onNotificationClose)="emitClosedNotification($event)">
		</gui-notification>
	`, isInline: true, dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.FabricNotificationComponent, selector: "gui-notification", inputs: ["notification"], outputs: ["onNotificationClose"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricNotificationsContainerComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbnMtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9tb2RhbC9ub3RpZmljYXRpb24vZmFicmljLW5vdGlmaWNhdGlvbnMtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7O0FBbUI1RSxNQUFNLE9BQU8scUNBQXFDO0lBR2pELGFBQWEsR0FBOEIsRUFBRSxDQUFDO0lBRzlDLFFBQVEsQ0FBOEI7SUFHN0IsbUJBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVsRCwwQkFBMEIsR0FBRywwQkFBMEIsQ0FBQztJQUV4RCxzQkFBc0IsQ0FBQyxvQkFBd0M7UUFDOUQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxVQUFVLENBQUMsMEJBQXNEO1FBQ2hFLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSywwQkFBMEIsQ0FBQztJQUNyRCxDQUFDO3dHQW5CVyxxQ0FBcUM7NEZBQXJDLHFDQUFxQyxva0JBZnZDOzs7OztFQUtUOzs0RkFVVyxxQ0FBcUM7a0JBakJqRCxTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLFFBQVEsRUFBRTs7Ozs7RUFLVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0wscUNBQXFDLEVBQUUsa0RBQWtEO3dCQUN6RixvQ0FBb0MsRUFBRSxpREFBaUQ7d0JBQ3ZGLHdDQUF3QyxFQUFFLHFEQUFxRDt3QkFDL0YsdUNBQXVDLEVBQUUsb0RBQW9EO3FCQUM3RjtvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQy9DOzhCQUlBLGFBQWE7c0JBRFosS0FBSztnQkFJTixRQUFRO3NCQURQLEtBQUs7Z0JBSUcsbUJBQW1CO3NCQUQzQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmFicmljTm90aWZpY2F0aW9uIH0gZnJvbSAnLi9mYWJyaWMtbm90aWZpY2F0aW9uJztcbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uIH0gZnJvbSAnLi9mYWJyaWMtbm90aWZpY2F0aW9uLXBvc2l0aW9uJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLW5vdGlmaWNhdGlvbnMtY29udGFpbmVyJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8Z3VpLW5vdGlmaWNhdGlvbiAqbmdGb3I9XCJsZXQgbm90aWZpY2F0aW9uIG9mIG5vdGlmaWNhdGlvbnNcIlxuXHRcdFx0XHRcdFx0ICBbbm90aWZpY2F0aW9uXT1cIm5vdGlmaWNhdGlvblwiXG5cdFx0XHRcdFx0XHQgIChvbk5vdGlmaWNhdGlvbkNsb3NlKT1cImVtaXRDbG9zZWROb3RpZmljYXRpb24oJGV2ZW50KVwiPlxuXHRcdDwvZ3VpLW5vdGlmaWNhdGlvbj5cblx0YCxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLW5vdGlmaWNhdGlvbnMtdG9wLXJpZ2h0XSc6ICdpc1Bvc2l0aW9uKEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uLlRPUF9SSUdIVCknLFxuXHRcdCdbY2xhc3MuZ3VpLW5vdGlmaWNhdGlvbnMtdG9wLWxlZnRdJzogJ2lzUG9zaXRpb24oRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uVE9QX0xFRlQpJyxcblx0XHQnW2NsYXNzLmd1aS1ub3RpZmljYXRpb25zLWJvdHRvbS1yaWdodF0nOiAnaXNQb3NpdGlvbihGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbi5CT1RUT01fUklHSFQpJyxcblx0XHQnW2NsYXNzLmd1aS1ub3RpZmljYXRpb25zLWJvdHRvbS1sZWZ0XSc6ICdpc1Bvc2l0aW9uKEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uLkJPVFRPTV9MRUZUKSdcblx0fSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRmFicmljTm90aWZpY2F0aW9uc0NvbnRhaW5lckNvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0bm90aWZpY2F0aW9uczogQXJyYXk8RmFicmljTm90aWZpY2F0aW9uPiA9IFtdO1xuXG5cdEBJbnB1dCgpXG5cdHBvc2l0aW9uPzogRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb247XG5cblx0QE91dHB1dCgpXG5cdHJlYWRvbmx5IG9uTm90aWZpY2F0aW9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0RmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24gPSBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbjtcblxuXHRlbWl0Q2xvc2VkTm90aWZpY2F0aW9uKHNlbGVjdGVkTm90aWZpY2F0aW9uOiBGYWJyaWNOb3RpZmljYXRpb24pOiB2b2lkIHtcblx0XHR0aGlzLm9uTm90aWZpY2F0aW9uQ2xvc2UuZW1pdChzZWxlY3RlZE5vdGlmaWNhdGlvbik7XG5cdH1cblxuXHRpc1Bvc2l0aW9uKGZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uOiBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnBvc2l0aW9uID09PSBmYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbjtcblx0fVxufVxuIl19