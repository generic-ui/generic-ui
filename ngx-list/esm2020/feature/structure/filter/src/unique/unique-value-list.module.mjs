import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { UniqueValueListComponent } from './unique-value-list.component';
import { fabricImports } from '../../../../../feature-view/grid-view/src/structure-fabric.imports';
import { FilterFeatureModule } from '../filter.feature-module';
import { GuiTemplateModule } from '../../../../../feature/gui-angular/template/gui.template.module';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
export class UniqueValueListModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
UniqueValueListModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: UniqueValueListModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
UniqueValueListModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: UniqueValueListModule, declarations: [UniqueValueListComponent], imports: [CommonModule, i1.FabricBadgeModule, i1.FabricButtonModule, i1.FabricButtonGroupModule, i1.FabricCheckboxModule, i1.FabricChipModule, i1.FabricDrawerModule, i1.FabricDropdownModule, i1.FabricRadioButtonModule, i1.FabricRadioGroupModule, i1.FabricProgressBarModule, i1.FabricProgressSpinnerModule, i1.FabricSelectModule, i1.FabricSpinnerModule, i1.FabricTabModule, i1.FabricTooltipModule, i1.FabricToggleButtonModule, i1.FabricInputModule, i1.FabricDialogModule, i1.FabricInlineDialogModule, i1.FabricTabModule, GuiTemplateModule,
        FilterFeatureModule], exports: [UniqueValueListComponent] });
UniqueValueListModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: UniqueValueListModule, imports: [CommonModule,
        fabricImports,
        GuiTemplateModule,
        FilterFeatureModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: UniqueValueListModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        fabricImports,
                        GuiTemplateModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLWxpc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL3VuaXF1ZS91bmlxdWUtdmFsdWUtbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUNuRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQzs7O0FBaUJwRyxNQUFNLE9BQU8scUJBQXNCLFNBQVEsYUFBYTtJQUV2RCxNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7O21IQUpXLHFCQUFxQjtvSEFBckIscUJBQXFCLGlCQU5oQyx3QkFBd0IsYUFOeEIsWUFBWSxrZkFFWixpQkFBaUI7UUFDakIsbUJBQW1CLGFBTW5CLHdCQUF3QjtvSEFHYixxQkFBcUIsWUFaaEMsWUFBWTtRQUNaLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsbUJBQW1COzRGQVNSLHFCQUFxQjtrQkFkakMsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsbUJBQW1CO3FCQUNuQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2Isd0JBQXdCO3FCQUN4QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Isd0JBQXdCO3FCQUN4QjtpQkFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFVuaXF1ZVZhbHVlTGlzdENvbXBvbmVudCB9IGZyb20gJy4vdW5pcXVlLXZhbHVlLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IGZhYnJpY0ltcG9ydHMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9zdHJ1Y3R1cmUtZmFicmljLmltcG9ydHMnO1xuaW1wb3J0IHsgRmlsdGVyRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uL2ZpbHRlci5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBHdWlUZW1wbGF0ZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvZ3VpLWFuZ3VsYXIvdGVtcGxhdGUvZ3VpLnRlbXBsYXRlLm1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRmYWJyaWNJbXBvcnRzLFxuXHRcdEd1aVRlbXBsYXRlTW9kdWxlLFxuXHRcdEZpbHRlckZlYXR1cmVNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0VW5pcXVlVmFsdWVMaXN0Q29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRVbmlxdWVWYWx1ZUxpc3RDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBVbmlxdWVWYWx1ZUxpc3RNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cbn1cbiJdfQ==