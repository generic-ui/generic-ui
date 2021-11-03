import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { SchemaApiModule } from '../core/api/schema.api-module';
import { SchemaRowClassArchive } from '../core/api/styling/schema.row-class.archive';
import { SchemaRowStyleArchive } from '../core/api/styling/schema.row-style.archive';
import * as i0 from "@angular/core";
import * as i1 from "../core/api/schema.api-module";
export class SchemaFeatureModule extends FeatureModule {
    constructor(schemaApiModule) {
        super();
        if (schemaApiModule === null) {
            throw new Error('SchemaApiModule is required.');
        }
    }
    static forComponent() {
        return [
            SchemaRowClassArchive,
            SchemaRowStyleArchive
        ];
    }
}
SchemaFeatureModule.ɵfac = function SchemaFeatureModule_Factory(t) { return new (t || SchemaFeatureModule)(i0.ɵɵinject(i1.SchemaApiModule, 8)); };
SchemaFeatureModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SchemaFeatureModule });
SchemaFeatureModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            SchemaApiModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SchemaFeatureModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    SchemaApiModule
                ],
                declarations: [],
                exports: []
            }]
    }], function () { return [{ type: i1.SchemaApiModule, decorators: [{
                type: Optional
            }] }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SchemaFeatureModule, { imports: [CommonModule,
        SchemaApiModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zY2hlbWEvZmVhdHVyZS9zY2hlbWEuZmVhdHVyZS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDckYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOENBQThDLENBQUM7OztBQVdyRixNQUFNLE9BQU8sbUJBQW9CLFNBQVEsYUFBYTtJQVNyRCxZQUF3QixlQUFnQztRQUN2RCxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksZUFBZSxLQUFLLElBQUksRUFBRTtZQUM3QixNQUFNLElBQUksS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7U0FDaEQ7SUFDRixDQUFDO0lBWkQsTUFBTSxDQUFDLFlBQVk7UUFDbEIsT0FBTztZQUNOLHFCQUFxQjtZQUNyQixxQkFBcUI7U0FDckIsQ0FBQztJQUNILENBQUM7O3NGQVBXLG1CQUFtQjtxRUFBbkIsbUJBQW1CO3lFQVB0QjtZQUNSLFlBQVk7WUFDWixlQUFlO1NBQ2Y7dUZBSVcsbUJBQW1CO2NBUi9CLFFBQVE7ZUFBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixlQUFlO2lCQUNmO2dCQUNELFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTthQUNYOztzQkFVYSxRQUFROzt3RkFUVCxtQkFBbUIsY0FOOUIsWUFBWTtRQUNaLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGZWF0dXJlTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hQXBpTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9hcGkvc2NoZW1hLmFwaS1tb2R1bGUnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q2xhc3NBcmNoaXZlIH0gZnJvbSAnLi4vY29yZS9hcGkvc3R5bGluZy9zY2hlbWEucm93LWNsYXNzLmFyY2hpdmUnO1xuaW1wb3J0IHsgU2NoZW1hUm93U3R5bGVBcmNoaXZlIH0gZnJvbSAnLi4vY29yZS9hcGkvc3R5bGluZy9zY2hlbWEucm93LXN0eWxlLmFyY2hpdmUnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0U2NoZW1hQXBpTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVtYUZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdFNjaGVtYVJvd0NsYXNzQXJjaGl2ZSxcblx0XHRcdFNjaGVtYVJvd1N0eWxlQXJjaGl2ZVxuXHRcdF07XG5cdH1cblxuXHRjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBzY2hlbWFBcGlNb2R1bGU6IFNjaGVtYUFwaU1vZHVsZSkge1xuXHRcdHN1cGVyKCk7XG5cdFx0aWYgKHNjaGVtYUFwaU1vZHVsZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTY2hlbWFBcGlNb2R1bGUgaXMgcmVxdWlyZWQuJyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==