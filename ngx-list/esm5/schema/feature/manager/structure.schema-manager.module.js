/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureSchemaMangerComponent } from './structure.schema-manger.component';
import { StructureDialogSchemaManagerComponent } from './dialog/structure.dialog-schema-manager.component';
import { StructureDialogSchemaManagerService } from './dialog/structure.dialog-schema-manager.service';
import { fabricImports } from '../../../structure/core/feature/structure-fabric.imports';
import { StructureSchemaManagerIconComponent } from './manager-icon/structure.schema-manager-icon.component';
var StructureSchemaManagerModule = /** @class */ (function () {
    function StructureSchemaManagerModule() {
    }
    StructureSchemaManagerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        fabricImports
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
    return StructureSchemaManagerModule;
}());
export { StructureSchemaManagerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNjaGVtYS1tYW5hZ2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic2NoZW1hL2ZlYXR1cmUvbWFuYWdlci9zdHJ1Y3R1cmUuc2NoZW1hLW1hbmFnZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN2RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDekYsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFFN0c7SUFBQTtJQXVCQSxDQUFDOztnQkF2QkEsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLGFBQWE7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLDhCQUE4Qjt3QkFDOUIscUNBQXFDO3dCQUNyQyxtQ0FBbUM7cUJBQ25DO29CQUNELE9BQU8sRUFBRTt3QkFDUixtQ0FBbUM7cUJBQ25DO29CQUNELGVBQWUsRUFBRTt3QkFDaEIscUNBQXFDO3dCQUNyQyw4QkFBOEI7cUJBQzlCO29CQUNELFNBQVMsRUFBRTt3QkFDVixtQ0FBbUM7cUJBQ25DO2lCQUNEOztJQUdELG1DQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FGWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN0cnVjdHVyZVNjaGVtYU1hbmdlckNvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlLnNjaGVtYS1tYW5nZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZURpYWxvZ1NjaGVtYU1hbmFnZXJDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy9zdHJ1Y3R1cmUuZGlhbG9nLXNjaGVtYS1tYW5hZ2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEaWFsb2dTY2hlbWFNYW5hZ2VyU2VydmljZSB9IGZyb20gJy4vZGlhbG9nL3N0cnVjdHVyZS5kaWFsb2ctc2NoZW1hLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBmYWJyaWNJbXBvcnRzIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2NvcmUvZmVhdHVyZS9zdHJ1Y3R1cmUtZmFicmljLmltcG9ydHMnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2NoZW1hTWFuYWdlckljb25Db21wb25lbnQgfSBmcm9tICcuL21hbmFnZXItaWNvbi9zdHJ1Y3R1cmUuc2NoZW1hLW1hbmFnZXItaWNvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdGZhYnJpY0ltcG9ydHNcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0U3RydWN0dXJlU2NoZW1hTWFuZ2VyQ29tcG9uZW50LFxuXHRcdFN0cnVjdHVyZURpYWxvZ1NjaGVtYU1hbmFnZXJDb21wb25lbnQsXG5cdFx0U3RydWN0dXJlU2NoZW1hTWFuYWdlckljb25Db21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdFN0cnVjdHVyZVNjaGVtYU1hbmFnZXJJY29uQ29tcG9uZW50XG5cdF0sXG5cdGVudHJ5Q29tcG9uZW50czogW1xuXHRcdFN0cnVjdHVyZURpYWxvZ1NjaGVtYU1hbmFnZXJDb21wb25lbnQsXG5cdFx0U3RydWN0dXJlU2NoZW1hTWFuZ2VyQ29tcG9uZW50XG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFN0cnVjdHVyZURpYWxvZ1NjaGVtYU1hbmFnZXJTZXJ2aWNlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU2NoZW1hTWFuYWdlck1vZHVsZSB7XG5cbn1cbiJdfQ==