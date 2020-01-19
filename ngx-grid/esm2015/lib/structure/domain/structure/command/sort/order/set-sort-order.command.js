/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Command } from '@generic-ui/hermes';
export class SetSortOrderCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} compositionId
     * @param {?} fieldId
     * @param {?} sortOrder
     */
    constructor(structureId, compositionId, fieldId, sortOrder) {
        super(structureId, 'SetSortOrderCommand');
        this.compositionId = compositionId;
        this.fieldId = fieldId;
        this.sortOrder = sortOrder;
    }
    /**
     * @return {?}
     */
    getCompositionId() {
        return this.compositionId;
    }
    /**
     * @return {?}
     */
    getFieldId() {
        return this.fieldId;
    }
    /**
     * @return {?}
     */
    getSortOrder() {
        return this.sortOrder;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSortOrderCommand.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    SetSortOrderCommand.prototype.fieldId;
    /**
     * @type {?}
     * @private
     */
    SetSortOrderCommand.prototype.sortOrder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNvcnQtb3JkZXIuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc29ydC9vcmRlci9zZXQtc29ydC1vcmRlci5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFRN0MsTUFBTSxPQUFPLG1CQUFvQixTQUFRLE9BQU87Ozs7Ozs7SUFFL0MsWUFBWSxXQUF3QixFQUNoQixhQUE0QixFQUM1QixPQUFnQixFQUNoQixTQUFxQjtRQUN4QyxLQUFLLENBQUMsV0FBVyxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFIdkIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixjQUFTLEdBQVQsU0FBUyxDQUFZO0lBRXpDLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELFlBQVk7UUFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQztDQUNEOzs7Ozs7SUFqQkcsNENBQTZDOzs7OztJQUM3QyxzQ0FBaUM7Ozs7O0lBQ2pDLHdDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBTb3J0U3RhdHVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29tbWFuZC9jb2x1bW4vc29ydC9zb3J0LXN0YXR1cyc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vZmllbGQvZGF0YS10eXBlL2ZpZWxkLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi1pZCc7XG5cblxuZXhwb3J0IGNsYXNzIFNldFNvcnRPcmRlckNvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZElkOiBGaWVsZElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvcnRPcmRlcjogU29ydFN0YXR1cykge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnU2V0U29ydE9yZGVyQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0Q29tcG9zaXRpb25JZCgpOiBDb21wb3NpdGlvbklkIHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvbklkO1xuXHR9XG5cblx0Z2V0RmllbGRJZCgpOiBGaWVsZElkIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZElkO1xuXHR9XG5cblx0Z2V0U29ydE9yZGVyKCk6IFNvcnRTdGF0dXMge1xuXHRcdHJldHVybiB0aGlzLnNvcnRPcmRlcjtcblx0fVxufVxuIl19