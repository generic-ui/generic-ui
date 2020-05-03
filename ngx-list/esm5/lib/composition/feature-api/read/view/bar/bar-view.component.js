/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
var BarViewComponent = /** @class */ (function () {
    function BarViewComponent() {
        this.showPercentage = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    BarViewComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.value !== undefined && changes.value !== null) {
            this.width = this.value > 100 ? 100 : this.value;
        }
    };
    BarViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-bar-view[value]',
                    template: "\n\t\t<div class=\"gui-percentage-bar\">\n\t\t\t<div class=\"gui-percentage\" [style.width.%]=\"width\">\n\t\t\t</div>\n\t\t\t<gui-percentage-view *ngIf=\"showPercentage\"\n\t\t\t\t\t\t\t\t [value]=\"value\">\n\t\t\t</gui-percentage-view>\n\t\t</div>\n\t",
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
    return BarViewComponent;
}());
export { BarViewComponent };
if (false) {
    /** @type {?} */
    BarViewComponent.prototype.value;
    /** @type {?} */
    BarViewComponent.prototype.showPercentage;
    /** @type {?} */
    BarViewComponent.prototype.width;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZmVhdHVyZS1hcGkvcmVhZC92aWV3L2Jhci9iYXItdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2SDtJQUFBO1FBdUJDLG1CQUFjLEdBQVksS0FBSyxDQUFDO0lBVWpDLENBQUM7Ozs7O0lBTkEsc0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2pDLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDMUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ2pEO0lBQ0YsQ0FBQzs7Z0JBL0JELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsZ1FBUVQ7b0JBQ0QsSUFBSSxFQUFFO3dCQUNMLHNCQUFzQixFQUFFLE1BQU07cUJBQzlCO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozt3QkFHQyxLQUFLO2lDQUdMLEtBQUs7O0lBV1AsdUJBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQWhCWSxnQkFBZ0I7OztJQUU1QixpQ0FDYzs7SUFFZCwwQ0FDZ0M7O0lBRWhDLGlDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWJhci12aWV3W3ZhbHVlXScsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBjbGFzcz1cImd1aS1wZXJjZW50YWdlLWJhclwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImd1aS1wZXJjZW50YWdlXCIgW3N0eWxlLndpZHRoLiVdPVwid2lkdGhcIj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGd1aS1wZXJjZW50YWdlLXZpZXcgKm5nSWY9XCJzaG93UGVyY2VudGFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0IFt2YWx1ZV09XCJ2YWx1ZVwiPlxuXHRcdFx0PC9ndWktcGVyY2VudGFnZS12aWV3PlxuXHRcdDwvZGl2PlxuXHRgLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktYmFyLXZpZXddJzogJ3RydWUnXG5cdH0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEJhclZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHZhbHVlOiBudW1iZXI7XG5cblx0QElucHV0KClcblx0c2hvd1BlcmNlbnRhZ2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHR3aWR0aDogbnVtYmVyO1xuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRpZiAoY2hhbmdlcy52YWx1ZSAhPT0gdW5kZWZpbmVkICYmIGNoYW5nZXMudmFsdWUgIT09IG51bGwpIHtcblx0XHRcdHRoaXMud2lkdGggPSB0aGlzLnZhbHVlID4gMTAwID8gMTAwIDogdGhpcy52YWx1ZTtcblx0XHR9XG5cdH1cblxufVxuIl19