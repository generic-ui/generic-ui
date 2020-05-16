/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { InMemoryListViewAggregateStore } from './in-memory.list-view.aggregate-store';
import { ListViewAggregateRepository } from '../../domain/list-view.aggregate-repository';
var InMemoryListViewAggregateRepository = /** @class */ (function (_super) {
    tslib_1.__extends(InMemoryListViewAggregateRepository, _super);
    function InMemoryListViewAggregateRepository(inMemorySchemaAggregateStore) {
        var _this = _super.call(this) || this;
        _this.inMemorySchemaAggregateStore = inMemorySchemaAggregateStore;
        return _this;
    }
    /**
     * @param {?} listViewId
     * @return {?}
     */
    InMemoryListViewAggregateRepository.prototype.getById = /**
     * @param {?} listViewId
     * @return {?}
     */
    function (listViewId) {
        return this.inMemorySchemaAggregateStore.getById(listViewId);
    };
    /**
     * @param {?} listViewAggregate
     * @return {?}
     */
    InMemoryListViewAggregateRepository.prototype.save = /**
     * @param {?} listViewAggregate
     * @return {?}
     */
    function (listViewAggregate) {
        this.inMemorySchemaAggregateStore.save(listViewAggregate);
    };
    InMemoryListViewAggregateRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InMemoryListViewAggregateRepository.ctorParameters = function () { return [
        { type: InMemoryListViewAggregateStore }
    ]; };
    return InMemoryListViewAggregateRepository;
}(ListViewAggregateRepository));
export { InMemoryListViewAggregateRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryListViewAggregateRepository.prototype.inMemorySchemaAggregateStore;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5Lmxpc3Qtdmlldy5hZ2dyZWdhdGUtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5saXN0LXZpZXcuYWdncmVnYXRlLXJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXZGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBSzFGO0lBQ3lELCtEQUEyQjtJQUVuRiw2Q0FBb0IsNEJBQTREO1FBQWhGLFlBQ0MsaUJBQU8sU0FDUDtRQUZtQixrQ0FBNEIsR0FBNUIsNEJBQTRCLENBQWdDOztJQUVoRixDQUFDOzs7OztJQUVELHFEQUFPOzs7O0lBQVAsVUFBUSxVQUFzQjtRQUM3QixPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUFFRCxrREFBSTs7OztJQUFKLFVBQUssaUJBQW9DO1FBQ3hDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMzRCxDQUFDOztnQkFiRCxVQUFVOzs7O2dCQVBGLDhCQUE4Qjs7SUFzQnZDLDBDQUFDO0NBQUEsQUFmRCxDQUN5RCwyQkFBMkIsR0FjbkY7U0FkWSxtQ0FBbUM7Ozs7OztJQUVuQywyRUFBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgSW5NZW1vcnlMaXN0Vmlld0FnZ3JlZ2F0ZVN0b3JlIH0gZnJvbSAnLi9pbi1tZW1vcnkubGlzdC12aWV3LmFnZ3JlZ2F0ZS1zdG9yZSc7XG5cbmltcG9ydCB7IExpc3RWaWV3QWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9saXN0LXZpZXcuYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9saXN0LXZpZXcuaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9kb21haW4vbGlzdC12aWV3LmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluTWVtb3J5TGlzdFZpZXdBZ2dyZWdhdGVSZXBvc2l0b3J5IGV4dGVuZHMgTGlzdFZpZXdBZ2dyZWdhdGVSZXBvc2l0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluTWVtb3J5U2NoZW1hQWdncmVnYXRlU3RvcmU6IEluTWVtb3J5TGlzdFZpZXdBZ2dyZWdhdGVTdG9yZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXRCeUlkKGxpc3RWaWV3SWQ6IExpc3RWaWV3SWQpOiBPcHRpb25hbDxMaXN0Vmlld0FnZ3JlZ2F0ZT4ge1xuXHRcdHJldHVybiB0aGlzLmluTWVtb3J5U2NoZW1hQWdncmVnYXRlU3RvcmUuZ2V0QnlJZChsaXN0Vmlld0lkKTtcblx0fVxuXG5cdHNhdmUobGlzdFZpZXdBZ2dyZWdhdGU6IExpc3RWaWV3QWdncmVnYXRlKTogdm9pZCB7XG5cdFx0dGhpcy5pbk1lbW9yeVNjaGVtYUFnZ3JlZ2F0ZVN0b3JlLnNhdmUobGlzdFZpZXdBZ2dyZWdhdGUpO1xuXHR9XG5cbn1cbiJdfQ==