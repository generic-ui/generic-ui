/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GenericBuilder } from '../../../common/cdk/generic-builder';
import { StructurePagingDefinition } from './paging/structure-paging-definition';
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
StructureDefinitionDefaultBuilder.defaultBottomPaging = new StructurePagingDefinition.DefaultBuilder().build();
StructureDefinitionDefaultBuilder.defaultTopPaging = new StructurePagingDefinition.DefaultBuilder().build();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWRlZmluaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvc3RydWN0dXJlLWRlZmluaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVqRixNQUFNLE9BQU8sMEJBQTJCLFNBQVEsY0FBbUM7Ozs7OztJQUlsRixZQUFvQixhQUFzQixFQUMvQixZQUF1QyxFQUN2QyxTQUFvQztRQUM5QyxLQUFLLEVBQUUsQ0FBQztRQUhXLGtCQUFhLEdBQWIsYUFBYSxDQUFTO1FBQy9CLGlCQUFZLEdBQVosWUFBWSxDQUEyQjtRQUN2QyxjQUFTLEdBQVQsU0FBUyxDQUEyQjtRQUp2QyxXQUFNLEdBQVksSUFBSSxDQUFDO0lBTS9CLENBQUM7Ozs7O0lBRVMsV0FBVztRQUNwQixPQUFPLElBQUksbUJBQW1CLENBQzdCLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxZQUFZLEVBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FDWCxDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLE1BQWlDO1FBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsTUFBaUM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxPQUFnQjtRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7Q0FFRDs7Ozs7O0lBckNBLDRDQUErQjs7Ozs7SUFFbkIsbURBQThCOzs7OztJQUN2QyxrREFBK0M7Ozs7O0lBQy9DLCtDQUE0Qzs7QUFtQ2hELE1BQU0sT0FBTyxpQ0FBa0MsU0FBUSwwQkFBMEI7SUFNaEY7UUFDQyxLQUFLLENBQ0osaUNBQWlDLENBQUMsb0JBQW9CLEVBQ3RELGlDQUFpQyxDQUFDLG1CQUFtQixFQUNyRCxpQ0FBaUMsQ0FBQyxnQkFBZ0IsQ0FDbEQsQ0FBQztJQUNILENBQUM7O0FBVnVCLHNEQUFvQixHQUFZLElBQUksQ0FBQztBQUNyQyxxREFBbUIsR0FBOEIsSUFBSSx5QkFBeUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN4RyxrREFBZ0IsR0FBOEIsSUFBSSx5QkFBeUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Ozs7O0lBRjdILHVEQUE2RDs7Ozs7SUFDN0Qsc0RBQWdJOzs7OztJQUNoSSxtREFBNkg7O0FBVzlILE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7SUFVL0IsWUFBWSxhQUFzQixFQUMvQixZQUF1QyxFQUN2QyxTQUFvQyxFQUNwQyxNQUFlO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFNRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7O0FBbEJNLDJCQUFPLEdBQUcsMEJBQTBCLENBQUM7QUFFckMsa0NBQWMsR0FBRyxpQ0FBaUMsQ0FBQzs7O0lBRjFELDRCQUE0Qzs7SUFFNUMsbUNBQTBEOzs7OztJQXBCMUQsNENBQXdDOzs7OztJQUV4QywyQ0FBeUQ7Ozs7O0lBRXpELHdDQUFzRDs7Ozs7SUFFdEQscUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2VuZXJpY0J1aWxkZXIgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2dlbmVyaWMtYnVpbGRlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uIH0gZnJvbSAnLi9wYWdpbmcvc3RydWN0dXJlLXBhZ2luZy1kZWZpbml0aW9uJztcblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZURlZmluaXRpb25CdWlsZGVyIGV4dGVuZHMgR2VuZXJpY0J1aWxkZXI8U3RydWN0dXJlRGVmaW5pdGlvbj4ge1xuXG5cdHByaXZhdGUgYm9yZGVyOiBib29sZWFuID0gdHJ1ZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGhlYWRlckVuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgYm90dG9tUGFnaW5nOiBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uLFxuXHRcdFx0XHRwcml2YXRlIHRvcFBhZ2luZzogU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgYnVpbGRPYmplY3QoKTogU3RydWN0dXJlRGVmaW5pdGlvbiB7XG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVEZWZpbml0aW9uKFxuXHRcdFx0dGhpcy5oZWFkZXJFbmFibGVkLFxuXHRcdFx0dGhpcy5ib3R0b21QYWdpbmcsXG5cdFx0XHR0aGlzLnRvcFBhZ2luZyxcblx0XHRcdHRoaXMuYm9yZGVyXG5cdFx0KTtcblx0fVxuXG5cdHdpdGhIZWFkZXIoZW5hYmxlZDogYm9vbGVhbik6IFN0cnVjdHVyZURlZmluaXRpb25CdWlsZGVyIHtcblx0XHR0aGlzLmhlYWRlckVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0d2l0aEJvdHRvbVBhZ2luZyhwYWdpbmc6IFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb24pOiBTdHJ1Y3R1cmVEZWZpbml0aW9uQnVpbGRlciB7XG5cdFx0dGhpcy5ib3R0b21QYWdpbmcgPSBwYWdpbmc7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR3aXRoVG9wUGFnaW5nKHBhZ2luZzogU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbik6IFN0cnVjdHVyZURlZmluaXRpb25CdWlsZGVyIHtcblx0XHR0aGlzLnRvcFBhZ2luZyA9IHBhZ2luZztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHdpdGhCb3JkZXIoZW5hYmxlZDogYm9vbGVhbik6IFN0cnVjdHVyZURlZmluaXRpb25CdWlsZGVyIHtcblx0XHR0aGlzLmJvcmRlciA9IGVuYWJsZWQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxufVxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRGVmaW5pdGlvbkRlZmF1bHRCdWlsZGVyIGV4dGVuZHMgU3RydWN0dXJlRGVmaW5pdGlvbkJ1aWxkZXIge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IGRlZmF1bHRIZWFkZXJFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdEJvdHRvbVBhZ2luZzogU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbiA9IG5ldyBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uLkRlZmF1bHRCdWlsZGVyKCkuYnVpbGQoKTtcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdFRvcFBhZ2luZzogU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbiA9IG5ldyBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uLkRlZmF1bHRCdWlsZGVyKCkuYnVpbGQoKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdFN0cnVjdHVyZURlZmluaXRpb25EZWZhdWx0QnVpbGRlci5kZWZhdWx0SGVhZGVyRW5hYmxlZCxcblx0XHRcdFN0cnVjdHVyZURlZmluaXRpb25EZWZhdWx0QnVpbGRlci5kZWZhdWx0Qm90dG9tUGFnaW5nLFxuXHRcdFx0U3RydWN0dXJlRGVmaW5pdGlvbkRlZmF1bHRCdWlsZGVyLmRlZmF1bHRUb3BQYWdpbmdcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVEZWZpbml0aW9uIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGhlYWRlckVuYWJsZWQ6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSByZWFkb25seSBib3R0b21QYWdpbmc6IFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb247XG5cblx0cHJpdmF0ZSByZWFkb25seSB0b3BQYWdpbmc6IFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb247XG5cblx0cHJpdmF0ZSByZWFkb25seSBib3JkZXI6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IoaGVhZGVyRW5hYmxlZDogYm9vbGVhbixcblx0XHRcdFx0Ym90dG9tUGFnaW5nOiBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uLFxuXHRcdFx0XHR0b3BQYWdpbmc6IFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb24sXG5cdFx0XHRcdGJvcmRlcjogYm9vbGVhbikge1xuXHRcdHRoaXMuaGVhZGVyRW5hYmxlZCA9IGhlYWRlckVuYWJsZWQ7XG5cdFx0dGhpcy5ib3R0b21QYWdpbmcgPSBib3R0b21QYWdpbmc7XG5cdFx0dGhpcy50b3BQYWdpbmcgPSB0b3BQYWdpbmc7XG5cdFx0dGhpcy5ib3JkZXIgPSBib3JkZXI7XG5cdH1cblxuXHRzdGF0aWMgQnVpbGRlciA9IFN0cnVjdHVyZURlZmluaXRpb25CdWlsZGVyO1xuXG5cdHN0YXRpYyBEZWZhdWx0QnVpbGRlciA9IFN0cnVjdHVyZURlZmluaXRpb25EZWZhdWx0QnVpbGRlcjtcblxuXHRpc0hlYWRlckVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaGVhZGVyRW5hYmxlZDtcblx0fVxuXG5cdGlzQm9yZGVyRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5ib3JkZXI7XG5cdH1cblxuXHRnZXRCb3R0b21QYWdpbmcoKTogU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMuYm90dG9tUGFnaW5nO1xuXHR9XG5cblx0Z2V0VG9wUGFnaW5nKCk6IFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb24ge1xuXHRcdHJldHVybiB0aGlzLnRvcFBhZ2luZztcblx0fVxuXG59XG4iXX0=