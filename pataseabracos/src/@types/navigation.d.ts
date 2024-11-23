export type PropsStack = {
    stackLogin: undefined;
    stackHome: undefined;
    stackCadastrar: undefined;
    stackAnimaisCadastrados: undefined;
    stackChat: undefined;
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