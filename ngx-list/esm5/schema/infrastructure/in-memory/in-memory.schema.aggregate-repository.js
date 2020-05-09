/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { SchemaAggregateRepository } from '../../domain/schema.aggregate-repository';
import { InMemorySchemaAggregateStore } from './in-memory.schema.aggregate-store';
var InMemorySchemaAggregateRepository = /** @class */ (function (_super) {
    tslib_1.__extends(InMemorySchemaAggregateRepository, _super);
    function InMemorySchemaAggregateRepository(inMemorySchemaAggregateStore) {
        var _this = _super.call(this) || this;
        _this.inMemorySchemaAggregateStore = inMemorySchemaAggregateStore;
        return _this;
    }
    /**
     * @param {?} schemaId
     * @return {?}
     */
    InMemorySchemaAggregateRepository.prototype.getById = /**
     * @param {?} schemaId
     * @return {?}
     */
    function (schemaId) {
        return this.inMemorySchemaAggregateStore.getById(schemaId);
    };
    /**
     * @param {?} schemaAggregate
     * @return {?}
     */
    InMemorySchemaAggregateRepository.prototype.save = /**
     * @param {?} schemaAggregate
     * @return {?}
     */
    function (schemaAggregate) {
        this.inMemorySchemaAggregateStore.save(schemaAggregate);
    };
    InMemorySchemaAggregateRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InMemorySchemaAggregateRepository.ctorParameters = function () { return [
        { type: InMemorySchemaAggregateStore }
    ]; };
    return InMemorySchemaAggregateRepository;
}(SchemaAggregateRepository));
export { InMemorySchemaAggregateRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemorySchemaAggregateRepository.prototype.inMemorySchemaAggregateStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnNjaGVtYS5hZ2dyZWdhdGUtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic2NoZW1hL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9pbi1tZW1vcnkuc2NoZW1hLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUdyRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUdsRjtJQUN1RCw2REFBeUI7SUFFL0UsMkNBQW9CLDRCQUEwRDtRQUE5RSxZQUNDLGlCQUFPLFNBQ1A7UUFGbUIsa0NBQTRCLEdBQTVCLDRCQUE0QixDQUE4Qjs7SUFFOUUsQ0FBQzs7Ozs7SUFFRCxtREFBTzs7OztJQUFQLFVBQVEsUUFBa0I7UUFDekIsT0FBTyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7O0lBRUQsZ0RBQUk7Ozs7SUFBSixVQUFLLGVBQWdDO1FBQ3BDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Z0JBYkQsVUFBVTs7OztnQkFIRiw0QkFBNEI7O0lBa0JyQyx3Q0FBQztDQUFBLEFBZkQsQ0FDdUQseUJBQXlCLEdBYy9FO1NBZFksaUNBQWlDOzs7Ozs7SUFFakMseUVBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEuYWdncmVnYXRlJztcbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBJbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVN0b3JlIH0gZnJvbSAnLi9pbi1tZW1vcnkuc2NoZW1hLmFnZ3JlZ2F0ZS1zdG9yZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluTWVtb3J5U2NoZW1hQWdncmVnYXRlUmVwb3NpdG9yeSBleHRlbmRzIFNjaGVtYUFnZ3JlZ2F0ZVJlcG9zaXRvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVTdG9yZTogSW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVTdG9yZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXRCeUlkKHNjaGVtYUlkOiBTY2hlbWFJZCk6IE9wdGlvbmFsPFNjaGVtYUFnZ3JlZ2F0ZT4ge1xuXHRcdHJldHVybiB0aGlzLmluTWVtb3J5U2NoZW1hQWdncmVnYXRlU3RvcmUuZ2V0QnlJZChzY2hlbWFJZCk7XG5cdH1cblxuXHRzYXZlKHNjaGVtYUFnZ3JlZ2F0ZTogU2NoZW1hQWdncmVnYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5pbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVN0b3JlLnNhdmUoc2NoZW1hQWdncmVnYXRlKTtcblx0fVxuXG59XG4iXX0=