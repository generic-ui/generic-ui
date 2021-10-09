/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SummariesEnabledArchive } from '../domain/enabled/summaries-enabled-archive.service';
import { SummariesWarehouse } from '../api/summaries.warehouse';
import { Injectable } from '@angular/core';
export class SummariesDomainWarehouse extends SummariesWarehouse {
    /**
     * @param {?} structureSummariesRepository
     */
    constructor(structureSummariesRepository) {
        super();
        this.structureSummariesRepository = structureSummariesRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onSummariesEnabled(structureId) {
        return this.structureSummariesRepository.on(structureId);
    }
}
SummariesDomainWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SummariesDomainWarehouse.ctorParameters = () => [
    { type: SummariesEnabledArchive }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SummariesDomainWarehouse.prototype.structureSummariesRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmRvbWFpbi13YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9kb21haW4tcmVhZC9zdW1tYXJpZXMuZG9tYWluLXdhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFFOUYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsa0JBQWtCOzs7O0lBRS9ELFlBQW9CLDRCQUFxRDtRQUN4RSxLQUFLLEVBQUUsQ0FBQztRQURXLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBeUI7SUFFekUsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxXQUF3QjtRQUMxQyxPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7O1lBVEQsVUFBVTs7OztZQU5GLHVCQUF1Qjs7Ozs7OztJQVNuQixnRUFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdW1tYXJpZXNFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4uL2RvbWFpbi9lbmFibGVkL3N1bW1hcmllcy1lbmFibGVkLWFyY2hpdmUuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdW1tYXJpZXNXYXJlaG91c2UgfSBmcm9tICcuLi9hcGkvc3VtbWFyaWVzLndhcmVob3VzZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN1bW1hcmllc0RvbWFpbldhcmVob3VzZSBleHRlbmRzIFN1bW1hcmllc1dhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVTdW1tYXJpZXNSZXBvc2l0b3J5OiBTdW1tYXJpZXNFbmFibGVkQXJjaGl2ZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRvblN1bW1hcmllc0VuYWJsZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlU3VtbWFyaWVzUmVwb3NpdG9yeS5vbihzdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19