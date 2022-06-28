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
SourceFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SourceFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
SourceFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: SourceFeatureModule, imports: [CommonModule] });
SourceFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SourceFeatureModule, providers: [
        { provide: SourcePublisher, useFactory: provideSourceCommandInvoker },
        { provide: SourceWarehouse, useFactory: provideSourceWarehouse },
        { provide: SourceEventService, useFactory: provideSourceEventRepository }
    ], imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SourceFeatureModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9zb3VyY2Uvc291cmNlLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDekYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN0RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQzs7QUFHbEcsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7QUFFekIsTUFBTSxVQUFVLDJCQUEyQjtJQUMxQyxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUVELE1BQU0sVUFBVSxzQkFBc0I7SUFDckMsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFFRCxNQUFNLFVBQVUsNEJBQTRCO0lBQzNDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFlRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsYUFBYTtJQUVyRCxNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7O2dIQUpXLG1CQUFtQjtpSEFBbkIsbUJBQW1CLFlBVjlCLFlBQVk7aUhBVUQsbUJBQW1CLGFBTnBCO1FBQ1YsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSwyQkFBMkIsRUFBRTtRQUNyRSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLHNCQUFzQixFQUFFO1FBQ2hFLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSw0QkFBNEIsRUFBRTtLQUN6RSxZQVJBLFlBQVk7MkZBVUQsbUJBQW1CO2tCQVovQixRQUFRO21CQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3FCQUNaO29CQUNELFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsRUFBRTtvQkFDWCxTQUFTLEVBQUU7d0JBQ1YsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSwyQkFBMkIsRUFBRTt3QkFDckUsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxzQkFBc0IsRUFBRTt3QkFDaEUsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLDRCQUE0QixFQUFFO3FCQUN6RTtpQkFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29yZUNvbnRhaW5lciwgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBzb3VyY2VJbml0aWFsaXplciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9hcGkvc291cmNlLmFwaS1tb2R1bGUnO1xuaW1wb3J0IHsgU291cmNlUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc291cmNlL2FwaS9zb3VyY2UucHVibGlzaGVyJztcbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9hcGkvc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTb3VyY2VFdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zb3VyY2UvYXBpL2VkaXQvc291cmNlLWV2ZW50LnNlcnZpY2UnO1xuXG5cbnNvdXJjZUluaXRpYWxpemVyLmluaXQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVTb3VyY2VDb21tYW5kSW52b2tlcigpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShTb3VyY2VQdWJsaXNoZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZVNvdXJjZVdhcmVob3VzZSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShTb3VyY2VXYXJlaG91c2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZVNvdXJjZUV2ZW50UmVwb3NpdG9yeSgpIHtcblx0cmV0dXJuIENvcmVDb250YWluZXIucmVzb2x2ZShTb3VyY2VFdmVudFNlcnZpY2UpO1xufVxuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW10sXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogU291cmNlUHVibGlzaGVyLCB1c2VGYWN0b3J5OiBwcm92aWRlU291cmNlQ29tbWFuZEludm9rZXIgfSxcblx0XHR7IHByb3ZpZGU6IFNvdXJjZVdhcmVob3VzZSwgdXNlRmFjdG9yeTogcHJvdmlkZVNvdXJjZVdhcmVob3VzZSB9LFxuXHRcdHsgcHJvdmlkZTogU291cmNlRXZlbnRTZXJ2aWNlLCB1c2VGYWN0b3J5OiBwcm92aWRlU291cmNlRXZlbnRSZXBvc2l0b3J5IH1cblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VGZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGZvckNvbXBvbmVudCgpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG59XG4iXX0=