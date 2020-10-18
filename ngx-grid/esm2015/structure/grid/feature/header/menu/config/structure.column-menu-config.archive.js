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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5hcmNoaXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2hlYWRlci9tZW51L2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnLmFyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTdDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBSTNFLE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSxPQUFrQztJQUV2RjtRQUNDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE1BQXdCOztjQUU1QixVQUFVLEdBQUcseUJBQXlCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUUvRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7OztZQVpELFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFyY2hpdmUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnJztcbmltcG9ydCB7IENvbHVtbk1lbnVDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9jb2x1bW4tbWVudS1jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUgZXh0ZW5kcyBBcmNoaXZlPFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWc+IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnLmRlZmF1bHQoKSk7XG5cdH1cblxuXHRuZXh0Q29uZmlnKGNvbmZpZzogQ29sdW1uTWVudUNvbmZpZyk6IHZvaWQge1xuXG5cdFx0Y29uc3QgbWVudUNvbmZpZyA9IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcuZnJvbUNvbmZpZyhjb25maWcpO1xuXG5cdFx0dGhpcy5uZXh0KG1lbnVDb25maWcpO1xuXHR9XG5cbn1cbiJdfQ==