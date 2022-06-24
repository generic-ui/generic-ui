import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { TranslationPipe } from './translation.pipe';
import { TranslationFacade } from '../../core/l10n/api/translation.facade';
import { TranslationDomainFacade } from '../../core/l10n/domain/translation.domain-facade';
import * as i0 from "@angular/core";
export class TranslationFeatureModule extends FeatureModule {
    static forComponent() {
        return [{ provide: TranslationFacade, useClass: TranslationDomainFacade }];
    }
}
TranslationFeatureModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TranslationFeatureModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
TranslationFeatureModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TranslationFeatureModule, declarations: [TranslationPipe], imports: [CommonModule], exports: [TranslationPipe] });
TranslationFeatureModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TranslationFeatureModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TranslationFeatureModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvbDEwbi90cmFuc2xhdGlvbi5mZWF0dXJlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDOztBQWMzRixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsYUFBYTtJQUUxRCxNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFFLENBQUMsQ0FBQztJQUM1RSxDQUFDOztzSEFKVyx3QkFBd0I7dUhBQXhCLHdCQUF3QixpQkFObkMsZUFBZSxhQUhmLFlBQVksYUFNWixlQUFlO3VIQUdKLHdCQUF3QixZQVYzQjtZQUNSLFlBQVk7U0FDWjs0RkFRVyx3QkFBd0I7a0JBWHBDLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLGVBQWU7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLGVBQWU7cUJBQ2Y7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBUcmFuc2xhdGlvblBpcGUgfSBmcm9tICcuL3RyYW5zbGF0aW9uLnBpcGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25GYWNhZGUgfSBmcm9tICcuLi8uLi9jb3JlL2wxMG4vYXBpL3RyYW5zbGF0aW9uLmZhY2FkZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkRvbWFpbkZhY2FkZSB9IGZyb20gJy4uLy4uL2NvcmUvbDEwbi9kb21haW4vdHJhbnNsYXRpb24uZG9tYWluLWZhY2FkZSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRUcmFuc2xhdGlvblBpcGVcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdFRyYW5zbGF0aW9uUGlwZVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW3sgcHJvdmlkZTogVHJhbnNsYXRpb25GYWNhZGUsIHVzZUNsYXNzOiBUcmFuc2xhdGlvbkRvbWFpbkZhY2FkZSB9XTtcblx0fVxuXG5cdC8vIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIGFwaU1vZHVsZTogVHJhbnNsYXRpb25BcGlNb2R1bGUpIHtcblx0Ly8gXHRzdXBlcigpO1xuXHQvLyBcdGlmIChhcGlNb2R1bGUgPT09IG51bGwpIHtcblx0Ly8gXHRcdHRocm93IG5ldyBFcnJvcignVHJhbnNsYXRpb25BcGlNb2R1bGUgaXMgcmVxdWlyZWQuJyk7XG5cdC8vIFx0fVxuXHQvLyB9XG5cbn1cbiJdfQ==