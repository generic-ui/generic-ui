/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GenericBuilder } from '../../../common/cdk/generic-builder';
export class StructurePagingDefinitionBuilder extends GenericBuilder {
    /**
     * @param {?} enabled
     */
    constructor(enabled) {
        super();
        this.enabled = enabled;
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    withEnabled(enabled) {
        this.enabled = enabled;
        return this;
    }
    /**
     * @protected
     * @return {?}
     */
    buildObject() {
        return new PagingDefinition(this.enabled);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePagingDefinitionBuilder.prototype.enabled;
}
export class StructurePagingDefinitionDefaultBuilder extends StructurePagingDefinitionBuilder {
    constructor() {
        super(StructurePagingDefinitionDefaultBuilder.defaultEnabled);
    }
}
StructurePagingDefinitionDefaultBuilder.defaultEnabled = true;
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePagingDefinitionDefaultBuilder.defaultEnabled;
}
export class PagingDefinition {
    /**
     * @param {?} enabled
     */
    constructor(enabled) {
        this.enabled = enabled;
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.enabled;
    }
}
PagingDefinition.Builder = StructurePagingDefinitionBuilder;
PagingDefinition.DefaultBuilder = StructurePagingDefinitionDefaultBuilder;
if (false) {
    /** @type {?} */
    PagingDefinition.Builder;
    /** @type {?} */
    PagingDefinition.DefaultBuilder;
    /**
     * @type {?}
     * @private
     */
    PagingDefinition.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLWRlZmluaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvZmVhdHVyZS9wYWdpbmctZGVmaW5pdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRXJFLE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSxjQUFnQzs7OztJQUlyRixZQUFZLE9BQWdCO1FBQzNCLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBZ0I7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOzs7OztJQUVTLFdBQVc7UUFDcEIsT0FBTyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBQ0Q7Ozs7OztJQWZBLG1EQUF5Qjs7QUFpQjFCLE1BQU0sT0FBTyx1Q0FBd0MsU0FBUSxnQ0FBZ0M7SUFJNUY7UUFDQyxLQUFLLENBQUMsdUNBQXVDLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7QUFKdUIsc0RBQWMsR0FBRyxJQUFJLENBQUM7Ozs7OztJQUE5Qyx1REFBOEM7O0FBTy9DLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFRNUIsWUFBWSxPQUFnQjtRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOztBQVpNLHdCQUFPLEdBQUcsZ0NBQWdDLENBQUM7QUFFM0MsK0JBQWMsR0FBRyx1Q0FBdUMsQ0FBQzs7O0lBRmhFLHlCQUFrRDs7SUFFbEQsZ0NBQWdFOzs7OztJQUVoRSxtQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZW5lcmljQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvZ2VuZXJpYy1idWlsZGVyJztcblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb25CdWlsZGVyIGV4dGVuZHMgR2VuZXJpY0J1aWxkZXI8UGFnaW5nRGVmaW5pdGlvbj4ge1xuXG5cdHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihlbmFibGVkOiBib29sZWFuKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXHR9XG5cblx0d2l0aEVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb25CdWlsZGVyIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0cHJvdGVjdGVkIGJ1aWxkT2JqZWN0KCk6IFBhZ2luZ0RlZmluaXRpb24ge1xuXHRcdHJldHVybiBuZXcgUGFnaW5nRGVmaW5pdGlvbih0aGlzLmVuYWJsZWQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uRGVmYXVsdEJ1aWxkZXIgZXh0ZW5kcyBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uQnVpbGRlciB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdEVuYWJsZWQgPSB0cnVlO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb25EZWZhdWx0QnVpbGRlci5kZWZhdWx0RW5hYmxlZCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhZ2luZ0RlZmluaXRpb24ge1xuXG5cdHN0YXRpYyBCdWlsZGVyID0gU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbkJ1aWxkZXI7XG5cblx0c3RhdGljIERlZmF1bHRCdWlsZGVyID0gU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbkRlZmF1bHRCdWlsZGVyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZW5hYmxlZDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihlbmFibGVkOiBib29sZWFuKSB7XG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cbn1cbiJdfQ==