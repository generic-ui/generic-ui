/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { CompositionCommandDispatcher } from '../../../../composition/domain-api/composition.command-dispatcher';
import { CompositionId } from '../../../../composition/domain/composition.id';
import { CompositionDispatcher } from '../../../../composition/domain/composition.dispatcher';
import { compositionGlobalId } from '../../../../composition/domain-api/composition.global-id';
import { ColumnDefinitionId } from '../../../../composition/domain-api/read/definition/column-definition-id';
export class LocalCompositionCommandDispatcher extends CompositionCommandDispatcher {
    /**
     * @param {?} compositionId
     * @param {?} compositionDispatcher
     */
    constructor(compositionId, compositionDispatcher) {
        super(compositionDispatcher);
        this.compositionId = compositionId;
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    createComposition(compositionId = compositionGlobalId) {
        super.createComposition(this.compositionId);
    }
    /**
     * @param {?} params
     * @return {?}
     */
    setColumns(params) {
        super.setColumns(params, this.compositionId);
    }
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    setWidth(width, compositionId = compositionGlobalId) {
        super.setWidth(width, this.compositionId);
    }
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    setContainerWidth(width, compositionId = compositionGlobalId) {
        super.setContainerWidth(width, this.compositionId);
    }
    /**
     * @param {?} enabled
     * @param {?=} compositionId
     * @return {?}
     */
    setResizeWidth(enabled, compositionId = compositionGlobalId) {
        super.setResizeWidth(enabled, this.compositionId);
    }
    /**
     * @param {?} columnDefId
     * @param {?=} compositionId
     * @return {?}
     */
    enableColumn(columnDefId, compositionId = compositionGlobalId) {
        super.enableColumn(columnDefId, this.compositionId);
    }
    /**
     * @param {?} columnDefId
     * @param {?=} compositionId
     * @return {?}
     */
    disableColumn(columnDefId, compositionId = compositionGlobalId) {
        super.disableColumn(columnDefId, this.compositionId);
    }
    /**
     * @param {?} columnDefId
     * @param {?=} compositionId
     * @return {?}
     */
    moveLeft(columnDefId, compositionId = compositionGlobalId) {
        super.moveLeft(columnDefId, this.compositionId);
    }
    /**
     * @param {?} columnDefId
     * @param {?=} compositionId
     * @return {?}
     */
    moveRight(columnDefId, compositionId = compositionGlobalId) {
        super.moveRight(columnDefId, this.compositionId);
    }
}
LocalCompositionCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalCompositionCommandDispatcher.ctorParameters = () => [
    { type: CompositionId },
    { type: CompositionDispatcher }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CompositionId]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalCompositionCommandDispatcher.prototype, "createComposition", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Array]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalCompositionCommandDispatcher.prototype, "setColumns", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, CompositionId]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalCompositionCommandDispatcher.prototype, "setWidth", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, CompositionId]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalCompositionCommandDispatcher.prototype, "setContainerWidth", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Boolean, CompositionId]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalCompositionCommandDispatcher.prototype, "setResizeWidth", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ColumnDefinitionId, CompositionId]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalCompositionCommandDispatcher.prototype, "enableColumn", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ColumnDefinitionId, CompositionId]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalCompositionCommandDispatcher.prototype, "disableColumn", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ColumnDefinitionId, CompositionId]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalCompositionCommandDispatcher.prototype, "moveLeft", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ColumnDefinitionId, CompositionId]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalCompositionCommandDispatcher.prototype, "moveRight", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalCompositionCommandDispatcher.prototype.compositionId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtY29tcG9zaXRpb24uY29tbWFuZC1kaXNwYXRjaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2ZlYXR1cmUvbG9jYWwvY29tcG9zaXRpb24vbG9jYWwtY29tcG9zaXRpb24uY29tbWFuZC1kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDakgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBRS9GLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBSTdHLE1BQU0sT0FBTyxpQ0FBa0MsU0FBUSw0QkFBNEI7Ozs7O0lBRWxGLFlBQTZCLGFBQTRCLEVBQ3RELHFCQUE0QztRQUM5QyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUZELGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBR3pELENBQUM7Ozs7O0lBR0QsaUJBQWlCLENBQUMsZ0JBQStCLG1CQUFtQjtRQUNuRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBR0QsVUFBVSxDQUFDLE1BQTJCO1FBQ3JDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFHRCxRQUFRLENBQUMsS0FBYSxFQUFFLGdCQUErQixtQkFBbUI7UUFDekUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7OztJQUdELGlCQUFpQixDQUFDLEtBQWEsRUFBRSxnQkFBK0IsbUJBQW1CO1FBQ2xGLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7OztJQUdELGNBQWMsQ0FBQyxPQUFnQixFQUFFLGdCQUErQixtQkFBbUI7UUFDbEYsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7OztJQUdELFlBQVksQ0FBQyxXQUErQixFQUFFLGdCQUErQixtQkFBbUI7UUFDL0YsS0FBSyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7OztJQUdELGFBQWEsQ0FBQyxXQUErQixFQUFFLGdCQUErQixtQkFBbUI7UUFDaEcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7OztJQUdELFFBQVEsQ0FBQyxXQUErQixFQUFFLGdCQUErQixtQkFBbUI7UUFDM0YsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7OztJQUdELFNBQVMsQ0FBQyxXQUErQixFQUFFLGdCQUErQixtQkFBbUI7UUFDNUYsS0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7OztZQW5ERCxVQUFVOzs7O1lBUEYsYUFBYTtZQUNiLHFCQUFxQjs7QUFlN0I7SUFEQyxRQUFROzs2Q0FDd0IsYUFBYTs7MEVBRTdDO0FBR0Q7SUFEQyxRQUFROzs2Q0FDVSxLQUFLOzttRUFFdkI7QUFHRDtJQURDLFFBQVE7O3FEQUM4QixhQUFhOztpRUFFbkQ7QUFHRDtJQURDLFFBQVE7O3FEQUN1QyxhQUFhOzswRUFFNUQ7QUFHRDtJQURDLFFBQVE7O3NEQUN1QyxhQUFhOzt1RUFFNUQ7QUFHRDtJQURDLFFBQVE7OzZDQUNpQixrQkFBa0IsRUFBaUIsYUFBYTs7cUVBRXpFO0FBR0Q7SUFEQyxRQUFROzs2Q0FDa0Isa0JBQWtCLEVBQWlCLGFBQWE7O3NFQUUxRTtBQUdEO0lBREMsUUFBUTs7NkNBQ2Esa0JBQWtCLEVBQWlCLGFBQWE7O2lFQUVyRTtBQUdEO0lBREMsUUFBUTs7NkNBQ2Msa0JBQWtCLEVBQWlCLGFBQWE7O2tFQUV0RTs7Ozs7O0lBaERXLDBEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluLWFwaS9jb21wb3NpdGlvbi5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkRpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29tcG9zaXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBjb21wb3NpdGlvbkdsb2JhbElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluLWFwaS9jb21wb3NpdGlvbi5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgQ29sdW1uUGFyYW1zIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9zZXQtY29sdW1ucy9jb2x1bW4ucGFyYW1zJztcbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uLWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxDb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyIGV4dGVuZHMgQ29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRjb21wb3NpdGlvbkRpc3BhdGNoZXI6IENvbXBvc2l0aW9uRGlzcGF0Y2hlcikge1xuXHRcdHN1cGVyKGNvbXBvc2l0aW9uRGlzcGF0Y2hlcik7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0Y3JlYXRlQ29tcG9zaXRpb24oY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5jcmVhdGVDb21wb3NpdGlvbih0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldENvbHVtbnMocGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+KTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0Q29sdW1ucyhwYXJhbXMsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0V2lkdGgod2lkdGg6IG51bWJlciwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRXaWR0aCh3aWR0aCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRDb250YWluZXJXaWR0aCh3aWR0aDogbnVtYmVyLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLnNldENvbnRhaW5lcldpZHRoKHdpZHRoLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFJlc2l6ZVdpZHRoKGVuYWJsZWQ6IGJvb2xlYW4sIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0UmVzaXplV2lkdGgoZW5hYmxlZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRlbmFibGVDb2x1bW4oY29sdW1uRGVmSWQ6IENvbHVtbkRlZmluaXRpb25JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5lbmFibGVDb2x1bW4oY29sdW1uRGVmSWQsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0ZGlzYWJsZUNvbHVtbihjb2x1bW5EZWZJZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLmRpc2FibGVDb2x1bW4oY29sdW1uRGVmSWQsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0bW92ZUxlZnQoY29sdW1uRGVmSWQ6IENvbHVtbkRlZmluaXRpb25JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5tb3ZlTGVmdChjb2x1bW5EZWZJZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRtb3ZlUmlnaHQoY29sdW1uRGVmSWQ6IENvbHVtbkRlZmluaXRpb25JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5tb3ZlUmlnaHQoY29sdW1uRGVmSWQsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxufVxuIl19