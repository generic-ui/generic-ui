import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
export const selector = 'gui-close-icon';
export class FabricCloseIconComponent {
}
FabricCloseIconComponent.decorators = [
    { type: Component, args: [{
                selector: selector,
                template: `
		<span class="gui-close-icon"></span>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-close-icon-wrapper]': 'true'
                },
                styles: [".gui-close-icon-wrapper .gui-close-icon{cursor:pointer;height:16px;position:absolute;right:8px;top:8px;width:16px}.gui-close-icon-wrapper .gui-close-icon:before,.gui-close-icon-wrapper .gui-close-icon:after{background-color:#aaa;content:\" \";height:16px;left:7px;position:absolute;width:2px}.gui-close-icon-wrapper .gui-close-icon:before{-ms-transform:rotate(45deg);transform:rotate(45deg)}.gui-close-icon-wrapper .gui-close-icon:after{-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.gui-close-icon-wrapper .gui-close-icon:hover:before,.gui-close-icon-wrapper .gui-close-icon:hover:after{background-color:#464646}\n"]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWNsb3NlLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2NvbW1vbi9pY29ucy9jbG9zZS1pY29uL2ZhYnJpYy1jbG9zZS1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRGLE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztBQWN6QyxNQUFNLE9BQU8sd0JBQXdCOzs7WUFacEMsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixRQUFRLEVBQUU7O0VBRVQ7Z0JBRUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0wsZ0NBQWdDLEVBQUUsTUFBTTtpQkFDeEM7O2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0b3IgPSAnZ3VpLWNsb3NlLWljb24nO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IHNlbGVjdG9yLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxzcGFuIGNsYXNzPVwiZ3VpLWNsb3NlLWljb25cIj48L3NwYW4+XG5cdGAsXG5cdHN0eWxlVXJsczogWycuL2ZhYnJpYy1jbG9zZS1pY29uLm5neC5zY3NzJ10sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktY2xvc2UtaWNvbi13cmFwcGVyXSc6ICd0cnVlJ1xuXHR9XG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0Nsb3NlSWNvbkNvbXBvbmVudCB7XG59XG4iXX0=