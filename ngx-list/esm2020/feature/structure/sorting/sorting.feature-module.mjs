import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreContainer, FeatureModule } from '@generic-ui/hermes';
import { sortingInitializer } from '../../../core/structure/sorting/api/sorting.api-module';
import { SortingPublisher } from '../../../core/structure/sorting/api/sorting.publisher';
import * as i0 from "@angular/core";
sortingInitializer.init();
export function provideSortingCommandInvoker() {
    return CoreContainer.resolve(SortingPublisher);
}
export class SortingFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
SortingFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SortingFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
SortingFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SortingFeatureModule, imports: [CommonModule] });
SortingFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SortingFeatureModule, providers: [
        { provide: SortingPublisher, useFactory: provideSortingCommandInvoker }
    ], imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SortingFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [],
                    exports: [],
                    providers: [
                        { provide: SortingPublisher, useFactory: provideSortingCommandInvoker }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5mZWF0dXJlLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvc29ydGluZy9zb3J0aW5nLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDNUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdURBQXVELENBQUM7O0FBRXpGLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO0FBRTFCLE1BQU0sVUFBVSw0QkFBNEI7SUFDM0MsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDaEQsQ0FBQztBQVlELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxhQUFhO0lBRXRELE1BQU0sQ0FBQyxZQUFZO1FBQ2xCLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7a0hBSlcsb0JBQW9CO21IQUFwQixvQkFBb0IsWUFSL0IsWUFBWTttSEFRRCxvQkFBb0IsYUFKckI7UUFDVixFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsNEJBQTRCLEVBQUU7S0FDdkUsWUFQUTtZQUNSLFlBQVk7U0FDWjs0RkFPVyxvQkFBb0I7a0JBVmhDLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO29CQUNYLFNBQVMsRUFBRTt3QkFDVixFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsNEJBQTRCLEVBQUU7cUJBQ3ZFO2lCQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb3JlQ29udGFpbmVyLCBGZWF0dXJlTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgc29ydGluZ0luaXRpYWxpemVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc29ydGluZy9hcGkvc29ydGluZy5hcGktbW9kdWxlJztcbmltcG9ydCB7IFNvcnRpbmdQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zb3J0aW5nL2FwaS9zb3J0aW5nLnB1Ymxpc2hlcic7XG5cbnNvcnRpbmdJbml0aWFsaXplci5pbml0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlU29ydGluZ0NvbW1hbmRJbnZva2VyKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKFNvcnRpbmdQdWJsaXNoZXIpO1xufVxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IFNvcnRpbmdQdWJsaXNoZXIsIHVzZUZhY3Rvcnk6IHByb3ZpZGVTb3J0aW5nQ29tbWFuZEludm9rZXIgfVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFNvcnRpbmdGZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGZvckNvbXBvbmVudCgpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG59XG4iXX0=