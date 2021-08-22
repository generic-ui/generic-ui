/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StructureDomainEvent } from '../../../../../core/domain/structure.domain-event';
export class UniqueFilterCalculatedEvent extends StructureDomainEvent {
    /**
     * @param {?} aggregateId
     * @param {?} map
     */
    constructor(aggregateId, map) {
        super(aggregateId, map, 'UniqueFilterCalculatedEvent');
        this.map = map;
    }
    /**
     * @return {?}
     */
    getUniqueValues() {
        return this.map;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    UniqueFilterCalculatedEvent.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWZpbHRlci1jYWxjdWxhdGVkLmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvZG9tYWluL3VuaXF1ZS9jYWxjdWxhdGUvdW5pcXVlLWZpbHRlci1jYWxjdWxhdGVkLmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUV6RixNQUFNLE9BQU8sMkJBQTRCLFNBQVEsb0JBQW9COzs7OztJQUVwRSxZQUFZLFdBQXdCLEVBQ2hCLEdBQW9DO1FBQ3ZELEtBQUssQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLDZCQUE2QixDQUFDLENBQUM7UUFEcEMsUUFBRyxHQUFILEdBQUcsQ0FBaUM7SUFFeEQsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDakIsQ0FBQztDQUVEOzs7Ozs7SUFSRywwQ0FBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZSB9IGZyb20gJy4uL3VuaXF1ZS12YWx1ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5kb21haW4tZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEV2ZW50IGV4dGVuZHMgU3RydWN0dXJlRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBtYXA6IE1hcDxzdHJpbmcsIEFycmF5PFVuaXF1ZVZhbHVlPj4pIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgbWFwLCAnVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRVbmlxdWVWYWx1ZXMoKTogTWFwPHN0cmluZywgQXJyYXk8VW5pcXVlVmFsdWU+PiB7XG5cdFx0cmV0dXJuIHRoaXMubWFwO1xuXHR9XG5cbn1cbiJdfQ==