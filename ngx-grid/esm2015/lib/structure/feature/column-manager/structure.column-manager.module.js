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
const declarations = [
    StructureColumnManagerComponent,
    StructureDialogColumnManagerComponent,
    StructureMenuColumnManagerComponent,
    StructureColumnManagerIconComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2NvbHVtbi1tYW5hZ2VyL3N0cnVjdHVyZS5jb2x1bW4tbWFuYWdlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN2RyxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7TUFHL0YsWUFBWSxHQUFHO0lBQ3BCLCtCQUErQjtJQUMvQixxQ0FBcUM7SUFDckMsbUNBQW1DO0lBQ25DLG1DQUFtQztDQUNuQztBQWtCRCxNQUFNLE9BQU8sNEJBQTRCOzs7WUFoQnhDLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixhQUFhO2lCQUNiO2dCQUNELFlBQVksRUFBRSxZQUFZO2dCQUMxQixPQUFPLEVBQUUsWUFBWTtnQkFDckIsZUFBZSxFQUFFO29CQUNoQiwrQkFBK0I7b0JBQy9CLHFDQUFxQztvQkFDckMsbUNBQW1DO2lCQUNuQztnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsbUNBQW1DO2lCQUNuQzthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1hbmFnZXJDb21wb25lbnQgfSBmcm9tICcuL3N0cnVjdHVyZS5jb2x1bW4tbWFuYWdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgZmFicmljSW1wb3J0cyB9IGZyb20gJy4uL3N0cnVjdHVyZS1mYWJyaWMuaW1wb3J0cyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEaWFsb2dDb2x1bW5NYW5hZ2VyU2VydmljZSB9IGZyb20gJy4vZGlhbG9nL3N0cnVjdHVyZS5kaWFsb2ctY29sdW1uLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEaWFsb2dDb2x1bW5NYW5hZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2cvc3RydWN0dXJlLmRpYWxvZy1jb2x1bW4tbWFuYWdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlTWVudUNvbHVtbk1hbmFnZXJDb21wb25lbnQgfSBmcm9tICcuL21lbnUvc3RydWN0dXJlLm1lbnUtY29sdW1uLW1hbmFnZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1hbmFnZXJJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uL3N0cnVjdHVyZS5jb2x1bW4tbWFuYWdlci1pY29uLmNvbXBvbmVudCc7XG5cblxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xuXHRTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVEaWFsb2dDb2x1bW5NYW5hZ2VyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVNZW51Q29sdW1uTWFuYWdlckNvbXBvbmVudCxcblx0U3RydWN0dXJlQ29sdW1uTWFuYWdlckljb25Db21wb25lbnRcbl07XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0ZmFicmljSW1wb3J0c1xuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IGRlY2xhcmF0aW9ucyxcblx0ZXhwb3J0czogZGVjbGFyYXRpb25zLFxuXHRlbnRyeUNvbXBvbmVudHM6IFtcblx0XHRTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyQ29tcG9uZW50LFxuXHRcdFN0cnVjdHVyZURpYWxvZ0NvbHVtbk1hbmFnZXJDb21wb25lbnQsXG5cdFx0U3RydWN0dXJlTWVudUNvbHVtbk1hbmFnZXJDb21wb25lbnRcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U3RydWN0dXJlRGlhbG9nQ29sdW1uTWFuYWdlclNlcnZpY2Vcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyTW9kdWxlIHtcbn1cbiJdfQ==