/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StructureDomainEvent } from '../../../../../core/domain/structure.domain-event';
export class SelectionModeSetEvent extends StructureDomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} mode
     */
    constructor(aggregateId, mode) {
        super(aggregateId, 'SelectionModeSetEvent');
        this.mode = mode;
    }
    /**
     * @return {?}
     */
    getMode() {
        return this.mode;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectionModeSetEvent.prototype.mode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLW1vZGUtc2V0LmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2NvcmUvZG9tYWluL2Zvcm1hdGlvbi9tb2RlL3NlbGVjdGlvbi1tb2RlLXNldC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFFekYsTUFBTSxPQUFPLHFCQUFzQixTQUFRLG9CQUFvQjs7Ozs7SUFFOUQsWUFBWSxXQUF3QixFQUNoQixJQUFzQjtRQUN6QyxLQUFLLENBQUMsV0FBVyxFQUFFLHVCQUF1QixDQUFDLENBQUM7UUFEekIsU0FBSSxHQUFKLElBQUksQ0FBa0I7SUFFMUMsQ0FBQzs7OztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQztDQUVEOzs7Ozs7SUFSRyxxQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25Nb2RlIH0gZnJvbSAnLi4vLi4vLi4vYXBpL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgU3RydWN0dXJlRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuZG9tYWluLWV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFNlbGVjdGlvbk1vZGVTZXRFdmVudCBleHRlbmRzIFN0cnVjdHVyZURvbWFpbkV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbW9kZTogUm93U2VsZWN0aW9uTW9kZSkge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnU2VsZWN0aW9uTW9kZVNldEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRNb2RlKCk6IFJvd1NlbGVjdGlvbk1vZGUge1xuXHRcdHJldHVybiB0aGlzLm1vZGU7XG5cdH1cblxufVxuIl19