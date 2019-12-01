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
import { FabricInlineDialogModule } from '../modals/inline-dialog/fabric-inline-dialog.module';
import { FabricInputModule } from '../input/fabric-input.module';
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
                    FabricDatePickerYears
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvZmFicmljLWRhdGUtcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDckcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFbEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDL0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUEyQmpFLE1BQU0sT0FBTyxzQkFBc0I7OztZQXhCbEMsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLHdCQUF3QjtvQkFDeEIsbUJBQW1CO29CQUNuQixpQkFBaUI7aUJBQ2pCO2dCQUNELFlBQVksRUFBRTtvQkFDYixpQ0FBaUM7b0JBQ2pDLHlCQUF5QjtpQkFDekI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLGlDQUFpQztvQkFDakMseUJBQXlCO2lCQUN6QjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2hCLGlDQUFpQztpQkFDakM7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLHVCQUF1QjtvQkFDdkIscUJBQXFCO29CQUNyQixxQkFBcUI7aUJBQ3JCO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2ZhYnJpYy1kYXRlLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci9mYWJyaWMtZGF0ZS1waWNrZXItY2FsZW5kYXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtZGF0ZS1waWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyV2Vla3MgfSBmcm9tICcuL2NhbGVuZGFyL3dlZWtzL2ZhYnJpYy1kYXRlLXBpY2tlci53ZWVrcyc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyWWVhcnMgfSBmcm9tICcuL2NhbGVuZGFyL3llYXJzL2ZhYnJpYy1kYXRlLXBpY2tlci55ZWFycyc7XG5cbmltcG9ydCB7IEZhYnJpY0lubGluZURpYWxvZ01vZHVsZSB9IGZyb20gJy4uL21vZGFscy9pbmxpbmUtZGlhbG9nL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLm1vZHVsZSc7XG5pbXBvcnQgeyBGYWJyaWNJbnB1dE1vZHVsZSB9IGZyb20gJy4uL2lucHV0L2ZhYnJpYy1pbnB1dC5tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmFicmljSW5saW5lRGlhbG9nTW9kdWxlLFxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cdFx0RmFicmljSW5wdXRNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0RmFicmljRGF0ZVBpY2tlckNhbGVuZGFyQ29tcG9uZW50LFxuXHRcdEZhYnJpY0RhdGVQaWNrZXJDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhckNvbXBvbmVudCxcblx0XHRGYWJyaWNEYXRlUGlja2VyQ29tcG9uZW50XG5cdF0sXG5cdGVudHJ5Q29tcG9uZW50czogW1xuXHRcdEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhckNvbXBvbmVudFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRGYWJyaWNEYXRlUGlja2VyU2VydmljZSxcblx0XHRGYWJyaWNEYXRlUGlja2VyV2Vla3MsXG5cdFx0RmFicmljRGF0ZVBpY2tlclllYXJzXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljRGF0ZVBpY2tlck1vZHVsZSB7XG5cbn1cbiJdfQ==