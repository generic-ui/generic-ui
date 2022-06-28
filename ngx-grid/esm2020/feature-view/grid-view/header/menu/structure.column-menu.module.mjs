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
StructureColumnMenuModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StructureColumnMenuModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnMenuModule, declarations: [StructureColumnConfigComponent,
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
StructureColumnMenuModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnMenuModule, imports: [CommonModule,
        fabricImports,
        StructureColumnManagerModule,
        UniqueValueListModule,
        TranslationFeatureModule,
        icons] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureColumnMenuModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9oZWFkZXIvbWVudS9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzVGLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzVHLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ3JILE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ3JILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUM3RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUMzRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQzs7O0FBRTlHLE1BQU0sWUFBWSxHQUFHO0lBQ3BCLDhCQUE4QjtJQUM5QixxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLHdDQUF3QztJQUN4Qyx3Q0FBd0M7Q0FDeEMsQ0FBQztBQUVGLE1BQU0sS0FBSyxHQUFHO0lBQ2IsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtDQUN4QixDQUFDO0FBY0YsTUFBTSxPQUFPLHlCQUF5Qjs7c0hBQXpCLHlCQUF5Qjt1SEFBekIseUJBQXlCLGlCQXhCckMsOEJBQThCO1FBQzlCLHFDQUFxQztRQUNyQyxrQ0FBa0M7UUFDbEMsd0NBQXdDO1FBQ3hDLHdDQUF3QyxhQVV2QyxZQUFZLGtmQUVaLDRCQUE0QjtRQUM1QixxQkFBcUI7UUFDckIsd0JBQXdCLEVBVnpCLHVCQUF1QjtRQUN2Qix3QkFBd0IsYUFUeEIsOEJBQThCO1FBQzlCLHFDQUFxQztRQUNyQyxrQ0FBa0M7UUFDbEMsd0NBQXdDO1FBQ3hDLHdDQUF3Qzt1SEFvQjVCLHlCQUF5QixZQVZwQyxZQUFZO1FBQ1osYUFBYTtRQUNiLDRCQUE0QjtRQUM1QixxQkFBcUI7UUFDckIsd0JBQXdCO1FBQ3hCLEtBQUs7MkZBS00seUJBQXlCO2tCQVpyQyxRQUFRO21CQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsNEJBQTRCO3dCQUM1QixxQkFBcUI7d0JBQ3JCLHdCQUF3Qjt3QkFDeEIsS0FBSztxQkFDTDtvQkFDRCxZQUFZLEVBQUUsWUFBWTtvQkFDMUIsT0FBTyxFQUFFLFlBQVk7aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudCB9IGZyb20gJy4vY29uZmlnL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdUcmlnZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi90cmlnZ2VyL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLXRyaWdnZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NvcnRDb21wb25lbnQgfSBmcm9tICcuL21haW4vc29ydC9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1zb3J0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb2x1bW5IaWRlQ29tcG9uZW50IH0gZnJvbSAnLi9tYWluL2hpZGUvc3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLWhpZGUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbHVtbk1vdmVDb21wb25lbnQgfSBmcm9tICcuL21haW4vbW92ZS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1jb2x1bW4tbW92ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgZmFicmljSW1wb3J0cyB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS1mYWJyaWMuaW1wb3J0cyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29sdW1uLW1hbmFnZXIvc3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZUxpc3RNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9maWx0ZXIvdW5pcXVlL3VuaXF1ZS12YWx1ZS1saXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL2wxMG4vdHJhbnNsYXRpb24uZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlTWVudUljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9pY29ucy9tZW51L3N0cnVjdHVyZS5tZW51LWljb24ubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUFycm93SWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2ljb25zL2Fycm93L3N0cnVjdHVyZS5hcnJvdy1pY29uLm1vZHVsZSc7XG5cbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcblx0U3RydWN0dXJlQ29sdW1uQ29uZmlnQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb2x1bW5Db25maWdUcmlnZ2VyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb2x1bW5Db25maWdTb3J0Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb2x1bW5IaWRlQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb2x1bW5Nb3ZlQ29tcG9uZW50XG5dO1xuXG5jb25zdCBpY29ucyA9IFtcblx0U3RydWN0dXJlTWVudUljb25Nb2R1bGUsXG5cdFN0cnVjdHVyZUFycm93SWNvbk1vZHVsZVxuXTtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRmYWJyaWNJbXBvcnRzLFxuXHRcdFN0cnVjdHVyZUNvbHVtbk1hbmFnZXJNb2R1bGUsXG5cdFx0VW5pcXVlVmFsdWVMaXN0TW9kdWxlLFxuXHRcdFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZSxcblx0XHRpY29uc1xuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IGRlY2xhcmF0aW9ucyxcblx0ZXhwb3J0czogZGVjbGFyYXRpb25zXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbk1lbnVNb2R1bGUge1xufVxuIl19