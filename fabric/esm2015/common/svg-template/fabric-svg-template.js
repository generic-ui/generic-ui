import { ChangeDetectionStrategy, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
export class FabricSvgTemplate {
    // todo sanitize
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
            },] }
];
FabricSvgTemplate.propDecorators = {
    svgRef: [{ type: ViewChild, args: ['svgEl', { static: false },] }],
    svg: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXN2Zy10ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9jb21tb24vc3ZnLXRlbXBsYXRlL2ZhYnJpYy1zdmctdGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQix1QkFBdUIsRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVVuSSxNQUFNLE9BQU8saUJBQWlCO0lBTzlCLGdCQUFnQjtJQUNmLGVBQWU7UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNoRCxDQUFDOzs7WUFsQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7RUFFVDtnQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDL0M7OztxQkFFQyxTQUFTLFNBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtrQkFHcEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdmctdGVtcGxhdGUnLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgI3N2Z0VsPjwvZGl2PlxuXHRgLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNTdmdUZW1wbGF0ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXHRAVmlld0NoaWxkKCdzdmdFbCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRzdmdSZWY6IEVsZW1lbnRSZWY7XG5cblx0QElucHV0KClcblx0c3ZnOiBzdHJpbmc7XG5cbi8vIHRvZG8gc2FuaXRpemVcblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHRoaXMuc3ZnUmVmLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5zdmc7XG5cdH1cbn1cbiJdfQ==