export type PropsStack = {
    stackLogin: undefined;
    stackHome: undefined;
    stackHomeAdmin: undefined;
    stackCadastrar: undefined;
    stackAnimaisCadastrados: undefined;
    stackChat: undefined;
    stackAnimaisAdotados: undefined;
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