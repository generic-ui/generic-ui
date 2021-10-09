/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Gate } from '../../../../common/cdk/component/gate';
import { StructureCommandInvoker } from '../../../core/api/structure.command-invoker';
import { Directive, Input } from '@angular/core';
import { StructureId } from '../../../core/api/structure.id';
var VerticalFormationGate = /** @class */ (function (_super) {
    tslib_1.__extends(VerticalFormationGate, _super);
    function VerticalFormationGate(structureId, structureCommandInvoker) {
        var _this = _super.call(this) || this;
        _this.structureId = structureId;
        _this.structureCommandInvoker = structureCommandInvoker;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    VerticalFormationGate.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isDefined('virtualScroll', changes)) {
            if (this.virtualScroll) {
                this.structureCommandInvoker.enableVirtualScroll(this.structureId);
            }
            else {
                this.structureCommandInvoker.disableVirtualScroll(this.structureId);
            }
        }
    };
    VerticalFormationGate.decorators = [
        { type: Directive, args: [{
                    selector: 'gui-structure[virtualScroll]'
                },] }
    ];
    /** @nocollapse */
    VerticalFormationGate.ctorParameters = function () { return [
        { type: StructureId },
        { type: StructureCommandInvoker }
    ]; };
    VerticalFormationGate.propDecorators = {
        virtualScroll: [{ type: Input }]
    };
    return VerticalFormationGate;
}(Gate));
export { VerticalFormationGate };
if (false) {
    /** @type {?} */
    VerticalFormationGate.prototype.virtualScroll;
    /**
     * @type {?}
     * @private
     */
    VerticalFormationGate.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    VerticalFormationGate.prototype.structureCommandInvoker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmdhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vZmVhdHVyZS9nYXRlL3ZlcnRpY2FsLWZvcm1hdGlvbi5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRTdELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU3RDtJQUcyQyxpREFBSTtJQUs5QywrQkFBNkIsV0FBd0IsRUFDakMsdUJBQWdEO1FBRHBFLFlBRUMsaUJBQU8sU0FDUDtRQUg0QixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCOztJQUVwRSxDQUFDOzs7OztJQUVELDJDQUFXOzs7O0lBQVgsVUFBWSxPQUF5QztRQUVwRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQzdDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNuRTtpQkFBTTtnQkFDTixJQUFJLENBQUMsdUJBQXVCLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3BFO1NBQ0Q7SUFDRixDQUFDOztnQkF0QkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw4QkFBOEI7aUJBQ3hDOzs7O2dCQUpRLFdBQVc7Z0JBRlgsdUJBQXVCOzs7Z0NBUzlCLEtBQUs7O0lBbUJQLDRCQUFDO0NBQUEsQUF4QkQsQ0FHMkMsSUFBSSxHQXFCOUM7U0FyQlkscUJBQXFCOzs7SUFFakMsOENBQ3VCOzs7OztJQUVYLDRDQUF5Qzs7Ozs7SUFDbEQsd0RBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L2dhdGUnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmVbdmlydHVhbFNjcm9sbF0nXG59KVxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsRm9ybWF0aW9uR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHZpcnR1YWxTY3JvbGw6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ29tbWFuZEludm9rZXI6IFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxWZXJ0aWNhbEZvcm1hdGlvbkdhdGU+KTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ3ZpcnR1YWxTY3JvbGwnLCBjaGFuZ2VzKSkge1xuXHRcdFx0aWYgKHRoaXMudmlydHVhbFNjcm9sbCkge1xuXHRcdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRJbnZva2VyLmVuYWJsZVZpcnR1YWxTY3JvbGwodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRJbnZva2VyLmRpc2FibGVWaXJ0dWFsU2Nyb2xsKHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG59XG4iXX0=