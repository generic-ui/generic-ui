/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { GenericBuilder } from '../../../common/cdk/generic-builder';
import { PagingDefinition } from '../../paging/feature/paging-definition';
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
    StructureDefinitionDefaultBuilder.defaultBottomPaging = new PagingDefinition.DefaultBuilder().build();
    StructureDefinitionDefaultBuilder.defaultTopPaging = new PagingDefinition.DefaultBuilder().build();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWRlZmluaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2ZlYXR1cmUvc3RydWN0dXJlLWRlZmluaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFMUU7SUFBZ0Qsc0RBQW1DO0lBSWxGLG9DQUFvQixhQUFzQixFQUMvQixZQUE4QixFQUM5QixTQUEyQjtRQUZ0QyxZQUdDLGlCQUFPLFNBQ1A7UUFKbUIsbUJBQWEsR0FBYixhQUFhLENBQVM7UUFDL0Isa0JBQVksR0FBWixZQUFZLENBQWtCO1FBQzlCLGVBQVMsR0FBVCxTQUFTLENBQWtCO1FBSjlCLFlBQU0sR0FBWSxJQUFJLENBQUM7O0lBTS9CLENBQUM7Ozs7O0lBRVMsZ0RBQVc7Ozs7SUFBckI7UUFDQyxPQUFPLElBQUksbUJBQW1CLENBQzdCLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxZQUFZLEVBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FDWCxDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCwrQ0FBVTs7OztJQUFWLFVBQVcsT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOzs7OztJQUVELHFEQUFnQjs7OztJQUFoQixVQUFpQixNQUF3QjtRQUN4QyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7Ozs7O0lBRUQsa0RBQWE7Ozs7SUFBYixVQUFjLE1BQXdCO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7Ozs7SUFFRCwrQ0FBVTs7OztJQUFWLFVBQVcsT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUYsaUNBQUM7QUFBRCxDQUFDLEFBdkNELENBQWdELGNBQWMsR0F1QzdEOzs7Ozs7O0lBckNBLDRDQUErQjs7Ozs7SUFFbkIsbURBQThCOzs7OztJQUN2QyxrREFBc0M7Ozs7O0lBQ3RDLCtDQUFtQzs7QUFtQ3ZDO0lBQXVELDZEQUEwQjtJQU1oRjtlQUNDLGtCQUNDLGlDQUFpQyxDQUFDLG9CQUFvQixFQUN0RCxpQ0FBaUMsQ0FBQyxtQkFBbUIsRUFDckQsaUNBQWlDLENBQUMsZ0JBQWdCLENBQ2xEO0lBQ0YsQ0FBQztJQVZ1QixzREFBb0IsR0FBWSxJQUFJLENBQUM7SUFDckMscURBQW1CLEdBQXFCLElBQUksZ0JBQWdCLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEYsa0RBQWdCLEdBQXFCLElBQUksZ0JBQWdCLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7SUFTNUcsd0NBQUM7Q0FBQSxBQWJELENBQXVELDBCQUEwQixHQWFoRjtTQWJZLGlDQUFpQzs7Ozs7O0lBRTdDLHVEQUE2RDs7Ozs7SUFDN0Qsc0RBQThHOzs7OztJQUM5RyxtREFBMkc7O0FBVzVHO0lBVUMsNkJBQVksYUFBc0IsRUFDL0IsWUFBOEIsRUFDOUIsU0FBMkIsRUFDM0IsTUFBZTtRQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDOzs7O0lBTUQsNkNBQWU7OztJQUFmO1FBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCw2Q0FBZTs7O0lBQWY7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELDZDQUFlOzs7SUFBZjtRQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsMENBQVk7OztJQUFaO1FBQ0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7SUFsQk0sMkJBQU8sR0FBRywwQkFBMEIsQ0FBQztJQUVyQyxrQ0FBYyxHQUFHLGlDQUFpQyxDQUFDO0lBa0IzRCwwQkFBQztDQUFBLEFBeENELElBd0NDO1NBeENZLG1CQUFtQjs7O0lBb0IvQiw0QkFBNEM7O0lBRTVDLG1DQUEwRDs7Ozs7SUFwQjFELDRDQUF3Qzs7Ozs7SUFFeEMsMkNBQWdEOzs7OztJQUVoRCx3Q0FBNkM7Ozs7O0lBRTdDLHFDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdlbmVyaWNCdWlsZGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9nZW5lcmljLWJ1aWxkZXInO1xuaW1wb3J0IHsgUGFnaW5nRGVmaW5pdGlvbiB9IGZyb20gJy4uLy4uL3BhZ2luZy9mZWF0dXJlL3BhZ2luZy1kZWZpbml0aW9uJztcblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZURlZmluaXRpb25CdWlsZGVyIGV4dGVuZHMgR2VuZXJpY0J1aWxkZXI8U3RydWN0dXJlRGVmaW5pdGlvbj4ge1xuXG5cdHByaXZhdGUgYm9yZGVyOiBib29sZWFuID0gdHJ1ZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGhlYWRlckVuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgYm90dG9tUGFnaW5nOiBQYWdpbmdEZWZpbml0aW9uLFxuXHRcdFx0XHRwcml2YXRlIHRvcFBhZ2luZzogUGFnaW5nRGVmaW5pdGlvbikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYnVpbGRPYmplY3QoKTogU3RydWN0dXJlRGVmaW5pdGlvbiB7XG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVEZWZpbml0aW9uKFxuXHRcdFx0dGhpcy5oZWFkZXJFbmFibGVkLFxuXHRcdFx0dGhpcy5ib3R0b21QYWdpbmcsXG5cdFx0XHR0aGlzLnRvcFBhZ2luZyxcblx0XHRcdHRoaXMuYm9yZGVyXG5cdFx0KTtcblx0fVxuXG5cdHdpdGhIZWFkZXIoZW5hYmxlZDogYm9vbGVhbik6IFN0cnVjdHVyZURlZmluaXRpb25CdWlsZGVyIHtcblx0XHR0aGlzLmhlYWRlckVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0d2l0aEJvdHRvbVBhZ2luZyhwYWdpbmc6IFBhZ2luZ0RlZmluaXRpb24pOiBTdHJ1Y3R1cmVEZWZpbml0aW9uQnVpbGRlciB7XG5cdFx0dGhpcy5ib3R0b21QYWdpbmcgPSBwYWdpbmc7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR3aXRoVG9wUGFnaW5nKHBhZ2luZzogUGFnaW5nRGVmaW5pdGlvbik6IFN0cnVjdHVyZURlZmluaXRpb25CdWlsZGVyIHtcblx0XHR0aGlzLnRvcFBhZ2luZyA9IHBhZ2luZztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHdpdGhCb3JkZXIoZW5hYmxlZDogYm9vbGVhbik6IFN0cnVjdHVyZURlZmluaXRpb25CdWlsZGVyIHtcblx0XHR0aGlzLmJvcmRlciA9IGVuYWJsZWQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxufVxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRGVmaW5pdGlvbkRlZmF1bHRCdWlsZGVyIGV4dGVuZHMgU3RydWN0dXJlRGVmaW5pdGlvbkJ1aWxkZXIge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IGRlZmF1bHRIZWFkZXJFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdEJvdHRvbVBhZ2luZzogUGFnaW5nRGVmaW5pdGlvbiA9IG5ldyBQYWdpbmdEZWZpbml0aW9uLkRlZmF1bHRCdWlsZGVyKCkuYnVpbGQoKTtcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdFRvcFBhZ2luZzogUGFnaW5nRGVmaW5pdGlvbiA9IG5ldyBQYWdpbmdEZWZpbml0aW9uLkRlZmF1bHRCdWlsZGVyKCkuYnVpbGQoKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdFN0cnVjdHVyZURlZmluaXRpb25EZWZhdWx0QnVpbGRlci5kZWZhdWx0SGVhZGVyRW5hYmxlZCxcblx0XHRcdFN0cnVjdHVyZURlZmluaXRpb25EZWZhdWx0QnVpbGRlci5kZWZhdWx0Qm90dG9tUGFnaW5nLFxuXHRcdFx0U3RydWN0dXJlRGVmaW5pdGlvbkRlZmF1bHRCdWlsZGVyLmRlZmF1bHRUb3BQYWdpbmdcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVEZWZpbml0aW9uIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGhlYWRlckVuYWJsZWQ6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSByZWFkb25seSBib3R0b21QYWdpbmc6IFBhZ2luZ0RlZmluaXRpb247XG5cblx0cHJpdmF0ZSByZWFkb25seSB0b3BQYWdpbmc6IFBhZ2luZ0RlZmluaXRpb247XG5cblx0cHJpdmF0ZSByZWFkb25seSBib3JkZXI6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IoaGVhZGVyRW5hYmxlZDogYm9vbGVhbixcblx0XHRcdFx0Ym90dG9tUGFnaW5nOiBQYWdpbmdEZWZpbml0aW9uLFxuXHRcdFx0XHR0b3BQYWdpbmc6IFBhZ2luZ0RlZmluaXRpb24sXG5cdFx0XHRcdGJvcmRlcjogYm9vbGVhbikge1xuXHRcdHRoaXMuaGVhZGVyRW5hYmxlZCA9IGhlYWRlckVuYWJsZWQ7XG5cdFx0dGhpcy5ib3R0b21QYWdpbmcgPSBib3R0b21QYWdpbmc7XG5cdFx0dGhpcy50b3BQYWdpbmcgPSB0b3BQYWdpbmc7XG5cdFx0dGhpcy5ib3JkZXIgPSBib3JkZXI7XG5cdH1cblxuXHRzdGF0aWMgQnVpbGRlciA9IFN0cnVjdHVyZURlZmluaXRpb25CdWlsZGVyO1xuXG5cdHN0YXRpYyBEZWZhdWx0QnVpbGRlciA9IFN0cnVjdHVyZURlZmluaXRpb25EZWZhdWx0QnVpbGRlcjtcblxuXHRpc0hlYWRlckVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaGVhZGVyRW5hYmxlZDtcblx0fVxuXG5cdGlzQm9yZGVyRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5ib3JkZXI7XG5cdH1cblxuXHRnZXRCb3R0b21QYWdpbmcoKTogUGFnaW5nRGVmaW5pdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMuYm90dG9tUGFnaW5nO1xuXHR9XG5cblx0Z2V0VG9wUGFnaW5nKCk6IFBhZ2luZ0RlZmluaXRpb24ge1xuXHRcdHJldHVybiB0aGlzLnRvcFBhZ2luZztcblx0fVxuXG59XG4iXX0=