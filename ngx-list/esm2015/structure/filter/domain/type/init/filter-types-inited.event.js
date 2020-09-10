/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainEvent } from '@generic-ui/hermes';
export class FilterTypesInitedEvent extends DomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} map
     */
    constructor(aggregateId, map) {
        super(aggregateId, 'FilterTypesInitedEvent');
        this.map = map;
    }
    /**
     * @return {?}
     */
    getMap() {
        return this.map;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterTypesInitedEvent.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGVzLWluaXRlZC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9kb21haW4vdHlwZS9pbml0L2ZpbHRlci10eXBlcy1pbml0ZWQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUtqRCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsV0FBd0I7Ozs7O0lBRW5FLFlBQVksV0FBd0IsRUFDaEIsR0FBNEM7UUFDL0QsS0FBSyxDQUFDLFdBQVcsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBRDFCLFFBQUcsR0FBSCxHQUFHLENBQXlDO0lBRWhFLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0wsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2pCLENBQUM7Q0FFRDs7Ozs7O0lBUkcscUNBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS90eXBlL2ZpbHRlci10eXBlLnJlYWQtbW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgRmlsdGVyVHlwZXNJbml0ZWRFdmVudCBleHRlbmRzIERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IG1hcDogTWFwPHN0cmluZywgQXJyYXk8RmlsdGVyVHlwZVJlYWRNb2RlbD4+KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdGaWx0ZXJUeXBlc0luaXRlZEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRNYXAoKTogTWFwPHN0cmluZywgQXJyYXk8RmlsdGVyVHlwZVJlYWRNb2RlbD4+IHtcblx0XHRyZXR1cm4gdGhpcy5tYXA7XG5cdH1cblxufVxuIl19