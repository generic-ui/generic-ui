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
var StructureTopPanelModule = /** @class */ (function () {
    function StructureTopPanelModule() {
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
                        StructureSearchComponent
                    ],
                    exports: [
                        StructureTopPanelComponent,
                        StructureSearchComponent
                    ]
                },] }
    ];
    return StructureTopPanelModule;
}());
export { StructureTopPanelModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRvcC1wYW5lbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9wYW5lbC90b3Avc3RydWN0dXJlLnRvcC1wYW5lbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBR3RGO0lBQUE7SUFnQkEsQ0FBQzs7Z0JBaEJBLFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLHlCQUF5QjtxQkFDekI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLDBCQUEwQjt3QkFDMUIsd0JBQXdCO3FCQUN4QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1IsMEJBQTBCO3dCQUMxQix3QkFBd0I7cUJBQ3hCO2lCQUNEOztJQUVELDhCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FEWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVRvcFBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUudG9wLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC9zdHJ1Y3R1cmUuc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWx0ZXJNZW51TW9kdWxlIH0gZnJvbSAnLi4vLi4vZmlsdGVyL3N0cnVjdHVyZS5maWx0ZXItbWVudS5tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcblx0XHRTdHJ1Y3R1cmVGaWx0ZXJNZW51TW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdFN0cnVjdHVyZVRvcFBhbmVsQ29tcG9uZW50LFxuXHRcdFN0cnVjdHVyZVNlYXJjaENvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0U3RydWN0dXJlVG9wUGFuZWxDb21wb25lbnQsXG5cdFx0U3RydWN0dXJlU2VhcmNoQ29tcG9uZW50XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlVG9wUGFuZWxNb2R1bGUge1xufVxuIl19