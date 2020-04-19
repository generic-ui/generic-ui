/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Archive } from '@generic-ui/hermes';
import { StructureColumnMenuConfig } from './structure.column-menu-config';
export class StructureColumnMenuConfigArchive extends Archive {
    constructor() {
        super(StructureColumnMenuConfig.default());
    }
    /**
     * @param {?} config
     * @return {?}
     */
    nextConfig(config) {
        /** @type {?} */
        const menuConfig = StructureColumnMenuConfig.fromConfig(config);
        this.next(menuConfig);
    }
}
StructureColumnMenuConfigArchive.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureColumnMenuConfigArchive.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5hcmNoaXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2ZlYXR1cmUvaGVhZGVyL21lbnUvY29uZmlnL3N0cnVjdHVyZS5jb2x1bW4tbWVudS1jb25maWcuYXJjaGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFN0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFJM0UsTUFBTSxPQUFPLGdDQUFpQyxTQUFRLE9BQWtDO0lBRXZGO1FBQ0MsS0FBSyxDQUFDLHlCQUF5QixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsTUFBd0I7O2NBRTVCLFVBQVUsR0FBRyx5QkFBeUIsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBRS9ELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7O1lBWkQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXJjaGl2ZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcgfSBmcm9tICcuL3N0cnVjdHVyZS5jb2x1bW4tbWVudS1jb25maWcnO1xuaW1wb3J0IHsgQ29sdW1uTWVudUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmUtYXBpL2NvbHVtbi1tZW51LWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZSBleHRlbmRzIEFyY2hpdmU8U3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZz4ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcuZGVmYXVsdCgpKTtcblx0fVxuXG5cdG5leHRDb25maWcoY29uZmlnOiBDb2x1bW5NZW51Q29uZmlnKTogdm9pZCB7XG5cblx0XHRjb25zdCBtZW51Q29uZmlnID0gU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZy5mcm9tQ29uZmlnKGNvbmZpZyk7XG5cblx0XHR0aGlzLm5leHQobWVudUNvbmZpZyk7XG5cdH1cblxufVxuIl19