/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureSchemaMangerComponent } from './structure.schema-manger.component';
import { StructureDialogSchemaManagerComponent } from './dialog/structure.dialog-schema-manager.component';
import { StructureDialogSchemaManagerService } from './dialog/structure.dialog-schema-manager.service';
import { fabricImports } from '../../../structure/grid/feature/structure-fabric.imports';
import { StructureSchemaManagerIconComponent } from './manager-icon/structure.schema-manager-icon.component';
import { TranslationFeatureModule } from '../../../l10n/feature/translation.feature-module';
export class SchemaManagerModule {
}
SchemaManagerModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLW1hbmFnZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzY2hlbWEvZmVhdHVyZS9tYW5hZ2VyL3NjaGVtYS1tYW5hZ2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDckYsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0csT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDdkcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzdHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBd0I1RixNQUFNLE9BQU8sbUJBQW1COzs7WUF0Qi9CLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixhQUFhO29CQUNiLHdCQUF3QjtpQkFDeEI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLDhCQUE4QjtvQkFDOUIscUNBQXFDO29CQUNyQyxtQ0FBbUM7aUJBQ25DO2dCQUNELE9BQU8sRUFBRTtvQkFDUixtQ0FBbUM7aUJBQ25DO2dCQUNELGVBQWUsRUFBRTtvQkFDaEIscUNBQXFDO29CQUNyQyw4QkFBOEI7aUJBQzlCO2dCQUNELFNBQVMsRUFBRTtvQkFDVixtQ0FBbUM7aUJBQ25DO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN0cnVjdHVyZVNjaGVtYU1hbmdlckNvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlLnNjaGVtYS1tYW5nZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZURpYWxvZ1NjaGVtYU1hbmFnZXJDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy9zdHJ1Y3R1cmUuZGlhbG9nLXNjaGVtYS1tYW5hZ2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEaWFsb2dTY2hlbWFNYW5hZ2VyU2VydmljZSB9IGZyb20gJy4vZGlhbG9nL3N0cnVjdHVyZS5kaWFsb2ctc2NoZW1hLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBmYWJyaWNJbXBvcnRzIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2dyaWQvZmVhdHVyZS9zdHJ1Y3R1cmUtZmFicmljLmltcG9ydHMnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2NoZW1hTWFuYWdlckljb25Db21wb25lbnQgfSBmcm9tICcuL21hbmFnZXItaWNvbi9zdHJ1Y3R1cmUuc2NoZW1hLW1hbmFnZXItaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vbDEwbi9mZWF0dXJlL3RyYW5zbGF0aW9uLmZlYXR1cmUtbW9kdWxlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRmYWJyaWNJbXBvcnRzLFxuXHRcdFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRTdHJ1Y3R1cmVTY2hlbWFNYW5nZXJDb21wb25lbnQsXG5cdFx0U3RydWN0dXJlRGlhbG9nU2NoZW1hTWFuYWdlckNvbXBvbmVudCxcblx0XHRTdHJ1Y3R1cmVTY2hlbWFNYW5hZ2VySWNvbkNvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0U3RydWN0dXJlU2NoZW1hTWFuYWdlckljb25Db21wb25lbnRcblx0XSxcblx0ZW50cnlDb21wb25lbnRzOiBbXG5cdFx0U3RydWN0dXJlRGlhbG9nU2NoZW1hTWFuYWdlckNvbXBvbmVudCxcblx0XHRTdHJ1Y3R1cmVTY2hlbWFNYW5nZXJDb21wb25lbnRcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U3RydWN0dXJlRGlhbG9nU2NoZW1hTWFuYWdlclNlcnZpY2Vcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTY2hlbWFNYW5hZ2VyTW9kdWxlIHtcblxufVxuIl19