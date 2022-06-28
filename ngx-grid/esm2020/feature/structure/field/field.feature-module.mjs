import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreContainer, FeatureModule } from '@generic-ui/hermes';
import { fieldInitializer } from '../../../core/structure/field/api/field.api-module';
import { FieldPublisher } from '../../../core/structure/field/api/field.publisher';
import { FieldWarehouse } from '../../../core/structure/field/api/field.warehouse';
import * as i0 from "@angular/core";
fieldInitializer.init();
export function provideFieldCommandInvoker() {
    return CoreContainer.resolve(FieldPublisher);
}
export function provideFieldWarehouse() {
    return CoreContainer.resolve(FieldWarehouse);
}
export class FieldFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
FieldFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FieldFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
FieldFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: FieldFeatureModule, imports: [CommonModule] });
FieldFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FieldFeatureModule, providers: [
        { provide: FieldPublisher, useFactory: provideFieldCommandInvoker },
        { provide: FieldWarehouse, useFactory: provideFieldWarehouse }
    ], imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FieldFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [],
                    exports: [],
                    providers: [
                        { provide: FieldPublisher, useFactory: provideFieldCommandInvoker },
                        { provide: FieldWarehouse, useFactory: provideFieldWarehouse }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL2ZpZWxkL2ZpZWxkLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDdEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtREFBbUQsQ0FBQzs7QUFFbkYsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7QUFFeEIsTUFBTSxVQUFVLDBCQUEwQjtJQUN6QyxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDOUMsQ0FBQztBQUVELE1BQU0sVUFBVSxxQkFBcUI7SUFDcEMsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFjRCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsYUFBYTtJQUVwRCxNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7OytHQUpXLGtCQUFrQjtnSEFBbEIsa0JBQWtCLFlBVDdCLFlBQVk7Z0hBU0Qsa0JBQWtCLGFBTG5CO1FBQ1YsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSwwQkFBMEIsRUFBRTtRQUNuRSxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLHFCQUFxQixFQUFFO0tBQzlELFlBUEEsWUFBWTsyRkFTRCxrQkFBa0I7a0JBWDlCLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO29CQUNYLFNBQVMsRUFBRTt3QkFDVixFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLDBCQUEwQixFQUFFO3dCQUNuRSxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLHFCQUFxQixFQUFFO3FCQUM5RDtpQkFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29yZUNvbnRhaW5lciwgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBmaWVsZEluaXRpYWxpemVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZmllbGQvYXBpL2ZpZWxkLmFwaS1tb2R1bGUnO1xuaW1wb3J0IHsgRmllbGRQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWVsZC9hcGkvZmllbGQucHVibGlzaGVyJztcbmltcG9ydCB7IEZpZWxkV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZmllbGQvYXBpL2ZpZWxkLndhcmVob3VzZSc7XG5cbmZpZWxkSW5pdGlhbGl6ZXIuaW5pdCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUZpZWxkQ29tbWFuZEludm9rZXIoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoRmllbGRQdWJsaXNoZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUZpZWxkV2FyZWhvdXNlKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKEZpZWxkV2FyZWhvdXNlKTtcbn1cblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IEZpZWxkUHVibGlzaGVyLCB1c2VGYWN0b3J5OiBwcm92aWRlRmllbGRDb21tYW5kSW52b2tlciB9LFxuXHRcdHsgcHJvdmlkZTogRmllbGRXYXJlaG91c2UsIHVzZUZhY3Rvcnk6IHByb3ZpZGVGaWVsZFdhcmVob3VzZSB9XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRmllbGRGZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGZvckNvbXBvbmVudCgpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG59XG4iXX0=