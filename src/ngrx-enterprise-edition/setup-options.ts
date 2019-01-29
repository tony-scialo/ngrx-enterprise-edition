import { Tree } from '@angular-devkit/schematics';
import { getWorkspace } from '@schematics/angular/utility/config';

import { Options } from './schema';
export function setupOptions(options: Options, host: Tree): void {
  //   const workspace = getWorkspace(host);
  //   if (!options.project) {
  //     options.project = Object.keys(workspace.projects)[0];
  //   }
  //   const project = workspace.projects[options.project];
  //   if (options.path === undefined) {
  //     const projectDirName =
  //       project.projectType === 'application' ? 'app' : 'lib';
  //     options.path = `/${project.root}/src/${projectDirName}`;
  //   }
  //   const parsedPath = parseName(options.path, options.name);
  //   options.name = parsedPath.name;
  //   options.path = parsedPath.path;
}
