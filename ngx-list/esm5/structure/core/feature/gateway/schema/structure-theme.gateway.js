/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { SchemaTheme } from '../../../../../schema/domain/theme/schema-theme';
import { SchemaCommandInvoker } from '../../../../../schema/domain-api/schema.command-invoker';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXRoZW1lLmdhdGV3YXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2ZlYXR1cmUvZ2F0ZXdheS9zY2hlbWEvc3RydWN0dXJlLXRoZW1lLmdhdGV3YXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUUzRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDOUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFFL0Y7SUFRQywrQkFBNkIsdUJBQTZDO1FBQTdDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBc0I7SUFDMUUsQ0FBQzs7Ozs7SUFFRCwyQ0FBVzs7OztJQUFYLFVBQVksYUFBNEI7UUFFdkMsSUFBSSxhQUFhLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFDMUYsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkQ7SUFDRixDQUFDOztnQkFoQkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx1QkFBdUI7aUJBQ2pDOzs7O2dCQUpRLG9CQUFvQjs7O3lCQU8zQixLQUFLOztJQVlQLDRCQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FkWSxxQkFBcUI7OztJQUVqQyx1Q0FDb0I7Ozs7O0lBRVIsd0RBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS9zY2hlbWEuY29tbWFuZC1pbnZva2VyJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZVt0aGVtZTJdJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVUaGVtZUdhdGV3YXkgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHRoZW1lMjogU2NoZW1hVGhlbWU7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzY2hlbWFDb21tYW5kRGlzcGF0Y2hlcjogU2NoZW1hQ29tbWFuZEludm9rZXIpIHtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKHNpbXBsZUNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnRoZW1lMiAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMudGhlbWUyLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNjaGVtYUNvbW1hbmREaXNwYXRjaGVyLnNldFRoZW1lKHRoaXMudGhlbWUyKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==