/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { InMemoryStructureStore } from '../in-memory.structure.store';
import { StructureConverter } from '../../../../domain/structure/structure.converter';
var InMemoryStructureQueryStore = /** @class */ (function (_super) {
    tslib_1.__extends(InMemoryStructureQueryStore, _super);
    function InMemoryStructureQueryStore(inMemoryProjectStore, structureConverter) {
        var _this = _super.call(this, inMemoryProjectStore) || this;
        _this.inMemoryProjectStore = inMemoryProjectStore;
        _this.structureConverter = structureConverter;
        return _this;
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    InMemoryStructureQueryStore.prototype.toReadModel = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        return this.structureConverter.convert(aggregate);
    };
    InMemoryStructureQueryStore.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InMemoryStructureQueryStore.ctorParameters = function () { return [
        { type: InMemoryStructureStore },
        { type: StructureConverter }
    ]; };
    return InMemoryStructureQueryStore;
}(InMemoryReadModelStore));
export { InMemoryStructureQueryStore };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureQueryStore.prototype.inMemoryProjectStore;
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureQueryStore.prototype.structureConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0cnVjdHVyZS5xdWVyeS1zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvc3RydWN0dXJlL3F1ZXJ5L2luLW1lbW9yeS5zdHJ1Y3R1cmUucXVlcnktc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSTVELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBR3RGO0lBQ2lELHVEQUFxRDtJQUVyRyxxQ0FBb0Isb0JBQTRDLEVBQ3JELGtCQUFzQztRQURqRCxZQUVDLGtCQUFNLG9CQUFvQixDQUFDLFNBQzNCO1FBSG1CLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBd0I7UUFDckQsd0JBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjs7SUFFakQsQ0FBQzs7Ozs7SUFFRCxpREFBVzs7OztJQUFYLFVBQVksU0FBNkI7UUFDeEMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O2dCQVZELFVBQVU7Ozs7Z0JBSkYsc0JBQXNCO2dCQUN0QixrQkFBa0I7O0lBZTNCLGtDQUFDO0NBQUEsQUFaRCxDQUNpRCxzQkFBc0IsR0FXdEU7U0FYWSwyQkFBMkI7Ozs7OztJQUUzQiwyREFBb0Q7Ozs7O0lBQzdELHlEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5NZW1vcnlSZWFkTW9kZWxTdG9yZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZSB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcXVlcnkvc3RydWN0dXJlJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcbmltcG9ydCB7IEluTWVtb3J5U3RydWN0dXJlU3RvcmUgfSBmcm9tICcuLi9pbi1tZW1vcnkuc3RydWN0dXJlLnN0b3JlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvc3RydWN0dXJlLmNvbnZlcnRlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluTWVtb3J5U3RydWN0dXJlUXVlcnlTdG9yZSBleHRlbmRzIEluTWVtb3J5UmVhZE1vZGVsU3RvcmU8U3RydWN0dXJlLCBTdHJ1Y3R1cmVBZ2dyZWdhdGU+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluTWVtb3J5UHJvamVjdFN0b3JlOiBJbk1lbW9yeVN0cnVjdHVyZVN0b3JlLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUNvbnZlcnRlcjogU3RydWN0dXJlQ29udmVydGVyKSB7XG5cdFx0c3VwZXIoaW5NZW1vcnlQcm9qZWN0U3RvcmUpO1xuXHR9XG5cblx0dG9SZWFkTW9kZWwoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUpOiBTdHJ1Y3R1cmUge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZUNvbnZlcnRlci5jb252ZXJ0KGFnZ3JlZ2F0ZSk7XG5cdH1cblxufVxuIl19