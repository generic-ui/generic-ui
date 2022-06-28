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
EmptySourceFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: EmptySourceFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
EmptySourceFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: EmptySourceFeatureModule, declarations: [EmptySourceComponent], imports: [CommonModule,
        TranslationFeatureModule], exports: [EmptySourceComponent] });
EmptySourceFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: EmptySourceFeatureModule, imports: [CommonModule,
        TranslationFeatureModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: EmptySourceFeatureModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHktc291cmNlLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9zb3VyY2UvZW1wdHkvZW1wdHktc291cmNlLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFjbkQsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGFBQWE7SUFFMUQsTUFBTSxDQUFDLFlBQVk7UUFDbEIsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDOztxSEFKVyx3QkFBd0I7c0hBQXhCLHdCQUF3QixpQkFObkMsb0JBQW9CLGFBSnBCLFlBQVk7UUFDWix3QkFBd0IsYUFNeEIsb0JBQW9CO3NIQUdULHdCQUF3QixZQVZuQyxZQUFZO1FBQ1osd0JBQXdCOzJGQVNiLHdCQUF3QjtrQkFacEMsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWix3QkFBd0I7cUJBQ3hCO29CQUNELFlBQVksRUFBRTt3QkFDYixvQkFBb0I7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDUixvQkFBb0I7cUJBQ3BCO2lCQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBFbXB0eVNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vZW1wdHktc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9sMTBuL3RyYW5zbGF0aW9uLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRFbXB0eVNvdXJjZUNvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0RW1wdHlTb3VyY2VDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBFbXB0eVNvdXJjZUZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cbn1cbiJdfQ==