import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/structure/structure-core/api/global/structure.id";
import * as i2 from "./active-filter.service";
import * as i3 from "../../../../../core/schema/api/global/schema.read-model-root-id";
export class ActiveFilterMenuTriggerDirective {
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
}
ActiveFilterMenuTriggerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ActiveFilterMenuTriggerDirective, deps: [{ token: i0.ElementRef }, { token: i1.StructureId }, { token: i2.ActiveFilterService }, { token: i3.SchemaReadModelRootId }], target: i0.ɵɵFactoryTarget.Directive });
ActiveFilterMenuTriggerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.3", type: ActiveFilterMenuTriggerDirective, selector: "[gui-active-filter-menu-trigger]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: ActiveFilterMenuTriggerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[gui-active-filter-menu-trigger]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.ActiveFilterService }, { type: i3.SchemaReadModelRootId }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlci1tZW51LXRyaWdnZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9zb3VyY2UvY291bnRlci9maWx0ZXIvYWN0aXZlLWZpbHRlci1tZW51LXRyaWdnZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsTUFBTSxlQUFlLENBQUM7Ozs7O0FBVXRELE1BQU0sT0FBTyxnQ0FBZ0M7SUFFNUMsWUFBNkIsRUFBYyxFQUN2QixXQUF3QixFQUN4QixtQkFBd0MsRUFDeEMscUJBQTRDO1FBSG5DLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDdkIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBQ2hFLENBQUM7SUFFRCxRQUFRO1FBQ1AsK0RBQStEO1FBQy9ELGdGQUFnRjtRQUNoRixNQUFNO0lBQ1AsQ0FBQzs7NkhBWlcsZ0NBQWdDO2lIQUFoQyxnQ0FBZ0M7MkZBQWhDLGdDQUFnQztrQkFINUMsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUsa0NBQWtDO2lCQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9hY3RpdmUtZmlsdGVyLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3NjaGVtYS9hcGkvZ2xvYmFsL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tndWktYWN0aXZlLWZpbHRlci1tZW51LXRyaWdnZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVGaWx0ZXJNZW51VHJpZ2dlckRpcmVjdGl2ZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbDogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWN0aXZlRmlsdGVyU2VydmljZTogQWN0aXZlRmlsdGVyU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFSZWFkTW9kZWxSb290SWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCkge1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0Ly8gdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoKSA9PiB7XG5cdFx0Ly8gXHR0aGlzLmFjdGl2ZUZpbHRlclNlcnZpY2Uub3Blbih0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0Ly8gfSk7XG5cdH1cblxufVxuIl19