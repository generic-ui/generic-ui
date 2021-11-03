import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./read/field-read-model.archive";
export class FieldWarehouse {
    constructor(fieldReadModelArchive) {
        this.fieldReadModelArchive = fieldReadModelArchive;
    }
    onFields(structureId) {
        return this.fieldReadModelArchive.on(structureId);
    }
}
FieldWarehouse.ɵfac = function FieldWarehouse_Factory(t) { return new (t || FieldWarehouse)(i0.ɵɵinject(i1.FieldReadModelArchive)); };
FieldWarehouse.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FieldWarehouse, factory: FieldWarehouse.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldWarehouse, [{
        type: Injectable
    }], function () { return [{ type: i1.FieldReadModelArchive }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQud2FyZWhvdXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvZmllbGQvY29yZS9hcGkvZmllbGQud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVUzQyxNQUFNLE9BQU8sY0FBYztJQUUxQixZQUE2QixxQkFBNEM7UUFBNUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUN6RSxDQUFDO0lBRUQsUUFBUSxDQUFDLFdBQXdCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs0RUFQVyxjQUFjO29FQUFkLGNBQWMsV0FBZCxjQUFjO3VGQUFkLGNBQWM7Y0FEMUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSwgV2FyZWhvdXNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRmllbGRSZWFkTW9kZWxBcmNoaXZlIH0gZnJvbSAnLi9yZWFkL2ZpZWxkLXJlYWQtbW9kZWwuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWVsZFJlYWRNb2RlbCB9IGZyb20gJy4vcmVhZC9maWVsZC5yZWFkLW1vZGVsJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmllbGRXYXJlaG91c2UgaW1wbGVtZW50cyBXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZmllbGRSZWFkTW9kZWxBcmNoaXZlOiBGaWVsZFJlYWRNb2RlbEFyY2hpdmUpIHtcblx0fVxuXG5cdG9uRmllbGRzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8UmVhZG9ubHlBcnJheTxGaWVsZFJlYWRNb2RlbD4+IHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZFJlYWRNb2RlbEFyY2hpdmUub24oc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==