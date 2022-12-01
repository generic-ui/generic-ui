import { FilterPublisher } from '../../../../core/structure/filter/src/api/filter.publisher';
import { FilterWarehouse } from '../../../../core/structure/filter/src/api/filter.warehouse';
import { FilterIntegration } from '../../../../core/structure/filter/src/api-integration/filter.integration';
import { NgModule } from '@angular/core';
import { initializeFilter } from '../../../../core/structure/filter/src/api/filter.api-module';
import { CoreContainer } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
initializeFilter();
export function provideFilterCommandInvoker() {
    return CoreContainer.resolve(FilterPublisher);
}
export function provideFilterWarehouse() {
    return CoreContainer.resolve(FilterWarehouse);
}
export function provideFilterIntegration() {
    return CoreContainer.resolve(FilterIntegration);
}
export class FilterFeatureModule {
}
FilterFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FilterFeatureModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FilterFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.2", ngImport: i0, type: FilterFeatureModule });
FilterFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FilterFeatureModule, providers: [
        { provide: FilterPublisher, useFactory: provideFilterCommandInvoker },
        { provide: FilterWarehouse, useFactory: provideFilterWarehouse },
        { provide: FilterIntegration, useFactory: provideFilterIntegration }
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FilterFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [
                        { provide: FilterPublisher, useFactory: provideFilterCommandInvoker },
                        { provide: FilterWarehouse, useFactory: provideFilterWarehouse },
                        { provide: FilterIntegration, useFactory: provideFilterIntegration }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL2ZpbHRlci5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDN0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBFQUEwRSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDL0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUVuRCxnQkFBZ0IsRUFBRSxDQUFDO0FBRW5CLE1BQU0sVUFBVSwyQkFBMkI7SUFDMUMsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFFRCxNQUFNLFVBQVUsc0JBQXNCO0lBQ3JDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBRUQsTUFBTSxVQUFVLHdCQUF3QjtJQUN2QyxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBVUQsTUFBTSxPQUFPLG1CQUFtQjs7Z0hBQW5CLG1CQUFtQjtpSEFBbkIsbUJBQW1CO2lIQUFuQixtQkFBbUIsYUFOcEI7UUFDVixFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLDJCQUEyQixFQUFFO1FBQ3JFLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsc0JBQXNCLEVBQUU7UUFDaEUsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLHdCQUF3QixFQUFFO0tBQ3BFOzJGQUVXLG1CQUFtQjtrQkFQL0IsUUFBUTttQkFBQztvQkFDVCxTQUFTLEVBQUU7d0JBQ1YsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSwyQkFBMkIsRUFBRTt3QkFDckUsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxzQkFBc0IsRUFBRTt3QkFDaEUsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLHdCQUF3QixFQUFFO3FCQUNwRTtpQkFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpbHRlclB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9zcmMvYXBpL2ZpbHRlci5wdWJsaXNoZXInO1xuaW1wb3J0IHsgRmlsdGVyV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9hcGkvZmlsdGVyLndhcmVob3VzZSc7XG5pbXBvcnQgeyBGaWx0ZXJJbnRlZ3JhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9zcmMvYXBpLWludGVncmF0aW9uL2ZpbHRlci5pbnRlZ3JhdGlvbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUZpbHRlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9zcmMvYXBpL2ZpbHRlci5hcGktbW9kdWxlJztcbmltcG9ydCB7IENvcmVDb250YWluZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbml0aWFsaXplRmlsdGVyKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlRmlsdGVyQ29tbWFuZEludm9rZXIoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoRmlsdGVyUHVibGlzaGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVGaWx0ZXJXYXJlaG91c2UoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoRmlsdGVyV2FyZWhvdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVGaWx0ZXJJbnRlZ3JhdGlvbigpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShGaWx0ZXJJbnRlZ3JhdGlvbik7XG59XG5cblxuQE5nTW9kdWxlKHtcblx0cHJvdmlkZXJzOiBbXG5cdFx0eyBwcm92aWRlOiBGaWx0ZXJQdWJsaXNoZXIsIHVzZUZhY3Rvcnk6IHByb3ZpZGVGaWx0ZXJDb21tYW5kSW52b2tlciB9LFxuXHRcdHsgcHJvdmlkZTogRmlsdGVyV2FyZWhvdXNlLCB1c2VGYWN0b3J5OiBwcm92aWRlRmlsdGVyV2FyZWhvdXNlIH0sXG5cdFx0eyBwcm92aWRlOiBGaWx0ZXJJbnRlZ3JhdGlvbiwgdXNlRmFjdG9yeTogcHJvdmlkZUZpbHRlckludGVncmF0aW9uIH1cblx0XVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJGZWF0dXJlTW9kdWxlIHtcblxufVxuIl19