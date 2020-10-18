/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureColumnConfigComponent } from './structure.column-config.component';
import { StructureColumnConfigTriggerComponent } from './structure.column-config-trigger.component';
import { StructureColumnConfigSortComponent } from './main/sort/structure.column-config-sort.component';
import { StructureColumnConfigColumnHideComponent } from './main/hide/structure.column-config-column-hide.component';
import { StructureColumnConfigColumnMoveComponent } from './main/move/structure.column-config-column-move.component';
import { fabricImports } from '../../structure-fabric.imports';
import { StructureColumnManagerModule } from '../../column-manager/structure.column-manager.module';
import { StructureColumnMenuIconComponent } from './icon/structure.column-menu-icon.component';
import { StructureColumnMenuArrowIconComponent } from './icon/structure.column-menu-arrow-icon.component';
import { UniqueValueListModule } from '../../../../filter/feature/unique/unique-value-list.module';
import { TranslationFeatureModule } from '../../../../../l10n/feature/translation.feature-module';
/** @type {?} */
var declarations = [
    StructureColumnConfigComponent,
    StructureColumnConfigTriggerComponent,
    StructureColumnConfigSortComponent,
    StructureColumnConfigColumnHideComponent,
    StructureColumnConfigColumnMoveComponent,
    StructureColumnMenuIconComponent,
    StructureColumnMenuArrowIconComponent
];
var StructureColumnMenuModule = /** @class */ (function () {
    function StructureColumnMenuModule() {
    }
    StructureColumnMenuModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        fabricImports,
                        StructureColumnManagerModule,
                        UniqueValueListModule,
                        TranslationFeatureModule
                    ],
                    declarations: declarations,
                    exports: declarations
                },] }
    ];
    return StructureColumnMenuModule;
}());
export { StructureColumnMenuModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9oZWFkZXIvbWVudS9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNwRyxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN4RyxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNySCxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNySCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDL0QsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDcEcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDL0YsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDMUcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDbkcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0RBQXdELENBQUM7O0lBRTVGLFlBQVksR0FBRztJQUNwQiw4QkFBOEI7SUFDOUIscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyx3Q0FBd0M7SUFDeEMsd0NBQXdDO0lBQ3hDLGdDQUFnQztJQUNoQyxxQ0FBcUM7Q0FDckM7QUFFRDtJQUFBO0lBWUEsQ0FBQzs7Z0JBWkEsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsNEJBQTRCO3dCQUM1QixxQkFBcUI7d0JBQ3JCLHdCQUF3QjtxQkFDeEI7b0JBQ0QsWUFBWSxFQUFFLFlBQVk7b0JBQzFCLE9BQU8sRUFBRSxZQUFZO2lCQUNyQjs7SUFFRCxnQ0FBQztDQUFBLEFBWkQsSUFZQztTQURZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb21wb25lbnQgfSBmcm9tICcuL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdUcmlnZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy10cmlnZ2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTb3J0Q29tcG9uZW50IH0gZnJvbSAnLi9tYWluL3NvcnQvc3RydWN0dXJlLmNvbHVtbi1jb25maWctc29ydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29sdW1uSGlkZUNvbXBvbmVudCB9IGZyb20gJy4vbWFpbi9oaWRlL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLWNvbHVtbi1oaWRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb2x1bW5Nb3ZlQ29tcG9uZW50IH0gZnJvbSAnLi9tYWluL21vdmUvc3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLW1vdmUuY29tcG9uZW50JztcbmltcG9ydCB7IGZhYnJpY0ltcG9ydHMgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUtZmFicmljLmltcG9ydHMnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWFuYWdlck1vZHVsZSB9IGZyb20gJy4uLy4uL2NvbHVtbi1tYW5hZ2VyL3N0cnVjdHVyZS5jb2x1bW4tbWFuYWdlci5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWVudUljb25Db21wb25lbnQgfSBmcm9tICcuL2ljb24vc3RydWN0dXJlLmNvbHVtbi1tZW51LWljb24uY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVBcnJvd0ljb25Db21wb25lbnQgfSBmcm9tICcuL2ljb24vc3RydWN0dXJlLmNvbHVtbi1tZW51LWFycm93LWljb24uY29tcG9uZW50JztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlTGlzdE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpbHRlci9mZWF0dXJlL3VuaXF1ZS91bmlxdWUtdmFsdWUtbGlzdC5tb2R1bGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbDEwbi9mZWF0dXJlL3RyYW5zbGF0aW9uLmZlYXR1cmUtbW9kdWxlJztcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xuXHRTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1RyaWdnZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NvcnRDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbHVtbkhpZGVDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbHVtbk1vdmVDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbHVtbk1lbnVJY29uQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb2x1bW5NZW51QXJyb3dJY29uQ29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdGZhYnJpY0ltcG9ydHMsXG5cdFx0U3RydWN0dXJlQ29sdW1uTWFuYWdlck1vZHVsZSxcblx0XHRVbmlxdWVWYWx1ZUxpc3RNb2R1bGUsXG5cdFx0VHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogZGVjbGFyYXRpb25zLFxuXHRleHBvcnRzOiBkZWNsYXJhdGlvbnNcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uTWVudU1vZHVsZSB7XG59XG4iXX0=