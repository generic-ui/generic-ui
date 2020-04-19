/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SchemaAggregateRepository } from '../../domain/schema.aggregate-repository';
import { InMemorySchemaAggregateStore } from './in-memory.schema.aggregate-store';
export class InMemorySchemaAggregateRepository extends SchemaAggregateRepository {
    /**
     * @param {?} inMemorySchemaAggregateStore
     */
    constructor(inMemorySchemaAggregateStore) {
        super();
        this.inMemorySchemaAggregateStore = inMemorySchemaAggregateStore;
    }
    /**
     * @param {?} schemaId
     * @return {?}
     */
    getById(schemaId) {
        return this.inMemorySchemaAggregateStore.getById(schemaId);
    }
    /**
     * @param {?} schemaAggregate
     * @return {?}
     */
    save(schemaAggregate) {
        this.inMemorySchemaAggregateStore.save(schemaAggregate);
    }
}
InMemorySchemaAggregateRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InMemorySchemaAggregateRepository.ctorParameters = () => [
    { type: InMemorySchemaAggregateStore }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemorySchemaAggregateRepository.prototype.inMemorySchemaAggregateStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnNjaGVtYS5hZ2dyZWdhdGUtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3NjaGVtYS9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5LnNjaGVtYS5hZ2dyZWdhdGUtcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUdyRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUlsRixNQUFNLE9BQU8saUNBQWtDLFNBQVEseUJBQXlCOzs7O0lBRS9FLFlBQW9CLDRCQUEwRDtRQUM3RSxLQUFLLEVBQUUsQ0FBQztRQURXLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7SUFFOUUsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsUUFBa0I7UUFDekIsT0FBTyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLGVBQWdDO1FBQ3BDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7O1lBYkQsVUFBVTs7OztZQUhGLDRCQUE0Qjs7Ozs7OztJQU14Qix5RUFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEuYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hLmlkJztcbmltcG9ydCB7IEluTWVtb3J5U2NoZW1hQWdncmVnYXRlU3RvcmUgfSBmcm9tICcuL2luLW1lbW9yeS5zY2hlbWEuYWdncmVnYXRlLXN0b3JlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVSZXBvc2l0b3J5IGV4dGVuZHMgU2NoZW1hQWdncmVnYXRlUmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVN0b3JlOiBJbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVN0b3JlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldEJ5SWQoc2NoZW1hSWQ6IFNjaGVtYUlkKTogT3B0aW9uYWw8U2NoZW1hQWdncmVnYXRlPiB7XG5cdFx0cmV0dXJuIHRoaXMuaW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVTdG9yZS5nZXRCeUlkKHNjaGVtYUlkKTtcblx0fVxuXG5cdHNhdmUoc2NoZW1hQWdncmVnYXRlOiBTY2hlbWFBZ2dyZWdhdGUpOiB2b2lkIHtcblx0XHR0aGlzLmluTWVtb3J5U2NoZW1hQWdncmVnYXRlU3RvcmUuc2F2ZShzY2hlbWFBZ2dyZWdhdGUpO1xuXHR9XG5cbn1cbiJdfQ==