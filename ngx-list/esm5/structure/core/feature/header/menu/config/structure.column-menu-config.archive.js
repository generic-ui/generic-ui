/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Archive } from '@generic-ui/hermes';
import { StructureColumnMenuConfig } from './structure.column-menu-config';
var StructureColumnMenuConfigArchive = /** @class */ (function (_super) {
    tslib_1.__extends(StructureColumnMenuConfigArchive, _super);
    function StructureColumnMenuConfigArchive() {
        return _super.call(this, StructureColumnMenuConfig.default()) || this;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    StructureColumnMenuConfigArchive.prototype.nextConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var menuConfig = StructureColumnMenuConfig.fromConfig(config);
        this.next(menuConfig);
    };
    StructureColumnMenuConfigArchive.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureColumnMenuConfigArchive.ctorParameters = function () { return []; };
    return StructureColumnMenuConfigArchive;
}(Archive));
export { StructureColumnMenuConfigArchive };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5hcmNoaXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9mZWF0dXJlL2hlYWRlci9tZW51L2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnLmFyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUczRTtJQUNzRCw0REFBa0M7SUFFdkY7ZUFDQyxrQkFBTSx5QkFBeUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELHFEQUFVOzs7O0lBQVYsVUFBVyxNQUF3Qjs7WUFFNUIsVUFBVSxHQUFHLHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFFL0QsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2QixDQUFDOztnQkFaRCxVQUFVOzs7O0lBY1gsdUNBQUM7Q0FBQSxBQWRELENBQ3NELE9BQU8sR0FhNUQ7U0FiWSxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFyY2hpdmUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnJztcbmltcG9ydCB7IENvbHVtbk1lbnVDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4tYXBpL2NvbHVtbi1tZW51LWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZSBleHRlbmRzIEFyY2hpdmU8U3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZz4ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcuZGVmYXVsdCgpKTtcblx0fVxuXG5cdG5leHRDb25maWcoY29uZmlnOiBDb2x1bW5NZW51Q29uZmlnKTogdm9pZCB7XG5cblx0XHRjb25zdCBtZW51Q29uZmlnID0gU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZy5mcm9tQ29uZmlnKGNvbmZpZyk7XG5cblx0XHR0aGlzLm5leHQobWVudUNvbmZpZyk7XG5cdH1cblxufVxuIl19