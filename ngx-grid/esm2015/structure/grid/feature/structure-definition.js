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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWRlZmluaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvc3RydWN0dXJlLWRlZmluaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUUxRSxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsY0FBbUM7Ozs7OztJQUlsRixZQUFvQixhQUFzQixFQUMvQixZQUE4QixFQUM5QixTQUEyQjtRQUNyQyxLQUFLLEVBQUUsQ0FBQztRQUhXLGtCQUFhLEdBQWIsYUFBYSxDQUFTO1FBQy9CLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUM5QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUo5QixXQUFNLEdBQVksSUFBSSxDQUFDO0lBTS9CLENBQUM7Ozs7O0lBRVMsV0FBVztRQUNwQixPQUFPLElBQUksbUJBQW1CLENBQzdCLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxZQUFZLEVBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FDWCxDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLE1BQXdCO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsTUFBd0I7UUFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxPQUFnQjtRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7Q0FFRDs7Ozs7O0lBckNBLDRDQUErQjs7Ozs7SUFFbkIsbURBQThCOzs7OztJQUN2QyxrREFBc0M7Ozs7O0lBQ3RDLCtDQUFtQzs7QUFtQ3ZDLE1BQU0sT0FBTyxpQ0FBa0MsU0FBUSwwQkFBMEI7SUFNaEY7UUFDQyxLQUFLLENBQ0osaUNBQWlDLENBQUMsb0JBQW9CLEVBQ3RELGlDQUFpQyxDQUFDLG1CQUFtQixFQUNyRCxpQ0FBaUMsQ0FBQyxnQkFBZ0IsQ0FDbEQsQ0FBQztJQUNILENBQUM7O0FBVnVCLHNEQUFvQixHQUFZLElBQUksQ0FBQztBQUNyQyxxREFBbUIsR0FBcUIsSUFBSSxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN0RixrREFBZ0IsR0FBcUIsSUFBSSxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Ozs7O0lBRjNHLHVEQUE2RDs7Ozs7SUFDN0Qsc0RBQThHOzs7OztJQUM5RyxtREFBMkc7O0FBVzVHLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7SUFjL0IsWUFBWSxhQUFzQixFQUMvQixZQUE4QixFQUM5QixTQUEyQixFQUMzQixNQUFlO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7O0FBcENNLDJCQUFPLEdBQUcsMEJBQTBCLENBQUM7QUFFckMsa0NBQWMsR0FBRyxpQ0FBaUMsQ0FBQzs7O0lBRjFELDRCQUE0Qzs7SUFFNUMsbUNBQTBEOzs7OztJQUUxRCw0Q0FBd0M7Ozs7O0lBRXhDLDJDQUFnRDs7Ozs7SUFFaEQsd0NBQTZDOzs7OztJQUU3QyxxQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZW5lcmljQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvZ2VuZXJpYy1idWlsZGVyJztcbmltcG9ydCB7IFBhZ2luZ0RlZmluaXRpb24gfSBmcm9tICcuLi8uLi9wYWdpbmcvZmVhdHVyZS9wYWdpbmctZGVmaW5pdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVEZWZpbml0aW9uQnVpbGRlciBleHRlbmRzIEdlbmVyaWNCdWlsZGVyPFN0cnVjdHVyZURlZmluaXRpb24+IHtcblxuXHRwcml2YXRlIGJvcmRlcjogYm9vbGVhbiA9IHRydWU7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBoZWFkZXJFbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIGJvdHRvbVBhZ2luZzogUGFnaW5nRGVmaW5pdGlvbixcblx0XHRcdFx0cHJpdmF0ZSB0b3BQYWdpbmc6IFBhZ2luZ0RlZmluaXRpb24pIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGJ1aWxkT2JqZWN0KCk6IFN0cnVjdHVyZURlZmluaXRpb24ge1xuXHRcdHJldHVybiBuZXcgU3RydWN0dXJlRGVmaW5pdGlvbihcblx0XHRcdHRoaXMuaGVhZGVyRW5hYmxlZCxcblx0XHRcdHRoaXMuYm90dG9tUGFnaW5nLFxuXHRcdFx0dGhpcy50b3BQYWdpbmcsXG5cdFx0XHR0aGlzLmJvcmRlclxuXHRcdCk7XG5cdH1cblxuXHR3aXRoSGVhZGVyKGVuYWJsZWQ6IGJvb2xlYW4pOiBTdHJ1Y3R1cmVEZWZpbml0aW9uQnVpbGRlciB7XG5cdFx0dGhpcy5oZWFkZXJFbmFibGVkID0gZW5hYmxlZDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHdpdGhCb3R0b21QYWdpbmcocGFnaW5nOiBQYWdpbmdEZWZpbml0aW9uKTogU3RydWN0dXJlRGVmaW5pdGlvbkJ1aWxkZXIge1xuXHRcdHRoaXMuYm90dG9tUGFnaW5nID0gcGFnaW5nO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0d2l0aFRvcFBhZ2luZyhwYWdpbmc6IFBhZ2luZ0RlZmluaXRpb24pOiBTdHJ1Y3R1cmVEZWZpbml0aW9uQnVpbGRlciB7XG5cdFx0dGhpcy50b3BQYWdpbmcgPSBwYWdpbmc7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR3aXRoQm9yZGVyKGVuYWJsZWQ6IGJvb2xlYW4pOiBTdHJ1Y3R1cmVEZWZpbml0aW9uQnVpbGRlciB7XG5cdFx0dGhpcy5ib3JkZXIgPSBlbmFibGVkO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZURlZmluaXRpb25EZWZhdWx0QnVpbGRlciBleHRlbmRzIFN0cnVjdHVyZURlZmluaXRpb25CdWlsZGVyIHtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBkZWZhdWx0SGVhZGVyRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IGRlZmF1bHRCb3R0b21QYWdpbmc6IFBhZ2luZ0RlZmluaXRpb24gPSBuZXcgUGFnaW5nRGVmaW5pdGlvbi5EZWZhdWx0QnVpbGRlcigpLmJ1aWxkKCk7XG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IGRlZmF1bHRUb3BQYWdpbmc6IFBhZ2luZ0RlZmluaXRpb24gPSBuZXcgUGFnaW5nRGVmaW5pdGlvbi5EZWZhdWx0QnVpbGRlcigpLmJ1aWxkKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRTdHJ1Y3R1cmVEZWZpbml0aW9uRGVmYXVsdEJ1aWxkZXIuZGVmYXVsdEhlYWRlckVuYWJsZWQsXG5cdFx0XHRTdHJ1Y3R1cmVEZWZpbml0aW9uRGVmYXVsdEJ1aWxkZXIuZGVmYXVsdEJvdHRvbVBhZ2luZyxcblx0XHRcdFN0cnVjdHVyZURlZmluaXRpb25EZWZhdWx0QnVpbGRlci5kZWZhdWx0VG9wUGFnaW5nXG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRGVmaW5pdGlvbiB7XG5cblx0c3RhdGljIEJ1aWxkZXIgPSBTdHJ1Y3R1cmVEZWZpbml0aW9uQnVpbGRlcjtcblxuXHRzdGF0aWMgRGVmYXVsdEJ1aWxkZXIgPSBTdHJ1Y3R1cmVEZWZpbml0aW9uRGVmYXVsdEJ1aWxkZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBoZWFkZXJFbmFibGVkOiBib29sZWFuO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYm90dG9tUGFnaW5nOiBQYWdpbmdEZWZpbml0aW9uO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdG9wUGFnaW5nOiBQYWdpbmdEZWZpbml0aW9uO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYm9yZGVyOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKGhlYWRlckVuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdGJvdHRvbVBhZ2luZzogUGFnaW5nRGVmaW5pdGlvbixcblx0XHRcdFx0dG9wUGFnaW5nOiBQYWdpbmdEZWZpbml0aW9uLFxuXHRcdFx0XHRib3JkZXI6IGJvb2xlYW4pIHtcblx0XHR0aGlzLmhlYWRlckVuYWJsZWQgPSBoZWFkZXJFbmFibGVkO1xuXHRcdHRoaXMuYm90dG9tUGFnaW5nID0gYm90dG9tUGFnaW5nO1xuXHRcdHRoaXMudG9wUGFnaW5nID0gdG9wUGFnaW5nO1xuXHRcdHRoaXMuYm9yZGVyID0gYm9yZGVyO1xuXHR9XG5cblx0aXNIZWFkZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmhlYWRlckVuYWJsZWQ7XG5cdH1cblxuXHRpc0JvcmRlckVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYm9yZGVyO1xuXHR9XG5cblx0Z2V0Qm90dG9tUGFnaW5nKCk6IFBhZ2luZ0RlZmluaXRpb24ge1xuXHRcdHJldHVybiB0aGlzLmJvdHRvbVBhZ2luZztcblx0fVxuXG5cdGdldFRvcFBhZ2luZygpOiBQYWdpbmdEZWZpbml0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy50b3BQYWdpbmc7XG5cdH1cblxufVxuIl19