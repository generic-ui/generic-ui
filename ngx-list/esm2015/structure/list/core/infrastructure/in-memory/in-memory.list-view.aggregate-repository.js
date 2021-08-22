/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { InMemoryListViewAggregateStore } from './in-memory.list-view.aggregate-store';
import { ListViewAggregateRepository } from '../../domain/list-view.aggregate-repository';
export class InMemoryListViewAggregateRepository extends ListViewAggregateRepository {
    /**
     * @param {?} inMemorySchemaAggregateStore
     */
    constructor(inMemorySchemaAggregateStore) {
        super();
        this.inMemorySchemaAggregateStore = inMemorySchemaAggregateStore;
    }
    /**
     * @param {?} listViewId
     * @return {?}
     */
    findById(listViewId) {
        return this.inMemorySchemaAggregateStore.findById(listViewId);
    }
    /**
     * @param {?} listViewAggregate
     * @return {?}
     */
    save(listViewAggregate) {
        this.inMemorySchemaAggregateStore.save(listViewAggregate);
    }
}
InMemoryListViewAggregateRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InMemoryListViewAggregateRepository.ctorParameters = () => [
    { type: InMemoryListViewAggregateStore }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryListViewAggregateRepository.prototype.inMemorySchemaAggregateStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5Lmxpc3Qtdmlldy5hZ2dyZWdhdGUtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvY29yZS9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5Lmxpc3Qtdmlldy5hZ2dyZWdhdGUtcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUV2RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQU0xRixNQUFNLE9BQU8sbUNBQW9DLFNBQVEsMkJBQTJCOzs7O0lBRW5GLFlBQW9CLDRCQUE0RDtRQUMvRSxLQUFLLEVBQUUsQ0FBQztRQURXLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBZ0M7SUFFaEYsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsVUFBc0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsNEJBQTRCLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLGlCQUFvQztRQUN4QyxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDM0QsQ0FBQzs7O1lBYkQsVUFBVTs7OztZQVBGLDhCQUE4Qjs7Ozs7OztJQVUxQiwyRUFBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgSW5NZW1vcnlMaXN0Vmlld0FnZ3JlZ2F0ZVN0b3JlIH0gZnJvbSAnLi9pbi1tZW1vcnkubGlzdC12aWV3LmFnZ3JlZ2F0ZS1zdG9yZSc7XG5cbmltcG9ydCB7IExpc3RWaWV3QWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9saXN0LXZpZXcuYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9saXN0LXZpZXcuaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9kb21haW4vbGlzdC12aWV3LmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluTWVtb3J5TGlzdFZpZXdBZ2dyZWdhdGVSZXBvc2l0b3J5IGV4dGVuZHMgTGlzdFZpZXdBZ2dyZWdhdGVSZXBvc2l0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluTWVtb3J5U2NoZW1hQWdncmVnYXRlU3RvcmU6IEluTWVtb3J5TGlzdFZpZXdBZ2dyZWdhdGVTdG9yZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRmaW5kQnlJZChsaXN0Vmlld0lkOiBMaXN0Vmlld0lkKTogT3B0aW9uYWw8TGlzdFZpZXdBZ2dyZWdhdGU+IHtcblx0XHRyZXR1cm4gdGhpcy5pbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVN0b3JlLmZpbmRCeUlkKGxpc3RWaWV3SWQpO1xuXHR9XG5cblx0c2F2ZShsaXN0Vmlld0FnZ3JlZ2F0ZTogTGlzdFZpZXdBZ2dyZWdhdGUpOiB2b2lkIHtcblx0XHR0aGlzLmluTWVtb3J5U2NoZW1hQWdncmVnYXRlU3RvcmUuc2F2ZShsaXN0Vmlld0FnZ3JlZ2F0ZSk7XG5cdH1cblxufVxuIl19