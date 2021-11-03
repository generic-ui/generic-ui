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
                    DatePickerIconModule,
                    FabricArrowIconModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9mb3JtL2RhdGUtcGlja2VyL2ZhYnJpYy1kYXRlLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDckcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFbEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDakcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDdEYsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDakcsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDN0csT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFekYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDL0YsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDbkcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDakcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDMUcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDdEgsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDMUcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDaEgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDakcsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUF1QzlGLE1BQU0sT0FBTyxzQkFBc0I7OztZQXJDbEMsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLHdCQUF3QjtvQkFDeEIsbUJBQW1CO29CQUNuQixpQkFBaUI7b0JBQ2pCLGtCQUFrQjtvQkFDbEIsb0JBQW9CO29CQUNwQixxQkFBcUI7aUJBQ3JCO2dCQUNELFlBQVksRUFBRTtvQkFDYixpQ0FBaUM7b0JBQ2pDLHlCQUF5QjtvQkFDekIsaUNBQWlDO29CQUNqQyxtQ0FBbUM7b0JBQ25DLDhCQUE4QjtvQkFDOUIsa0NBQWtDO29CQUNsQyx5QkFBeUI7aUJBQ3pCO2dCQUNELE9BQU8sRUFBRTtvQkFDUixpQ0FBaUM7b0JBQ2pDLHlCQUF5QjtpQkFDekI7Z0JBQ0QsZUFBZSxFQUFFO29CQUNoQixpQ0FBaUM7aUJBQ2pDO2dCQUNELFNBQVMsRUFBRTtvQkFDVix1QkFBdUI7b0JBQ3ZCLGtDQUFrQztvQkFDbEMsK0JBQStCO29CQUMvQixtQ0FBbUM7b0JBQ25DLDRCQUE0QjtvQkFDNUIscUJBQXFCO29CQUNyQixxQkFBcUI7b0JBQ3JCLG1DQUFtQztpQkFDbkM7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyL2ZhYnJpYy1kYXRlLXBpY2tlci1jYWxlbmRhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlclNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1kYXRlLXBpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJXZWVrcyB9IGZyb20gJy4vY2FsZW5kYXIvd2Vla3MvZmFicmljLWRhdGUtcGlja2VyLndlZWtzJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJZZWFycyB9IGZyb20gJy4vY2FsZW5kYXIveWVhcnMvZmFicmljLWRhdGUtcGlja2VyLnllYXJzJztcblxuaW1wb3J0IHsgRmFicmljSW5saW5lRGlhbG9nTW9kdWxlIH0gZnJvbSAnLi4vLi4vbW9kYWwvaW5saW5lLWRpYWxvZy9mYWJyaWMtaW5saW5lLWRpYWxvZy5tb2R1bGUnO1xuaW1wb3J0IHsgRmFicmljSW5wdXRNb2R1bGUgfSBmcm9tICcuLi9pbnB1dC9mYWJyaWMtaW5wdXQubW9kdWxlJztcbmltcG9ydCB7IEZhYnJpY0J1dHRvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2dlbmVyYWwvYnV0dG9uL2J1dHRvbi9mYWJyaWMtYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZSB9IGZyb20gJy4vZmFicmljLmRhdGUtcGlja2VyLWlubGluZS1kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyVmlld1BhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci92aWV3L2ZhYnJpYy1kYXRlLXBpY2tlci12aWV3LXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNUaW1lUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci90aW1lL2ZhYnJpYy10aW1lLXBpY2tlci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBGYWJyaWNBcnJvd0ljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9jb21tb24vaWNvbnMvYXJyb3ctaWNvbi9mYWJyaWMtYXJyb3ctaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlckljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9jb21tb24vaWNvbnMvZGF0ZS1waWNrZXItaWNvbi9kYXRlLXBpY2tlci1pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi9jYWxlbmRhci9mYWJyaWMtZGF0ZS1waWNrZXItY2FsZW5kYXIuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJWaWV3U2VydmljZSB9IGZyb20gJy4vY2FsZW5kYXIvZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLXZpZXcuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyTW9udGhzVmlld0NvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXIvdmlldy9tb250aHMvZmFicmljLWRhdGUtcGlja2VyLW1vbnRocy12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyWWVhcnNDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyL3ZpZXcveWVhcnMvZmFicmljLWRhdGUtcGlja2VyLXllYXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyRGF5c1ZpZXdDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyL3ZpZXcvZGF5cy9mYWJyaWMtZGF0ZS1waWNrZXItZGF5cy12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyWWVhcnNTZXJ2aWNlIH0gZnJvbSAnLi9jYWxlbmRhci95ZWFycy9mYWJyaWMtZGF0ZS1waWNrZXIteWVhcnMuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtZGF0ZS1waWNrZXItY29tcG9zaXRpb24uc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmFicmljSW5saW5lRGlhbG9nTW9kdWxlLFxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cdFx0RmFicmljSW5wdXRNb2R1bGUsXG5cdFx0RmFicmljQnV0dG9uTW9kdWxlLFxuXHRcdERhdGVQaWNrZXJJY29uTW9kdWxlLFxuXHRcdEZhYnJpY0Fycm93SWNvbk1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJDb21wb25lbnQsXG5cdFx0RmFicmljRGF0ZVBpY2tlckNvbXBvbmVudCxcblx0XHRGYWJyaWNEYXRlUGlja2VyRGF5c1ZpZXdDb21wb25lbnQsXG5cdFx0RmFicmljRGF0ZVBpY2tlck1vbnRoc1ZpZXdDb21wb25lbnQsXG5cdFx0RmFicmljRGF0ZVBpY2tlclllYXJzQ29tcG9uZW50LFxuXHRcdEZhYnJpY0RhdGVQaWNrZXJWaWV3UGFuZWxDb21wb25lbnQsXG5cdFx0RmFicmljVGltZVBpY2tlckNvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0RmFicmljRGF0ZVBpY2tlckNhbGVuZGFyQ29tcG9uZW50LFxuXHRcdEZhYnJpY0RhdGVQaWNrZXJDb21wb25lbnRcblx0XSxcblx0ZW50cnlDb21wb25lbnRzOiBbXG5cdFx0RmFicmljRGF0ZVBpY2tlckNhbGVuZGFyQ29tcG9uZW50XG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdEZhYnJpY0RhdGVQaWNrZXJTZXJ2aWNlLFxuXHRcdEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvblNlcnZpY2UsXG5cdFx0RmFicmljRGF0ZVBpY2tlckNhbGVuZGFyU2VydmljZSxcblx0XHRGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJWaWV3U2VydmljZSxcblx0XHRGYWJyaWNEYXRlUGlja2VyWWVhcnNTZXJ2aWNlLFxuXHRcdEZhYnJpY0RhdGVQaWNrZXJXZWVrcyxcblx0XHRGYWJyaWNEYXRlUGlja2VyWWVhcnMsXG5cdFx0RmFicmljRGF0ZVBpY2tlcklubGluZURpYWxvZ1NlcnZpY2Vcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNEYXRlUGlja2VyTW9kdWxlIHtcblxufVxuIl19