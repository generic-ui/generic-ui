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
import { FabricDatePickerInlineDialogService } from './fabric-date-picker-inline-dialog.service';
import { FabricDatePickerViewPanelComponent } from './calendar/view/fabric-date-picker-view-panel.component';
import { FabricTimePickerComponent } from './calendar/time/fabric.time-picker.component';
import { FabricArrowIconModule } from '../../common/icons/arrow-icon/fabric-arrow-icon.module';
import { DatePickerIconModule } from '../../common/icons/date-picker-icon/date-picker-icon.module';
import { FabricDatePickerCalendarService } from './calendar/fabric-date-picker-calendar.service';
import { FabricDatePickerCalendarViewService } from './calendar/fabric-date-picker-calendar-view.service';
import { FabricDatePickerMonthsViewComponent } from './calendar/view/months/fabric-date-picker-months-view.component';
import { FabricDatePickerYearsComponent } from './calendar/view/years/fabric-date-picker-years.component';
import { FabricDatePickerDaysViewComponent } from './calendar/view/days/fabric-date-picker-days-view.component';
import { FabricDatePickerYearsService } from './calendar/years/fabric-date-picker-years.service';
import { FabricDatePickerCompositionService } from './fabric-date-picker-composition.service';
import * as i0 from "@angular/core";
export class FabricDatePickerModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricDatePickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.2", ngImport: i0, type: FabricDatePickerModule, declarations: [FabricDatePickerCalendarComponent,
            FabricDatePickerComponent,
            FabricDatePickerDaysViewComponent,
            FabricDatePickerMonthsViewComponent,
            FabricDatePickerYearsComponent,
            FabricDatePickerViewPanelComponent,
            FabricTimePickerComponent], imports: [CommonModule,
            FabricInlineDialogModule,
            ReactiveFormsModule,
            FabricInputModule,
            FabricButtonModule,
            DatePickerIconModule,
            FabricArrowIconModule], exports: [FabricDatePickerCalendarComponent,
            FabricDatePickerComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricDatePickerModule, providers: [
            FabricDatePickerService,
            FabricDatePickerCompositionService,
            FabricDatePickerCalendarService,
            FabricDatePickerCalendarViewService,
            FabricDatePickerYearsService,
            FabricDatePickerWeeks,
            FabricDatePickerYears,
            FabricDatePickerInlineDialogService
        ], imports: [CommonModule,
            FabricInlineDialogModule,
            ReactiveFormsModule,
            FabricInputModule,
            FabricButtonModule,
            DatePickerIconModule,
            FabricArrowIconModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricDatePickerModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9mb3JtL2RhdGUtcGlja2VyL2ZhYnJpYy1kYXRlLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDckcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFbEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDakcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDdEYsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDakcsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDN0csT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFekYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDL0YsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDbkcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDakcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDMUcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDdEgsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDMUcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDaEgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDakcsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7O0FBb0M5RixNQUFNLE9BQU8sc0JBQXNCO3VHQUF0QixzQkFBc0I7d0dBQXRCLHNCQUFzQixpQkF2QmpDLGlDQUFpQztZQUNqQyx5QkFBeUI7WUFDekIsaUNBQWlDO1lBQ2pDLG1DQUFtQztZQUNuQyw4QkFBOEI7WUFDOUIsa0NBQWtDO1lBQ2xDLHlCQUF5QixhQWZ6QixZQUFZO1lBQ1osd0JBQXdCO1lBQ3hCLG1CQUFtQjtZQUNuQixpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ2xCLG9CQUFvQjtZQUNwQixxQkFBcUIsYUFZckIsaUNBQWlDO1lBQ2pDLHlCQUF5Qjt3R0FhZCxzQkFBc0IsYUFYdkI7WUFDVix1QkFBdUI7WUFDdkIsa0NBQWtDO1lBQ2xDLCtCQUErQjtZQUMvQixtQ0FBbUM7WUFDbkMsNEJBQTRCO1lBQzVCLHFCQUFxQjtZQUNyQixxQkFBcUI7WUFDckIsbUNBQW1DO1NBQ25DLFlBOUJBLFlBQVk7WUFDWix3QkFBd0I7WUFDeEIsbUJBQW1CO1lBQ25CLGlCQUFpQjtZQUNqQixrQkFBa0I7WUFDbEIsb0JBQW9CO1lBQ3BCLHFCQUFxQjs7MkZBMEJWLHNCQUFzQjtrQkFsQ2xDLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osd0JBQXdCO3dCQUN4QixtQkFBbUI7d0JBQ25CLGlCQUFpQjt3QkFDakIsa0JBQWtCO3dCQUNsQixvQkFBb0I7d0JBQ3BCLHFCQUFxQjtxQkFDckI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLGlDQUFpQzt3QkFDakMseUJBQXlCO3dCQUN6QixpQ0FBaUM7d0JBQ2pDLG1DQUFtQzt3QkFDbkMsOEJBQThCO3dCQUM5QixrQ0FBa0M7d0JBQ2xDLHlCQUF5QjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLGlDQUFpQzt3QkFDakMseUJBQXlCO3FCQUN6QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1YsdUJBQXVCO3dCQUN2QixrQ0FBa0M7d0JBQ2xDLCtCQUErQjt3QkFDL0IsbUNBQW1DO3dCQUNuQyw0QkFBNEI7d0JBQzVCLHFCQUFxQjt3QkFDckIscUJBQXFCO3dCQUNyQixtQ0FBbUM7cUJBQ25DO2lCQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9mYWJyaWMtZGF0ZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXIvZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyU2VydmljZSB9IGZyb20gJy4vZmFicmljLWRhdGUtcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlcldlZWtzIH0gZnJvbSAnLi9jYWxlbmRhci93ZWVrcy9mYWJyaWMtZGF0ZS1waWNrZXIud2Vla3MnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlclllYXJzIH0gZnJvbSAnLi9jYWxlbmRhci95ZWFycy9mYWJyaWMtZGF0ZS1waWNrZXIueWVhcnMnO1xuXG5pbXBvcnQgeyBGYWJyaWNJbmxpbmVEaWFsb2dNb2R1bGUgfSBmcm9tICcuLi8uLi9tb2RhbC9pbmxpbmUtZGlhbG9nL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLm1vZHVsZSc7XG5pbXBvcnQgeyBGYWJyaWNJbnB1dE1vZHVsZSB9IGZyb20gJy4uL2lucHV0L2ZhYnJpYy1pbnB1dC5tb2R1bGUnO1xuaW1wb3J0IHsgRmFicmljQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vLi4vZ2VuZXJhbC9idXR0b24vYnV0dG9uL2ZhYnJpYy1idXR0b24ubW9kdWxlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtZGF0ZS1waWNrZXItaW5saW5lLWRpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJWaWV3UGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyL3ZpZXcvZmFicmljLWRhdGUtcGlja2VyLXZpZXctcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY1RpbWVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyL3RpbWUvZmFicmljLnRpbWUtcGlja2VyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEZhYnJpY0Fycm93SWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9pY29ucy9hcnJvdy1pY29uL2ZhYnJpYy1hcnJvdy1pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBEYXRlUGlja2VySWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9pY29ucy9kYXRlLXBpY2tlci1pY29uL2RhdGUtcGlja2VyLWljb24ubW9kdWxlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhclNlcnZpY2UgfSBmcm9tICcuL2NhbGVuZGFyL2ZhYnJpYy1kYXRlLXBpY2tlci1jYWxlbmRhci5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhclZpZXdTZXJ2aWNlIH0gZnJvbSAnLi9jYWxlbmRhci9mYWJyaWMtZGF0ZS1waWNrZXItY2FsZW5kYXItdmlldy5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJNb250aHNWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci92aWV3L21vbnRocy9mYWJyaWMtZGF0ZS1waWNrZXItbW9udGhzLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJZZWFyc0NvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXIvdmlldy95ZWFycy9mYWJyaWMtZGF0ZS1waWNrZXIteWVhcnMuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJEYXlzVmlld0NvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXIvdmlldy9kYXlzL2ZhYnJpYy1kYXRlLXBpY2tlci1kYXlzLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJZZWFyc1NlcnZpY2UgfSBmcm9tICcuL2NhbGVuZGFyL3llYXJzL2ZhYnJpYy1kYXRlLXBpY2tlci15ZWFycy5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvblNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1kYXRlLXBpY2tlci1jb21wb3NpdGlvbi5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGYWJyaWNJbmxpbmVEaWFsb2dNb2R1bGUsXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcblx0XHRGYWJyaWNJbnB1dE1vZHVsZSxcblx0XHRGYWJyaWNCdXR0b25Nb2R1bGUsXG5cdFx0RGF0ZVBpY2tlckljb25Nb2R1bGUsXG5cdFx0RmFicmljQXJyb3dJY29uTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhckNvbXBvbmVudCxcblx0XHRGYWJyaWNEYXRlUGlja2VyQ29tcG9uZW50LFxuXHRcdEZhYnJpY0RhdGVQaWNrZXJEYXlzVmlld0NvbXBvbmVudCxcblx0XHRGYWJyaWNEYXRlUGlja2VyTW9udGhzVmlld0NvbXBvbmVudCxcblx0XHRGYWJyaWNEYXRlUGlja2VyWWVhcnNDb21wb25lbnQsXG5cdFx0RmFicmljRGF0ZVBpY2tlclZpZXdQYW5lbENvbXBvbmVudCxcblx0XHRGYWJyaWNUaW1lUGlja2VyQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJDb21wb25lbnQsXG5cdFx0RmFicmljRGF0ZVBpY2tlckNvbXBvbmVudFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRGYWJyaWNEYXRlUGlja2VyU2VydmljZSxcblx0XHRGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb25TZXJ2aWNlLFxuXHRcdEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhclNlcnZpY2UsXG5cdFx0RmFicmljRGF0ZVBpY2tlckNhbGVuZGFyVmlld1NlcnZpY2UsXG5cdFx0RmFicmljRGF0ZVBpY2tlclllYXJzU2VydmljZSxcblx0XHRGYWJyaWNEYXRlUGlja2VyV2Vla3MsXG5cdFx0RmFicmljRGF0ZVBpY2tlclllYXJzLFxuXHRcdEZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljRGF0ZVBpY2tlck1vZHVsZSB7XG5cbn1cbiJdfQ==