/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Command } from '@generic-ui/hermes';
export class SetPagingCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} payload
     */
    constructor(structureId, payload) {
        super(structureId, 'SetPagingCommand');
        this.structureId = structureId;
        this.payload = payload;
    }
    /**
     * @return {?}
     */
    getPagingConfig() {
        return this.payload;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetPagingCommand.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    SetPagingCommand.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXBhZ2luZy5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9wYWdpbmcvY29tbWFuZC9zZXQvc2V0LXBhZ2luZy5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLN0MsTUFBTSxPQUFPLGdCQUFpQixTQUFRLE9BQU87Ozs7O0lBRTVDLFlBQTZCLFdBQXdCLEVBQ2pDLE9BQXFCO1FBQ3hDLEtBQUssQ0FBQyxXQUFXLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUZYLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLFlBQU8sR0FBUCxPQUFPLENBQWM7SUFFekMsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztDQUVEOzs7Ozs7SUFUWSx1Q0FBeUM7Ozs7O0lBQ2xELG1DQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi8uLi9wYWdpbmctY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFNldFBhZ2luZ0NvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYXlsb2FkOiBQYWdpbmdDb25maWcpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ1NldFBhZ2luZ0NvbW1hbmQnKTtcblx0fVxuXG5cdGdldFBhZ2luZ0NvbmZpZygpOiBQYWdpbmdDb25maWcge1xuXHRcdHJldHVybiB0aGlzLnBheWxvYWQ7XG5cdH1cblxufVxuIl19