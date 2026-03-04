module.exports = function (plop) {
  plop.setGenerator('page', {
    description: 'Create a new page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Page name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'app/{{kebabCase name}}/page.tsx',
        templateFile: 'plop-templates/page/page.hbs',
      },
      {
        type: 'add',
        path: 'app/{{kebabCase name}}/stories.tsx',
        templateFile: 'plop-templates/page/stories.hbs',
      },
      {
        type: 'add',
        path: 'app/{{kebabCase name}}/types.ts',
        templateFile: 'plop-templates/page/types.hbs',
      },
      {
        type: 'add',
        path: 'test/pages/{{kebabCase name}}/{{kebabCase name}}.spec.tsx',
        templateFile: 'plop-templates/page/spec.hbs',
      },
    ],
  })
  // modify the component generator to be able to choise existent pages for pages components
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'plop-templates/component/component.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/stories.tsx',
        templateFile: 'plop-templates/component/stories.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/types.ts',
        templateFile: 'plop-templates/component/types.hbs',
      },
      {
        type: 'add',
        path: 'test/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
        templateFile: 'plop-templates/component/spec.hbs',
      },
    ],
  })
}
