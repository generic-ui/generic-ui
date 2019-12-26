/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { InMemoryCompositionStore } from '../in-memory.composition.store';
import { CompositionConverter } from '../../../../domain/composition/composition.converter';
var InMemoryCompositionReadStore = /** @class */ (function (_super) {
    tslib_1.__extends(InMemoryCompositionReadStore, _super);
    function InMemoryCompositionReadStore(inMemoryCompositionStore, compositionConverter) {
        var _this = _super.call(this, inMemoryCompositionStore) || this;
        _this.inMemoryCompositionStore = inMemoryCompositionStore;
        _this.compositionConverter = compositionConverter;
        return _this;
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    InMemoryCompositionReadStore.prototype.toReadModel = /**
     * @param {?} aggregate
     * @return {?}
     */
    function (aggregate) {
        return this.compositionConverter.convert(aggregate);
    };
    InMemoryCompositionReadStore.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InMemoryCompositionReadStore.ctorParameters = function () { return [
        { type: InMemoryCompositionStore },
        { type: CompositionConverter }
    ]; };
    return InMemoryCompositionReadStore;
}(InMemoryReadModelStore));
export { InMemoryCompositionReadStore };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionReadStore.prototype.inMemoryCompositionStore;
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionReadStore.prototype.compositionConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlYWQtc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2NvbXBvc2l0aW9uL3JlYWQvaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlYWQtc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSTVELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRzVGO0lBQ2tELHdEQUF5RDtJQUUxRyxzQ0FBb0Isd0JBQWtELEVBQzNELG9CQUEwQztRQURyRCxZQUVDLGtCQUFNLHdCQUF3QixDQUFDLFNBQy9CO1FBSG1CLDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDM0QsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjs7SUFFckQsQ0FBQzs7Ozs7SUFFRCxrREFBVzs7OztJQUFYLFVBQVksU0FBK0I7UUFDMUMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O2dCQVZELFVBQVU7Ozs7Z0JBSkYsd0JBQXdCO2dCQUN4QixvQkFBb0I7O0lBZTdCLG1DQUFDO0NBQUEsQUFaRCxDQUNrRCxzQkFBc0IsR0FXdkU7U0FYWSw0QkFBNEI7Ozs7OztJQUU1QixnRUFBMEQ7Ozs7O0lBQ25FLDREQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5NZW1vcnlSZWFkTW9kZWxTdG9yZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL3JlYWQvY29tcG9zaXRpb24nO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC9jb21wb3NpdGlvbi5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgSW5NZW1vcnlDb21wb3NpdGlvblN0b3JlIH0gZnJvbSAnLi4vaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnN0b3JlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbXBvc2l0aW9uLmNvbnZlcnRlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluTWVtb3J5Q29tcG9zaXRpb25SZWFkU3RvcmUgZXh0ZW5kcyBJbk1lbW9yeVJlYWRNb2RlbFN0b3JlPENvbXBvc2l0aW9uLCBDb21wb3NpdGlvbkFnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5NZW1vcnlDb21wb3NpdGlvblN0b3JlOiBJbk1lbW9yeUNvbXBvc2l0aW9uU3RvcmUsXG5cdFx0XHRcdHByaXZhdGUgY29tcG9zaXRpb25Db252ZXJ0ZXI6IENvbXBvc2l0aW9uQ29udmVydGVyKSB7XG5cdFx0c3VwZXIoaW5NZW1vcnlDb21wb3NpdGlvblN0b3JlKTtcblx0fVxuXG5cdHRvUmVhZE1vZGVsKGFnZ3JlZ2F0ZTogQ29tcG9zaXRpb25BZ2dyZWdhdGUpOiBDb21wb3NpdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25Db252ZXJ0ZXIuY29udmVydChhZ2dyZWdhdGUpO1xuXHR9XG5cbn1cbiJdfQ==