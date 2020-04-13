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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5hcmNoaXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2hlYWRlci9tZW51L2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnLmFyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUczRTtJQUNzRCw0REFBa0M7SUFFdkY7ZUFDQyxrQkFBTSx5QkFBeUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELHFEQUFVOzs7O0lBQVYsVUFBVyxNQUF3Qjs7WUFFNUIsVUFBVSxHQUFHLHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFFL0QsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2QixDQUFDOztnQkFaRCxVQUFVOzs7O0lBY1gsdUNBQUM7Q0FBQSxBQWRELENBQ3NELE9BQU8sR0FhNUQ7U0FiWSxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFyY2hpdmUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnJztcbmltcG9ydCB7IENvbHVtbk1lbnVDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi91aS1hcGkvY29sdW1uLW1lbnUtY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlIGV4dGVuZHMgQXJjaGl2ZTxTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnPiB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZy5kZWZhdWx0KCkpO1xuXHR9XG5cblx0bmV4dENvbmZpZyhjb25maWc6IENvbHVtbk1lbnVDb25maWcpOiB2b2lkIHtcblxuXHRcdGNvbnN0IG1lbnVDb25maWcgPSBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnLmZyb21Db25maWcoY29uZmlnKTtcblxuXHRcdHRoaXMubmV4dChtZW51Q29uZmlnKTtcblx0fVxuXG59XG4iXX0=