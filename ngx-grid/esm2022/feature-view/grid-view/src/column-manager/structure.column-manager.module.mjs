import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureColumnManagerComponent } from './manager/structure.column-manager.component';
import { fabricImports } from '../structure-fabric.imports';
import { StructureDialogColumnManagerService } from './dialog/structure.dialog-column-manager.service';
import { StructureDialogColumnManagerComponent } from './dialog/structure.dialog-column-manager.component';
import { StructureMenuColumnManagerComponent } from './menu/structure.menu-column-manager.component';
import { StructureColumnManagerIconComponent } from './icon/structure.column-manager-icon.component';
import { TranslationFeatureModule } from '../../../../feature/l10n/src/translation.feature-module';
import { GuiTemplateModule } from '../../../../feature/gui-angular/template/gui.template.module';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
const declarations = [
    StructureColumnManagerComponent,
    StructureDialogColumnManagerComponent,
    StructureMenuColumnManagerComponent,
    StructureColumnManagerIconComponent
];
export class StructureColumnManagerModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureColumnManagerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: StructureColumnManagerModule, declarations: [StructureColumnManagerComponent,
            StructureDialogColumnManagerComponent,
            StructureMenuColumnManagerComponent,
            StructureColumnManagerIconComponent], imports: [CommonModule, i1.FabricBadgeModule, i1.FabricButtonModule, i1.FabricButtonGroupModule, i1.FabricCheckboxModule, i1.FabricChipModule, i1.FabricDrawerModule, i1.FabricDropdownModule, i1.FabricRadioButtonModule, i1.FabricRadioGroupModule, i1.FabricProgressBarModule, i1.FabricProgressSpinnerModule, i1.FabricSelectModule, i1.FabricSpinnerModule, i1.FabricTabModule, i1.FabricTooltipModule, i1.FabricToggleButtonModule, i1.FabricInputModule, i1.FabricDialogModule, i1.FabricInlineDialogModule, i1.FabricTabModule, GuiTemplateModule,
            TranslationFeatureModule], exports: [StructureColumnManagerComponent,
            StructureDialogColumnManagerComponent,
            StructureMenuColumnManagerComponent,
            StructureColumnManagerIconComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureColumnManagerModule, providers: [
            StructureDialogColumnManagerService
        ], imports: [CommonModule,
            fabricImports,
            GuiTemplateModule,
            TranslationFeatureModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: StructureColumnManagerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        fabricImports,
                        GuiTemplateModule,
                        TranslationFeatureModule
                    ],
                    declarations: declarations,
                    exports: declarations,
                    providers: [
                        StructureDialogColumnManagerService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvY29sdW1uLW1hbmFnZXIvc3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUMvRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDdkcsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0csT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDckcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDckcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDbkcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOERBQThELENBQUM7OztBQUdqRyxNQUFNLFlBQVksR0FBRztJQUNwQiwrQkFBK0I7SUFDL0IscUNBQXFDO0lBQ3JDLG1DQUFtQztJQUNuQyxtQ0FBbUM7Q0FDbkMsQ0FBQztBQWVGLE1BQU0sT0FBTyw0QkFBNEI7d0dBQTVCLDRCQUE0Qjt5R0FBNUIsNEJBQTRCLGlCQW5CeEMsK0JBQStCO1lBQy9CLHFDQUFxQztZQUNyQyxtQ0FBbUM7WUFDbkMsbUNBQW1DLGFBS2xDLFlBQVksa2ZBRVosaUJBQWlCO1lBQ2pCLHdCQUF3QixhQVh6QiwrQkFBK0I7WUFDL0IscUNBQXFDO1lBQ3JDLG1DQUFtQztZQUNuQyxtQ0FBbUM7eUdBZ0J2Qiw0QkFBNEIsYUFKN0I7WUFDVixtQ0FBbUM7U0FDbkMsWUFUQSxZQUFZO1lBQ1osYUFBYTtZQUNiLGlCQUFpQjtZQUNqQix3QkFBd0I7OzRGQVFiLDRCQUE0QjtrQkFieEMsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsd0JBQXdCO3FCQUN4QjtvQkFDRCxZQUFZLEVBQUUsWUFBWTtvQkFDMUIsT0FBTyxFQUFFLFlBQVk7b0JBQ3JCLFNBQVMsRUFBRTt3QkFDVixtQ0FBbUM7cUJBQ25DO2lCQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1hbmFnZXJDb21wb25lbnQgfSBmcm9tICcuL21hbmFnZXIvc3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBmYWJyaWNJbXBvcnRzIH0gZnJvbSAnLi4vc3RydWN0dXJlLWZhYnJpYy5pbXBvcnRzJztcbmltcG9ydCB7IFN0cnVjdHVyZURpYWxvZ0NvbHVtbk1hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi9kaWFsb2cvc3RydWN0dXJlLmRpYWxvZy1jb2x1bW4tbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZURpYWxvZ0NvbHVtbk1hbmFnZXJDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy9zdHJ1Y3R1cmUuZGlhbG9nLWNvbHVtbi1tYW5hZ2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVNZW51Q29sdW1uTWFuYWdlckNvbXBvbmVudCB9IGZyb20gJy4vbWVudS9zdHJ1Y3R1cmUubWVudS1jb2x1bW4tbWFuYWdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWFuYWdlckljb25Db21wb25lbnQgfSBmcm9tICcuL2ljb24vc3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLWljb24uY29tcG9uZW50JztcbmltcG9ydCB7IFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmUvbDEwbi9zcmMvdHJhbnNsYXRpb24uZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgR3VpVGVtcGxhdGVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL2d1aS1hbmd1bGFyL3RlbXBsYXRlL2d1aS50ZW1wbGF0ZS5tb2R1bGUnO1xuXG5cbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcblx0U3RydWN0dXJlQ29sdW1uTWFuYWdlckNvbXBvbmVudCxcblx0U3RydWN0dXJlRGlhbG9nQ29sdW1uTWFuYWdlckNvbXBvbmVudCxcblx0U3RydWN0dXJlTWVudUNvbHVtbk1hbmFnZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbHVtbk1hbmFnZXJJY29uQ29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdGZhYnJpY0ltcG9ydHMsXG5cdFx0R3VpVGVtcGxhdGVNb2R1bGUsXG5cdFx0VHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogZGVjbGFyYXRpb25zLFxuXHRleHBvcnRzOiBkZWNsYXJhdGlvbnMsXG5cdHByb3ZpZGVyczogW1xuXHRcdFN0cnVjdHVyZURpYWxvZ0NvbHVtbk1hbmFnZXJTZXJ2aWNlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uTWFuYWdlck1vZHVsZSB7XG59XG4iXX0=