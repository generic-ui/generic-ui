/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { InMemoryCompositionStore } from '../in-memory.composition.store';
import { CompositionConverter } from '../../../../domain/composition/composition.converter';
var InMemoryCompositionQueryStore = /** @class */ (function (_super) {
    tslib_1.__extends(InMemoryCompositionQueryStore, _super);
    function InMemoryCompositionQueryStore(inMemoryCompositionStore, compositionConverter) {
        var _this = _super.call(this, inMemoryCompositionStore) || this;
        _this.inMemoryCompositionStore = inMemoryCompositionStore;
        _this.compositionConverter = compositionConverter;
        return _this;
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    InMemoryCompositionQueryStore.prototype.toReadModel = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        return this.compositionConverter.convert(aggregate);
    };
    InMemoryCompositionQueryStore.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InMemoryCompositionQueryStore.ctorParameters = function () { return [
        { type: InMemoryCompositionStore },
        { type: CompositionConverter }
    ]; };
    return InMemoryCompositionQueryStore;
}(InMemoryReadModelStore));
export { InMemoryCompositionQueryStore };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionQueryStore.prototype.inMemoryCompositionStore;
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionQueryStore.prototype.compositionConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnF1ZXJ5LXN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9jb21wb3NpdGlvbi9xdWVyeS9pbi1tZW1vcnkuY29tcG9zaXRpb24ucXVlcnktc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSTVELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRzVGO0lBQ21ELHlEQUF5RDtJQUUzRyx1Q0FBb0Isd0JBQWtELEVBQzNELG9CQUEwQztRQURyRCxZQUVDLGtCQUFNLHdCQUF3QixDQUFDLFNBQy9CO1FBSG1CLDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDM0QsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjs7SUFFckQsQ0FBQzs7Ozs7SUFFRCxtREFBVzs7OztJQUFYLFVBQVksU0FBK0I7UUFDMUMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O2dCQVZELFVBQVU7Ozs7Z0JBSkYsd0JBQXdCO2dCQUN4QixvQkFBb0I7O0lBZTdCLG9DQUFDO0NBQUEsQUFaRCxDQUNtRCxzQkFBc0IsR0FXeEU7U0FYWSw2QkFBNkI7Ozs7OztJQUU3QixpRUFBMEQ7Ozs7O0lBQ25FLDZEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5NZW1vcnlSZWFkTW9kZWxTdG9yZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL3F1ZXJ5L2NvbXBvc2l0aW9uJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvY29tcG9zaXRpb24uYWdncmVnYXRlJztcbmltcG9ydCB7IEluTWVtb3J5Q29tcG9zaXRpb25TdG9yZSB9IGZyb20gJy4uL2luLW1lbW9yeS5jb21wb3NpdGlvbi5zdG9yZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi5jb252ZXJ0ZXInO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbk1lbW9yeUNvbXBvc2l0aW9uUXVlcnlTdG9yZSBleHRlbmRzIEluTWVtb3J5UmVhZE1vZGVsU3RvcmU8Q29tcG9zaXRpb24sIENvbXBvc2l0aW9uQWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbk1lbW9yeUNvbXBvc2l0aW9uU3RvcmU6IEluTWVtb3J5Q29tcG9zaXRpb25TdG9yZSxcblx0XHRcdFx0cHJpdmF0ZSBjb21wb3NpdGlvbkNvbnZlcnRlcjogQ29tcG9zaXRpb25Db252ZXJ0ZXIpIHtcblx0XHRzdXBlcihpbk1lbW9yeUNvbXBvc2l0aW9uU3RvcmUpO1xuXHR9XG5cblx0dG9SZWFkTW9kZWwoYWdncmVnYXRlOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSk6IENvbXBvc2l0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvbkNvbnZlcnRlci5jb252ZXJ0KGFnZ3JlZ2F0ZSk7XG5cdH1cblxufVxuIl19