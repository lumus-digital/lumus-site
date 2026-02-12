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
        path: 'app/pages/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/page/page.hbs',
      },
      {
        type: 'add',
        path: 'app/pages/{{pascalCase name}}/index.tsx',
        templateFile: 'plop-templates/index.hbs',
      },
      {
        type: 'add',
        path: 'app/pages/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'plop-templates/page/stories.hbs',
      },
      {
        type: 'add',
        path: 'app/pages/{{pascalCase name}}/types.ts',
        templateFile: 'plop-templates/page/types.hbs',
      },
      {
        type: 'add',
        path: 'app/test/pages/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
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
        path: 'app/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/component/component.hbs',
      },
      {
        type: 'add',
        path: 'app/components/{{pascalCase name}}/index.tsx',
        templateFile: 'plop-templates/index.hbs',
      },
      {
        type: 'add',
        path: 'app/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'plop-templates/component/stories.hbs',
      },
      {
        type: 'add',
        path: 'app/components/{{pascalCase name}}/types.ts',
        templateFile: 'plop-templates/component/types.hbs',
      },
      {
        type: 'add',
        path: 'app/test/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
        templateFile: 'plop-templates/component/spec.hbs',
      },
    ],
  })
}
