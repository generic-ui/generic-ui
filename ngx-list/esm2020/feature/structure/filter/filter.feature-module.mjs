import { FilterPublisher } from '../../../core/structure/filter/api/filter.publisher';
import { FilterWarehouse } from '../../../core/structure/filter/api/filter.warehouse';
import { FilterIntegration } from '../../../core/structure/filter/api-integration/filter.integration';
import { NgModule } from '@angular/core';
import { filterInitializer } from '../../../core/structure/filter/api/filter.api-module';
import { CoreContainer } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
filterInitializer.init();
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
FilterFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FilterFeatureModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FilterFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: FilterFeatureModule });
FilterFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FilterFeatureModule, providers: [
        { provide: FilterPublisher, useFactory: provideFilterCommandInvoker },
        { provide: FilterWarehouse, useFactory: provideFilterWarehouse },
        { provide: FilterIntegration, useFactory: provideFilterIntegration }
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FilterFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [
                        { provide: FilterPublisher, useFactory: provideFilterCommandInvoker },
                        { provide: FilterWarehouse, useFactory: provideFilterWarehouse },
                        { provide: FilterIntegration, useFactory: provideFilterIntegration }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9maWx0ZXIvZmlsdGVyLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN0RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDdEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDdEcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUN6RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBRW5ELGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO0FBRXpCLE1BQU0sVUFBVSwyQkFBMkI7SUFDMUMsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFFRCxNQUFNLFVBQVUsc0JBQXNCO0lBQ3JDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBRUQsTUFBTSxVQUFVLHdCQUF3QjtJQUN2QyxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBVUQsTUFBTSxPQUFPLG1CQUFtQjs7Z0hBQW5CLG1CQUFtQjtpSEFBbkIsbUJBQW1CO2lIQUFuQixtQkFBbUIsYUFOcEI7UUFDVixFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLDJCQUEyQixFQUFFO1FBQ3JFLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsc0JBQXNCLEVBQUU7UUFDaEUsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLHdCQUF3QixFQUFFO0tBQ3BFOzJGQUVXLG1CQUFtQjtrQkFQL0IsUUFBUTttQkFBQztvQkFDVCxTQUFTLEVBQUU7d0JBQ1YsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSwyQkFBMkIsRUFBRTt3QkFDckUsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxzQkFBc0IsRUFBRTt3QkFDaEUsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLHdCQUF3QixFQUFFO3FCQUNwRTtpQkFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpbHRlclB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9hcGkvZmlsdGVyLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBGaWx0ZXJXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvYXBpL2ZpbHRlci53YXJlaG91c2UnO1xuaW1wb3J0IHsgRmlsdGVySW50ZWdyYXRpb24gfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvYXBpLWludGVncmF0aW9uL2ZpbHRlci5pbnRlZ3JhdGlvbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmlsdGVySW5pdGlhbGl6ZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvYXBpL2ZpbHRlci5hcGktbW9kdWxlJztcbmltcG9ydCB7IENvcmVDb250YWluZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5maWx0ZXJJbml0aWFsaXplci5pbml0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlRmlsdGVyQ29tbWFuZEludm9rZXIoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoRmlsdGVyUHVibGlzaGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVGaWx0ZXJXYXJlaG91c2UoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoRmlsdGVyV2FyZWhvdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVGaWx0ZXJJbnRlZ3JhdGlvbigpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShGaWx0ZXJJbnRlZ3JhdGlvbik7XG59XG5cblxuQE5nTW9kdWxlKHtcblx0cHJvdmlkZXJzOiBbXG5cdFx0eyBwcm92aWRlOiBGaWx0ZXJQdWJsaXNoZXIsIHVzZUZhY3Rvcnk6IHByb3ZpZGVGaWx0ZXJDb21tYW5kSW52b2tlciB9LFxuXHRcdHsgcHJvdmlkZTogRmlsdGVyV2FyZWhvdXNlLCB1c2VGYWN0b3J5OiBwcm92aWRlRmlsdGVyV2FyZWhvdXNlIH0sXG5cdFx0eyBwcm92aWRlOiBGaWx0ZXJJbnRlZ3JhdGlvbiwgdXNlRmFjdG9yeTogcHJvdmlkZUZpbHRlckludGVncmF0aW9uIH1cblx0XVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJGZWF0dXJlTW9kdWxlIHtcblxufVxuIl19