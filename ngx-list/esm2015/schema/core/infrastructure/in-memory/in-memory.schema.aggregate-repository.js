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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnNjaGVtYS5hZ2dyZWdhdGUtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic2NoZW1hL2NvcmUvaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5zY2hlbWEuYWdncmVnYXRlLXJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFHckYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFJbEYsTUFBTSxPQUFPLGlDQUFrQyxTQUFRLHlCQUF5Qjs7OztJQUUvRSxZQUFvQiw0QkFBMEQ7UUFDN0UsS0FBSyxFQUFFLENBQUM7UUFEVyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO0lBRTlFLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLFFBQWtCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxlQUFnQztRQUNwQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7OztZQWJELFVBQVU7Ozs7WUFIRiw0QkFBNEI7Ozs7Ozs7SUFNeEIseUVBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hLmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNjaGVtYUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zY2hlbWEuYWdncmVnYXRlJztcbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vLi4vYXBpL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBJbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVN0b3JlIH0gZnJvbSAnLi9pbi1tZW1vcnkuc2NoZW1hLmFnZ3JlZ2F0ZS1zdG9yZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluTWVtb3J5U2NoZW1hQWdncmVnYXRlUmVwb3NpdG9yeSBleHRlbmRzIFNjaGVtYUFnZ3JlZ2F0ZVJlcG9zaXRvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVTdG9yZTogSW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVTdG9yZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXRCeUlkKHNjaGVtYUlkOiBTY2hlbWFJZCk6IE9wdGlvbmFsPFNjaGVtYUFnZ3JlZ2F0ZT4ge1xuXHRcdHJldHVybiB0aGlzLmluTWVtb3J5U2NoZW1hQWdncmVnYXRlU3RvcmUuZ2V0QnlJZChzY2hlbWFJZCk7XG5cdH1cblxuXHRzYXZlKHNjaGVtYUFnZ3JlZ2F0ZTogU2NoZW1hQWdncmVnYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5pbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVN0b3JlLnNhdmUoc2NoZW1hQWdncmVnYXRlKTtcblx0fVxuXG59XG4iXX0=