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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhZ2luZy1kZWZpbml0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2ZlYXR1cmUvcGFnaW5nL3N0cnVjdHVyZS1wYWdpbmctZGVmaW5pdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUV4RTtJQUFzRCw0REFBeUM7SUFJOUYsMENBQVksT0FBZ0I7UUFBNUIsWUFDQyxpQkFBTyxTQUVQO1FBREEsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O0lBQ3hCLENBQUM7Ozs7O0lBRVMsc0RBQVc7Ozs7SUFBckI7UUFDQyxPQUFPLElBQUkseUJBQXlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBRUQsc0RBQVc7Ozs7SUFBWCxVQUFZLE9BQWdCO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNGLHVDQUFDO0FBQUQsQ0FBQyxBQWpCRCxDQUFzRCxjQUFjLEdBaUJuRTs7Ozs7OztJQWZBLG1EQUF5Qjs7QUFpQjFCO0lBQTZELG1FQUFnQztJQUk1RjtlQUNDLGtCQUFNLHVDQUF1QyxDQUFDLGNBQWMsQ0FBQztJQUM5RCxDQUFDO0lBSnVCLHNEQUFjLEdBQUcsSUFBSSxDQUFDO0lBSy9DLDhDQUFDO0NBQUEsQUFQRCxDQUE2RCxnQ0FBZ0MsR0FPNUY7U0FQWSx1Q0FBdUM7Ozs7OztJQUVuRCx1REFBOEM7O0FBTy9DO0lBSUMsbUNBQVksT0FBZ0I7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7OztJQU1ELDZDQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBTk0saUNBQU8sR0FBRyxnQ0FBZ0MsQ0FBQztJQUUzQyx3Q0FBYyxHQUFHLHVDQUF1QyxDQUFDO0lBTWpFLGdDQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FoQlkseUJBQXlCOzs7SUFRckMsa0NBQWtEOztJQUVsRCx5Q0FBZ0U7Ozs7O0lBUmhFLDRDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdlbmVyaWNCdWlsZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9nZW5lcmljLWJ1aWxkZXInO1xuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbkJ1aWxkZXIgZXh0ZW5kcyBHZW5lcmljQnVpbGRlcjxTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uPiB7XG5cblx0cHJpdmF0ZSBlbmFibGVkOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKGVuYWJsZWQ6IGJvb2xlYW4pIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYnVpbGRPYmplY3QoKTogU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbiB7XG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uKHRoaXMuZW5hYmxlZCk7XG5cdH1cblxuXHR3aXRoRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbkJ1aWxkZXIge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb25EZWZhdWx0QnVpbGRlciBleHRlbmRzIFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb25CdWlsZGVyIHtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBkZWZhdWx0RW5hYmxlZCA9IHRydWU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbkRlZmF1bHRCdWlsZGVyLmRlZmF1bHRFbmFibGVkKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBlbmFibGVkOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKGVuYWJsZWQ6IGJvb2xlYW4pIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXHR9XG5cblx0c3RhdGljIEJ1aWxkZXIgPSBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uQnVpbGRlcjtcblxuXHRzdGF0aWMgRGVmYXVsdEJ1aWxkZXIgPSBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uRGVmYXVsdEJ1aWxkZXI7XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxufVxuIl19