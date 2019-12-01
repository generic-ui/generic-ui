/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { GenericBuilder } from '../../../../common/cdk/generic-builder';
var StructurePagingDefinitionBuilder = /** @class */ (function (_super) {
    tslib_1.__extends(StructurePagingDefinitionBuilder, _super);
    function StructurePagingDefinitionBuilder(enabled) {
        var _this = _super.call(this) || this;
        _this.enabled = enabled;
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    StructurePagingDefinitionBuilder.prototype.buildObject = /**
     * @protected
     * @return {?}
     */
    function () {
        return new StructurePagingDefinition(this.enabled);
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    StructurePagingDefinitionBuilder.prototype.withEnabled = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.enabled = enabled;
        return this;
    };
    return StructurePagingDefinitionBuilder;
}(GenericBuilder));
export { StructurePagingDefinitionBuilder };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePagingDefinitionBuilder.prototype.enabled;
}
var StructurePagingDefinitionDefaultBuilder = /** @class */ (function (_super) {
    tslib_1.__extends(StructurePagingDefinitionDefaultBuilder, _super);
    function StructurePagingDefinitionDefaultBuilder() {
        return _super.call(this, StructurePagingDefinitionDefaultBuilder.defaultEnabled) || this;
    }
    StructurePagingDefinitionDefaultBuilder.defaultEnabled = true;
    return StructurePagingDefinitionDefaultBuilder;
}(StructurePagingDefinitionBuilder));
export { StructurePagingDefinitionDefaultBuilder };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePagingDefinitionDefaultBuilder.defaultEnabled;
}
var StructurePagingDefinition = /** @class */ (function () {
    function StructurePagingDefinition(enabled) {
        this.enabled = enabled;
    }
    /**
     * @return {?}
     */
    StructurePagingDefinition.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled;
    };
    StructurePagingDefinition.Builder = StructurePagingDefinitionBuilder;
    StructurePagingDefinition.DefaultBuilder = StructurePagingDefinitionDefaultBuilder;
    return StructurePagingDefinition;
}());
export { StructurePagingDefinition };
if (false) {
    /** @type {?} */
    StructurePagingDefinition.Builder;
    /** @type {?} */
    StructurePagingDefinition.DefaultBuilder;
    /**
     * @type {?}
     * @private
     */
    StructurePagingDefinition.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhZ2luZy1kZWZpbml0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL3BhZ2luZy9zdHJ1Y3R1cmUtcGFnaW5nLWRlZmluaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFeEU7SUFBc0QsNERBQXlDO0lBSTlGLDBDQUFZLE9BQWdCO1FBQTVCLFlBQ0MsaUJBQU8sU0FFUDtRQURBLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOztJQUN4QixDQUFDOzs7OztJQUVTLHNEQUFXOzs7O0lBQXJCO1FBQ0MsT0FBTyxJQUFJLHlCQUF5QixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUVELHNEQUFXOzs7O0lBQVgsVUFBWSxPQUFnQjtRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDRix1Q0FBQztBQUFELENBQUMsQUFqQkQsQ0FBc0QsY0FBYyxHQWlCbkU7Ozs7Ozs7SUFmQSxtREFBeUI7O0FBaUIxQjtJQUE2RCxtRUFBZ0M7SUFJNUY7ZUFDQyxrQkFBTSx1Q0FBdUMsQ0FBQyxjQUFjLENBQUM7SUFDOUQsQ0FBQztJQUp1QixzREFBYyxHQUFHLElBQUksQ0FBQztJQUsvQyw4Q0FBQztDQUFBLEFBUEQsQ0FBNkQsZ0NBQWdDLEdBTzVGO1NBUFksdUNBQXVDOzs7Ozs7SUFFbkQsdURBQThDOztBQU8vQztJQUlDLG1DQUFZLE9BQWdCO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFNRCw2Q0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQU5NLGlDQUFPLEdBQUcsZ0NBQWdDLENBQUM7SUFFM0Msd0NBQWMsR0FBRyx1Q0FBdUMsQ0FBQztJQU1qRSxnQ0FBQztDQUFBLEFBaEJELElBZ0JDO1NBaEJZLHlCQUF5Qjs7O0lBUXJDLGtDQUFrRDs7SUFFbEQseUNBQWdFOzs7OztJQVJoRSw0Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZW5lcmljQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZ2VuZXJpYy1idWlsZGVyJztcblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb25CdWlsZGVyIGV4dGVuZHMgR2VuZXJpY0J1aWxkZXI8U3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbj4ge1xuXG5cdHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihlbmFibGVkOiBib29sZWFuKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXHR9XG5cblx0cHJvdGVjdGVkIGJ1aWxkT2JqZWN0KCk6IFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb24ge1xuXHRcdHJldHVybiBuZXcgU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbih0aGlzLmVuYWJsZWQpO1xuXHR9XG5cblx0d2l0aEVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb25CdWlsZGVyIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uRGVmYXVsdEJ1aWxkZXIgZXh0ZW5kcyBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uQnVpbGRlciB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdEVuYWJsZWQgPSB0cnVlO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb25EZWZhdWx0QnVpbGRlci5kZWZhdWx0RW5hYmxlZCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb24ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZW5hYmxlZDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihlbmFibGVkOiBib29sZWFuKSB7XG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblx0fVxuXG5cdHN0YXRpYyBCdWlsZGVyID0gU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbkJ1aWxkZXI7XG5cblx0c3RhdGljIERlZmF1bHRCdWlsZGVyID0gU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbkRlZmF1bHRCdWlsZGVyO1xuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cbn1cbiJdfQ==