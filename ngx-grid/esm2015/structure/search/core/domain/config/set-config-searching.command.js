/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StructureCommand } from '../../../../core/domain/structure.command';
export class SetConfigSearchingCommand extends StructureCommand {
    /**
     * @param {?} structureId
     * @param {?} searchConfig
     */
    constructor(structureId, searchConfig) {
        super(structureId, 'SetConfigSearchingCommand');
        this.searchConfig = searchConfig;
    }
    /**
     * @return {?}
     */
    getConfig() {
        return this.searchConfig;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetConfigSearchingCommand.prototype.searchConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbmZpZy1zZWFyY2hpbmcuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NlYXJjaC9jb3JlL2RvbWFpbi9jb25maWcvc2V0LWNvbmZpZy1zZWFyY2hpbmcuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFHN0UsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGdCQUFnQjs7Ozs7SUFFOUQsWUFBWSxXQUF3QixFQUNoQixZQUEwQjtRQUM3QyxLQUFLLENBQUMsV0FBVyxFQUFFLDJCQUEyQixDQUFDLENBQUM7UUFEN0IsaUJBQVksR0FBWixZQUFZLENBQWM7SUFFOUMsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQztDQUVEOzs7Ozs7SUFSRyxpREFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi9hcGkvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmNvbW1hbmQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kIGV4dGVuZHMgU3RydWN0dXJlQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaENvbmZpZzogU2VhcmNoQ29uZmlnKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRDb25maWcoKTogU2VhcmNoQ29uZmlnIHtcblx0XHRyZXR1cm4gdGhpcy5zZWFyY2hDb25maWc7XG5cdH1cblxufVxuIl19