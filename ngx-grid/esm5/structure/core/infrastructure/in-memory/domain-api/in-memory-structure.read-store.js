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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LXN0cnVjdHVyZS5yZWFkLXN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvZG9tYWluLWFwaS9pbi1tZW1vcnktc3RydWN0dXJlLnJlYWQtc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSTVELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBSy9HO0lBQ2dELHNEQUc1QjtJQUVuQixvQ0FBb0Isb0JBQTRDLEVBQ3JELGtCQUFtRDtRQUQ5RCxZQUVDLGtCQUFNLG9CQUFvQixDQUFDLFNBQzNCO1FBSG1CLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBd0I7UUFDckQsd0JBQWtCLEdBQWxCLGtCQUFrQixDQUFpQzs7SUFFOUQsQ0FBQzs7Ozs7SUFFRCxnREFBVzs7OztJQUFYLFVBQVksU0FBNkI7UUFDeEMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O2dCQWJELFVBQVU7Ozs7Z0JBTkYsc0JBQXNCO2dCQUN0QiwrQkFBK0I7O0lBb0J4QyxpQ0FBQztDQUFBLEFBZkQsQ0FDZ0Qsc0JBQXNCLEdBY3JFO1NBZFksMEJBQTBCOzs7Ozs7SUFLMUIsMERBQW9EOzs7OztJQUM3RCx3REFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEluTWVtb3J5UmVhZE1vZGVsU3RvcmUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgSW5NZW1vcnlTdHJ1Y3R1cmVTdG9yZSB9IGZyb20gJy4uL2luLW1lbW9yeS5zdHJ1Y3R1cmUuc3RvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdENvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290LWNvbnZlcnRlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbk1lbW9yeVN0cnVjdHVyZVJlYWRTdG9yZSBleHRlbmRzIEluTWVtb3J5UmVhZE1vZGVsU3RvcmU8U3RydWN0dXJlUmVhZE1vZGVsUm9vdElkLFxuXHRTdHJ1Y3R1cmVSZWFkTW9kZWxSb290LFxuXHRTdHJ1Y3R1cmVJZCxcblx0U3RydWN0dXJlQWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbk1lbW9yeVByb2plY3RTdG9yZTogSW5NZW1vcnlTdHJ1Y3R1cmVTdG9yZSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb252ZXJ0ZXI6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RDb252ZXJ0ZXIpIHtcblx0XHRzdXBlcihpbk1lbW9yeVByb2plY3RTdG9yZSk7XG5cdH1cblxuXHR0b1JlYWRNb2RlbChhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSk6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Qge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZUNvbnZlcnRlci5jb252ZXJ0KGFnZ3JlZ2F0ZSk7XG5cdH1cblxufVxuIl19