/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { VerticalFormationDomainModule } from '../domain/vertical-formation.domain-module';
import { VerticalFormationConverter } from './vertical-formation.converter';
import { VerticalFormationRepository } from './vertical-formation.repository';
import { StructureVerticalFormationWarehouse } from './structure-vertical-formation.warehouse';
import { VerticalFormationScrollBarPositionRepository } from '../domain-read/scroll-bar/vertical-formation.scroll-bar-position.repository';
var VerticalFormationApiModule = /** @class */ (function (_super) {
    tslib_1.__extends(VerticalFormationApiModule, _super);
    function VerticalFormationApiModule() {
        return _super !== null && _super.apply(this, arguments) || this;
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
                        StructureVerticalFormationWarehouse,
                        VerticalFormationScrollBarPositionRepository
                    ],
                    declarations: [],
                    exports: []
                },] }
    ];
    return VerticalFormationApiModule;
}(ApiModule));
export { VerticalFormationApiModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9hcGkvdmVydGljYWwtZm9ybWF0aW9uLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0MsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0YsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDL0YsT0FBTyxFQUFFLDRDQUE0QyxFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFHM0k7SUFjZ0Qsc0RBQVM7SUFkekQ7O0lBZUEsQ0FBQzs7Z0JBZkEsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLDZCQUE2QjtxQkFDN0I7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLDBCQUEwQjt3QkFDMUIsMkJBQTJCO3dCQUMzQixtQ0FBbUM7d0JBQ25DLDRDQUE0QztxQkFDNUM7b0JBQ0QsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2lCQUNYOztJQUVELGlDQUFDO0NBQUEsQUFmRCxDQWNnRCxTQUFTLEdBQ3hEO1NBRFksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEFwaU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluL3ZlcnRpY2FsLWZvcm1hdGlvbi5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyIH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24uY29udmVydGVyJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSB9IGZyb20gJy4vdmVydGljYWwtZm9ybWF0aW9uLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuL3N0cnVjdHVyZS12ZXJ0aWNhbC1mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uU2Nyb2xsQmFyUG9zaXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvc2Nyb2xsLWJhci92ZXJ0aWNhbC1mb3JtYXRpb24uc2Nyb2xsLWJhci1wb3NpdGlvbi5yZXBvc2l0b3J5JztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdFZlcnRpY2FsRm9ybWF0aW9uRG9tYWluTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyLFxuXHRcdFZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeSxcblx0XHRTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRWZXJ0aWNhbEZvcm1hdGlvblNjcm9sbEJhclBvc2l0aW9uUmVwb3NpdG9yeVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEZvcm1hdGlvbkFwaU1vZHVsZSBleHRlbmRzIEFwaU1vZHVsZSB7XG59XG4iXX0=