/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GenericBuilder } from '../../../../common/cdk/generic-builder';
export class StructurePagingDefinitionBuilder extends GenericBuilder {
    /**
     * @param {?} enabled
     */
    constructor(enabled) {
        super();
        this.enabled = enabled;
    }
    /**
     * @protected
     * @return {?}
     */
    buildObject() {
        return new StructurePagingDefinition(this.enabled);
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    withEnabled(enabled) {
        this.enabled = enabled;
        return this;
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
export class StructurePagingDefinition {
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
StructurePagingDefinition.Builder = StructurePagingDefinitionBuilder;
StructurePagingDefinition.DefaultBuilder = StructurePagingDefinitionDefaultBuilder;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhZ2luZy1kZWZpbml0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL3BhZ2luZy9zdHJ1Y3R1cmUtcGFnaW5nLWRlZmluaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUV4RSxNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsY0FBeUM7Ozs7SUFJOUYsWUFBWSxPQUFnQjtRQUMzQixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRVMsV0FBVztRQUNwQixPQUFPLElBQUkseUJBQXlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQWdCO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztDQUNEOzs7Ozs7SUFmQSxtREFBeUI7O0FBaUIxQixNQUFNLE9BQU8sdUNBQXdDLFNBQVEsZ0NBQWdDO0lBSTVGO1FBQ0MsS0FBSyxDQUFDLHVDQUF1QyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7O0FBSnVCLHNEQUFjLEdBQUcsSUFBSSxDQUFDOzs7Ozs7SUFBOUMsdURBQThDOztBQU8vQyxNQUFNLE9BQU8seUJBQXlCOzs7O0lBSXJDLFlBQVksT0FBZ0I7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7OztJQU1ELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7QUFOTSxpQ0FBTyxHQUFHLGdDQUFnQyxDQUFDO0FBRTNDLHdDQUFjLEdBQUcsdUNBQXVDLENBQUM7OztJQUZoRSxrQ0FBa0Q7O0lBRWxELHlDQUFnRTs7Ozs7SUFSaEUsNENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2VuZXJpY0J1aWxkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2dlbmVyaWMtYnVpbGRlcic7XG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uQnVpbGRlciBleHRlbmRzIEdlbmVyaWNCdWlsZGVyPFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb24+IHtcblxuXHRwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IoZW5hYmxlZDogYm9vbGVhbikge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblx0fVxuXG5cdHByb3RlY3RlZCBidWlsZE9iamVjdCgpOiBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uIHtcblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb24odGhpcy5lbmFibGVkKTtcblx0fVxuXG5cdHdpdGhFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uQnVpbGRlciB7XG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbkRlZmF1bHRCdWlsZGVyIGV4dGVuZHMgU3RydWN0dXJlUGFnaW5nRGVmaW5pdGlvbkJ1aWxkZXIge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IGRlZmF1bHRFbmFibGVkID0gdHJ1ZTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uRGVmYXVsdEJ1aWxkZXIuZGVmYXVsdEVuYWJsZWQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVQYWdpbmdEZWZpbml0aW9uIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IoZW5hYmxlZDogYm9vbGVhbikge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdH1cblxuXHRzdGF0aWMgQnVpbGRlciA9IFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb25CdWlsZGVyO1xuXG5cdHN0YXRpYyBEZWZhdWx0QnVpbGRlciA9IFN0cnVjdHVyZVBhZ2luZ0RlZmluaXRpb25EZWZhdWx0QnVpbGRlcjtcblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZDtcblx0fVxuXG59XG4iXX0=