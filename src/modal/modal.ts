export interface IAppState {
  value: string,
  arrayCards: ({
    content: string,
    id: string,
  })[],
}

export interface IHeaderProps {
  title: string,
  clickBtn: () => void,
}

export interface IFormProps {
  title: string,
  callbackSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>,
  callbackChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
  value: string,
}

export interface ICardsProps {
  children?: React.ReactNode, 
  arrayCards: ({
    content: string,
    id: string,
  })[], 
  callback: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void>,
}

export interface IItemCardProps {
  content: string, 
  id: string, 
  clickDelete: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void>,
}
