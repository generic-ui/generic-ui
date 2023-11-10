import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i2 from "./active-filter.service";
import * as i3 from "../../../../../../core/schema/src/api/global/schema.read-model-root-id";
export class ActiveFilterMenuTriggerDirective {
    el;
    structureId;
    activeFilterService;
    schemaReadModelRootId;
    constructor(el, structureId, activeFilterService, schemaReadModelRootId) {
        this.el = el;
        this.structureId = structureId;
        this.activeFilterService = activeFilterService;
        this.schemaReadModelRootId = schemaReadModelRootId;
    }
    ngOnInit() {
        // this.renderer.listen(this.el.nativeElement, 'click', () => {
        // 	this.activeFilterService.open(this.schemaReadModelRootId, this.structureId);
        // });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ActiveFilterMenuTriggerDirective, deps: [{ token: i0.ElementRef }, { token: i1.StructureId }, { token: i2.ActiveFilterService }, { token: i3.SchemaReadModelRootId }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: ActiveFilterMenuTriggerDirective, selector: "[gui-active-filter-menu-trigger]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ActiveFilterMenuTriggerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[gui-active-filter-menu-trigger]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.ActiveFilterService }, { type: i3.SchemaReadModelRootId }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlci1tZW51LXRyaWdnZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9zb3VyY2Uvc3JjL2NvdW50ZXIvZmlsdGVyL2FjdGl2ZS1maWx0ZXItbWVudS10cmlnZ2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLE1BQU0sZUFBZSxDQUFDOzs7OztBQVV0RCxNQUFNLE9BQU8sZ0NBQWdDO0lBRWY7SUFDVDtJQUNBO0lBQ0E7SUFIcEIsWUFBNkIsRUFBYyxFQUN2QixXQUF3QixFQUN4QixtQkFBd0MsRUFDeEMscUJBQTRDO1FBSG5DLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDdkIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBQ2hFLENBQUM7SUFFRCxRQUFRO1FBQ1AsK0RBQStEO1FBQy9ELGdGQUFnRjtRQUNoRixNQUFNO0lBQ1AsQ0FBQzt3R0FaVyxnQ0FBZ0M7NEZBQWhDLGdDQUFnQzs7NEZBQWhDLGdDQUFnQztrQkFINUMsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUsa0NBQWtDO2lCQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9hY3RpdmUtZmlsdGVyLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3NjaGVtYS9zcmMvYXBpL2dsb2JhbC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2d1aS1hY3RpdmUtZmlsdGVyLW1lbnUtdHJpZ2dlcl0nXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZUZpbHRlck1lbnVUcmlnZ2VyRGlyZWN0aXZlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVsOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhY3RpdmVGaWx0ZXJTZXJ2aWNlOiBBY3RpdmVGaWx0ZXJTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJvb3RJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKSB7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHQvLyB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsICgpID0+IHtcblx0XHQvLyBcdHRoaXMuYWN0aXZlRmlsdGVyU2VydmljZS5vcGVuKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHQvLyB9KTtcblx0fVxuXG59XG4iXX0=