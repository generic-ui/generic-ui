import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { UniqueValueListComponent } from './unique-value-list.component';
import { FilterApiModule } from '../../core/api/filter.api-module';
import { fabricImports } from '../../../grid/feature/structure-fabric.imports';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
export class UniqueValueListModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
UniqueValueListModule.ɵfac = /*@__PURE__*/ function () { let ɵUniqueValueListModule_BaseFactory; return function UniqueValueListModule_Factory(t) { return (ɵUniqueValueListModule_BaseFactory || (ɵUniqueValueListModule_BaseFactory = i0.ɵɵgetInheritedFactory(UniqueValueListModule)))(t || UniqueValueListModule); }; }();
UniqueValueListModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: UniqueValueListModule });
UniqueValueListModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            fabricImports,
            FilterApiModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UniqueValueListModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    fabricImports,
                    FilterApiModule
                ],
                declarations: [
                    UniqueValueListComponent
                ],
                exports: [
                    UniqueValueListComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UniqueValueListModule, { declarations: [UniqueValueListComponent], imports: [CommonModule, i1.FabricBadgeModule, i1.FabricButtonModule, i1.FabricButtonGroupModule, i1.FabricCheckboxModule, i1.FabricChipModule, i1.FabricDrawerModule, i1.FabricDropdownModule, i1.FabricRadioButtonModule, i1.FabricRadioGroupModule, i1.FabricProgressBarModule, i1.FabricProgressSpinnerModule, i1.FabricSelectModule, i1.FabricSpinnerModule, i1.FabricTabModule, i1.FabricTooltipModule, i1.FabricToggleButtonModule, i1.FabricInputModule, i1.FabricDialogModule, i1.FabricInlineDialogModule, i1.FabricTabModule, FilterApiModule], exports: [UniqueValueListComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLWxpc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvZmlsdGVyL2ZlYXR1cmUvdW5pcXVlL3VuaXF1ZS12YWx1ZS1saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7O0FBZ0IvRSxNQUFNLE9BQU8scUJBQXNCLFNBQVEsYUFBYTtJQUV2RCxNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7O2lRQUpXLHFCQUFxQixTQUFyQixxQkFBcUI7dUVBQXJCLHFCQUFxQjsyRUFaeEI7WUFDUixZQUFZO1lBQ1osYUFBYTtZQUNiLGVBQWU7U0FDZjt1RkFRVyxxQkFBcUI7Y0FiakMsUUFBUTtlQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLGFBQWE7b0JBQ2IsZUFBZTtpQkFDZjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2Isd0JBQXdCO2lCQUN4QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1Isd0JBQXdCO2lCQUN4QjthQUNEOzt3RkFDWSxxQkFBcUIsbUJBTmhDLHdCQUF3QixhQUx4QixZQUFZLGtmQUVaLGVBQWUsYUFNZix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBVbmlxdWVWYWx1ZUxpc3RDb21wb25lbnQgfSBmcm9tICcuL3VuaXF1ZS12YWx1ZS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJBcGlNb2R1bGUgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9maWx0ZXIuYXBpLW1vZHVsZSc7XG5pbXBvcnQgeyBmYWJyaWNJbXBvcnRzIH0gZnJvbSAnLi4vLi4vLi4vZ3JpZC9mZWF0dXJlL3N0cnVjdHVyZS1mYWJyaWMuaW1wb3J0cyc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRmYWJyaWNJbXBvcnRzLFxuXHRcdEZpbHRlckFwaU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRVbmlxdWVWYWx1ZUxpc3RDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdFVuaXF1ZVZhbHVlTGlzdENvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFVuaXF1ZVZhbHVlTGlzdE1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHQvLyBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBmaWx0ZXJBcGlNb2R1bGU6IEZpbHRlckFwaU1vZHVsZSkge1xuXHQvLyBcdHN1cGVyKCk7XG5cdC8vIFx0aWYgKGZpbHRlckFwaU1vZHVsZSA9PT0gbnVsbCkge1xuXHQvLyBcdFx0dGhyb3cgbmV3IEVycm9yKCdGaWx0ZXJBcGlNb2R1bGUgaXMgcmVxdWlyZWQuJyk7XG5cdC8vIFx0fVxuXHQvLyB9XG5cbn1cbiJdfQ==