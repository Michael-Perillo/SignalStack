import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Main documentation sidebar following Diátaxis framework
  docsSidebar: [
    {
      type: 'doc',
      id: 'README',
      label: 'Welcome',
    },
    {
      type: 'category',
      label: '📖 Explanation',
      collapsed: false,
      items: [
        'explanation/overview',
        'explanation/using-signalstack',
      ],
    },
    {
      type: 'category',
      label: '📚 Reference',
      collapsed: false,
      items: [
        'reference/the-matrix',
        'reference/facts',
        'reference/narratives',
        'reference/playbooks',
        'reference/signals',
      ],
    },
    {
      type: 'category',
      label: '🛠️ How-to Guides',
      collapsed: true,
      items: [
        'how-to/README',
      ],
    },
    {
      type: 'category',
      label: '🎓 Tutorials',
      collapsed: true,
      items: [
        'tutorials/README',
      ],
    },
  ],
};

export default sidebars;