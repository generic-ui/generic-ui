/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GenericBuilder } from '../../../common/cdk/generic-builder';
import { PagingDefinition } from '../../paging/feature/paging-definition';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWRlZmluaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2ZlYXR1cmUvc3RydWN0dXJlLWRlZmluaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUUxRSxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsY0FBbUM7Ozs7OztJQUlsRixZQUFvQixhQUFzQixFQUMvQixZQUE4QixFQUM5QixTQUEyQjtRQUNyQyxLQUFLLEVBQUUsQ0FBQztRQUhXLGtCQUFhLEdBQWIsYUFBYSxDQUFTO1FBQy9CLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUM5QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUo5QixXQUFNLEdBQVksSUFBSSxDQUFDO0lBTS9CLENBQUM7Ozs7O0lBRVMsV0FBVztRQUNwQixPQUFPLElBQUksbUJBQW1CLENBQzdCLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxZQUFZLEVBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FDWCxDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLE1BQXdCO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsTUFBd0I7UUFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxPQUFnQjtRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7Q0FFRDs7Ozs7O0lBckNBLDRDQUErQjs7Ozs7SUFFbkIsbURBQThCOzs7OztJQUN2QyxrREFBc0M7Ozs7O0lBQ3RDLCtDQUFtQzs7QUFtQ3ZDLE1BQU0sT0FBTyxpQ0FBa0MsU0FBUSwwQkFBMEI7SUFNaEY7UUFDQyxLQUFLLENBQ0osaUNBQWlDLENBQUMsb0JBQW9CLEVBQ3RELGlDQUFpQyxDQUFDLG1CQUFtQixFQUNyRCxpQ0FBaUMsQ0FBQyxnQkFBZ0IsQ0FDbEQsQ0FBQztJQUNILENBQUM7O0FBVnVCLHNEQUFvQixHQUFZLElBQUksQ0FBQztBQUNyQyxxREFBbUIsR0FBcUIsSUFBSSxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN0RixrREFBZ0IsR0FBcUIsSUFBSSxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Ozs7O0lBRjNHLHVEQUE2RDs7Ozs7SUFDN0Qsc0RBQThHOzs7OztJQUM5RyxtREFBMkc7O0FBVzVHLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7SUFVL0IsWUFBWSxhQUFzQixFQUMvQixZQUE4QixFQUM5QixTQUEyQixFQUMzQixNQUFlO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFNRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7O0FBbEJNLDJCQUFPLEdBQUcsMEJBQTBCLENBQUM7QUFFckMsa0NBQWMsR0FBRyxpQ0FBaUMsQ0FBQzs7O0lBRjFELDRCQUE0Qzs7SUFFNUMsbUNBQTBEOzs7OztJQXBCMUQsNENBQXdDOzs7OztJQUV4QywyQ0FBZ0Q7Ozs7O0lBRWhELHdDQUE2Qzs7Ozs7SUFFN0MscUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2VuZXJpY0J1aWxkZXIgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2dlbmVyaWMtYnVpbGRlcic7XG5pbXBvcnQgeyBQYWdpbmdEZWZpbml0aW9uIH0gZnJvbSAnLi4vLi4vcGFnaW5nL2ZlYXR1cmUvcGFnaW5nLWRlZmluaXRpb24nO1xuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRGVmaW5pdGlvbkJ1aWxkZXIgZXh0ZW5kcyBHZW5lcmljQnVpbGRlcjxTdHJ1Y3R1cmVEZWZpbml0aW9uPiB7XG5cblx0cHJpdmF0ZSBib3JkZXI6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaGVhZGVyRW5hYmxlZDogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSBib3R0b21QYWdpbmc6IFBhZ2luZ0RlZmluaXRpb24sXG5cdFx0XHRcdHByaXZhdGUgdG9wUGFnaW5nOiBQYWdpbmdEZWZpbml0aW9uKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBidWlsZE9iamVjdCgpOiBTdHJ1Y3R1cmVEZWZpbml0aW9uIHtcblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZURlZmluaXRpb24oXG5cdFx0XHR0aGlzLmhlYWRlckVuYWJsZWQsXG5cdFx0XHR0aGlzLmJvdHRvbVBhZ2luZyxcblx0XHRcdHRoaXMudG9wUGFnaW5nLFxuXHRcdFx0dGhpcy5ib3JkZXJcblx0XHQpO1xuXHR9XG5cblx0d2l0aEhlYWRlcihlbmFibGVkOiBib29sZWFuKTogU3RydWN0dXJlRGVmaW5pdGlvbkJ1aWxkZXIge1xuXHRcdHRoaXMuaGVhZGVyRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR3aXRoQm90dG9tUGFnaW5nKHBhZ2luZzogUGFnaW5nRGVmaW5pdGlvbik6IFN0cnVjdHVyZURlZmluaXRpb25CdWlsZGVyIHtcblx0XHR0aGlzLmJvdHRvbVBhZ2luZyA9IHBhZ2luZztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHdpdGhUb3BQYWdpbmcocGFnaW5nOiBQYWdpbmdEZWZpbml0aW9uKTogU3RydWN0dXJlRGVmaW5pdGlvbkJ1aWxkZXIge1xuXHRcdHRoaXMudG9wUGFnaW5nID0gcGFnaW5nO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0d2l0aEJvcmRlcihlbmFibGVkOiBib29sZWFuKTogU3RydWN0dXJlRGVmaW5pdGlvbkJ1aWxkZXIge1xuXHRcdHRoaXMuYm9yZGVyID0gZW5hYmxlZDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG59XG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVEZWZpbml0aW9uRGVmYXVsdEJ1aWxkZXIgZXh0ZW5kcyBTdHJ1Y3R1cmVEZWZpbml0aW9uQnVpbGRlciB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdEhlYWRlckVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBkZWZhdWx0Qm90dG9tUGFnaW5nOiBQYWdpbmdEZWZpbml0aW9uID0gbmV3IFBhZ2luZ0RlZmluaXRpb24uRGVmYXVsdEJ1aWxkZXIoKS5idWlsZCgpO1xuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBkZWZhdWx0VG9wUGFnaW5nOiBQYWdpbmdEZWZpbml0aW9uID0gbmV3IFBhZ2luZ0RlZmluaXRpb24uRGVmYXVsdEJ1aWxkZXIoKS5idWlsZCgpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0U3RydWN0dXJlRGVmaW5pdGlvbkRlZmF1bHRCdWlsZGVyLmRlZmF1bHRIZWFkZXJFbmFibGVkLFxuXHRcdFx0U3RydWN0dXJlRGVmaW5pdGlvbkRlZmF1bHRCdWlsZGVyLmRlZmF1bHRCb3R0b21QYWdpbmcsXG5cdFx0XHRTdHJ1Y3R1cmVEZWZpbml0aW9uRGVmYXVsdEJ1aWxkZXIuZGVmYXVsdFRvcFBhZ2luZ1xuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZURlZmluaXRpb24ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaGVhZGVyRW5hYmxlZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGJvdHRvbVBhZ2luZzogUGFnaW5nRGVmaW5pdGlvbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHRvcFBhZ2luZzogUGFnaW5nRGVmaW5pdGlvbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGJvcmRlcjogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihoZWFkZXJFbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRib3R0b21QYWdpbmc6IFBhZ2luZ0RlZmluaXRpb24sXG5cdFx0XHRcdHRvcFBhZ2luZzogUGFnaW5nRGVmaW5pdGlvbixcblx0XHRcdFx0Ym9yZGVyOiBib29sZWFuKSB7XG5cdFx0dGhpcy5oZWFkZXJFbmFibGVkID0gaGVhZGVyRW5hYmxlZDtcblx0XHR0aGlzLmJvdHRvbVBhZ2luZyA9IGJvdHRvbVBhZ2luZztcblx0XHR0aGlzLnRvcFBhZ2luZyA9IHRvcFBhZ2luZztcblx0XHR0aGlzLmJvcmRlciA9IGJvcmRlcjtcblx0fVxuXG5cdHN0YXRpYyBCdWlsZGVyID0gU3RydWN0dXJlRGVmaW5pdGlvbkJ1aWxkZXI7XG5cblx0c3RhdGljIERlZmF1bHRCdWlsZGVyID0gU3RydWN0dXJlRGVmaW5pdGlvbkRlZmF1bHRCdWlsZGVyO1xuXG5cdGlzSGVhZGVyRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5oZWFkZXJFbmFibGVkO1xuXHR9XG5cblx0aXNCb3JkZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmJvcmRlcjtcblx0fVxuXG5cdGdldEJvdHRvbVBhZ2luZygpOiBQYWdpbmdEZWZpbml0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5ib3R0b21QYWdpbmc7XG5cdH1cblxuXHRnZXRUb3BQYWdpbmcoKTogUGFnaW5nRGVmaW5pdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMudG9wUGFnaW5nO1xuXHR9XG5cbn1cbiJdfQ==