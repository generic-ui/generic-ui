/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Gate } from '../../../../common/cdk/component/gate';
import { StructureCommandInvoker } from '../../../core/api/structure.command-invoker';
import { Directive, Input } from '@angular/core';
import { StructureId } from '../../../core/api/structure.id';
export class VerticalFormationGate extends Gate {
    /**
     * @param {?} structureId
     * @param {?} structureCommandInvoker
     */
    constructor(structureId, structureCommandInvoker) {
        super();
        this.structureId = structureId;
        this.structureCommandInvoker = structureCommandInvoker;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isDefined('virtualScroll', changes)) {
            if (this.virtualScroll) {
                this.structureCommandInvoker.enableVirtualScroll(this.structureId);
            }
            else {
                this.structureCommandInvoker.disableVirtualScroll(this.structureId);
            }
        }
    }
}
VerticalFormationGate.decorators = [
    { type: Directive, args: [{
                selector: 'gui-structure[virtualScroll]'
            },] }
];
/** @nocollapse */
VerticalFormationGate.ctorParameters = () => [
    { type: StructureId },
    { type: StructureCommandInvoker }
];
VerticalFormationGate.propDecorators = {
    virtualScroll: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmdhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vZmVhdHVyZS9nYXRlL3ZlcnRpY2FsLWZvcm1hdGlvbi5nYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFN0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBSzdELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxJQUFJOzs7OztJQUs5QyxZQUE2QixXQUF3QixFQUNqQyx1QkFBZ0Q7UUFDbkUsS0FBSyxFQUFFLENBQUM7UUFGb0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDakMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtJQUVwRSxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUF5QztRQUVwRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQzdDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNuRTtpQkFBTTtnQkFDTixJQUFJLENBQUMsdUJBQXVCLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3BFO1NBQ0Q7SUFDRixDQUFDOzs7WUF0QkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSw4QkFBOEI7YUFDeEM7Ozs7WUFKUSxXQUFXO1lBRlgsdUJBQXVCOzs7NEJBUzlCLEtBQUs7Ozs7SUFBTiw4Q0FDdUI7Ozs7O0lBRVgsNENBQXlDOzs7OztJQUNsRCx3REFBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZSc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZVt2aXJ0dWFsU2Nyb2xsXSdcbn0pXG5leHBvcnQgY2xhc3MgVmVydGljYWxGb3JtYXRpb25HYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0dmlydHVhbFNjcm9sbDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDb21tYW5kSW52b2tlcjogU3RydWN0dXJlQ29tbWFuZEludm9rZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFZlcnRpY2FsRm9ybWF0aW9uR2F0ZT4pOiB2b2lkIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgndmlydHVhbFNjcm9sbCcsIGNoYW5nZXMpKSB7XG5cdFx0XHRpZiAodGhpcy52aXJ0dWFsU2Nyb2xsKSB7XG5cdFx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZEludm9rZXIuZW5hYmxlVmlydHVhbFNjcm9sbCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZEludm9rZXIuZGlzYWJsZVZpcnR1YWxTY3JvbGwodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==