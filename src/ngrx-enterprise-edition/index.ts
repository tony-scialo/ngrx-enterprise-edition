import { Options } from './schema';
import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  url,
  template,
  chain,
  branchAndMerge,
  mergeWith
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

export function ngrxEnterpriseEdition(_options: Options): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const templateSource = apply(url('./ngrx-store-templates'), [
      template({
        ...strings,
        ..._options
      })
    ]);
    const rule = chain([branchAndMerge(chain([mergeWith(templateSource)]))]);

    return rule(tree, _context);
  };
}
