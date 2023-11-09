import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../../feature/common/component/src/gate';
import * as i0 from "@angular/core";
import * as i1 from "../../../panel/banner-panels/title-panel/structure.title-panel.config-archive";
import * as i2 from "../../../panel/banner-panels/footer-panel/structure.footer-panel.config-archive";
export class StructurePanelGate extends Gate {
    constructor(structureTitlePanelConfigArchive, structureFooterPanelConfigArchive) {
        super();
        this.structureTitlePanelConfigArchive = structureTitlePanelConfigArchive;
        this.structureFooterPanelConfigArchive = structureFooterPanelConfigArchive;
    }
    ngOnChanges(changes) {
        if (this.isDefined('titlePanel', changes)) {
            this.structureTitlePanelConfigArchive.next(this.titlePanel);
        }
        if (this.isDefined('footerPanel', changes)) {
            this.structureFooterPanelConfigArchive.next(this.footerPanel);
        }
    }
}
StructurePanelGate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructurePanelGate, deps: [{ token: i1.StructureTitlePanelConfigArchive }, { token: i2.StructureFooterPanelConfigArchive }], target: i0.ɵɵFactoryTarget.Directive });
StructurePanelGate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: StructurePanelGate, selector: "gui-structure[titlePanel][footerPanel]", inputs: { titlePanel: "titlePanel", footerPanel: "footerPanel" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructurePanelGate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'gui-structure[titlePanel][footerPanel]'
                }]
        }], ctorParameters: function () { return [{ type: i1.StructureTitlePanelConfigArchive }, { type: i2.StructureFooterPanelConfigArchive }]; }, propDecorators: { titlePanel: [{
                type: Input
            }], footerPanel: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhbmVsLmdhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc3JjL3N0cnVjdHVyZS9nYXRlL3BhbmVsL3N0cnVjdHVyZS1wYW5lbC5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7OztBQVMzRSxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsSUFBSTtJQVEzQyxZQUE2QixnQ0FBa0UsRUFDM0UsaUNBQW9FO1FBQ3ZGLEtBQUssRUFBRSxDQUFDO1FBRm9CLHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBa0M7UUFDM0Usc0NBQWlDLEdBQWpDLGlDQUFpQyxDQUFtQztJQUV4RixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNDO1FBRWpELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDNUQ7UUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQzNDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzlEO0lBQ0YsQ0FBQzs7Z0hBdEJXLGtCQUFrQjtvR0FBbEIsa0JBQWtCOzRGQUFsQixrQkFBa0I7a0JBSDlCLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLHdDQUF3QztpQkFDbEQ7dUtBSUEsVUFBVTtzQkFEVCxLQUFLO2dCQUlOLFdBQVc7c0JBRFYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY29tcG9uZW50L3NyYy9nYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vcGFuZWwvYmFubmVyLXBhbmVscy90aXRsZS1wYW5lbC9zdHJ1Y3R1cmUudGl0bGUtcGFuZWwuY29uZmlnLWFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vcGFuZWwvYmFubmVyLXBhbmVscy9mb290ZXItcGFuZWwvc3RydWN0dXJlLmZvb3Rlci1wYW5lbC5jb25maWctYXJjaGl2ZSc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jb21wb25lbnQvc3JjL25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlQmFubmVyUGFuZWxDb25maWcgfSBmcm9tICcuLi8uLi8uLi9wYW5lbC9iYW5uZXItcGFuZWxzL3N0cnVjdHVyZS1iYW5uZXItcGFuZWwuY29uZmlnJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZVt0aXRsZVBhbmVsXVtmb290ZXJQYW5lbF0nXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVBhbmVsR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHRpdGxlUGFuZWw6IFN0cnVjdHVyZUJhbm5lclBhbmVsQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdGZvb3RlclBhbmVsOiBTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U3RydWN0dXJlUGFuZWxHYXRlPikge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCd0aXRsZVBhbmVsJywgY2hhbmdlcykpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmUubmV4dCh0aGlzLnRpdGxlUGFuZWwpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnZm9vdGVyUGFuZWwnLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmUubmV4dCh0aGlzLmZvb3RlclBhbmVsKTtcblx0XHR9XG5cdH1cblxufVxuIl19