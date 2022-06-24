import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StructureTopPanelComponent } from './structure.top-panel.component';
import { FilterMenuFeatureModule } from '../../../../feature/structure/filter/menu/filter-menu.feature-module';
import { SearchFeatureModule } from '../../../../feature/structure/search/search.feature-module';
import * as i0 from "@angular/core";
export class StructureTopPanelModule {
}
StructureTopPanelModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureTopPanelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StructureTopPanelModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureTopPanelModule, declarations: [StructureTopPanelComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FilterMenuFeatureModule,
        SearchFeatureModule], exports: [StructureTopPanelComponent] });
StructureTopPanelModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureTopPanelModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            FilterMenuFeatureModule,
            SearchFeatureModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureTopPanelModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRvcC1wYW5lbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvcGFuZWwvdG9wL3N0cnVjdHVyZS50b3AtcGFuZWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBRS9HLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDOztBQWlCakcsTUFBTSxPQUFPLHVCQUF1Qjs7cUhBQXZCLHVCQUF1QjtzSEFBdkIsdUJBQXVCLGlCQU5sQywwQkFBMEIsYUFOMUIsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsbUJBQW1CLGFBTW5CLDBCQUEwQjtzSEFHZix1QkFBdUIsWUFiMUI7WUFDUixZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLHVCQUF1QjtZQUN2QixtQkFBbUI7U0FDbkI7NEZBUVcsdUJBQXVCO2tCQWRuQyxRQUFRO21CQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsdUJBQXVCO3dCQUN2QixtQkFBbUI7cUJBQ25CO29CQUNELFlBQVksRUFBRTt3QkFDYiwwQkFBMEI7cUJBQzFCO29CQUNELE9BQU8sRUFBRTt3QkFDUiwwQkFBMEI7cUJBQzFCO2lCQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVUb3BQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlLnRvcC1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyTWVudUZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9maWx0ZXIvbWVudS9maWx0ZXItbWVudS5mZWF0dXJlLW1vZHVsZSc7XG5cbmltcG9ydCB7IFNlYXJjaEZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9zZWFyY2gvc2VhcmNoLmZlYXR1cmUtbW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cdFx0RmlsdGVyTWVudUZlYXR1cmVNb2R1bGUsXG5cdFx0U2VhcmNoRmVhdHVyZU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRTdHJ1Y3R1cmVUb3BQYW5lbENvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0U3RydWN0dXJlVG9wUGFuZWxDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVUb3BQYW5lbE1vZHVsZSB7XG59XG4iXX0=