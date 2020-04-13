/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateEvent } from '@generic-ui/hermes';
import { RowColoringSetEvent } from './row-coloring-set.event';
export class RowColoringSetAggregateEvent extends AggregateEvent {
    /**
     * @param {?} schemaId
     * @param {?} rowColoring
     */
    constructor(schemaId, rowColoring) {
        super(schemaId, 'RowColoringSetEvent');
        this.rowColoring = rowColoring;
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new RowColoringSetEvent(this.getAggregateId(), this.rowColoring);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    RowColoringSetAggregateEvent.prototype.rowColoring;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWNvbG9yaW5nLXNldC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zY2hlbWEvZG9tYWluL2NvbG9yaW5nL3Jvdy1jb2xvcmluZy1zZXQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFlLE1BQU0sb0JBQW9CLENBQUM7QUFJakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHL0QsTUFBTSxPQUFPLDRCQUE2QixTQUFRLGNBQXdCOzs7OztJQUV6RSxZQUFZLFFBQWtCLEVBQ1YsV0FBOEI7UUFDakQsS0FBSyxDQUFDLFFBQVEsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBRHBCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtJQUVsRCxDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Q0FFRDs7Ozs7O0lBUkcsbURBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQsIERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nU2V0RXZlbnQgfSBmcm9tICcuL3Jvdy1jb2xvcmluZy1zZXQuZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBSb3dDb2xvcmluZ1NldEFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgQWdncmVnYXRlRXZlbnQ8U2NoZW1hSWQ+IHtcblxuXHRjb25zdHJ1Y3RvcihzY2hlbWFJZDogU2NoZW1hSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcm93Q29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nKSB7XG5cdFx0c3VwZXIoc2NoZW1hSWQsICdSb3dDb2xvcmluZ1NldEV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PFNjaGVtYUlkPiB7XG5cdFx0cmV0dXJuIG5ldyBSb3dDb2xvcmluZ1NldEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSwgdGhpcy5yb3dDb2xvcmluZyk7XG5cdH1cblxufVxuIl19