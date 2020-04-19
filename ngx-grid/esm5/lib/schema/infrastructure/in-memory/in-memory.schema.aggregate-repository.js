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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnNjaGVtYS5hZ2dyZWdhdGUtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3NjaGVtYS9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5LnNjaGVtYS5hZ2dyZWdhdGUtcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFHckYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHbEY7SUFDdUQsNkRBQXlCO0lBRS9FLDJDQUFvQiw0QkFBMEQ7UUFBOUUsWUFDQyxpQkFBTyxTQUNQO1FBRm1CLGtDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7O0lBRTlFLENBQUM7Ozs7O0lBRUQsbURBQU87Ozs7SUFBUCxVQUFRLFFBQWtCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7OztJQUVELGdEQUFJOzs7O0lBQUosVUFBSyxlQUFnQztRQUNwQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7O2dCQWJELFVBQVU7Ozs7Z0JBSEYsNEJBQTRCOztJQWtCckMsd0NBQUM7Q0FBQSxBQWZELENBQ3VELHlCQUF5QixHQWMvRTtTQWRZLGlDQUFpQzs7Ozs7O0lBRWpDLHlFQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgSW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVTdG9yZSB9IGZyb20gJy4vaW4tbWVtb3J5LnNjaGVtYS5hZ2dyZWdhdGUtc3RvcmUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgZXh0ZW5kcyBTY2hlbWFBZ2dyZWdhdGVSZXBvc2l0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluTWVtb3J5U2NoZW1hQWdncmVnYXRlU3RvcmU6IEluTWVtb3J5U2NoZW1hQWdncmVnYXRlU3RvcmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0QnlJZChzY2hlbWFJZDogU2NoZW1hSWQpOiBPcHRpb25hbDxTY2hlbWFBZ2dyZWdhdGU+IHtcblx0XHRyZXR1cm4gdGhpcy5pbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVN0b3JlLmdldEJ5SWQoc2NoZW1hSWQpO1xuXHR9XG5cblx0c2F2ZShzY2hlbWFBZ2dyZWdhdGU6IFNjaGVtYUFnZ3JlZ2F0ZSk6IHZvaWQge1xuXHRcdHRoaXMuaW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVTdG9yZS5zYXZlKHNjaGVtYUFnZ3JlZ2F0ZSk7XG5cdH1cblxufVxuIl19