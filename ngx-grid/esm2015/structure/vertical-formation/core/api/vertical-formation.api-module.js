/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { VerticalFormationDomainModule } from '../domain/vertical-formation.domain-module';
import { VerticalFormationConverter } from './vertical-formation.converter';
import { VerticalFormationRepository } from './vertical-formation.repository';
import { VerticalFormationWarehouse } from './vertical-formation.warehouse';
import { VerticalFormationScrollBarPositionArchive } from '../domain-read/scroll-bar/vertical-formation.scroll-bar-position.archive';
import { VerticalFormationDomainWarehouse } from '../domain-read/vertical-formation.domain-warehouse';
export class VerticalFormationApiModule extends ApiModule {
}
VerticalFormationApiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    VerticalFormationDomainModule
                ],
                providers: [
                    VerticalFormationConverter,
                    VerticalFormationRepository,
                    {
                        provide: VerticalFormationWarehouse,
                        useClass: VerticalFormationDomainWarehouse
                    },
                    VerticalFormationScrollBarPositionArchive
                ],
                declarations: [],
                exports: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9hcGkvdmVydGljYWwtZm9ybWF0aW9uLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMzRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUNySSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQW9CdEcsTUFBTSxPQUFPLDBCQUEyQixTQUFRLFNBQVM7OztZQWpCeEQsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLDZCQUE2QjtpQkFDN0I7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLDBCQUEwQjtvQkFDMUIsMkJBQTJCO29CQUMzQjt3QkFDQyxPQUFPLEVBQUUsMEJBQTBCO3dCQUNuQyxRQUFRLEVBQUUsZ0NBQWdDO3FCQUMxQztvQkFDRCx5Q0FBeUM7aUJBQ3pDO2dCQUNELFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTthQUNYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEFwaU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluL3ZlcnRpY2FsLWZvcm1hdGlvbi5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyIH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24uY29udmVydGVyJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSB9IGZyb20gJy4vdmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuL3ZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25TY3JvbGxCYXJQb3NpdGlvbkFyY2hpdmUgfSBmcm9tICcuLi9kb21haW4tcmVhZC9zY3JvbGwtYmFyL3ZlcnRpY2FsLWZvcm1hdGlvbi5zY3JvbGwtYmFyLXBvc2l0aW9uLmFyY2hpdmUnO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25Eb21haW5XYXJlaG91c2UgfSBmcm9tICcuLi9kb21haW4tcmVhZC92ZXJ0aWNhbC1mb3JtYXRpb24uZG9tYWluLXdhcmVob3VzZSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRWZXJ0aWNhbEZvcm1hdGlvbkRvbWFpbk1vZHVsZVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRWZXJ0aWNhbEZvcm1hdGlvbkNvbnZlcnRlcixcblx0XHRWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnksXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHR1c2VDbGFzczogVmVydGljYWxGb3JtYXRpb25Eb21haW5XYXJlaG91c2Vcblx0XHR9LFxuXHRcdFZlcnRpY2FsRm9ybWF0aW9uU2Nyb2xsQmFyUG9zaXRpb25BcmNoaXZlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsRm9ybWF0aW9uQXBpTW9kdWxlIGV4dGVuZHMgQXBpTW9kdWxlIHtcbn1cbiJdfQ==