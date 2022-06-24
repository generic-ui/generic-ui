import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureSchemaMangerComponent } from './structure.schema-manger.component';
import { StructureDialogSchemaManagerComponent } from './dialog/structure.dialog-schema-manager.component';
import { StructureDialogSchemaManagerService } from './dialog/structure.dialog-schema-manager.service';
import { fabricImports } from '../../../feature-view/grid-view/structure-fabric.imports';
import { StructureSchemaManagerIconComponent } from './manager-icon/structure.schema-manager-icon.component';
import { TranslationFeatureModule } from '../../l10n/translation.feature-module';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
export class SchemaManagerModule {
}
SchemaManagerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SchemaManagerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SchemaManagerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SchemaManagerModule, declarations: [StructureSchemaMangerComponent,
        StructureDialogSchemaManagerComponent,
        StructureSchemaManagerIconComponent], imports: [CommonModule, i1.FabricBadgeModule, i1.FabricButtonModule, i1.FabricButtonGroupModule, i1.FabricCheckboxModule, i1.FabricChipModule, i1.FabricDrawerModule, i1.FabricDropdownModule, i1.FabricRadioButtonModule, i1.FabricRadioGroupModule, i1.FabricProgressBarModule, i1.FabricProgressSpinnerModule, i1.FabricSelectModule, i1.FabricSpinnerModule, i1.FabricTabModule, i1.FabricTooltipModule, i1.FabricToggleButtonModule, i1.FabricInputModule, i1.FabricDialogModule, i1.FabricInlineDialogModule, i1.FabricTabModule, TranslationFeatureModule], exports: [StructureSchemaManagerIconComponent] });
SchemaManagerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SchemaManagerModule, providers: [
        StructureDialogSchemaManagerService
    ], imports: [[
            CommonModule,
            fabricImports,
            TranslationFeatureModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SchemaManagerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        fabricImports,
                        TranslationFeatureModule
                    ],
                    declarations: [
                        StructureSchemaMangerComponent,
                        StructureDialogSchemaManagerComponent,
                        StructureSchemaManagerIconComponent
                    ],
                    exports: [
                        StructureSchemaManagerIconComponent
                    ],
                    entryComponents: [
                        StructureDialogSchemaManagerComponent,
                        StructureSchemaMangerComponent
                    ],
                    providers: [
                        StructureDialogSchemaManagerService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLW1hbmFnZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3NjaGVtYS9tYW5hZ2VyL3NjaGVtYS1tYW5hZ2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN2RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDekYsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDN0csT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7OztBQXdCakYsTUFBTSxPQUFPLG1CQUFtQjs7aUhBQW5CLG1CQUFtQjtrSEFBbkIsbUJBQW1CLGlCQWY5Qiw4QkFBOEI7UUFDOUIscUNBQXFDO1FBQ3JDLG1DQUFtQyxhQVBuQyxZQUFZLGtmQUVaLHdCQUF3QixhQVF4QixtQ0FBbUM7a0hBVXhCLG1CQUFtQixhQUpwQjtRQUNWLG1DQUFtQztLQUNuQyxZQW5CUTtZQUNSLFlBQVk7WUFDWixhQUFhO1lBQ2Isd0JBQXdCO1NBQ3hCOzRGQWlCVyxtQkFBbUI7a0JBdEIvQixRQUFRO21CQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLGFBQWE7d0JBQ2Isd0JBQXdCO3FCQUN4QjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2IsOEJBQThCO3dCQUM5QixxQ0FBcUM7d0JBQ3JDLG1DQUFtQztxQkFDbkM7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLG1DQUFtQztxQkFDbkM7b0JBQ0QsZUFBZSxFQUFFO3dCQUNoQixxQ0FBcUM7d0JBQ3JDLDhCQUE4QjtxQkFDOUI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLG1DQUFtQztxQkFDbkM7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgU3RydWN0dXJlU2NoZW1hTWFuZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc2NoZW1hLW1hbmdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRGlhbG9nU2NoZW1hTWFuYWdlckNvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nL3N0cnVjdHVyZS5kaWFsb2ctc2NoZW1hLW1hbmFnZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZURpYWxvZ1NjaGVtYU1hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi9kaWFsb2cvc3RydWN0dXJlLmRpYWxvZy1zY2hlbWEtbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7IGZhYnJpY0ltcG9ydHMgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3N0cnVjdHVyZS1mYWJyaWMuaW1wb3J0cyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTY2hlbWFNYW5hZ2VySWNvbkNvbXBvbmVudCB9IGZyb20gJy4vbWFuYWdlci1pY29uL3N0cnVjdHVyZS5zY2hlbWEtbWFuYWdlci1pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi9sMTBuL3RyYW5zbGF0aW9uLmZlYXR1cmUtbW9kdWxlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRmYWJyaWNJbXBvcnRzLFxuXHRcdFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRTdHJ1Y3R1cmVTY2hlbWFNYW5nZXJDb21wb25lbnQsXG5cdFx0U3RydWN0dXJlRGlhbG9nU2NoZW1hTWFuYWdlckNvbXBvbmVudCxcblx0XHRTdHJ1Y3R1cmVTY2hlbWFNYW5hZ2VySWNvbkNvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0U3RydWN0dXJlU2NoZW1hTWFuYWdlckljb25Db21wb25lbnRcblx0XSxcblx0ZW50cnlDb21wb25lbnRzOiBbXG5cdFx0U3RydWN0dXJlRGlhbG9nU2NoZW1hTWFuYWdlckNvbXBvbmVudCxcblx0XHRTdHJ1Y3R1cmVTY2hlbWFNYW5nZXJDb21wb25lbnRcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U3RydWN0dXJlRGlhbG9nU2NoZW1hTWFuYWdlclNlcnZpY2Vcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTY2hlbWFNYW5hZ2VyTW9kdWxlIHtcblxufVxuIl19