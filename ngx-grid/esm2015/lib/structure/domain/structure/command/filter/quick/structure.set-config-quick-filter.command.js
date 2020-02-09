/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Command } from '@generic-ui/hermes';
export class StructureSetConfigQuickFilterCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} quickFiltersConfig
     */
    constructor(structureId, quickFiltersConfig) {
        super(structureId, 'StructureSetConfigQuickFilterCommand');
        this.structureId = structureId;
        this.quickFiltersConfig = quickFiltersConfig;
    }
    /**
     * @return {?}
     */
    getConfig() {
        return this.quickFiltersConfig;
    }
}
if (false) {
    /** @type {?} */
    StructureSetConfigQuickFilterCommand.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureSetConfigQuickFilterCommand.prototype.quickFiltersConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNldC1jb25maWctcXVpY2stZmlsdGVyLmNvbW1hbmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpbHRlci9xdWljay9zdHJ1Y3R1cmUuc2V0LWNvbmZpZy1xdWljay1maWx0ZXIuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTTdDLE1BQU0sT0FBTyxvQ0FBcUMsU0FBUSxPQUFPOzs7OztJQUVoRSxZQUE0QixXQUF3QixFQUNoQyxrQkFBc0M7UUFDekQsS0FBSyxDQUFDLFdBQVcsRUFBRSxzQ0FBc0MsQ0FBQyxDQUFDO1FBRmhDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2hDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFFMUQsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNoQyxDQUFDO0NBRUQ7OztJQVRZLDJEQUF3Qzs7Ozs7SUFDakQsa0VBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFF1aWNrRmlsdGVyc0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvZmlsdGVyL3F1aWNrLWZpbHRlcnMuY29uZmlnJztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU2V0Q29uZmlnUXVpY2tGaWx0ZXJDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBxdWlja0ZpbHRlcnNDb25maWc6IFF1aWNrRmlsdGVyc0NvbmZpZykge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnU3RydWN0dXJlU2V0Q29uZmlnUXVpY2tGaWx0ZXJDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRDb25maWcoKTogUXVpY2tGaWx0ZXJzQ29uZmlnIHtcblx0XHRyZXR1cm4gdGhpcy5xdWlja0ZpbHRlcnNDb25maWc7XG5cdH1cblxufVxuIl19