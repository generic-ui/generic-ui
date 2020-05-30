/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { SchemaTheme } from '../../../../../schema/domain/theme/schema-theme';
import { SchemaCommandDispatcher } from '../../../../../schema/domain-api/schema.command-dispatcher';
var StructureThemeGateway = /** @class */ (function () {
    function StructureThemeGateway(schemaCommandDispatcher) {
        this.schemaCommandDispatcher = schemaCommandDispatcher;
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    StructureThemeGateway.prototype.ngOnChanges = /**
     * @param {?} simpleChanges
     * @return {?}
     */
    function (simpleChanges) {
        if (simpleChanges.theme2 !== undefined && simpleChanges.theme2.currentValue !== undefined) {
            this.schemaCommandDispatcher.setTheme(this.theme2);
        }
    };
    StructureThemeGateway.decorators = [
        { type: Directive, args: [{
                    selector: 'gui-structure[theme2]'
                },] }
    ];
    /** @nocollapse */
    StructureThemeGateway.ctorParameters = function () { return [
        { type: SchemaCommandDispatcher }
    ]; };
    StructureThemeGateway.propDecorators = {
        theme2: [{ type: Input }]
    };
    return StructureThemeGateway;
}());
export { StructureThemeGateway };
if (false) {
    /** @type {?} */
    StructureThemeGateway.prototype.theme2;
    /**
     * @type {?}
     * @private
     */
    StructureThemeGateway.prototype.schemaCommandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXRoZW1lLmdhdGV3YXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9nYXRld2F5L3NjaGVtYS9zdHJ1Y3R1cmUtdGhlbWUuZ2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRTNFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUM5RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUVyRztJQVFDLCtCQUE2Qix1QkFBZ0Q7UUFBaEQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtJQUFHLENBQUM7Ozs7O0lBRWpGLDJDQUFXOzs7O0lBQVgsVUFBWSxhQUE0QjtRQUV2QyxJQUFJLGFBQWEsQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUMxRixJQUFJLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuRDtJQUNGLENBQUM7O2dCQWZELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsdUJBQXVCO2lCQUNqQzs7OztnQkFKUSx1QkFBdUI7Ozt5QkFPOUIsS0FBSzs7SUFXUCw0QkFBQztDQUFBLEFBaEJELElBZ0JDO1NBYlkscUJBQXFCOzs7SUFFakMsdUNBQ29COzs7OztJQUVSLHdEQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi1hcGkvc2NoZW1hLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmVbdGhlbWUyXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlVGhlbWVHYXRld2F5IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHR0aGVtZTI6IFNjaGVtYVRoZW1lO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hQ29tbWFuZERpc3BhdGNoZXI6IFNjaGVtYUNvbW1hbmREaXNwYXRjaGVyKSB7fVxuXG5cdG5nT25DaGFuZ2VzKHNpbXBsZUNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnRoZW1lMiAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMudGhlbWUyLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNjaGVtYUNvbW1hbmREaXNwYXRjaGVyLnNldFRoZW1lKHRoaXMudGhlbWUyKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==