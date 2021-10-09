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
import { VerticalFormationWarehouse } from './vertical-formation.warehouse';
import { VerticalFormationScrollBarPositionArchive } from '../domain-read/scroll-bar/vertical-formation.scroll-bar-position.archive';
import { VerticalFormationDomainWarehouse } from '../domain-read/vertical-formation.domain-warehouse';
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
    return VerticalFormationApiModule;
}(ApiModule));
export { VerticalFormationApiModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9hcGkvdmVydGljYWwtZm9ybWF0aW9uLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0MsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0YsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFDckksT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFHdEc7SUFpQmdELHNEQUFTO0lBakJ6RDs7SUFrQkEsQ0FBQzs7Z0JBbEJBLFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWiw2QkFBNkI7cUJBQzdCO29CQUNELFNBQVMsRUFBRTt3QkFDViwwQkFBMEI7d0JBQzFCLDJCQUEyQjt3QkFDM0I7NEJBQ0MsT0FBTyxFQUFFLDBCQUEwQjs0QkFDbkMsUUFBUSxFQUFFLGdDQUFnQzt5QkFDMUM7d0JBQ0QseUNBQXlDO3FCQUN6QztvQkFDRCxZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEVBQUU7aUJBQ1g7O0lBRUQsaUNBQUM7Q0FBQSxBQWxCRCxDQWlCZ0QsU0FBUyxHQUN4RDtTQURZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBcGlNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbkRvbWFpbk1vZHVsZSB9IGZyb20gJy4uL2RvbWFpbi92ZXJ0aWNhbC1mb3JtYXRpb24uZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbkNvbnZlcnRlciB9IGZyb20gJy4vdmVydGljYWwtZm9ybWF0aW9uLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uU2Nyb2xsQmFyUG9zaXRpb25BcmNoaXZlIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvc2Nyb2xsLWJhci92ZXJ0aWNhbC1mb3JtYXRpb24uc2Nyb2xsLWJhci1wb3NpdGlvbi5hcmNoaXZlJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uRG9tYWluV2FyZWhvdXNlIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvdmVydGljYWwtZm9ybWF0aW9uLmRvbWFpbi13YXJlaG91c2UnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0VmVydGljYWxGb3JtYXRpb25Eb21haW5Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0VmVydGljYWxGb3JtYXRpb25Db252ZXJ0ZXIsXG5cdFx0VmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5LFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IFZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0dXNlQ2xhc3M6IFZlcnRpY2FsRm9ybWF0aW9uRG9tYWluV2FyZWhvdXNlXG5cdFx0fSxcblx0XHRWZXJ0aWNhbEZvcm1hdGlvblNjcm9sbEJhclBvc2l0aW9uQXJjaGl2ZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEZvcm1hdGlvbkFwaU1vZHVsZSBleHRlbmRzIEFwaU1vZHVsZSB7XG59XG4iXX0=