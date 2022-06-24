import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptySourceComponent } from './empty-source.component';
import { TranslationFeatureModule } from '../../../l10n/translation.feature-module';
import { FeatureModule } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export class EmptySourceFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
EmptySourceFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: EmptySourceFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
EmptySourceFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: EmptySourceFeatureModule, declarations: [EmptySourceComponent], imports: [CommonModule,
        TranslationFeatureModule], exports: [EmptySourceComponent] });
EmptySourceFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: EmptySourceFeatureModule, imports: [[
            CommonModule,
            TranslationFeatureModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: EmptySourceFeatureModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHktc291cmNlLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9zb3VyY2UvZW1wdHkvZW1wdHktc291cmNlLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFjbkQsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGFBQWE7SUFFMUQsTUFBTSxDQUFDLFlBQVk7UUFDbEIsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDOztzSEFKVyx3QkFBd0I7dUhBQXhCLHdCQUF3QixpQkFObkMsb0JBQW9CLGFBSnBCLFlBQVk7UUFDWix3QkFBd0IsYUFNeEIsb0JBQW9CO3VIQUdULHdCQUF3QixZQVgzQjtZQUNSLFlBQVk7WUFDWix3QkFBd0I7U0FDeEI7NEZBUVcsd0JBQXdCO2tCQVpwQyxRQUFRO21CQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLHdCQUF3QjtxQkFDeEI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLG9CQUFvQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLG9CQUFvQjtxQkFDcEI7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEVtcHR5U291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9lbXB0eS1zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2wxMG4vdHJhbnNsYXRpb24uZmVhdHVyZS1tb2R1bGUnO1xuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0VHJhbnNsYXRpb25GZWF0dXJlTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdEVtcHR5U291cmNlQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRFbXB0eVNvdXJjZUNvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEVtcHR5U291cmNlRmVhdHVyZU1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxufVxuIl19