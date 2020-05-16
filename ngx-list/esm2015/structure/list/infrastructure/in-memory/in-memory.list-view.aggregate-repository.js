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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5Lmxpc3Qtdmlldy5hZ2dyZWdhdGUtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5saXN0LXZpZXcuYWdncmVnYXRlLXJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFdkYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFNMUYsTUFBTSxPQUFPLG1DQUFvQyxTQUFRLDJCQUEyQjs7OztJQUVuRixZQUFvQiw0QkFBNEQ7UUFDL0UsS0FBSyxFQUFFLENBQUM7UUFEVyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQWdDO0lBRWhGLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLFVBQXNCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxpQkFBb0M7UUFDeEMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzNELENBQUM7OztZQWJELFVBQVU7Ozs7WUFQRiw4QkFBOEI7Ozs7Ozs7SUFVMUIsMkVBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEluTWVtb3J5TGlzdFZpZXdBZ2dyZWdhdGVTdG9yZSB9IGZyb20gJy4vaW4tbWVtb3J5Lmxpc3Qtdmlldy5hZ2dyZWdhdGUtc3RvcmUnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0FnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vbGlzdC12aWV3LmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IExpc3RWaWV3SWQgfSBmcm9tICcuLi8uLi9kb21haW4vbGlzdC12aWV3LmlkJztcbmltcG9ydCB7IExpc3RWaWV3QWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vZG9tYWluL2xpc3Qtdmlldy5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbk1lbW9yeUxpc3RWaWV3QWdncmVnYXRlUmVwb3NpdG9yeSBleHRlbmRzIExpc3RWaWV3QWdncmVnYXRlUmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVN0b3JlOiBJbk1lbW9yeUxpc3RWaWV3QWdncmVnYXRlU3RvcmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0QnlJZChsaXN0Vmlld0lkOiBMaXN0Vmlld0lkKTogT3B0aW9uYWw8TGlzdFZpZXdBZ2dyZWdhdGU+IHtcblx0XHRyZXR1cm4gdGhpcy5pbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVN0b3JlLmdldEJ5SWQobGlzdFZpZXdJZCk7XG5cdH1cblxuXHRzYXZlKGxpc3RWaWV3QWdncmVnYXRlOiBMaXN0Vmlld0FnZ3JlZ2F0ZSk6IHZvaWQge1xuXHRcdHRoaXMuaW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVTdG9yZS5zYXZlKGxpc3RWaWV3QWdncmVnYXRlKTtcblx0fVxuXG59XG4iXX0=