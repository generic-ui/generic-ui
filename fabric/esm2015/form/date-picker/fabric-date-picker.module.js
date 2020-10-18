/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FabricDatePickerComponent } from './fabric-date-picker.component';
import { FabricDatePickerCalendarComponent } from './calendar/fabric-date-picker-calendar.component';
import { FabricDatePickerService } from './fabric-date-picker.service';
import { FabricDatePickerWeeks } from './calendar/weeks/fabric-date-picker.weeks';
import { FabricDatePickerYears } from './calendar/years/fabric-date-picker.years';
import { FabricInlineDialogModule } from '../../modal/inline-dialog/fabric-inline-dialog.module';
import { FabricInputModule } from '../input/fabric-input.module';
import { FabricDatePickerInlineDialogService } from './fabric.date-picker-inline-dialog.service';
import { DatePickerIconModule } from '../../common/icons/date-picker-icon/date-picker-icon.module';
export class FabricDatePickerModule {
}
FabricDatePickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FabricInlineDialogModule,
                    ReactiveFormsModule,
                    FabricInputModule,
                    DatePickerIconModule
                ],
                declarations: [
                    FabricDatePickerCalendarComponent,
                    FabricDatePickerComponent
                ],
                exports: [
                    FabricDatePickerCalendarComponent,
                    FabricDatePickerComponent
                ],
                entryComponents: [
                    FabricDatePickerCalendarComponent
                ],
                providers: [
                    FabricDatePickerService,
                    FabricDatePickerWeeks,
                    FabricDatePickerYears,
                    FabricDatePickerInlineDialogService
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvZmFicmljLWRhdGUtcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDckcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFbEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDakcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDakcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUE2Qm5HLE1BQU0sT0FBTyxzQkFBc0I7OztZQTFCbEMsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLHdCQUF3QjtvQkFDeEIsbUJBQW1CO29CQUNuQixpQkFBaUI7b0JBQ2pCLG9CQUFvQjtpQkFDcEI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLGlDQUFpQztvQkFDakMseUJBQXlCO2lCQUN6QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsaUNBQWlDO29CQUNqQyx5QkFBeUI7aUJBQ3pCO2dCQUNELGVBQWUsRUFBRTtvQkFDaEIsaUNBQWlDO2lCQUNqQztnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsdUJBQXVCO29CQUN2QixxQkFBcUI7b0JBQ3JCLHFCQUFxQjtvQkFDckIsbUNBQW1DO2lCQUNuQzthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9mYWJyaWMtZGF0ZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXIvZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyU2VydmljZSB9IGZyb20gJy4vZmFicmljLWRhdGUtcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlcldlZWtzIH0gZnJvbSAnLi9jYWxlbmRhci93ZWVrcy9mYWJyaWMtZGF0ZS1waWNrZXIud2Vla3MnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlclllYXJzIH0gZnJvbSAnLi9jYWxlbmRhci95ZWFycy9mYWJyaWMtZGF0ZS1waWNrZXIueWVhcnMnO1xuXG5pbXBvcnQgeyBGYWJyaWNJbmxpbmVEaWFsb2dNb2R1bGUgfSBmcm9tICcuLi8uLi9tb2RhbC9pbmxpbmUtZGlhbG9nL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLm1vZHVsZSc7XG5pbXBvcnQgeyBGYWJyaWNJbnB1dE1vZHVsZSB9IGZyb20gJy4uL2lucHV0L2ZhYnJpYy1pbnB1dC5tb2R1bGUnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlcklubGluZURpYWxvZ1NlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy5kYXRlLXBpY2tlci1pbmxpbmUtZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlckljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9jb21tb24vaWNvbnMvZGF0ZS1waWNrZXItaWNvbi9kYXRlLXBpY2tlci1pY29uLm1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGYWJyaWNJbmxpbmVEaWFsb2dNb2R1bGUsXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcblx0XHRGYWJyaWNJbnB1dE1vZHVsZSxcblx0XHREYXRlUGlja2VySWNvbk1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJDb21wb25lbnQsXG5cdFx0RmFicmljRGF0ZVBpY2tlckNvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0RmFicmljRGF0ZVBpY2tlckNhbGVuZGFyQ29tcG9uZW50LFxuXHRcdEZhYnJpY0RhdGVQaWNrZXJDb21wb25lbnRcblx0XSxcblx0ZW50cnlDb21wb25lbnRzOiBbXG5cdFx0RmFicmljRGF0ZVBpY2tlckNhbGVuZGFyQ29tcG9uZW50XG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdEZhYnJpY0RhdGVQaWNrZXJTZXJ2aWNlLFxuXHRcdEZhYnJpY0RhdGVQaWNrZXJXZWVrcyxcblx0XHRGYWJyaWNEYXRlUGlja2VyWWVhcnMsXG5cdFx0RmFicmljRGF0ZVBpY2tlcklubGluZURpYWxvZ1NlcnZpY2Vcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNEYXRlUGlja2VyTW9kdWxlIHtcblxufVxuIl19