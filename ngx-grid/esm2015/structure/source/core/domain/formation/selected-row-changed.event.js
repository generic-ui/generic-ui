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
        super(structureId, { selectedRows, allSelected, allUnselected }, 'SelectedRowChangedEvent');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtcm93LWNoYW5nZWQuZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vZm9ybWF0aW9uL3NlbGVjdGVkLXJvdy1jaGFuZ2VkLmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUV0RixNQUFNLE9BQU8sdUJBQXdCLFNBQVEsb0JBQW9COzs7Ozs7O0lBRWhFLFlBQVksV0FBd0IsRUFDaEIsWUFBMkIsRUFDM0IsV0FBb0IsRUFDcEIsYUFBc0I7UUFDekMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLEVBQUUseUJBQXlCLENBQUMsQ0FBQztRQUh6RSxpQkFBWSxHQUFaLFlBQVksQ0FBZTtRQUMzQixnQkFBVyxHQUFYLFdBQVcsQ0FBUztRQUNwQixrQkFBYSxHQUFiLGFBQWEsQ0FBUztJQUUxQyxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0NBQ0Q7Ozs7OztJQWpCRywrQ0FBNEM7Ozs7O0lBQzVDLDhDQUFxQzs7Ozs7SUFDckMsZ0RBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuZG9tYWluLWV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50IGV4dGVuZHMgU3RydWN0dXJlRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWxlY3RlZFJvd3M6IEFycmF5PHN0cmluZz4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWxsU2VsZWN0ZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWxsVW5zZWxlY3RlZDogYm9vbGVhbikge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCB7IHNlbGVjdGVkUm93cywgYWxsU2VsZWN0ZWQsIGFsbFVuc2VsZWN0ZWQgfSwgJ1NlbGVjdGVkUm93Q2hhbmdlZEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRTZWxlY3RlZFJvd3MoKTogQXJyYXk8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWRSb3dzO1xuXHR9XG5cblx0aXNBbGxTZWxlY3RlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGxTZWxlY3RlZDtcblx0fVxuXG5cdGlzQWxsVW5zZWxlY3RlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hbGxVbnNlbGVjdGVkO1xuXHR9XG59XG4iXX0=