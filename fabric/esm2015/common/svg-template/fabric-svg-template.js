/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
export class FabricSvgTemplate {
    // todo sanitize
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXN2Zy10ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImNvbW1vbi9zdmctdGVtcGxhdGUvZmFicmljLXN2Zy10ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQix1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFVbkksTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFRN0IsZUFBZTtRQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2hELENBQUM7OztZQWxCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOztFQUVUO2dCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMvQzs7O3FCQUVDLFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2tCQUdwQyxLQUFLOzs7O0lBSE4sbUNBQ21COztJQUVuQixnQ0FDWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdmctdGVtcGxhdGUnLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgI3N2Z0VsPjwvZGl2PlxuXHRgLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNTdmdUZW1wbGF0ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXHRAVmlld0NoaWxkKCdzdmdFbCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRzdmdSZWY6IEVsZW1lbnRSZWY7XG5cblx0QElucHV0KClcblx0c3ZnOiBzdHJpbmc7XG5cbi8vIHRvZG8gc2FuaXRpemVcblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHRoaXMuc3ZnUmVmLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5zdmc7XG5cdH1cbn1cbiJdfQ==