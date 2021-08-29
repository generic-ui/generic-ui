/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { SearchDomainModule } from '../domain/search.domain-module';
import { SearchCommandInvoker } from './search.command-invoker';
import { SearchWarehouse } from './search.warehouse';
import { SearchEventRepository } from './search.event-repository';
import { SearchPhraseRepository } from './phrase/search-phrase.repository';
import { SearchHighlightArchive } from './highlight/search-highlight.archive';
import { SearchPlaceholderArchive } from './placeholder/search-placeholder.archive';
import { SearchingRepository } from './enabled/searching.repository';
import { SearchDomainWarehouse } from '../domain-read/search.domain-warehouse';
export class SearchApiModule extends ApiModule {
    constructor() {
        super();
    }
}
SearchApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    SearchDomainModule
                ],
                providers: [
                    SearchCommandInvoker,
                    {
                        provide: SearchWarehouse,
                        useClass: SearchDomainWarehouse
                    },
                    SearchEventRepository,
                    SearchPhraseRepository,
                    SearchHighlightArchive,
                    SearchPlaceholderArchive,
                    SearchingRepository
                ],
                declarations: [],
                exports: []
            },] }
];
/** @nocollapse */
SearchApiModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvY29yZS9hcGkvc2VhcmNoLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDM0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDcEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUF5Qi9FLE1BQU0sT0FBTyxlQUFnQixTQUFRLFNBQVM7SUFFN0M7UUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNULENBQUM7OztZQTFCRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osa0JBQWtCO2lCQUNsQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Ysb0JBQW9CO29CQUNwQjt3QkFDQyxPQUFPLEVBQUUsZUFBZTt3QkFDeEIsUUFBUSxFQUFFLHFCQUFxQjtxQkFDL0I7b0JBQ0QscUJBQXFCO29CQUVyQixzQkFBc0I7b0JBQ3RCLHNCQUFzQjtvQkFDdEIsd0JBQXdCO29CQUN4QixtQkFBbUI7aUJBRW5CO2dCQUNELFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTthQUNYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEFwaU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNlYXJjaERvbWFpbk1vZHVsZSB9IGZyb20gJy4uL2RvbWFpbi9zZWFyY2guZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBTZWFyY2hDb21tYW5kSW52b2tlciB9IGZyb20gJy4vc2VhcmNoLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTZWFyY2hXYXJlaG91c2UgfSBmcm9tICcuL3NlYXJjaC53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2VhcmNoRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi9zZWFyY2guZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTZWFyY2hQaHJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnLi9waHJhc2Uvc2VhcmNoLXBocmFzZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNlYXJjaEhpZ2hsaWdodEFyY2hpdmUgfSBmcm9tICcuL2hpZ2hsaWdodC9zZWFyY2gtaGlnaGxpZ2h0LmFyY2hpdmUnO1xuaW1wb3J0IHsgU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlIH0gZnJvbSAnLi9wbGFjZWhvbGRlci9zZWFyY2gtcGxhY2Vob2xkZXIuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTZWFyY2hpbmdSZXBvc2l0b3J5IH0gZnJvbSAnLi9lbmFibGVkL3NlYXJjaGluZy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNlYXJjaERvbWFpbldhcmVob3VzZSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL3NlYXJjaC5kb21haW4td2FyZWhvdXNlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdFNlYXJjaERvbWFpbk1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRTZWFyY2hDb21tYW5kSW52b2tlcixcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBTZWFyY2hXYXJlaG91c2UsXG5cdFx0XHR1c2VDbGFzczogU2VhcmNoRG9tYWluV2FyZWhvdXNlXG5cdFx0fSxcblx0XHRTZWFyY2hFdmVudFJlcG9zaXRvcnksXG5cblx0XHRTZWFyY2hQaHJhc2VSZXBvc2l0b3J5LFxuXHRcdFNlYXJjaEhpZ2hsaWdodEFyY2hpdmUsXG5cdFx0U2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlLFxuXHRcdFNlYXJjaGluZ1JlcG9zaXRvcnlcblxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hBcGlNb2R1bGUgZXh0ZW5kcyBBcGlNb2R1bGUge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cbn1cbiJdfQ==