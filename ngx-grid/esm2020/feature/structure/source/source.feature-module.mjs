import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreContainer, FeatureModule } from '@generic-ui/hermes';
import { sourceInitializer } from '../../../core/structure/source/api/source.api-module';
import { SourcePublisher } from '../../../core/structure/source/api/source.publisher';
import { SourceWarehouse } from '../../../core/structure/source/api/source.warehouse';
import { SourceEventService } from '../../../core/structure/source/api/edit/source-event.service';
import * as i0 from "@angular/core";
sourceInitializer.init();
export function provideSourceCommandInvoker() {
    return CoreContainer.resolve(SourcePublisher);
}
export function provideSourceWarehouse() {
    return CoreContainer.resolve(SourceWarehouse);
}
export function provideSourceEventRepository() {
    return CoreContainer.resolve(SourceEventService);
}
export class SourceFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
SourceFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SourceFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
SourceFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SourceFeatureModule, imports: [CommonModule] });
SourceFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SourceFeatureModule, providers: [
        { provide: SourcePublisher, useFactory: provideSourceCommandInvoker },
        { provide: SourceWarehouse, useFactory: provideSourceWarehouse },
        { provide: SourceEventService, useFactory: provideSourceEventRepository }
    ], imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SourceFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [],
                    exports: [],
                    providers: [
                        { provide: SourcePublisher, useFactory: provideSourceCommandInvoker },
                        { provide: SourceWarehouse, useFactory: provideSourceWarehouse },
                        { provide: SourceEventService, useFactory: provideSourceEventRepository }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9zb3VyY2Uvc291cmNlLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDekYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN0RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQzs7QUFHbEcsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7QUFFekIsTUFBTSxVQUFVLDJCQUEyQjtJQUMxQyxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUVELE1BQU0sVUFBVSxzQkFBc0I7SUFDckMsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFFRCxNQUFNLFVBQVUsNEJBQTRCO0lBQzNDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFlRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsYUFBYTtJQUVyRCxNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7O2lIQUpXLG1CQUFtQjtrSEFBbkIsbUJBQW1CLFlBVjlCLFlBQVk7a0hBVUQsbUJBQW1CLGFBTnBCO1FBQ1YsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSwyQkFBMkIsRUFBRTtRQUNyRSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLHNCQUFzQixFQUFFO1FBQ2hFLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSw0QkFBNEIsRUFBRTtLQUN6RSxZQVRRO1lBQ1IsWUFBWTtTQUNaOzRGQVNXLG1CQUFtQjtrQkFaL0IsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTtxQkFDWjtvQkFDRCxZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsU0FBUyxFQUFFO3dCQUNWLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsMkJBQTJCLEVBQUU7d0JBQ3JFLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsc0JBQXNCLEVBQUU7d0JBQ2hFLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSw0QkFBNEIsRUFBRTtxQkFDekU7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvcmVDb250YWluZXIsIEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgc291cmNlSW5pdGlhbGl6ZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zb3VyY2UvYXBpL3NvdXJjZS5hcGktbW9kdWxlJztcbmltcG9ydCB7IFNvdXJjZVB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9hcGkvc291cmNlLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zb3VyY2UvYXBpL3NvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU291cmNlRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc291cmNlL2FwaS9lZGl0L3NvdXJjZS1ldmVudC5zZXJ2aWNlJztcblxuXG5zb3VyY2VJbml0aWFsaXplci5pbml0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlU291cmNlQ29tbWFuZEludm9rZXIoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoU291cmNlUHVibGlzaGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVTb3VyY2VXYXJlaG91c2UoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoU291cmNlV2FyZWhvdXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVTb3VyY2VFdmVudFJlcG9zaXRvcnkoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoU291cmNlRXZlbnRTZXJ2aWNlKTtcbn1cblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IFNvdXJjZVB1Ymxpc2hlciwgdXNlRmFjdG9yeTogcHJvdmlkZVNvdXJjZUNvbW1hbmRJbnZva2VyIH0sXG5cdFx0eyBwcm92aWRlOiBTb3VyY2VXYXJlaG91c2UsIHVzZUZhY3Rvcnk6IHByb3ZpZGVTb3VyY2VXYXJlaG91c2UgfSxcblx0XHR7IHByb3ZpZGU6IFNvdXJjZUV2ZW50U2VydmljZSwgdXNlRmFjdG9yeTogcHJvdmlkZVNvdXJjZUV2ZW50UmVwb3NpdG9yeSB9XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU291cmNlRmVhdHVyZU1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxufVxuIl19