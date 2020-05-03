/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { GenericBuilder } from '../../../common/cdk/generic-builder';
import { StructurePagingDefinition } from './paging/structure-paging-definition';
var StructureDefinitionBuilder = /** @class */ (function (_super) {
    tslib_1.__extends(StructureDefinitionBuilder, _super);
    function StructureDefinitionBuilder(headerEnabled, bottomPaging, topPaging) {
        var _this = _super.call(this) || this;
        _this.headerEnabled = headerEnabled;
        _this.bottomPaging = bottomPaging;
        _this.topPaging = topPaging;
        _this.border = true;
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    StructureDefinitionBuilder.prototype.buildObject = /**
     * @protected
     * @return {?}
     */
    function () {
        return new StructureDefinition(this.headerEnabled, this.bottomPaging, this.topPaging, this.border);
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    StructureDefinitionBuilder.prototype.withHeader = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.headerEnabled = enabled;
        return this;
    };
    /**
     * @param {?} paging
     * @return {?}
     */
    StructureDefinitionBuilder.prototype.withBottomPaging = /**
     * @param {?} paging
     * @return {?}
     */
    function (paging) {
        this.bottomPaging = paging;
        return this;
    };
    /**
     * @param {?} paging
     * @return {?}
     */
    StructureDefinitionBuilder.prototype.withTopPaging = /**
     * @param {?} paging
     * @return {?}
     */
    function (paging) {
        this.topPaging = paging;
        return this;
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    StructureDefinitionBuilder.prototype.withBorder = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.border = enabled;
        return this;
    };
    return StructureDefinitionBuilder;
}(GenericBuilder));
export { StructureDefinitionBuilder };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureDefinitionBuilder.prototype.border;
    /**
     * @type {?}
     * @private
     */
    StructureDefinitionBuilder.prototype.headerEnabled;
    /**
     * @type {?}
     * @private
     */
    StructureDefinitionBuilder.prototype.bottomPaging;
    /**
     * @type {?}
     * @private
     */
    StructureDefinitionBuilder.prototype.topPaging;
}
var StructureDefinitionDefaultBuilder = /** @class */ (function (_super) {
    tslib_1.__extends(StructureDefinitionDefaultBuilder, _super);
    function StructureDefinitionDefaultBuilder() {
        return _super.call(this, StructureDefinitionDefaultBuilder.defaultHeaderEnabled, StructureDefinitionDefaultBuilder.defaultBottomPaging, StructureDefinitionDefaultBuilder.defaultTopPaging) || this;
    }
    StructureDefinitionDefaultBuilder.defaultHeaderEnabled = true;
    StructureDefinitionDefaultBuilder.defaultBottomPaging = new StructurePagingDefinition.DefaultBuilder().build();
    StructureDefinitionDefaultBuilder.defaultTopPaging = new StructurePagingDefinition.DefaultBuilder().build();
    return StructureDefinitionDefaultBuilder;
}(StructureDefinitionBuilder));
export { StructureDefinitionDefaultBuilder };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureDefinitionDefaultBuilder.defaultHeaderEnabled;
    /**
     * @type {?}
     * @private
     */
    StructureDefinitionDefaultBuilder.defaultBottomPaging;
    /**
     * @type {?}
     * @private
     */
    StructureDefinitionDefaultBuilder.defaultTopPaging;
}
var StructureDefinition = /** @class */ (function () {
    function StructureDefinition(headerEnabled, bottomPaging, topPaging, border) {
        this.headerEnabled = headerEnabled;
        this.bottomPaging = bottomPaging;
        this.topPaging = topPaging;
        this.border = border;
    }
    /**
     * @return {?}
     */
    StructureDefinition.prototype.isHeaderEnabled = /**
     * @return {?}
     */
    function () {
        return this.headerEnabled;
    };
    /**
     * @return {?}
     */
    StructureDefinition.prototype.isBorderEnabled = /**
     * @return {?}
     */
    function () {
        return this.border;
    };
    /**
     * @return {?}
     */
    StructureDefinition.prototype.getBottomPaging = /**
     * @return {?}
     */
    function () {
        return this.bottomPaging;
    };
    /**
     * @return {?}
     */
    StructureDefinition.prototype.getTopPaging = /**
     * @return {?}
     */
    function () {
        return this.topPaging;
    };
    StructureDefinition.Builder = StructureDefinitionBuilder;
    StructureDefinition.DefaultBuilder = StructureDefinitionDefaultBuilder;
    return StructureDefinition;
}());
export { StructureDefinition };
if (false) {
    /** @type {?} */
    StructureDefinition.Builder;
    /** @type {?} */
    StructureDefinition.DefaultBuilder;
    /**
     * @type {?}
     * @private
     */
    StructureDefinition.prototype.headerEnabled;
    /**
     * @type {?}
     * @private
     */
    StructureDefinition.prototype.bottomPaging;
    /**
     * @type {?}
     * @private
     */
    StructureDefinition.prototype.topPaging;
    /**
     * @type {?}
     * @private
     */
    StructureDefinition.prototype.border;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWRlZmluaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9zdHJ1Y3R1cmUtZGVmaW5pdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVqRjtJQUFnRCxzREFBbUM7SUFJbEYsb0NBQW9CLGFBQXNCLEVBQy9CLFlBQXVDLEVBQ3ZDLFNBQW9DO1FBRi9DLFlBR0MsaUJBQU8sU0FDUDtRQUptQixtQkFBYSxHQUFiLGFBQWEsQ0FBUztRQUMvQixrQkFBWSxHQUFaLFlBQVksQ0FBMkI7UUFDdkMsZUFBUyxHQUFULFNBQVMsQ0FBMkI7UUFKdkMsWUFBTSxHQUFZLElBQUksQ0FBQzs7SUFNL0IsQ0FBQzs7Ozs7SUFFUyxnREFBVzs7OztJQUFyQjtRQUNDLE9BQU8sSUFBSSxtQkFBbUIsQ0FDN0IsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsTUFBTSxDQUNYLENBQUM7SUFDSCxDQUFDOzs7OztJQUVELCtDQUFVOzs7O0lBQVYsVUFBVyxPQUFnQjtRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztRQUM3QixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7Ozs7O0lBRUQscURBQWdCOzs7O0lBQWhCLFVBQWlCLE1BQWlDO1FBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7Ozs7SUFFRCxrREFBYTs7OztJQUFiLFVBQWMsTUFBaUM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOzs7OztJQUVELCtDQUFVOzs7O0lBQVYsVUFBVyxPQUFnQjtRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRixpQ0FBQztBQUFELENBQUMsQUF2Q0QsQ0FBZ0QsY0FBYyxHQXVDN0Q7Ozs7Ozs7SUFyQ0EsNENBQStCOzs7OztJQUVuQixtREFBOEI7Ozs7O0lBQ3ZDLGtEQUErQzs7Ozs7SUFDL0MsK0NBQTRDOztBQW1DaEQ7SUFBdUQsNkRBQTBCO0lBTWhGO2VBQ0Msa0JBQ0MsaUNBQWlDLENBQUMsb0JBQW9CLEVBQ3RELGlDQUFpQyxDQUFDLG1CQUFtQixFQUNyRCxpQ0FBaUMsQ0FBQyxnQkFBZ0IsQ0FDbEQ7SUFDRixDQUFDO0lBVnVCLHNEQUFvQixHQUFZLElBQUksQ0FBQztJQUNyQyxxREFBbUIsR0FBOEIsSUFBSSx5QkFBeUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4RyxrREFBZ0IsR0FBOEIsSUFBSSx5QkFBeUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQVM5SCx3Q0FBQztDQUFBLEFBYkQsQ0FBdUQsMEJBQTBCLEdBYWhGO1NBYlksaUNBQWlDOzs7Ozs7SUFFN0MsdURBQTZEOzs7OztJQUM3RCxzREFBZ0k7Ozs7O0lBQ2hJLG1EQUE2SDs7QUFXOUg7SUFVQyw2QkFBWSxhQUFzQixFQUMvQixZQUF1QyxFQUN2QyxTQUFvQyxFQUNwQyxNQUFlO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFNRCw2Q0FBZTs7O0lBQWY7UUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELDZDQUFlOzs7SUFBZjtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsNkNBQWU7OztJQUFmO1FBQ0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCwwQ0FBWTs7O0lBQVo7UUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQztJQWxCTSwyQkFBTyxHQUFHLDBCQUEwQixDQUFDO0lBRXJDLGtDQUFjLEdBQUcsaUNBQWlDLENBQUM7SUFrQjNELDBCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0F4Q1ksbUJBQW1COzs7SUFvQi9CLDRCQUE0Qzs7SUFFNUMsbUNBQTBEOzs7OztJQXBCMUQsNENBQXdDOzs7OztJQUV4QywyQ0FBeUQ7Ozs7O0lBRXpELHdDQUFzRDs7Ozs7SUFFdEQscUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2VuZXJpY0J1aWxkZXIgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2dlbmVyaWMtYnVpbGRlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uIH0gZnJvbSAnLi9wYWdpbmcvc3RydWN0dXJlLXBhZ2luZy1kZWZpbml0aW9uJztcblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZURlZmluaXRpb25CdWlsZGVyIGV4dGVuZHMgR2VuZXJpY0J1aWxkZXI8U3RydWN0dXJlRGVmaW5pdGlvbj4ge1xuXG5cdHByaXZhdGUgYm9yZGVyOiBib29sZWFuID0gdHJ1ZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGhlYWRlckVuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgYm90dG9tUGFnaW5nOiBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uLFxuXHRcdFx0XHRwcml2YXRlIHRvcFBhZ2luZzogU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYnVpbGRPYmplY3QoKTogU3RydWN0dXJlRGVmaW5pdGlvbiB7XG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVEZWZpbml0aW9uKFxuXHRcdFx0dGhpcy5oZWFkZXJFbmFibGVkLFxuXHRcdFx0dGhpcy5ib3R0b21QYWdpbmcsXG5cdFx0XHR0aGlzLnRvcFBhZ2luZyxcblx0XHRcdHRoaXMuYm9yZGVyXG5cdFx0KTtcblx0fVxuXG5cdHdpdGhIZWFkZXIoZW5hYmxlZDogYm9vbGVhbik6IFN0cnVjdHVyZURlZmluaXRpb25CdWlsZGVyIHtcblx0XHR0aGlzLmhlYWRlckVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0d2l0aEJvdHRvbVBhZ2luZyhwYWdpbmc6IFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb24pOiBTdHJ1Y3R1cmVEZWZpbml0aW9uQnVpbGRlciB7XG5cdFx0dGhpcy5ib3R0b21QYWdpbmcgPSBwYWdpbmc7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR3aXRoVG9wUGFnaW5nKHBhZ2luZzogU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbik6IFN0cnVjdHVyZURlZmluaXRpb25CdWlsZGVyIHtcblx0XHR0aGlzLnRvcFBhZ2luZyA9IHBhZ2luZztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHdpdGhCb3JkZXIoZW5hYmxlZDogYm9vbGVhbik6IFN0cnVjdHVyZURlZmluaXRpb25CdWlsZGVyIHtcblx0XHR0aGlzLmJvcmRlciA9IGVuYWJsZWQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxufVxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRGVmaW5pdGlvbkRlZmF1bHRCdWlsZGVyIGV4dGVuZHMgU3RydWN0dXJlRGVmaW5pdGlvbkJ1aWxkZXIge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IGRlZmF1bHRIZWFkZXJFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdEJvdHRvbVBhZ2luZzogU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbiA9IG5ldyBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uLkRlZmF1bHRCdWlsZGVyKCkuYnVpbGQoKTtcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdFRvcFBhZ2luZzogU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbiA9IG5ldyBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uLkRlZmF1bHRCdWlsZGVyKCkuYnVpbGQoKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdFN0cnVjdHVyZURlZmluaXRpb25EZWZhdWx0QnVpbGRlci5kZWZhdWx0SGVhZGVyRW5hYmxlZCxcblx0XHRcdFN0cnVjdHVyZURlZmluaXRpb25EZWZhdWx0QnVpbGRlci5kZWZhdWx0Qm90dG9tUGFnaW5nLFxuXHRcdFx0U3RydWN0dXJlRGVmaW5pdGlvbkRlZmF1bHRCdWlsZGVyLmRlZmF1bHRUb3BQYWdpbmdcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVEZWZpbml0aW9uIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGhlYWRlckVuYWJsZWQ6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSByZWFkb25seSBib3R0b21QYWdpbmc6IFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb247XG5cblx0cHJpdmF0ZSByZWFkb25seSB0b3BQYWdpbmc6IFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb247XG5cblx0cHJpdmF0ZSByZWFkb25seSBib3JkZXI6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IoaGVhZGVyRW5hYmxlZDogYm9vbGVhbixcblx0XHRcdFx0Ym90dG9tUGFnaW5nOiBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uLFxuXHRcdFx0XHR0b3BQYWdpbmc6IFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb24sXG5cdFx0XHRcdGJvcmRlcjogYm9vbGVhbikge1xuXHRcdHRoaXMuaGVhZGVyRW5hYmxlZCA9IGhlYWRlckVuYWJsZWQ7XG5cdFx0dGhpcy5ib3R0b21QYWdpbmcgPSBib3R0b21QYWdpbmc7XG5cdFx0dGhpcy50b3BQYWdpbmcgPSB0b3BQYWdpbmc7XG5cdFx0dGhpcy5ib3JkZXIgPSBib3JkZXI7XG5cdH1cblxuXHRzdGF0aWMgQnVpbGRlciA9IFN0cnVjdHVyZURlZmluaXRpb25CdWlsZGVyO1xuXG5cdHN0YXRpYyBEZWZhdWx0QnVpbGRlciA9IFN0cnVjdHVyZURlZmluaXRpb25EZWZhdWx0QnVpbGRlcjtcblxuXHRpc0hlYWRlckVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaGVhZGVyRW5hYmxlZDtcblx0fVxuXG5cdGlzQm9yZGVyRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5ib3JkZXI7XG5cdH1cblxuXHRnZXRCb3R0b21QYWdpbmcoKTogU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMuYm90dG9tUGFnaW5nO1xuXHR9XG5cblx0Z2V0VG9wUGFnaW5nKCk6IFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb24ge1xuXHRcdHJldHVybiB0aGlzLnRvcFBhZ2luZztcblx0fVxuXG59XG4iXX0=