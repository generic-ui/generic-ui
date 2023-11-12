import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureSchemaMangerComponent } from './structure.schema-manger.component';
import { StructureDialogSchemaManagerComponent } from './dialog/structure.dialog-schema-manager.component';
import { StructureDialogSchemaManagerService } from './dialog/structure.dialog-schema-manager.service';
import { fabricImports } from '../../../../feature-view/grid-view/src/structure-fabric.imports';
import { StructureSchemaManagerIconComponent } from './manager-icon/structure.schema-manager-icon.component';
import { TranslationFeatureModule } from '../../../l10n/src/translation.feature-module';
import { GuiTemplateModule } from '../../../gui-angular/template/gui.template.module';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
export class SchemaManagerModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SchemaManagerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.2", ngImport: i0, type: SchemaManagerModule, declarations: [StructureSchemaMangerComponent,
            StructureDialogSchemaManagerComponent,
            StructureSchemaManagerIconComponent], imports: [CommonModule, i1.FabricBadgeModule, i1.FabricButtonModule, i1.FabricButtonGroupModule, i1.FabricCheckboxModule, i1.FabricChipModule, i1.FabricDrawerModule, i1.FabricDropdownModule, i1.FabricRadioButtonModule, i1.FabricRadioGroupModule, i1.FabricProgressBarModule, i1.FabricProgressSpinnerModule, i1.FabricSelectModule, i1.FabricSpinnerModule, i1.FabricTabModule, i1.FabricTooltipModule, i1.FabricToggleButtonModule, i1.FabricInputModule, i1.FabricDialogModule, i1.FabricInlineDialogModule, i1.FabricTabModule, TranslationFeatureModule,
            GuiTemplateModule], exports: [StructureSchemaManagerIconComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SchemaManagerModule, providers: [
            StructureDialogSchemaManagerService
        ], imports: [CommonModule,
            fabricImports,
            TranslationFeatureModule,
            GuiTemplateModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SchemaManagerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        fabricImports,
                        TranslationFeatureModule,
                        GuiTemplateModule
                    ],
                    declarations: [
                        StructureSchemaMangerComponent,
                        StructureDialogSchemaManagerComponent,
                        StructureSchemaManagerIconComponent
                    ],
                    exports: [
                        StructureSchemaManagerIconComponent
                    ],
                    providers: [
                        StructureDialogSchemaManagerService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLW1hbmFnZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3NjaGVtYS9zcmMvbWFuYWdlci9zY2hlbWEtbWFuYWdlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDckYsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0csT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDdkcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzdHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDOzs7QUFxQnRGLE1BQU0sT0FBTyxtQkFBbUI7dUdBQW5CLG1CQUFtQjt3R0FBbkIsbUJBQW1CLGlCQVg5Qiw4QkFBOEI7WUFDOUIscUNBQXFDO1lBQ3JDLG1DQUFtQyxhQVJuQyxZQUFZLGtmQUVaLHdCQUF3QjtZQUN4QixpQkFBaUIsYUFRakIsbUNBQW1DO3dHQU14QixtQkFBbUIsYUFKcEI7WUFDVixtQ0FBbUM7U0FDbkMsWUFmQSxZQUFZO1lBQ1osYUFBYTtZQUNiLHdCQUF3QjtZQUN4QixpQkFBaUI7OzJGQWNOLG1CQUFtQjtrQkFuQi9CLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osYUFBYTt3QkFDYix3QkFBd0I7d0JBQ3hCLGlCQUFpQjtxQkFDakI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLDhCQUE4Qjt3QkFDOUIscUNBQXFDO3dCQUNyQyxtQ0FBbUM7cUJBQ25DO29CQUNELE9BQU8sRUFBRTt3QkFDUixtQ0FBbUM7cUJBQ25DO29CQUNELFNBQVMsRUFBRTt3QkFDVixtQ0FBbUM7cUJBQ25DO2lCQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVNjaGVtYU1hbmdlckNvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlLnNjaGVtYS1tYW5nZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZURpYWxvZ1NjaGVtYU1hbmFnZXJDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy9zdHJ1Y3R1cmUuZGlhbG9nLXNjaGVtYS1tYW5hZ2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEaWFsb2dTY2hlbWFNYW5hZ2VyU2VydmljZSB9IGZyb20gJy4vZGlhbG9nL3N0cnVjdHVyZS5kaWFsb2ctc2NoZW1hLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBmYWJyaWNJbXBvcnRzIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvc3RydWN0dXJlLWZhYnJpYy5pbXBvcnRzJztcbmltcG9ydCB7IFN0cnVjdHVyZVNjaGVtYU1hbmFnZXJJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9tYW5hZ2VyLWljb24vc3RydWN0dXJlLnNjaGVtYS1tYW5hZ2VyLWljb24uY29tcG9uZW50JztcbmltcG9ydCB7IFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2wxMG4vc3JjL3RyYW5zbGF0aW9uLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IEd1aVRlbXBsYXRlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZ3VpLWFuZ3VsYXIvdGVtcGxhdGUvZ3VpLnRlbXBsYXRlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0ZmFicmljSW1wb3J0cyxcblx0XHRUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGUsXG5cdFx0R3VpVGVtcGxhdGVNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0U3RydWN0dXJlU2NoZW1hTWFuZ2VyQ29tcG9uZW50LFxuXHRcdFN0cnVjdHVyZURpYWxvZ1NjaGVtYU1hbmFnZXJDb21wb25lbnQsXG5cdFx0U3RydWN0dXJlU2NoZW1hTWFuYWdlckljb25Db21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdFN0cnVjdHVyZVNjaGVtYU1hbmFnZXJJY29uQ29tcG9uZW50XG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFN0cnVjdHVyZURpYWxvZ1NjaGVtYU1hbmFnZXJTZXJ2aWNlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU2NoZW1hTWFuYWdlck1vZHVsZSB7XG5cbn1cbiJdfQ==