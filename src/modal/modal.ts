export interface IAppState {
  value: string,
  update: boolean,
  arrayCards: ({
    content: string,
    id: string,
  })[],
}

export interface IHeaderProps {
  title: string,
  clickBtn: (event: React.ClipboardEvent<HTMLDivElement>) => Promise<void>,
}

export interface IFormProps {
  title: string,
  callbackSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>,
  callbackChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
  value: string,
}

export interface ICardsProps {
  children: React.ReactNode, 
  arrayCards: ({
    content: string,
    id: string,
  })[], 
  callback: (event: React.ClipboardEvent<HTMLDivElement>) => Promise<void>,
}

export interface IItemCardProps {
  content: string, 
  id: string, 
  clickDelete: (event: React.ClipboardEvent<HTMLDivElement>) => Promise<void>,
}
