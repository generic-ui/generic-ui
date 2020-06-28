/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainEvent } from '@generic-ui/hermes';
export class SelectionModeSetEvent extends DomainEvent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLW1vZGUtc2V0LmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2RvbWFpbi9mb3JtYXRpb24vbW9kZS9zZWxlY3Rpb24tbW9kZS1zZXQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUtqRCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsV0FBd0I7Ozs7O0lBRWxFLFlBQVksV0FBd0IsRUFDaEIsSUFBc0I7UUFDekMsS0FBSyxDQUFDLFdBQVcsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO1FBRHpCLFNBQUksR0FBSixJQUFJLENBQWtCO0lBRTFDLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ04sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Q0FFRDs7Ozs7O0lBUkcscUNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25Nb2RlIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9yb3ctc2VsZWN0aW9uJztcblxuZXhwb3J0IGNsYXNzIFNlbGVjdGlvbk1vZGVTZXRFdmVudCBleHRlbmRzIERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IG1vZGU6IFJvd1NlbGVjdGlvbk1vZGUpIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ1NlbGVjdGlvbk1vZGVTZXRFdmVudCcpO1xuXHR9XG5cblx0Z2V0TW9kZSgpOiBSb3dTZWxlY3Rpb25Nb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5tb2RlO1xuXHR9XG5cbn1cbiJdfQ==