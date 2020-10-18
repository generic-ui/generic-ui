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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtJQVFDLGtDQUFZLE9BQWlCLEVBQzFCLFVBQW9CLEVBQ3BCLGNBQXdCLEVBQ3hCLGFBQXVCLEVBQ3ZCLFVBQW9CO1FBVk4sWUFBTyxHQUFhLEtBQUssQ0FBQztRQUMxQixlQUFVLEdBQWEsSUFBSSxDQUFDO1FBQzVCLG1CQUFjLEdBQWEsSUFBSSxDQUFDO1FBQ2hDLGtCQUFhLEdBQWEsSUFBSSxDQUFDO1FBQy9CLGVBQVUsR0FBYSxJQUFJLENBQUM7UUFRNUMsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDdkI7UUFFRCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztTQUM3QjtRQUVELElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7U0FDN0I7UUFFRCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUM3QyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztTQUNuQztJQUVGLENBQUM7Ozs7SUFFRCw0Q0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELHNEQUFtQjs7O0lBQW5CO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCwwREFBdUI7OztJQUF2QjtRQUNDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsc0RBQW1COzs7SUFBbkI7UUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELHlEQUFzQjs7O0lBQXRCO1FBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7Ozs7OztJQUVPLHVEQUFvQjs7Ozs7SUFBNUIsVUFBNkIsTUFBZTtRQUMzQyxPQUFPLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxLQUFLLElBQUksQ0FBQztJQUNoRCxDQUFDO0lBRUYsK0JBQUM7QUFBRCxDQUFDLEFBNURELElBNERDOzs7Ozs7O0lBMURBLDJDQUEyQzs7Ozs7SUFDM0MsOENBQTZDOzs7OztJQUM3QyxrREFBaUQ7Ozs7O0lBQ2pELGlEQUFnRDs7Ozs7SUFDaEQsOENBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZyB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBlbmFibGVkPzogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIHJlYWRvbmx5IGluZm9EaWFsb2c/OiBib29sZWFuID0gdHJ1ZTtcblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5zTWFuYWdlcj86IGJvb2xlYW4gPSB0cnVlO1xuXHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYU1hbmFnZXI/OiBib29sZWFuID0gdHJ1ZTtcblx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VTaXplPzogYm9vbGVhbiA9IHRydWU7XG5cblx0Y29uc3RydWN0b3IoZW5hYmxlZD86IGJvb2xlYW4sXG5cdFx0XHRcdGluZm9EaWFsb2c/OiBib29sZWFuLFxuXHRcdFx0XHRjb2x1bW5zTWFuYWdlcj86IGJvb2xlYW4sXG5cdFx0XHRcdHNjaGVtYU1hbmFnZXI/OiBib29sZWFuLFxuXHRcdFx0XHRzb3VyY2VTaXplPzogYm9vbGVhbikge1xuXG5cdFx0aWYgKHRoaXMuaXNOb3RVbmRlZmluZWRPck51bGwoZW5hYmxlZCkpIHtcblx0XHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNOb3RVbmRlZmluZWRPck51bGwoaW5mb0RpYWxvZykpIHtcblx0XHRcdHRoaXMuaW5mb0RpYWxvZyA9IGluZm9EaWFsb2c7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNOb3RVbmRlZmluZWRPck51bGwoY29sdW1uc01hbmFnZXIpKSB7XG5cdFx0XHR0aGlzLmNvbHVtbnNNYW5hZ2VyID0gY29sdW1uc01hbmFnZXI7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNOb3RVbmRlZmluZWRPck51bGwoc291cmNlU2l6ZSkpIHtcblx0XHRcdHRoaXMuc291cmNlU2l6ZSA9IHNvdXJjZVNpemU7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNOb3RVbmRlZmluZWRPck51bGwoc2NoZW1hTWFuYWdlcikpIHtcblx0XHRcdHRoaXMuc2NoZW1hTWFuYWdlciA9IHNjaGVtYU1hbmFnZXI7XG5cdFx0fVxuXG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZDtcblx0fVxuXG5cdGlzSW5mb0RpYWxvZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaW5mb0RpYWxvZztcblx0fVxuXG5cdGlzQ29sdW1uc01hbmFnZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbnNNYW5hZ2VyO1xuXHR9XG5cblx0aXNTb3VyY2VTaXplRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VTaXplO1xuXHR9XG5cblx0aXNTY2hlbWFNYW5hZ2VyRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWFNYW5hZ2VyO1xuXHR9XG5cblx0cHJpdmF0ZSBpc05vdFVuZGVmaW5lZE9yTnVsbChjb25maWc6IGJvb2xlYW4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gY29uZmlnICE9PSB1bmRlZmluZWQgJiYgY29uZmlnICE9PSBudWxsO1xuXHR9XG5cbn1cbiJdfQ==