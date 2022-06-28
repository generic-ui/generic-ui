import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { TranslationPipe } from './translation.pipe';
import { TranslationFacade } from '../../core/l10n/api/translation.facade';
import { TranslationDomainFacade } from '../../core/l10n/core/translation.domain-facade';
import * as i0 from "@angular/core";
export class TranslationFeatureModule extends FeatureModule {
    static forComponent() {
        return [{ provide: TranslationFacade, useClass: TranslationDomainFacade }];
    }
}
TranslationFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: TranslationFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
TranslationFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: TranslationFeatureModule, declarations: [TranslationPipe], imports: [CommonModule], exports: [TranslationPipe] });
TranslationFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: TranslationFeatureModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: TranslationFeatureModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        TranslationPipe
                    ],
                    exports: [
                        TranslationPipe
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvbDEwbi90cmFuc2xhdGlvbi5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQWN6RixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsYUFBYTtJQUUxRCxNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFFLENBQUMsQ0FBQztJQUM1RSxDQUFDOztxSEFKVyx3QkFBd0I7c0hBQXhCLHdCQUF3QixpQkFObkMsZUFBZSxhQUhmLFlBQVksYUFNWixlQUFlO3NIQUdKLHdCQUF3QixZQVRuQyxZQUFZOzJGQVNELHdCQUF3QjtrQkFYcEMsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTtxQkFDWjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2IsZUFBZTtxQkFDZjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1IsZUFBZTtxQkFDZjtpQkFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFRyYW5zbGF0aW9uUGlwZSB9IGZyb20gJy4vdHJhbnNsYXRpb24ucGlwZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZhY2FkZSB9IGZyb20gJy4uLy4uL2NvcmUvbDEwbi9hcGkvdHJhbnNsYXRpb24uZmFjYWRlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uRG9tYWluRmFjYWRlIH0gZnJvbSAnLi4vLi4vY29yZS9sMTBuL2NvcmUvdHJhbnNsYXRpb24uZG9tYWluLWZhY2FkZSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRUcmFuc2xhdGlvblBpcGVcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdFRyYW5zbGF0aW9uUGlwZVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW3sgcHJvdmlkZTogVHJhbnNsYXRpb25GYWNhZGUsIHVzZUNsYXNzOiBUcmFuc2xhdGlvbkRvbWFpbkZhY2FkZSB9XTtcblx0fVxuXG5cdC8vIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIGFwaU1vZHVsZTogVHJhbnNsYXRpb25BcGlNb2R1bGUpIHtcblx0Ly8gXHRzdXBlcigpO1xuXHQvLyBcdGlmIChhcGlNb2R1bGUgPT09IG51bGwpIHtcblx0Ly8gXHRcdHRocm93IG5ldyBFcnJvcignVHJhbnNsYXRpb25BcGlNb2R1bGUgaXMgcmVxdWlyZWQuJyk7XG5cdC8vIFx0fVxuXHQvLyB9XG5cbn1cbiJdfQ==