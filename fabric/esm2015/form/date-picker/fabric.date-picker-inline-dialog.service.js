/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FabricInlineDialogService } from '../../modal/inline-dialog/fabric-inline-dialog.service';
import { Theme } from '../../themes/theme';
import { FabricPlacement } from '../../common/modal/cords/fabric-placement';
export class FabricDatePickerInlineDialogService {
    /**
     * @param {?} fabricInlineDialogService
     */
    constructor(fabricInlineDialogService) {
        this.fabricInlineDialogService = fabricInlineDialogService;
    }
    /**
     * @param {?} element
     * @param {?} component
     * @param {?=} datePickerThem
     * @return {?}
     */
    open(element, component, datePickerThem) {
        /** @type {?} */
        let theme = Theme.FABRIC;
        if (datePickerThem) {
            theme = datePickerThem;
        }
        this.fabricInlineDialogService.open(element, component, { placement: FabricPlacement.BOTTOM, offset: 0, theme });
    }
    /**
     * @return {?}
     */
    close() {
        this.fabricInlineDialogService.close();
    }
    /**
     * @return {?}
     */
    isOpened() {
        return this.fabricInlineDialogService.isOpened();
    }
    /**
     * @return {?}
     */
    onOpened() {
        return this.fabricInlineDialogService.onOpened();
    }
}
FabricDatePickerInlineDialogService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FabricDatePickerInlineDialogService.ctorParameters = () => [
    { type: FabricInlineDialogService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerInlineDialogService.prototype.fabricInlineDialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLmRhdGUtcGlja2VyLWlubGluZS1kaWFsb2cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvZmFicmljLmRhdGUtcGlja2VyLWlubGluZS1kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFjLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUc3RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNuRyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRzVFLE1BQU0sT0FBTyxtQ0FBbUM7Ozs7SUFFL0MsWUFBNkIseUJBQW9EO1FBQXBELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7SUFDakYsQ0FBQzs7Ozs7OztJQUVELElBQUksQ0FBQyxPQUFtQixFQUN0QixTQUFvQixFQUNwQixjQUFzQjs7WUFDbkIsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNO1FBRXhCLElBQUksY0FBYyxFQUFFO1lBQ25CLEtBQUssR0FBRyxjQUFjLENBQUM7U0FDdkI7UUFFRCxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxTQUFTLEVBQUUsZUFBZSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbEgsQ0FBQzs7OztJQUVELEtBQUs7UUFDSixJQUFJLENBQUMseUJBQXlCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xELENBQUM7OztZQTVCRCxVQUFVOzs7O1lBSkYseUJBQXlCOzs7Ozs7O0lBT3JCLHdFQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRmFicmljSW5saW5lRGlhbG9nU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGFsL2lubGluZS1kaWFsb2cvZmFicmljLWlubGluZS1kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lcy90aGVtZSc7XG5pbXBvcnQgeyBGYWJyaWNQbGFjZW1lbnQgfSBmcm9tICcuLi8uLi9jb21tb24vbW9kYWwvY29yZHMvZmFicmljLXBsYWNlbWVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBmYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlOiBGYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlKSB7XG5cdH1cblxuXHRvcGVuKGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG5cdFx0IGNvbXBvbmVudDogVHlwZTxhbnk+LFxuXHRcdCBkYXRlUGlja2VyVGhlbT86IFRoZW1lKTogdm9pZCB7XG5cdFx0bGV0IHRoZW1lID0gVGhlbWUuRkFCUklDO1xuXG5cdFx0aWYgKGRhdGVQaWNrZXJUaGVtKSB7XG5cdFx0XHR0aGVtZSA9IGRhdGVQaWNrZXJUaGVtO1xuXHRcdH1cblxuXHRcdHRoaXMuZmFicmljSW5saW5lRGlhbG9nU2VydmljZS5vcGVuKGVsZW1lbnQsIGNvbXBvbmVudCwgeyBwbGFjZW1lbnQ6IEZhYnJpY1BsYWNlbWVudC5CT1RUT00sIG9mZnNldDogMCwgdGhlbWUgfSk7XG5cdH1cblxuXHRjbG9zZSgpOiB2b2lkIHtcblx0XHR0aGlzLmZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2UuY2xvc2UoKTtcblx0fVxuXG5cdGlzT3BlbmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2UuaXNPcGVuZWQoKTtcblx0fVxuXG5cdG9uT3BlbmVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLmZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2Uub25PcGVuZWQoKTtcblx0fVxuXG59XG4iXX0=