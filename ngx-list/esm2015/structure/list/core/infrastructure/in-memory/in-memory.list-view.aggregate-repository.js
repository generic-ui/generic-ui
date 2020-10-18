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
    getById(listViewId) {
        return this.inMemorySchemaAggregateStore.getById(listViewId);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5Lmxpc3Qtdmlldy5hZ2dyZWdhdGUtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvY29yZS9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5Lmxpc3Qtdmlldy5hZ2dyZWdhdGUtcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUV2RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQU0xRixNQUFNLE9BQU8sbUNBQW9DLFNBQVEsMkJBQTJCOzs7O0lBRW5GLFlBQW9CLDRCQUE0RDtRQUMvRSxLQUFLLEVBQUUsQ0FBQztRQURXLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBZ0M7SUFFaEYsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsVUFBc0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLGlCQUFvQztRQUN4QyxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDM0QsQ0FBQzs7O1lBYkQsVUFBVTs7OztZQVBGLDhCQUE4Qjs7Ozs7OztJQVUxQiwyRUFBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgSW5NZW1vcnlMaXN0Vmlld0FnZ3JlZ2F0ZVN0b3JlIH0gZnJvbSAnLi9pbi1tZW1vcnkubGlzdC12aWV3LmFnZ3JlZ2F0ZS1zdG9yZSc7XG5cbmltcG9ydCB7IExpc3RWaWV3QWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9saXN0LXZpZXcuYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uLy4uL2FwaS9saXN0LXZpZXcuaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9kb21haW4vbGlzdC12aWV3LmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluTWVtb3J5TGlzdFZpZXdBZ2dyZWdhdGVSZXBvc2l0b3J5IGV4dGVuZHMgTGlzdFZpZXdBZ2dyZWdhdGVSZXBvc2l0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluTWVtb3J5U2NoZW1hQWdncmVnYXRlU3RvcmU6IEluTWVtb3J5TGlzdFZpZXdBZ2dyZWdhdGVTdG9yZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXRCeUlkKGxpc3RWaWV3SWQ6IExpc3RWaWV3SWQpOiBPcHRpb25hbDxMaXN0Vmlld0FnZ3JlZ2F0ZT4ge1xuXHRcdHJldHVybiB0aGlzLmluTWVtb3J5U2NoZW1hQWdncmVnYXRlU3RvcmUuZ2V0QnlJZChsaXN0Vmlld0lkKTtcblx0fVxuXG5cdHNhdmUobGlzdFZpZXdBZ2dyZWdhdGU6IExpc3RWaWV3QWdncmVnYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5pbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVN0b3JlLnNhdmUobGlzdFZpZXdBZ2dyZWdhdGUpO1xuXHR9XG5cbn1cbiJdfQ==