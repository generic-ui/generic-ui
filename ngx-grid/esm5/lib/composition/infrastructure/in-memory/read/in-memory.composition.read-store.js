/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { InMemoryCompositionStore } from '../in-memory.composition.store';
import { CompositionReadModelRootConverter } from '../../../read/composition.read-model-root-converter';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlYWQtc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvcmVhZC9pbi1tZW1vcnkuY29tcG9zaXRpb24ucmVhZC1zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJNUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFLeEc7SUFDa0Qsd0RBRzVCO0lBRXJCLHNDQUFvQix3QkFBa0QsRUFDM0Qsb0JBQXVEO1FBRGxFLFlBRUMsa0JBQU0sd0JBQXdCLENBQUMsU0FDL0I7UUFIbUIsOEJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUMzRCwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQW1DOztJQUVsRSxDQUFDOzs7OztJQUVELGtEQUFXOzs7O0lBQVgsVUFBWSxTQUErQjtRQUMxQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBYkQsVUFBVTs7OztnQkFORix3QkFBd0I7Z0JBQ3hCLGlDQUFpQzs7SUFvQjFDLG1DQUFDO0NBQUEsQUFmRCxDQUNrRCxzQkFBc0IsR0FjdkU7U0FkWSw0QkFBNEI7Ozs7OztJQUs1QixnRUFBMEQ7Ozs7O0lBQ25FLDREQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5NZW1vcnlSZWFkTW9kZWxTdG9yZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVSb290IH0gZnJvbSAnLi4vLi4vLi4vcmVhZC9jb21wb3NpdGlvbi5yZWFkLW1vZGUtcm9vdCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgSW5NZW1vcnlDb21wb3NpdGlvblN0b3JlIH0gZnJvbSAnLi4vaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnN0b3JlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdENvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uL3JlYWQvY29tcG9zaXRpb24ucmVhZC1tb2RlbC1yb290LWNvbnZlcnRlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vcmVhZC9jb21wb3NpdGlvbi5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbk1lbW9yeUNvbXBvc2l0aW9uUmVhZFN0b3JlIGV4dGVuZHMgSW5NZW1vcnlSZWFkTW9kZWxTdG9yZTxDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RJZCxcblx0Q29tcG9zaXRpb25SZWFkTW9kZVJvb3QsXG5cdENvbXBvc2l0aW9uSWQsXG5cdENvbXBvc2l0aW9uQWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbk1lbW9yeUNvbXBvc2l0aW9uU3RvcmU6IEluTWVtb3J5Q29tcG9zaXRpb25TdG9yZSxcblx0XHRcdFx0cHJpdmF0ZSBjb21wb3NpdGlvbkNvbnZlcnRlcjogQ29tcG9zaXRpb25SZWFkTW9kZWxSb290Q29udmVydGVyKSB7XG5cdFx0c3VwZXIoaW5NZW1vcnlDb21wb3NpdGlvblN0b3JlKTtcblx0fVxuXG5cdHRvUmVhZE1vZGVsKGFnZ3JlZ2F0ZTogQ29tcG9zaXRpb25BZ2dyZWdhdGUpOiBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25Db252ZXJ0ZXIuY29udmVydChhZ2dyZWdhdGUpO1xuXHR9XG5cbn1cbiJdfQ==