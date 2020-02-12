import { Extension, MenuData } from 'tiptap';
import { MenuBtnView } from '../types';
import CommandButton from '../components/MenuCommands/CommandButton.vue';
import { createIndentCommand, IndentProps } from '../utils/indent';
import { t } from '../i18n/index';

export default class Indent extends Extension implements MenuBtnView {
  get name () {
    return 'indent';
  }

  get defaultOptions () {
    return {
      minIndent: IndentProps.min,
      maxIndent: IndentProps.max,
    };
  }

  commands () {
    return {
      indent: () => createIndentCommand(IndentProps.more),
      outdent: () => createIndentCommand(IndentProps.less),
    };
  }

  keys () {
    return {
      Tab: createIndentCommand(IndentProps.more),
      'Shift-Tab': createIndentCommand(IndentProps.less),
    };
  }

  menuBtnView ({ commands }: MenuData) {
    return [
      {
        component: CommandButton,
        componentProps: {
          command: commands.indent,
          icon: 'indent',
          tooltip: t('editor.extensions.Indent.buttons.indent.tooltip'),
        },
      },
      {
        component: CommandButton,
        componentProps: {
          command: commands.outdent,
          icon: 'outdent',
          tooltip: t('editor.extensions.Indent.buttons.outdent.tooltip'),
        },
      },
    ];
  }
}
