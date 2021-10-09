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
        super(aggregateId, mode, 'SelectionModeSetEvent');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLW1vZGUtc2V0LmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2NvcmUvZG9tYWluL2Zvcm1hdGlvbi9tb2RlL3NlbGVjdGlvbi1tb2RlLXNldC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFFekYsTUFBTSxPQUFPLHFCQUFzQixTQUFRLG9CQUFvQjs7Ozs7SUFFOUQsWUFBWSxXQUF3QixFQUNoQixJQUFzQjtRQUN6QyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO1FBRC9CLFNBQUksR0FBSixJQUFJLENBQWtCO0lBRTFDLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ04sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Q0FFRDs7Ozs7O0lBUkcscUNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uTW9kZSB9IGZyb20gJy4uLy4uLy4uL2FwaS9yb3ctc2VsZWN0aW9uJztcbmltcG9ydCB7IFN0cnVjdHVyZURvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmRvbWFpbi1ldmVudCc7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3Rpb25Nb2RlU2V0RXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IG1vZGU6IFJvd1NlbGVjdGlvbk1vZGUpIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgbW9kZSwgJ1NlbGVjdGlvbk1vZGVTZXRFdmVudCcpO1xuXHR9XG5cblx0Z2V0TW9kZSgpOiBSb3dTZWxlY3Rpb25Nb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5tb2RlO1xuXHR9XG5cbn1cbiJdfQ==