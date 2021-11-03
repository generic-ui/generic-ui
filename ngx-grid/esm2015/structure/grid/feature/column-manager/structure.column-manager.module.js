import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureColumnManagerComponent } from './structure.column-manager.component';
import { fabricImports } from '../structure-fabric.imports';
import { StructureDialogColumnManagerService } from './dialog/structure.dialog-column-manager.service';
import { StructureDialogColumnManagerComponent } from './dialog/structure.dialog-column-manager.component';
import { StructureMenuColumnManagerComponent } from './menu/structure.menu-column-manager.component';
import { StructureColumnManagerIconComponent } from './icon/structure.column-manager-icon.component';
import { TranslationFeatureModule } from '../../../../l10n/feature/translation.feature-module';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
const declarations = [
    StructureColumnManagerComponent,
    StructureDialogColumnManagerComponent,
    StructureMenuColumnManagerComponent,
    StructureColumnManagerIconComponent
];
export class StructureColumnManagerModule {
}
StructureColumnManagerModule.ɵfac = function StructureColumnManagerModule_Factory(t) { return new (t || StructureColumnManagerModule)(); };
StructureColumnManagerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: StructureColumnManagerModule });
StructureColumnManagerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        StructureDialogColumnManagerService
    ], imports: [[
            CommonModule,
            fabricImports,
            TranslationFeatureModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureColumnManagerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    fabricImports,
                    TranslationFeatureModule
                ],
                declarations: declarations,
                exports: declarations,
                entryComponents: [
                    StructureColumnManagerComponent,
                    StructureDialogColumnManagerComponent,
                    StructureMenuColumnManagerComponent
                ],
                providers: [
                    StructureDialogColumnManagerService
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(StructureColumnManagerModule, { declarations: [StructureColumnManagerComponent,
        StructureDialogColumnManagerComponent,
        StructureMenuColumnManagerComponent,
        StructureColumnManagerIconComponent], imports: [CommonModule, i1.FabricBadgeModule, i1.FabricButtonModule, i1.FabricButtonGroupModule, i1.FabricCheckboxModule, i1.FabricChipModule, i1.FabricDrawerModule, i1.FabricDropdownModule, i1.FabricRadioButtonModule, i1.FabricRadioGroupModule, i1.FabricProgressBarModule, i1.FabricProgressSpinnerModule, i1.FabricSelectModule, i1.FabricSpinnerModule, i1.FabricTabModule, i1.FabricTooltipModule, i1.FabricToggleButtonModule, i1.FabricInputModule, i1.FabricDialogModule, i1.FabricInlineDialogModule, i1.FabricTabModule, TranslationFeatureModule], exports: [StructureColumnManagerComponent,
        StructureDialogColumnManagerComponent,
        StructureMenuColumnManagerComponent,
        StructureColumnManagerIconComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL2dyaWQvZmVhdHVyZS9jb2x1bW4tbWFuYWdlci9zdHJ1Y3R1cmUuY29sdW1uLW1hbmFnZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN2RyxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7O0FBRy9GLE1BQU0sWUFBWSxHQUFHO0lBQ3BCLCtCQUErQjtJQUMvQixxQ0FBcUM7SUFDckMsbUNBQW1DO0lBQ25DLG1DQUFtQztDQUNuQyxDQUFDO0FBbUJGLE1BQU0sT0FBTyw0QkFBNEI7O3dHQUE1Qiw0QkFBNEI7OEVBQTVCLDRCQUE0QjttRkFKN0I7UUFDVixtQ0FBbUM7S0FDbkMsWUFkUTtZQUNSLFlBQVk7WUFDWixhQUFhO1lBQ2Isd0JBQXdCO1NBQ3hCO3VGQVlXLDRCQUE0QjtjQWpCeEMsUUFBUTtlQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLGFBQWE7b0JBQ2Isd0JBQXdCO2lCQUN4QjtnQkFDRCxZQUFZLEVBQUUsWUFBWTtnQkFDMUIsT0FBTyxFQUFFLFlBQVk7Z0JBQ3JCLGVBQWUsRUFBRTtvQkFDaEIsK0JBQStCO29CQUMvQixxQ0FBcUM7b0JBQ3JDLG1DQUFtQztpQkFDbkM7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLG1DQUFtQztpQkFDbkM7YUFDRDs7d0ZBQ1ksNEJBQTRCLG1CQXZCeEMsK0JBQStCO1FBQy9CLHFDQUFxQztRQUNyQyxtQ0FBbUM7UUFDbkMsbUNBQW1DLGFBS2xDLFlBQVksa2ZBRVosd0JBQXdCLGFBVnpCLCtCQUErQjtRQUMvQixxQ0FBcUM7UUFDckMsbUNBQW1DO1FBQ25DLG1DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuY29sdW1uLW1hbmFnZXIuY29tcG9uZW50JztcbmltcG9ydCB7IGZhYnJpY0ltcG9ydHMgfSBmcm9tICcuLi9zdHJ1Y3R1cmUtZmFicmljLmltcG9ydHMnO1xuaW1wb3J0IHsgU3RydWN0dXJlRGlhbG9nQ29sdW1uTWFuYWdlclNlcnZpY2UgfSBmcm9tICcuL2RpYWxvZy9zdHJ1Y3R1cmUuZGlhbG9nLWNvbHVtbi1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlRGlhbG9nQ29sdW1uTWFuYWdlckNvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nL3N0cnVjdHVyZS5kaWFsb2ctY29sdW1uLW1hbmFnZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZU1lbnVDb2x1bW5NYW5hZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9tZW51L3N0cnVjdHVyZS5tZW51LWNvbHVtbi1tYW5hZ2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VySWNvbkNvbXBvbmVudCB9IGZyb20gJy4vaWNvbi9zdHJ1Y3R1cmUuY29sdW1uLW1hbmFnZXItaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbDEwbi9mZWF0dXJlL3RyYW5zbGF0aW9uLmZlYXR1cmUtbW9kdWxlJztcblxuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXG5cdFN0cnVjdHVyZUNvbHVtbk1hbmFnZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZURpYWxvZ0NvbHVtbk1hbmFnZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZU1lbnVDb2x1bW5NYW5hZ2VyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VySWNvbkNvbXBvbmVudFxuXTtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRmYWJyaWNJbXBvcnRzLFxuXHRcdFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IGRlY2xhcmF0aW9ucyxcblx0ZXhwb3J0czogZGVjbGFyYXRpb25zLFxuXHRlbnRyeUNvbXBvbmVudHM6IFtcblx0XHRTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyQ29tcG9uZW50LFxuXHRcdFN0cnVjdHVyZURpYWxvZ0NvbHVtbk1hbmFnZXJDb21wb25lbnQsXG5cdFx0U3RydWN0dXJlTWVudUNvbHVtbk1hbmFnZXJDb21wb25lbnRcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U3RydWN0dXJlRGlhbG9nQ29sdW1uTWFuYWdlclNlcnZpY2Vcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyTW9kdWxlIHtcbn1cbiJdfQ==