/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { GenericBuilder } from '../../../common/cdk/generic-builder';
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
        return new PagingDefinition(this.enabled);
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
var PagingDefinition = /** @class */ (function () {
    function PagingDefinition(enabled) {
        this.enabled = enabled;
    }
    /**
     * @return {?}
     */
    PagingDefinition.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled;
    };
    PagingDefinition.Builder = StructurePagingDefinitionBuilder;
    PagingDefinition.DefaultBuilder = StructurePagingDefinitionDefaultBuilder;
    return PagingDefinition;
}());
export { PagingDefinition };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLWRlZmluaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvZmVhdHVyZS9wYWdpbmctZGVmaW5pdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUVyRTtJQUFzRCw0REFBZ0M7SUFJckYsMENBQVksT0FBZ0I7UUFBNUIsWUFDQyxpQkFBTyxTQUVQO1FBREEsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O0lBQ3hCLENBQUM7Ozs7O0lBRVMsc0RBQVc7Ozs7SUFBckI7UUFDQyxPQUFPLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQsc0RBQVc7Ozs7SUFBWCxVQUFZLE9BQWdCO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNGLHVDQUFDO0FBQUQsQ0FBQyxBQWpCRCxDQUFzRCxjQUFjLEdBaUJuRTs7Ozs7OztJQWZBLG1EQUF5Qjs7QUFpQjFCO0lBQTZELG1FQUFnQztJQUk1RjtlQUNDLGtCQUFNLHVDQUF1QyxDQUFDLGNBQWMsQ0FBQztJQUM5RCxDQUFDO0lBSnVCLHNEQUFjLEdBQUcsSUFBSSxDQUFDO0lBSy9DLDhDQUFDO0NBQUEsQUFQRCxDQUE2RCxnQ0FBZ0MsR0FPNUY7U0FQWSx1Q0FBdUM7Ozs7OztJQUVuRCx1REFBOEM7O0FBTy9DO0lBSUMsMEJBQVksT0FBZ0I7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7OztJQU1ELG9DQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBTk0sd0JBQU8sR0FBRyxnQ0FBZ0MsQ0FBQztJQUUzQywrQkFBYyxHQUFHLHVDQUF1QyxDQUFDO0lBTWpFLHVCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FoQlksZ0JBQWdCOzs7SUFRNUIseUJBQWtEOztJQUVsRCxnQ0FBZ0U7Ozs7O0lBUmhFLG1DQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdlbmVyaWNCdWlsZGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9nZW5lcmljLWJ1aWxkZXInO1xuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbkJ1aWxkZXIgZXh0ZW5kcyBHZW5lcmljQnVpbGRlcjxQYWdpbmdEZWZpbml0aW9uPiB7XG5cblx0cHJpdmF0ZSBlbmFibGVkOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKGVuYWJsZWQ6IGJvb2xlYW4pIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYnVpbGRPYmplY3QoKTogUGFnaW5nRGVmaW5pdGlvbiB7XG5cdFx0cmV0dXJuIG5ldyBQYWdpbmdEZWZpbml0aW9uKHRoaXMuZW5hYmxlZCk7XG5cdH1cblxuXHR3aXRoRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbkJ1aWxkZXIge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb25EZWZhdWx0QnVpbGRlciBleHRlbmRzIFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb25CdWlsZGVyIHtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBkZWZhdWx0RW5hYmxlZCA9IHRydWU7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbkRlZmF1bHRCdWlsZGVyLmRlZmF1bHRFbmFibGVkKTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUGFnaW5nRGVmaW5pdGlvbiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBlbmFibGVkOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKGVuYWJsZWQ6IGJvb2xlYW4pIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXHR9XG5cblx0c3RhdGljIEJ1aWxkZXIgPSBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uQnVpbGRlcjtcblxuXHRzdGF0aWMgRGVmYXVsdEJ1aWxkZXIgPSBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uRGVmYXVsdEJ1aWxkZXI7XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxufVxuIl19