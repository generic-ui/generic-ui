import { CommandDispatcher, CoreContainer, DomainEventBus, hermesFilter, hermesTake } from '@generic-ui/hermes';
import { InitFieldsCommand } from '../../../../../../core/structure/field/src/core/init/init-fields.command';
import { FieldsInitedEvent } from '../../../../../../core/structure/field/src/core/init/fields-inited.event';
import { ColumnFieldId } from '../../../../../../core/composition/src/domain/column/field/column-field.id';
import { ColumnParams } from '../../../../../../core/composition/src/core/column/set-columns/column.params';
export class StructureColumnInputHandler {
    structureId;
    compositionId;
    columnFieldFactory;
    columnAutoConfigurator;
    compositionCommandInvoker;
    commandDispatcher = CoreContainer.resolve(CommandDispatcher);
    domainEventBus = CoreContainer.resolve(DomainEventBus);
    columns;
    constructor(structureId, compositionId, columnFieldFactory, columnAutoConfigurator, compositionCommandInvoker) {
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.columnFieldFactory = columnFieldFactory;
        this.columnAutoConfigurator = columnAutoConfigurator;
        this.compositionCommandInvoker = compositionCommandInvoker;
    }
    handle(changes) {
        let config = [];
        if (changes.columns !== undefined && changes.columns.currentValue !== undefined) {
            config = changes.columns.currentValue;
            this.columns = config;
        }
        else {
            if (this.columns === undefined && changes.source !== undefined && changes.source !== null) {
                config = this.columnAutoConfigurator.configure(changes.source.currentValue);
                this.columns = config;
            }
            else {
                return;
            }
        }
        this.compositionCommandInvoker.setGroups(config, this.compositionId);
        // prepare model
        const { columns, groups } = this.getConfigs(config);
        const fieldConfigs = this.getFieldConfigs(columns);
        // const fieldConfigs = columns as Array<FieldConfig>;
        const initCommand = new InitFieldsCommand(this.structureId, fieldConfigs);
        this.domainEventBus
            .ofEvents([
            FieldsInitedEvent
        ])
            .pipe(hermesFilter((event) => event.getAggregateId().toString() === this.structureId.toString()), hermesTake(1))
            .subscribe((event) => {
            const fields = event.getFields(), columnFieldIds = this.convertColumnFieldIds(fields), params = this.convertColumns(columns, fields, columnFieldIds);
            this.compositionCommandInvoker.setColumns(params, this.compositionId);
            // this.compositionCommandInvoker.setGroups(this.compositionId);
        });
        this.commandDispatcher.dispatch(initCommand);
    }
    getConfigs(configs) {
        let columnConfigs = [];
        const groupConfigs = [];
        for (let i = 0; i < configs.length; i += 1) {
            const config = configs[i];
            if (config.columns !== undefined) {
                groupConfigs.push(config);
                columnConfigs = columnConfigs.concat(config.columns);
            }
            else {
                columnConfigs.push(config);
            }
        }
        return {
            columns: columnConfigs,
            groups: groupConfigs
        };
    }
    getFieldConfigs(columns) {
        return columns.map((c) => {
            return {
                field: c.field,
                type: c.type,
                matcher: c.matcher,
                summaries: c.summaries,
                sorting: c.sorting
            };
        });
    }
    convertColumnFieldIds(fields) {
        if (!fields) {
            return [];
        }
        return fields.map((field) => new ColumnFieldId(field.getId().getId()));
    }
    convertColumns(columns, fields, columnFieldIds) {
        if (!columns) {
            return [];
        }
        return columns.map((column, index) => {
            const columnFieldId = columnFieldIds[index], field = fields[index];
            const columnField = this.columnFieldFactory.create(columnFieldId, field.getAccessorMethod(), field.getDataType(), field.getSearchAccessorMethod());
            return new ColumnParams(column, columnField);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbHVtbi5pbnB1dC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9zdHJ1Y3R1cmUvZ2F0ZS9jb2x1bW4vc3RydWN0dXJlLWNvbHVtbi5pbnB1dC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQWUsY0FBYyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU3SCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUU3RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUc3RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFFM0csT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhFQUE4RSxDQUFDO0FBUzVHLE1BQU0sT0FBTywyQkFBMkI7SUFRVjtJQUNUO0lBQ0E7SUFDQTtJQUNBO0lBVkgsaUJBQWlCLEdBQXNCLGFBQWEsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUVoRixjQUFjLEdBQW1CLGFBQWEsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFaEYsT0FBTyxDQUFrRDtJQUVqRSxZQUE2QixXQUF3QixFQUNqQyxhQUE0QixFQUM1QixrQkFBc0MsRUFDdEMsc0JBQThDLEVBQzlDLHlCQUErQztRQUp0QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUFzQjtJ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QUFDLFdBQVcsRUFBRSxFQUNuQixLQUFLLENBQUMsdUJBQXVCLEVBQUUsQ0FDL0IsQ0FBQztZQUVGLE9BQU8sSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO0lBRUosQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIsIENvcmVDb250YWluZXIsIERvbWFpbkV2ZW50LCBEb21haW5FdmVudEJ1cywgaGVybWVzRmlsdGVyLCBoZXJtZXNUYWtlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgSW5pdEZpZWxkc0NvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWVsZC9zcmMvY29yZS9pbml0L2luaXQtZmllbGRzLmNvbW1hbmQnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWVsZC9zcmMvYXBpL2NvbmZpZy9maWVsZC5jb25maWcnO1xuaW1wb3J0IHsgRmllbGRzSW5pdGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWVsZC9zcmMvY29yZS9pbml0L2ZpZWxkcy1pbml0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmllbGRFbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWVsZC9zcmMvZG9tYWluL2ZpZWxkL2ZpZWxkLmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9zcmMvZG9tYWluL2NvbHVtbi9maWVsZC9jb2x1bW4tZmllbGQuaWQnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnLCBNdWx0aUNvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vc3JjL2FwaS9jb2x1bW4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9jb3JlL2NvbHVtbi9zZXQtY29sdW1ucy9jb2x1bW4ucGFyYW1zJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9zcmMvYXBpL2NvbXBvc2l0aW9uLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9zcmMvYXBpL2dsb2JhbC9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb2x1bW5GaWVsZEZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9kb21haW4vY29sdW1uL2ZpZWxkL2NvbHVtLWZpZWxkLmZhY3RvcnknO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY29tcG9uZW50L3NyYy9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IFN0cnVjdHVyZUdhdGV3YXkgfSBmcm9tICcuLi9zdHJ1Y3R1cmUuZ2F0ZXdheSc7XG5pbXBvcnQgeyBDb2x1bW5BdXRvQ29uZmlndXJhdG9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9zcmMvYXBpL2NvbHVtbi9hdXRvL2NvbHVtbi1hdXRvLmNvbmZpZ3VyYXRvcic7XG5cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbklucHV0SGFuZGxlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIgPSBDb3JlQ29udGFpbmVyLnJlc29sdmUoQ29tbWFuZERpc3BhdGNoZXIpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzID0gQ29yZUNvbnRhaW5lci5yZXNvbHZlKERvbWFpbkV2ZW50QnVzKTtcblxuXHRwcml2YXRlIGNvbHVtbnM6IFJlYWRvbmx5QXJyYXk8Q29sdW1uQ29uZmlnIHwgTXVsdGlDb2x1bW5Db25maWc+O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uRmllbGRGYWN0b3J5OiBDb2x1bW5GaWVsZEZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uQXV0b0NvbmZpZ3VyYXRvcjogQ29sdW1uQXV0b0NvbmZpZ3VyYXRvcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyOiBDb21wb3NpdGlvblB1Ymxpc2hlcikge1xuXHR9XG5cblx0aGFuZGxlKGNoYW5nZXM6IE5nQ2hhbmdlczxTdHJ1Y3R1cmVHYXRld2F5PiB8IGFueSk6IHZvaWQge1xuXG5cdFx0bGV0IGNvbmZpZzogUmVhZG9ubHlBcnJheTxDb2x1bW5Db25maWcgfCBNdWx0aUNvbHVtbkNvbmZpZz4gPSBbXTtcblxuXHRcdGlmIChjaGFuZ2VzLmNvbHVtbnMgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLmNvbHVtbnMuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbmZpZyA9IGNoYW5nZXMuY29sdW1ucy5jdXJyZW50VmFsdWU7XG5cdFx0XHR0aGlzLmNvbHVtbnMgPSBjb25maWc7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0aWYgKHRoaXMuY29sdW1ucyA9PT0gdW5kZWZpbmVkICYmIGNoYW5nZXMuc291cmNlICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5zb3VyY2UgIT09IG51bGwpIHtcblx0XHRcdFx0Y29uZmlnID0gdGhpcy5jb2x1bW5BdXRvQ29uZmlndXJhdG9yLmNvbmZpZ3VyZShjaGFuZ2VzLnNvdXJjZS5jdXJyZW50VmFsdWUpO1xuXHRcdFx0XHR0aGlzLmNvbHVtbnMgPSBjb25maWc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLnNldEdyb3Vwcyhjb25maWcsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cblx0XHQvLyBwcmVwYXJlIG1vZGVsXG5cdFx0Y29uc3QgeyBjb2x1bW5zLCBncm91cHMgfSA9IHRoaXMuZ2V0Q29uZmlncyhjb25maWcpO1xuXG5cdFx0Y29uc3QgZmllbGRDb25maWdzID0gdGhpcy5nZXRGaWVsZENvbmZpZ3MoY29sdW1ucyk7XG5cblx0XHQvLyBjb25zdCBmaWVsZENvbmZpZ3MgPSBjb2x1bW5zIGFzIEFycmF5PEZpZWxkQ29uZmlnPjtcblxuXHRcdGNvbnN0IGluaXRDb21tYW5kID0gbmV3IEluaXRGaWVsZHNDb21tYW5kKHRoaXMuc3RydWN0dXJlSWQsIGZpZWxkQ29uZmlncyk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdFx0XHQub2ZFdmVudHMoW1xuXHRcdFx0XHRcdEZpZWxkc0luaXRlZEV2ZW50IGFzIGFueVxuXHRcdFx0XHRdXG5cdFx0XHQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0aGVybWVzRmlsdGVyKChldmVudDogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+KSA9PiBldmVudC5nZXRBZ2dyZWdhdGVJZCgpLnRvU3RyaW5nKCkgPT09IHRoaXMuc3RydWN0dXJlSWQudG9TdHJpbmcoKSksXG5cdFx0XHRcdGhlcm1lc1Rha2UoMSlcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBGaWVsZHNJbml0ZWRFdmVudCkgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGZpZWxkcyA9IGV2ZW50LmdldEZpZWxkcygpLFxuXHRcdFx0XHRcdGNvbHVtbkZpZWxkSWRzID0gdGhpcy5jb252ZXJ0Q29sdW1uRmllbGRJZHMoZmllbGRzKSxcblx0XHRcdFx0XHRwYXJhbXMgPSB0aGlzLmNvbnZlcnRDb2x1bW5zKGNvbHVtbnMsIGZpZWxkcywgY29sdW1uRmllbGRJZHMpO1xuXG5cdFx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kSW52b2tlci5zZXRDb2x1bW5zKHBhcmFtcywgdGhpcy5jb21wb3NpdGlvbklkKTtcblxuXHRcdFx0XHQvLyB0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIuc2V0R3JvdXBzKHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2goaW5pdENvbW1hbmQpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRDb25maWdzKGNvbmZpZ3M6IFJlYWRvbmx5QXJyYXk8Q29sdW1uQ29uZmlnIHwgTXVsdGlDb2x1bW5Db25maWc+KTogeyBjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+LCBncm91cHM6IEFycmF5PE11bHRpQ29sdW1uQ29uZmlnPiB9IHtcblxuXHRcdGxldCBjb2x1bW5Db25maWdzOiBBcnJheTxDb2x1bW5Db25maWc+ID0gW107XG5cblx0XHRjb25zdCBncm91cENvbmZpZ3M6IEFycmF5PE11bHRpQ29sdW1uQ29uZmlnPiA9IFtdO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb25maWdzLmxlbmd0aDsgaSArPSAxKSB7XG5cblx0XHRcdGNvbnN0IGNvbmZpZyA9IGNvbmZpZ3NbaV07XG5cblx0XHRcdGlmICgoY29uZmlnIGFzIE11bHRpQ29sdW1uQ29uZmlnKS5jb2x1bW5zICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Z3JvdXBDb25maWdzLnB1c2goY29uZmlnKTtcblx0XHRcdFx0Y29sdW1uQ29uZmlncyA9IGNvbHVtbkNvbmZpZ3MuY29uY2F0KChjb25maWcgYXMgTXVsdGlDb2x1bW5Db25maWcpLmNvbHVtbnMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29sdW1uQ29uZmlncy5wdXNoKGNvbmZpZyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbHVtbnM6IGNvbHVtbkNvbmZpZ3MsXG5cdFx0XHRncm91cHM6IGdyb3VwQ29uZmlnc1xuXHRcdH07XG5cdH1cblxuXHRwcml2YXRlIGdldEZpZWxkQ29uZmlncyhjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+KTogQXJyYXk8RmllbGRDb25maWc+IHtcblxuXHRcdHJldHVybiBjb2x1bW5zLm1hcCgoYykgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZmllbGQ6IGMuZmllbGQgYXMgc3RyaW5nLFxuXHRcdFx0XHR0eXBlOiBjLnR5cGUsXG5cdFx0XHRcdG1hdGNoZXI6IGMubWF0Y2hlcixcblx0XHRcdFx0c3VtbWFyaWVzOiBjLnN1bW1hcmllcyxcblx0XHRcdFx0c29ydGluZzogYy5zb3J0aW5nXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0Q29sdW1uRmllbGRJZHMoZmllbGRzOiBBcnJheTxGaWVsZEVudGl0eT4pOiBBcnJheTxDb2x1bW5GaWVsZElkPiB7XG5cblx0XHRpZiAoIWZpZWxkcykge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdHJldHVybiBmaWVsZHMubWFwKChmaWVsZDogRmllbGRFbnRpdHkpID0+IG5ldyBDb2x1bW5GaWVsZElkKGZpZWxkLmdldElkKCkuZ2V0SWQoKSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0Q29sdW1ucyhjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+LCBmaWVsZHM6IEFycmF5PEZpZWxkRW50aXR5PiwgY29sdW1uRmllbGRJZHM6IEFycmF5PENvbHVtbkZpZWxkSWQ+KTogQXJyYXk8Q29sdW1uUGFyYW1zPiB7XG5cblx0XHRpZiAoIWNvbHVtbnMpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sdW1ucy5tYXAoKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBpbmRleDogbnVtYmVyKSA9PiB7XG5cblx0XHRcdGNvbnN0IGNvbHVtbkZpZWxkSWQgPSBjb2x1bW5GaWVsZElkc1tpbmRleF0sXG5cdFx0XHRcdGZpZWxkID0gZmllbGRzW2luZGV4XTtcblxuXHRcdFx0Y29uc3QgY29sdW1uRmllbGQgPSB0aGlzLmNvbHVtbkZpZWxkRmFjdG9yeS5jcmVhdGUoXG5cdFx0XHRcdGNvbHVtbkZpZWxkSWQsXG5cdFx0XHRcdGZpZWxkLmdldEFjY2Vzc29yTWV0aG9kKCksXG5cdFx0XHRcdGZpZWxkLmdldERhdGFUeXBlKCksXG5cdFx0XHRcdGZpZWxkLmdldFNlYXJjaEFjY2Vzc29yTWV0aG9kKClcblx0XHRcdCk7XG5cblx0XHRcdHJldHVybiBuZXcgQ29sdW1uUGFyYW1zKGNvbHVtbiwgY29sdW1uRmllbGQpO1xuXHRcdH0pO1xuXG5cdH1cblxufVxuIl19