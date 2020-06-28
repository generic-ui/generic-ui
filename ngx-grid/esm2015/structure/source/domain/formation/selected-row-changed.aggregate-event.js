/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateEvent } from '@generic-ui/hermes';
import { SelectedRowChangedEvent } from './selected-row-changed.event';
export class SelectedRowChangedAggregateEvent extends AggregateEvent {
    /**
     * @param {?} structureId
     * @param {?} selectedRows
     * @param {?} allSelected
     * @param {?} allUnselected
     */
    constructor(structureId, selectedRows, allSelected, allUnselected) {
        super(structureId, 'SelectedRowChangedAggregateEvent');
        this.selectedRows = selectedRows;
        this.allSelected = allSelected;
        this.allUnselected = allUnselected;
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new SelectedRowChangedEvent(this.getAggregateId(), this.selectedRows, this.allSelected, this.allUnselected);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectedRowChangedAggregateEvent.prototype.selectedRows;
    /**
     * @type {?}
     * @private
     */
    SelectedRowChangedAggregateEvent.prototype.allSelected;
    /**
     * @type {?}
     * @private
     */
    SelectedRowChangedAggregateEvent.prototype.allUnselected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtcm93LWNoYW5nZWQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2RvbWFpbi9mb3JtYXRpb24vc2VsZWN0ZWQtcm93LWNoYW5nZWQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFlLE1BQU0sb0JBQW9CLENBQUM7QUFHakUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFdkUsTUFBTSxPQUFPLGdDQUFpQyxTQUFRLGNBQTJCOzs7Ozs7O0lBRWhGLFlBQVksV0FBd0IsRUFDaEIsWUFBMkIsRUFDM0IsV0FBb0IsRUFDcEIsYUFBc0I7UUFDekMsS0FBSyxDQUFDLFdBQVcsRUFBRSxrQ0FBa0MsQ0FBQyxDQUFDO1FBSHBDLGlCQUFZLEdBQVosWUFBWSxDQUFlO1FBQzNCLGdCQUFXLEdBQVgsV0FBVyxDQUFTO1FBQ3BCLGtCQUFhLEdBQWIsYUFBYSxDQUFTO0lBRTFDLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLHVCQUF1QixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BILENBQUM7Q0FDRDs7Ozs7O0lBVEcsd0RBQTRDOzs7OztJQUM1Qyx1REFBcUM7Ozs7O0lBQ3JDLHlEQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50IH0gZnJvbSAnLi9zZWxlY3RlZC1yb3ctY2hhbmdlZC5ldmVudCc7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RlZFJvd0NoYW5nZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlbGVjdGVkUm93czogQXJyYXk8c3RyaW5nPixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhbGxTZWxlY3RlZDogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhbGxVbnNlbGVjdGVkOiBib29sZWFuKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdTZWxlY3RlZFJvd0NoYW5nZWRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHJldHVybiBuZXcgU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQodGhpcy5nZXRBZ2dyZWdhdGVJZCgpLCB0aGlzLnNlbGVjdGVkUm93cywgdGhpcy5hbGxTZWxlY3RlZCwgdGhpcy5hbGxVbnNlbGVjdGVkKTtcblx0fVxufVxuIl19