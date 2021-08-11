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
var SchemaManagerModule = /** @class */ (function () {
    function SchemaManagerModule() {
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
    return SchemaManagerModule;
}());
export { SchemaManagerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLW1hbmFnZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzY2hlbWEvZmVhdHVyZS9tYW5hZ2VyL3NjaGVtYS1tYW5hZ2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDckYsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0csT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDdkcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzdHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRTVGO0lBQUE7SUF3QkEsQ0FBQzs7Z0JBeEJBLFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixhQUFhO3dCQUNiLHdCQUF3QjtxQkFDeEI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLDhCQUE4Qjt3QkFDOUIscUNBQXFDO3dCQUNyQyxtQ0FBbUM7cUJBQ25DO29CQUNELE9BQU8sRUFBRTt3QkFDUixtQ0FBbUM7cUJBQ25DO29CQUNELGVBQWUsRUFBRTt3QkFDaEIscUNBQXFDO3dCQUNyQyw4QkFBOEI7cUJBQzlCO29CQUNELFNBQVMsRUFBRTt3QkFDVixtQ0FBbUM7cUJBQ25DO2lCQUNEOztJQUdELDBCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0FGWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgU3RydWN0dXJlU2NoZW1hTWFuZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc2NoZW1hLW1hbmdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRGlhbG9nU2NoZW1hTWFuYWdlckNvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nL3N0cnVjdHVyZS5kaWFsb2ctc2NoZW1hLW1hbmFnZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZURpYWxvZ1NjaGVtYU1hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi9kaWFsb2cvc3RydWN0dXJlLmRpYWxvZy1zY2hlbWEtbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7IGZhYnJpY0ltcG9ydHMgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL3N0cnVjdHVyZS1mYWJyaWMuaW1wb3J0cyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTY2hlbWFNYW5hZ2VySWNvbkNvbXBvbmVudCB9IGZyb20gJy4vbWFuYWdlci1pY29uL3N0cnVjdHVyZS5zY2hlbWEtbWFuYWdlci1pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9sMTBuL2ZlYXR1cmUvdHJhbnNsYXRpb24uZmVhdHVyZS1tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdGZhYnJpY0ltcG9ydHMsXG5cdFx0VHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdFN0cnVjdHVyZVNjaGVtYU1hbmdlckNvbXBvbmVudCxcblx0XHRTdHJ1Y3R1cmVEaWFsb2dTY2hlbWFNYW5hZ2VyQ29tcG9uZW50LFxuXHRcdFN0cnVjdHVyZVNjaGVtYU1hbmFnZXJJY29uQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRTdHJ1Y3R1cmVTY2hlbWFNYW5hZ2VySWNvbkNvbXBvbmVudFxuXHRdLFxuXHRlbnRyeUNvbXBvbmVudHM6IFtcblx0XHRTdHJ1Y3R1cmVEaWFsb2dTY2hlbWFNYW5hZ2VyQ29tcG9uZW50LFxuXHRcdFN0cnVjdHVyZVNjaGVtYU1hbmdlckNvbXBvbmVudFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRTdHJ1Y3R1cmVEaWFsb2dTY2hlbWFNYW5hZ2VyU2VydmljZVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVtYU1hbmFnZXJNb2R1bGUge1xuXG59XG4iXX0=