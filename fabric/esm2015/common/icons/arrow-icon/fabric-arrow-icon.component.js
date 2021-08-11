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
                template: "<svg [style.transform]=\"'rotate(' + direction + 'deg)'\"\n\t height=\"10.661\" viewBox=\"0 0 6.081 10.661\" width=\"6.081\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path d=\"M.75.75,5.02,5.02.75,9.29\"\n\t\t  fill=\"none\"\n\t\t  stroke-linecap=\"round\"\n\t\t  stroke-linejoin=\"round\"\n\t\t  stroke-width=\"1.5\"\n\t\t  transform=\"translate(0.311 0.311)\"/>\n</svg>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.gui-arrow-icon]': 'true',
                    '[class.gui-icon]': 'true'
                },
                styles: [".gui-arrow-icon{cursor:pointer}.gui-arrow-icon svg path{stroke:#aaa;transition:stroke .2s ease-in-out}.gui-arrow-icon:hover svg path{stroke:#464646}"]
            }] }
];
FabricArrowIconComponent.propDecorators = {
    direction: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FabricArrowIconComponent.prototype.direction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWFycm93LWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiY29tbW9uL2ljb25zL2Fycm93LWljb24vZmFicmljLWFycm93LWljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBY3hDLE1BQU0sT0FBTyx3QkFBd0I7SUFYckM7UUFjQyxjQUFTLEdBQWMsU0FBUyxDQUFDLEtBQUssQ0FBQztJQUV4QyxDQUFDOzs7WUFoQkEsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGlZQUErQztnQkFFL0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0wsd0JBQXdCLEVBQUUsTUFBTTtvQkFDaEMsa0JBQWtCLEVBQUUsTUFBTTtpQkFDMUI7O2FBQ0Q7Ozt3QkFHQyxLQUFLOzs7O0lBQU4sNkNBQ3VDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICcuL2RpcmVjdGlvbic7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWFycm93LWljb24nLFxuXHR0ZW1wbGF0ZVVybDogJ2ZhYnJpYy1hcnJvdy1pY29uLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vZmFicmljLWFycm93LWljb24ubmd4LnNjc3MnXSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1hcnJvdy1pY29uXSc6ICd0cnVlJyxcblx0XHQnW2NsYXNzLmd1aS1pY29uXSc6ICd0cnVlJ1xuXHR9XG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0Fycm93SWNvbkNvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0ZGlyZWN0aW9uOiBEaXJlY3Rpb24gPSBEaXJlY3Rpb24uUklHSFQ7XG5cbn1cbiJdfQ==