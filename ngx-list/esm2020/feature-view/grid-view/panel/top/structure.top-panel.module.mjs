import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StructureTopPanelComponent } from './structure.top-panel.component';
import { FilterMenuFeatureModule } from '../../../../feature/structure/filter/menu/filter-menu.feature-module';
import { SearchFeatureModule } from '../../../../feature/structure/search/search.feature-module';
import * as i0 from "@angular/core";
export class StructureTopPanelModule {
}
StructureTopPanelModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureTopPanelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StructureTopPanelModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: StructureTopPanelModule, declarations: [StructureTopPanelComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FilterMenuFeatureModule,
        SearchFeatureModule], exports: [StructureTopPanelComponent] });
StructureTopPanelModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureTopPanelModule, imports: [CommonModule,
        ReactiveFormsModule,
        FilterMenuFeatureModule,
        SearchFeatureModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureTopPanelModule, decorators: [{
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
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRvcC1wYW5lbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvcGFuZWwvdG9wL3N0cnVjdHVyZS50b3AtcGFuZWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBRS9HLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDOztBQWlCakcsTUFBTSxPQUFPLHVCQUF1Qjs7b0hBQXZCLHVCQUF1QjtxSEFBdkIsdUJBQXVCLGlCQU5sQywwQkFBMEIsYUFOMUIsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsbUJBQW1CLGFBTW5CLDBCQUEwQjtxSEFHZix1QkFBdUIsWUFabEMsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsbUJBQW1COzJGQVNSLHVCQUF1QjtrQkFkbkMsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLHVCQUF1Qjt3QkFDdkIsbUJBQW1CO3FCQUNuQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2IsMEJBQTBCO3FCQUMxQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1IsMEJBQTBCO3FCQUMxQjtpQkFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgU3RydWN0dXJlVG9wUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL3N0cnVjdHVyZS50b3AtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlck1lbnVGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUvZmlsdGVyL21lbnUvZmlsdGVyLW1lbnUuZmVhdHVyZS1tb2R1bGUnO1xuXG5pbXBvcnQgeyBTZWFyY2hGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUvc2VhcmNoL3NlYXJjaC5mZWF0dXJlLW1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXHRcdEZpbHRlck1lbnVGZWF0dXJlTW9kdWxlLFxuXHRcdFNlYXJjaEZlYXR1cmVNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0U3RydWN0dXJlVG9wUGFuZWxDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdFN0cnVjdHVyZVRvcFBhbmVsQ29tcG9uZW50XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlVG9wUGFuZWxNb2R1bGUge1xufVxuIl19