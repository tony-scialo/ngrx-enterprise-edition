import { getWorkspace } from '@schematics/angular/utility/config';
import { parseName } from '@schematics/angular/utility/parse-name';
import { Tree } from '@angular-devkit/schematics';
import { Options } from './schema';

export function setupRootOptions(options: Options, host: Tree): void {
  const workspace = getWorkspace(host);
  if (!options.project) {
    options.project = Object.keys(workspace.projects)[0];
  }
  const project = workspace.projects[options.project];

  if (options.dirName == undefined) {
    options.dirName = 'root-module';
  }

  if (options.path === undefined) {
    const projectDirName =
      project.projectType === 'application' ? 'app' : 'lib';

    options.path = `/${project.root}/src/${projectDirName}/${options.dirName}`;
  }

  const parsedPath = parseName(options.path, options.dirName);
  options.dirName = parsedPath.name;
  options.path = parsedPath.path;
}
