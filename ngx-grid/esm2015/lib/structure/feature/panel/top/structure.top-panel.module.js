/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StructureTopPanelComponent } from './structure.top-panel.component';
import { StructureSearchComponent } from './search/structure.search.component';
import { StructureFilterMenuModule } from '../../filter/structure.filter-menu.module';
import { StructureSearchIconComponent } from './search/icon/structure.search-icon.component';
export class StructureTopPanelModule {
}
StructureTopPanelModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    StructureFilterMenuModule
                ],
                declarations: [
                    StructureTopPanelComponent,
                    StructureSearchComponent,
                    StructureSearchIconComponent
                ],
                exports: [
                    StructureTopPanelComponent,
                    StructureSearchComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRvcC1wYW5lbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9wYW5lbC90b3Avc3RydWN0dXJlLnRvcC1wYW5lbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBbUI3RixNQUFNLE9BQU8sdUJBQXVCOzs7WUFoQm5DLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixtQkFBbUI7b0JBQ25CLHlCQUF5QjtpQkFDekI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLDBCQUEwQjtvQkFDMUIsd0JBQXdCO29CQUN4Qiw0QkFBNEI7aUJBQzVCO2dCQUNELE9BQU8sRUFBRTtvQkFDUiwwQkFBMEI7b0JBQzFCLHdCQUF3QjtpQkFDeEI7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgU3RydWN0dXJlVG9wUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL3N0cnVjdHVyZS50b3AtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoL3N0cnVjdHVyZS5zZWFyY2guY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUZpbHRlck1lbnVNb2R1bGUgfSBmcm9tICcuLi8uLi9maWx0ZXIvc3RydWN0dXJlLmZpbHRlci1tZW51Lm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gvaWNvbi9zdHJ1Y3R1cmUuc2VhcmNoLWljb24uY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cdFx0U3RydWN0dXJlRmlsdGVyTWVudU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRTdHJ1Y3R1cmVUb3BQYW5lbENvbXBvbmVudCxcblx0XHRTdHJ1Y3R1cmVTZWFyY2hDb21wb25lbnQsXG5cdFx0U3RydWN0dXJlU2VhcmNoSWNvbkNvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0U3RydWN0dXJlVG9wUGFuZWxDb21wb25lbnQsXG5cdFx0U3RydWN0dXJlU2VhcmNoQ29tcG9uZW50XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlVG9wUGFuZWxNb2R1bGUge1xufVxuIl19