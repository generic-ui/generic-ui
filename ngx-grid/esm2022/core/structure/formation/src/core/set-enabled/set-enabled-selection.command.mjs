import { StructureCommand } from '../../../../structure-core/src/core/structure.command';
export class SetEnabledSelectionCommand extends StructureCommand {
    enabled;
    constructor(structureId, enabled) {
        super(structureId, 'SetEnabledSelectionCommand');
        this.enabled = enabled;
    }
    isEnabled() {
        return this.enabled;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWVuYWJsZWQtc2VsZWN0aW9uLmNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvY29yZS9zZXQtZW5hYmxlZC9zZXQtZW5hYmxlZC1zZWxlY3Rpb24uY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUV6RixNQUFNLE9BQU8sMEJBQTJCLFNBQVEsZ0JBQWdCO0lBRzNDO0lBRHBCLFlBQVksV0FBd0IsRUFDaEIsT0FBZ0I7UUFDbkMsS0FBSyxDQUFDLFdBQVcsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1FBRDlCLFlBQU8sR0FBUCxPQUFPLENBQVM7SUFFcEMsQ0FBQztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL3NyYy9jb3JlL3N0cnVjdHVyZS5jb21tYW5kJztcblxuZXhwb3J0IGNsYXNzIFNldEVuYWJsZWRTZWxlY3Rpb25Db21tYW5kIGV4dGVuZHMgU3RydWN0dXJlQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW4pIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ1NldEVuYWJsZWRTZWxlY3Rpb25Db21tYW5kJyk7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZDtcblx0fVxuXG59XG4iXX0=