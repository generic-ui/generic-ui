import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StructureTopPanelComponent } from './structure.top-panel.component';
import { FilterMenuFeatureModule } from '../../../../filter/feature/menu/filter-menu.feature-module';
import { SearchFeatureModule } from '../../../../search/feature/search.feature-module';
import * as i0 from "@angular/core";
export class StructureTopPanelModule {
}
StructureTopPanelModule.ɵfac = function StructureTopPanelModule_Factory(t) { return new (t || StructureTopPanelModule)(); };
StructureTopPanelModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: StructureTopPanelModule });
StructureTopPanelModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            ReactiveFormsModule,
            FilterMenuFeatureModule,
            SearchFeatureModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureTopPanelModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FilterMenuFeatureModule,
                    SearchFeatureModule
                ],
                declarations: [
                    StructureTopPanelComponent
                ],
                exports: [
                    StructureTopPanelComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(StructureTopPanelModule, { declarations: [StructureTopPanelComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FilterMenuFeatureModule,
        SearchFeatureModule], exports: [StructureTopPanelComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRvcC1wYW5lbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvcGFuZWwvdG9wL3N0cnVjdHVyZS50b3AtcGFuZWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBRXJHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDOztBQWlCdkYsTUFBTSxPQUFPLHVCQUF1Qjs7OEZBQXZCLHVCQUF1Qjt5RUFBdkIsdUJBQXVCOzZFQWIxQjtZQUNSLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsdUJBQXVCO1lBQ3ZCLG1CQUFtQjtTQUNuQjt1RkFRVyx1QkFBdUI7Y0FkbkMsUUFBUTtlQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsdUJBQXVCO29CQUN2QixtQkFBbUI7aUJBQ25CO2dCQUNELFlBQVksRUFBRTtvQkFDYiwwQkFBMEI7aUJBQzFCO2dCQUNELE9BQU8sRUFBRTtvQkFDUiwwQkFBMEI7aUJBQzFCO2FBQ0Q7O3dGQUNZLHVCQUF1QixtQkFObEMsMEJBQTBCLGFBTjFCLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLG1CQUFtQixhQU1uQiwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVRvcFBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUudG9wLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJNZW51RmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpbHRlci9mZWF0dXJlL21lbnUvZmlsdGVyLW1lbnUuZmVhdHVyZS1tb2R1bGUnO1xuXG5pbXBvcnQgeyBTZWFyY2hGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VhcmNoL2ZlYXR1cmUvc2VhcmNoLmZlYXR1cmUtbW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cdFx0RmlsdGVyTWVudUZlYXR1cmVNb2R1bGUsXG5cdFx0U2VhcmNoRmVhdHVyZU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRTdHJ1Y3R1cmVUb3BQYW5lbENvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0U3RydWN0dXJlVG9wUGFuZWxDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVUb3BQYW5lbE1vZHVsZSB7XG59XG4iXX0=