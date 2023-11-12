import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export class FabricTooltipComponent {
    elementRef;
    text = '';
    left = 0;
    top = 0;
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    correctPosition() {
        this.top -= this.elementRef.nativeElement.offsetHeight;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricTooltipComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: FabricTooltipComponent, selector: "ng-component", host: { properties: { "class.gui-tooltip": "true", "style.left.px": "left", "style.top.px": "top" } }, ngImport: i0, template: `
		{{text}}
	`, isInline: true, styles: [".gui-tooltip{background:rgba(0,0,0,.8);border-radius:4px;border-style:solid;border-width:0;box-sizing:border-box;color:#fff;display:block;font:14px Arial;font-weight:400;padding:8px 12px;position:absolute;-ms-transform:translateX(-50%);transform:translate(-50%);vertical-align:middle;z-index:10}.gui-tooltip:after{border-color:#333 transparent transparent transparent;border-style:solid;border-width:5px;content:\"\";left:50%;margin-left:-5px;position:absolute;top:100%}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricTooltipComponent, decorators: [{
            type: Component,
            args: [{ template: `
		{{text}}
	`, host: {
                        '[class.gui-tooltip]': 'true',
                        '[style.left.px]': 'left',
                        '[style.top.px]': 'top'
                    }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".gui-tooltip{background:rgba(0,0,0,.8);border-radius:4px;border-style:solid;border-width:0;box-sizing:border-box;color:#fff;display:block;font:14px Arial;font-weight:400;padding:8px 12px;position:absolute;-ms-transform:translateX(-50%);transform:translate(-50%);vertical-align:middle;z-index:10}.gui-tooltip:after{border-color:#333 transparent transparent transparent;border-style:solid;border-width:5px;content:\"\";left:50%;margin-left:-5px;position:absolute;top:100%}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRvb2x0aXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL21vZGFsL3Rvb2x0aXAvZmFicmljLXRvb2x0aXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWMsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBZWxHLE1BQU0sT0FBTyxzQkFBc0I7SUFLTDtJQUo3QixJQUFJLEdBQVcsRUFBRSxDQUFDO0lBQ2xCLElBQUksR0FBVyxDQUFDLENBQUM7SUFDakIsR0FBRyxHQUFXLENBQUMsQ0FBQztJQUVoQixZQUE2QixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQ25ELENBQUM7SUFFRCxlQUFlO1FBQ2QsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7SUFDeEQsQ0FBQzt1R0FWVyxzQkFBc0I7MkZBQXRCLHNCQUFzQiwySkFaeEI7O0VBRVQ7OzJGQVVXLHNCQUFzQjtrQkFibEMsU0FBUzsrQkFDQzs7RUFFVCxRQUNLO3dCQUNMLHFCQUFxQixFQUFFLE1BQU07d0JBQzdCLGlCQUFpQixFQUFFLE1BQU07d0JBQ3pCLGdCQUFnQixFQUFFLEtBQUs7cUJBQ3ZCLGlCQUVjLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0dGVtcGxhdGU6IGBcblx0XHR7e3RleHR9fVxuXHRgLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktdG9vbHRpcF0nOiAndHJ1ZScsXG5cdFx0J1tzdHlsZS5sZWZ0LnB4XSc6ICdsZWZ0Jyxcblx0XHQnW3N0eWxlLnRvcC5weF0nOiAndG9wJ1xuXHR9LFxuXHRzdHlsZVVybHM6IFsnLi9mYWJyaWMtdG9vbHRpcC5jb21wb25lbnQuc2NzcyddLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNUb29sdGlwQ29tcG9uZW50IHtcblx0dGV4dDogc3RyaW5nID0gJyc7XG5cdGxlZnQ6IG51bWJlciA9IDA7XG5cdHRvcDogbnVtYmVyID0gMDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0fVxuXG5cdGNvcnJlY3RQb3NpdGlvbigpOiB2b2lkIHtcblx0XHR0aGlzLnRvcCAtPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cdH1cblxufVxuIl19