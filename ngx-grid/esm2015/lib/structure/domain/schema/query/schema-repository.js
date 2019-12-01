/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { StructureRepository } from '../../structure/query/structure.repository';
export class SchemaRepository {
    /**
     * @param {?} structureRepository
     */
    constructor(structureRepository) {
        this.structureRepository = structureRepository;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    select(structureId) {
        return this.structureRepository
            .select(structureId)
            .pipe(filter((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => structure.getId().toString() === structureId.toString())), map((/**
         * @param {?} structure
         * @return {?}
         */
        (structure) => structure.getSchema())));
    }
}
SchemaRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaRepository.ctorParameters = () => [
    { type: StructureRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaRepository.prototype.structureRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3NjaGVtYS9xdWVyeS9zY2hlbWEtcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBT2pGLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFFNUIsWUFBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDNUQsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsV0FBd0I7UUFFOUIsT0FBTyxJQUFJLENBQUMsbUJBQW1CO2FBQ3pCLE1BQU0sQ0FBQyxXQUFXLENBQUM7YUFDbkIsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxDQUFDLFNBQW9CLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUMsRUFDekYsR0FBRzs7OztRQUFDLENBQUMsU0FBb0IsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFDLENBQ3BELENBQUM7SUFDUixDQUFDOzs7WUFkRCxVQUFVOzs7O1lBTkYsbUJBQW1COzs7Ozs7O0lBU2YsK0NBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlL3F1ZXJ5L3N0cnVjdHVyZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcbmltcG9ydCB7IFN0cnVjdHVyZSB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS9xdWVyeS9zdHJ1Y3R1cmUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2hlbWFSZXBvc2l0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVJlcG9zaXRvcnk6IFN0cnVjdHVyZVJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdHNlbGVjdChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPFNjaGVtYT4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAuc2VsZWN0KHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKHN0cnVjdHVyZTogU3RydWN0dXJlKSA9PiBzdHJ1Y3R1cmUuZ2V0SWQoKS50b1N0cmluZygpID09PSBzdHJ1Y3R1cmVJZC50b1N0cmluZygpKSxcblx0XHRcdFx0XHQgICBtYXAoKHN0cnVjdHVyZTogU3RydWN0dXJlKSA9PiBzdHJ1Y3R1cmUuZ2V0U2NoZW1hKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19