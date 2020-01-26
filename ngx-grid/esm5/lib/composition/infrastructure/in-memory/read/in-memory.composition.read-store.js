/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { InMemoryCompositionStore } from '../in-memory.composition.store';
import { CompositionConverter } from '../../../domain/composition.converter';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlYWQtc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvcmVhZC9pbi1tZW1vcnkuY29tcG9zaXRpb24ucmVhZC1zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJNUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFHN0U7SUFDa0Qsd0RBQXlEO0lBRTFHLHNDQUFvQix3QkFBa0QsRUFDM0Qsb0JBQTBDO1FBRHJELFlBRUMsa0JBQU0sd0JBQXdCLENBQUMsU0FDL0I7UUFIbUIsOEJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUMzRCwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCOztJQUVyRCxDQUFDOzs7OztJQUVELGtEQUFXOzs7O0lBQVgsVUFBWSxTQUErQjtRQUMxQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBVkQsVUFBVTs7OztnQkFKRix3QkFBd0I7Z0JBQ3hCLG9CQUFvQjs7SUFlN0IsbUNBQUM7Q0FBQSxBQVpELENBQ2tELHNCQUFzQixHQVd2RTtTQVhZLDRCQUE0Qjs7Ozs7O0lBRTVCLGdFQUEwRDs7Ozs7SUFDbkUsNERBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbk1lbW9yeVJlYWRNb2RlbFN0b3JlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb24gfSBmcm9tICcuLi8uLi8uLi9kb21haW4vcmVhZC9jb21wb3NpdGlvbic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21tYW5kL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBJbk1lbW9yeUNvbXBvc2l0aW9uU3RvcmUgfSBmcm9tICcuLi9pbi1tZW1vcnkuY29tcG9zaXRpb24uc3RvcmUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24uY29udmVydGVyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlDb21wb3NpdGlvblJlYWRTdG9yZSBleHRlbmRzIEluTWVtb3J5UmVhZE1vZGVsU3RvcmU8Q29tcG9zaXRpb24sIENvbXBvc2l0aW9uQWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbk1lbW9yeUNvbXBvc2l0aW9uU3RvcmU6IEluTWVtb3J5Q29tcG9zaXRpb25TdG9yZSxcblx0XHRcdFx0cHJpdmF0ZSBjb21wb3NpdGlvbkNvbnZlcnRlcjogQ29tcG9zaXRpb25Db252ZXJ0ZXIpIHtcblx0XHRzdXBlcihpbk1lbW9yeUNvbXBvc2l0aW9uU3RvcmUpO1xuXHR9XG5cblx0dG9SZWFkTW9kZWwoYWdncmVnYXRlOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSk6IENvbXBvc2l0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvbkNvbnZlcnRlci5jb252ZXJ0KGFnZ3JlZ2F0ZSk7XG5cdH1cblxufVxuIl19