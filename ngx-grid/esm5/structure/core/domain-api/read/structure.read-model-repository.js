/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Reactive } from '../../../../common/cdk/reactive';
/**
 * @abstract
 */
var /**
 * @abstract
 */
StructureReadModelRepository = /** @class */ (function (_super) {
    tslib_1.__extends(StructureReadModelRepository, _super);
    function StructureReadModelRepository(domainEventBus) {
        var _this = _super.call(this) || this;
        domainEventBus
            .ofEvent.apply(domainEventBus, tslib_1.__spread(_this.forEvents())).pipe(_this.takeUntil())
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            try {
                _this.subs(event);
            }
            catch (e) {
                console.error(e);
            }
        }));
        return _this;
    }
    return StructureReadModelRepository;
}(Reactive));
/**
 * @abstract
 */
export { StructureReadModelRepository };
if (false) {
    /**
     * @abstract
     * @param {?} aggregateId
     * @return {?}
     */
    StructureReadModelRepository.prototype.getStructure = function (aggregateId) { };
    /**
     * @abstract
     * @param {?} aggregateId
     * @return {?}
     */
    StructureReadModelRepository.prototype.onStructure = function (aggregateId) { };
    /**
     * @abstract
     * @protected
     * @return {?}
     */
    StructureReadModelRepository.prototype.forEvents = function () { };
    /**
     * @abstract
     * @protected
     * @param {?} event
     * @return {?}
     */
    StructureReadModelRepository.prototype.subs = function (event) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJlYWQtbW9kZWwtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZG9tYWluLWFwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7QUFNM0Q7Ozs7SUFBMkQsd0RBQVE7SUFFbEUsc0NBQXNCLGNBQThCO1FBQXBELFlBQ0MsaUJBQU8sU0FnQlA7UUFmQSxjQUFjO2FBQ1osT0FBTyxPQURULGNBQWMsbUJBRVQsS0FBSSxDQUFDLFNBQVMsRUFBRSxHQUVuQixJQUFJLENBQ0osS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQStCO1lBRTFDLElBQUk7Z0JBQ0gsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNqQjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakI7UUFDRixDQUFDLEVBQUMsQ0FBQzs7SUFDTCxDQUFDO0lBVUYsbUNBQUM7QUFBRCxDQUFDLEFBN0JELENBQTJELFFBQVEsR0E2QmxFOzs7Ozs7Ozs7OztJQVJBLGlGQUF3RTs7Ozs7O0lBRXhFLGdGQUFtRjs7Ozs7O0lBRW5GLG1FQUEwRDs7Ozs7OztJQUUxRCxtRUFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkLCBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IH0gZnJvbSAnLi9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnkgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cykge1xuXHRcdHN1cGVyKCk7XG5cdFx0ZG9tYWluRXZlbnRCdXNcblx0XHRcdC5vZkV2ZW50KFxuXHRcdFx0XHQuLi50aGlzLmZvckV2ZW50cygpXG5cdFx0XHQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZXZlbnQ6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPikgPT4ge1xuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhpcy5zdWJzKGV2ZW50KTtcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9XG5cblx0YWJzdHJhY3QgZ2V0U3RydWN0dXJlKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q7XG5cblx0YWJzdHJhY3Qgb25TdHJ1Y3R1cmUoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkKTogT2JzZXJ2YWJsZTxTdHJ1Y3R1cmVSZWFkTW9kZWxSb290PjtcblxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgZm9yRXZlbnRzKCk6IEFycmF5PHR5cGVvZiBEb21haW5FdmVudD47XG5cblx0cHJvdGVjdGVkIGFic3RyYWN0IHN1YnMoZXZlbnQ6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPik6IHZvaWQ7XG5cbn1cbiJdfQ==