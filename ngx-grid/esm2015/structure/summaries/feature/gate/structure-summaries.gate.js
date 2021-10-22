/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
import { SummariesCommandInvoker } from '../../core/api/summaries.command-invoker';
import { StructureId } from '../../../core/api/structure.id';
export class StructureSummariesGate extends Gate {
    /**
     * @param {?} structureId
     * @param {?} summariesCommandInvoker
     */
    constructor(structureId, summariesCommandInvoker) {
        super();
        this.structureId = structureId;
        this.summariesCommandInvoker = summariesCommandInvoker;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isDefined('summaries', changes)) {
            this.summariesCommandInvoker.setConfig(this.summaries, this.structureId);
        }
    }
}
StructureSummariesGate.decorators = [
    { type: Directive, args: [{
                selector: 'gui-structure[summaries]'
            },] }
];
/** @nocollapse */
StructureSummariesGate.ctorParameters = () => [
    { type: StructureId },
    { type: SummariesCommandInvoker }
];
StructureSummariesGate.propDecorators = {
    summaries: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureSummariesGate.prototype.summaries;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesGate.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureSummariesGate.prototype.summariesCommandInvoker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXN1bW1hcmllcy5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc3VtbWFyaWVzL2ZlYXR1cmUvZ2F0ZS9zdHJ1Y3R1cmUtc3VtbWFyaWVzLmdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUc3RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFNN0QsTUFBTSxPQUFPLHNCQUF1QixTQUFRLElBQUk7Ozs7O0lBSy9DLFlBQTZCLFdBQXdCLEVBQ2pDLHVCQUFnRDtRQUNuRSxLQUFLLEVBQUUsQ0FBQztRQUZvQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO0lBRXBFLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQTBDO1FBRXJELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN6RTtJQUVGLENBQUM7OztZQW5CRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjthQUNwQzs7OztZQUxRLFdBQVc7WUFEWCx1QkFBdUI7Ozt3QkFTOUIsS0FBSzs7OztJQUFOLDJDQUMyQjs7Ozs7SUFFZiw2Q0FBeUM7Ozs7O0lBQ2xELHlEQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNDb25maWcgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9zdW1tYXJpZXMtY29uZmlnJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgU3VtbWFyaWVzQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9zdW1tYXJpZXMuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlW3N1bW1hcmllc10nXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVN1bW1hcmllc0dhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRzdW1tYXJpZXM6IFN1bW1hcmllc0NvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdW1tYXJpZXNDb21tYW5kSW52b2tlcjogU3VtbWFyaWVzQ29tbWFuZEludm9rZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZVN1bW1hcmllc0dhdGU+KSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ3N1bW1hcmllcycsIGNoYW5nZXMpKSB7XG5cdFx0XHR0aGlzLnN1bW1hcmllc0NvbW1hbmRJbnZva2VyLnNldENvbmZpZyh0aGlzLnN1bW1hcmllcywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19