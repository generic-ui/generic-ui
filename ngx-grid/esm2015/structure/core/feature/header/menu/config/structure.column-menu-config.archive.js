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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5hcmNoaXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9mZWF0dXJlL2hlYWRlci9tZW51L2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnLmFyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTdDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBSTNFLE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSxPQUFrQztJQUV2RjtRQUNDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE1BQXdCOztjQUU1QixVQUFVLEdBQUcseUJBQXlCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUUvRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7OztZQVpELFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFyY2hpdmUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnJztcbmltcG9ydCB7IENvbHVtbk1lbnVDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4tYXBpL2NvbHVtbi1tZW51LWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZSBleHRlbmRzIEFyY2hpdmU8U3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZz4ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcuZGVmYXVsdCgpKTtcblx0fVxuXG5cdG5leHRDb25maWcoY29uZmlnOiBDb2x1bW5NZW51Q29uZmlnKTogdm9pZCB7XG5cblx0XHRjb25zdCBtZW51Q29uZmlnID0gU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZy5mcm9tQ29uZmlnKGNvbmZpZyk7XG5cblx0XHR0aGlzLm5leHQobWVudUNvbmZpZyk7XG5cdH1cblxufVxuIl19