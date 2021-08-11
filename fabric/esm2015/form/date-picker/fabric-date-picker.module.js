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
import { FabricButtonModule } from '../../general/button/button/fabric-button.module';
import { FabricDatePickerInlineDialogService } from './fabric.date-picker-inline-dialog.service';
import { FabricDatePickerViewPanelComponent } from './calendar/view/fabric-date-picker-view-panel.component';
import { FabricTimePickerComponent } from './calendar/time/fabric-time-picker.component';
import { FabricArrowIconModule } from '../../common/icons/arrow-icon/fabric-arrow-icon.module';
import { DatePickerIconModule } from '../../common/icons/date-picker-icon/date-picker-icon.module';
import { FabricDatePickerCalendarService } from './calendar/fabric-date-picker-calendar.service';
import { FabricDatePickerCalendarViewService } from './calendar/fabric-date-picker-calendar-view.service';
import { FabricDatePickerMonthsViewComponent } from './calendar/view/months/fabric-date-picker-months-view.component';
import { FabricDatePickerYearsComponent } from './calendar/view/years/fabric-date-picker-years.component';
import { FabricDatePickerDaysViewComponent } from './calendar/view/days/fabric-date-picker-days-view.component';
import { FabricDatePickerYearsService } from './calendar/years/fabric-date-picker-years.service';
import { FabricDatePickerCompositionService } from './fabric-date-picker-composition.service';
/** @type {?} */
const icons = [
    DatePickerIconModule,
    FabricArrowIconModule
];
export class FabricDatePickerModule {
}
FabricDatePickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FabricInlineDialogModule,
                    ReactiveFormsModule,
                    FabricInputModule,
                    FabricButtonModule,
                    ...icons
                ],
                declarations: [
                    FabricDatePickerCalendarComponent,
                    FabricDatePickerComponent,
                    FabricDatePickerDaysViewComponent,
                    FabricDatePickerMonthsViewComponent,
                    FabricDatePickerYearsComponent,
                    FabricDatePickerViewPanelComponent,
                    FabricTimePickerComponent
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
                    FabricDatePickerCompositionService,
                    FabricDatePickerCalendarService,
                    FabricDatePickerCalendarViewService,
                    FabricDatePickerYearsService,
                    FabricDatePickerWeeks,
                    FabricDatePickerYears,
                    FabricDatePickerInlineDialogService
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvZmFicmljLWRhdGUtcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDckcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFbEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDakcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDdEYsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDakcsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDN0csT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFekYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDL0YsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDbkcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDakcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDMUcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDdEgsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDMUcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDaEgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDakcsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7O01BRXhGLEtBQUssR0FBRztJQUNiLG9CQUFvQjtJQUNwQixxQkFBcUI7Q0FDckI7QUFzQ0QsTUFBTSxPQUFPLHNCQUFzQjs7O1lBcENsQyxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osd0JBQXdCO29CQUN4QixtQkFBbUI7b0JBQ25CLGlCQUFpQjtvQkFDakIsa0JBQWtCO29CQUNsQixHQUFHLEtBQUs7aUJBQ1I7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLGlDQUFpQztvQkFDakMseUJBQXlCO29CQUN6QixpQ0FBaUM7b0JBQ2pDLG1DQUFtQztvQkFDbkMsOEJBQThCO29CQUM5QixrQ0FBa0M7b0JBQ2xDLHlCQUF5QjtpQkFDekI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLGlDQUFpQztvQkFDakMseUJBQXlCO2lCQUN6QjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2hCLGlDQUFpQztpQkFDakM7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLHVCQUF1QjtvQkFDdkIsa0NBQWtDO29CQUNsQywrQkFBK0I7b0JBQy9CLG1DQUFtQztvQkFDbkMsNEJBQTRCO29CQUM1QixxQkFBcUI7b0JBQ3JCLHFCQUFxQjtvQkFDckIsbUNBQW1DO2lCQUNuQzthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9mYWJyaWMtZGF0ZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXIvZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyU2VydmljZSB9IGZyb20gJy4vZmFicmljLWRhdGUtcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlcldlZWtzIH0gZnJvbSAnLi9jYWxlbmRhci93ZWVrcy9mYWJyaWMtZGF0ZS1waWNrZXIud2Vla3MnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlclllYXJzIH0gZnJvbSAnLi9jYWxlbmRhci95ZWFycy9mYWJyaWMtZGF0ZS1waWNrZXIueWVhcnMnO1xuXG5pbXBvcnQgeyBGYWJyaWNJbmxpbmVEaWFsb2dNb2R1bGUgfSBmcm9tICcuLi8uLi9tb2RhbC9pbmxpbmUtZGlhbG9nL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLm1vZHVsZSc7XG5pbXBvcnQgeyBGYWJyaWNJbnB1dE1vZHVsZSB9IGZyb20gJy4uL2lucHV0L2ZhYnJpYy1pbnB1dC5tb2R1bGUnO1xuaW1wb3J0IHsgRmFicmljQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vLi4vZ2VuZXJhbC9idXR0b24vYnV0dG9uL2ZhYnJpYy1idXR0b24ubW9kdWxlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMuZGF0ZS1waWNrZXItaW5saW5lLWRpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJWaWV3UGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyL3ZpZXcvZmFicmljLWRhdGUtcGlja2VyLXZpZXctcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY1RpbWVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyL3RpbWUvZmFicmljLXRpbWUtcGlja2VyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEZhYnJpY0Fycm93SWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9pY29ucy9hcnJvdy1pY29uL2ZhYnJpYy1hcnJvdy1pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBEYXRlUGlja2VySWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9pY29ucy9kYXRlLXBpY2tlci1pY29uL2RhdGUtcGlja2VyLWljb24ubW9kdWxlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhclNlcnZpY2UgfSBmcm9tICcuL2NhbGVuZGFyL2ZhYnJpYy1kYXRlLXBpY2tlci1jYWxlbmRhci5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhclZpZXdTZXJ2aWNlIH0gZnJvbSAnLi9jYWxlbmRhci9mYWJyaWMtZGF0ZS1waWNrZXItY2FsZW5kYXItdmlldy5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJNb250aHNWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci92aWV3L21vbnRocy9mYWJyaWMtZGF0ZS1waWNrZXItbW9udGhzLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJZZWFyc0NvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXIvdmlldy95ZWFycy9mYWJyaWMtZGF0ZS1waWNrZXIteWVhcnMuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJEYXlzVmlld0NvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXIvdmlldy9kYXlzL2ZhYnJpYy1kYXRlLXBpY2tlci1kYXlzLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJZZWFyc1NlcnZpY2UgfSBmcm9tICcuL2NhbGVuZGFyL3llYXJzL2ZhYnJpYy1kYXRlLXBpY2tlci15ZWFycy5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvblNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1kYXRlLXBpY2tlci1jb21wb3NpdGlvbi5zZXJ2aWNlJztcblxuY29uc3QgaWNvbnMgPSBbXG5cdERhdGVQaWNrZXJJY29uTW9kdWxlLFxuXHRGYWJyaWNBcnJvd0ljb25Nb2R1bGVcbl07XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmFicmljSW5saW5lRGlhbG9nTW9kdWxlLFxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cdFx0RmFicmljSW5wdXRNb2R1bGUsXG5cdFx0RmFicmljQnV0dG9uTW9kdWxlLFxuXHRcdC4uLmljb25zXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhckNvbXBvbmVudCxcblx0XHRGYWJyaWNEYXRlUGlja2VyQ29tcG9uZW50LFxuXHRcdEZhYnJpY0RhdGVQaWNrZXJEYXlzVmlld0NvbXBvbmVudCxcblx0XHRGYWJyaWNEYXRlUGlja2VyTW9udGhzVmlld0NvbXBvbmVudCxcblx0XHRGYWJyaWNEYXRlUGlja2VyWWVhcnNDb21wb25lbnQsXG5cdFx0RmFicmljRGF0ZVBpY2tlclZpZXdQYW5lbENvbXBvbmVudCxcblx0XHRGYWJyaWNUaW1lUGlja2VyQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJDb21wb25lbnQsXG5cdFx0RmFicmljRGF0ZVBpY2tlckNvbXBvbmVudFxuXHRdLFxuXHRlbnRyeUNvbXBvbmVudHM6IFtcblx0XHRGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJDb21wb25lbnRcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0RmFicmljRGF0ZVBpY2tlclNlcnZpY2UsXG5cdFx0RmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uU2VydmljZSxcblx0XHRGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJTZXJ2aWNlLFxuXHRcdEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhclZpZXdTZXJ2aWNlLFxuXHRcdEZhYnJpY0RhdGVQaWNrZXJZZWFyc1NlcnZpY2UsXG5cdFx0RmFicmljRGF0ZVBpY2tlcldlZWtzLFxuXHRcdEZhYnJpY0RhdGVQaWNrZXJZZWFycyxcblx0XHRGYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJNb2R1bGUge1xuXG59XG4iXX0=