/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricModule } from '@generic-ui/fabric';
import { StructurePagingComponent } from './structure-paging.component';
import { StructurePagingNavigatorComponent } from './navigator/structure-paging-navigator.component';
import { StructurePagingSelectComponent } from './select/structure-paging-select.component';
import { StructurePagingStatsComponent } from './stats/structure-paging-stats.component';
import { StructureAlternativePagingNavigatorComponent } from './alternative-paging/navigator/structure-alternative-paging-navigator.component';
import { StructureAlternativePagingPagesComponent } from './alternative-paging/pages/structure-alternative-paging-pages.component';
var StructurePagingModule = /** @class */ (function () {
    function StructurePagingModule() {
    }
    StructurePagingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FabricModule
                    ],
                    declarations: [
                        StructurePagingComponent,
                        StructurePagingNavigatorComponent,
                        StructurePagingSelectComponent,
                        StructurePagingStatsComponent,
                        StructureAlternativePagingNavigatorComponent,
                        StructureAlternativePagingPagesComponent
                    ],
                    exports: [
                        StructurePagingComponent,
                        StructurePagingNavigatorComponent,
                        StructurePagingSelectComponent,
                        StructurePagingStatsComponent,
                        StructureAlternativePagingNavigatorComponent,
                        StructureAlternativePagingPagesComponent
                    ]
                },] }
    ];
    return StructurePagingModule;
}());
export { StructurePagingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhZ2luZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9wYWdpbmcvc3RydWN0dXJlLXBhZ2luZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM1RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN6RixPQUFPLEVBQUUsNENBQTRDLEVBQUUsTUFBTSxpRkFBaUYsQ0FBQztBQUMvSSxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUduSTtJQUFBO0lBdUJBLENBQUM7O2dCQXZCQSxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osWUFBWTtxQkFDWjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2Isd0JBQXdCO3dCQUN4QixpQ0FBaUM7d0JBQ2pDLDhCQUE4Qjt3QkFDOUIsNkJBQTZCO3dCQUM3Qiw0Q0FBNEM7d0JBQzVDLHdDQUF3QztxQkFDeEM7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLHdCQUF3Qjt3QkFDeEIsaUNBQWlDO3dCQUNqQyw4QkFBOEI7d0JBQzlCLDZCQUE2Qjt3QkFDN0IsNENBQTRDO3dCQUM1Qyx3Q0FBd0M7cUJBQ3hDO2lCQUNEOztJQUVELDRCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FEWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmFicmljTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU3RydWN0dXJlUGFnaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUtcGFnaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQYWdpbmdOYXZpZ2F0b3JDb21wb25lbnQgfSBmcm9tICcuL25hdmlnYXRvci9zdHJ1Y3R1cmUtcGFnaW5nLW5hdmlnYXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUGFnaW5nU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3Qvc3RydWN0dXJlLXBhZ2luZy1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVBhZ2luZ1N0YXRzQ29tcG9uZW50IH0gZnJvbSAnLi9zdGF0cy9zdHJ1Y3R1cmUtcGFnaW5nLXN0YXRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBbHRlcm5hdGl2ZVBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCB9IGZyb20gJy4vYWx0ZXJuYXRpdmUtcGFnaW5nL25hdmlnYXRvci9zdHJ1Y3R1cmUtYWx0ZXJuYXRpdmUtcGFnaW5nLW5hdmlnYXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWx0ZXJuYXRpdmVQYWdpbmdQYWdlc0NvbXBvbmVudCB9IGZyb20gJy4vYWx0ZXJuYXRpdmUtcGFnaW5nL3BhZ2VzL3N0cnVjdHVyZS1hbHRlcm5hdGl2ZS1wYWdpbmctcGFnZXMuY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZhYnJpY01vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRTdHJ1Y3R1cmVQYWdpbmdDb21wb25lbnQsXG5cdFx0U3RydWN0dXJlUGFnaW5nTmF2aWdhdG9yQ29tcG9uZW50LFxuXHRcdFN0cnVjdHVyZVBhZ2luZ1NlbGVjdENvbXBvbmVudCxcblx0XHRTdHJ1Y3R1cmVQYWdpbmdTdGF0c0NvbXBvbmVudCxcblx0XHRTdHJ1Y3R1cmVBbHRlcm5hdGl2ZVBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCxcblx0XHRTdHJ1Y3R1cmVBbHRlcm5hdGl2ZVBhZ2luZ1BhZ2VzQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRTdHJ1Y3R1cmVQYWdpbmdDb21wb25lbnQsXG5cdFx0U3RydWN0dXJlUGFnaW5nTmF2aWdhdG9yQ29tcG9uZW50LFxuXHRcdFN0cnVjdHVyZVBhZ2luZ1NlbGVjdENvbXBvbmVudCxcblx0XHRTdHJ1Y3R1cmVQYWdpbmdTdGF0c0NvbXBvbmVudCxcblx0XHRTdHJ1Y3R1cmVBbHRlcm5hdGl2ZVBhZ2luZ05hdmlnYXRvckNvbXBvbmVudCxcblx0XHRTdHJ1Y3R1cmVBbHRlcm5hdGl2ZVBhZ2luZ1BhZ2VzQ29tcG9uZW50XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUGFnaW5nTW9kdWxlIHtcbn1cbiJdfQ==