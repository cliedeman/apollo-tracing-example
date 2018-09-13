import {GraphQLResolveInfo, ExecutionArgs, DocumentNode} from 'graphql';
import {
  GraphQLExtension,
  GraphQLResponse,
  EndHandler,
} from 'graphql-extensions';
import {Request} from 'apollo-server-env';

export default class ApolloTracingExtension implements GraphQLExtension<any> {
  public requestDidStart?(o: {
    request: Request;
    queryString?: string;
    parsedQuery?: DocumentNode;
    operationName?: string;
    variables?: {[key: string]: any};
    persistedQueryHit?: boolean;
    persistedQueryRegister?: boolean;
  }): EndHandler {
    return (...errors: Array<Error>) => {};
  }
  public executionDidStart?(o: {executionArgs: ExecutionArgs}): EndHandler {
    return (...errors: Array<Error>) => {};
  }

  public willResolveField?(
    source: any,
    args: {[argName: string]: any},
    context: any,
    info: GraphQLResolveInfo
  ): (error: Error | null, result?: any) => void {
    // console.log(`willResolveField start ${info.fieldName}`);

    console.log('Updating Context', info.fieldName);
    context.field = info.fieldName;

    return (err: Error | null, result?: any) => {
      // console.log(`willResolveField done ${info.fieldName}`);
    };
  }
}
