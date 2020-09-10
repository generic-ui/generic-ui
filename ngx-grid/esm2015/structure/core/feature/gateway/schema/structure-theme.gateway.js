/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { SchemaTheme } from '../../../../../schema/domain/theme/schema-theme';
import { SchemaCommandInvoker } from '../../../../../schema/domain-api/schema.command-invoker';
export class StructureThemeGateway {
    /**
     * @param {?} schemaCommandDispatcher
     */
    constructor(schemaCommandDispatcher) {
        this.schemaCommandDispatcher = schemaCommandDispatcher;
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    ngOnChanges(simpleChanges) {
        if (simpleChanges.theme2 !== undefined && simpleChanges.theme2.currentValue !== undefined) {
            this.schemaCommandDispatcher.setTheme(this.theme2);
        }
    }
}
StructureThemeGateway.decorators = [
    { type: Directive, args: [{
                selector: 'gui-structure[theme2]'
            },] }
];
/** @nocollapse */
StructureThemeGateway.ctorParameters = () => [
    { type: SchemaCommandInvoker }
];
StructureThemeGateway.propDecorators = {
    theme2: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureThemeGateway.prototype.theme2;
    /**
     * @type {?}
     * @private
     */
    StructureThemeGateway.prototype.schemaCommandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXRoZW1lLmdhdGV3YXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2ZlYXR1cmUvZ2F0ZXdheS9zY2hlbWEvc3RydWN0dXJlLXRoZW1lLmdhdGV3YXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUUzRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDOUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFLL0YsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUtqQyxZQUE2Qix1QkFBNkM7UUFBN0MsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUFzQjtJQUMxRSxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxhQUE0QjtRQUV2QyxJQUFJLGFBQWEsQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUMxRixJQUFJLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuRDtJQUNGLENBQUM7OztZQWhCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHVCQUF1QjthQUNqQzs7OztZQUpRLG9CQUFvQjs7O3FCQU8zQixLQUFLOzs7O0lBQU4sdUNBQ29COzs7OztJQUVSLHdEQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi1hcGkvc2NoZW1hLmNvbW1hbmQtaW52b2tlcic7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmVbdGhlbWUyXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlVGhlbWVHYXRld2F5IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHR0aGVtZTI6IFNjaGVtYVRoZW1lO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hQ29tbWFuZERpc3BhdGNoZXI6IFNjaGVtYUNvbW1hbmRJbnZva2VyKSB7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhzaW1wbGVDaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy50aGVtZTIgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnRoZW1lMi5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kRGlzcGF0Y2hlci5zZXRUaGVtZSh0aGlzLnRoZW1lMik7XG5cdFx0fVxuXHR9XG59XG4iXX0=