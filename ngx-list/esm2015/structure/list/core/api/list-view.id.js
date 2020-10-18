/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateId } from '@generic-ui/hermes';
import { CompositionReadModelRootId } from '../../../../composition/core/domain-read/composition.read-model-root-id';
export class ListViewId extends AggregateId {
    /**
     * @param {?} id
     */
    constructor(id) {
        super(id);
    }
    /**
     * @return {?}
     */
    toReadModelRootId() {
        return new CompositionReadModelRootId(this.getId());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmlkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9jb3JlL2FwaS9saXN0LXZpZXcuaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFFbEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFFckgsTUFBTSxPQUFPLFVBQVcsU0FBUSxXQUFXOzs7O0lBRTFDLFlBQVksRUFBVTtRQUNyQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWCxDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2hCLE9BQU8sSUFBSSwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCwgUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2NvbXBvc2l0aW9uLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5cbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0lkIGV4dGVuZHMgQWdncmVnYXRlSWQge1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcpIHtcblx0XHRzdXBlcihpZCk7XG5cdH1cblxuXHR0b1JlYWRNb2RlbFJvb3RJZCgpOiBSZWFkTW9kZWxSb290SWQge1xuXHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290SWQodGhpcy5nZXRJZCgpKTtcblx0fVxufVxuIl19