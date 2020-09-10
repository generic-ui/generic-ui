/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainEvent } from '@generic-ui/hermes';
export class SelectedRowChangedEvent extends DomainEvent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtcm93LWNoYW5nZWQuZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvZG9tYWluL2Zvcm1hdGlvbi9zZWxlY3RlZC1yb3ctY2hhbmdlZC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSWpELE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxXQUF3Qjs7Ozs7OztJQUVwRSxZQUFZLFdBQXdCLEVBQ2hCLFlBQTJCLEVBQzNCLFdBQW9CLEVBQ3BCLGFBQXNCO1FBQ3pDLEtBQUssQ0FBQyxXQUFXLEVBQUUseUJBQXlCLENBQUMsQ0FBQztRQUgzQixpQkFBWSxHQUFaLFlBQVksQ0FBZTtRQUMzQixnQkFBVyxHQUFYLFdBQVcsQ0FBUztRQUNwQixrQkFBYSxHQUFiLGFBQWEsQ0FBUztJQUUxQyxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0NBQ0Q7Ozs7OztJQWpCRywrQ0FBNEM7Ozs7O0lBQzVDLDhDQUFxQzs7Ozs7SUFDckMsZ0RBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCBleHRlbmRzIERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlbGVjdGVkUm93czogQXJyYXk8c3RyaW5nPixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhbGxTZWxlY3RlZDogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhbGxVbnNlbGVjdGVkOiBib29sZWFuKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCcpO1xuXHR9XG5cblx0Z2V0U2VsZWN0ZWRSb3dzKCk6IEFycmF5PHN0cmluZz4ge1xuXHRcdHJldHVybiB0aGlzLnNlbGVjdGVkUm93cztcblx0fVxuXG5cdGlzQWxsU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsU2VsZWN0ZWQ7XG5cdH1cblxuXHRpc0FsbFVuc2VsZWN0ZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsVW5zZWxlY3RlZDtcblx0fVxufVxuIl19