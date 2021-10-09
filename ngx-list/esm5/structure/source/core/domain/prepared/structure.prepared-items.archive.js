/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AggregateArchive } from '@generic-ui/hermes';
var StructurePreparedItemsArchive = /** @class */ (function (_super) {
    tslib_1.__extends(StructurePreparedItemsArchive, _super);
    function StructurePreparedItemsArchive() {
        return _super.call(this, StructurePreparedItemsArchive.default) || this;
    }
    /**
     * @deprecated
     */
    /**
     * @deprecated
     * @param {?} structureId
     * @return {?}
     */
    StructurePreparedItemsArchive.prototype.getPreparedItems = /**
     * @deprecated
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.get(structureId).getValueOrNullOrThrowError();
    };
    StructurePreparedItemsArchive.default = [];
    StructurePreparedItemsArchive.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructurePreparedItemsArchive.ctorParameters = function () { return []; };
    return StructurePreparedItemsArchive;
}(AggregateArchive));
export { StructurePreparedItemsArchive };
if (false) {
    /** @type {?} */
    StructurePreparedItemsArchive.default;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmFyY2hpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmFyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3REO0lBQ21ELHlEQUFpRDtJQUluRztlQUNDLGtCQUFNLDZCQUE2QixDQUFDLE9BQU8sQ0FBQztJQUM3QyxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNILHdEQUFnQjs7Ozs7SUFBaEIsVUFBaUIsV0FBd0I7UUFDeEMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLDBCQUEwQixFQUFFLENBQUM7SUFDM0QsQ0FBQztJQVhlLHFDQUFPLEdBQW9DLEVBQUUsQ0FBQzs7Z0JBSDlELFVBQVU7Ozs7SUFnQlgsb0NBQUM7Q0FBQSxBQWhCRCxDQUNtRCxnQkFBZ0IsR0FlbEU7U0FmWSw2QkFBNkI7OztJQUV6QyxzQ0FBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVBcmNoaXZlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUHJlcGFyZWRJdGVtc0FyY2hpdmUgZXh0ZW5kcyBBZ2dyZWdhdGVBcmNoaXZlPFJlYWRvbmx5QXJyYXk8T3JpZ2luSXRlbUVudGl0eT4+IHtcblxuXHRzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdDogUmVhZG9ubHlBcnJheTxPcmlnaW5JdGVtRW50aXR5PiA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFN0cnVjdHVyZVByZXBhcmVkSXRlbXNBcmNoaXZlLmRlZmF1bHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBkZXByZWNhdGVkXG5cdCAqL1xuXHRnZXRQcmVwYXJlZEl0ZW1zKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IFJlYWRvbmx5QXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLmdldChzdHJ1Y3R1cmVJZCkuZ2V0VmFsdWVPck51bGxPclRocm93RXJyb3IoKTtcblx0fVxuXG59XG4iXX0=