import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureSchemaMangerComponent } from './structure.schema-manger.component';
import { StructureDialogSchemaManagerComponent } from './dialog/structure.dialog-schema-manager.component';
import { StructureDialogSchemaManagerService } from './dialog/structure.dialog-schema-manager.service';
import { fabricImports } from '../../../structure/grid/feature/structure-fabric.imports';
import { StructureSchemaManagerIconComponent } from './manager-icon/structure.schema-manager-icon.component';
import { TranslationFeatureModule } from '../../../l10n/feature/translation.feature-module';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
export class SchemaManagerModule {
}
SchemaManagerModule.ɵfac = function SchemaManagerModule_Factory(t) { return new (t || SchemaManagerModule)(); };
SchemaManagerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SchemaManagerModule });
SchemaManagerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        StructureDialogSchemaManagerService
    ], imports: [[
            CommonModule,
            fabricImports,
            TranslationFeatureModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SchemaManagerModule, [{
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
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SchemaManagerModule, { declarations: [StructureSchemaMangerComponent,
        StructureDialogSchemaManagerComponent,
        StructureSchemaManagerIconComponent], imports: [CommonModule, i1.FabricBadgeModule, i1.FabricButtonModule, i1.FabricButtonGroupModule, i1.FabricCheckboxModule, i1.FabricChipModule, i1.FabricDrawerModule, i1.FabricDropdownModule, i1.FabricRadioButtonModule, i1.FabricRadioGroupModule, i1.FabricProgressBarModule, i1.FabricProgressSpinnerModule, i1.FabricSelectModule, i1.FabricSpinnerModule, i1.FabricTabModule, i1.FabricTooltipModule, i1.FabricToggleButtonModule, i1.FabricInputModule, i1.FabricDialogModule, i1.FabricInlineDialogModule, i1.FabricTabModule, TranslationFeatureModule], exports: [StructureSchemaManagerIconComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLW1hbmFnZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zY2hlbWEvZmVhdHVyZS9tYW5hZ2VyL3NjaGVtYS1tYW5hZ2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN2RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDekYsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDN0csT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0RBQWtELENBQUM7OztBQXdCNUYsTUFBTSxPQUFPLG1CQUFtQjs7c0ZBQW5CLG1CQUFtQjtxRUFBbkIsbUJBQW1COzBFQUpwQjtRQUNWLG1DQUFtQztLQUNuQyxZQW5CUTtZQUNSLFlBQVk7WUFDWixhQUFhO1lBQ2Isd0JBQXdCO1NBQ3hCO3VGQWlCVyxtQkFBbUI7Y0F0Qi9CLFFBQVE7ZUFBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixhQUFhO29CQUNiLHdCQUF3QjtpQkFDeEI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLDhCQUE4QjtvQkFDOUIscUNBQXFDO29CQUNyQyxtQ0FBbUM7aUJBQ25DO2dCQUNELE9BQU8sRUFBRTtvQkFDUixtQ0FBbUM7aUJBQ25DO2dCQUNELGVBQWUsRUFBRTtvQkFDaEIscUNBQXFDO29CQUNyQyw4QkFBOEI7aUJBQzlCO2dCQUNELFNBQVMsRUFBRTtvQkFDVixtQ0FBbUM7aUJBQ25DO2FBQ0Q7O3dGQUNZLG1CQUFtQixtQkFmOUIsOEJBQThCO1FBQzlCLHFDQUFxQztRQUNyQyxtQ0FBbUMsYUFQbkMsWUFBWSxrZkFFWix3QkFBd0IsYUFReEIsbUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVNjaGVtYU1hbmdlckNvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlLnNjaGVtYS1tYW5nZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZURpYWxvZ1NjaGVtYU1hbmFnZXJDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy9zdHJ1Y3R1cmUuZGlhbG9nLXNjaGVtYS1tYW5hZ2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEaWFsb2dTY2hlbWFNYW5hZ2VyU2VydmljZSB9IGZyb20gJy4vZGlhbG9nL3N0cnVjdHVyZS5kaWFsb2ctc2NoZW1hLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBmYWJyaWNJbXBvcnRzIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2dyaWQvZmVhdHVyZS9zdHJ1Y3R1cmUtZmFicmljLmltcG9ydHMnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2NoZW1hTWFuYWdlckljb25Db21wb25lbnQgfSBmcm9tICcuL21hbmFnZXItaWNvbi9zdHJ1Y3R1cmUuc2NoZW1hLW1hbmFnZXItaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vbDEwbi9mZWF0dXJlL3RyYW5zbGF0aW9uLmZlYXR1cmUtbW9kdWxlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRmYWJyaWNJbXBvcnRzLFxuXHRcdFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRTdHJ1Y3R1cmVTY2hlbWFNYW5nZXJDb21wb25lbnQsXG5cdFx0U3RydWN0dXJlRGlhbG9nU2NoZW1hTWFuYWdlckNvbXBvbmVudCxcblx0XHRTdHJ1Y3R1cmVTY2hlbWFNYW5hZ2VySWNvbkNvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0U3RydWN0dXJlU2NoZW1hTWFuYWdlckljb25Db21wb25lbnRcblx0XSxcblx0ZW50cnlDb21wb25lbnRzOiBbXG5cdFx0U3RydWN0dXJlRGlhbG9nU2NoZW1hTWFuYWdlckNvbXBvbmVudCxcblx0XHRTdHJ1Y3R1cmVTY2hlbWFNYW5nZXJDb21wb25lbnRcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U3RydWN0dXJlRGlhbG9nU2NoZW1hTWFuYWdlclNlcnZpY2Vcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTY2hlbWFNYW5hZ2VyTW9kdWxlIHtcblxufVxuIl19