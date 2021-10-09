/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { StructureAggregateRepository } from '../../../domain/structure-aggregate.repository';
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
    InMemoryStructureAggregateRepository.prototype.findById = /**
     * @param {?} aggregateId
     * @return {?}
     */
    function (aggregateId) {
        return this.inMemoryStructureAggregateStore.findById(aggregateId);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0cnVjdHVyZS1hZ2dyZWdhdGUucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2RvbWFpbi9pbi1tZW1vcnkuc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUc5RixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUl4RjtJQUMwRCxnRUFBNEI7SUFFckYsOENBQW9CLCtCQUFnRTtRQUFwRixZQUNDLGlCQUFPLFNBQ1A7UUFGbUIscUNBQStCLEdBQS9CLCtCQUErQixDQUFpQzs7SUFFcEYsQ0FBQzs7Ozs7SUFFRCx1REFBUTs7OztJQUFSLFVBQVMsV0FBd0I7UUFDaEMsT0FBTyxJQUFJLENBQUMsK0JBQStCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7O0lBRUQsbURBQUk7Ozs7SUFBSixVQUFLLFNBQTZCO1FBQ2pDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Z0JBYkQsVUFBVTs7OztnQkFKRiwrQkFBK0I7O0lBbUJ4QywyQ0FBQztDQUFBLEFBZkQsQ0FDMEQsNEJBQTRCLEdBY3JGO1NBZFksb0NBQW9DOzs7Ozs7SUFFcEMsK0VBQXdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuaW1wb3J0IHsgSW5NZW1vcnlTdHJ1Y3R1cmVBZ2dyZWdhdGVTdG9yZSB9IGZyb20gJy4vaW4tbWVtb3J5LnN0cnVjdHVyZS5hZ2dyZWdhdGUtc3RvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9hcGkvc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IGV4dGVuZHMgU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbk1lbW9yeVN0cnVjdHVyZUFnZ3JlZ2F0ZVN0b3JlOiBJbk1lbW9yeVN0cnVjdHVyZUFnZ3JlZ2F0ZVN0b3JlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGZpbmRCeUlkKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCk6IE9wdGlvbmFsPFN0cnVjdHVyZUFnZ3JlZ2F0ZT4ge1xuXHRcdHJldHVybiB0aGlzLmluTWVtb3J5U3RydWN0dXJlQWdncmVnYXRlU3RvcmUuZmluZEJ5SWQoYWdncmVnYXRlSWQpO1xuXHR9XG5cblx0c2F2ZShhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSk6IHZvaWQge1xuXHRcdHRoaXMuaW5NZW1vcnlTdHJ1Y3R1cmVBZ2dyZWdhdGVTdG9yZS5zYXZlKGFnZ3JlZ2F0ZSk7XG5cdH1cblxufVxuIl19