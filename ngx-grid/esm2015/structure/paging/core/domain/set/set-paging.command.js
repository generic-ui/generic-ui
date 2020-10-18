/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StructureCommand } from '../../../../core/domain/structure.command';
export class SetPagingCommand extends StructureCommand {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXBhZ2luZy5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvcGFnaW5nL2NvcmUvZG9tYWluL3NldC9zZXQtcGFnaW5nLmNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRTdFLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxnQkFBZ0I7Ozs7O0lBRXJELFlBQVksV0FBd0IsRUFDaEIsTUFBb0I7UUFDdkMsS0FBSyxDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRHBCLFdBQU0sR0FBTixNQUFNLENBQWM7SUFFeEMsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztDQUVEOzs7Ozs7SUFSRyxrQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi8uLi9hcGkvcGFnaW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmNvbW1hbmQnO1xuXG5leHBvcnQgY2xhc3MgU2V0UGFnaW5nQ29tbWFuZCBleHRlbmRzIFN0cnVjdHVyZUNvbW1hbmQge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb25maWc6IFBhZ2luZ0NvbmZpZykge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnU2V0UGFnaW5nQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0UGFnaW5nQ29uZmlnKCk6IFBhZ2luZ0NvbmZpZyB7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnO1xuXHR9XG5cbn1cbiJdfQ==