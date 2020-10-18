/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { GenericBuilder } from '../../../../common/cdk/generic-builder';
/** @enum {number} */
var RowSelectionType = {
    ROW: 0,
    CHECKBOX: 1,
};
export { RowSelectionType };
RowSelectionType[RowSelectionType.ROW] = 'ROW';
RowSelectionType[RowSelectionType.CHECKBOX] = 'CHECKBOX';
/** @enum {number} */
var RowSelectionMode = {
    SINGLE: 0,
    MULTIPLE: 1,
};
export { RowSelectionMode };
RowSelectionMode[RowSelectionMode.SINGLE] = 'SINGLE';
RowSelectionMode[RowSelectionMode.MULTIPLE] = 'MULTIPLE';
var RowSelection = /** @class */ (function () {
    function RowSelection(config) {
        if (config.enabled !== undefined) {
            this.enabled = config.enabled;
        }
        if (config.mode !== undefined) {
            this.mode = config.mode;
        }
        if (config.type !== undefined) {
            this.type = config.type;
        }
    }
    /**
     * @return {?}
     */
    RowSelection.prototype.isModeDefined = /**
     * @return {?}
     */
    function () {
        return this.mode !== undefined;
    };
    /**
     * @return {?}
     */
    RowSelection.prototype.isTypeDefined = /**
     * @return {?}
     */
    function () {
        return this.type !== undefined;
    };
    /**
     * @return {?}
     */
    RowSelection.prototype.isEnabledDefined = /**
     * @return {?}
     */
    function () {
        return this.enabled !== undefined;
    };
    /**
     * @return {?}
     */
    RowSelection.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled;
    };
    /**
     * @return {?}
     */
    RowSelection.prototype.getMode = /**
     * @return {?}
     */
    function () {
        return this.mode;
    };
    /**
     * @return {?}
     */
    RowSelection.prototype.getType = /**
     * @return {?}
     */
    function () {
        return this.type;
    };
    RowSelection.Builder = /** @class */ (function (_super) {
        tslib_1.__extends(RowSelectionBuilder, _super);
        function RowSelectionBuilder() {
            return _super.call(this) || this;
        }
        /**
         * @return {?}
         */
        RowSelectionBuilder.prototype.buildObject = /**
         * @return {?}
         */
        function () {
            return new RowSelection({
                enabled: this.enabled,
                type: this.type,
                mode: this.mode
            });
        };
        /**
         * @param {?} enabled
         * @return {?}
         */
        RowSelectionBuilder.prototype.withEnabled = /**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            this.enabled = enabled;
            return this;
        };
        /**
         * @param {?} type
         * @return {?}
         */
        RowSelectionBuilder.prototype.withType = /**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            this.type = type;
            return this;
        };
        /**
         * @param {?} mode
         * @return {?}
         */
        RowSelectionBuilder.prototype.withMode = /**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            this.mode = mode;
            return this;
        };
        return RowSelectionBuilder;
    }(GenericBuilder));
    return RowSelection;
}());
export { RowSelection };
if (false) {
    /** @type {?} */
    RowSelection.Builder;
    /**
     * @type {?}
     * @private
     */
    RowSelection.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    RowSelection.prototype.type;
    /**
     * @type {?}
     * @private
     */
    RowSelection.prototype.mode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LXNlbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9yb3ctc2VsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOzs7SUFHdkUsTUFBRztJQUNILFdBQVE7Ozs7Ozs7SUFJUixTQUFNO0lBQ04sV0FBUTs7Ozs7QUFHVDtJQVFDLHNCQUFvQixNQUluQjtRQUNBLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQzlCO1FBRUQsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDeEI7UUFFRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztTQUN4QjtJQUNGLENBQUM7Ozs7SUFFRCxvQ0FBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxvQ0FBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCx1Q0FBZ0I7OztJQUFoQjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELGdDQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsOEJBQU87OztJQUFQO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCw4QkFBTzs7O0lBQVA7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQztJQUVNLG9CQUFPO1FBQXFDLCtDQUE0QjtRQVE5RTttQkFDQyxpQkFBTztRQUNSLENBQUM7Ozs7UUFFRCx5Q0FBVzs7O1FBQVg7WUFDQyxPQUFPLElBQUksWUFBWSxDQUFDO2dCQUN2QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87Z0JBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7YUFDZixDQUFDLENBQUM7UUFDSixDQUFDOzs7OztRQUVELHlDQUFXOzs7O1FBQVgsVUFBWSxPQUFnQjtZQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixPQUFPLElBQUksQ0FBQztRQUNiLENBQUM7Ozs7O1FBRUQsc0NBQVE7Ozs7UUFBUixVQUFTLElBQXNCO1lBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQzs7Ozs7UUFFRCxzQ0FBUTs7OztRQUFSLFVBQVMsSUFBc0I7WUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsT0FBTyxJQUFJLENBQUM7UUFDYixDQUFDO1FBRUYsMEJBQUM7SUFBRCxDQUFDLEFBbkNnQixDQUFrQyxjQUFjLEdBbUMvRDtJQUVILG1CQUFDO0NBQUEsQUF2RkQsSUF1RkM7U0F2RlksWUFBWTs7O0lBa0R4QixxQkFtQ0U7Ozs7O0lBbkZGLCtCQUFrQzs7Ozs7SUFFbEMsNEJBQXdDOzs7OztJQUV4Qyw0QkFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZW5lcmljQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZ2VuZXJpYy1idWlsZGVyJztcblxuZXhwb3J0IGVudW0gUm93U2VsZWN0aW9uVHlwZSB7XG5cdFJPVyxcblx0Q0hFQ0tCT1hcbn1cblxuZXhwb3J0IGVudW0gUm93U2VsZWN0aW9uTW9kZSB7XG5cdFNJTkdMRSxcblx0TVVMVElQTEVcbn1cblxuZXhwb3J0IGNsYXNzIFJvd1NlbGVjdGlvbiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBlbmFibGVkOiBib29sZWFuO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdHlwZTogUm93U2VsZWN0aW9uVHlwZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IG1vZGU6IFJvd1NlbGVjdGlvbk1vZGU7XG5cblx0cHJpdmF0ZSBjb25zdHJ1Y3Rvcihjb25maWc6IHtcblx0XHRlbmFibGVkPzogYm9vbGVhbixcblx0XHRtb2RlPzogUm93U2VsZWN0aW9uTW9kZSxcblx0XHR0eXBlPzogUm93U2VsZWN0aW9uVHlwZVxuXHR9KSB7XG5cdFx0aWYgKGNvbmZpZy5lbmFibGVkICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuZW5hYmxlZCA9IGNvbmZpZy5lbmFibGVkO1xuXHRcdH1cblxuXHRcdGlmIChjb25maWcubW9kZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLm1vZGUgPSBjb25maWcubW9kZTtcblx0XHR9XG5cblx0XHRpZiAoY29uZmlnLnR5cGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy50eXBlID0gY29uZmlnLnR5cGU7XG5cdFx0fVxuXHR9XG5cblx0aXNNb2RlRGVmaW5lZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5tb2RlICE9PSB1bmRlZmluZWQ7XG5cdH1cblxuXHRpc1R5cGVEZWZpbmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnR5cGUgIT09IHVuZGVmaW5lZDtcblx0fVxuXG5cdGlzRW5hYmxlZERlZmluZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZCAhPT0gdW5kZWZpbmVkO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxuXHRnZXRNb2RlKCk6IFJvd1NlbGVjdGlvbk1vZGUge1xuXHRcdHJldHVybiB0aGlzLm1vZGU7XG5cdH1cblxuXHRnZXRUeXBlKCk6IFJvd1NlbGVjdGlvblR5cGUge1xuXHRcdHJldHVybiB0aGlzLnR5cGU7XG5cdH1cblxuXHRzdGF0aWMgQnVpbGRlciA9IGNsYXNzIFJvd1NlbGVjdGlvbkJ1aWxkZXIgZXh0ZW5kcyBHZW5lcmljQnVpbGRlcjxSb3dTZWxlY3Rpb24+IHtcblxuXHRcdGVuYWJsZWQ6IGJvb2xlYW47XG5cblx0XHR0eXBlOiBSb3dTZWxlY3Rpb25UeXBlO1xuXG5cdFx0bW9kZTogUm93U2VsZWN0aW9uTW9kZTtcblxuXHRcdGNvbnN0cnVjdG9yKCkge1xuXHRcdFx0c3VwZXIoKTtcblx0XHR9XG5cblx0XHRidWlsZE9iamVjdCgpOiBSb3dTZWxlY3Rpb24ge1xuXHRcdFx0cmV0dXJuIG5ldyBSb3dTZWxlY3Rpb24oe1xuXHRcdFx0XHRlbmFibGVkOiB0aGlzLmVuYWJsZWQsXG5cdFx0XHRcdHR5cGU6IHRoaXMudHlwZSxcblx0XHRcdFx0bW9kZTogdGhpcy5tb2RlXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHR3aXRoRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogUm93U2VsZWN0aW9uQnVpbGRlciB7XG5cdFx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0d2l0aFR5cGUodHlwZTogUm93U2VsZWN0aW9uVHlwZSk6IFJvd1NlbGVjdGlvbkJ1aWxkZXIge1xuXHRcdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdHdpdGhNb2RlKG1vZGU6IFJvd1NlbGVjdGlvbk1vZGUpOiBSb3dTZWxlY3Rpb25CdWlsZGVyIHtcblx0XHRcdHRoaXMubW9kZSA9IG1vZGU7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0fTtcblxufVxuIl19