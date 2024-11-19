export type PropsStack = {
    StackLogin: undefined;
    StackHome: undefined;
  }
  
  export type PropsTabs = {
    TabsHome: undefined,
    TabsProfile: undefined,
    TabsSettings: undefined,
  }
  
  declare global {
    namespace ReactNavigation {
      interface RootParamList extends PropsStack {}
      interface RootParamList extends PropsTabs {}
    }
  }