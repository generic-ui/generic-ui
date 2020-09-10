/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
export class FabricSvgTemplate {
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.svgRef.nativeElement.innerHTML = this.svg;
    }
}
FabricSvgTemplate.decorators = [
    { type: Component, args: [{
                selector: 'gui-svg-template',
                template: `
		<div #svgEl></div>
	`,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
FabricSvgTemplate.propDecorators = {
    svgRef: [{ type: ViewChild, args: ['svgEl', { static: false },] }],
    svg: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FabricSvgTemplate.prototype.svgRef;
    /** @type {?} */
    FabricSvgTemplate.prototype.svg;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXN2Zy10ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImNvbW1vbi9zdmctdGVtcGxhdGUvZmFicmljLXN2Zy10ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQix1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFVbkksTUFBTSxPQUFPLGlCQUFpQjs7OztJQU83QixlQUFlO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDaEQsQ0FBQzs7O1lBakJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7O0VBRVQ7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQy9DOzs7cUJBRUMsU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7a0JBR3BDLEtBQUs7Ozs7SUFITixtQ0FDbUI7O0lBRW5CLGdDQUNZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN2Zy10ZW1wbGF0ZScsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiAjc3ZnRWw+PC9kaXY+XG5cdGAsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1N2Z1RlbXBsYXRlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cdEBWaWV3Q2hpbGQoJ3N2Z0VsJywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdHN2Z1JlZjogRWxlbWVudFJlZjtcblxuXHRASW5wdXQoKVxuXHRzdmc6IHN0cmluZztcblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy5zdmdSZWYubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnN2Zztcblx0fVxufVxuIl19