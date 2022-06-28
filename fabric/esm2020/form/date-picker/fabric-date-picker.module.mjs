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
import * as i0 from "@angular/core";
export class FabricDatePickerModule {
}
FabricDatePickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FabricDatePickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricDatePickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: FabricDatePickerModule, declarations: [FabricDatePickerCalendarComponent,
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
FabricDatePickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FabricDatePickerModule, providers: [
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FabricDatePickerModule, decorators: [{
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9mb3JtL2RhdGUtcGlja2VyL2ZhYnJpYy1kYXRlLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDckcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFbEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDakcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDdEYsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDakcsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDN0csT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFekYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDL0YsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDbkcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDakcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDMUcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDdEgsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDMUcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDaEgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDakcsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7O0FBdUM5RixNQUFNLE9BQU8sc0JBQXNCOzttSEFBdEIsc0JBQXNCO29IQUF0QixzQkFBc0IsaUJBMUJqQyxpQ0FBaUM7UUFDakMseUJBQXlCO1FBQ3pCLGlDQUFpQztRQUNqQyxtQ0FBbUM7UUFDbkMsOEJBQThCO1FBQzlCLGtDQUFrQztRQUNsQyx5QkFBeUIsYUFmekIsWUFBWTtRQUNaLHdCQUF3QjtRQUN4QixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixvQkFBb0I7UUFDcEIscUJBQXFCLGFBWXJCLGlDQUFpQztRQUNqQyx5QkFBeUI7b0hBZ0JkLHNCQUFzQixhQVh2QjtRQUNWLHVCQUF1QjtRQUN2QixrQ0FBa0M7UUFDbEMsK0JBQStCO1FBQy9CLG1DQUFtQztRQUNuQyw0QkFBNEI7UUFDNUIscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixtQ0FBbUM7S0FDbkMsWUFqQ0EsWUFBWTtRQUNaLHdCQUF3QjtRQUN4QixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixvQkFBb0I7UUFDcEIscUJBQXFCOzJGQTZCVixzQkFBc0I7a0JBckNsQyxRQUFRO21CQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLHdCQUF3Qjt3QkFDeEIsbUJBQW1CO3dCQUNuQixpQkFBaUI7d0JBQ2pCLGtCQUFrQjt3QkFDbEIsb0JBQW9CO3dCQUNwQixxQkFBcUI7cUJBQ3JCO29CQUNELFlBQVksRUFBRTt3QkFDYixpQ0FBaUM7d0JBQ2pDLHlCQUF5Qjt3QkFDekIsaUNBQWlDO3dCQUNqQyxtQ0FBbUM7d0JBQ25DLDhCQUE4Qjt3QkFDOUIsa0NBQWtDO3dCQUNsQyx5QkFBeUI7cUJBQ3pCO29CQUNELE9BQU8sRUFBRTt3QkFDUixpQ0FBaUM7d0JBQ2pDLHlCQUF5QjtxQkFDekI7b0JBQ0QsZUFBZSxFQUFFO3dCQUNoQixpQ0FBaUM7cUJBQ2pDO29CQUNELFNBQVMsRUFBRTt3QkFDVix1QkFBdUI7d0JBQ3ZCLGtDQUFrQzt3QkFDbEMsK0JBQStCO3dCQUMvQixtQ0FBbUM7d0JBQ25DLDRCQUE0Qjt3QkFDNUIscUJBQXFCO3dCQUNyQixxQkFBcUI7d0JBQ3JCLG1DQUFtQztxQkFDbkM7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2ZhYnJpYy1kYXRlLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci9mYWJyaWMtZGF0ZS1waWNrZXItY2FsZW5kYXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtZGF0ZS1waWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyV2Vla3MgfSBmcm9tICcuL2NhbGVuZGFyL3dlZWtzL2ZhYnJpYy1kYXRlLXBpY2tlci53ZWVrcyc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyWWVhcnMgfSBmcm9tICcuL2NhbGVuZGFyL3llYXJzL2ZhYnJpYy1kYXRlLXBpY2tlci55ZWFycyc7XG5cbmltcG9ydCB7IEZhYnJpY0lubGluZURpYWxvZ01vZHVsZSB9IGZyb20gJy4uLy4uL21vZGFsL2lubGluZS1kaWFsb2cvZmFicmljLWlubGluZS1kaWFsb2cubW9kdWxlJztcbmltcG9ydCB7IEZhYnJpY0lucHV0TW9kdWxlIH0gZnJvbSAnLi4vaW5wdXQvZmFicmljLWlucHV0Lm1vZHVsZSc7XG5pbXBvcnQgeyBGYWJyaWNCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi8uLi9nZW5lcmFsL2J1dHRvbi9idXR0b24vZmFicmljLWJ1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlcklubGluZURpYWxvZ1NlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1kYXRlLXBpY2tlci1pbmxpbmUtZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlclZpZXdQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXIvdmlldy9mYWJyaWMtZGF0ZS1waWNrZXItdmlldy1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljVGltZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXIvdGltZS9mYWJyaWMtdGltZS1waWNrZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgRmFicmljQXJyb3dJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL2ljb25zL2Fycm93LWljb24vZmFicmljLWFycm93LWljb24ubW9kdWxlJztcbmltcG9ydCB7IERhdGVQaWNrZXJJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL2ljb25zL2RhdGUtcGlja2VyLWljb24vZGF0ZS1waWNrZXItaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyU2VydmljZSB9IGZyb20gJy4vY2FsZW5kYXIvZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyVmlld1NlcnZpY2UgfSBmcm9tICcuL2NhbGVuZGFyL2ZhYnJpYy1kYXRlLXBpY2tlci1jYWxlbmRhci12aWV3LnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlck1vbnRoc1ZpZXdDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyL3ZpZXcvbW9udGhzL2ZhYnJpYy1kYXRlLXBpY2tlci1tb250aHMtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlclllYXJzQ29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci92aWV3L3llYXJzL2ZhYnJpYy1kYXRlLXBpY2tlci15ZWFycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckRheXNWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci92aWV3L2RheXMvZmFicmljLWRhdGUtcGlja2VyLWRheXMtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlclllYXJzU2VydmljZSB9IGZyb20gJy4vY2FsZW5kYXIveWVhcnMvZmFicmljLWRhdGUtcGlja2VyLXllYXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uU2VydmljZSB9IGZyb20gJy4vZmFicmljLWRhdGUtcGlja2VyLWNvbXBvc2l0aW9uLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZhYnJpY0lubGluZURpYWxvZ01vZHVsZSxcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXHRcdEZhYnJpY0lucHV0TW9kdWxlLFxuXHRcdEZhYnJpY0J1dHRvbk1vZHVsZSxcblx0XHREYXRlUGlja2VySWNvbk1vZHVsZSxcblx0XHRGYWJyaWNBcnJvd0ljb25Nb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0RmFicmljRGF0ZVBpY2tlckNhbGVuZGFyQ29tcG9uZW50LFxuXHRcdEZhYnJpY0RhdGVQaWNrZXJDb21wb25lbnQsXG5cdFx0RmFicmljRGF0ZVBpY2tlckRheXNWaWV3Q29tcG9uZW50LFxuXHRcdEZhYnJpY0RhdGVQaWNrZXJNb250aHNWaWV3Q29tcG9uZW50LFxuXHRcdEZhYnJpY0RhdGVQaWNrZXJZZWFyc0NvbXBvbmVudCxcblx0XHRGYWJyaWNEYXRlUGlja2VyVmlld1BhbmVsQ29tcG9uZW50LFxuXHRcdEZhYnJpY1RpbWVQaWNrZXJDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhckNvbXBvbmVudCxcblx0XHRGYWJyaWNEYXRlUGlja2VyQ29tcG9uZW50XG5cdF0sXG5cdGVudHJ5Q29tcG9uZW50czogW1xuXHRcdEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhckNvbXBvbmVudFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRGYWJyaWNEYXRlUGlja2VyU2VydmljZSxcblx0XHRGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb25TZXJ2aWNlLFxuXHRcdEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhclNlcnZpY2UsXG5cdFx0RmFicmljRGF0ZVBpY2tlckNhbGVuZGFyVmlld1NlcnZpY2UsXG5cdFx0RmFicmljRGF0ZVBpY2tlclllYXJzU2VydmljZSxcblx0XHRGYWJyaWNEYXRlUGlja2VyV2Vla3MsXG5cdFx0RmFicmljRGF0ZVBpY2tlclllYXJzLFxuXHRcdEZhYnJpY0RhdGVQaWNrZXJJbmxpbmVEaWFsb2dTZXJ2aWNlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljRGF0ZVBpY2tlck1vZHVsZSB7XG5cbn1cbiJdfQ==