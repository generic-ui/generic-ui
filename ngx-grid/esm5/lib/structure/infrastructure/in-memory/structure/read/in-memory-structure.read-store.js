/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { InMemoryStructureStore } from '../in-memory.structure.store';
import { StructureConverter } from '../../../../domain/structure/structure.converter';
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
        { type: StructureConverter }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LXN0cnVjdHVyZS5yZWFkLXN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9zdHJ1Y3R1cmUvcmVhZC9pbi1tZW1vcnktc3RydWN0dXJlLnJlYWQtc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSTVELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBR3RGO0lBQ2dELHNEQUFxRDtJQUVwRyxvQ0FBb0Isb0JBQTRDLEVBQ3JELGtCQUFzQztRQURqRCxZQUVDLGtCQUFNLG9CQUFvQixDQUFDLFNBQzNCO1FBSG1CLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBd0I7UUFDckQsd0JBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjs7SUFFakQsQ0FBQzs7Ozs7SUFFRCxnREFBVzs7OztJQUFYLFVBQVksU0FBNkI7UUFDeEMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O2dCQVZELFVBQVU7Ozs7Z0JBSkYsc0JBQXNCO2dCQUN0QixrQkFBa0I7O0lBZTNCLGlDQUFDO0NBQUEsQUFaRCxDQUNnRCxzQkFBc0IsR0FXckU7U0FYWSwwQkFBMEI7Ozs7OztJQUUxQiwwREFBb0Q7Ozs7O0lBQzdELHdEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5NZW1vcnlSZWFkTW9kZWxTdG9yZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZSB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zdHJ1Y3R1cmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgSW5NZW1vcnlTdHJ1Y3R1cmVTdG9yZSB9IGZyb20gJy4uL2luLW1lbW9yeS5zdHJ1Y3R1cmUuc3RvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9zdHJ1Y3R1cmUuY29udmVydGVyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmUgZXh0ZW5kcyBJbk1lbW9yeVJlYWRNb2RlbFN0b3JlPFN0cnVjdHVyZSwgU3RydWN0dXJlQWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbk1lbW9yeVByb2plY3RTdG9yZTogSW5NZW1vcnlTdHJ1Y3R1cmVTdG9yZSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb252ZXJ0ZXI6IFN0cnVjdHVyZUNvbnZlcnRlcikge1xuXHRcdHN1cGVyKGluTWVtb3J5UHJvamVjdFN0b3JlKTtcblx0fVxuXG5cdHRvUmVhZE1vZGVsKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlKTogU3RydWN0dXJlIHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVDb252ZXJ0ZXIuY29udmVydChhZ2dyZWdhdGUpO1xuXHR9XG5cbn1cbiJdfQ==