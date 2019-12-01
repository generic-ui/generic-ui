/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { StructureAggregateRepository } from '../../../../domain/structure/command/structure-aggregate.repository';
import { InMemoryStructureAggregateStore } from './in-memory.structure.aggregate-store';
var InMemoryStructureAggregateRepository = /** @class */ (function (_super) {
    tslib_1.__extends(InMemoryStructureAggregateRepository, _super);
    function InMemoryStructureAggregateRepository(inMemoryStructureAggregateStore) {
        var _this = _super.call(this) || this;
        _this.inMemoryStructureAggregateStore = inMemoryStructureAggregateStore;
        return _this;
    }
    /**
     * @param {?} aggregateId
     * @return {?}
     */
    InMemoryStructureAggregateRepository.prototype.getById = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        /** @type {?} */
        var structure = this.inMemoryStructureAggregateStore.getById(aggregateId);
        structure.clearEvents();
        return structure;
    };
    /**
     * @param {?} aggregate
     * @return {?}
     */
    InMemoryStructureAggregateRepository.prototype.save = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        this.inMemoryStructureAggregateStore.save(aggregate);
    };
    InMemoryStructureAggregateRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InMemoryStructureAggregateRepository.ctorParameters = function () { return [
        { type: InMemoryStructureAggregateStore }
    ]; };
    return InMemoryStructureAggregateRepository;
}(StructureAggregateRepository));
export { InMemoryStructureAggregateRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureAggregateRepository.prototype.inMemoryStructureAggregateStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0cnVjdHVyZS1hZ2dyZWdhdGUucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvc3RydWN0dXJlL2NvbW1hZC9pbi1tZW1vcnkuc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUduSCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUd4RjtJQUMwRCxnRUFBNEI7SUFFckYsOENBQW9CLCtCQUFnRTtRQUFwRixZQUNDLGlCQUFPLFNBQ1A7UUFGbUIscUNBQStCLEdBQS9CLCtCQUErQixDQUFpQzs7SUFFcEYsQ0FBQzs7Ozs7SUFFRCxzREFBTzs7OztJQUFQLFVBQVEsV0FBd0I7O1lBQ3pCLFNBQVMsR0FBRyxJQUFJLENBQUMsK0JBQStCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUUzRSxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFeEIsT0FBTyxTQUFTLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCxtREFBSTs7OztJQUFKLFVBQUssU0FBNkI7UUFDakMsSUFBSSxDQUFDLCtCQUErQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0RCxDQUFDOztnQkFqQkQsVUFBVTs7OztnQkFIRiwrQkFBK0I7O0lBc0J4QywyQ0FBQztDQUFBLEFBbkJELENBQzBELDRCQUE0QixHQWtCckY7U0FsQlksb0NBQW9DOzs7Ozs7SUFFcEMsK0VBQXdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuaW1wb3J0IHsgSW5NZW1vcnlTdHJ1Y3R1cmVBZ2dyZWdhdGVTdG9yZSB9IGZyb20gJy4vaW4tbWVtb3J5LnN0cnVjdHVyZS5hZ2dyZWdhdGUtc3RvcmUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbk1lbW9yeVN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgZXh0ZW5kcyBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluTWVtb3J5U3RydWN0dXJlQWdncmVnYXRlU3RvcmU6IEluTWVtb3J5U3RydWN0dXJlQWdncmVnYXRlU3RvcmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0QnlJZChhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUge1xuXHRcdGNvbnN0IHN0cnVjdHVyZSA9IHRoaXMuaW5NZW1vcnlTdHJ1Y3R1cmVBZ2dyZWdhdGVTdG9yZS5nZXRCeUlkKGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdHN0cnVjdHVyZS5jbGVhckV2ZW50cygpO1xuXG5cdFx0cmV0dXJuIHN0cnVjdHVyZTtcblx0fVxuXG5cdHNhdmUoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUpOiB2b2lkIHtcblx0XHR0aGlzLmluTWVtb3J5U3RydWN0dXJlQWdncmVnYXRlU3RvcmUuc2F2ZShhZ2dyZWdhdGUpO1xuXHR9XG5cbn1cbiJdfQ==