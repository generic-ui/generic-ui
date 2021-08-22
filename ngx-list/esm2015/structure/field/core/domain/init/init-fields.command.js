/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StructureCommand } from '../../../../core/domain/structure.command';
export class InitFieldsCommand extends StructureCommand {
    /**
     * @param {?} structureId
     * @param {?} fieldConfigs
     */
    constructor(structureId, fieldConfigs) {
        super(structureId, 'InitFieldsCommand');
        this.fieldConfigs = fieldConfigs;
    }
    /**
     * @return {?}
     */
    getFieldConfigs() {
        return this.fieldConfigs;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    InitFieldsCommand.prototype.fieldConfigs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1maWVsZHMuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2NvcmUvZG9tYWluL2luaXQvaW5pdC1maWVsZHMuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFHN0UsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGdCQUFnQjs7Ozs7SUFFdEQsWUFBWSxXQUF3QixFQUNoQixZQUFnQztRQUNuRCxLQUFLLENBQUMsV0FBVyxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFEckIsaUJBQVksR0FBWixZQUFZLENBQW9CO0lBRXBELENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Q0FFRDs7Ozs7O0lBUkcseUNBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi9hcGkvZmllbGQuY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuY29tbWFuZCc7XG5cblxuZXhwb3J0IGNsYXNzIEluaXRGaWVsZHNDb21tYW5kIGV4dGVuZHMgU3RydWN0dXJlQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkQ29uZmlnczogQXJyYXk8RmllbGRDb25maWc+KSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdJbml0RmllbGRzQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0RmllbGRDb25maWdzKCk6IEFycmF5PEZpZWxkQ29uZmlnPiB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGRDb25maWdzO1xuXHR9XG5cbn1cbiJdfQ==