/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { SummariesCommandInvoker } from './summaries.command-invoker';
import { SummariesEventRepository } from './summaries.event-repository';
import { SummariesDomainModule } from '../domain/summaries.domain-module';
import { SummariesEnabledArchive } from '../domain/enabled/summaries-enabled-archive.service';
import { SummariesWarehouse } from './summaries.warehouse';
import { SummariesDomainWarehouse } from '../domain-read/summaries.domain-warehouse';
import { SummariesDomainCommandInvoker } from '../domain/summaries.domain-command-invoker';
import { SummariesDomainEventRepository } from '../domain-read/summaries.domain-event-repository';
var SummariesApiModule = /** @class */ (function (_super) {
    tslib_1.__extends(SummariesApiModule, _super);
    function SummariesApiModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SummariesApiModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        SummariesDomainModule
                    ],
                    providers: [
                        {
                            provide: SummariesCommandInvoker,
                            useClass: SummariesDomainCommandInvoker
                        },
                        {
                            provide: SummariesEventRepository,
                            useClass: SummariesDomainEventRepository
                        },
                        {
                            provide: SummariesWarehouse,
                            useClass: SummariesDomainWarehouse
                        },
                        SummariesEnabledArchive
                    ],
                    declarations: [],
                    exports: []
                },] }
    ];
    return SummariesApiModule;
}(ApiModule));
export { SummariesApiModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9hcGkvc3VtbWFyaWVzLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDOUYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDckYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0YsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFHbEc7SUF1QndDLDhDQUFTO0lBdkJqRDs7SUF3QkEsQ0FBQzs7Z0JBeEJBLFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixxQkFBcUI7cUJBQ3JCO29CQUNELFNBQVMsRUFBRTt3QkFDVjs0QkFDQyxPQUFPLEVBQUUsdUJBQXVCOzRCQUNoQyxRQUFRLEVBQUUsNkJBQTZCO3lCQUN2Qzt3QkFDRDs0QkFDQyxPQUFPLEVBQUUsd0JBQXdCOzRCQUNqQyxRQUFRLEVBQUUsOEJBQThCO3lCQUN4Qzt3QkFDRDs0QkFDQyxPQUFPLEVBQUUsa0JBQWtCOzRCQUMzQixRQUFRLEVBQUUsd0JBQXdCO3lCQUNsQzt3QkFDRCx1QkFBdUI7cUJBQ3ZCO29CQUNELFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsRUFBRTtpQkFDWDs7SUFFRCx5QkFBQztDQUFBLEFBeEJELENBdUJ3QyxTQUFTLEdBQ2hEO1NBRFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEFwaU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN1bW1hcmllc0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi9zdW1tYXJpZXMuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN1bW1hcmllc0V2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4vc3VtbWFyaWVzLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3VtbWFyaWVzRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluL3N1bW1hcmllcy5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IFN1bW1hcmllc0VuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vZG9tYWluL2VuYWJsZWQvc3VtbWFyaWVzLWVuYWJsZWQtYXJjaGl2ZS5zZXJ2aWNlJztcbmltcG9ydCB7IFN1bW1hcmllc1dhcmVob3VzZSB9IGZyb20gJy4vc3VtbWFyaWVzLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNEb21haW5XYXJlaG91c2UgfSBmcm9tICcuLi9kb21haW4tcmVhZC9zdW1tYXJpZXMuZG9tYWluLXdhcmVob3VzZSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNEb21haW5Db21tYW5kSW52b2tlciB9IGZyb20gJy4uL2RvbWFpbi9zdW1tYXJpZXMuZG9tYWluLWNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdW1tYXJpZXNEb21haW5FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi9kb21haW4tcmVhZC9zdW1tYXJpZXMuZG9tYWluLWV2ZW50LXJlcG9zaXRvcnknO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0U3VtbWFyaWVzRG9tYWluTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHtcblx0XHRcdHByb3ZpZGU6IFN1bW1hcmllc0NvbW1hbmRJbnZva2VyLFxuXHRcdFx0dXNlQ2xhc3M6IFN1bW1hcmllc0RvbWFpbkNvbW1hbmRJbnZva2VyXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBTdW1tYXJpZXNFdmVudFJlcG9zaXRvcnksXG5cdFx0XHR1c2VDbGFzczogU3VtbWFyaWVzRG9tYWluRXZlbnRSZXBvc2l0b3J5XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBTdW1tYXJpZXNXYXJlaG91c2UsXG5cdFx0XHR1c2VDbGFzczogU3VtbWFyaWVzRG9tYWluV2FyZWhvdXNlXG5cdFx0fSxcblx0XHRTdW1tYXJpZXNFbmFibGVkQXJjaGl2ZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTdW1tYXJpZXNBcGlNb2R1bGUgZXh0ZW5kcyBBcGlNb2R1bGUge1xufVxuIl19