/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GenericBuilder } from '../../../common/cdk/generic-builder';
/** @enum {number} */
const RowSelectionType = {
    ROW: 0,
    CHECKBOX: 1,
};
export { RowSelectionType };
RowSelectionType[RowSelectionType.ROW] = 'ROW';
RowSelectionType[RowSelectionType.CHECKBOX] = 'CHECKBOX';
/** @enum {number} */
const RowSelectionMode = {
    SINGLE: 0,
    MULTIPLE: 1,
};
export { RowSelectionMode };
RowSelectionMode[RowSelectionMode.SINGLE] = 'SINGLE';
RowSelectionMode[RowSelectionMode.MULTIPLE] = 'MULTIPLE';
export class RowSelection {
    /**
     * @private
     * @param {?} config
     */
    constructor(config) {
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
    isModeDefined() {
        return this.mode !== undefined;
    }
    /**
     * @return {?}
     */
    isTypeDefined() {
        return this.type !== undefined;
    }
    /**
     * @return {?}
     */
    isEnabledDefined() {
        return this.enabled !== undefined;
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.enabled;
    }
    /**
     * @return {?}
     */
    getMode() {
        return this.mode;
    }
    /**
     * @return {?}
     */
    getType() {
        return this.type;
    }
}
RowSelection.Builder = class RowSelectionBuilder extends GenericBuilder {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    buildObject() {
        return new RowSelection({
            enabled: this.enabled,
            type: this.type,
            mode: this.mode
        });
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    withEnabled(enabled) {
        this.enabled = enabled;
        return this;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    withType(type) {
        this.type = type;
        return this;
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    withMode(mode) {
        this.mode = mode;
        return this;
    }
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LXNlbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9kb21haW4tYXBpL3Jvdy1zZWxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7O0lBR3BFLE1BQUc7SUFDSCxXQUFROzs7Ozs7O0lBSVIsU0FBTTtJQUNOLFdBQVE7Ozs7O0FBR1QsTUFBTSxPQUFPLFlBQVk7Ozs7O0lBUXhCLFlBQW9CLE1BSW5CO1FBQ0EsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDOUI7UUFFRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztTQUN4QjtRQUVELElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ3hCO0lBQ0YsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsT0FBTztRQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsT0FBTztRQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDOztBQUVNLG9CQUFPLEdBQUcsTUFBTSxtQkFBb0IsU0FBUSxjQUE0QjtJQVE5RTtRQUNDLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksWUFBWSxDQUFDO1lBQ3ZCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDZixDQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFnQjtRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLElBQXNCO1FBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsSUFBc0I7UUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0NBRUQsQ0FBQzs7O0lBbkNGLHFCQW1DRTs7Ozs7SUFuRkYsK0JBQWtDOzs7OztJQUVsQyw0QkFBd0M7Ozs7O0lBRXhDLDRCQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdlbmVyaWNCdWlsZGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9nZW5lcmljLWJ1aWxkZXInO1xuXG5leHBvcnQgZW51bSBSb3dTZWxlY3Rpb25UeXBlIHtcblx0Uk9XLFxuXHRDSEVDS0JPWFxufVxuXG5leHBvcnQgZW51bSBSb3dTZWxlY3Rpb25Nb2RlIHtcblx0U0lOR0xFLFxuXHRNVUxUSVBMRVxufVxuXG5leHBvcnQgY2xhc3MgUm93U2VsZWN0aW9uIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSByZWFkb25seSB0eXBlOiBSb3dTZWxlY3Rpb25UeXBlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgbW9kZTogUm93U2VsZWN0aW9uTW9kZTtcblxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKGNvbmZpZzoge1xuXHRcdGVuYWJsZWQ/OiBib29sZWFuLFxuXHRcdG1vZGU/OiBSb3dTZWxlY3Rpb25Nb2RlLFxuXHRcdHR5cGU/OiBSb3dTZWxlY3Rpb25UeXBlXG5cdH0pIHtcblx0XHRpZiAoY29uZmlnLmVuYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5lbmFibGVkID0gY29uZmlnLmVuYWJsZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbmZpZy5tb2RlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMubW9kZSA9IGNvbmZpZy5tb2RlO1xuXHRcdH1cblxuXHRcdGlmIChjb25maWcudHlwZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnR5cGUgPSBjb25maWcudHlwZTtcblx0XHR9XG5cdH1cblxuXHRpc01vZGVEZWZpbmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm1vZGUgIT09IHVuZGVmaW5lZDtcblx0fVxuXG5cdGlzVHlwZURlZmluZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudHlwZSAhPT0gdW5kZWZpbmVkO1xuXHR9XG5cblx0aXNFbmFibGVkRGVmaW5lZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkICE9PSB1bmRlZmluZWQ7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZDtcblx0fVxuXG5cdGdldE1vZGUoKTogUm93U2VsZWN0aW9uTW9kZSB7XG5cdFx0cmV0dXJuIHRoaXMubW9kZTtcblx0fVxuXG5cdGdldFR5cGUoKTogUm93U2VsZWN0aW9uVHlwZSB7XG5cdFx0cmV0dXJuIHRoaXMudHlwZTtcblx0fVxuXG5cdHN0YXRpYyBCdWlsZGVyID0gY2xhc3MgUm93U2VsZWN0aW9uQnVpbGRlciBleHRlbmRzIEdlbmVyaWNCdWlsZGVyPFJvd1NlbGVjdGlvbj4ge1xuXG5cdFx0ZW5hYmxlZDogYm9vbGVhbjtcblxuXHRcdHR5cGU6IFJvd1NlbGVjdGlvblR5cGU7XG5cblx0XHRtb2RlOiBSb3dTZWxlY3Rpb25Nb2RlO1xuXG5cdFx0Y29uc3RydWN0b3IoKSB7XG5cdFx0XHRzdXBlcigpO1xuXHRcdH1cblxuXHRcdGJ1aWxkT2JqZWN0KCk6IFJvd1NlbGVjdGlvbiB7XG5cdFx0XHRyZXR1cm4gbmV3IFJvd1NlbGVjdGlvbih7XG5cdFx0XHRcdGVuYWJsZWQ6IHRoaXMuZW5hYmxlZCxcblx0XHRcdFx0dHlwZTogdGhpcy50eXBlLFxuXHRcdFx0XHRtb2RlOiB0aGlzLm1vZGVcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHdpdGhFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiBSb3dTZWxlY3Rpb25CdWlsZGVyIHtcblx0XHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHR3aXRoVHlwZSh0eXBlOiBSb3dTZWxlY3Rpb25UeXBlKTogUm93U2VsZWN0aW9uQnVpbGRlciB7XG5cdFx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0d2l0aE1vZGUobW9kZTogUm93U2VsZWN0aW9uTW9kZSk6IFJvd1NlbGVjdGlvbkJ1aWxkZXIge1xuXHRcdFx0dGhpcy5tb2RlID0gbW9kZTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHR9O1xuXG59XG4iXX0=