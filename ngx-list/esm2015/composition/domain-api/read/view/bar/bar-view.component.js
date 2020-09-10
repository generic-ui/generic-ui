/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
export class BarViewComponent {
    constructor() {
        this.showPercentage = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.value !== undefined && changes.value !== null) {
            this.width = this.value > 100 ? 100 : this.value;
        }
    }
}
BarViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-bar-view[value]',
                template: `
		<div class="gui-percentage-bar">
			<div class="gui-percentage" [style.width.%]="width">
			</div>
			<gui-percentage-view *ngIf="showPercentage"
								 [value]="value">
			</gui-percentage-view>
		</div>
	`,
                host: {
                    '[class.gui-bar-view]': 'true'
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
BarViewComponent.propDecorators = {
    value: [{ type: Input }],
    showPercentage: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BarViewComponent.prototype.value;
    /** @type {?} */
    BarViewComponent.prototype.showPercentage;
    /** @type {?} */
    BarViewComponent.prototype.width;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9kb21haW4tYXBpL3JlYWQvdmlldy9iYXIvYmFyLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFtQnZILE1BQU0sT0FBTyxnQkFBZ0I7SUFqQjdCO1FBdUJDLG1CQUFjLEdBQVksS0FBSyxDQUFDO0lBVWpDLENBQUM7Ozs7O0lBTkEsV0FBVyxDQUFDLE9BQXNCO1FBQ2pDLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDMUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ2pEO0lBQ0YsQ0FBQzs7O1lBL0JELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7Ozs7O0VBUVQ7Z0JBQ0QsSUFBSSxFQUFFO29CQUNMLHNCQUFzQixFQUFFLE1BQU07aUJBQzlCO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7O29CQUdDLEtBQUs7NkJBR0wsS0FBSzs7OztJQUhOLGlDQUNjOztJQUVkLDBDQUNnQzs7SUFFaEMsaUNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktYmFyLXZpZXdbdmFsdWVdJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLXBlcmNlbnRhZ2UtYmFyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLXBlcmNlbnRhZ2VcIiBbc3R5bGUud2lkdGguJV09XCJ3aWR0aFwiPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8Z3VpLXBlcmNlbnRhZ2UtdmlldyAqbmdJZj1cInNob3dQZXJjZW50YWdlXCJcblx0XHRcdFx0XHRcdFx0XHQgW3ZhbHVlXT1cInZhbHVlXCI+XG5cdFx0XHQ8L2d1aS1wZXJjZW50YWdlLXZpZXc+XG5cdFx0PC9kaXY+XG5cdGAsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1iYXItdmlld10nOiAndHJ1ZSdcblx0fSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQmFyVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0dmFsdWU6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHRzaG93UGVyY2VudGFnZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHdpZHRoOiBudW1iZXI7XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmIChjaGFuZ2VzLnZhbHVlICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy52YWx1ZSAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy53aWR0aCA9IHRoaXMudmFsdWUgPiAxMDAgPyAxMDAgOiB0aGlzLnZhbHVlO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=