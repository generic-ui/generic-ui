import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { FilterApiModule } from '../../core/api/filter.api-module';
import { fabricImports } from '../../../grid/feature/structure-fabric.imports';
import { ActiveFilterListComponent } from './active-filter-list.component';
import { ActiveSearchComponent } from './search/active-search.component';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
export class ActiveFilterListModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
ActiveFilterListModule.ɵfac = /*@__PURE__*/ function () { let ɵActiveFilterListModule_BaseFactory; return function ActiveFilterListModule_Factory(t) { return (ɵActiveFilterListModule_BaseFactory || (ɵActiveFilterListModule_BaseFactory = i0.ɵɵgetInheritedFactory(ActiveFilterListModule)))(t || ActiveFilterListModule); }; }();
ActiveFilterListModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ActiveFilterListModule });
ActiveFilterListModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            fabricImports,
            FilterApiModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActiveFilterListModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    fabricImports,
                    FilterApiModule
                ],
                declarations: [
                    ActiveFilterListComponent,
                    ActiveSearchComponent
                ],
                exports: [
                    ActiveFilterListComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ActiveFilterListModule, { declarations: [ActiveFilterListComponent,
        ActiveSearchComponent], imports: [CommonModule, i1.FabricBadgeModule, i1.FabricButtonModule, i1.FabricButtonGroupModule, i1.FabricCheckboxModule, i1.FabricChipModule, i1.FabricDrawerModule, i1.FabricDropdownModule, i1.FabricRadioButtonModule, i1.FabricRadioGroupModule, i1.FabricProgressBarModule, i1.FabricProgressSpinnerModule, i1.FabricSelectModule, i1.FabricSpinnerModule, i1.FabricTabModule, i1.FabricTooltipModule, i1.FabricToggleButtonModule, i1.FabricInputModule, i1.FabricDialogModule, i1.FabricInlineDialogModule, i1.FabricTabModule, FilterApiModule], exports: [ActiveFilterListComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpbHRlci1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2ZpbHRlci9mZWF0dXJlL2FjdGl2ZS1maWx0ZXJzL2FjdGl2ZS1maWx0ZXItbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDL0UsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7OztBQWlCekUsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGFBQWE7SUFFeEQsTUFBTSxDQUFDLFlBQVk7UUFDbEIsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDOztzUUFKVyxzQkFBc0IsU0FBdEIsc0JBQXNCO3dFQUF0QixzQkFBc0I7NEVBYnpCO1lBQ1IsWUFBWTtZQUNaLGFBQWE7WUFDYixlQUFlO1NBQ2Y7dUZBU1csc0JBQXNCO2NBZGxDLFFBQVE7ZUFBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixhQUFhO29CQUNiLGVBQWU7aUJBQ2Y7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLHlCQUF5QjtvQkFDekIscUJBQXFCO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IseUJBQXlCO2lCQUN6QjthQUNEOzt3RkFDWSxzQkFBc0IsbUJBUGpDLHlCQUF5QjtRQUN6QixxQkFBcUIsYUFOckIsWUFBWSxrZkFFWixlQUFlLGFBT2YseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGZWF0dXJlTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRmlsdGVyQXBpTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvZmlsdGVyLmFwaS1tb2R1bGUnO1xuaW1wb3J0IHsgZmFicmljSW1wb3J0cyB9IGZyb20gJy4uLy4uLy4uL2dyaWQvZmVhdHVyZS9zdHJ1Y3R1cmUtZmFicmljLmltcG9ydHMnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vYWN0aXZlLWZpbHRlci1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3RpdmVTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC9hY3RpdmUtc2VhcmNoLmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRmYWJyaWNJbXBvcnRzLFxuXHRcdEZpbHRlckFwaU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRBY3RpdmVGaWx0ZXJMaXN0Q29tcG9uZW50LFxuXHRcdEFjdGl2ZVNlYXJjaENvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0QWN0aXZlRmlsdGVyTGlzdENvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZUZpbHRlckxpc3RNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Ly8gY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgZmlsdGVyQXBpTW9kdWxlOiBGaWx0ZXJBcGlNb2R1bGUpIHtcblx0Ly8gXHRzdXBlcigpO1xuXHQvLyBcdGlmIChmaWx0ZXJBcGlNb2R1bGUgPT09IG51bGwpIHtcblx0Ly8gXHRcdHRocm93IG5ldyBFcnJvcignRmlsdGVyQXBpTW9kdWxlIGlzIHJlcXVpcmVkLicpO1xuXHQvLyBcdH1cblx0Ly8gfVxuXG59XG4iXX0=