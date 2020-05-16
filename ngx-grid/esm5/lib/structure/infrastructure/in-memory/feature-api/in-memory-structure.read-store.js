/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { InMemoryStructureStore } from '../in-memory.structure.store';
import { StructureReadModelRootConverter } from '../../../domain-api/read/structure.read-model-root-converter';
var InMemoryStructureReadStore = /** @class */ (function (_super) {
    tslib_1.__extends(InMemoryStructureReadStore, _super);
    function InMemoryStructureReadStore(inMemoryProjectStore, structureConverter) {
        var _this = _super.call(this, inMemoryProjectStore) || this;
        _this.inMemoryProjectStore = inMemoryProjectStore;
        _this.structureConverter = structureConverter;
        return _this;
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    InMemoryStructureReadStore.prototype.toReadModel = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        return this.structureConverter.convert(aggregate);
    };
    InMemoryStructureReadStore.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InMemoryStructureReadStore.ctorParameters = function () { return [
        { type: InMemoryStructureStore },
        { type: StructureReadModelRootConverter }
    ]; };
    return InMemoryStructureReadStore;
}(InMemoryReadModelStore));
export { InMemoryStructureReadStore };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureReadStore.prototype.inMemoryProjectStore;
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureReadStore.prototype.structureConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LXN0cnVjdHVyZS5yZWFkLXN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9mZWF0dXJlLWFwaS9pbi1tZW1vcnktc3RydWN0dXJlLnJlYWQtc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSTVELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBSy9HO0lBQ2dELHNEQUc1QjtJQUVuQixvQ0FBb0Isb0JBQTRDLEVBQ3JELGtCQUFtRDtRQUQ5RCxZQUVDLGtCQUFNLG9CQUFvQixDQUFDLFNBQzNCO1FBSG1CLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBd0I7UUFDckQsd0JBQWtCLEdBQWxCLGtCQUFrQixDQUFpQzs7SUFFOUQsQ0FBQzs7Ozs7SUFFRCxnREFBVzs7OztJQUFYLFVBQVksU0FBNkI7UUFDeEMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O2dCQWJELFVBQVU7Ozs7Z0JBTkYsc0JBQXNCO2dCQUN0QiwrQkFBK0I7O0lBb0J4QyxpQ0FBQztDQUFBLEFBZkQsQ0FDZ0Qsc0JBQXNCLEdBY3JFO1NBZFksMEJBQTBCOzs7Ozs7SUFLMUIsMERBQW9EOzs7OztJQUM3RCx3REFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEluTWVtb3J5UmVhZE1vZGVsU3RvcmUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcbmltcG9ydCB7IEluTWVtb3J5U3RydWN0dXJlU3RvcmUgfSBmcm9tICcuLi9pbi1tZW1vcnkuc3RydWN0dXJlLnN0b3JlJztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmUgZXh0ZW5kcyBJbk1lbW9yeVJlYWRNb2RlbFN0b3JlPFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCxcblx0U3RydWN0dXJlUmVhZE1vZGVsUm9vdCxcblx0U3RydWN0dXJlSWQsXG5cdFN0cnVjdHVyZUFnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5NZW1vcnlQcm9qZWN0U3RvcmU6IEluTWVtb3J5U3RydWN0dXJlU3RvcmUsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQ29udmVydGVyOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290Q29udmVydGVyKSB7XG5cdFx0c3VwZXIoaW5NZW1vcnlQcm9qZWN0U3RvcmUpO1xuXHR9XG5cblx0dG9SZWFkTW9kZWwoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUpOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVDb252ZXJ0ZXIuY29udmVydChhZ2dyZWdhdGUpO1xuXHR9XG5cbn1cbiJdfQ==