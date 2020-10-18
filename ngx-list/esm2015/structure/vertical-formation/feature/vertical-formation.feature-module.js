/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { VerticalFormationApiModule } from '../core/api/vertical-formation.api-module';
export class VerticalFormationFeatureModule extends FeatureModule {
    /**
     * @param {?} verticalFormationApiModule
     */
    constructor(verticalFormationApiModule) {
        super();
        if (verticalFormationApiModule === null) {
            throw new Error('VerticalFormationFeatureModule is required.');
        }
    }
    /**
     * @return {?}
     */
    static forComponent() {
        return [];
    }
}
VerticalFormationFeatureModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    VerticalFormationApiModule
                ],
                declarations: [],
                exports: []
            },] }
];
/** @nocollapse */
VerticalFormationFeatureModule.ctorParameters = () => [
    { type: VerticalFormationApiModule, decorators: [{ type: Optional }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL2ZlYXR1cmUvdmVydGljYWwtZm9ybWF0aW9uLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBV3ZGLE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxhQUFhOzs7O0lBTWhFLFlBQXdCLDBCQUFzRDtRQUM3RSxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksMEJBQTBCLEtBQUssSUFBSSxFQUFFO1lBQ3hDLE1BQU0sSUFBSSxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQztTQUMvRDtJQUNGLENBQUM7Ozs7SUFURCxNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7OztZQVpELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWiwwQkFBMEI7aUJBQzFCO2dCQUNELFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTthQUNYOzs7O1lBVlEsMEJBQTBCLHVCQWlCckIsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbkFwaU1vZHVsZSB9IGZyb20gJy4uL2NvcmUvYXBpL3ZlcnRpY2FsLWZvcm1hdGlvbi5hcGktbW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdFZlcnRpY2FsRm9ybWF0aW9uQXBpTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsRm9ybWF0aW9uRmVhdHVyZU1vZHVsZSBleHRlbmRzIEZlYXR1cmVNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JDb21wb25lbnQoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSB2ZXJ0aWNhbEZvcm1hdGlvbkFwaU1vZHVsZTogVmVydGljYWxGb3JtYXRpb25BcGlNb2R1bGUpIHtcblx0XHRzdXBlcigpO1xuXHRcdGlmICh2ZXJ0aWNhbEZvcm1hdGlvbkFwaU1vZHVsZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdWZXJ0aWNhbEZvcm1hdGlvbkZlYXR1cmVNb2R1bGUgaXMgcmVxdWlyZWQuJyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==