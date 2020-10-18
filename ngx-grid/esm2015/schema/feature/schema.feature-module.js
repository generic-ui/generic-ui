/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { SchemaApiModule } from '../core/api/schema.api-module';
import { SchemaRowClassArchive } from '../core/api/styling/schema.row-class.archive';
import { SchemaRowStyleArchive } from '../core/api/styling/schema.row-style.archive';
export class SchemaFeatureModule extends FeatureModule {
    /**
     * @param {?} schemaApiModule
     */
    constructor(schemaApiModule) {
        super();
        if (schemaApiModule === null) {
            throw new Error('SchemaApiModule is required.');
        }
    }
    /**
     * @return {?}
     */
    static forComponent() {
        return [
            SchemaRowClassArchive,
            SchemaRowStyleArchive
        ];
    }
}
SchemaFeatureModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    SchemaApiModule
                ],
                declarations: [],
                exports: []
            },] }
];
/** @nocollapse */
SchemaFeatureModule.ctorParameters = () => [
    { type: SchemaApiModule, decorators: [{ type: Optional }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzY2hlbWEvZmVhdHVyZS9zY2hlbWEuZmVhdHVyZS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBV3JGLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxhQUFhOzs7O0lBU3JELFlBQXdCLGVBQWdDO1FBQ3ZELEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxlQUFlLEtBQUssSUFBSSxFQUFFO1lBQzdCLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztTQUNoRDtJQUNGLENBQUM7Ozs7SUFaRCxNQUFNLENBQUMsWUFBWTtRQUNsQixPQUFPO1lBQ04scUJBQXFCO1lBQ3JCLHFCQUFxQjtTQUNyQixDQUFDO0lBQ0gsQ0FBQzs7O1lBZkQsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLGVBQWU7aUJBQ2Y7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2FBQ1g7Ozs7WUFaUSxlQUFlLHVCQXNCVixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE9wdGlvbmFsLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmVhdHVyZU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYUFwaU1vZHVsZSB9IGZyb20gJy4uL2NvcmUvYXBpL3NjaGVtYS5hcGktbW9kdWxlJztcbmltcG9ydCB7IFNjaGVtYVJvd0NsYXNzQXJjaGl2ZSB9IGZyb20gJy4uL2NvcmUvYXBpL3N0eWxpbmcvc2NoZW1hLnJvdy1jbGFzcy5hcmNoaXZlJztcbmltcG9ydCB7IFNjaGVtYVJvd1N0eWxlQXJjaGl2ZSB9IGZyb20gJy4uL2NvcmUvYXBpL3N0eWxpbmcvc2NoZW1hLnJvdy1zdHlsZS5hcmNoaXZlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdFNjaGVtYUFwaU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTY2hlbWFGZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGZvckNvbXBvbmVudCgpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRTY2hlbWFSb3dDbGFzc0FyY2hpdmUsXG5cdFx0XHRTY2hlbWFSb3dTdHlsZUFyY2hpdmVcblx0XHRdO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoQE9wdGlvbmFsKCkgc2NoZW1hQXBpTW9kdWxlOiBTY2hlbWFBcGlNb2R1bGUpIHtcblx0XHRzdXBlcigpO1xuXHRcdGlmIChzY2hlbWFBcGlNb2R1bGUgPT09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignU2NoZW1hQXBpTW9kdWxlIGlzIHJlcXVpcmVkLicpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=