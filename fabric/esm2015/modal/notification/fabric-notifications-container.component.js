import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FabricNotificationPosition } from './fabric-notification-position';
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
FabricNotificationsContainerComponent.decorators = [
    { type: Component, args: [{
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
            },] }
];
FabricNotificationsContainerComponent.propDecorators = {
    notifications: [{ type: Input }],
    position: [{ type: Input }],
    onNotificationClose: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLW5vdGlmaWNhdGlvbnMtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9tb2RhbC9ub3RpZmljYXRpb24vZmFicmljLW5vdGlmaWNhdGlvbnMtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBbUI1RSxNQUFNLE9BQU8scUNBQXFDO0lBakJsRDtRQTBCQyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXpDLCtCQUEwQixHQUFHLDBCQUEwQixDQUFDO0lBU3pELENBQUM7SUFQQSxzQkFBc0IsQ0FBQyxvQkFBd0M7UUFDOUQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxVQUFVLENBQUMsMEJBQXNEO1FBQ2hFLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSywwQkFBMEIsQ0FBQztJQUNyRCxDQUFDOzs7WUFwQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFFBQVEsRUFBRTs7Ozs7RUFLVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0wscUNBQXFDLEVBQUUsa0RBQWtEO29CQUN6RixvQ0FBb0MsRUFBRSxpREFBaUQ7b0JBQ3ZGLHdDQUF3QyxFQUFFLHFEQUFxRDtvQkFDL0YsdUNBQXVDLEVBQUUsb0RBQW9EO2lCQUM3RjtnQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDL0M7Ozs0QkFHQyxLQUFLO3VCQUdMLEtBQUs7a0NBR0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhYnJpY05vdGlmaWNhdGlvbiB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbiB9IGZyb20gJy4vZmFicmljLW5vdGlmaWNhdGlvbi1wb3NpdGlvbic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1ub3RpZmljYXRpb25zLWNvbnRhaW5lcicsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGd1aS1ub3RpZmljYXRpb24gKm5nRm9yPVwibGV0IG5vdGlmaWNhdGlvbiBvZiBub3RpZmljYXRpb25zXCJcblx0XHRcdFx0XHRcdCAgW25vdGlmaWNhdGlvbl09XCJub3RpZmljYXRpb25cIlxuXHRcdFx0XHRcdFx0ICAob25Ob3RpZmljYXRpb25DbG9zZSk9XCJlbWl0Q2xvc2VkTm90aWZpY2F0aW9uKCRldmVudClcIj5cblx0XHQ8L2d1aS1ub3RpZmljYXRpb24+XG5cdGAsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1ub3RpZmljYXRpb25zLXRvcC1yaWdodF0nOiAnaXNQb3NpdGlvbihGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbi5UT1BfUklHSFQpJyxcblx0XHQnW2NsYXNzLmd1aS1ub3RpZmljYXRpb25zLXRvcC1sZWZ0XSc6ICdpc1Bvc2l0aW9uKEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uLlRPUF9MRUZUKScsXG5cdFx0J1tjbGFzcy5ndWktbm90aWZpY2F0aW9ucy1ib3R0b20tcmlnaHRdJzogJ2lzUG9zaXRpb24oRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24uQk9UVE9NX1JJR0hUKScsXG5cdFx0J1tjbGFzcy5ndWktbm90aWZpY2F0aW9ucy1ib3R0b20tbGVmdF0nOiAnaXNQb3NpdGlvbihGYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbi5CT1RUT01fTEVGVCknXG5cdH0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY05vdGlmaWNhdGlvbnNDb250YWluZXJDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdG5vdGlmaWNhdGlvbnM6IEFycmF5PEZhYnJpY05vdGlmaWNhdGlvbj47XG5cblx0QElucHV0KClcblx0cG9zaXRpb246IEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uO1xuXG5cdEBPdXRwdXQoKVxuXHRvbk5vdGlmaWNhdGlvbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEZhYnJpY05vdGlmaWNhdGlvblBvc2l0aW9uID0gRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb247XG5cblx0ZW1pdENsb3NlZE5vdGlmaWNhdGlvbihzZWxlY3RlZE5vdGlmaWNhdGlvbjogRmFicmljTm90aWZpY2F0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5vbk5vdGlmaWNhdGlvbkNsb3NlLmVtaXQoc2VsZWN0ZWROb3RpZmljYXRpb24pO1xuXHR9XG5cblx0aXNQb3NpdGlvbihmYWJyaWNOb3RpZmljYXRpb25Qb3NpdGlvbjogRmFicmljTm90aWZpY2F0aW9uUG9zaXRpb24pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5wb3NpdGlvbiA9PT0gZmFicmljTm90aWZpY2F0aW9uUG9zaXRpb247XG5cdH1cbn1cbiJdfQ==