/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
export class SelectedRowChangedEvent extends StructureDomainEvent {
    /**
     * @param {?} structureId
     * @param {?} selectedRows
     * @param {?} allSelected
     * @param {?} allUnselected
     */
    constructor(structureId, selectedRows, allSelected, allUnselected) {
        super(structureId, 'SelectedRowChangedEvent');
        this.selectedRows = selectedRows;
        this.allSelected = allSelected;
        this.allUnselected = allUnselected;
    }
    /**
     * @return {?}
     */
    getSelectedRows() {
        return this.selectedRows;
    }
    /**
     * @return {?}
     */
    isAllSelected() {
        return this.allSelected;
    }
    /**
     * @return {?}
     */
    isAllUnselected() {
        return this.allUnselected;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectedRowChangedEvent.prototype.selectedRows;
    /**
     * @type {?}
     * @private
     */
    SelectedRowChangedEvent.prototype.allSelected;
    /**
     * @type {?}
     * @private
     */
    SelectedRowChangedEvent.prototype.allUnselected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtcm93LWNoYW5nZWQuZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vZm9ybWF0aW9uL3NlbGVjdGVkLXJvdy1jaGFuZ2VkLmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUV0RixNQUFNLE9BQU8sdUJBQXdCLFNBQVEsb0JBQW9COzs7Ozs7O0lBRWhFLFlBQVksV0FBd0IsRUFDaEIsWUFBMkIsRUFDM0IsV0FBb0IsRUFDcEIsYUFBc0I7UUFDekMsS0FBSyxDQUFDLFdBQVcsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBSDNCLGlCQUFZLEdBQVosWUFBWSxDQUFlO1FBQzNCLGdCQUFXLEdBQVgsV0FBVyxDQUFTO1FBQ3BCLGtCQUFhLEdBQWIsYUFBYSxDQUFTO0lBRTFDLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7Q0FDRDs7Ozs7O0lBakJHLCtDQUE0Qzs7Ozs7SUFDNUMsOENBQXFDOzs7OztJQUNyQyxnREFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5kb21haW4tZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlbGVjdGVkUm93czogQXJyYXk8c3RyaW5nPixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhbGxTZWxlY3RlZDogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhbGxVbnNlbGVjdGVkOiBib29sZWFuKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCcpO1xuXHR9XG5cblx0Z2V0U2VsZWN0ZWRSb3dzKCk6IEFycmF5PHN0cmluZz4ge1xuXHRcdHJldHVybiB0aGlzLnNlbGVjdGVkUm93cztcblx0fVxuXG5cdGlzQWxsU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsU2VsZWN0ZWQ7XG5cdH1cblxuXHRpc0FsbFVuc2VsZWN0ZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsVW5zZWxlY3RlZDtcblx0fVxufVxuIl19