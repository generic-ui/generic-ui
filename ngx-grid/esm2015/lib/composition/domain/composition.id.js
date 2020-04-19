/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateId } from '@generic-ui/hermes';
import { CompositionReadModelRootId } from '../feature-api/read/composition.read-model-root-id';
export class CompositionId extends AggregateId {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uaWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tcG9zaXRpb24uaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFDbEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFaEcsTUFBTSxPQUFPLGFBQWMsU0FBUSxXQUFXOzs7O0lBRTdDLFlBQVksRUFBVTtRQUNyQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWCxDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2hCLE9BQU8sSUFBSSwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCwgUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vZmVhdHVyZS1hcGkvcmVhZC9jb21wb3NpdGlvbi5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25JZCBleHRlbmRzIEFnZ3JlZ2F0ZUlkIHtcblxuXHRjb25zdHJ1Y3RvcihpZDogc3RyaW5nKSB7XG5cdFx0c3VwZXIoaWQpO1xuXHR9XG5cblx0dG9SZWFkTW9kZWxSb290SWQoKTogUmVhZE1vZGVsUm9vdElkIHtcblx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdElkKHRoaXMuZ2V0SWQoKSk7XG5cdH1cblxufVxuIl19