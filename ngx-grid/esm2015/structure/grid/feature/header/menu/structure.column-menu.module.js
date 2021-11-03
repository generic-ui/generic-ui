import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureColumnConfigComponent } from './config/structure.column-config.component';
import { StructureColumnConfigTriggerComponent } from './trigger/structure.column-config-trigger.component';
import { StructureColumnConfigSortComponent } from './main/sort/structure.column-config-sort.component';
import { StructureColumnConfigColumnHideComponent } from './main/hide/structure.column-config-column-hide.component';
import { StructureColumnConfigColumnMoveComponent } from './main/move/structure.column-config-column-move.component';
import { fabricImports } from '../../structure-fabric.imports';
import { StructureColumnManagerModule } from '../../column-manager/structure.column-manager.module';
import { StructureColumnMenuIconComponent } from './icon/structure.column-menu-icon.component';
import { StructureColumnMenuArrowIconComponent } from './icon/structure.column-menu-arrow-icon.component';
import { UniqueValueListModule } from '../../../../filter/feature/unique/unique-value-list.module';
import { TranslationFeatureModule } from '../../../../../l10n/feature/translation.feature-module';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
const declarations = [
    StructureColumnConfigComponent,
    StructureColumnConfigTriggerComponent,
    StructureColumnConfigSortComponent,
    StructureColumnConfigColumnHideComponent,
    StructureColumnConfigColumnMoveComponent,
    StructureColumnMenuIconComponent,
    StructureColumnMenuArrowIconComponent
];
export class StructureColumnMenuModule {
}
StructureColumnMenuModule.ɵfac = function StructureColumnMenuModule_Factory(t) { return new (t || StructureColumnMenuModule)(); };
StructureColumnMenuModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: StructureColumnMenuModule });
StructureColumnMenuModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            fabricImports,
            StructureColumnManagerModule,
            UniqueValueListModule,
            TranslationFeatureModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureColumnMenuModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    fabricImports,
                    StructureColumnManagerModule,
                    UniqueValueListModule,
                    TranslationFeatureModule
                ],
                declarations: declarations,
                exports: declarations
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(StructureColumnMenuModule, { declarations: [StructureColumnConfigComponent,
        StructureColumnConfigTriggerComponent,
        StructureColumnConfigSortComponent,
        StructureColumnConfigColumnHideComponent,
        StructureColumnConfigColumnMoveComponent,
        StructureColumnMenuIconComponent,
        StructureColumnMenuArrowIconComponent], imports: [CommonModule, i1.FabricBadgeModule, i1.FabricButtonModule, i1.FabricButtonGroupModule, i1.FabricCheckboxModule, i1.FabricChipModule, i1.FabricDrawerModule, i1.FabricDropdownModule, i1.FabricRadioButtonModule, i1.FabricRadioGroupModule, i1.FabricProgressBarModule, i1.FabricProgressSpinnerModule, i1.FabricSelectModule, i1.FabricSpinnerModule, i1.FabricTabModule, i1.FabricTooltipModule, i1.FabricToggleButtonModule, i1.FabricInputModule, i1.FabricDialogModule, i1.FabricInlineDialogModule, i1.FabricTabModule, StructureColumnManagerModule,
        UniqueValueListModule,
        TranslationFeatureModule], exports: [StructureColumnConfigComponent,
        StructureColumnConfigTriggerComponent,
        StructureColumnConfigSortComponent,
        StructureColumnConfigColumnHideComponent,
        StructureColumnConfigColumnMoveComponent,
        StructureColumnMenuIconComponent,
        StructureColumnMenuArrowIconComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL2dyaWQvZmVhdHVyZS9oZWFkZXIvbWVudS9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzVGLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzVHLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ3JILE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ3JILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMxRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQzs7O0FBRWxHLE1BQU0sWUFBWSxHQUFHO0lBQ3BCLDhCQUE4QjtJQUM5QixxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLHdDQUF3QztJQUN4Qyx3Q0FBd0M7SUFDeEMsZ0NBQWdDO0lBQ2hDLHFDQUFxQztDQUNyQyxDQUFDO0FBYUYsTUFBTSxPQUFPLHlCQUF5Qjs7a0dBQXpCLHlCQUF5QjsyRUFBekIseUJBQXlCOytFQVY1QjtZQUNSLFlBQVk7WUFDWixhQUFhO1lBQ2IsNEJBQTRCO1lBQzVCLHFCQUFxQjtZQUNyQix3QkFBd0I7U0FDeEI7dUZBSVcseUJBQXlCO2NBWHJDLFFBQVE7ZUFBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixhQUFhO29CQUNiLDRCQUE0QjtvQkFDNUIscUJBQXFCO29CQUNyQix3QkFBd0I7aUJBQ3hCO2dCQUNELFlBQVksRUFBRSxZQUFZO2dCQUMxQixPQUFPLEVBQUUsWUFBWTthQUNyQjs7d0ZBQ1kseUJBQXlCLG1CQXBCckMsOEJBQThCO1FBQzlCLHFDQUFxQztRQUNyQyxrQ0FBa0M7UUFDbEMsd0NBQXdDO1FBQ3hDLHdDQUF3QztRQUN4QyxnQ0FBZ0M7UUFDaEMscUNBQXFDLGFBS3BDLFlBQVksa2ZBRVosNEJBQTRCO1FBQzVCLHFCQUFxQjtRQUNyQix3QkFBd0IsYUFmekIsOEJBQThCO1FBQzlCLHFDQUFxQztRQUNyQyxrQ0FBa0M7UUFDbEMsd0NBQXdDO1FBQ3hDLHdDQUF3QztRQUN4QyxnQ0FBZ0M7UUFDaEMscUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudCB9IGZyb20gJy4vY29uZmlnL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdUcmlnZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi90cmlnZ2VyL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLXRyaWdnZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NvcnRDb21wb25lbnQgfSBmcm9tICcuL21haW4vc29ydC9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1zb3J0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb2x1bW5IaWRlQ29tcG9uZW50IH0gZnJvbSAnLi9tYWluL2hpZGUvc3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLWhpZGUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbHVtbk1vdmVDb21wb25lbnQgfSBmcm9tICcuL21haW4vbW92ZS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1jb2x1bW4tbW92ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgZmFicmljSW1wb3J0cyB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS1mYWJyaWMuaW1wb3J0cyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29sdW1uLW1hbmFnZXIvc3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NZW51SWNvbkNvbXBvbmVudCB9IGZyb20gJy4vaWNvbi9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWVudUFycm93SWNvbkNvbXBvbmVudCB9IGZyb20gJy4vaWNvbi9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtYXJyb3ctaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVMaXN0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmlsdGVyL2ZlYXR1cmUvdW5pcXVlL3VuaXF1ZS12YWx1ZS1saXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9sMTBuL2ZlYXR1cmUvdHJhbnNsYXRpb24uZmVhdHVyZS1tb2R1bGUnO1xuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXG5cdFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudCxcblx0U3RydWN0dXJlQ29sdW1uQ29uZmlnVHJpZ2dlckNvbXBvbmVudCxcblx0U3RydWN0dXJlQ29sdW1uQ29uZmlnU29ydENvbXBvbmVudCxcblx0U3RydWN0dXJlQ29sdW1uQ29uZmlnQ29sdW1uSGlkZUNvbXBvbmVudCxcblx0U3RydWN0dXJlQ29sdW1uQ29uZmlnQ29sdW1uTW92ZUNvbXBvbmVudCxcblx0U3RydWN0dXJlQ29sdW1uTWVudUljb25Db21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbHVtbk1lbnVBcnJvd0ljb25Db21wb25lbnRcbl07XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0ZmFicmljSW1wb3J0cyxcblx0XHRTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyTW9kdWxlLFxuXHRcdFVuaXF1ZVZhbHVlTGlzdE1vZHVsZSxcblx0XHRUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBkZWNsYXJhdGlvbnMsXG5cdGV4cG9ydHM6IGRlY2xhcmF0aW9uc1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5NZW51TW9kdWxlIHtcbn1cbiJdfQ==