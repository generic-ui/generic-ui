/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StructureInfoPanelConfig = /** @class */ (function () {
    function StructureInfoPanelConfig(enabled, infoDialog, columnsManager, schemaManager, sourceSize) {
        this.enabled = false;
        this.infoDialog = true;
        this.columnsManager = true;
        this.schemaManager = true;
        this.sourceSize = true;
        if (this.isNotUndefinedOrNull(enabled)) {
            this.enabled = enabled;
        }
        if (this.isNotUndefinedOrNull(infoDialog)) {
            this.infoDialog = infoDialog;
        }
        if (this.isNotUndefinedOrNull(columnsManager)) {
            this.columnsManager = columnsManager;
        }
        if (this.isNotUndefinedOrNull(sourceSize)) {
            this.sourceSize = sourceSize;
        }
        if (this.isNotUndefinedOrNull(schemaManager)) {
            this.schemaManager = schemaManager;
        }
    }
    /**
     * @return {?}
     */
    StructureInfoPanelConfig.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled;
    };
    /**
     * @return {?}
     */
    StructureInfoPanelConfig.prototype.isInfoDialogEnabled = /**
     * @return {?}
     */
    function () {
        return this.infoDialog;
    };
    /**
     * @return {?}
     */
    StructureInfoPanelConfig.prototype.isColumnsManagerEnabled = /**
     * @return {?}
     */
    function () {
        return this.columnsManager;
    };
    /**
     * @return {?}
     */
    StructureInfoPanelConfig.prototype.isSourceSizeEnabled = /**
     * @return {?}
     */
    function () {
        return this.sourceSize;
    };
    /**
     * @return {?}
     */
    StructureInfoPanelConfig.prototype.isSchemaManagerEnabled = /**
     * @return {?}
     */
    function () {
        return this.schemaManager;
    };
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    StructureInfoPanelConfig.prototype.isNotUndefinedOrNull = /**
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return config !== undefined && config !== null;
    };
    return StructureInfoPanelConfig;
}());
export { StructureInfoPanelConfig };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelConfig.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelConfig.prototype.infoDialog;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelConfig.prototype.columnsManager;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelConfig.prototype.schemaManager;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelConfig.prototype.sourceSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2ZlYXR1cmUvcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0lBUUMsa0NBQVksT0FBaUIsRUFDMUIsVUFBb0IsRUFDcEIsY0FBd0IsRUFDeEIsYUFBdUIsRUFDdkIsVUFBb0I7UUFWTixZQUFPLEdBQWEsS0FBSyxDQUFDO1FBQzFCLGVBQVUsR0FBYSxJQUFJLENBQUM7UUFDNUIsbUJBQWMsR0FBYSxJQUFJLENBQUM7UUFDaEMsa0JBQWEsR0FBYSxJQUFJLENBQUM7UUFDL0IsZUFBVSxHQUFhLElBQUksQ0FBQztRQVE1QyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN2QjtRQUVELElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7U0FDckM7UUFFRCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztTQUM3QjtRQUVELElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1NBQ25DO0lBRUYsQ0FBQzs7OztJQUVELDRDQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsc0RBQW1COzs7SUFBbkI7UUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELDBEQUF1Qjs7O0lBQXZCO1FBQ0MsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxzREFBbUI7OztJQUFuQjtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQseURBQXNCOzs7SUFBdEI7UUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBRU8sdURBQW9COzs7OztJQUE1QixVQUE2QixNQUFlO1FBQzNDLE9BQU8sTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDO0lBQ2hELENBQUM7SUFFRiwrQkFBQztBQUFELENBQUMsQUE1REQsSUE0REM7Ozs7Ozs7SUExREEsMkNBQTJDOzs7OztJQUMzQyw4Q0FBNkM7Ozs7O0lBQzdDLGtEQUFpRDs7Ozs7SUFDakQsaURBQWdEOzs7OztJQUNoRCw4Q0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGVuYWJsZWQ/OiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgcmVhZG9ubHkgaW5mb0RpYWxvZz86IGJvb2xlYW4gPSB0cnVlO1xuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbnNNYW5hZ2VyPzogYm9vbGVhbiA9IHRydWU7XG5cdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hTWFuYWdlcj86IGJvb2xlYW4gPSB0cnVlO1xuXHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZVNpemU/OiBib29sZWFuID0gdHJ1ZTtcblxuXHRjb25zdHJ1Y3RvcihlbmFibGVkPzogYm9vbGVhbixcblx0XHRcdFx0aW5mb0RpYWxvZz86IGJvb2xlYW4sXG5cdFx0XHRcdGNvbHVtbnNNYW5hZ2VyPzogYm9vbGVhbixcblx0XHRcdFx0c2NoZW1hTWFuYWdlcj86IGJvb2xlYW4sXG5cdFx0XHRcdHNvdXJjZVNpemU/OiBib29sZWFuKSB7XG5cblx0XHRpZiAodGhpcy5pc05vdFVuZGVmaW5lZE9yTnVsbChlbmFibGVkKSkge1xuXHRcdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc05vdFVuZGVmaW5lZE9yTnVsbChpbmZvRGlhbG9nKSkge1xuXHRcdFx0dGhpcy5pbmZvRGlhbG9nID0gaW5mb0RpYWxvZztcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc05vdFVuZGVmaW5lZE9yTnVsbChjb2x1bW5zTWFuYWdlcikpIHtcblx0XHRcdHRoaXMuY29sdW1uc01hbmFnZXIgPSBjb2x1bW5zTWFuYWdlcjtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc05vdFVuZGVmaW5lZE9yTnVsbChzb3VyY2VTaXplKSkge1xuXHRcdFx0dGhpcy5zb3VyY2VTaXplID0gc291cmNlU2l6ZTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc05vdFVuZGVmaW5lZE9yTnVsbChzY2hlbWFNYW5hZ2VyKSkge1xuXHRcdFx0dGhpcy5zY2hlbWFNYW5hZ2VyID0gc2NoZW1hTWFuYWdlcjtcblx0XHR9XG5cblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0aXNJbmZvRGlhbG9nRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pbmZvRGlhbG9nO1xuXHR9XG5cblx0aXNDb2x1bW5zTWFuYWdlckVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uc01hbmFnZXI7XG5cdH1cblxuXHRpc1NvdXJjZVNpemVFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZVNpemU7XG5cdH1cblxuXHRpc1NjaGVtYU1hbmFnZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYU1hbmFnZXI7XG5cdH1cblxuXHRwcml2YXRlIGlzTm90VW5kZWZpbmVkT3JOdWxsKGNvbmZpZzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBjb25maWcgIT09IHVuZGVmaW5lZCAmJiBjb25maWcgIT09IG51bGw7XG5cdH1cblxufVxuIl19