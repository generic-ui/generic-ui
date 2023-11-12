import { Injectable } from '@angular/core';
import { Theme } from '../../themes/theme';
import { FabricPlacement } from '../../common/modal/cords/fabric-placement';
import * as i0 from "@angular/core";
import * as i1 from "../../modal/inline-dialog/fabric-inline-dialog.service";
export class FabricDatePickerInlineDialogService {
    fabricInlineDialogService;
    constructor(fabricInlineDialogService) {
        this.fabricInlineDialogService = fabricInlineDialogService;
    }
    open(element, component, datePickerThem) {
        let theme = Theme.FABRIC;
        if (datePickerThem) {
            theme = datePickerThem;
        }
        this.fabricInlineDialogService.open(element, component, { placement: FabricPlacement.BOTTOM, offset: 0, theme });
    }
    close() {
        this.fabricInlineDialogService.close();
    }
    isOpened() {
        return this.fabricInlineDialogService.isOpened();
    }
    onOpened() {
        return this.fabricInlineDialogService.onOpened();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricDatePickerInlineDialogService, deps: [{ token: i1.FabricInlineDialogService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricDatePickerInlineDialogService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricDatePickerInlineDialogService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.FabricInlineDialogService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLWlubGluZS1kaWFsb2cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9mb3JtL2RhdGUtcGlja2VyL2ZhYnJpYy1kYXRlLXBpY2tlci1pbmxpbmUtZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUk3RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOzs7QUFHNUUsTUFBTSxPQUFPLG1DQUFtQztJQUVsQjtJQUE3QixZQUE2Qix5QkFBb0Q7UUFBcEQsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtJQUNqRixDQUFDO0lBRUQsSUFBSSxDQUFDLE9BQW1CLEVBQ3RCLFNBQW9CLEVBQ3BCLGNBQXNCO1FBQ3ZCLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFFekIsSUFBSSxjQUFjLEVBQUU7WUFDbkIsS0FBSyxHQUFHLGNBQWMsQ0FBQztTQUN2QjtRQUVELElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFLFNBQVMsRUFBRSxlQUFlLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNsSCxDQUFDO0lBRUQsS0FBSztRQUNKLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFFRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEQsQ0FBQzt1R0EzQlcsbUNBQW1DOzJHQUFuQyxtQ0FBbUM7OzJGQUFuQyxtQ0FBbUM7a0JBRC9DLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RhbC9pbmxpbmUtZGlhbG9nL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZXMvdGhlbWUnO1xuaW1wb3J0IHsgRmFicmljUGxhY2VtZW50IH0gZnJvbSAnLi4vLi4vY29tbW9uL21vZGFsL2NvcmRzL2ZhYnJpYy1wbGFjZW1lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFicmljRGF0ZVBpY2tlcklubGluZURpYWxvZ1NlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZmFicmljSW5saW5lRGlhbG9nU2VydmljZTogRmFicmljSW5saW5lRGlhbG9nU2VydmljZSkge1xuXHR9XG5cblx0b3BlbihlbGVtZW50OiBFbGVtZW50UmVmLFxuXHRcdCBjb21wb25lbnQ6IFR5cGU8YW55Pixcblx0XHQgZGF0ZVBpY2tlclRoZW0/OiBUaGVtZSk6IHZvaWQge1xuXHRcdGxldCB0aGVtZSA9IFRoZW1lLkZBQlJJQztcblxuXHRcdGlmIChkYXRlUGlja2VyVGhlbSkge1xuXHRcdFx0dGhlbWUgPSBkYXRlUGlja2VyVGhlbTtcblx0XHR9XG5cblx0XHR0aGlzLmZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2Uub3BlbihlbGVtZW50LCBjb21wb25lbnQsIHsgcGxhY2VtZW50OiBGYWJyaWNQbGFjZW1lbnQuQk9UVE9NLCBvZmZzZXQ6IDAsIHRoZW1lIH0pO1xuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0dGhpcy5mYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cblxuXHRpc09wZW5lZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5mYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlLmlzT3BlbmVkKCk7XG5cdH1cblxuXHRvbk9wZW5lZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5mYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlLm9uT3BlbmVkKCk7XG5cdH1cblxufVxuIl19