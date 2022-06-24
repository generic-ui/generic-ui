import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreContainer, FeatureModule } from '@generic-ui/hermes';
import { verticalFormationInitializer } from '../../../core/structure/vertical-formation/api/vertical-formation.api-module';
import { VerticalFormationPublisher } from '../../../core/structure/vertical-formation/api/vertical-formation.publisher';
import { VerticalFormationWarehouse } from '../../../core/structure/vertical-formation/api/vertical-formation.warehouse';
import * as i0 from "@angular/core";
verticalFormationInitializer.init();
export function provideVerticalFormationCommandInvoker() {
    return CoreContainer.resolve(VerticalFormationPublisher);
}
export function provideVerticalFormationWarehouse() {
    return CoreContainer.resolve(VerticalFormationWarehouse);
}
export class VerticalFormationFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
VerticalFormationFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: VerticalFormationFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
VerticalFormationFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: VerticalFormationFeatureModule, imports: [CommonModule] });
VerticalFormationFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: VerticalFormationFeatureModule, providers: [
        { provide: VerticalFormationPublisher, useFactory: provideVerticalFormationCommandInvoker },
        { provide: VerticalFormationWarehouse, useFactory: provideVerticalFormationWarehouse }
    ], imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: VerticalFormationFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [],
                    exports: [],
                    providers: [
                        { provide: VerticalFormationPublisher, useFactory: provideVerticalFormationCommandInvoker },
                        { provide: VerticalFormationWarehouse, useFactory: provideVerticalFormationWarehouse }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sOEVBQThFLENBQUM7QUFDNUgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDekgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkVBQTZFLENBQUM7O0FBR3pILDRCQUE0QixDQUFDLElBQUksRUFBRSxDQUFDO0FBRXBDLE1BQU0sVUFBVSxzQ0FBc0M7SUFDckQsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDMUQsQ0FBQztBQUVELE1BQU0sVUFBVSxpQ0FBaUM7SUFDaEQsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDMUQsQ0FBQztBQWNELE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxhQUFhO0lBRWhFLE1BQU0sQ0FBQyxZQUFZO1FBQ2xCLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7NEhBSlcsOEJBQThCOzZIQUE5Qiw4QkFBOEIsWUFUekMsWUFBWTs2SEFTRCw4QkFBOEIsYUFML0I7UUFDVixFQUFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxVQUFVLEVBQUUsc0NBQXNDLEVBQUU7UUFDM0YsRUFBRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsVUFBVSxFQUFFLGlDQUFpQyxFQUFFO0tBQ3RGLFlBUlE7WUFDUixZQUFZO1NBQ1o7NEZBUVcsOEJBQThCO2tCQVgxQyxRQUFRO21CQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3FCQUNaO29CQUNELFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsRUFBRTtvQkFDWCxTQUFTLEVBQUU7d0JBQ1YsRUFBRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsVUFBVSxFQUFFLHNDQUFzQyxFQUFFO3dCQUMzRixFQUFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxVQUFVLEVBQUUsaUNBQWlDLEVBQUU7cUJBQ3RGO2lCQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb3JlQ29udGFpbmVyLCBGZWF0dXJlTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgdmVydGljYWxGb3JtYXRpb25Jbml0aWFsaXplciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9hcGkvdmVydGljYWwtZm9ybWF0aW9uLmFwaS1tb2R1bGUnO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25QdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vYXBpL3ZlcnRpY2FsLWZvcm1hdGlvbi5wdWJsaXNoZXInO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vYXBpL3ZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UnO1xuXG5cbnZlcnRpY2FsRm9ybWF0aW9uSW5pdGlhbGl6ZXIuaW5pdCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZVZlcnRpY2FsRm9ybWF0aW9uQ29tbWFuZEludm9rZXIoKSB7XG5cdHJldHVybiBDb3JlQ29udGFpbmVyLnJlc29sdmUoVmVydGljYWxGb3JtYXRpb25QdWJsaXNoZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlKCkge1xuXHRyZXR1cm4gQ29yZUNvbnRhaW5lci5yZXNvbHZlKFZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlKTtcbn1cblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IFZlcnRpY2FsRm9ybWF0aW9uUHVibGlzaGVyLCB1c2VGYWN0b3J5OiBwcm92aWRlVmVydGljYWxGb3JtYXRpb25Db21tYW5kSW52b2tlciB9LFxuXHRcdHsgcHJvdmlkZTogVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UsIHVzZUZhY3Rvcnk6IHByb3ZpZGVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSB9XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgVmVydGljYWxGb3JtYXRpb25GZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGZvckNvbXBvbmVudCgpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG59XG4iXX0=