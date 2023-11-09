import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { fabricImports } from '../../../../../feature-view/grid-view/src/structure-fabric.imports';
import { ActiveFilterListComponent } from './active-filter-list.component';
import { ActiveSearchComponent } from './search/active-search.component';
import { FilterFeatureModule } from '../filter.feature-module';
import { GuiTemplateModule } from '../../../../../feature/gui-angular/template/gui.template.module';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
export class ActiveFilterListModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
ActiveFilterListModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ActiveFilterListModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
ActiveFilterListModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: ActiveFilterListModule, declarations: [ActiveFilterListComponent,
        ActiveSearchComponent], imports: [CommonModule, i1.FabricBadgeModule, i1.FabricButtonModule, i1.FabricButtonGroupModule, i1.FabricCheckboxModule, i1.FabricChipModule, i1.FabricDrawerModule, i1.FabricDropdownModule, i1.FabricRadioButtonModule, i1.FabricRadioGroupModule, i1.FabricProgressBarModule, i1.FabricProgressSpinnerModule, i1.FabricSelectModule, i1.FabricSpinnerModule, i1.FabricTabModule, i1.FabricTooltipModule, i1.FabricToggleButtonModule, i1.FabricInputModule, i1.FabricDialogModule, i1.FabricInlineDialogModule, i1.FabricTabModule, GuiTemplateModule,
        FilterFeatureModule], exports: [ActiveFilterListComponent] });
ActiveFilterListModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ActiveFilterListModule, imports: [CommonModule,
        fabricImports,
        GuiTemplateModule,
        FilterFeatureModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ActiveFilterListModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        fabricImports,
                        GuiTemplateModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlci1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9hY3RpdmUtZmlsdGVycy9hY3RpdmUtZmlsdGVyLWxpc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDbkcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUVBQWlFLENBQUM7OztBQWtCcEcsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGFBQWE7SUFFeEQsTUFBTSxDQUFDLFlBQVk7UUFDbEIsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDOztvSEFKVyxzQkFBc0I7cUhBQXRCLHNCQUFzQixpQkFQakMseUJBQXlCO1FBQ3pCLHFCQUFxQixhQVByQixZQUFZLGtmQUVaLGlCQUFpQjtRQUNqQixtQkFBbUIsYUFPbkIseUJBQXlCO3FIQUdkLHNCQUFzQixZQWJqQyxZQUFZO1FBQ1osYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixtQkFBbUI7NEZBVVIsc0JBQXNCO2tCQWZsQyxRQUFRO21CQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsaUJBQWlCO3dCQUNqQixtQkFBbUI7cUJBQ25CO29CQUNELFlBQVksRUFBRTt3QkFDYix5QkFBeUI7d0JBQ3pCLHFCQUFxQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLHlCQUF5QjtxQkFDekI7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgZmFicmljSW1wb3J0cyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc3JjL3N0cnVjdHVyZS1mYWJyaWMuaW1wb3J0cyc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9hY3RpdmUtZmlsdGVyLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGl2ZVNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoL2FjdGl2ZS1zZWFyY2guY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlckZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi9maWx0ZXIuZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgR3VpVGVtcGxhdGVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2d1aS1hbmd1bGFyL3RlbXBsYXRlL2d1aS50ZW1wbGF0ZS5tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0ZmFicmljSW1wb3J0cyxcblx0XHRHdWlUZW1wbGF0ZU1vZHVsZSxcblx0XHRGaWx0ZXJGZWF0dXJlTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdEFjdGl2ZUZpbHRlckxpc3RDb21wb25lbnQsXG5cdFx0QWN0aXZlU2VhcmNoQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRBY3RpdmVGaWx0ZXJMaXN0Q29tcG9uZW50XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZlRmlsdGVyTGlzdE1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHQvLyBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBmaWx0ZXJBcGlNb2R1bGU6IEZpbHRlckFwaU1vZHVsZSkge1xuXHQvLyBcdHN1cGVyKCk7XG5cdC8vIFx0aWYgKGZpbHRlckFwaU1vZHVsZSA9PT0gbnVsbCkge1xuXHQvLyBcdFx0dGhyb3cgbmV3IEVycm9yKCdGaWx0ZXJBcGlNb2R1bGUgaXMgcmVxdWlyZWQuJyk7XG5cdC8vIFx0fVxuXHQvLyB9XG5cbn1cbiJdfQ==