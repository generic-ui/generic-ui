/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Direction } from './direction';
export class FabricArrowIconComponent {
    constructor() {
        this.direction = Direction.RIGHT;
    }
}
FabricArrowIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-arrow-icon',
                template: `
		<div [style.transform]="'rotate(' + direction + 'deg)'">
			<svg xmlns="http://www.w3.org/2000/svg" width="6.081" height="10.661" viewBox="0 0 6.081 10.661">
				<path d="M.75.75,5.02,5.02.75,9.29"
					  transform="translate(0.311 0.311)"
					  fill="none"
					  stroke-linecap="round"
					  stroke-linejoin="round"
					  stroke-width="1.5"/>
			</svg>
		</div>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-arrow-icon]': 'true',
                    '[class.gui-icon]': 'true'
                },
                styles: [".gui-arrow-icon{cursor:pointer}.gui-arrow-icon svg path{stroke:#aaa}.gui-arrow-icon:hover svg path{stroke:#464646}"]
            }] }
];
FabricArrowIconComponent.propDecorators = {
    direction: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FabricArrowIconComponent.prototype.direction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWFycm93LWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiY29tbW9uL2ljb25zL2Fycm93LWljb24vZmFicmljLWFycm93LWljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBeUJ4QyxNQUFNLE9BQU8sd0JBQXdCO0lBdEJyQztRQXdCQyxjQUFTLEdBQWMsU0FBUyxDQUFDLEtBQUssQ0FBQztJQUV4QyxDQUFDOzs7WUExQkEsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7RUFXVDtnQkFFRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLElBQUksRUFBRTtvQkFDTCx3QkFBd0IsRUFBRSxNQUFNO29CQUNoQyxrQkFBa0IsRUFBRSxNQUFNO2lCQUMxQjs7YUFDRDs7O3dCQUVDLEtBQUs7Ozs7SUFBTiw2Q0FDdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpcmVjdGlvbiB9IGZyb20gJy4vZGlyZWN0aW9uJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktYXJyb3ctaWNvbicsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBbc3R5bGUudHJhbnNmb3JtXT1cIidyb3RhdGUoJyArIGRpcmVjdGlvbiArICdkZWcpJ1wiPlxuXHRcdFx0PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI2LjA4MVwiIGhlaWdodD1cIjEwLjY2MVwiIHZpZXdCb3g9XCIwIDAgNi4wODEgMTAuNjYxXCI+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNLjc1Ljc1LDUuMDIsNS4wMi43NSw5LjI5XCJcblx0XHRcdFx0XHQgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjMxMSAwLjMxMSlcIlxuXHRcdFx0XHRcdCAgZmlsbD1cIm5vbmVcIlxuXHRcdFx0XHRcdCAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG5cdFx0XHRcdFx0ICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG5cdFx0XHRcdFx0ICBzdHJva2Utd2lkdGg9XCIxLjVcIi8+XG5cdFx0XHQ8L3N2Zz5cblx0XHQ8L2Rpdj5cblx0YCxcblx0c3R5bGVVcmxzOiBbJy4vZmFicmljLWFycm93LWljb24ubmd4LnNjc3MnXSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1hcnJvdy1pY29uXSc6ICd0cnVlJyxcblx0XHQnW2NsYXNzLmd1aS1pY29uXSc6ICd0cnVlJ1xuXHR9XG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0Fycm93SWNvbkNvbXBvbmVudCB7XG5cdEBJbnB1dCgpXG5cdGRpcmVjdGlvbjogRGlyZWN0aW9uID0gRGlyZWN0aW9uLlJJR0hUO1xuXG59XG4iXX0=