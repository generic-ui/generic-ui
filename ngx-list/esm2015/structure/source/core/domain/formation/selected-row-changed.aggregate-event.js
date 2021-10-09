/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SelectedRowChangedEvent } from './selected-row-changed.event';
import { StructureAggregateEvent } from '../../../../core/domain/structure.aggregate-event';
export class SelectedRowChangedAggregateEvent extends StructureAggregateEvent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtcm93LWNoYW5nZWQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2NvcmUvZG9tYWluL2Zvcm1hdGlvbi9zZWxlY3RlZC1yb3ctY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBRTVGLE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSx1QkFBdUI7Ozs7Ozs7SUFFNUUsWUFBWSxXQUF3QixFQUNoQixZQUEyQixFQUMzQixXQUFvQixFQUNwQixhQUFzQjtRQUN6QyxLQUFLLENBQUMsV0FBVyxFQUFFLGtDQUFrQyxDQUFDLENBQUM7UUFIcEMsaUJBQVksR0FBWixZQUFZLENBQWU7UUFDM0IsZ0JBQVcsR0FBWCxXQUFXLENBQVM7UUFDcEIsa0JBQWEsR0FBYixhQUFhLENBQVM7SUFFMUMsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksdUJBQXVCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEgsQ0FBQztDQUNEOzs7Ozs7SUFURyx3REFBNEM7Ozs7O0lBQzVDLHVEQUFxQzs7Ozs7SUFDckMseURBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCB9IGZyb20gJy4vc2VsZWN0ZWQtcm93LWNoYW5nZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlLWV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFNlbGVjdGVkUm93Q2hhbmdlZEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgU3RydWN0dXJlQWdncmVnYXRlRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWxlY3RlZFJvd3M6IEFycmF5PHN0cmluZz4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWxsU2VsZWN0ZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWxsVW5zZWxlY3RlZDogYm9vbGVhbikge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnU2VsZWN0ZWRSb3dDaGFuZ2VkQWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHRyZXR1cm4gbmV3IFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSwgdGhpcy5zZWxlY3RlZFJvd3MsIHRoaXMuYWxsU2VsZWN0ZWQsIHRoaXMuYWxsVW5zZWxlY3RlZCk7XG5cdH1cbn1cbiJdfQ==