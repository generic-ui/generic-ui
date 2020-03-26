/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureColumnManagerComponent } from './structure.column-manager.component';
import { fabricImports } from '../structure-fabric.imports';
import { StructureDialogColumnManagerService } from './dialog/structure.dialog-column-manager.service';
import { StructureDialogColumnManagerComponent } from './dialog/structure.dialog-column-manager.component';
import { StructureMenuColumnManagerComponent } from './menu/structure.menu-column-manager.component';
import { StructureColumnManagerIconComponent } from './icon/structure.column-manager-icon.component';
/** @type {?} */
var declarations = [
    StructureColumnManagerComponent,
    StructureDialogColumnManagerComponent,
    StructureMenuColumnManagerComponent,
    StructureColumnManagerIconComponent
];
var StructureColumnManagerModule = /** @class */ (function () {
    function StructureColumnManagerModule() {
    }
    StructureColumnManagerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        fabricImports
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
                },] }
    ];
    return StructureColumnManagerModule;
}());
export { StructureColumnManagerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9jb2x1bW4tbWFuYWdlci9zdHJ1Y3R1cmUuY29sdW1uLW1hbmFnZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDdkcsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0csT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDckcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0lBRy9GLFlBQVksR0FBRztJQUNwQiwrQkFBK0I7SUFDL0IscUNBQXFDO0lBQ3JDLG1DQUFtQztJQUNuQyxtQ0FBbUM7Q0FDbkM7QUFFRDtJQUFBO0lBaUJBLENBQUM7O2dCQWpCQSxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osYUFBYTtxQkFDYjtvQkFDRCxZQUFZLEVBQUUsWUFBWTtvQkFDMUIsT0FBTyxFQUFFLFlBQVk7b0JBQ3JCLGVBQWUsRUFBRTt3QkFDaEIsK0JBQStCO3dCQUMvQixxQ0FBcUM7d0JBQ3JDLG1DQUFtQztxQkFDbkM7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLG1DQUFtQztxQkFDbkM7aUJBQ0Q7O0lBRUQsbUNBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQURZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuY29sdW1uLW1hbmFnZXIuY29tcG9uZW50JztcbmltcG9ydCB7IGZhYnJpY0ltcG9ydHMgfSBmcm9tICcuLi9zdHJ1Y3R1cmUtZmFicmljLmltcG9ydHMnO1xuaW1wb3J0IHsgU3RydWN0dXJlRGlhbG9nQ29sdW1uTWFuYWdlclNlcnZpY2UgfSBmcm9tICcuL2RpYWxvZy9zdHJ1Y3R1cmUuZGlhbG9nLWNvbHVtbi1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlRGlhbG9nQ29sdW1uTWFuYWdlckNvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nL3N0cnVjdHVyZS5kaWFsb2ctY29sdW1uLW1hbmFnZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZU1lbnVDb2x1bW5NYW5hZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9tZW51L3N0cnVjdHVyZS5tZW51LWNvbHVtbi1tYW5hZ2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VySWNvbkNvbXBvbmVudCB9IGZyb20gJy4vaWNvbi9zdHJ1Y3R1cmUuY29sdW1uLW1hbmFnZXItaWNvbi5jb21wb25lbnQnO1xuXG5cbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcblx0U3RydWN0dXJlQ29sdW1uTWFuYWdlckNvbXBvbmVudCxcblx0U3RydWN0dXJlRGlhbG9nQ29sdW1uTWFuYWdlckNvbXBvbmVudCxcblx0U3RydWN0dXJlTWVudUNvbHVtbk1hbmFnZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbHVtbk1hbmFnZXJJY29uQ29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdGZhYnJpY0ltcG9ydHNcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBkZWNsYXJhdGlvbnMsXG5cdGV4cG9ydHM6IGRlY2xhcmF0aW9ucyxcblx0ZW50cnlDb21wb25lbnRzOiBbXG5cdFx0U3RydWN0dXJlQ29sdW1uTWFuYWdlckNvbXBvbmVudCxcblx0XHRTdHJ1Y3R1cmVEaWFsb2dDb2x1bW5NYW5hZ2VyQ29tcG9uZW50LFxuXHRcdFN0cnVjdHVyZU1lbnVDb2x1bW5NYW5hZ2VyQ29tcG9uZW50XG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFN0cnVjdHVyZURpYWxvZ0NvbHVtbk1hbmFnZXJTZXJ2aWNlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uTWFuYWdlck1vZHVsZSB7XG59XG4iXX0=