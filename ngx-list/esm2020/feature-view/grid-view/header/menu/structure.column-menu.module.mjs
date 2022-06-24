import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureColumnConfigComponent } from './config/structure.column-config.component';
import { StructureColumnConfigTriggerComponent } from './trigger/structure.column-config-trigger.component';
import { StructureColumnConfigSortComponent } from './main/sort/structure.column-config-sort.component';
import { StructureColumnConfigColumnHideComponent } from './main/hide/structure.column-config-column-hide.component';
import { StructureColumnConfigColumnMoveComponent } from './main/move/structure.column-config-column-move.component';
import { fabricImports } from '../../structure-fabric.imports';
import { StructureColumnManagerModule } from '../../column-manager/structure.column-manager.module';
import { UniqueValueListModule } from '../../../../feature/structure/filter/unique/unique-value-list.module';
import { TranslationFeatureModule } from '../../../../feature/l10n/translation.feature-module';
import { StructureMenuIconModule } from '../../../../feature/common/icons/menu/structure.menu-icon.module';
import { StructureArrowIconModule } from '../../../../feature/common/icons/arrow/structure.arrow-icon.module';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
const declarations = [
    StructureColumnConfigComponent,
    StructureColumnConfigTriggerComponent,
    StructureColumnConfigSortComponent,
    StructureColumnConfigColumnHideComponent,
    StructureColumnConfigColumnMoveComponent
];
const icons = [
    StructureMenuIconModule,
    StructureArrowIconModule
];
export class StructureColumnMenuModule {
}
StructureColumnMenuModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureColumnMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StructureColumnMenuModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureColumnMenuModule, declarations: [StructureColumnConfigComponent,
        StructureColumnConfigTriggerComponent,
        StructureColumnConfigSortComponent,
        StructureColumnConfigColumnHideComponent,
        StructureColumnConfigColumnMoveComponent], imports: [CommonModule, i1.FabricBadgeModule, i1.FabricButtonModule, i1.FabricButtonGroupModule, i1.FabricCheckboxModule, i1.FabricChipModule, i1.FabricDrawerModule, i1.FabricDropdownModule, i1.FabricRadioButtonModule, i1.FabricRadioGroupModule, i1.FabricProgressBarModule, i1.FabricProgressSpinnerModule, i1.FabricSelectModule, i1.FabricSpinnerModule, i1.FabricTabModule, i1.FabricTooltipModule, i1.FabricToggleButtonModule, i1.FabricInputModule, i1.FabricDialogModule, i1.FabricInlineDialogModule, i1.FabricTabModule, StructureColumnManagerModule,
        UniqueValueListModule,
        TranslationFeatureModule, StructureMenuIconModule,
        StructureArrowIconModule], exports: [StructureColumnConfigComponent,
        StructureColumnConfigTriggerComponent,
        StructureColumnConfigSortComponent,
        StructureColumnConfigColumnHideComponent,
        StructureColumnConfigColumnMoveComponent] });
StructureColumnMenuModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureColumnMenuModule, imports: [[
            CommonModule,
            fabricImports,
            StructureColumnManagerModule,
            UniqueValueListModule,
            TranslationFeatureModule,
            icons
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureColumnMenuModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        fabricImports,
                        StructureColumnManagerModule,
                        UniqueValueListModule,
                        TranslationFeatureModule,
                        icons
                    ],
                    declarations: declarations,
                    exports: declarations
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9oZWFkZXIvbWVudS9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzVGLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzVHLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ3JILE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ3JILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUM3RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUMzRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQzs7O0FBRTlHLE1BQU0sWUFBWSxHQUFHO0lBQ3BCLDhCQUE4QjtJQUM5QixxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLHdDQUF3QztJQUN4Qyx3Q0FBd0M7Q0FDeEMsQ0FBQztBQUVGLE1BQU0sS0FBSyxHQUFHO0lBQ2IsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtDQUN4QixDQUFDO0FBY0YsTUFBTSxPQUFPLHlCQUF5Qjs7dUhBQXpCLHlCQUF5Qjt3SEFBekIseUJBQXlCLGlCQXhCckMsOEJBQThCO1FBQzlCLHFDQUFxQztRQUNyQyxrQ0FBa0M7UUFDbEMsd0NBQXdDO1FBQ3hDLHdDQUF3QyxhQVV2QyxZQUFZLGtmQUVaLDRCQUE0QjtRQUM1QixxQkFBcUI7UUFDckIsd0JBQXdCLEVBVnpCLHVCQUF1QjtRQUN2Qix3QkFBd0IsYUFUeEIsOEJBQThCO1FBQzlCLHFDQUFxQztRQUNyQyxrQ0FBa0M7UUFDbEMsd0NBQXdDO1FBQ3hDLHdDQUF3Qzt3SEFvQjVCLHlCQUF5QixZQVg1QjtZQUNSLFlBQVk7WUFDWixhQUFhO1lBQ2IsNEJBQTRCO1lBQzVCLHFCQUFxQjtZQUNyQix3QkFBd0I7WUFDeEIsS0FBSztTQUNMOzRGQUlXLHlCQUF5QjtrQkFackMsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixhQUFhO3dCQUNiLDRCQUE0Qjt3QkFDNUIscUJBQXFCO3dCQUNyQix3QkFBd0I7d0JBQ3hCLEtBQUs7cUJBQ0w7b0JBQ0QsWUFBWSxFQUFFLFlBQVk7b0JBQzFCLE9BQU8sRUFBRSxZQUFZO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnVHJpZ2dlckNvbXBvbmVudCB9IGZyb20gJy4vdHJpZ2dlci9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy10cmlnZ2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTb3J0Q29tcG9uZW50IH0gZnJvbSAnLi9tYWluL3NvcnQvc3RydWN0dXJlLmNvbHVtbi1jb25maWctc29ydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29sdW1uSGlkZUNvbXBvbmVudCB9IGZyb20gJy4vbWFpbi9oaWRlL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLWNvbHVtbi1oaWRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb2x1bW5Nb3ZlQ29tcG9uZW50IH0gZnJvbSAnLi9tYWluL21vdmUvc3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLW1vdmUuY29tcG9uZW50JztcbmltcG9ydCB7IGZhYnJpY0ltcG9ydHMgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUtZmFicmljLmltcG9ydHMnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWFuYWdlck1vZHVsZSB9IGZyb20gJy4uLy4uL2NvbHVtbi1tYW5hZ2VyL3N0cnVjdHVyZS5jb2x1bW4tbWFuYWdlci5tb2R1bGUnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVMaXN0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9zdHJ1Y3R1cmUvZmlsdGVyL3VuaXF1ZS91bmlxdWUtdmFsdWUtbGlzdC5tb2R1bGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9sMTBuL3RyYW5zbGF0aW9uLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZU1lbnVJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vaWNvbnMvbWVudS9zdHJ1Y3R1cmUubWVudS1pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBcnJvd0ljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9pY29ucy9hcnJvdy9zdHJ1Y3R1cmUuYXJyb3ctaWNvbi5tb2R1bGUnO1xuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXG5cdFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudCxcblx0U3RydWN0dXJlQ29sdW1uQ29uZmlnVHJpZ2dlckNvbXBvbmVudCxcblx0U3RydWN0dXJlQ29sdW1uQ29uZmlnU29ydENvbXBvbmVudCxcblx0U3RydWN0dXJlQ29sdW1uQ29uZmlnQ29sdW1uSGlkZUNvbXBvbmVudCxcblx0U3RydWN0dXJlQ29sdW1uQ29uZmlnQ29sdW1uTW92ZUNvbXBvbmVudFxuXTtcblxuY29uc3QgaWNvbnMgPSBbXG5cdFN0cnVjdHVyZU1lbnVJY29uTW9kdWxlLFxuXHRTdHJ1Y3R1cmVBcnJvd0ljb25Nb2R1bGVcbl07XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0ZmFicmljSW1wb3J0cyxcblx0XHRTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyTW9kdWxlLFxuXHRcdFVuaXF1ZVZhbHVlTGlzdE1vZHVsZSxcblx0XHRUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGUsXG5cdFx0aWNvbnNcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBkZWNsYXJhdGlvbnMsXG5cdGV4cG9ydHM6IGRlY2xhcmF0aW9uc1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5NZW51TW9kdWxlIHtcbn1cbiJdfQ==