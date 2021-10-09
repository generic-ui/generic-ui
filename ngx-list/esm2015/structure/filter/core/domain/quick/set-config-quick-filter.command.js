/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StructureCommand } from '../../../../core/domain/structure.command';
export class SetConfigQuickFilterCommand extends StructureCommand {
    /**
     * @param {?} structureId
     * @param {?} quickFiltersConfig
     */
    constructor(structureId, quickFiltersConfig) {
        super(structureId, 'SetConfigQuickFilterCommand');
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
    /**
     * @type {?}
     * @private
     */
    SetConfigQuickFilterCommand.prototype.quickFiltersConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbmZpZy1xdWljay1maWx0ZXIuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9jb3JlL2RvbWFpbi9xdWljay9zZXQtY29uZmlnLXF1aWNrLWZpbHRlci5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUc3RSxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsZ0JBQWdCOzs7OztJQUVoRSxZQUFZLFdBQXdCLEVBQ2hCLGtCQUFzQztRQUN6RCxLQUFLLENBQUMsV0FBVyxFQUFFLDZCQUE2QixDQUFDLENBQUM7UUFEL0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUUxRCxDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2hDLENBQUM7Q0FFRDs7Ozs7O0lBUkcseURBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUXVpY2tGaWx0ZXJzQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXBpL3F1aWNrLWZpbHRlcnMuY29uZmlnJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5jb21tYW5kJztcblxuXG5leHBvcnQgY2xhc3MgU2V0Q29uZmlnUXVpY2tGaWx0ZXJDb21tYW5kIGV4dGVuZHMgU3RydWN0dXJlQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHF1aWNrRmlsdGVyc0NvbmZpZzogUXVpY2tGaWx0ZXJzQ29uZmlnKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdTZXRDb25maWdRdWlja0ZpbHRlckNvbW1hbmQnKTtcblx0fVxuXG5cdGdldENvbmZpZygpOiBRdWlja0ZpbHRlcnNDb25maWcge1xuXHRcdHJldHVybiB0aGlzLnF1aWNrRmlsdGVyc0NvbmZpZztcblx0fVxuXG59XG4iXX0=