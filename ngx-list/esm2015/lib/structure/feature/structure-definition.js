/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GenericBuilder } from '../../../common/cdk/generic-builder';
import { PagingDefinition } from '../../../structure/paging/feature/paging-definition';
export class StructureDefinitionBuilder extends GenericBuilder {
    /**
     * @param {?} headerEnabled
     * @param {?} bottomPaging
     * @param {?} topPaging
     */
    constructor(headerEnabled, bottomPaging, topPaging) {
        super();
        this.headerEnabled = headerEnabled;
        this.bottomPaging = bottomPaging;
        this.topPaging = topPaging;
        this.border = true;
    }
    /**
     * @protected
     * @return {?}
     */
    buildObject() {
        return new StructureDefinition(this.headerEnabled, this.bottomPaging, this.topPaging, this.border);
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    withHeader(enabled) {
        this.headerEnabled = enabled;
        return this;
    }
    /**
     * @param {?} paging
     * @return {?}
     */
    withBottomPaging(paging) {
        this.bottomPaging = paging;
        return this;
    }
    /**
     * @param {?} paging
     * @return {?}
     */
    withTopPaging(paging) {
        this.topPaging = paging;
        return this;
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    withBorder(enabled) {
        this.border = enabled;
        return this;
    }
}
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
export class StructureDefinitionDefaultBuilder extends StructureDefinitionBuilder {
    constructor() {
        super(StructureDefinitionDefaultBuilder.defaultHeaderEnabled, StructureDefinitionDefaultBuilder.defaultBottomPaging, StructureDefinitionDefaultBuilder.defaultTopPaging);
    }
}
StructureDefinitionDefaultBuilder.defaultHeaderEnabled = true;
StructureDefinitionDefaultBuilder.defaultBottomPaging = new PagingDefinition.DefaultBuilder().build();
StructureDefinitionDefaultBuilder.defaultTopPaging = new PagingDefinition.DefaultBuilder().build();
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
export class StructureDefinition {
    /**
     * @param {?} headerEnabled
     * @param {?} bottomPaging
     * @param {?} topPaging
     * @param {?} border
     */
    constructor(headerEnabled, bottomPaging, topPaging, border) {
        this.headerEnabled = headerEnabled;
        this.bottomPaging = bottomPaging;
        this.topPaging = topPaging;
        this.border = border;
    }
    /**
     * @return {?}
     */
    isHeaderEnabled() {
        return this.headerEnabled;
    }
    /**
     * @return {?}
     */
    isBorderEnabled() {
        return this.border;
    }
    /**
     * @return {?}
     */
    getBottomPaging() {
        return this.bottomPaging;
    }
    /**
     * @return {?}
     */
    getTopPaging() {
        return this.topPaging;
    }
}
StructureDefinition.Builder = StructureDefinitionBuilder;
StructureDefinition.DefaultBuilder = StructureDefinitionDefaultBuilder;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWRlZmluaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9zdHJ1Y3R1cmUtZGVmaW5pdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBRXZGLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxjQUFtQzs7Ozs7O0lBSWxGLFlBQW9CLGFBQXNCLEVBQy9CLFlBQThCLEVBQzlCLFNBQTJCO1FBQ3JDLEtBQUssRUFBRSxDQUFDO1FBSFcsa0JBQWEsR0FBYixhQUFhLENBQVM7UUFDL0IsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQzlCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBSjlCLFdBQU0sR0FBWSxJQUFJLENBQUM7SUFNL0IsQ0FBQzs7Ozs7SUFFUyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxtQkFBbUIsQ0FDN0IsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsTUFBTSxDQUNYLENBQUM7SUFDSCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxPQUFnQjtRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztRQUM3QixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsTUFBd0I7UUFDeEMsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7UUFDM0IsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxNQUF3QjtRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE9BQWdCO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztDQUVEOzs7Ozs7SUFyQ0EsNENBQStCOzs7OztJQUVuQixtREFBOEI7Ozs7O0lBQ3ZDLGtEQUFzQzs7Ozs7SUFDdEMsK0NBQW1DOztBQW1DdkMsTUFBTSxPQUFPLGlDQUFrQyxTQUFRLDBCQUEwQjtJQU1oRjtRQUNDLEtBQUssQ0FDSixpQ0FBaUMsQ0FBQyxvQkFBb0IsRUFDdEQsaUNBQWlDLENBQUMsbUJBQW1CLEVBQ3JELGlDQUFpQyxDQUFDLGdCQUFnQixDQUNsRCxDQUFDO0lBQ0gsQ0FBQzs7QUFWdUIsc0RBQW9CLEdBQVksSUFBSSxDQUFDO0FBQ3JDLHFEQUFtQixHQUFxQixJQUFJLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3RGLGtEQUFnQixHQUFxQixJQUFJLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDOzs7Ozs7SUFGM0csdURBQTZEOzs7OztJQUM3RCxzREFBOEc7Ozs7O0lBQzlHLG1EQUEyRzs7QUFXNUcsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7OztJQVUvQixZQUFZLGFBQXNCLEVBQy9CLFlBQThCLEVBQzlCLFNBQTJCLEVBQzNCLE1BQWU7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQzs7OztJQU1ELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELFlBQVk7UUFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQzs7QUFsQk0sMkJBQU8sR0FBRywwQkFBMEIsQ0FBQztBQUVyQyxrQ0FBYyxHQUFHLGlDQUFpQyxDQUFDOzs7SUFGMUQsNEJBQTRDOztJQUU1QyxtQ0FBMEQ7Ozs7O0lBcEIxRCw0Q0FBd0M7Ozs7O0lBRXhDLDJDQUFnRDs7Ozs7SUFFaEQsd0NBQTZDOzs7OztJQUU3QyxxQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZW5lcmljQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvZ2VuZXJpYy1idWlsZGVyJztcbmltcG9ydCB7IFBhZ2luZ0RlZmluaXRpb24gfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvcGFnaW5nL2ZlYXR1cmUvcGFnaW5nLWRlZmluaXRpb24nO1xuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRGVmaW5pdGlvbkJ1aWxkZXIgZXh0ZW5kcyBHZW5lcmljQnVpbGRlcjxTdHJ1Y3R1cmVEZWZpbml0aW9uPiB7XG5cblx0cHJpdmF0ZSBib3JkZXI6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaGVhZGVyRW5hYmxlZDogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSBib3R0b21QYWdpbmc6IFBhZ2luZ0RlZmluaXRpb24sXG5cdFx0XHRcdHByaXZhdGUgdG9wUGFnaW5nOiBQYWdpbmdEZWZpbml0aW9uKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBidWlsZE9iamVjdCgpOiBTdHJ1Y3R1cmVEZWZpbml0aW9uIHtcblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZURlZmluaXRpb24oXG5cdFx0XHR0aGlzLmhlYWRlckVuYWJsZWQsXG5cdFx0XHR0aGlzLmJvdHRvbVBhZ2luZyxcblx0XHRcdHRoaXMudG9wUGFnaW5nLFxuXHRcdFx0dGhpcy5ib3JkZXJcblx0XHQpO1xuXHR9XG5cblx0d2l0aEhlYWRlcihlbmFibGVkOiBib29sZWFuKTogU3RydWN0dXJlRGVmaW5pdGlvbkJ1aWxkZXIge1xuXHRcdHRoaXMuaGVhZGVyRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR3aXRoQm90dG9tUGFnaW5nKHBhZ2luZzogUGFnaW5nRGVmaW5pdGlvbik6IFN0cnVjdHVyZURlZmluaXRpb25CdWlsZGVyIHtcblx0XHR0aGlzLmJvdHRvbVBhZ2luZyA9IHBhZ2luZztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHdpdGhUb3BQYWdpbmcocGFnaW5nOiBQYWdpbmdEZWZpbml0aW9uKTogU3RydWN0dXJlRGVmaW5pdGlvbkJ1aWxkZXIge1xuXHRcdHRoaXMudG9wUGFnaW5nID0gcGFnaW5nO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0d2l0aEJvcmRlcihlbmFibGVkOiBib29sZWFuKTogU3RydWN0dXJlRGVmaW5pdGlvbkJ1aWxkZXIge1xuXHRcdHRoaXMuYm9yZGVyID0gZW5hYmxlZDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG59XG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVEZWZpbml0aW9uRGVmYXVsdEJ1aWxkZXIgZXh0ZW5kcyBTdHJ1Y3R1cmVEZWZpbml0aW9uQnVpbGRlciB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdEhlYWRlckVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBkZWZhdWx0Qm90dG9tUGFnaW5nOiBQYWdpbmdEZWZpbml0aW9uID0gbmV3IFBhZ2luZ0RlZmluaXRpb24uRGVmYXVsdEJ1aWxkZXIoKS5idWlsZCgpO1xuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBkZWZhdWx0VG9wUGFnaW5nOiBQYWdpbmdEZWZpbml0aW9uID0gbmV3IFBhZ2luZ0RlZmluaXRpb24uRGVmYXVsdEJ1aWxkZXIoKS5idWlsZCgpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0U3RydWN0dXJlRGVmaW5pdGlvbkRlZmF1bHRCdWlsZGVyLmRlZmF1bHRIZWFkZXJFbmFibGVkLFxuXHRcdFx0U3RydWN0dXJlRGVmaW5pdGlvbkRlZmF1bHRCdWlsZGVyLmRlZmF1bHRCb3R0b21QYWdpbmcsXG5cdFx0XHRTdHJ1Y3R1cmVEZWZpbml0aW9uRGVmYXVsdEJ1aWxkZXIuZGVmYXVsdFRvcFBhZ2luZ1xuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZURlZmluaXRpb24ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaGVhZGVyRW5hYmxlZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGJvdHRvbVBhZ2luZzogUGFnaW5nRGVmaW5pdGlvbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHRvcFBhZ2luZzogUGFnaW5nRGVmaW5pdGlvbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGJvcmRlcjogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihoZWFkZXJFbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRib3R0b21QYWdpbmc6IFBhZ2luZ0RlZmluaXRpb24sXG5cdFx0XHRcdHRvcFBhZ2luZzogUGFnaW5nRGVmaW5pdGlvbixcblx0XHRcdFx0Ym9yZGVyOiBib29sZWFuKSB7XG5cdFx0dGhpcy5oZWFkZXJFbmFibGVkID0gaGVhZGVyRW5hYmxlZDtcblx0XHR0aGlzLmJvdHRvbVBhZ2luZyA9IGJvdHRvbVBhZ2luZztcblx0XHR0aGlzLnRvcFBhZ2luZyA9IHRvcFBhZ2luZztcblx0XHR0aGlzLmJvcmRlciA9IGJvcmRlcjtcblx0fVxuXG5cdHN0YXRpYyBCdWlsZGVyID0gU3RydWN0dXJlRGVmaW5pdGlvbkJ1aWxkZXI7XG5cblx0c3RhdGljIERlZmF1bHRCdWlsZGVyID0gU3RydWN0dXJlRGVmaW5pdGlvbkRlZmF1bHRCdWlsZGVyO1xuXG5cdGlzSGVhZGVyRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5oZWFkZXJFbmFibGVkO1xuXHR9XG5cblx0aXNCb3JkZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmJvcmRlcjtcblx0fVxuXG5cdGdldEJvdHRvbVBhZ2luZygpOiBQYWdpbmdEZWZpbml0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5ib3R0b21QYWdpbmc7XG5cdH1cblxuXHRnZXRUb3BQYWdpbmcoKTogUGFnaW5nRGVmaW5pdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMudG9wUGFnaW5nO1xuXHR9XG5cbn1cbiJdfQ==