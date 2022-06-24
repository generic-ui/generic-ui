import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { UniqueValueListComponent } from './unique-value-list.component';
import { fabricImports } from '../../../../feature-view/grid-view/structure-fabric.imports';
import { FilterFeatureModule } from '../filter.feature-module';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
export class UniqueValueListModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
UniqueValueListModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: UniqueValueListModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
UniqueValueListModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: UniqueValueListModule, declarations: [UniqueValueListComponent], imports: [CommonModule, i1.FabricBadgeModule, i1.FabricButtonModule, i1.FabricButtonGroupModule, i1.FabricCheckboxModule, i1.FabricChipModule, i1.FabricDrawerModule, i1.FabricDropdownModule, i1.FabricRadioButtonModule, i1.FabricRadioGroupModule, i1.FabricProgressBarModule, i1.FabricProgressSpinnerModule, i1.FabricSelectModule, i1.FabricSpinnerModule, i1.FabricTabModule, i1.FabricTooltipModule, i1.FabricToggleButtonModule, i1.FabricInputModule, i1.FabricDialogModule, i1.FabricInlineDialogModule, i1.FabricTabModule, FilterFeatureModule], exports: [UniqueValueListComponent] });
UniqueValueListModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: UniqueValueListModule, imports: [[
            CommonModule,
            fabricImports,
            FilterFeatureModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: UniqueValueListModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        fabricImports,
                        FilterFeatureModule
                    ],
                    declarations: [
                        UniqueValueListComponent
                    ],
                    exports: [
                        UniqueValueListComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLWxpc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9maWx0ZXIvdW5pcXVlL3VuaXF1ZS12YWx1ZS1saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFnQi9ELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxhQUFhO0lBRXZELE1BQU0sQ0FBQyxZQUFZO1FBQ2xCLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7bUhBSlcscUJBQXFCO29IQUFyQixxQkFBcUIsaUJBTmhDLHdCQUF3QixhQUx4QixZQUFZLGtmQUVaLG1CQUFtQixhQU1uQix3QkFBd0I7b0hBR2IscUJBQXFCLFlBWnhCO1lBQ1IsWUFBWTtZQUNaLGFBQWE7WUFDYixtQkFBbUI7U0FDbkI7NEZBUVcscUJBQXFCO2tCQWJqQyxRQUFRO21CQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsbUJBQW1CO3FCQUNuQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2Isd0JBQXdCO3FCQUN4QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Isd0JBQXdCO3FCQUN4QjtpQkFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFVuaXF1ZVZhbHVlTGlzdENvbXBvbmVudCB9IGZyb20gJy4vdW5pcXVlLXZhbHVlLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IGZhYnJpY0ltcG9ydHMgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3N0cnVjdHVyZS1mYWJyaWMuaW1wb3J0cyc7XG5pbXBvcnQgeyBGaWx0ZXJGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vZmlsdGVyLmZlYXR1cmUtbW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdGZhYnJpY0ltcG9ydHMsXG5cdFx0RmlsdGVyRmVhdHVyZU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRVbmlxdWVWYWx1ZUxpc3RDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdFVuaXF1ZVZhbHVlTGlzdENvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFVuaXF1ZVZhbHVlTGlzdE1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHQvLyBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBmaWx0ZXJBcGlNb2R1bGU6IEZpbHRlckFwaU1vZHVsZSkge1xuXHQvLyBcdHN1cGVyKCk7XG5cdC8vIFx0aWYgKGZpbHRlckFwaU1vZHVsZSA9PT0gbnVsbCkge1xuXHQvLyBcdFx0dGhyb3cgbmV3IEVycm9yKCdGaWx0ZXJBcGlNb2R1bGUgaXMgcmVxdWlyZWQuJyk7XG5cdC8vIFx0fVxuXHQvLyB9XG5cbn1cbiJdfQ==