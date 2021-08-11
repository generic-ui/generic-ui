/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { SchemaTheme } from '../../../../../schema/core/api/schema-theme';
import { SchemaCommandInvoker } from '../../../../../schema/core/api/schema.command-invoker';
var StructureThemeGateway = /** @class */ (function () {
    function StructureThemeGateway(schemaCommandDispatcher) {
        this.schemaCommandDispatcher = schemaCommandDispatcher;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StructureThemeGateway.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.theme2 !== undefined && changes.theme2.currentValue !== undefined) {
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
        { type: SchemaCommandInvoker }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXRoZW1lLmdhdGV3YXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvZ2F0ZS9zY2hlbWEvc3RydWN0dXJlLXRoZW1lLmdhdGV3YXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUc3RjtJQVFDLCtCQUE2Qix1QkFBNkM7UUFBN0MsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUFzQjtJQUMxRSxDQUFDOzs7OztJQUVELDJDQUFXOzs7O0lBQVgsVUFBWSxPQUF5QztRQUVwRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUM5RSxJQUFJLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuRDtJQUNGLENBQUM7O2dCQWhCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHVCQUF1QjtpQkFDakM7Ozs7Z0JBTFEsb0JBQW9COzs7eUJBUTNCLEtBQUs7O0lBWVAsNEJBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQWRZLHFCQUFxQjs7O0lBRWpDLHVDQUNvQjs7Ozs7SUFFUix3REFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmVbdGhlbWUyXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlVGhlbWVHYXRld2F5IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHR0aGVtZTI6IFNjaGVtYVRoZW1lO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hQ29tbWFuZERpc3BhdGNoZXI6IFNjaGVtYUNvbW1hbmRJbnZva2VyKSB7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U3RydWN0dXJlVGhlbWVHYXRld2F5Pik6IHZvaWQge1xuXG5cdFx0aWYgKGNoYW5nZXMudGhlbWUyICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy50aGVtZTIuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2NoZW1hQ29tbWFuZERpc3BhdGNoZXIuc2V0VGhlbWUodGhpcy50aGVtZTIpO1xuXHRcdH1cblx0fVxufVxuIl19