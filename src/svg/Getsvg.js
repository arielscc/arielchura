import { Css } from './Css';
import { Emacs } from './Emacs';
import { Figma } from './Figma';
import { Git } from './Git';
import { Html } from './Html';
import { Inkscape } from './Inkscape';
import { Javascript } from './Javascript';
import { Jest } from './Jest';
import { Laravel } from './Laravel';
import { Mongo } from './Mongo';
import { Mysql } from './Mysql';
import { Photoshop } from './Photoshop';
import { Php } from './Php';
import { PostgreSql } from './PostgreSql';
import { Reactjs } from './Reactjs';
import { Tailwind } from './Tailwind';
import { Terminal } from './Terminal';
import { Vscode } from './Vscode';
import { Vue } from './Vue';

export const Getsvg = (item = '') => {
  const svgs = {
    Css: <Css />,
    Emacs: <Emacs />,
    Figma: <Figma />,
    Git: <Git />,
    Html: <Html />,
    Inkscape: <Inkscape />,
    JavaScript: <Javascript />,
    Jest: <Jest />,
    Laravel: <Laravel />,
    Mongo: <Mongo />,
    Mysql: <Mysql />,
    Photoshop: <Photoshop />,
    Php: <Php />,
    ReactJs: <Reactjs />,
    TailwindCss: <Tailwind />,
    Terminal: <Terminal />,
    VSCode: <Vscode />,
    VueJs: <Vue />,
    PostgreSql: <PostgreSql />,
  };
  return svgs[item];
};
