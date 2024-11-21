export type PropsStack = {
    stackLogin: undefined;
    stackHome: undefined;
    stackCadastrar: undefined;
  }
  
  export type PropsTabs = {
    TabHome: undefined,
    TabsProfile: undefined,
    TabsSettings: undefined,
  }
  
  declare global {
    namespace ReactNavigation {
      interface RootParamList extends PropsStack {}
      interface RootParamList extends PropsTabs {}
    }
  }