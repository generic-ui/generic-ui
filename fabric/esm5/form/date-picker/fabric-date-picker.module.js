/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var icons = [
    DatePickerIconModule,
    FabricArrowIconModule
];
var FabricDatePickerModule = /** @class */ (function () {
    function FabricDatePickerModule() {
    }
    FabricDatePickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: tslib_1.__spread([
                        CommonModule,
                        FabricInlineDialogModule,
                        ReactiveFormsModule,
                        FabricInputModule,
                        FabricButtonModule
                    ], icons),
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
    return FabricDatePickerModule;
}());
export { FabricDatePickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vZGF0ZS1waWNrZXIvZmFicmljLWRhdGUtcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRWxGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzdHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRXpGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ25HLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzFHLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ3RILE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQzFHLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ2hILE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOztJQUV4RixLQUFLLEdBQUc7SUFDYixvQkFBb0I7SUFDcEIscUJBQXFCO0NBQ3JCO0FBRUQ7SUFBQTtJQXNDQSxDQUFDOztnQkF0Q0EsUUFBUSxTQUFDO29CQUNULE9BQU87d0JBQ04sWUFBWTt3QkFDWix3QkFBd0I7d0JBQ3hCLG1CQUFtQjt3QkFDbkIsaUJBQWlCO3dCQUNqQixrQkFBa0I7dUJBQ2YsS0FBSyxDQUNSO29CQUNELFlBQVksRUFBRTt3QkFDYixpQ0FBaUM7d0JBQ2pDLHlCQUF5Qjt3QkFDekIsaUNBQWlDO3dCQUNqQyxtQ0FBbUM7d0JBQ25DLDhCQUE4Qjt3QkFDOUIsa0NBQWtDO3dCQUNsQyx5QkFBeUI7cUJBQ3pCO29CQUNELE9BQU8sRUFBRTt3QkFDUixpQ0FBaUM7d0JBQ2pDLHlCQUF5QjtxQkFDekI7b0JBQ0QsZUFBZSxFQUFFO3dCQUNoQixpQ0FBaUM7cUJBQ2pDO29CQUNELFNBQVMsRUFBRTt3QkFDVix1QkFBdUI7d0JBQ3ZCLGtDQUFrQzt3QkFDbEMsK0JBQStCO3dCQUMvQixtQ0FBbUM7d0JBQ25DLDRCQUE0Qjt3QkFDNUIscUJBQXFCO3dCQUNyQixxQkFBcUI7d0JBQ3JCLG1DQUFtQztxQkFDbkM7aUJBQ0Q7O0lBR0QsNkJBQUM7Q0FBQSxBQXRDRCxJQXNDQztTQUZZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZmFicmljLWRhdGUtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyL2ZhYnJpYy1kYXRlLXBpY2tlci1jYWxlbmRhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlclNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1kYXRlLXBpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJXZWVrcyB9IGZyb20gJy4vY2FsZW5kYXIvd2Vla3MvZmFicmljLWRhdGUtcGlja2VyLndlZWtzJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJZZWFycyB9IGZyb20gJy4vY2FsZW5kYXIveWVhcnMvZmFicmljLWRhdGUtcGlja2VyLnllYXJzJztcblxuaW1wb3J0IHsgRmFicmljSW5saW5lRGlhbG9nTW9kdWxlIH0gZnJvbSAnLi4vLi4vbW9kYWwvaW5saW5lLWRpYWxvZy9mYWJyaWMtaW5saW5lLWRpYWxvZy5tb2R1bGUnO1xuaW1wb3J0IHsgRmFicmljSW5wdXRNb2R1bGUgfSBmcm9tICcuLi9pbnB1dC9mYWJyaWMtaW5wdXQubW9kdWxlJztcbmltcG9ydCB7IEZhYnJpY0J1dHRvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2dlbmVyYWwvYnV0dG9uL2J1dHRvbi9mYWJyaWMtYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VySW5saW5lRGlhbG9nU2VydmljZSB9IGZyb20gJy4vZmFicmljLmRhdGUtcGlja2VyLWlubGluZS1kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyVmlld1BhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci92aWV3L2ZhYnJpYy1kYXRlLXBpY2tlci12aWV3LXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNUaW1lUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci90aW1lL2ZhYnJpYy10aW1lLXBpY2tlci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBGYWJyaWNBcnJvd0ljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9jb21tb24vaWNvbnMvYXJyb3ctaWNvbi9mYWJyaWMtYXJyb3ctaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlckljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9jb21tb24vaWNvbnMvZGF0ZS1waWNrZXItaWNvbi9kYXRlLXBpY2tlci1pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi9jYWxlbmRhci9mYWJyaWMtZGF0ZS1waWNrZXItY2FsZW5kYXIuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJWaWV3U2VydmljZSB9IGZyb20gJy4vY2FsZW5kYXIvZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLXZpZXcuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyTW9udGhzVmlld0NvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXIvdmlldy9tb250aHMvZmFicmljLWRhdGUtcGlja2VyLW1vbnRocy12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyWWVhcnNDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyL3ZpZXcveWVhcnMvZmFicmljLWRhdGUtcGlja2VyLXllYXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyRGF5c1ZpZXdDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyL3ZpZXcvZGF5cy9mYWJyaWMtZGF0ZS1waWNrZXItZGF5cy12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyWWVhcnNTZXJ2aWNlIH0gZnJvbSAnLi9jYWxlbmRhci95ZWFycy9mYWJyaWMtZGF0ZS1waWNrZXIteWVhcnMuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtZGF0ZS1waWNrZXItY29tcG9zaXRpb24uc2VydmljZSc7XG5cbmNvbnN0IGljb25zID0gW1xuXHREYXRlUGlja2VySWNvbk1vZHVsZSxcblx0RmFicmljQXJyb3dJY29uTW9kdWxlXG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZhYnJpY0lubGluZURpYWxvZ01vZHVsZSxcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXHRcdEZhYnJpY0lucHV0TW9kdWxlLFxuXHRcdEZhYnJpY0J1dHRvbk1vZHVsZSxcblx0XHQuLi5pY29uc1xuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJDb21wb25lbnQsXG5cdFx0RmFicmljRGF0ZVBpY2tlckNvbXBvbmVudCxcblx0XHRGYWJyaWNEYXRlUGlja2VyRGF5c1ZpZXdDb21wb25lbnQsXG5cdFx0RmFicmljRGF0ZVBpY2tlck1vbnRoc1ZpZXdDb21wb25lbnQsXG5cdFx0RmFicmljRGF0ZVBpY2tlclllYXJzQ29tcG9uZW50LFxuXHRcdEZhYnJpY0RhdGVQaWNrZXJWaWV3UGFuZWxDb21wb25lbnQsXG5cdFx0RmFicmljVGltZVBpY2tlckNvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0RmFicmljRGF0ZVBpY2tlckNhbGVuZGFyQ29tcG9uZW50LFxuXHRcdEZhYnJpY0RhdGVQaWNrZXJDb21wb25lbnRcblx0XSxcblx0ZW50cnlDb21wb25lbnRzOiBbXG5cdFx0RmFicmljRGF0ZVBpY2tlckNhbGVuZGFyQ29tcG9uZW50XG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdEZhYnJpY0RhdGVQaWNrZXJTZXJ2aWNlLFxuXHRcdEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvblNlcnZpY2UsXG5cdFx0RmFicmljRGF0ZVBpY2tlckNhbGVuZGFyU2VydmljZSxcblx0XHRGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJWaWV3U2VydmljZSxcblx0XHRGYWJyaWNEYXRlUGlja2VyWWVhcnNTZXJ2aWNlLFxuXHRcdEZhYnJpY0RhdGVQaWNrZXJXZWVrcyxcblx0XHRGYWJyaWNEYXRlUGlja2VyWWVhcnMsXG5cdFx0RmFicmljRGF0ZVBpY2tlcklubGluZURpYWxvZ1NlcnZpY2Vcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNEYXRlUGlja2VyTW9kdWxlIHtcblxufVxuIl19