/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { InMemoryCompositionStore } from '../in-memory.composition.store';
import { CompositionReadModelRootConverter } from '../../../feature-api/read/composition.read-model-root-converter';
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
        { type: CompositionReadModelRootConverter }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlYWQtc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvZmVhdHVyZS1hcGkvaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlYWQtc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSTVELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBS3BIO0lBQ2tELHdEQUc1QjtJQUVyQixzQ0FBb0Isd0JBQWtELEVBQzNELG9CQUF1RDtRQURsRSxZQUVDLGtCQUFNLHdCQUF3QixDQUFDLFNBQy9CO1FBSG1CLDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDM0QsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFtQzs7SUFFbEUsQ0FBQzs7Ozs7SUFFRCxrREFBVzs7OztJQUFYLFVBQVksU0FBK0I7UUFDMUMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O2dCQWJELFVBQVU7Ozs7Z0JBTkYsd0JBQXdCO2dCQUN4QixpQ0FBaUM7O0lBb0IxQyxtQ0FBQztDQUFBLEFBZkQsQ0FDa0Qsc0JBQXNCLEdBY3ZFO1NBZFksNEJBQTRCOzs7Ozs7SUFLNUIsZ0VBQTBEOzs7OztJQUNuRSw0REFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEluTWVtb3J5UmVhZE1vZGVsU3RvcmUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUtYXBpL3JlYWQvY29tcG9zaXRpb24ucmVhZC1tb2RlLXJvb3QnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24uYWdncmVnYXRlJztcbmltcG9ydCB7IEluTWVtb3J5Q29tcG9zaXRpb25TdG9yZSB9IGZyb20gJy4uL2luLW1lbW9yeS5jb21wb3NpdGlvbi5zdG9yZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlLWFwaS9yZWFkL2NvbXBvc2l0aW9uLnJlYWQtbW9kZWwtcm9vdC1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUtYXBpL3JlYWQvY29tcG9zaXRpb24ucmVhZC1tb2RlbC1yb290LWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlDb21wb3NpdGlvblJlYWRTdG9yZSBleHRlbmRzIEluTWVtb3J5UmVhZE1vZGVsU3RvcmU8Q29tcG9zaXRpb25SZWFkTW9kZWxSb290SWQsXG5cdENvbXBvc2l0aW9uUmVhZE1vZGVSb290LFxuXHRDb21wb3NpdGlvbklkLFxuXHRDb21wb3NpdGlvbkFnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5NZW1vcnlDb21wb3NpdGlvblN0b3JlOiBJbk1lbW9yeUNvbXBvc2l0aW9uU3RvcmUsXG5cdFx0XHRcdHByaXZhdGUgY29tcG9zaXRpb25Db252ZXJ0ZXI6IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdENvbnZlcnRlcikge1xuXHRcdHN1cGVyKGluTWVtb3J5Q29tcG9zaXRpb25TdG9yZSk7XG5cdH1cblxuXHR0b1JlYWRNb2RlbChhZ2dyZWdhdGU6IENvbXBvc2l0aW9uQWdncmVnYXRlKTogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3Qge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uQ29udmVydGVyLmNvbnZlcnQoYWdncmVnYXRlKTtcblx0fVxuXG59XG4iXX0=