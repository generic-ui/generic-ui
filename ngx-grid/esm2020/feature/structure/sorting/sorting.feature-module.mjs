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
SortingFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SortingFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
SortingFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: SortingFeatureModule, imports: [CommonModule] });
SortingFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SortingFeatureModule, providers: [
        { provide: SortingPublisher, useFactory: provideSortingCommandInvoker }
    ], imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SortingFeatureModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5mZWF0dXJlLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvc29ydGluZy9zb3J0aW5nLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDNUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdURBQXVELENBQUM7O0FBRXpGLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO0FBRTFCLE1BQU0sVUFBVSw0QkFBNEI7SUFDM0MsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDaEQsQ0FBQztBQVlELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxhQUFhO0lBRXRELE1BQU0sQ0FBQyxZQUFZO1FBQ2xCLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7aUhBSlcsb0JBQW9CO2tIQUFwQixvQkFBb0IsWUFSL0IsWUFBWTtrSEFRRCxvQkFBb0IsYUFKckI7UUFDVixFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsNEJBQTRCLEVBQUU7S0FDdkUsWUFOQSxZQUFZOzJGQVFELG9CQUFvQjtrQkFWaEMsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTtxQkFDWjtvQkFDRCxZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsU0FBUyxFQUFFO3dCQUNWLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSw0QkFBNEIsRUFBRTtxQkFDdkU7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvcmVDb250YWluZXIsIEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBzb3J0aW5nSW5pdGlhbGl6ZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zb3J0aW5nL2FwaS9zb3J0aW5nLmFwaS1tb2R1bGUnO1xuaW1wb3J0IHsgU29ydGluZ1B1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NvcnRpbmcvYXBpL3NvcnRpbmcucHVibGlzaGVyJztcblxuc29ydGluZ0luaXRpYWxpemVyLmluaXQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVTb3J0aW5nQ29tbWFuZEludm9rZXIoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoU29ydGluZ1B1Ymxpc2hlcik7XG59XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW10sXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogU29ydGluZ1B1Ymxpc2hlciwgdXNlRmFjdG9yeTogcHJvdmlkZVNvcnRpbmdDb21tYW5kSW52b2tlciB9XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU29ydGluZ0ZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cbn1cbiJdfQ==