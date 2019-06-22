import { OriginDispatcher } from 'structure/domain/origin/command/origin.dispatcher';
import { OriginCommandService } from 'structure/app/origin/origin-command.service';
import { OriginQueryService } from 'structure/app/origin/origin-query.service';
import { SetOriginCommandHandler } from 'structure/domain/origin/command/set/set-origin.command-handler';
import { OriginRepository } from 'structure/domain/origin/query/origin.repository';
import { OriginConverter } from 'structure/domain/origin/origin.converter';
export declare const originProviders: (typeof OriginDispatcher | typeof OriginCommandService | typeof OriginRepository | typeof OriginQueryService | typeof OriginConverter | {
    provide: string;
    useClass: typeof SetOriginCommandHandler;
    multi: boolean;
})[];
