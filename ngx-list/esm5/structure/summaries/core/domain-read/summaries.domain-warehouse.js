/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SummariesEnabledArchive } from '../domain/enabled/summaries-enabled-archive.service';
import { SummariesWarehouse } from '../api/summaries.warehouse';
import { Injectable } from '@angular/core';
var SummariesDomainWarehouse = /** @class */ (function (_super) {
    tslib_1.__extends(SummariesDomainWarehouse, _super);
    function SummariesDomainWarehouse(structureSummariesRepository) {
        var _this = _super.call(this) || this;
        _this.structureSummariesRepository = structureSummariesRepository;
        return _this;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    SummariesDomainWarehouse.prototype.onSummariesEnabled = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureSummariesRepository.on(structureId);
    };
    SummariesDomainWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SummariesDomainWarehouse.ctorParameters = function () { return [
        { type: SummariesEnabledArchive }
    ]; };
    return SummariesDomainWarehouse;
}(SummariesWarehouse));
export { SummariesDomainWarehouse };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SummariesDomainWarehouse.prototype.structureSummariesRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmRvbWFpbi13YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9kb21haW4tcmVhZC9zdW1tYXJpZXMuZG9tYWluLXdhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBRTlGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0M7SUFDOEMsb0RBQWtCO0lBRS9ELGtDQUFvQiw0QkFBcUQ7UUFBekUsWUFDQyxpQkFBTyxTQUNQO1FBRm1CLGtDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBeUI7O0lBRXpFLENBQUM7Ozs7O0lBRUQscURBQWtCOzs7O0lBQWxCLFVBQW1CLFdBQXdCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxRCxDQUFDOztnQkFURCxVQUFVOzs7O2dCQU5GLHVCQUF1Qjs7SUFpQmhDLCtCQUFDO0NBQUEsQUFYRCxDQUM4QyxrQkFBa0IsR0FVL0Q7U0FWWSx3QkFBd0I7Ozs7OztJQUV4QixnRUFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdW1tYXJpZXNFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4uL2RvbWFpbi9lbmFibGVkL3N1bW1hcmllcy1lbmFibGVkLWFyY2hpdmUuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdW1tYXJpZXNXYXJlaG91c2UgfSBmcm9tICcuLi9hcGkvc3VtbWFyaWVzLndhcmVob3VzZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN1bW1hcmllc0RvbWFpbldhcmVob3VzZSBleHRlbmRzIFN1bW1hcmllc1dhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVTdW1tYXJpZXNSZXBvc2l0b3J5OiBTdW1tYXJpZXNFbmFibGVkQXJjaGl2ZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRvblN1bW1hcmllc0VuYWJsZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlU3VtbWFyaWVzUmVwb3NpdG9yeS5vbihzdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19