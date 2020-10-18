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
import { TranslationFeatureModule } from '../../../../l10n/feature/translation.feature-module';
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
                        fabricImports,
                        TranslationFeatureModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9jb2x1bW4tbWFuYWdlci9zdHJ1Y3R1cmUuY29sdW1uLW1hbmFnZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDdkcsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0csT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDckcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDckcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scURBQXFELENBQUM7O0lBR3pGLFlBQVksR0FBRztJQUNwQiwrQkFBK0I7SUFDL0IscUNBQXFDO0lBQ3JDLG1DQUFtQztJQUNuQyxtQ0FBbUM7Q0FDbkM7QUFFRDtJQUFBO0lBa0JBLENBQUM7O2dCQWxCQSxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osYUFBYTt3QkFDYix3QkFBd0I7cUJBQ3hCO29CQUNELFlBQVksRUFBRSxZQUFZO29CQUMxQixPQUFPLEVBQUUsWUFBWTtvQkFDckIsZUFBZSxFQUFFO3dCQUNoQiwrQkFBK0I7d0JBQy9CLHFDQUFxQzt3QkFDckMsbUNBQW1DO3FCQUNuQztvQkFDRCxTQUFTLEVBQUU7d0JBQ1YsbUNBQW1DO3FCQUNuQztpQkFDRDs7SUFFRCxtQ0FBQztDQUFBLEFBbEJELElBa0JDO1NBRFksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1hbmFnZXJDb21wb25lbnQgfSBmcm9tICcuL3N0cnVjdHVyZS5jb2x1bW4tbWFuYWdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgZmFicmljSW1wb3J0cyB9IGZyb20gJy4uL3N0cnVjdHVyZS1mYWJyaWMuaW1wb3J0cyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEaWFsb2dDb2x1bW5NYW5hZ2VyU2VydmljZSB9IGZyb20gJy4vZGlhbG9nL3N0cnVjdHVyZS5kaWFsb2ctY29sdW1uLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEaWFsb2dDb2x1bW5NYW5hZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2cvc3RydWN0dXJlLmRpYWxvZy1jb2x1bW4tbWFuYWdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlTWVudUNvbHVtbk1hbmFnZXJDb21wb25lbnQgfSBmcm9tICcuL21lbnUvc3RydWN0dXJlLm1lbnUtY29sdW1uLW1hbmFnZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1hbmFnZXJJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uL3N0cnVjdHVyZS5jb2x1bW4tbWFuYWdlci1pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9sMTBuL2ZlYXR1cmUvdHJhbnNsYXRpb24uZmVhdHVyZS1tb2R1bGUnO1xuXG5cbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcblx0U3RydWN0dXJlQ29sdW1uTWFuYWdlckNvbXBvbmVudCxcblx0U3RydWN0dXJlRGlhbG9nQ29sdW1uTWFuYWdlckNvbXBvbmVudCxcblx0U3RydWN0dXJlTWVudUNvbHVtbk1hbmFnZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbHVtbk1hbmFnZXJJY29uQ29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdGZhYnJpY0ltcG9ydHMsXG5cdFx0VHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogZGVjbGFyYXRpb25zLFxuXHRleHBvcnRzOiBkZWNsYXJhdGlvbnMsXG5cdGVudHJ5Q29tcG9uZW50czogW1xuXHRcdFN0cnVjdHVyZUNvbHVtbk1hbmFnZXJDb21wb25lbnQsXG5cdFx0U3RydWN0dXJlRGlhbG9nQ29sdW1uTWFuYWdlckNvbXBvbmVudCxcblx0XHRTdHJ1Y3R1cmVNZW51Q29sdW1uTWFuYWdlckNvbXBvbmVudFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRTdHJ1Y3R1cmVEaWFsb2dDb2x1bW5NYW5hZ2VyU2VydmljZVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbk1hbmFnZXJNb2R1bGUge1xufVxuIl19