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
  mergeWith,
  move
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { setupOptions } from './setup-options';

export function ngrxEnterpriseEdition(_options: Options): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    setupOptions(_options, tree);

    const templateSource = apply(url('./ngrx-store-templates'), [
      template({
        ...strings,
        ..._options
      }),
      move(_options.path || '')
    ]);
    const rule = chain([branchAndMerge(chain([mergeWith(templateSource)]))]);

    return rule(tree, _context);
  };
}
