import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptySourceComponent } from './empty-source.component';
import { TranslationFeatureModule } from '../../../../l10n/src/translation.feature-module';
import { FeatureModule } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export class EmptySourceFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: EmptySourceFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: EmptySourceFeatureModule, declarations: [EmptySourceComponent], imports: [CommonModule,
            TranslationFeatureModule], exports: [EmptySourceComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: EmptySourceFeatureModule, imports: [CommonModule,
            TranslationFeatureModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: EmptySourceFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        TranslationFeatureModule
                    ],
                    declarations: [
                        EmptySourceComponent
                    ],
                    exports: [
                        EmptySourceComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHktc291cmNlLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9zb3VyY2Uvc3JjL2VtcHR5L2VtcHR5LXNvdXJjZS5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBY25ELE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxhQUFhO0lBRTFELE1BQU0sQ0FBQyxZQUFZO1FBQ2xCLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzt3R0FKVyx3QkFBd0I7eUdBQXhCLHdCQUF3QixpQkFObkMsb0JBQW9CLGFBSnBCLFlBQVk7WUFDWix3QkFBd0IsYUFNeEIsb0JBQW9CO3lHQUdULHdCQUF3QixZQVZuQyxZQUFZO1lBQ1osd0JBQXdCOzs0RkFTYix3QkFBd0I7a0JBWnBDLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osd0JBQXdCO3FCQUN4QjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2Isb0JBQW9CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Isb0JBQW9CO3FCQUNwQjtpQkFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRW1wdHlTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL2VtcHR5LXNvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbDEwbi9zcmMvdHJhbnNsYXRpb24uZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0VHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdEVtcHR5U291cmNlQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRFbXB0eVNvdXJjZUNvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEVtcHR5U291cmNlRmVhdHVyZU1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxufVxuIl19