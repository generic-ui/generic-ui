import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export class FabricSvgTemplate {
    svgRef;
    svg = '';
    // todo sanitize
    ngAfterViewInit() {
        if (this.svgRef) {
            this.svgRef.nativeElement.innerHTML = this.svg;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricSvgTemplate, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FabricSvgTemplate, selector: "gui-svg-template", inputs: { svg: "svg" }, viewQueries: [{ propertyName: "svgRef", first: true, predicate: ["svgEl"], descendants: true, read: ElementRef }], ngImport: i0, template: `
		<div #svgEl></div>
	`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricSvgTemplate, decorators: [{
            type: Component,
            args: [{
                    selector: 'gui-svg-template',
                    template: `
		<div #svgEl></div>
	`,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], propDecorators: { svgRef: [{
                type: ViewChild,
                args: ['svgEl', { read: ElementRef, static: false }]
            }], svg: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXN2Zy10ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9jb21tb24vc3ZnLXRlbXBsYXRlL2ZhYnJpYy1zdmctdGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQix1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBVW5JLE1BQU0sT0FBTyxpQkFBaUI7SUFHcEIsTUFBTSxDQUFjO0lBRzdCLEdBQUcsR0FBVyxFQUFFLENBQUM7SUFFakIsZ0JBQWdCO0lBQ2hCLGVBQWU7UUFDZCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDL0M7SUFDRixDQUFDO3dHQWJXLGlCQUFpQjs0RkFBakIsaUJBQWlCLDRKQUVELFVBQVUsNkJBUjVCOztFQUVUOzs0RkFJVyxpQkFBaUI7a0JBUjdCLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFOztFQUVUO29CQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDL0M7OEJBSVMsTUFBTTtzQkFEZCxTQUFTO3VCQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtnQkFJdkQsR0FBRztzQkFERixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN2Zy10ZW1wbGF0ZScsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiAjc3ZnRWw+PC9kaXY+XG5cdGAsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1N2Z1RlbXBsYXRlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0QFZpZXdDaGlsZCgnc3ZnRWwnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSlcblx0cmVhZG9ubHkgc3ZnUmVmPzogRWxlbWVudFJlZjtcblxuXHRASW5wdXQoKVxuXHRzdmc6IHN0cmluZyA9ICcnO1xuXG5cdC8vIHRvZG8gc2FuaXRpemVcblx0bmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnN2Z1JlZikge1xuXHRcdFx0dGhpcy5zdmdSZWYubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnN2Zztcblx0XHR9XG5cdH1cbn1cbiJdfQ==