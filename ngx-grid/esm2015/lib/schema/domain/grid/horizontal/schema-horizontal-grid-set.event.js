/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainEvent } from '@generic-ui/hermes';
export class SchemaHorizontalGridSetEvent extends DomainEvent {
    /**
     * @param {?} schemaId
     * @param {?} horizontalGrid
     */
    constructor(schemaId, horizontalGrid) {
        super(schemaId, 'SchemaHorizontalGridSetEvent');
        this.horizontalGrid = horizontalGrid;
    }
    /**
     * @return {?}
     */
    getHorizontalGrid() {
        return this.horizontalGrid;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaHorizontalGridSetEvent.prototype.horizontalGrid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWhvcml6b250YWwtZ3JpZC1zZXQuZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zY2hlbWEvZG9tYWluL2dyaWQvaG9yaXpvbnRhbC9zY2hlbWEtaG9yaXpvbnRhbC1ncmlkLXNldC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSWpELE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxXQUFxQjs7Ozs7SUFFdEUsWUFBWSxRQUFrQixFQUNWLGNBQXVCO1FBQzFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsOEJBQThCLENBQUMsQ0FBQztRQUQ3QixtQkFBYyxHQUFkLGNBQWMsQ0FBUztJQUUzQyxDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDO0NBQ0Q7Ozs7OztJQVBHLHNEQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi8uLi9zY2hlbWEuaWQnO1xuXG5leHBvcnQgY2xhc3MgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCBleHRlbmRzIERvbWFpbkV2ZW50PFNjaGVtYUlkPiB7XG5cblx0Y29uc3RydWN0b3Ioc2NoZW1hSWQ6IFNjaGVtYUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGhvcml6b250YWxHcmlkOiBib29sZWFuKSB7XG5cdFx0c3VwZXIoc2NoZW1hSWQsICdTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRIb3Jpem9udGFsR3JpZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5ob3Jpem9udGFsR3JpZDtcblx0fVxufVxuIl19