/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Command } from '@generic-ui/hermes';
export class SetPagingCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} config
     */
    constructor(structureId, config) {
        super(structureId, 'SetPagingCommand');
        this.config = config;
    }
    /**
     * @return {?}
     */
    getPagingConfig() {
        return this.config;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetPagingCommand.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXBhZ2luZy5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9wYWdpbmcvY29tbWFuZC9zZXQvc2V0LXBhZ2luZy5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLN0MsTUFBTSxPQUFPLGdCQUFpQixTQUFRLE9BQU87Ozs7O0lBRTVDLFlBQVksV0FBd0IsRUFDaEIsTUFBb0I7UUFDdkMsS0FBSyxDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRHBCLFdBQU0sR0FBTixNQUFNLENBQWM7SUFFeEMsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztDQUVEOzs7Ozs7SUFSRyxrQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vcGFnaW5nLWNvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBTZXRQYWdpbmdDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbmZpZzogUGFnaW5nQ29uZmlnKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdTZXRQYWdpbmdDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRQYWdpbmdDb25maWcoKTogUGFnaW5nQ29uZmlnIHtcblx0XHRyZXR1cm4gdGhpcy5jb25maWc7XG5cdH1cblxufVxuIl19