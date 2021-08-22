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
    InMemoryListViewAggregateRepository.prototype.findById = /**
     * @param {?} listViewId
     * @return {?}
     */
    function (listViewId) {
        return this.inMemorySchemaAggregateStore.findById(listViewId);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5Lmxpc3Qtdmlldy5hZ2dyZWdhdGUtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvY29yZS9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5Lmxpc3Qtdmlldy5hZ2dyZWdhdGUtcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFdkYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFLMUY7SUFDeUQsK0RBQTJCO0lBRW5GLDZDQUFvQiw0QkFBNEQ7UUFBaEYsWUFDQyxpQkFBTyxTQUNQO1FBRm1CLGtDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBZ0M7O0lBRWhGLENBQUM7Ozs7O0lBRUQsc0RBQVE7Ozs7SUFBUixVQUFTLFVBQXNCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7OztJQUVELGtEQUFJOzs7O0lBQUosVUFBSyxpQkFBb0M7UUFDeEMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzNELENBQUM7O2dCQWJELFVBQVU7Ozs7Z0JBUEYsOEJBQThCOztJQXNCdkMsMENBQUM7Q0FBQSxBQWZELENBQ3lELDJCQUEyQixHQWNuRjtTQWRZLG1DQUFtQzs7Ozs7O0lBRW5DLDJFQUFvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBJbk1lbW9yeUxpc3RWaWV3QWdncmVnYXRlU3RvcmUgfSBmcm9tICcuL2luLW1lbW9yeS5saXN0LXZpZXcuYWdncmVnYXRlLXN0b3JlJztcblxuaW1wb3J0IHsgTGlzdFZpZXdBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL2xpc3Qtdmlldy5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBMaXN0Vmlld0lkIH0gZnJvbSAnLi4vLi4vZG9tYWluL2xpc3Qtdmlldy5pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld0FnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9saXN0LXZpZXcuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlMaXN0Vmlld0FnZ3JlZ2F0ZVJlcG9zaXRvcnkgZXh0ZW5kcyBMaXN0Vmlld0FnZ3JlZ2F0ZVJlcG9zaXRvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVTdG9yZTogSW5NZW1vcnlMaXN0Vmlld0FnZ3JlZ2F0ZVN0b3JlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGZpbmRCeUlkKGxpc3RWaWV3SWQ6IExpc3RWaWV3SWQpOiBPcHRpb25hbDxMaXN0Vmlld0FnZ3JlZ2F0ZT4ge1xuXHRcdHJldHVybiB0aGlzLmluTWVtb3J5U2NoZW1hQWdncmVnYXRlU3RvcmUuZmluZEJ5SWQobGlzdFZpZXdJZCk7XG5cdH1cblxuXHRzYXZlKGxpc3RWaWV3QWdncmVnYXRlOiBMaXN0Vmlld0FnZ3JlZ2F0ZSk6IHZvaWQge1xuXHRcdHRoaXMuaW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVTdG9yZS5zYXZlKGxpc3RWaWV3QWdncmVnYXRlKTtcblx0fVxuXG59XG4iXX0=