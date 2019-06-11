import { PresentationCommandService } from 'structure/app/presentation/presentation-command.service';
import { PresentationDispatcher } from 'structure/domain/presentation/command/presentation.dispatcher';
import { SetColumnsCommandHandler } from 'structure/domain/presentation/command/set-columns/set-columns.command-handler';
import { PresentationQueryService } from 'structure/app/presentation/presentation-query.service';
import { PresentationRepository } from 'structure/domain/presentation/query/presentation.repository';
import { ColumnConverter } from 'structure/domain/presentation/command/column/column.converter';
import { ColumnTypeConverter } from 'structure/domain/presentation/command/column/column-type.converter';
import { ColumnDefinitionFactory } from 'structure/domain/presentation/query/definition/column-definition.factory';
import { ColumnTemplatesRepository } from 'structure/domain/presentation/query/templates/column-templates.repository';
import { ColumnTemplateFactory } from 'structure/domain/presentation/query/templates/column-template.factory';
import { PresentationConverter } from 'structure/domain/presentation/presentation.converter';
import { SetPresentationWidthCommandHandler } from 'structure/domain/presentation/command/set-width/set-presentation-width.command-handler';
import { SetPresentationResizeWidthCommandHandler } from 'structure/domain/presentation/command/resize-width/set-presentation-resize-width.command-handler';
import { SetPresentationContainerWidthCommandHandler } from 'structure/domain/presentation/command/set-container-width/set-presentation-container-width.command-handler';
export declare const presentationProviders: (typeof PresentationDispatcher | typeof PresentationCommandService | typeof PresentationRepository | typeof PresentationQueryService | typeof ColumnConverter | typeof ColumnTemplateFactory | typeof ColumnTemplatesRepository | typeof ColumnTypeConverter | typeof ColumnDefinitionFactory | typeof PresentationConverter | {
    provide: string;
    useClass: typeof SetColumnsCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof SetPresentationWidthCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof SetPresentationResizeWidthCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof SetPresentationContainerWidthCommandHandler;
    multi: boolean;
})[];
