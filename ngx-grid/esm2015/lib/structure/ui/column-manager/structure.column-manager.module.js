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
/** @type {?} */
const declarations = [
    StructureColumnManagerComponent,
    StructureDialogColumnManagerComponent,
    StructureMenuColumnManagerComponent
];
export class StructureColumnManagerModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9jb2x1bW4tbWFuYWdlci9zdHJ1Y3R1cmUuY29sdW1uLW1hbmFnZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDdkcsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0csT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7O01BRy9GLFlBQVksR0FBRztJQUNwQiwrQkFBK0I7SUFDL0IscUNBQXFDO0lBQ3JDLG1DQUFtQztDQUNuQztBQWtCRCxNQUFNLE9BQU8sNEJBQTRCOzs7WUFoQnhDLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixhQUFhO2lCQUNiO2dCQUNELFlBQVksRUFBRSxZQUFZO2dCQUMxQixPQUFPLEVBQUUsWUFBWTtnQkFDckIsZUFBZSxFQUFFO29CQUNoQiwrQkFBK0I7b0JBQy9CLHFDQUFxQztvQkFDckMsbUNBQW1DO2lCQUNuQztnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsbUNBQW1DO2lCQUNuQzthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1hbmFnZXJDb21wb25lbnQgfSBmcm9tICcuL3N0cnVjdHVyZS5jb2x1bW4tbWFuYWdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgZmFicmljSW1wb3J0cyB9IGZyb20gJy4uL3N0cnVjdHVyZS1mYWJyaWMuaW1wb3J0cyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEaWFsb2dDb2x1bW5NYW5hZ2VyU2VydmljZSB9IGZyb20gJy4vZGlhbG9nL3N0cnVjdHVyZS5kaWFsb2ctY29sdW1uLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEaWFsb2dDb2x1bW5NYW5hZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2cvc3RydWN0dXJlLmRpYWxvZy1jb2x1bW4tbWFuYWdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlTWVudUNvbHVtbk1hbmFnZXJDb21wb25lbnQgfSBmcm9tICcuL21lbnUvc3RydWN0dXJlLm1lbnUtY29sdW1uLW1hbmFnZXIuY29tcG9uZW50JztcblxuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXG5cdFN0cnVjdHVyZUNvbHVtbk1hbmFnZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZURpYWxvZ0NvbHVtbk1hbmFnZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZU1lbnVDb2x1bW5NYW5hZ2VyQ29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdGZhYnJpY0ltcG9ydHNcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBkZWNsYXJhdGlvbnMsXG5cdGV4cG9ydHM6IGRlY2xhcmF0aW9ucyxcblx0ZW50cnlDb21wb25lbnRzOiBbXG5cdFx0U3RydWN0dXJlQ29sdW1uTWFuYWdlckNvbXBvbmVudCxcblx0XHRTdHJ1Y3R1cmVEaWFsb2dDb2x1bW5NYW5hZ2VyQ29tcG9uZW50LFxuXHRcdFN0cnVjdHVyZU1lbnVDb2x1bW5NYW5hZ2VyQ29tcG9uZW50XG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFN0cnVjdHVyZURpYWxvZ0NvbHVtbk1hbmFnZXJTZXJ2aWNlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uTWFuYWdlck1vZHVsZSB7XG59XG4iXX0=