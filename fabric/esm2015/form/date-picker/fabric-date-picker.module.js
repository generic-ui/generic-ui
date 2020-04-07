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
export class FabricDatePickerModule {
}
FabricDatePickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FabricInlineDialogModule,
                    ReactiveFormsModule,
                    FabricInputModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvZmFicmljLWRhdGUtcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDckcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFbEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDakcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUE0QmpHLE1BQU0sT0FBTyxzQkFBc0I7OztZQXpCbEMsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLHdCQUF3QjtvQkFDeEIsbUJBQW1CO29CQUNuQixpQkFBaUI7aUJBQ2pCO2dCQUNELFlBQVksRUFBRTtvQkFDYixpQ0FBaUM7b0JBQ2pDLHlCQUF5QjtpQkFDekI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLGlDQUFpQztvQkFDakMseUJBQXlCO2lCQUN6QjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2hCLGlDQUFpQztpQkFDakM7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLHVCQUF1QjtvQkFDdkIscUJBQXFCO29CQUNyQixxQkFBcUI7b0JBQ3JCLG1DQUFtQztpQkFDbkM7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyL2ZhYnJpYy1kYXRlLXBpY2tlci1jYWxlbmRhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlclNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1kYXRlLXBpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJXZWVrcyB9IGZyb20gJy4vY2FsZW5kYXIvd2Vla3MvZmFicmljLWRhdGUtcGlja2VyLndlZWtzJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJZZWFycyB9IGZyb20gJy4vY2FsZW5kYXIveWVhcnMvZmFicmljLWRhdGUtcGlja2VyLnllYXJzJztcblxuaW1wb3J0IHsgRmFicmljSW5saW5lRGlhbG9nTW9kdWxlIH0gZnJvbSAnLi4vLi4vbW9kYWwvaW5saW5lLWRpYWxvZy9mYWJyaWMtaW5saW5lLWRpYWxvZy5tb2R1bGUnO1xuaW1wb3J0IHsgRmFicmljSW5wdXRNb2R1bGUgfSBmcm9tICcuLi9pbnB1dC9mYWJyaWMtaW5wdXQubW9kdWxlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMuZGF0ZS1waWNrZXItaW5saW5lLWRpYWxvZy5zZXJ2aWNlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZhYnJpY0lubGluZURpYWxvZ01vZHVsZSxcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXHRcdEZhYnJpY0lucHV0TW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhckNvbXBvbmVudCxcblx0XHRGYWJyaWNEYXRlUGlja2VyQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJDb21wb25lbnQsXG5cdFx0RmFicmljRGF0ZVBpY2tlckNvbXBvbmVudFxuXHRdLFxuXHRlbnRyeUNvbXBvbmVudHM6IFtcblx0XHRGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJDb21wb25lbnRcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0RmFicmljRGF0ZVBpY2tlclNlcnZpY2UsXG5cdFx0RmFicmljRGF0ZVBpY2tlcldlZWtzLFxuXHRcdEZhYnJpY0RhdGVQaWNrZXJZZWFycyxcblx0XHRGYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJNb2R1bGUge1xuXG59XG4iXX0=