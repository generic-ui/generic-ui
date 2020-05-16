/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Direction } from './direction';
var FabricArrowIconComponent = /** @class */ (function () {
    function FabricArrowIconComponent() {
        this.direction = Direction.RIGHT;
    }
    FabricArrowIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-arrow-icon',
                    template: "\n\t\t<div [style.transform]=\"'rotate(' + direction + 'deg)'\">\n\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"6.081\" height=\"10.661\" viewBox=\"0 0 6.081 10.661\">\n\t\t\t\t<path d=\"M.75.75,5.02,5.02.75,9.29\"\n\t\t\t\t\t  transform=\"translate(0.311 0.311)\"\n\t\t\t\t\t  fill=\"none\"\n\t\t\t\t\t  stroke-linecap=\"round\"\n\t\t\t\t\t  stroke-linejoin=\"round\"\n\t\t\t\t\t  stroke-width=\"1.5\"/>\n\t\t\t</svg>\n\t\t</div>\n\t",
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
    return FabricArrowIconComponent;
}());
export { FabricArrowIconComponent };
if (false) {
    /** @type {?} */
    FabricArrowIconComponent.prototype.direction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWFycm93LWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiY29tbW9uL2ljb25zL2Fycm93LWljb24vZmFicmljLWFycm93LWljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3hDO0lBQUE7UUF3QkMsY0FBUyxHQUFjLFNBQVMsQ0FBQyxLQUFLLENBQUM7SUFFeEMsQ0FBQzs7Z0JBMUJBLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsOGJBV1Q7b0JBRUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxJQUFJLEVBQUU7d0JBQ0wsd0JBQXdCLEVBQUUsTUFBTTt3QkFDaEMsa0JBQWtCLEVBQUUsTUFBTTtxQkFDMUI7O2lCQUNEOzs7NEJBRUMsS0FBSzs7SUFHUCwrQkFBQztDQUFBLEFBMUJELElBMEJDO1NBSlksd0JBQXdCOzs7SUFDcEMsNkNBQ3VDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICcuL2RpcmVjdGlvbic7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWFycm93LWljb24nLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgW3N0eWxlLnRyYW5zZm9ybV09XCIncm90YXRlKCcgKyBkaXJlY3Rpb24gKyAnZGVnKSdcIj5cblx0XHRcdDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiNi4wODFcIiBoZWlnaHQ9XCIxMC42NjFcIiB2aWV3Qm94PVwiMCAwIDYuMDgxIDEwLjY2MVwiPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTS43NS43NSw1LjAyLDUuMDIuNzUsOS4yOVwiXG5cdFx0XHRcdFx0ICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC4zMTEgMC4zMTEpXCJcblx0XHRcdFx0XHQgIGZpbGw9XCJub25lXCJcblx0XHRcdFx0XHQgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuXHRcdFx0XHRcdCAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuXHRcdFx0XHRcdCAgc3Ryb2tlLXdpZHRoPVwiMS41XCIvPlxuXHRcdFx0PC9zdmc+XG5cdFx0PC9kaXY+XG5cdGAsXG5cdHN0eWxlVXJsczogWycuL2ZhYnJpYy1hcnJvdy1pY29uLm5neC5zY3NzJ10sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktYXJyb3ctaWNvbl0nOiAndHJ1ZScsXG5cdFx0J1tjbGFzcy5ndWktaWNvbl0nOiAndHJ1ZSdcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNBcnJvd0ljb25Db21wb25lbnQge1xuXHRASW5wdXQoKVxuXHRkaXJlY3Rpb246IERpcmVjdGlvbiA9IERpcmVjdGlvbi5SSUdIVDtcblxufVxuIl19