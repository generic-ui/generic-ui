import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { fabricImports } from '../../../../feature-view/grid-view/structure-fabric.imports';
import { ActiveFilterListComponent } from './active-filter-list.component';
import { ActiveSearchComponent } from './search/active-search.component';
import { FilterFeatureModule } from '../filter.feature-module';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
export class ActiveFilterListModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
ActiveFilterListModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ActiveFilterListModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
ActiveFilterListModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ActiveFilterListModule, declarations: [ActiveFilterListComponent,
        ActiveSearchComponent], imports: [CommonModule, i1.FabricBadgeModule, i1.FabricButtonModule, i1.FabricButtonGroupModule, i1.FabricCheckboxModule, i1.FabricChipModule, i1.FabricDrawerModule, i1.FabricDropdownModule, i1.FabricRadioButtonModule, i1.FabricRadioGroupModule, i1.FabricProgressBarModule, i1.FabricProgressSpinnerModule, i1.FabricSelectModule, i1.FabricSpinnerModule, i1.FabricTabModule, i1.FabricTooltipModule, i1.FabricToggleButtonModule, i1.FabricInputModule, i1.FabricDialogModule, i1.FabricInlineDialogModule, i1.FabricTabModule, FilterFeatureModule], exports: [ActiveFilterListComponent] });
ActiveFilterListModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ActiveFilterListModule, imports: [[
            CommonModule,
            fabricImports,
            FilterFeatureModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ActiveFilterListModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        fabricImports,
                        FilterFeatureModule
                    ],
                    declarations: [
                        ActiveFilterListComponent,
                        ActiveSearchComponent
                    ],
                    exports: [
                        ActiveFilterListComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlci1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvZmlsdGVyL2FjdGl2ZS1maWx0ZXJzL2FjdGl2ZS1maWx0ZXItbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUM1RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBaUIvRCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsYUFBYTtJQUV4RCxNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7O29IQUpXLHNCQUFzQjtxSEFBdEIsc0JBQXNCLGlCQVBqQyx5QkFBeUI7UUFDekIscUJBQXFCLGFBTnJCLFlBQVksa2ZBRVosbUJBQW1CLGFBT25CLHlCQUF5QjtxSEFHZCxzQkFBc0IsWUFiekI7WUFDUixZQUFZO1lBQ1osYUFBYTtZQUNiLG1CQUFtQjtTQUNuQjs0RkFTVyxzQkFBc0I7a0JBZGxDLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixtQkFBbUI7cUJBQ25CO29CQUNELFlBQVksRUFBRTt3QkFDYix5QkFBeUI7d0JBQ3pCLHFCQUFxQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLHlCQUF5QjtxQkFDekI7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgZmFicmljSW1wb3J0cyB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc3RydWN0dXJlLWZhYnJpYy5pbXBvcnRzJztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlckxpc3RDb21wb25lbnQgfSBmcm9tICcuL2FjdGl2ZS1maWx0ZXItbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aXZlU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gvYWN0aXZlLXNlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uL2ZpbHRlci5mZWF0dXJlLW1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRmYWJyaWNJbXBvcnRzLFxuXHRcdEZpbHRlckZlYXR1cmVNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0QWN0aXZlRmlsdGVyTGlzdENvbXBvbmVudCxcblx0XHRBY3RpdmVTZWFyY2hDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdEFjdGl2ZUZpbHRlckxpc3RDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVGaWx0ZXJMaXN0TW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGZvckNvbXBvbmVudCgpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdC8vIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIGZpbHRlckFwaU1vZHVsZTogRmlsdGVyQXBpTW9kdWxlKSB7XG5cdC8vIFx0c3VwZXIoKTtcblx0Ly8gXHRpZiAoZmlsdGVyQXBpTW9kdWxlID09PSBudWxsKSB7XG5cdC8vIFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ZpbHRlckFwaU1vZHVsZSBpcyByZXF1aXJlZC4nKTtcblx0Ly8gXHR9XG5cdC8vIH1cblxufVxuIl19