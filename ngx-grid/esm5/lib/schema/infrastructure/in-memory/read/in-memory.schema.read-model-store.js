/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { InMemorySchemaStore } from '../in-memory.schema.store';
import { SchemaReadModelRootConverter } from '../../../read/schema.read-model-root-converter';
var InMemorySchemaReadModelStore = /** @class */ (function (_super) {
    tslib_1.__extends(InMemorySchemaReadModelStore, _super);
    function InMemorySchemaReadModelStore(inMemorySchemaStore, schemaReadModelRootConverter) {
        var _this = _super.call(this, inMemorySchemaStore) || this;
        _this.inMemorySchemaStore = inMemorySchemaStore;
        _this.schemaReadModelRootConverter = schemaReadModelRootConverter;
        return _this;
    }
    /**
     * @param {?} schemaAggregate
     * @return {?}
     */
    InMemorySchemaReadModelStore.prototype.toReadModel = /**
     * @param {?} schemaAggregate
     * @return {?}
     */
    function (schemaAggregate) {
        return this.schemaReadModelRootConverter.convert(schemaAggregate);
    };
    InMemorySchemaReadModelStore.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InMemorySchemaReadModelStore.ctorParameters = function () { return [
        { type: InMemorySchemaStore },
        { type: SchemaReadModelRootConverter }
    ]; };
    return InMemorySchemaReadModelStore;
}(InMemoryReadModelStore));
export { InMemorySchemaReadModelStore };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemorySchemaReadModelStore.prototype.inMemorySchemaStore;
    /**
     * @type {?}
     * @private
     */
    InMemorySchemaReadModelStore.prototype.schemaReadModelRootConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnNjaGVtYS5yZWFkLW1vZGVsLXN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc2NoZW1hL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9yZWFkL2luLW1lbW9yeS5zY2hlbWEucmVhZC1tb2RlbC1zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFNNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDaEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFHOUY7SUFDa0Qsd0RBR2pDO0lBRWhCLHNDQUFvQixtQkFBd0MsRUFDakQsNEJBQTBEO1FBRHJFLFlBRUMsa0JBQU0sbUJBQW1CLENBQUMsU0FDMUI7UUFIbUIseUJBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUNqRCxrQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCOztJQUVyRSxDQUFDOzs7OztJQUVELGtEQUFXOzs7O0lBQVgsVUFBWSxlQUFnQztRQUMzQyxPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Z0JBYkQsVUFBVTs7OztnQkFKRixtQkFBbUI7Z0JBQ25CLDRCQUE0Qjs7SUFrQnJDLG1DQUFDO0NBQUEsQUFmRCxDQUNrRCxzQkFBc0IsR0FjdkU7U0FkWSw0QkFBNEI7Ozs7OztJQUs1QiwyREFBZ0Q7Ozs7O0lBQ3pELG9FQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5NZW1vcnlSZWFkTW9kZWxTdG9yZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3QgfSBmcm9tICcuLi8uLi8uLi9yZWFkL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QnO1xuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc2NoZW1hLmlkJztcbmltcG9ydCB7IFNjaGVtYUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zY2hlbWEuYWdncmVnYXRlJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uL3JlYWQvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBJbk1lbW9yeVNjaGVtYVN0b3JlIH0gZnJvbSAnLi4vaW4tbWVtb3J5LnNjaGVtYS5zdG9yZSc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290Q29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWNvbnZlcnRlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluTWVtb3J5U2NoZW1hUmVhZE1vZGVsU3RvcmUgZXh0ZW5kcyBJbk1lbW9yeVJlYWRNb2RlbFN0b3JlPFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0U2NoZW1hUmVhZE1vZGVsUm9vdCxcblx0U2NoZW1hSWQsXG5cdFNjaGVtYUFnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5NZW1vcnlTY2hlbWFTdG9yZTogSW5NZW1vcnlTY2hlbWFTdG9yZSxcblx0XHRcdFx0cHJpdmF0ZSBzY2hlbWFSZWFkTW9kZWxSb290Q29udmVydGVyOiBTY2hlbWFSZWFkTW9kZWxSb290Q29udmVydGVyKSB7XG5cdFx0c3VwZXIoaW5NZW1vcnlTY2hlbWFTdG9yZSk7XG5cdH1cblxuXHR0b1JlYWRNb2RlbChzY2hlbWFBZ2dyZWdhdGU6IFNjaGVtYUFnZ3JlZ2F0ZSk6IFNjaGVtYVJlYWRNb2RlbFJvb3Qge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RDb252ZXJ0ZXIuY29udmVydChzY2hlbWFBZ2dyZWdhdGUpO1xuXHR9XG5cbn1cbiJdfQ==